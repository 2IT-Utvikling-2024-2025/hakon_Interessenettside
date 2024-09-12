
const user = {
    name: 'Håkon',
    imageUrl: 'https://media.discordapp.net/attachments/1276064154708480053/1278640517885984871/image.png?ex=66d18a47&is=66d038c7&hm=5c323cba85a389baf5f52472e06ce6947345f4de87fcb47aaed6fbc4a5f75bd7&=&format=webp&quality=lossless&width=693&height=587',
    imageSize: 300,
}; 


export default  function Profile() {
  

    return (
       <>
       <h1>{user.name}</h1>

       <img
        className='avatar'
        src={user.imageUrl}
        alt={'Photo of' + user.name}
        style={{

            width: user.imageSize,
            height: user.imageSize
        }}
       />
     </>  
 ); 
}