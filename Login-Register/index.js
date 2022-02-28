// varijable su prostori za skladistenje nekih podataka ili vrednosti
// moramo definisati koji element zelimo
// pisemo 0 jer redni broj elementa je 0
const uiBtnToRegister = document.getElementById('to-register')
const uiBtnToLogin = document.getElementById('to-login')
const uiFormLogin = document.getElementsByClassName('form-login')[0]
const uiFormRegister = document.getElementsByClassName('form-register')[0]

// funkcija je deo koda koji treba da uradi nesto
// display elemet jer smo njime ucinili da element bude nevidljiv
// koji elemet .style zelimo da menjamo css tog koda i onda properti i na kraju vrednost
// btn i slikama je defult vrendost inline a sada je div pa je block
function switchToRegisterPage() {
  console.log('switching to register page')
  uiFormLogin.style.display = 'none'
  uiFormRegister.style.display = 'block'
}

function switchToLoginrPage() {
  console.log('Switching to login page')
  uiFormRegister.style.display = 'none'
  uiFormLogin.style.display = 'block'
}

// zelimo da event pokrene klik, funkcija je
// definisana u zagradi i predhodno dodenjena naredba
uiBtnToRegister.addEventListener('click', switchToRegisterPage)
uiBtnToLogin.addEventListener('click', switchToLoginrPage)
