//  **************************************** FIRST TRY NOT WORKED ****************************
let note_desc = []
let note_id = []

let n = localStorage.getItem('note_no')
if (n == null) {
  localStorage.setItem('note_no', 0) 
}

function disp () {
  let n = localStorage.getItem('note_no')
  if (n == null) {
    localStorage.setItem('note_no', 0)
    // let note_desc = []
    // let note_id = []
  } else if (n != null) {
  // let sno = localStorage.getItem('note_no')
    let sdata = JSON.parse(localStorage.getItem('note_desc2'))
    let snote_id = JSON.parse(localStorage.getItem('note_id2'))
    for (let i = 0; i < n; i++) {
      document.getElementById('last').insertAdjacentHTML('beforebegin', `<div id="${snote_id[i]}"><h1>Note : ${i + 1}</h1><p style="text-align: center; width:60%;margin:auto;     background: linear-gradient(150deg,white,brown);
    "> ${sdata[i].desc}</p>
    <button id="delnote" onclick="del_note()">Delete</button>
   </div>`)
      // let note_desc = JSON.parse(localStorage.getItem('note_desc2'))
      // let note_id = JSON.parse(localStorage.getItem('note_id2'))
      //   console.log(snote_id[i])

      //   console.log(sdata[i].desc)
      //   console.log(i+1)
    }
  }
}

// disp()
document.getElementById('add_btn').addEventListener('click', () => {
  let N = parseInt(localStorage.getItem('note_no'))
  N = N + 1
  localStorage.setItem('note_no', N)
  console.log(N)
  // console.log(typeof (nf))
  // let N = parseInt(nf)

  let obj = {
    desc: `${document.getElementById('write_area').value}`,
    id: `note_${N}`

  }
  note_desc.push(obj)
  localStorage.setItem('note_desc2', JSON.stringify(note_desc))

  note_id.push(`note_${N}`)
  localStorage.setItem('note_id2', JSON.stringify(note_id))

  // document.getElementById('last').insertAdjacentHTML('afterend', `<div id="note_${N}"><h1>Note : ${N}</h1><p style="text-align: center; width:60%;margin:auto;     background: linear-gradient(150deg,white,brown);
  // "> ${document.getElementById('write_area').value}</p>
  // <button id="delnote" onclick="del_note()">Delete</button>
  // </div>`)
  window.location.reload()

  disp()

  obj = null
})

document.getElementById('del_all').addEventListener('click', () => {
  localStorage.clear()
  document.getElementById('last_main').remove()
  window.location.reload()
  localStorage.setItem('note_no', 0)
})

function del_note () {
  // }
  let del_btn = document.getElementById('delnote')
  // del_btn.addEventListener('click', () => {
  // console.log('hi')
  // let sn = parseInt(localStorage.getItem('note_no'))

  // let m = 0

  let del_id = del_btn.parentElement
  console.log(del_id)

  // let id_to_del = localStorage.getItem('note_id2')
  // for (let i1 = 0; i1 < sn; i1++) {
  //   // console.log(id_to_del[i1])
  //   if (id_to_del[i1] === del_id) {
  //     m = i1

  //     for (let i2 = m; i2 < sn; i2++) {
  //       let t = id_to_del[i2]
  //       id_to_del[i2] = id_to_del[i2 + 1]
  //       id_to_del[i2 + 1] = t
  //     }
  //     m = 0
  //   }
  //   localStorage.setItem('note_id2', id_to_del)

  //   let del_it = localStorage.getItem('note_desc2')

  //   window.location.reload()

  // }
  // --sn
  // localStorage.setItem('note_no', sn)
}
