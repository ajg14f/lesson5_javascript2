function calculateCurrency(){
        /***********************************************************************************************  
        *   Purpose of the calculateCurrency method:  
        *   This method is executed when the 'Calculate' button is clicked.  This method 
        *   gets the values the user enters into the textfield and dropdown menu using the 
        *   document.getElementById().value method, calculates the exchange rate for the selected country
        *   and displays the calculations in the HTML document using the getElementById() method.
        ***********************************************************************************************/


        /*******************************************************************************
         * Task 2:  DECLARE VARIABLES: 
         * 
         *          A few variables have been declared for you already:  exchangeRate,
         *          usdAmount, and country.  You will need to declare addional variables.
         *          Please use the existing variables as you complete the assignment.         
         *          
         *          You will neeed to declare variables for EACH country and assign each
         *          to that country's exchange rate. Also, declare other variables
         *          as needed!
         * 
         *          **Please review and use the existing variables!!**
         * 
         * HINT:    var AUD = 1.40885;  //declares Australian Dollar and assigns it to 
         *                              //that country's exchange rate.
         * 
         *                       INSERT YOUR CODE BELOW!
        *******************************************************************************/
        
        //This variable stores the result of the calculation
        var exchangeRate;
         
        //This variable stores the value retrieved from the textfield.
        var usdAmount = document.getElementById("usdAmount").value;
        
        
        //This variable stores the country the user selects from the dropdown menu.
        var country = document.getElementById("country").value;
        
        //This variable set the selected country name for printing purposes.
        var countryName;
        
        //Complete this section to declare a variable and initialize the variable
        //to the exchange rate for each country
        //USE THE TABLE PROVIDED FOR VALUES!!!
        var AUD = 1.40885; //exchange rate for Austrialian Dollar
        var AWG = 1.78511; //exchange rate for Arubian Florin
        var BSD = 1.0000; //exchange rate for Bahamian Dollar
        var XBT = 0.00015; //exchange rate for Bitcoin
        var GBP = 0.76826; //exchange rate for British Pound
        var CAD = 1.30976; //exchange rate for Canadian Dollar
        var CLP = 683.205; //exchange rate for Chilean Pesso
        var CNY = 6.93780; //exchange rate for Chinese Yuan Renminini
        var CUP = 25.0000; //exchange rate for Cuban Peso
        var DKK = 6.49079; //exchange rate for Danish Krone
        var EUR = 0.87007; //exchange rate for Euro
        var EGP = 17.8726; //exchange rate for Egyptian Pound
        var HKD = 7.83955; //exchange rate for Hong Kong Dollar
        var IRR = 42000; //exchange rate for Iranian Rial
        var NGN = 361.969; //exchange rate for Nigerian Naira

         
         
         
         
        
        /*******************************************************************************************
         * Task 3:  Calculate the exchange rate for each country using a selection statement.
         *          You are allowed to use either an if/else-if statement or a switch statement.
         *          In order to calculate the exchange rate, multiply the USD dollars by the 
         *          currency rate for that country (see example below).  
         * 
         *          Also, set the country name in each branch/case in the selection statement.
         * 
         * Hint 1: 
         *          Assume the user wants to convert 150.00 USD to Euros.  How is this calculated?
         * 
         *          Math statement:  150.00 USD  *   0.87007 (exchange rate for Euro)  =  130.510 
         * 
         *          JavaScript statement:  exchangeRate = usdAmount * EURO;
         * 
         * Hint 2:
         *          To set the country name, set the variable countryName to the abbreviation for
         *          that country.  This needs to be done in each braching statement.
         * 
         *          Ex.  countryName = "AUD";
         * 
         * 
         *                               INSERT YOUR CODE BELOW!
        *********************************************************************************************/
         
         //Calculate the exchange rate and set the country prefix using a selection statement

        switch (country) {
            case "0": {
                exchangeRate = usdAmount * AUD;
                countryName = "AUD";
                break;
            }
                
            case "1": {
                exchangeRate = usdAmount * AWG;
                countryName = "AWG";
                break;
            }
                
            case "2": {
                exchangeRate = usdAmount * BSD;
                countryName = "BSD";
                break;
            }
                
            case "3": {
                exchangeRate = usdAmount * XBT;
                countryName = "XBT";
                break;
            }
                
            case "4": {
                exchangeRate = usdAmount * GBP;
                countryName = "GBP";
                break;
            }
                
            case "5": {
                exchangeRate = usdAmount * CAD;
                countryName = "CAD";
                break;
            }
                
            case "6": {
                exchangeRate = usdAmount * CLP;
                countryName = "CLP";
                break;
            }
                
            case "7": {
                exchangeRate = usdAmount * CNY;
                countryName = "CNY";
                break;
            }
                
            case "8": {
                exchangeRate = usdAmount * CUP;
                countryName = "CUP";
                break;
            }
                
            case "9": {
                exchangeRate = usdAmount * DKK;
                countryName = "DKK";
                break;
            }
                
            case "10": {
                exchangeRate = usdAmount * EUR;
                countryName = "EUR";
                break;
            }
                
            case "11": {
                exchangeRate = usdAmount * EGP;
                countryName = "EGP";
                break;
            }
                
            case "12": {
                exchangeRate = usdAmount * HKD;
                countryName = "HKD";
                break;
            }
                
            case "13": {
                exchangeRate = usdAmount * IRR;
                countryName = "IRR";
                break;
            }
                
            case "14": {
                exchangeRate = usdAmount * NGN;
                countryName = "NGN";
                break;
            }
                
        }







          
        /**********************************************************************************************
         * Task 4:  PRINT THE CURRENCY EXCHANGE RATE INFORMATION TO THE HTML DOCUMENT: 
         * 
         *          Use the document.getElementById() to select the placeholder where
         *          the currency exchange rate will be displayed.  The id for the placeholder
         *          is:  "currencyExchangeInfo".  Use the innerHTML property to write
         *          to the placeholder located in the index.html file.  Lastly,
         *          assign this statement to the USD amount and the country's exchange rate.
         * 
         * HINT:    document.getElementById("currencyExchangeInfo").innerHTML = FINISH THIS STATEMENT!
         * 
         *                                INSERT YOUR CODE BELOW!
        ***********************************************************************************************/                                                                                                               

        document.getElementById("currencyExchangeInfo").innerHTML = "Selling $" + parseFloat(usdAmount).toFixed(2) + " ===> Buying $" + exchangeRate.toFixed(2);
        





      
}//end of calculateCurrency function  


             
function clearButton () {
        /***********************************************************************************************  
        *   Purpose of the clearButton() method:  
        *          This section of the code removes the results from the HTML page when the 'Clear Calculator' button
        *          is clicked.  The getElementById() method is used to find the element on the HTML page with 
        *          the specified id and overwrite the existing values with the empty string ("") or a set value.  
        *          This clears out the results.
        ***********************************************************************************************/

        /*************************************************************************************************************
        * Task 5:  Add the additional code needed to remove the calculation results displayed on the HTML page AND
        *          removes the text from the textfield.
        * 
        *          Use the code below and the code from Lesson 4 Assignment for guidance on how to complete this section.  
        * 
        * Explanation of Code:  
        *          This section of the code removes the results from the HTML page when the 'Clear Calculator' button
        *          is clicked.  The getElementById() method is used to find the element on the HTML page with 
        *          the specified id and overwrite the existing values with the empty string ("") or a set value.  
        *          This clears out the results.
        * 
        * HINT:    document.getElementById("currencyExchangeInfo").innerHTML = FINISH THIS STATEMENT!
        *          document.getElementById("usdAmount").value = FINISH THIS STATEMENT!
        * 
        *                                INSERT YOUR CODE BELOW!
        *************************************************************************************************************/            
                
        //This code resets the dropdown menu to "Australian Dollar (AUD)".
        document.getElementById("country").value = "0";
        
        //Remove the text from the textfield
        document.getElementById("usdAmount").value = "";
        
        
        //Remove the currency exchange information from the document where the id is: "currencyExchangeInfo"
       document.getElementById("currencyExchangeInfo").innerHTML = "" ;

}//end of clearButton function
