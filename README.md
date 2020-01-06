# Back-End Gigapet

### API Url  https://build-gigapet.herokuapp.com


## Endpoints Table 

| Type    | EndPoints  |
| ------- |:---------:|
| Post [register]   | /api/auth/register |
| Post [login]      | /api/auth/login |
| Delete   [User]   |/api/auth/:id |

***

## Register

 - https://build-gigapet.herokuapp.com/api/auth/register

### input

```
	"name": "test3",             [required]
	"email": "test3@gmail.com",
	"password": "test3"          [required]
```

### output
```
{
  "user": {
    "id": 5,
    "name": "test3",
    "email": "test3@gmail.com"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoidGVzdDMiLCJpYXQiOjE1NzgyODcxMDgsImV4cCI6MTU3ODMxOTUwOH0.k5yylRSVKTQExI1SuFydosuSMPSz27TBg4mATjfRxXQ"
}

```

***
## Login

- https://build-gigapet.herokuapp.com/api/auth/login

### input

```
	"name": "test3",             [required]
	"password": "test3"          [required]
```

### output
```
  "message": "Welcome back jack",

  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiamFjayIsImlhdCI6MTU3ODI4NjExNywiZXhwIjoxNTc4MzE4NTE3fQ.nw9tthfttnJbflqi-3Zip8_VbDGRcH37HE0UnQfrSdA"
```

***

## Delete User

- https://build-gigapet.herokuapp.com/api/auth/:id

### output 

```
	"message": "you are not login"
```