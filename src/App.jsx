// import React from 'react';
import './App.css';

function App() {
  return (
    <>
    <div className='container'>
      <header>
        
        <div className='logo'>
          <img src="src/images/logo.svg" alt="logo" />
          <h4>Destinize</h4>
        </div>
        <div className='search'>
          <img src="src/images/search.svg" alt="serach img" />
          <input type="text" name="" id="" placeholder='Cari apapun disini...'/>
        </div>
        <div className='globus'>
          <img src="src/images/global.png" alt="icon" />
          <h5> Bahasa Indonesia</h5>
          <img src="src/images/Icon.png" alt="icon" />
        </div>
        <div className='location'>
          <img src="src/images/loca.png" alt="location" />
          <div className='text-loca'>
            <p>Lokasi</p>
            <h5>Indonesia, Yogyakarta</h5>
          </div>
        </div>
       
      </header>
      <div className='hr'><hr /></div>

      <div className='nav-item'>
        <div className='selection'>
          <select name="text" id="">
            <option value=""><p>Gunung</p></option>
          </select>
          <select name="text" id="">
            <option value=""><p>Pantai</p></option>
          </select>
          <select name="text" id="">
            <option value=""><p>Kuliner</p></option>
          </select>
          <select name="text" id="">
            <option value=""><p>Outbond</p></option>
          </select>
          <select name="text" id="">
            <option value=""><p>Sejarah</p></option>
          </select>
          <select name="text" id="">
            <option value=""><p>Edukasi</p></option>
          </select>
          <select name="text" id="">
            <option value=""><p>Romantis</p></option>
          </select>
          <select name="text" id="">
            <option value=""><p>Alam</p></option>
          </select>
        </div>

        <div className='clone'>
          <img src="src/images/Cart.png" alt="" width={'48'} height={'48'} />
          <img src="src/images/contact.png" alt="" width={'48'} height={'48'} />
        </div>
      </div>

<div className='friend'>

<div className='fiend-commit'>
<div className='card-one'>
  <div className='hea-one'><p>✈ • Explore the wonderful indonesia!</p></div>
  <div className='nav-tue'><p>Liburan & nikmati</p>
<span>tempat baru</span><p> di
indonesia 🏝</p></div>
</div>
<div className='text-footer'>
  <p>Destinize membuat kamu selalu update terkait tempat liburan baru di Indonesia dengan mengikuti perkembangan para influencer di sosial media ✨</p>
</div>
<div className='royal'>
  <button className='one'><p>Mulai sekarang →</p></button>
  <button className='fyustie'>
  <button className='tue'>
    <img src="src/images/play.png"  alt="img"/></button>
  <p>Putar Demo</p>
  </button>
</div>

</div>

<div className='card-tue'>
  <img src="src/images/img.png" alt="img" width={698} height={707} />
</div>
</div>

<div className='taxi'>
  <img src="src/images/card1.png" alt="" />
  <img src="src/images/cardtue.png" alt="" />
  <img src="src/images/cardthree.png" alt="" />
  <img src="src/images/cardfoo.png" alt="" />
  <img src="src/images/cardfive.png" alt="" />
</div>


<div className='footer-card'>
  <p>DESTINASI FAVORIT</p>
  <div className='fruits-footer'>
   <div className='head'> <h3>✈ • Temukan Destinasi Favoritmu</h3></div>
    <p>Lihat semua</p>
  </div>
  <div className='images-footer'>
    <img src="src/images/png.png" alt="" />
    <img src="src/images/pngtue.png" alt="" />
    <img src="src/images/pngthee.png" alt="" />
    <img src="src/images/pngfoo.png" alt="" />
  </div>
</div>
    </div>
    </>
  );
}
export default App;
