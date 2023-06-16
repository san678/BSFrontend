import React from 'react'

export default function ViewUser() {

    const [user,setUser]=useState({
        name:"",
        username:"",
        email:"",
    });

    const {id}=useParams();

    useEffect(() => {
        loadUser();
    },[]);

    const loadUser=async(e)=>{
        const result=await axios.get(`http://localhost:8080/user/${id}`);   
        setUser(result.data);
    };

  return (
    <div className='container'>
        <div className="row">
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                <h2 className="text-center m-4">User Detail</h2>

                <div classname="card">
                    <div className="card-header">
                        Details of user id:{user.id}
                        <ul className="list-group-flush">
                            <li className="list-group-item">Name:{user.name}</li>
                            <li className="list-group-item">User Name:{user.username}</li>
                            <li className="list-group-item">Email:{user.email}</li>
                        </ul>
                    </div>
                </div>
                <Link className='btn btn-primary my-2' to="/">Back to Home</Link>
            </div>
        </div>
    </div>
  );
}
