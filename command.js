let usernameInput = document.getElementById('usernameInput')
let passwordInput = document.getElementById('passwordInput')
let register = document.getElementById('register')
let minyak = document.getElementById('minyak')
let owner = document.getElementById('owner')
let admin = document.getElementById('admin')
let member = document.getElementById('member')
let anomali = document.getElementById('anomali')
let ownerImg = document.getElementById('ownerImg')
let adminImg1 = document.getElementById('adminImg1')
let adminImg2 = document.getElementById('adminImg2')
let memberImg = document.getElementById('memberImg')
let anomaliImg = document.getElementById('anomaliImg')
let loginButton = document.getElementById('loginButton')
let logoutButton = document.getElementById('logoutButton')
let note = document.getElementById('note')
let channel = document.getElementById('channel')
let linkch = document.getElementById('linkch')
let pembangunan = document.getElementById('pembangunan')

owner.style.display = "none"
admin.style.display = "none"
member.style.display = "none"
anomali.style.display = "none"
ownerImg.style.display = "none"
adminImg1.style.display = "none"
adminImg2.style.display = "none"
memberImg.style.display = "none"
anomaliImg.style.display = "none"
logoutButton.style.display = "none"
channel.style.display = "none"
linkch.style.display = "none"
pembangunan.style.display = "none"

function diLoginkan() {
    localStorage.setItem("username", usernameInput.value)
    logoutButton.style.display = "block"
    register.style.display = "none"
    minyak.style.display = "none"
    note.style.display = "none"
    pembangunan.style.display = "block"

    if (usernameInput.value == "Itsmeghulan" && passwordInput.value == "Itsmeghulan") {
        usernameInput.style.display = "none"
        passwordInput.style.display = "none"
        loginButton.style.display = "none"
        logoutButton.style.display = "block"
        ownerImg.style.display = "block"
        adminImg1.style.display = "none"
        adminImg2.style.display = "none"
        memberImg.style.display = "none"
        anomaliImg.style.display = "none"
        owner.style.display = "block"
        admin.style.display = "none"
        member.style.display = "none"
        anomali.style.display = "none"
        localStorage.setItem("role", "owner")
    } else if (usernameInput.value == "R" && passwordInput.value == "R") {
        usernameInput.style.display = "none"
        passwordInput.style.display = "none"
        loginButton.style.display = "none"
        logoutButton.style.display = "block"
        ownerImg.style.display = "none"
        adminImg1.style.display = "block"
        adminImg2.style.display = "none"
        memberImg.style.display = "none"
        anomaliImg.style.display = "none"
        owner.style.display = "none"
        admin.style.display = "block"
        member.style.display = "none"
        anomali.style.display = "none"
        localStorage.setItem("role", "admin1")
    } else if (usernameInput.value == "bebekgorenghajislametcabangkartosuro" && passwordInput.value == "bebekgorenghajislametcabangkartosuro") {
        usernameInput.style.display = "none"
        passwordInput.style.display = "none"
        loginButton.style.display = "none"
        logoutButton.style.display = "block"
        ownerImg.style.display = "none"
        adminImg1.style.display = "none"
        adminImg2.style.display = "block"
        memberImg.style.display = "none"
        anomaliImg.style.display = "none"
        owner.style.display = "none"
        admin.style.display = "block"
        member.style.display = "none"
        anomali.style.display = "none"
        localStorage.setItem("role", "admin2")
    } else if (usernameInput.value == "rivjian" && passwordInput.value == "rivjian") {
        usernameInput.style.display = "none"
        passwordInput.style.display = "none"
        loginButton.style.display = "none"
        logoutButton.style.display = "block"
        ownerImg.style.display = "none"
        adminImg1.style.display = "none"
        adminImg2.style.display = "none"
        memberImg.style.display = "block"
        anomaliImg.style.display = "none"
        owner.style.display = "none"
        admin.style.display = "none"
        member.style.display = "block"
        anomali.style.display = "none"
        localStorage.setItem("role", "member")
    } else if (usernameInput.value == "Bintang" && passwordInput.value == "Bintang") {
        usernameInput.style.display = "none"
        passwordInput.style.display = "none"
        loginButton.style.display = "none"
        logoutButton.style.display = "block"
        ownerImg.style.display = "none"
        adminImg1.style.display = "none"
        adminImg2.style.display = "none"
        memberImg.style.display = "block"
        anomaliImg.style.display = "none"
        owner.style.display = "none"
        admin.style.display = "none"
        member.style.display = "block"
        anomali.style.display = "none"
        localStorage.setItem("role", "member")
    } else if (usernameInput.value == "blue moon" && passwordInput.value == "blue moon") {
        usernameInput.style.display = "none"
        passwordInput.style.display = "none"
        loginButton.style.display = "none"
        logoutButton.style.display = "block"
        ownerImg.style.display = "none"
        adminImg1.style.display = "none"
        adminImg2.style.display = "none"
        memberImg.style.display = "block"
        anomaliImg.style.display = "none"
        owner.style.display = "none"
        admin.style.display = "none"
        member.style.display = "block"
        anomali.style.display = "none"
        localStorage.setItem("role", "member")
    } else {
        usernameInput.style.display = "none"
        passwordInput.style.display = "none"
        loginButton.style.display = "none"
        logoutButton.style.display = "block"
        ownerImg.style.display = "none"
        adminImg1.style.display = "none"
        adminImg2.style.display = "none"
        memberImg.style.display = "none"
        anomaliImg.style.display = "block"
        owner.style.display = "none"
        admin.style.display = "none"
        member.style.display = "none"
        anomali.style.display = "block"
        channel.style.display = "block"
        linkch.style.display= "block"
    }
}

