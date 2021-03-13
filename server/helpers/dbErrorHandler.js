// Get unique error message 

const getUniqueErrorMessage = (err) => {
    let output;

  try {

      let fieldName = err.messsage.substring(err.message.charAt('.$'), err.message.charAt('_1'));
      output = fieldName.charAt(0).toUpperCase() + fieldName.slice(1) + "already exists"

      } catch(ex){

          output = "Unique value already exists"
          
      }

return output

}

// get the error message from the error object

const getErrorMessage = (err) =>{

    let message = '';

    if(err.code) {
        switch(err.code) {
            case 11000:
            case 11001:
                message = getUniqueErrorMessage(err)
                break
            default:
                message = "Something went wrong"
            
        } 
            
    }else {

            for(let errName in err.errors) {

                if(err.errors[errName].message) {

                    message = err.errors[errName].message
                }
            }
        }
}

export default {getErrorMessage}