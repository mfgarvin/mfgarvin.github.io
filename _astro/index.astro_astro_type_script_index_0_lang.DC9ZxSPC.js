const T=document.getElementById("output"),i=document.getElementById("input"),N=document.getElementById("prompt"),$=[];let g=-1,h="~";const a={user:"guest",hostname:"mfgarvin.com",os:"mfgarvinOS 1.0",kernel:"3.0-viatorem",shell:"mgsh 1.0",terminal:"web-term",cpu:"Mintel 96 Neural Processor",memory:"12GB RAM",funProcesses:[{pid:1,user:"root",mem:"12000",cmd:"logosd"},{pid:7,user:"root",mem:"1024",cmd:"sabbathd",state:"sleeping",wake:"never"},{pid:12,user:"clergy",mem:"2048",cmd:"homily-cache",cache:"stale"},{pid:40,user:"clergy",mem:"4096",cmd:"discernment",state:"running",since:"always"},{pid:72,user:"user",mem:"512",cmd:"pastoral-listen",state:"idle",blocking:!0},{pid:128,user:"user",mem:"768",cmd:"systems-thinking",cannotStop:!0},{pid:256,user:"user",mem:"1024",cmd:"music-thread",nice:-5,leaks:"time"},{pid:314,user:"user",mem:"256",cmd:"overthink",loops:!0},{pid:404,user:"user",mem:"0",cmd:"where-did-i-put-that",retries:"infinite",error:!0},{pid:666,user:"root",mem:"128",cmd:"heresy-scan",falsePositives:"high"},{pid:512,user:"root",mem:"1536",cmd:"grace-daemon",persistent:!0,undocumented:!0}],memTotal:"       ∞      ",memUsed:"5242880",memFree:"7340032",memShared:"communion",memCached:"experience",swapTotal:"2097152",swapUsed:"65536",swapFree:"2031616",filesystems:[{name:"/dev/faith",total:"48000000",used:"8000000",avail:"40000000",mount:"/"},{name:"/dev/hope",total:"16000000",used:"1024",avail:"15998976",mount:"/hope"},{name:"/dev/love",total:"100000000",used:"12000000",avail:"88000000",mount:"/love",reserved:"others"},{name:"tmpfs",total:"512000",used:"511872",avail:"128",mount:"/meetings"}],ip:"192.168.12.12",netmask:"255.255.255.0",broadcast:"192.168.12.255",mac:"c0:01:d0:ae:12:00",txPackets:"moderate",rxPackets:"abundant",collisions:"rare",bootMessages:["[    0.000000] Beginning of all things...","[    0.000001] Let there be light","[    0.042000] Loading kernel (mysteriously)","[    1.200000] Mounting /dev/faith as /","[    2.012000] Starting grace-daemon... done","[    3.141593] Calibrating reason and wonder","[    6.000000] Warning: overthink.service enabled","[   12.000000] System ready (mostly)","Welcome to mfgarvin.com"]},x=()=>`<span class="prompt-user">${a.user}</span>@<span class="prompt-host">${a.hostname}</span>:<span class="prompt-path">${h}</span>$ `,v={"~":["about.txt","contact.txt","projects/",".secrets"],"~/projects":["README.md"]},C=JSON.parse(document.getElementById("content-data").textContent),L=`<span class="cyan">Available commands:</span>

  <span class="exec">help</span>          show this message
  <span class="exec">ls</span>            list files
  <span class="exec">cat</span> <file>    read a file
  <span class="exec">cd</span> <dir>      change directory
  <span class="exec">pwd</span>           print working directory
  <span class="exec">whoami</span>        who are you?
  <span class="exec">clear</span>         clear the screen
  <span class="exec">neofetch</span>      system info`;function e(o){T.insertAdjacentHTML("beforeend",o+`
`),document.getElementById("input-line").scrollIntoView({block:"end"})}const O="https://terminal-analytics.mfgarvin.workers.dev";function F(o){const r=o.trim();r.toLowerCase();const l=r.split(/\s+/),p=l[0].toLowerCase(),s=l.slice(1);if(r&&fetch(`${O}/log`,{method:"POST",body:JSON.stringify({command:r}),headers:{"Content-Type":"application/json"}}).catch(()=>{}),e(`${x()}<span class="cmd">${o}</span>`),!!p)switch(p){case"help":case"man":case"?":e(L);break;case"ls":const d=s.includes("-a")||s.includes("-la")||s.includes("-al"),y=s.includes("-l")||s.includes("-la")||s.includes("-al"),u=s.find(t=>!t.startsWith("-"));let m=h;if(u){let t=u.replace(/\/$/,"");if(t.startsWith("~")||(t=h==="~"?"~/"+t:h+"/"+t),!v[t]){e(`<span class="err">ls: cannot access '${u}': No such file or directory</span>`);break}m=t}if(v[m]){let t=v[m];if(d||(t=t.filter(n=>!n.startsWith("."))),y){const n=d?`drwxr-xr-x  2 ${a.user}  ${a.user}  4096 Jan  1 00:00 <span class="dir">.</span>
drwxr-xr-x  3 ${a.user}  ${a.user}  4096 Jan  1 00:00 <span class="dir">..</span>
`:"",c=t.map(f=>{const b=f.endsWith("/"),k=f.startsWith("."),W=b?"drwxr-xr-x":"-rw-r--r--",A=b?"4096":" 512",U=b?`<span class="dir">${f}</span>`:k?`<span class="dim">${f}</span>`:f;return`${W}  1 ${a.user}  ${a.user}  ${A} Jan  1 00:00 ${U}`}).join(`
`);e(n+c)}else{let n="";d&&(n+='<span class="dir">.</span>  <span class="dir">..</span>  '),t.forEach(c=>{c.endsWith("/")?n+=`<span class="dir">${c}</span>  `:c.startsWith(".")?n+=`<span class="dim">${c}</span>  `:n+=`${c}  `}),e(n)}}break;case"cat":case"less":case"more":if(!s[0])e('<span class="err">cat: missing file operand</span>');else{let t=s[0];h==="~/projects"&&!t.includes("/")&&(t="projects/"+t);const n=C[t]||C[s[0]];if(n){const c=n.match(/^image:\s*(.+)\n---\n([\s\S]*)$/);e(c?`<div class="img-row"><div class="img-text">${c[2].replace(/\n\n/g,"<br><br>")}</div><img class="img-raw" src="/${c[1].trim()}" alt="${c[1].trim()}" onload="document.getElementById('input-line').scrollIntoView({block:'end'})" /></div>`:n)}else e(`<span class="err">cat: ${s[0]}: No such file</span>`)}break;case"cd":if(!s[0]||s[0]==="~"||s[0]==="/")h="~";else if(s[0]===".."||s[0]==="../")h="~";else if(s[0]==="projects"||s[0]==="projects/"||s[0]==="~/projects")h="~/projects";else{e(`<span class="err">cd: ${s[0]}: No such directory</span>`);break}N.innerHTML=x();break;case"pwd":e(h==="~"?"/home/guest":"/home/guest/projects");break;case"whoami":e(a.user);break;case"clear":T.innerHTML="";break;case"neofetch":e(`<span class="cyan">            ^</span>
<span class="cyan">           /|\\</span>          <span class="prompt-user">${a.user}</span>@<span class="prompt-host">${a.hostname}</span>
<span class="cyan">          /_|_\\</span>         <span class="dim">--------------</span>
<span class="cyan">         /| + |\\</span>        <span class="cyan">OS:</span> ${a.os}
<span class="cyan">        / |   | \\</span>       <span class="cyan">Host:</span> ${a.hostname}
<span class="cyan">       /  |_._|  \\</span>      <span class="cyan">Kernel:</span> ${a.kernel}
<span class="cyan">      / _.&#39;   &#39;._ \\</span>     <span class="cyan">Shell:</span> ${a.shell}
<span class="cyan">     | |  .---.  | |</span>    <span class="cyan">Terminal:</span> ${a.terminal}
<span class="cyan">     | | |     | | |</span>    <span class="cyan">CPU:</span> ${a.cpu}
<span class="cyan">     | | |     | | |</span>    <span class="cyan">Memory:</span> ${a.memory}
<span class="cyan">     |_|_|_____|_|_|</span>`);break;case"sudo":s.join(" ").toLowerCase()==="make me a sandwich"?e('<span class="yellow">Okay.</span>'):e(`[sudo] password for guest: <span class="err">
Sorry, user guest is not in the sudoers file.
This incident will be reported.</span>`);break;case"rm":s[0]==="-rf"&&(s[1]==="/"||s[1]==="/*")?e('<span class="err">Nice try.</span>'):e('<span class="err">rm: permission denied</span>');break;case"exit":case"logout":case"quit":e(`<span class="yellow">You can check out any time you like,
but you can never leave...</span>

<span class="dim">(Close the browser tab)</span>`);break;case"vim":case"vi":case"nano":case"emacs":e(`<span class="err">${p}: permission denied (read-only filesystem)</span>`);break;case"sl":e(`<span class="dim">You meant 'ls', right?</span>`);break;case"cowsay":const S=s.join(" ")||"moo";e(` ${"_".repeat(S.length+2)}
< ${S} >
 ${"-".repeat(S.length+2)}
        \\   ^__^
         \\  (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||`);break;case"fortune":const M=["You will find what you seek.","A journey of a thousand miles begins with a single step.","The best time to plant a tree was 20 years ago. The second best time is now.","404: Fortune not found.","Pax Christi."];e(M[Math.floor(Math.random()*M.length)]);break;case"date":e(new Date().toString());break;case"uptime":e(` ${new Date().toLocaleTimeString()} up since the beginning of time, 1 user`);break;case"uname":s[0]==="-a"?e(`${a.os.split(" ")[0]} ${a.hostname} ${a.kernel} #1 SMP PREEMPT_DYNAMIC x86_64 GNU/Linux`):s[0]==="-r"?e(a.kernel):s[0]==="-s"?e(a.os.split(" ")[0]):s[0]==="-n"?e(a.hostname):s[0]==="-m"?e("x86_64"):e(a.os.split(" ")[0]);break;case"echo":e(s.join(" "));break;case"ping":const w=s.includes("-c")?s[s.indexOf("-c")+2]||s[s.indexOf("-c")+1]:s.find(t=>!t.startsWith("-")),I=s.includes("-c")&&parseInt(s[s.indexOf("-c")+1])||3;if(w){let t=`PING ${w} (${w}): 56 data bytes
`;for(let n=0;n<Math.min(I,10);n++){const c=(Math.random()*2+.01).toFixed(3);t+=`64 bytes from ${w}: icmp_seq=${n} ttl=64 time=${c} ms
`}t+=`<span class="dim">^C</span>
--- ${w} ping statistics ---
${Math.min(I,10)} packets transmitted, ${Math.min(I,10)} received, 0% packet loss`,e(t)}else e('<span class="err">ping: usage: ping [-c count] host</span>');break;case"matrix":E();break;case"hack":R();break;case"coffee":e(`<span class="yellow">
       ( (
        ) )
      .------.
      |      |]
      \\      /
       \`----'
</span>
<span class="dim">Coffee: the fuel of programmers.</span>`);break;case"42":e("The Answer to the Ultimate Question of Life, the Universe, and Everything.");break;case"xyzzy":e("Nothing happens.");break;case"make":s.join(" ").toLowerCase()==="me a sandwich"?e('<span class="err">What? Make it yourself.</span>'):e('<span class="err">make: *** No targets specified. Stop.</span>');break;case"apt":case"apt-get":s[0]==="moo"?e(`         (__)
         (oo)
   /------\\/
  / |    ||
 *  /\\---/\\
    ~~   ~~
...."Have you mooed today?"...`):s[0]==="install"?e(`<span class="err">E: Could not open lock file - open (13: Permission denied)
E: Unable to acquire the dpkg frontend lock, are you root?</span>`):e('<span class="dim">Usage: apt [options] command</span>');break;case"pacman":e('<span class="yellow">error:</span> you cannot perform this operation unless you are root.');break;case"btw":e("I use Arch btw.");break;case"arch":e("x86_64");break;case"hostname":e(a.hostname);break;case"top":case"htop":const j=a.funProcesses.map(t=>{const n=t.state||"running",c=n==="sleeping"?"S":n==="idle"?"I":"R",f=t.nice!==void 0?String(t.nice):"0",b=t.error?`<span class="err">${t.cmd}</span>`:t.exec?`<span class="exec">${t.cmd}</span>`:t.cmd;return`${String(t.pid).padStart(5)} ${t.user.padEnd(9)} 20 ${f.padStart(3)}   ${String(t.mem).padStart(5)}   ${String(t.mem).padStart(5)} ${c}  ${b}`}).join(`
`);e(`<span class="cyan">  PID USER      PR  NI    VIRT    RES S  COMMAND</span>
${j}

<span class="dim">Press q to quit (just kidding, you can't)</span>`);break;case"ps":if(s[0]==="aux"||s.includes("-e")||s.includes("-ef")){const t=a.funProcesses.map(n=>{const c=n.state==="sleeping"?"S":n.state==="idle"?"I":"R",f=n.error?`<span class="err">${n.cmd}</span>`:n.cmd;return`${n.user.padEnd(9)} ${String(n.pid).padStart(5)}  0.0  ${(parseInt(n.mem)/1024).toFixed(1).padStart(4)} ${c}  00:00:00 ${f}`}).join(`
`);e(`<span class="cyan">USER        PID %CPU  %MEM S      TIME COMMAND</span>
${t}`)}else{const t=a.funProcesses.slice(0,4).map(n=>`${String(n.pid).padStart(5)} pts/0    00:00:00 ${n.cmd}`).join(`
`);e(`  PID TTY          TIME CMD
${t}`)}break;case"free":s.includes("-h")?e(`              total        used        free      shared  buff/cache
Mem:    ${a.memTotal}      5.0Gi       7.0Gi  ${a.memShared.padStart(11)} ${a.memCached.padStart(11)}
Swap:          2.0Gi      64.0Mi       1.9Gi`):e(`              total        used        free      shared  buff/cache
Mem:    ${a.memTotal.padStart(12)} ${a.memUsed.padStart(11)} ${a.memFree.padStart(11)} ${a.memShared.padStart(11)} ${a.memCached.padStart(11)}
Swap:   ${a.swapTotal.padStart(12)} ${a.swapUsed.padStart(11)} ${a.swapFree.padStart(13)}`);break;case"df":if(s.includes("-h")){const t=a.filesystems.map(n=>{const c=b=>{const k=parseInt(b);return k>=1e6?(k/1e6).toFixed(0)+"G":k>=1e3?(k/1e3).toFixed(0)+"M":k+"K"},f=Math.round(parseInt(n.used)/parseInt(n.total)*100)||0;return`${n.name.padEnd(14)} ${c(n.total).padStart(6)} ${c(n.used).padStart(6)} ${c(n.avail).padStart(6)} ${String(f).padStart(3)}% ${n.mount}`}).join(`
`);e(`Filesystem       Size   Used  Avail Use% Mounted on
${t}`)}else{const t=a.filesystems.map(n=>{const c=Math.round(parseInt(n.used)/parseInt(n.total)*100)||0;return`${n.name.padEnd(14)} ${n.total.padStart(10)} ${n.used.padStart(8)} ${n.avail.padStart(10)} ${String(c).padStart(3)}% ${n.mount}`}).join(`
`);e(`Filesystem     1K-blocks    Used    Available  Use% Mounted on
${t}`)}break;case"ifconfig":case"ip":e(`lo: flags=73<UP,LOOPBACK,RUNNING>  mtu 65536
    inet 127.0.0.1  netmask 255.0.0.0
    inet6 ::1  prefixlen 128  scopeid 0x10<host>

eth0: flags=4163<UP,BROADCAST,RUNNING>  mtu 1500
    inet ${a.ip}  netmask ${a.netmask}  broadcast ${a.broadcast}
    <span class="dim">ether ${a.mac}</span>
    TX packets: ${a.txPackets}  RX packets: ${a.rxPackets}  collisions: ${a.collisions}`);break;case"curl":case"wget":s[0]?e(`<span class="err">curl: (6) Could not resolve host: ${s[0]}
This is a fake terminal, remember?</span>`):e(`<span class="err">curl: try 'curl --help' for more information</span>`);break;case"ssh":e(`<span class="err">ssh: connect to host ${s[0]||"localhost"} port 22: Connection refused
(You can't SSH out of a website)</span>`);break;case"git":s[0]==="push"&&s[1]==="--force"?e(`<span class="err">Whoa there! That's dangerous.</span>`):s[0]==="blame"?e("It was you. It's always you."):s[0]==="commit"&&s.includes("-m")?e(`<span class="yellow">[master 1337abc] ${s[s.indexOf("-m")+1]||"fix bugs"}
 420 files changed, 69 insertions(+), 0 deletions(-)</span>`):e('<span class="dim">usage: git <command> [<args>]</span>');break;case"docker":e(`Cannot connect to the Docker daemon at unix:///var/run/docker.sock.
<span class="dim">Is the Docker daemon running?</span>
<span class="dim">(Spoiler: No, this is a website)</span>`);break;case"python":case"python3":e(`Python 3.11.0 (main, Oct 24 2022, 00:00:00)
>>> print("Hello, World!")
Hello, World!
>>> exit()
<span class="dim">(Okay, that's all the Python we have)</span>`);break;case"node":e(`Welcome to Node.js v20.0.0.
> console.log("Hello!")
Hello!
undefined
> <span class="dim">(This is as far as we go)</span>`);break;case"cargo":e(`<span class="yellow">    Compiling</span> website v1.0.0
<span class="yellow">    Finished</span> release [optimized] target(s) in 0.42s`);break;case"gcc":case"g++":case"clang":e(`<span class="err">${p}: fatal error: no input files
compilation terminated.</span>`);break;case"chmod":s[0]==="777"?e('<span class="err">chmod: Nice try, but we care about security here.</span>'):e('<span class="err">chmod: changing permissions denied</span>');break;case"chown":e(`<span class="err">chown: nice try, you're still just a guest</span>`);break;case"touch":e(`<span class="dim">${s[0]||"file"}: File created (just kidding, read-only fs)</span>`);break;case"mkdir":e('<span class="err">mkdir: cannot create directory: Read-only file system</span>');break;case"history":$.forEach((t,n)=>{e(`  ${n+1}  ${t}`)});break;case"cal":const _=new Date,P=_.toLocaleString("default",{month:"long"});e(`<span class="cyan">    ${P} ${_.getFullYear()}</span>
Su Mo Tu We Th Fr Sa
          1  2  3  4
 5  6  7  8  9 10 11
12 13 14 15 16 17 18
19 20 21 22 23 24 25
26 27 28 29 30 31`);break;case"yes":e(`y
y
y
y
y
<span class="dim">^C (I stopped it for you. You're welcome.)</span>`);break;case"grep":e(`<span class="dim">grep: No pattern provided
Usage: grep [OPTION]... PATTERN [FILE]...</span>`);break;case"awk":case"sed":e(`<span class="dim">You know ${p}? Impressive.
Unfortunately, I don't.</span>`);break;case"man":s[0]?e(`No manual entry for ${s[0]}
<span class="dim">Try 'help' instead.</span>`):e(`What manual page do you want?
<span class="dim">For example: man man</span>`);break;case"lsusb":e(`Bus 001 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub
Bus 001 Device 002: ID c0ff:ee00 Coffee Machine USB
Bus 001 Device 003: ID dead:beef Mystery Device`);break;case"lspci":e(`00:00.0 Host bridge: Faith Technologies Inc.
00:01.0 VGA compatible controller: Imagination Unlimited
00:02.0 Network controller: Prayer Wireless Corp.`);break;case"dmesg":e(a.bootMessages.join(`
`));break;case"reboot":case"shutdown":case"poweroff":case"init":e(`<span class="err">System is going down for reboot NOW!</span>
<span class="dim">...</span>
<span class="dim">Just kidding. Refresh the page if you want that.</span>`);break;case"alias":e(`alias ll='ls -la'
alias please='sudo'
alias yeet='rm -rf'
alias yolo='git push --force'`);break;case"which":s[0]?e(`/usr/bin/${s[0]}`):e('<span class="err">which: missing argument</span>');break;case"whereis":e(`${s[0]||"command"}: /usr/bin/${s[0]||"command"} /usr/share/man/man1/${s[0]||"command"}.1.gz`);break;case"lolcat":e('<span style="color:#ff0000">Y</span><span style="color:#ff7f00">o</span><span style="color:#ffff00">u</span> <span style="color:#00ff00">f</span><span style="color:#0000ff">o</span><span style="color:#4b0082">u</span><span style="color:#9400d3">n</span><span style="color:#ff0000">d</span> <span style="color:#ff7f00">t</span><span style="color:#ffff00">h</span><span style="color:#00ff00">e</span> <span style="color:#0000ff">r</span><span style="color:#4b0082">a</span><span style="color:#9400d3">i</span><span style="color:#ff0000">n</span><span style="color:#ff7f00">b</span><span style="color:#ffff00">o</span><span style="color:#00ff00">w</span><span style="color:#0000ff">!</span>');break;case"cmatrix":E();break;case"nyancat":e(`<span style="color:#ff7f7f">░░░░░░░░░░░░░░░░░░░░░░░░░░░░░</span>
<span style="color:#ff7f7f">░░░░░░░░░░▄▄▄▄▄▄▄▄▄▄▄░░░░░░░░</span>
<span style="color:#ffff7f">░░░░░░░░▄▀░░░░░░░░░░░▀▄░░░░░░</span>
<span style="color:#7fff7f">░░░░░░░█░░▄░░░░▄░░░░░░█░░░░░░</span>
<span style="color:#7fffff">░░░░░░░█░░░░░░░░░░░░░░█░░░░░░</span>
<span style="color:#7f7fff">░░░░░░░█░░░░░░░░░░░░░░█░░░░░░</span>
<span style="color:#ff7fff">░░░░░░░█░░░░░░░░░░░░░░█░░░░░░</span>
<span class="dim">~Nyan!</span>`);break;case"figlet":case"toilet":const D=s.join(" ")||"Hi";e(`<span class="cyan"> _  _  _
| || |(_)
| __ || |
|_||_||_|</span>
<span class="dim">(Imagine "${D}" in big ASCII letters)</span>`);break;case"telnet":s[0]?.includes("towel.blinkenlights.nl")?e(`<span class="yellow">A long time ago in a galaxy far, far away....</span>
<span class="dim">(ASCII Star Wars - google it!)</span>`):e(`Trying ${s[0]||"127.0.0.1"}...
<span class="err">telnet: Unable to connect to remote host</span>`);break;case"factor":s[0]?e(`${s[0]}: ${s[0]} is probably prime (I didn't actually check)`):e('<span class="err">factor: missing operand</span>');break;case"rev":e((s.join(" ")||"hello").split("").reverse().join(""));break;case"tac":e(`cat spelled backwards, outputs file in reverse.
<span class="dim">Also: I'm a tac, not a cat.</span>`);break;case"shred":e(`<span class="err">shred: Nice try, but we don't destroy things here.</span>`);break;case"dd":e('<span class="err">dd: The disk destroyer has been disabled for your safety.</span>');break;case":(){ :|:& };:":case"fork":e(`<span class="err">Fork bomb detected and neutralized.
Nice try, but this terminal is fork-proof.</span>`);break;case"tree":e(`<span class="dir">.</span>
├── <span class="dir">projects</span>
│   └── README.md
├── about.txt
├── contact.txt
└── <span class="dim">.secrets</span>

1 directory, 4 files`);break;default:e(`<span class="err">${p}: command not found</span>`)}}function E(){const o="ﾊﾐﾋｰｳｼﾅﾓﾆｻﾜﾂｵﾘｱﾎﾃﾏｹﾒｴｶｷﾑﾕﾗｾﾈｽﾀﾇﾍ012345789Z";let r=0;const l=40;i.disabled=!0;const p=setInterval(()=>{let s="";for(let d=0;d<50;d++)s+=o[Math.floor(Math.random()*o.length)];e(`<span style="color:#00ff00">${s}</span>`),r++,r>=l&&(clearInterval(p),e(`
<span class="cyan">Wake up, Neo...</span>
`),i.disabled=!1,i.focus({preventScroll:!0}))},60)}function R(){const o=["Accessing mainframe...",'Bypassing firewall....... [<span class="exec">OK</span>]','Decrypting hash.......... [<span class="exec">OK</span>]','Injecting payload........ [<span class="exec">OK</span>]','Escalating privileges.... [<span class="exec">OK</span>]','Downloading RAM.......... [<span class="exec">OK</span>]',"",'<span class="err">JUST KIDDING</span>','<span class="dim">This is a personal website, not NORAD.</span>'];i.disabled=!0;let r=0;const l=setInterval(()=>{r<o.length?(e(o[r]),r++):(clearInterval(l),e(""),i.disabled=!1,i.focus({preventScroll:!0}))},500)}i.addEventListener("keydown",o=>{if(o.key==="Enter"){const r=i.value;r.trim()&&($.push(r),g=$.length),F(r),i.value=""}else o.key==="ArrowUp"?(o.preventDefault(),g>0&&(g--,i.value=$[g])):o.key==="ArrowDown"?(o.preventDefault(),g<$.length-1?(g++,i.value=$[g]):(g=$.length,i.value="")):o.key==="Tab"&&(o.preventDefault(),H())});function H(){const o=i.value,r=o.split(/\s+/),l=r.length<=1,p=r[r.length-1]||"",s=r.length>1?r.slice(0,-1).join(" ")+" ":"";let d=[];if(l)d=["help","ls","cat","cd","pwd","whoami","clear","neofetch","echo","date","uptime","uname","ping","fortune","cowsay","sudo","exit","logout","matrix","hack","coffee","rm","make"].filter(u=>u.startsWith(p.toLowerCase()));else{const y=r[0].toLowerCase(),u=v[h]||[];y==="cd"?(d=u.filter(m=>m.endsWith("/")).map(m=>m.replace("/","")).filter(m=>m.startsWith(p)),"..".startsWith(p)&&d.push(".."),"~".startsWith(p)&&d.push("~")):y==="cat"||y==="less"||y==="more"?d=u.filter(m=>!m.endsWith("/")).filter(m=>m.startsWith(p)):d=u.filter(m=>m.startsWith(p))}if(d.length!==0)if(d.length===1)i.value=s+d[0],l&&(i.value+=" ");else{const y=B(d);y.length>p.length?i.value=s+y:(e(`${x()}<span class="cmd">${o}</span>`),e(d.map(u=>v[h]?.includes(u+"/")?`<span class="dir">${u}/</span>`:u).join("  ")))}}function B(o){if(o.length===0)return"";if(o.length===1)return o[0];let r=o[0];for(let l=1;l<o.length;l++)for(;o[l].indexOf(r)!==0;)if(r=r.substring(0,r.length-1),r==="")return"";return r}document.addEventListener("click",()=>i.focus({preventScroll:!0}));function G(){document.getElementById("input-line").style.visibility="hidden",i.disabled=!0;const o=fetch("https://ipapi.co/json/").then(l=>l.json()).then(l=>`${l.ip} (${l.city}, ${l.region_code})`).catch(()=>"127.0.0.1 (localhost)"),r=document.createElement("span");r.textContent="█",r.style.animation="blink-cursor 1s step-end infinite",T.appendChild(r),setTimeout(async()=>{const l=await o;r.remove();const p=`<span class="dim">${a.hostname} server</span>
<span class="dim">kernel ${a.kernel} on x86_64</span>
<span class="dim">Last login from ${l}</span>
<span class="dim">This session may be monitored</span>

<span class="cyan">Welcome to ${a.hostname}!</span>

Type <span class="exec">help</span> for available commands.
Try <span class="exec">ls</span> and <span class="exec">cat</span> to explore.
`;e(p),N.innerHTML=x(),document.getElementById("input-line").style.visibility="visible",i.disabled=!1,i.focus({preventScroll:!0})},2e3)}G();
