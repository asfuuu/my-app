function Profile (props)
 {
  console.log(props)
  return (
    <div>
      <h1>Hello Profile component</h1>
      <h2>Function components of react</h2>
      <h3>hello {props.name}</h3>
      <h4>{props.Email}</h4>
    </div>
  )
}

export default Profile;
