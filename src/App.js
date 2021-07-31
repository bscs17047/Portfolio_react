
import './App.css';
import NavbarComp from './Components/Navbar.js'
import CarouselComp from './Components/CarouselComp'
/*
const {google} = require('googleapis')
const CLIENT_ID = '230106792673-pg0st2v62704gldo82df4como1tu4fgq.apps.googleusercontent.com'
const CLIENT_SECRET = 'T5Flh2yKGSPs1Tv6sIozCPvO'
const REDIRECT_URI = 'https://developer.google.com/oauthplayground'
const REFRESH_TOKEN = '1//0474Yfky0O2CKCgYIARAAGAQSNwF-L9IrVjWz-rmcDAJJPVmbi4GhVcIcxqh2ZWPthK-KAqwJACHhxl9n1QSHjyOaSLCqfi58crI'
const oauth2client= new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
)

oauth2client.setCredentials({refresh_token: REFRESH_TOKEN})
const drive = google.drive({
  version : 'v3',
  auth :oauth2client
})

async function generatePublicURL () {
  try{

// https://drive.google.com/open?id=1fusYTHVXlwZKN1mkGZE3gY2db7TMkscq

    const fileID = '1fusYTHVXlwZKN1mkGZE3gY2db7TMkscq' //https://drive.google.com/file/d/1fusYTHVXlwZKN1mkGZE3gY2db7TMkscq/view?usp=sharing
    await drive.permissions.create({
      fileId:fileID,
      requestBody:{
        role:'reader',
        type:'anyone'
      }
    })
    const result = await drive.files.get({
      fileId:fileID,
      fields: 'webViewLink , webContentLink'
    })
    console.log(result.data)
  }
  catch(error){
    console.log(error.message)
  }
}

generatePublicURL();*/

function App() {
  return (
    <div>
    <div className='carousel-image-size'>
    <CarouselComp/>
    </div>
      <NavbarComp className='NavbarCompClass'/>
    </div>

  );
}

export default App;
