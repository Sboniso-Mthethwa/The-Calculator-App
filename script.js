 //Boolean variable deternines if the next thing the user types isshould be on anew line or not
            var newline=true; 
            var value1;
            var value2;
            var curentOperator;

            //Function to handle the digit button presses
            function digitBtnPressed(button){

                if(newline){
                    document.getElementById("inputBox").value = button;
                    newline = false;
                } else {
                    var currentValue = document.getElementById("inputBox").value;
                    document.getElementById("inputBox").value =currentValue+ button;
                }
            }

            //Event handler for the AC button to clear the input box
            function btnACPressed(){
                document.getElementById("inputBox").value = "0";
                newline = true;
            }

            //Event handler to handle the delete button
            function btnDelPressed(){
                var currentValue = document.getElementById("inputBox").value;
                if(currentValue.length > 1){
                    document.getElementById("inputBox").value = currentValue.slice(0, -1);
                } else {
                    document.getElementById("inputBox").value = "0";
                }
                newline = true;
            }

            //Function to handle the operator button presses
            function operatorBtnPressed(operator){
                curentOperator = operator; 
                value1 = parseInt(document.getElementById("inputBox").value);
                newline = true;
            }

            //Function to handle the equals button press while doing the calculation
            function equalsBtnPressed(){
                value2 = parseInt(document.getElementById("inputBox").value);
                var result;
                switch(curentOperator){
                    case '+':
                        result = value1 + value2;
                        break;
                    case '-':
                        result = value1 - value2;
                        break;
                    case '*':
                        result = value1 * value2;
                        break;
                    case '/':
                        result = value1 / value2;
                        break;
                    default:
                        result = "Error";
                }
                document.getElementById("inputBox").value = result;
                value1=0;
                newline = true;
            }
