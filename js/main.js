var ecosystem = document.getElementById('but-1')
ecosystem.onclick = function() {
    // hide icon plus grey
    var ic1 = document.getElementById('ic-1')
    ic1.classList.toggle('hide-ic')
    // show icon plus pink
    var ic2 = document.getElementById('ic-2')
    ic2.classList.toggle('show-ic')
    // show text in container
    var ecosystemInfo = document.getElementById('ecosystem-info')
    ecosystemInfo.classList.toggle('show-info')
    // hide content 2 and 3
    var creatorInfo = document.getElementById('creator-info')
    creatorInfo.classList.toggle('charm-2')
    var builderInfo = document.getElementById('builder-info')
    builderInfo.classList.toggle('charm-3')
}

var creator = document.getElementById('but-2')
creator.onclick = function() {
    var ic3 = document.getElementById('ic-3')
    ic3.classList.toggle('hide-ic')
    
    var ic4 = document.getElementById('ic-4')
    ic4.classList.toggle('show-ic')

    var creatorInfo = document.getElementById('creator-info')
    creatorInfo.classList.toggle('show-info')
    // hide content 1 and 3
    var ecosystemInfo = document.getElementById('ecosystem-info')
    ecosystemInfo.classList.toggle('charm-1')
    var builderInfo = document.getElementById('builder-info')
    builderInfo.classList.toggle('charm-3')
}

var builder = document.getElementById('but-3')
builder.onclick = function() {
    var ic5 = document.getElementById('ic-5')
    ic5.classList.toggle('hide-ic')
    
    var ic6 = document.getElementById('ic-6')
    ic6.classList.toggle('show-ic')

    var builderInfo = document.getElementById('builder-info')
    builderInfo.classList.toggle('show-info')
    // hide content 1 and 2
    var ecosystemInfo = document.getElementById('ecosystem-info')
    ecosystemInfo.classList.toggle('charm-1')
    var creatorInfo = document.getElementById('creator-info')
    creatorInfo.classList.toggle('charm-2')
}
