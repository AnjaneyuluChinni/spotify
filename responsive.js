let songContainerE1 = document.getElementById('songContainer')
let songTitleE1 = document.getElementById('songTitle')
let songArtistE1 = document.getElementById('songArtist')
let audioE1 = document.getElementById('audio')
let songImgE1 = document.getElementById('songImg')
let maharshiSongE1 = document.getElementById('maharshiSong')
let KrishnaSongE1 = document.getElementById('KrishnaSong')
let BajrangSongE1 = document.getElementById('BajrangSong');
let MahanatiSongE1 =  document.getElementById('MahanatiSong');
let TarakSongE1 = document.getElementById('TarakSong')
let Super30SongE1 = document.getElementById('Super30Song');
let BahubaliSongE1 = document.getElementById('BahubaliSong')
let RajaRaniSongE1 = document.getElementById('RajaRaniSong')
let SPBSongE1 = document.getElementById('SPBSong');
let GunturSongE1 = document.getElementById('GunturSong')

songContainerE1.classList.add('d-none')

maharshiSongE1.onclick = function(){
    songContainerE1.classList.remove('d-none')
    songImgE1.src = "./images/th (2).jpeg";
    audioE1.src="audio/[iSongs.info] 08 - Nuvvani Idhi Needani (1).mp3";
    songImgE1.classList.add('image')
    songTitleE1.textContent = "Maharshi";
    songArtistE1.textContent = "Karthik Krishna,Anirudh Ravinchandran,Dinker kavala"
}

KrishnaSongE1.onclick = function(){
    songContainerE1.classList.remove('d-none')
    songImgE1.src = "./images/th (7).jpeg";
    audioE1.src="audio/Mahabharat-Title(PaglaSongs).mp3";
    songImgE1.classList.add('image')
    songTitleE1.textContent = "Auchutham Keshavam";
    songArtistE1.textContent = "Lord Krishana, Parvathy Kappor, SPB Balasubramanyam";
    
}

BajrangSongE1.onclick = function(){
    songContainerE1.classList.remove('d-none')
    songImgE1.src = "./images/th (9).jpeg";
    audioE1.src="audio/[iSongs.info] 01 - Hanuman Chalisa.mp3";
    songImgE1.classList.add('image')
    songTitleE1.textContent = "Hanuman Chalisa";
    songArtistE1.textContent = "Lord Sri Hanuman,Hindu Devotional hymn";
    
}

MahanatiSongE1.onclick = function(){
    songContainerE1.classList.remove('d-none')
    songImgE1.src = "./images/th (3).jpeg";
    audioE1.src="audio/[iSongs.info] 03 - Mahanati.mp3";
    songImgE1.classList.add('image')
    songTitleE1.textContent = "Mahanati Title";
    songArtistE1.textContent = "Micky J.Meyer, Anuraj Kulakarni,Ramya Behara";
    
}

TarakSongE1.onclick = function(){
    songContainerE1.classList.remove('d-none')
    songImgE1.src = "./images/download (1).jpeg";
    audioE1.src="audio/[iSongs.info] 05 - Naatu Naatu.mp3";
    songImgE1.classList.add('image')
    songTitleE1.textContent = "Natu Natu";
    songArtistE1.textContent = "Rahul Sipliguni, Kala Bhairava,MM Keravani";
    
}

Super30SongE1.onclick = function(){
    songContainerE1.classList.remove('d-none')
    songImgE1.src = "./images/download (2).jpeg";
    audioE1.src="audio/Jugraafiya - (Raag.Fm).mp3";
    songImgE1.classList.add('image')
    songTitleE1.textContent = "Jugaraafiya";
    songArtistE1.textContent = "Udit Narayana,Shreya Ghoshal,Vishal Dadlani";
    
}

BahubaliSongE1.onclick = function(){
    songContainerE1.classList.remove('d-none')
    songImgE1.src = "./images/th (8).jpeg";
    audioE1.src="audio/Saahore Baahubali-SenSongsMp3.Co.mp3";
    songImgE1.classList.add('image')
    songTitleE1.textContent = "Bali Bali Bahubali";
    songArtistE1.textContent = "Yazin Nizae, Vijay Yesuda Yesudas, Swetha";
    
}

RajaRaniSongE1.onclick = function(){
    songContainerE1.classList.remove('d-none')
    songImgE1.src = "./images/download (3).jpeg";
    audioE1.src="audio/[iSongs.info] 06 - Vinave Vinave.mp3";
    songImgE1.classList.add('image')
    songTitleE1.textContent = "Vinave Vinave";
    songArtistE1.textContent = "G.V. Prakash, shakthisree Gopalan, Aiswarya Gopal";
    
}

SPBSongE1.onclick = function(){
    songContainerE1.classList.remove('d-none')
    songImgE1.src = "./images/th (11).jpeg";
    audioE1.src="audio/Oh Prema.mp3";
    songImgE1.classList.add('image')
    songTitleE1.textContent = "Oh prema";
    songArtistE1.textContent = "S.P. Balasubramanyam, S.Janaki, S.P Sailaja";
    
}

GunturSongE1.onclick = function(){
    songContainerE1.classList.remove('d-none')
    songImgE1.src = "./images/th (12).jpeg";
    audioE1.src="audio/[iSongs.info] 01 - Dum Masala.mp3";
    songImgE1.classList.add('image')
    songTitleE1.textContent = "Kurchi Madathapetti";
    songArtistE1.textContent = "Thaman S, Sri Krishna, Sahithi Chaganti, Mahesh Babu";
    
}