if (localStorage.getItem('username')) {
    usernameInput.style.display = "none"
    passwordInput.style.display = "none"
    loginButton.style.display = "none"
    register.style.display = "none"
    minyak.style.display = "none"
    note.style.display = "none"
    logoutButton.style.display = "block"
    pembangunan.style.display = "block"
    if (localStorage.getItem('role') == "owner") {
        logoutButton.style.display = "block"
        ownerImg.style.display = "block"
        adminImg1.style.display = "none"
        adminImg2.style.display = "none"
        memberImg.style.display = "none"
        anomaliImg.style.display = "none"
        owner.style.display = "block"
        admin.style.display = "none"
        member.style.display = "none"
        anomali.style.display = "none"
    } else if (localStorage.getItem('role') == "admin1") {
        logoutButton.style.display = "block"
        ownerImg.style.display = "none"
        adminImg1.style.display = "block"
        adminImg2.style.display = "none"
        memberImg.style.display = "none"
        anomaliImg.style.display = "none"
        owner.style.display = "none"
        admin.style.display = "block"
        member.style.display = "none"
        anomali.style.display = "none"
    } else if (localStorage.getItem('role') == "admin2") {
        logoutButton.style.display = "block"
        ownerImg.style.display = "none"
        adminImg1.style.display = "none"
        adminImg2.style.display = "block"
        memberImg.style.display = "none"
        anomaliImg.style.display = "none"
        owner.style.display = "none"
        admin.style.display = "block"
        member.style.display = "none"
        anomali.style.display = "none"
    } else if (localStorage.getItem('role') == "member") {
        logoutButton.style.display = "block"
        ownerImg.style.display = "none"
        adminImg1.style.display = "none"
        adminImg2.style.display = "none"
        memberImg.style.display = "block"
        anomaliImg.style.display = "none"
        owner.style.display = "none"
        admin.style.display = "none"
        member.style.display = "block"
        anomali.style.display = "none"
    } else {
        logoutButton.style.display = "block"
        ownerImg.style.display = "none"
        adminImg1.style.display = "none"
        adminImg2.style.display = "none"
        memberImg.style.display = "none"
        anomaliImg.style.display = "block"
        owner.style.display = "none"
        admin.style.display = "none"
        member.style.display = "none"
        anomali.style.display = "block"
        channel.style.display = "block"
        linkch.style.display= "block"
    }
}

function diLogoutkan() {
    localStorage.clear()
    location.reload()
}