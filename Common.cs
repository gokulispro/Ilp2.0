/*==================================================
    CUroNex - Common Stylesheet
    Hospital Camp Management System
==================================================*/

/*========================
        GOOGLE FONT
=========================*/

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

/*========================
        ROOT VARIABLES
=========================*/

:root{

    /* Primary Colors */

    --primary:#0B3D91;
    --primary-light:#1976D2;
    --primary-hover:#1565C0;

    /* Status Colors */

    --success:#22C55E;
    --warning:#F59E0B;
    --danger:#EF4444;
    --info:#3B82F6;

    /* Background */

    --background:#F8FAFC;
    --surface:#FFFFFF;

    /* Text */

    --text:#102A43;
    --text-light:#64748B;

    /* Border */

    --border:#D9E6F5;

    /* Radius */

    --radius-sm:10px;
    --radius-md:16px;
    --radius-lg:20px;

    /* Shadows */

    --shadow:

    0 8px 24px rgba(15,23,42,.08);

    --shadow-hover:

    0 12px 30px rgba(15,23,42,.12);

    /* Sidebar */

    --sidebar-width:270px;

    /* Navbar */

    --navbar-height:78px;

}

/*========================
        RESET
=========================*/

*{

    margin:0;

    padding:0;

    box-sizing:border-box;

}

html{

    scroll-behavior:smooth;

}

body{

    font-family:'Poppins',sans-serif;

    background:var(--background);

    color:var(--text);

    min-height:100vh;

}

/*========================
        LINKS
=========================*/

a{

    text-decoration:none;

    color:inherit;

}

button{

    cursor:pointer;

    border:none;

    font-family:'Poppins',sans-serif;

}

input,
select,
textarea{

    font-family:'Poppins',sans-serif;

}

/*========================
        SCROLLBAR
=========================*/

::-webkit-scrollbar{

    width:10px;

}

::-webkit-scrollbar-track{

    background:#EEF4FF;

}

::-webkit-scrollbar-thumb{

    background:var(--primary);

    border-radius:20px;

}

/*==================================================
                TOP NAVBAR
==================================================*/

.top-navbar{

    position:fixed;

    top:0;

    left:0;

    right:0;

    height:var(--navbar-height);

    background:var(--surface);

    display:flex;

    justify-content:space-between;

    align-items:center;

    padding:0 35px;

    box-shadow:var(--shadow);

    z-index:1000;

}

.logo-section{

    display:flex;

    align-items:center;

    gap:15px;

}

.logo{

    width:55px;

    height:55px;

    border-radius:16px;

    background:#EEF4FF;

    display:flex;

    justify-content:center;

    align-items:center;

    overflow:hidden;

}

.logo img{

    width:45px;

    height:45px;

    object-fit:contain;

}

.logo-text h2{

    color:var(--primary);

    font-size:24px;

    font-weight:700;

}

.logo-text p{

    color:var(--text-light);

    font-size:13px;

}

/*==========================
        SEARCH BAR
==========================*/

.navbar-search{

    width:420px;

    display:flex;

    align-items:center;

    gap:10px;

    background:#F3F7FC;

    border:1px solid var(--border);

    border-radius:50px;

    padding:12px 20px;

    transition:.3s;

}

.navbar-search:focus-within{

    border-color:var(--primary);

    box-shadow:0 0 0 4px rgba(25,118,210,.12);

}

.navbar-search input{

    width:100%;

    border:none;

    outline:none;

    background:none;

    font-size:15px;

}

.navbar-search i{

    color:var(--primary);

}

/*==========================
      NAVBAR RIGHT
==========================*/

.navbar-right{

    display:flex;

    align-items:center;

    gap:18px;

}

.icon-btn{

    width:46px;

    height:46px;

    border-radius:50%;

    background:#F3F7FC;

    display:flex;

    justify-content:center;

    align-items:center;

    position:relative;

    transition:.3s;

}

.icon-btn:hover{

    background:var(--primary);

    color:white;

    transform:translateY(-3px);

}

.badge{

    position:absolute;

    top:-4px;

    right:-4px;

    width:20px;

    height:20px;

    border-radius:50%;

    background:var(--danger);

    color:white;

    font-size:11px;

    display:flex;

    justify-content:center;

    align-items:center;

}

/*==========================
        PROFILE
==========================*/

.profile{

    display:flex;

    align-items:center;

    gap:12px;

    background:#F8FAFC;

    padding:8px 16px;

    border-radius:50px;

    cursor:pointer;

    transition:.3s;

}

.profile:hover{

    background:#EEF4FF;

}

.profile img{

    width:48px;

    height:48px;

    border-radius:50%;

}

.profile h4{

    font-size:15px;

}

.profile p{

    font-size:12px;

    color:var(--text-light);

}

/*==================================================
            MAIN LAYOUT
==================================================*/

.layout{

    display:flex;

    margin-top:var(--navbar-height);

}

