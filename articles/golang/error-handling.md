# Error Handling in golang, the neat way!

I've seen lot's of developers in the golang community, especially who were latley moved to work with it because of its simplicity, making some quick judgment on how things should be treated in golang. 
One of these things is error handling. As most of the language current devs are coming from OOP background, and they are used to deal with exceptions, or let's say the concept of "throwing" an exception to stop the current flow of the application, and they mostly think this is the way to go in golang too, we have to stop the flow of our application in case something went wrong. 
Well they are wrong!

## Do not just `exit`, but propagate your `error`s

### Do not abuse the `os.exit`

I've seen it a lot and I used to do it as well. Just `os.exist(1)` whenever something unexpectedly happened and move on. Well, that's not the right way to go with go!

I can see why this is widely used, as most of the early golang applications were just terminal tools, and as so many of these tools used to be built using `.sh` executable where we used to just `exit 1;` to indicat that something unexpected just happened and we want to exit. We carried this habbit along to our golang simple terminal applications and then to the complicated ones, it's just another cargo cult programming thing.
I heighly encourge you to **do that very carefully in case you have to**, as it is:

- Very hard to maintain as your application grows.
- Most importantly, it's imposible to unit test such code which obviously indicates its uncleanness.
- Exiting in such way will prevent the execution of any deferred operations you have, your program will terminate immeditatly, and this may lead to resource leaks. Consider this for example:
```go
func main() {
	dbConnection := db.connect("...")
	defer dbConnection.Close() // this deferred operation will never be executed! the connection will stay open

	entity := Entity{}
	err := dbConnection.Save(entity)
	if err != nil {
		os.Exist(1)
	}
}
```

### `error`s are just values in Go! You are supposed to propagate them

Error is just a type in golang, and it has its own interface which you can use to customize your own application's error, as long as it is implementing the native error interface:
```go
type error interface {
	Error() string
}
```

For example we can consider having our own application error type:
```go
type AppErr struct {
	msg string
	code int
	trace string
}

func (e AppErr) Error() string {
	return fmt.Sprintf("Msg: %s, code: %d, trace:\n %s", e.msg, e.code, e.trace)
}

func NewAppErr(msg string, code int) AppErr {
	stackSlice := make([]byte, 512)
	s := runtime.Stack(stackSlice, false)
	
	return AppErr{msg, code, fmt.Sprintf("\n%s", stackSlice[0:s])}
}
```

And we have such a use case inside an `admin` package:
```go
package admin

func A() error {
	return b()
}

func b() error {
	return NewAppErr("error from b function!", 3)
}
```

And our `main.go` is:
```go
func main() {
	err := admin.A()

	fmt.Println(err)
}
```

The logged error message will be:

```shell
Msg: error from b function!, code: 3, trace:
 
goroutine 1 [running]:
github.com/...my-app.../cmd/app/error.NewAppErr({0x1fa2c0, 0x16}, 0x3)
        ...local-my-app.../cmd/app/error/error.go:16 +0x67
github.com/...my-app.../cmd/app/admin.b(...)
        ...local-my-app.../cmd/app/admin/admin.go:12
github.com/...my-app.../cmd/app/admin.A(...)
        ...local-my-app.../cmd/app/admin/admin.go:8
main.main()
        ...local-my-app.../cmd/app/main.go:10 +0x3d
```

It's up to you to use the trace or not. As you can see it may have some usefull, but maybe too much, information for your debugging purposes, so you can consider switching it off for specific enviroments.
Now, what you must consider is to propagate your errors through out your code till the point of execution where things need to diverge in case of error. For example, validation errors:


-----------------------> @TODO find a better example!!
```go
// order.go
const (
	EmptyOrderNumber = "empty order number"
	UnableToShipToCountry = "unable to ship order to the requested country"
)

func NewOrderFromRequest(o OrderRequest) (Order, error) {
	if o.Number == nil {
		return error.New(EmptyOrderNumber)
	}

	if o.ShippingAddress.Country != "DE" {
		return error.New(UnableToShipToCountry)
	}

	// ... the creation logic
	return Order{...}, nil
}

// http.go
http.HandleFunc("/order", func (w http.ResponseWriter, r *http.Request) {
	order, validationError := order.NewOrderFromRequest(r)
	if validationError != nil {
		// different behaviour based on the error type
		switch {
			case errors.Is(validationError, order.EmptyOrderNumber):
				return handleEmptyOrderNumber(w, r)
			case errors.Is(validationError, order.UnableToShipToCountry):
				return handleUnshippableOrder(w, r)
		}
	}

	// ... 
})

```

In case of error that needs to shut down the application and exit, propagate such error to the entry point of execution, which is the `main()` function, there is the idiomatic point of your application termination. It's the maintanable way.

## Do not `panic`, but consider `recover`

Golang has the concept of `panic` which is basically similar to throwing an exception in the conventional oop languages. However, in golang **it is not idiomatic to use panic**, why?
