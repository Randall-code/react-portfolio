function UserInfo({user}) {
    return(
      <div className="flex flex-row justify-between">
        <div className="flex flex-col divide-y basis-5/12 justify-center">
          <div className="bg-slate-700 divide-y">
            <h1 className=""> {user.login}</h1>
            <h1 className=""> {user.name}</h1>
            <h1 className=""> {user.location}</h1>
          </div>
          
        </div>
        
        <div className="flex justify-center basis-5/12">
          <img className="rounded-full outline outline-offset-2 outline-white my-2" src={user.avatar_url}/>
        </div>
        
        

      </div>
    );
  }

export default UserInfo;