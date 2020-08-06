# Angularjwt AdminPanel

is an Angular snippet using Angular Material and jwt auth .

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install Dependencies .

```bash
npm install 
```

## Usage

change user and password in 
the route helpers/fake_backend 

```angular
   const users: User[] = [
            { id: 1, username: 'admin', password: 'test', firstName: 'Admin', lastName: 'User' }
        ];
```


to run the project use the command 

```angular
ng serve --open
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://github.com/razor11/AngularjwtAuth-adminPanel/blob/master/LICENSE)