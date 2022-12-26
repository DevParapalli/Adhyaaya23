# Workflow

1. Register Page sets up data in the database,
2. user is then redirected to /pg/{rid}/pay, where the payment info is located and setup for payment, once its done the call back is to either redirect to pg/{rid}/success or pg/{rid}/error.
3. In success, the receipt page is shown and a button to print the receipt is shown, printing will create a new full page receipt containing all the data as a HTML page, and when printed will include some QR that can be used to verify the receipt later.

Keeping it this way will allow us to get registrations done fast and quick, without any fuss about accounts, anytime a person wants to view previous registration he/she can check email or enter his email and phone number to check for previous registrations

