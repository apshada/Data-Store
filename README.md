# Data-Store
## Requirements

* Node 8
* Git
* Contentful CLI (only for write access)

## Common setup

Clone the repo and install the dependencies.

```bash
git clone https://github.com/apshada/Data-Store.git
cd Data-Store
```

```bash
npm install
```

## Steps for read-only access

To start the express server, run the following

```bash
nodemon server.js
```

Open [http://localhost:5000](http://localhost:5000) and take a look around.

1.	Open postman for executing create, read and delete a data in and from a JSON file.
2.	POST method(http:localhost:5000/create)
3.	GET method(http:localhost:5000/read/key)  eg:key=key1(string)
4.	GET method(http:localhost:5000/delete/key)
```
{
"key1" :
    {"name":"Aditya",
      "age":20,
      "Ttl":1110067
    }

}
```

