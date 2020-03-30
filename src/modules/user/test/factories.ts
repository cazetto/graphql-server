export let minimumValidUser = () => ({
  firstName: 'John',
  userName: 'japplsd',
  email: 'john@applsd.com',
  password: 'kjft*xfda!123'
});

export let completeValidUser = () => ({
  firstName: 'John',
  lastName: 'Applesed',
  userName: 'japplsd',
  email: 'john@applsd.com',
  password: 'kjft*xfda!123',
  gender: 0,
  creditCards: [
    {
      name: 'John Applesed',
      number: '4031781367532785',
      cvv: '791'
    }
  ]
});

export let letWrongPasswordUser = () => ({
  ...minimumValidUser(),
  password: 'jo'
});

export let letWrongUsernameUser = () => ({
  ...minimumValidUser(),
  userName: 'j'
});
