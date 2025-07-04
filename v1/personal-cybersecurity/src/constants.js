// This will set the base url for the backend to be local host if it is running locally
// and set it to the live production backend url if not running on local host
// any calls made to the backend will want to import the BACKEND_URL from this file and use it with the path desired
//
// EX: axios.post(`${BACKEND_URL}/typeorm/auth`, formData, { withCredentials: true });

const hostname = window.location.hostname
export let BACKEND_URL
if (hostname === "localhost" || hostname === "127.0.0.1") {
    BACKEND_URL="http://localhost:3001"
} else  {
    BACKEND_URL="https://lcc-backend.milkonthefloor.com"
}
