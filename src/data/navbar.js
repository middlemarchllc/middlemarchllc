var navbar = [
  {
    'name': 'Home',
    'endpoint': 'home'
  },
  {
    'name': 'Our Firm',
    'endpoint': 'firm',
    'children': [
      {
        'name': 'Merchant Banking',
        'endpoint': 'merchantbanking',
      },
      {
        'name': 'Private Capital',
        'endpoint': 'privatecapital',
      }
    ]
  },


];

export {navbar};