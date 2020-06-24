export default class AuthServices{
    isLogged = async()=>{
        try{
            const response = await fetch('/api/user', {
                credentials: 'include'
            });
            const body = await response.text();

            if(response.status === 404){
                return {status:"failure",description:"This account is not enabled to access the application - Please contact an administrator",data:null} ;
            }

            if(response.status === 500){
                return {status:"failure",description:"Server Connection Error - Status: 500",data:null} ;
            }

            if (body === '') {
                return {status:"not-logged",description:"",data:null}
            }else{
                return {status:"success",description:"",data:JSON.parse(body)}
            }
        }catch(e){
            console.error(e);
            return {status:"failure",description:"Server Connection Error - Status: 500"} ;
        }
    }

    logout = async(csrfToken)=>{
        const response = await  fetch('/api/logout', {method: 'POST', credentials: 'include',
        headers: {'X-XSRF-TOKEN': csrfToken}})

        if(response.status === 200){
            window.location.href = window.location.origin;
        }
    }
}
