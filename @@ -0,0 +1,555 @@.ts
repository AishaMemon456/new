@@ -0,0 +1,555 @@
<html>
  <head>
    <title>Class work | Home Work | test server change</title>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script src="js/react-dev.js"></script>
    <script src="js/react-dom.js"></script>
    <script src="tailwindcss.js"></script>
    <!-- Assignment react todo app through cdn using redux, redux state management tool it stores your data in localstorage-->
    <!-- Reference Link mentioned below -->
    <!-- https://gist.github.com/erspark2002/0ea49cc782049df5f3de271ba9ff41e1 -->
    <script>
      tailwind.config = {
        theme: {
          extend: {
            colors: {
              blue: {
                DEFAULT: "#353887",
                50: "#9C9ED8",
                100: "#8D90D2",
                200: "#7073C7",
                300: "#5256BB",
                400: "#4144A4",
                500: "#353887",
                600: "#25275F",
                700: "#151736",
                800: "#06060E",
                900: "#000000",
                950: "#000000",
              },
              red: {
                DEFAULT: "#CF2E39",
                50: "#FEFBFB",
                100: "#F9E4E6",
                200: "#EFB6BA",
                300: "#E5898F",
                400: "#DA5B63",
                500: "#CF2E39",
                600: "#A9262F",
                700: "#841D24",
                800: "#5E151A",
                900: "#390D10",
                950: "#26080A",
              },
              white: {
                DEFAULT: "#E8E8E8",
                50: "#FFFFFF",
                100: "#FCFCFC",
                200: "#F7F7F7",
                300: "#F2F2F2",
                400: "#EDEDED",
                500: "#E8E8E8",
                600: "#CCCCCC",
                700: "#B0B0B0",
                800: "#949494",
                900: "#787878",
                950: "#6A6A6A",
              },
              black: {
                DEFAULT: "#0F0F0F",
                50: "#6B6B6B",
                100: "#616161",
                200: "#4D4D4D",
                300: "#383838",
                400: "#242424",
                500: "#0F0F0F",
                600: "#0A0A0A",
                700: "#050505",
                800: "#000000",
                900: "#000000",
                950: "#000000",
              },
              seaGreen: {
                DEFAULT: "#31A24C",
                50: "#A6E4B5",
                100: "#97DFA8",
                200: "#77D68E",
                300: "#58CD74",
                400: "#3AC15B",
                500: "#31A24C",
                600: "#247738",
                700: "#174C24",
                800: "#0A210F",
                900: "#000000",
                950: "#000000",
              },
            },
          },
        },
      };
    </script>
  </head>

  <body className="bg-white-50 flex flex-col text-blue-900 h-svh">
    <div id="AppComponent"></div>
  </body>
  <script
    src="https://unpkg.com/@babel/standalone@7.10.3/babel.min.js"
    crossorigin
  ></script>
  <script type="text/babel" data-presets="react,stage-3">
     // Define a React functional component
     const Example = () => {
      const [count, setCount] = React.useState(0);
      React.useEffect(() => {
        document.title = `You clicked ${count} times`;
      });
      return (
        <div>
          <p>You clicked {count} times</p>
          <button onClick={() => setCount(count + 1)}>
            Click me
          </button>
        </div>
      );
    };

    // style becomes object, its not a string anymore, if it is string your application will not render
    // example
    // <div style='width:30px; heigh:30px'> this will not render in react
    // <div style={{'width':30px, 'flexDirection':30px}}

    // class becomes className, it will remain string
    //example
    // <div class="px-2 py-2 w-10"> this will not render
    // <div className="px-2 py-2 w-10">

    const ProductBox = () => {
        const products = [
            {
                id: 1,
                name: 'water bottle',
                description: 'color: blue size: large',
                price: 100,
                discounted_price: 99,
            },
            {
                id: 2,
                name: 'mouse',
                description: 'wired usb port',
                price: 250,
                discounted_price: 199,
            },
            {
                id: 3,
                name: 'watch',
                description: 'color: black, watch type: smart, brand: apple',
                price: 5000,
                discounted_price: 4999,
            },
            {
                id: 4,
                name: 'infinix s23',
                description: 'color blue, storage: 120gb ram: 2gb display: 6x4',
                price: 25000,
                discounted_price: 24999,
            },
            {
                id: 5,
                name: 'shoes',
                description: 'size: 8, color blue, type: sports wear',
                price: 3000,
                discounted_price: 3000,
            },
        ];


        return (
            <>
            {
                products.map((x) => {
                    return (
                        <div className="bg-white-500 text-black-500 p-4 rounded-md shadow-2xl slideDown">
                            <h1 className="font-bold">{ x.name }</h1>
                            <p className="font-medium">{ x.description }</p>

                            <div className="text-seaGreen-500" v-if="x.discounted_price < x.price">
                            <span className="text-red-600 line-through">{ x.price }</span>
                            { x.discounted_price }
                            </div>
                            <div className="text-seaGreen-500" v-else>{ x.price }</div>
                            <div className="">
                            <input type="number" id='"qty"+ x.id' />
                            <button
                                className="bg-blue-400 text-white-200 font-medium rounded-lg w-32 py-1"
                                onClick={()=>{ addToCart(x.id) }}
                            >
                                Add to Cart
                            </button>
                            </div>
                        </div>
                     )
                })
            }
            </>
        )
    }

    const Application = () => {

        const [message, setMessage] = React.useState('Hello React!');
       
        let newMesg = "This is Let";
        const changeMessageValue = (newVal) => {
            setMessage(newVal);
            newMesg = "This has been changed also";
        }

        return (
            <>
                <div className="bg-red-50 p-8">
                    <h1 className="text-blue-500 text-6xl"> { message }</h1>
                    <h1 className="text-blue-500 text-6xl"> { newMesg }</h1>
                    <button onClick={()=>{ changeMessageValue("This has been Changed") }}>
                        Change me please!
                    </button>
                </div>
                <div id='container' className="flex grow flex-column">
                    <div className="w-72 box-border p-8 bg-red-100">
                        <h1 className="text-blue-400 text-2xl">Sidebar</h1>
                    </div>
                    <div id='mainBox' className="flex w-full gap-4">
                        <div className='bg-white-500 text-black-500 p-4 rounded-md shadow-2xl slideDown' style={{width: '30%'}}>
                            <form id='ecommerceForm'
                                style={{ display: "flex", "flexDirection":"column", gap: "4px" }}>
                                <label>Checkout Form</label>
                                <input type='text' name='first_name' required id='first_name' placeholder="Enter you first_name" />
                                <span style={{color: 'red'}} hidden id='taskErrorField-first_name'>This field is required</span>
                                <input type='text' name='last_name' required id='last_name' placeholder="Enter you last_name" />
                                <span style={{color: 'red'}} hidden id='taskErrorField-last_name'>This field is required</span>
                                <input type='tel' name='number' required id='number' placeholder="Enter you phone_number" />
                                <span style={{color: 'red'}} hidden id='taskErrorField-number'>This field is required</span>
                                <textarea id="address" name="address" placeholder="enter your full address"></textarea>
                                <span style={{color: 'red'}} hidden id='taskErrorField-address'>This field is required</span>
                                <input type='email' name='email' required id='email' placeholder="Enter you email" />
                                <span style={{color: 'red'}} hidden id='taskErrorField-email'>This field is required</span>
                                <input type='text' name='postal_code' required id='postal_code'
                                    placeholder="Enter you postal_code" />
                                <span style={{color: 'red'}} hidden id='taskErrorField-postal_code'>This field is required</span>
                                <select id="city" name="city" defaultValue="Karachi">
                                    <option>Karachi</option>
                                    <option>Lahore</option>
                                    <option>Islamabed</option>
                                    <option>Peshawar</option>
                                    <option>Queta</option>
                                </select>
                                <span style={{color: 'red'}} hidden id='taskErrorField-city'>This field is required</span>
                                <select id="country" name="country" defaultValue="Pakistan">
                                    <option>Pakistan</option>
                                </select>
                                <span style={{color: 'red'}} hidden id='taskErrorField-country'>This field is required</span>
                                <div>
                                    <label className="flex gap-2 blue-700">
                                        <input type='radio' name='task' required id='payment_method' defaultChecked={true}
                                            placeholder="Enter you payment_method" />
                                        Cash on Delivery
                                    </label>
                                    <label className="flex gap-2">
                                        <input type='radio' name='task' required id='payment_method'
                                            placeholder="Enter you payment_method" />
                                        Online Payment
                                    </label>
                                </div>
                                <button type='button'  id='submitBtn' className='bg-blue-600 text-white-200 p-2 border-0 hover:bg-blue-700 active:bg-blue-700 rounded-md'>Checkout</button>
                            </form>
                            <div>
                                <label>Cart Details</label>
                                <div id="boxList" style={{ width: "80%", display: "flex", flexDirection: "column", gap: "4px" }}
                                    className="grid-item slideDown">

                                </div>
                            </div>
                        </div>
                        <div id='main' className="p-4 grid grow border-box grid-cols-2 gap-4">
                            <ProductBox />
                        </div>
                    </div>
                </div>
            </>
        )
    }

    const root = ReactDOM.createRoot(document.getElementById("AppComponent"))
    root.render(<Application />);
  </script>
  <script>
    var initialCheckoutForm = {
      first_name: "",
      last_name: "",
      phone_number: 0,
      address: "",
      email: "",
      postal_code: "",
      city: "",
      country: "",
      payment_method: "",
      shipping_details: {
        address: "",
        city: "",
        postal_code: "",
        country: "",
        phone_number: "",
        reciever_name: "",
      },
      total_amount: "",
      cart_details: [],
    };
    var checkoutForm = {
      first_name: "",
      last_name: "",
      phone_number: 0,
      address: "",
      email: "",
      postal_code: "",
      city: "",
      country: "",
      payment_method: "",
      shipping_details: {
        address: "",
        city: "",
        postal_code: "",
        country: "",
        phone_number: "",
        reciever_name: "",
      },
      total_amount: "",
      cart_details: [],
    };
    var products = [
      {
        id: 1,
        name: "water bottle",
        description: "color: blue size: large",
        price: 100,
        discounted_price: 99,
      },
      {
        id: 2,
        name: "mouse",
        description: "wired usb port",
        price: 250,
        discounted_price: 199,
      },
      {
        id: 3,
        name: "watch",
        description: "color: black, watch type: smart, brand: apple",
        price: 5000,
        discounted_price: 4999,
      },
      {
        id: 4,
        name: "infinix s23",
        description: "color blue, storage: 120gb ram: 2gb display: 6x4",
        price: 25000,
        discounted_price: 24999,
      },
      {
        id: 5,
        name: "shoes",
        description: "size: 8, color blue, type: sports wear",
        price: 3000,
        discounted_price: 3000,
      },
    ];
    renderProducts();
    function validateFields() {
      var basicFields = ["first_name", "last_name", "address", "postal_code"];
      const basicValidation = () => {
        var checkValidation = true;
        basicFields.forEach((x) => {
          if (
            document.getElementById(x).value == "" ||
            document.getElementById(x).value == null
          ) {
            checkValidation = false;
            document.getElementById("taskErrorField-" + x).hidden = false;
          } else {
            document.getElementById("taskErrorField-" + x).hidden = true;
          }
        });
        return checkValidation;
      };
      var testBasicValidation = basicValidation();
      if (!testBasicValidation) {
        return false;
      }
      const validatePhoneNumber = (phoneNumber) => {
        const regex = /^(\+92|92|033|03)[ -]*\d{3}[ -]*\d{7}$/;
        return regex.test(phoneNumber);
      };
      if (!validatePhoneNumber(document.getElementById("number").value)) {
        document.getElementById("taskErrorField-number").hidden = false;
        return false;
      } else {
        document.getElementById("taskErrorField-number").hidden = true;
      }
      const validateEmail = (email) => {
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return regex.test(email);
      };
      if (!validateEmail(document.getElementById("email").value)) {
        document.getElementById("taskErrorField-email").hidden = false;
        return false;
      } else {
        document.getElementById("taskErrorField-email").hidden = true;
      }
      if (checkoutForm.cart_details.length == 0) {
        alert("Please add items in your cart first");
        return false;
      }
      return true;
    }
    function sumbitCheckout() {
      debugger;
      const checkForm = validateFields();
      if (checkForm) {
        alert("Thank you for shopping with us");
        checkoutForm = { ...initialCheckoutForm };
        checkoutForm.cart_details = [];
        document.getElementById("ecommerceForm").reset();
        renderCarts();
      }
    }
    function addToCart(product) {
      debugger;
      var currentProduct = products.find((x) => {
        return x.id == product;
      });
      var currentQty =
        document.getElementById("qty" + product).value == "" ||
        document.getElementById("qty" + product).value == null
          ? 1
          : document.getElementById("qty" + product).value;
      cartExistIndex = checkoutForm.cart_details.findIndex((x) => {
        return x.id == product;
      });
      if (cartExistIndex != -1) {
        checkoutForm.cart_details[cartExistIndex].quantity +=
          parseInt(currentQty);
      } else {
        var cartItem = {
          ...currentProduct,
          quantity: currentQty,
        };

        checkoutForm.cart_details.push(cartItem);
      }
      document.getElementById("qty" + product).value = "";
      renderCarts();
    }
    /**
     * This function is used to remove items from cart
     * @params number id
     * return void | null
     */
    function removeItemCart(id) {
      debugger;
      var proIndex = checkoutForm.cart_details.findIndex((x) => {
        return x.id == id;
      });
      checkoutForm.cart_details.splice(proIndex, 1);

      renderCarts();
    }
    function renderCarts() {
      let cartHtml = "";
      var cartDiv = document.getElementById("boxList");
      checkoutForm.cart_details.forEach((x) => {
        var priceBox =
          x.discounted_price < x.price
            ? `<div className='text-seaGreen-500'>
                        <span className='text-red-600 line-through'> ` +
              x.price +
              `</span>
                        ` +
              x.discounted_price +
              `
                    </div>`
            : `<div className='text-seaGreen-500'>
                        ` +
              x.price +
              `
                    </div>`;

        cartHtml +=
          `<div className="box bg-red-50 font-medium text-blue-900">
                    <div style="padding-left:10px; border-radius: 50%; padding-right: 10px; display:flex; justify-content: space-between; align-items: center;">
                        <p >` +
          x.name +
          `</p>
                        ` +
          priceBox +
          `
                        <div>
                            Quantity ` +
          x.quantity +
          `
                        </div>
                        <div>
                            <button className="text-red-500" onclick="removeItemCart(` +
          x.id +
          `)">
                                X
                            </button>
                        </div>
                    </div>
                </div>`;
      });
      cartDiv.innerHTML = cartHtml;
    }
    function renderProducts() {
      let productHtml = "";
      var productDiv = document.getElementById("main");
      products.forEach((x) => {
        var priceBox =
          x.discounted_price < x.price
            ? `<div className='text-seaGreen-500'>
                        <span className='text-red-600 line-through'> ` +
              x.price +
              `</span>
                        ` +
              x.discounted_price +
              `
                    </div>`
            : `<div className='text-seaGreen-500'>
                        ` +
              x.price +
              `
                    </div>`;
        productHtml +=
          `<div className='bg-white-500 text-black-500 p-4 rounded-md shadow-2xl slideDown'>
                    <h1 className='font-bold'>` +
          x.name +
          `</h1>
                    <p className='font-medium'>` +
          x.description +
          `</p>
                    ` +
          priceBox +
          `
                    <div className=''>
                        <input type='number' id='qty` +
          x.id +
          `'/>
                        <button className='bg-blue-400 text-white-200 font-medium rounded-lg w-32 py-1' onclick='addToCart(` +
          x.id +
          `)'>Add to Cart</button>

                    </div>
                </div>`;
      });
    }
  </script>
</html>