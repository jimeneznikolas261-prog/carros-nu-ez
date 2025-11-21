
// JS más avanzado sencillo (no profesional)
// - Botón de tema claro/oscuro
// - Contadores de likes
// - Mostrar/ocultar descripción

let darkMode = false;

function toggleTheme() {
    darkMode = !darkMode;
    document.body.classList.toggle('dark', darkMode);
}

function like(id) {
    const num = document.getElementById('likes-'+id);
    num.textContent = parseInt(num.textContent) + 1;
}

function toggleDesc(id) {
    const el = document.getElementById('desc-'+id);
    el.style.display = el.style.display === 'none' ? 'block' : 'none';
}

// Redirecciones
function ext(url){ window.open(url, "_blank"); }
function go(p){ window.location.href = p; }
function sect(id){ document.getElementById(id).scrollIntoView({behavior:'smooth'}); }

document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('btn-ext1').onclick = ()=>ext('https://www.caranddriver.com');
    document.getElementById('btn-ext2').onclick = ()=>ext('https://www.autoblog.com');
    document.getElementById('btn-int').onclick  = ()=>go('page2.html');
    document.getElementById('btn-sec').onclick  = ()=>sect('modelos');
    document.getElementById('theme-btn').onclick = toggleTheme;
});