.main-content{

    flex:1;

    padding:35px;

    margin-left:var(--sidebar-width);

    min-height:calc(100vh - var(--navbar-height));

}

/*==========================
      BREADCRUMB
==========================*/

.breadcrumb{

    display:flex;

    align-items:center;

    gap:10px;

    color:var(--text-light);

    font-size:14px;

    margin-bottom:12px;

}

.current{

    color:var(--primary);

    font-weight:600;

}

/*==========================
      PAGE TITLE
==========================*/

.page-title{

    margin-bottom:35px;

}

.page-title h1{

    font-size:38px;

    color:var(--text);

    font-weight:700;

}

.page-title p{

    color:var(--text-light);

    margin-top:8px;

    font-size:15px;

}

/*==================================================
                    SIDEBAR
==================================================*/

.sidebar{

    position:fixed;

    top:var(--navbar-height);

    left:0;

    width:var(--sidebar-width);

    height:calc(100vh - var(--navbar-height));

    background:linear-gradient(
        180deg,
        var(--primary),
        #082B63
    );

    color:white;

    display:flex;

    flex-direction:column;

    justify-content:space-between;

    padding:28px 20px;

    overflow-y:auto;

}

/*==========================
      SIDEBAR HEADER
==========================*/

.sidebar-header{

    margin-bottom:35px;

}

.sidebar-header h3{

    font-size:22px;

    font-weight:700;

}

.sidebar-header p{

    margin-top:6px;

    font-size:13px;

    color:rgba(255,255,255,.75);

}

/*==========================
        MENU
==========================*/

.sidebar-menu{

    display:flex;

    flex-direction:column;

    gap:10px;

}

.sidebar-menu a{

    display:flex;

    align-items:center;

    gap:15px;

    padding:15px 18px;

    border-radius:14px;

    transition:.3s;

    color:white;

    font-weight:500;

}

.sidebar-menu a i{

    width:24px;

    text-align:center;

    font-size:18px;

}

.sidebar-menu a:hover{

    background:rgba(255,255,255,.15);

    transform:translateX(6px);

}

.sidebar-menu a.active{

    background:white;

    color:var(--primary);

    box-shadow:0 8px 18px rgba(0,0,0,.18);

}

.sidebar-menu a.active i{

    color:var(--primary);

}

/*==========================
      SIDEBAR FOOTER
==========================*/

.sidebar-footer{

    margin-top:30px;

}

/*==========================
        SUPPORT CARD
==========================*/

.help-card{

    background:rgba(255,255,255,.12);

    border:1px solid rgba(255,255,255,.18);

    border-radius:20px;

    padding:20px;

    text-align:center;

    backdrop-filter:blur(8px);

}

.help-card i{

    font-size:34px;

    margin-bottom:12px;

}

.help-card h4{

    margin-bottom:8px;

    font-size:18px;

}

.help-card p{

    font-size:13px;

    line-height:1.6;

    color:rgba(255,255,255,.82);

}

.help-card button{

    margin-top:18px;

    width:100%;

    padding:12px;

    border-radius:12px;

    background:white;

    color:var(--primary);

    font-weight:600;

    transition:.3s;

}

.help-card button:hover{

    background:#E8F1FF;

    transform:translateY(-2px);

}

/*==========================
        LOGOUT
==========================*/

.logout{

    margin-top:24px;

    display:flex;

    align-items:center;

    justify-content:center;

    gap:12px;

    padding:15px;

    border-radius:14px;

    background:rgba(255,255,255,.08);

    transition:.3s;

}

.logout:hover{

    background:#EF4444;

    color:white;

}

/*==================================================
                HERO SECTION
==================================================*/

.hero-section{

    margin-bottom:35px;

}

.welcome-card{

    background:linear-gradient(
        135deg,
        var(--primary),
        var(--primary-light)
    );

    color:white;

    border-radius:24px;

    padding:35px;

    display:flex;

    justify-content:space-between;

    align-items:center;

    box-shadow:var(--shadow);

}

.welcome-card h2{

    font-size:32px;

    margin-bottom:12px;

    font-weight:700;

}

.welcome-card p{

    width:70%;

    line-height:1.8;

    opacity:.92;

}

.primary-btn{

    background:white;

    color:var(--primary);

    padding:15px 26px;

    border-radius:16px;

    font-weight:600;

    display:flex;

    align-items:center;

    gap:10px;

    transition:.3s;

}

.primary-btn:hover{

    transform:translateY(-4px);

    box-shadow:var(--shadow-hover);

}

/*==================================================
                KPI CARDS
==================================================*/

.stats-grid{

    display:grid;

    grid-template-columns:repeat(4,1fr);

    gap:24px;

    margin-bottom:35px;

}

.stat-card{

    background:var(--surface);

    border-radius:20px;

    padding:24px;

    display:flex;

    align-items:center;

    gap:20px;

    box-shadow:var(--shadow);

    transition:.3s;

    border:1px solid transparent;

}

