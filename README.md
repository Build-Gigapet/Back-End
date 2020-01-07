# Back-End Gigapet

### API Url  https://build-gigapet.herokuapp.com


## Endpoints Table 

| Type    | EndPoints  |
| ------- |:---------:|
| Post [register]   | /api/auth/register |
| Post [login]      | /api/auth/login |
| Get [Users]       | /api/auth/users  |
| Put [User]        | /api/auth/:id |
| Delete   [User]   | /api/auth/:id |
| Get [All Kids]    | /api/kid |
| Get [Kid by ID]   | /api/kid/:id |
| Get [Kid by User] | /api/kid/:id/user|
| Post [Kid]        | /api/kid/:id/user |
| Put [Kid]         | /api/kid/:id |
| Delete [Kid]      | /api/kid/:id |

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
  "message": "Welcome back test3",

  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiamFjayIsImlhdCI6MTU3ODI4NjExNywiZXhwIjoxNTc4MzE4NTE3fQ.nw9tthfttnJbflqi-3Zip8_VbDGRcH37HE0UnQfrSdA"
```
***

## All Users

 - https://build-gigapet.herokuapp.com/api/auth/users

  ```
  [
    {
      "id": 1,
      "name": "newName",
      "email": "newEmail@gmail.com"
    },
    {
      "id": 2,
      "name": "jackey",
      "email": "jackey@gmail.com"
    },
    {
      "id": 3,
      "name": "hipper",
      "email": "hipper@gmail.com"
    },
    {
      "id": 4,
      "name": "erean",
      "email": "erean@gmail.com"
    }
]
  ```

***

## Update User
 - https://build-gigapet.herokuapp.com/api/auth/:id

 ### input
```
"name": "newName"                 [required]
"email": "newName@gmail.com"
```
### output
 
 ```
  {
    "message": "users has been updated"
  }
 ```

***

## Delete User

- https://build-gigapet.herokuapp.com/api/auth/:id

### output 

```

	"message": "3 was removed from project"
```

***

## All kids

 - https://build-gigapet.herokuapp.com/api/kid

 ```
[
  {
    "id": 1,
    "kid_name": "Florence",
    "age": 3,
    "pet_name": "socks",
    "score": 12,
    "height": "94cm",
    "fav_food": "pizza",
    "weight": "23 lbs",
    "parent_id": 1
  },
  {
    "id": 2,
    "kid_name": "Katy",
    "age": 5,
    "pet_name": "Henri",
    "score": 40,
    "height": "107cm",
    "fav_food": "Jalapeno ",
    "weight": "31 lbs",
    "parent_id": 1
  },
  {
    "id": 3,
    "kid_name": "Rachel",
    "age": 4,
    "pet_name": "Henrietta",
    "score": 10,
    "height": "39cm",
    "fav_food": "Cheddar ",
    "weight": "34 lbs",
    "parent_id": 2
  },
  {
    "id": 4,
    "kid_name": "Antonia ",
    "age": 5,
    "pet_name": "Grubby",
    "score": 3,
    "height": "109cm",
    "fav_food": "pancake",
    "weight": "40 lbs",
    "parent_id": 3
  },
  {
    "id": 5,
    "kid_name": "Annabelle",
    "age": 3,
    "pet_name": "Trueworth",
    "score": 29,
    "height": "98cm",
    "fav_food": "Chicken ",
    "weight": "35 lbs",
    "parent_id": 4
  }
]
 ```

 ***

 ## Kids by ID

  - https://build-gigapet.herokuapp.com/api/kid/:id

  ```
    [
      {
        "id": 2,
        "kid_name": "Katy",
        "age": 5,
        "pet_name": "Henri",
        "score": 40,
        "height": "107cm",
        "fav_food": "Jalapeno ",
        "weight": "31 lbs",
        "parent_id": 1
      }
    ]
  ```

***

## Kids by User

 - https://build-gigapet.herokuapp.comapi/kid/:id/user

 ### Note: id has to be the User

 ```
[
  {
    "id": 1,
    "kid_name": "Florence",
    "age": 3,
    "pet_name": "socks",
    "score": 12,
    "height": "94cm",
    "fav_food": "pizza",
    "weight": "23 lbs",
    "parent_id": 1,
    "parent_name": "newName"
  },
  {
    "id": 2,
    "kid_name": "Katy",
    "age": 5,
    "pet_name": "Henri",
    "score": 40,
    "height": "107cm",
    "fav_food": "Jalapeno ",
    "weight": "31 lbs",
    "parent_id": 1,
    "parent_name": "newName"
  }
]

 ```

***
## Add Kid

 - https://build-gigapet.herokuapp.comapi/kid/:id/user

 ### Note : id has to be the User

 ### input
 ```
 {
	"kid_name" : "Lizza",
	"age": 2,
	"pet_name": "fulleye",
	"score": 14,
	"height": "74cm",
	"fav_food": "candy",
	"weight": "19lb"
}
 ```

 ### output

 ```
 {
  "message": "Your Kids has been added",
  "add": {
    "id": 7
  }
}
 ```


***

## Update kid 

 - https://build-gigapet.herokuapp.com/api/kid/:id

### input 
 ```
{
	"kid_name" : "josh",
	"age": 6,
	"pet_name": "pinky",
	"score": 45,
	"height": "115cm",
	"fav_food": "cookie",
	"weight": "40lb"
}
 ```

 ### output

 ```
  {
    "message": "Kids data has been updated"
  }
 ```


***

## Delete Kid

 - https://build-gigapet.herokuapp.com/api/kid/:id

 ### output
 ```
 {
  "message": "The kids has been removed",
  "removed": 1
}
 ```