.stat-card:hover{

    transform:translateY(-6px);

    border-color:#D7E7FF;

    box-shadow:var(--shadow-hover);

}

.stat-icon{

    width:70px;

    height:70px;

    border-radius:18px;

    display:flex;

    justify-content:center;

    align-items:center;

    font-size:30px;

}

.blue{

    background:#E8F1FF;

    color:#1976D2;

}

.green{

    background:#EAFBF1;

    color:#22C55E;

}

.orange{

    background:#FFF7E6;

    color:#F59E0B;

}

.red{

    background:#FDECEC;

    color:#EF4444;

}

.stat-content h3{

    font-size:34px;

    margin-bottom:6px;

}

.stat-content p{

    color:var(--text-light);

    margin-bottom:8px;

}

.positive{

    color:var(--success);

    font-size:13px;

    font-weight:600;

}

.warning{

    color:var(--warning);

    font-size:13px;

    font-weight:600;

}

.danger{

    color:var(--danger);

    font-size:13px;

    font-weight:600;

}

/*==================================================
                QUICK ACTIONS
==================================================*/

.quick-actions{

    margin-bottom:35px;

}

.quick-actions h2{

    margin-bottom:18px;

    font-size:24px;

}

.action-grid{

    display:grid;

    grid-template-columns:repeat(4,1fr);

    gap:22px;

}

.action-card{

    background:white;

    border-radius:20px;

    padding:30px;

    display:flex;

    flex-direction:column;

    justify-content:center;

    align-items:center;

    gap:18px;

    box-shadow:var(--shadow);

    transition:.35s;

    border:2px solid transparent;

}

.action-card:hover{

    transform:translateY(-6px);

    border-color:#1976D2;

    box-shadow:var(--shadow-hover);

}

.action-card i{

    font-size:34px;

    color:var(--primary);

}

.action-card span{

    font-size:16px;

    font-weight:600;

    text-align:center;

}


/*==================================================
                DASHBOARD GRID
==================================================*/

.dashboard-grid{

    display:grid;

    grid-template-columns:1fr 1fr;

    gap:24px;

    margin-bottom:30px;

}

.dashboard-card{

    background:var(--surface);

    border-radius:22px;

    padding:24px;

    box-shadow:var(--shadow);

    transition:.3s;

}

.dashboard-card:hover{

    transform:translateY(-3px);

    box-shadow:var(--shadow-hover);

}

/*==========================
        CARD HEADER
==========================*/

.card-header{

    display:flex;

    justify-content:space-between;

    align-items:center;

    margin-bottom:20px;

}

.card-header h2{

    display:flex;

    align-items:center;

    gap:10px;

    font-size:22px;

    color:var(--text);

}

.card-header a{

    color:var(--primary);

    font-weight:600;

    font-size:14px;

}

.small-btn{

    background:var(--primary);

    color:white;

    padding:10px 18px;

    border-radius:10px;

    font-size:14px;

    transition:.3s;

}

.small-btn:hover{

    background:var(--primary-hover);

}

/*==================================================
            RECENT ACTIVITY
==================================================*/

.activity-list{

    display:flex;

    flex-direction:column;

    gap:20px;

}

.activity-item{

    display:flex;

    gap:16px;

    align-items:flex-start;

}

.activity-icon{

    width:48px;

    height:48px;

    border-radius:14px;

    display:flex;

    justify-content:center;

    align-items:center;

    color:white;

    flex-shrink:0;

}

.activity-icon.success{

    background:var(--success);

}

.activity-icon.warning{

    background:var(--warning);

}

.activity-icon.danger{

    background:var(--danger);

}

.activity-item h4{

    margin-bottom:4px;

    font-size:16px;

}

.activity-item p{

    color:var(--text-light);

    margin-bottom:4px;

    line-height:1.5;

}

.activity-item small{

    color:#94A3B8;

}

/*==================================================
                TABLES
==================================================*/

.inventory-table{

    width:100%;

    border-collapse:collapse;

}

.inventory-table thead{

    background:#F3F7FC;

}

.inventory-table th{

    padding:15px;

    text-align:left;

    color:var(--text);

    font-weight:600;

    border-bottom:1px solid var(--border);

}

.inventory-table td{

    padding:15px;

    border-bottom:1px solid #EEF2F7;

}

.inventory-table tbody tr{

    transition:.25s;

}

.inventory-table tbody tr:hover{

    background:#F8FBFF;

}

/*==================================================
                STATUS BADGES
==================================================*/

.badge{

    padding:7px 14px;

    border-radius:50px;

    font-size:12px;

    font-weight:600;

}

.badge.warning{

    background:#FFF4D8;

    color:#C87B00;

}

.badge.danger{

    background:#FDECEC;

    color:#D32F2F;

}

.badge.pending{

    background:#FFF7E6;

    color:#D977








