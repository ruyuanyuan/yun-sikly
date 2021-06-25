<template>
  <div class="yun-color">
    <div class='yun-color-custom'>
        <input id='yuncolor' class='custom-color' type="color" @change='changeColor'>
        <input id='copy' type="text">
    </div>
    <table border="0" class='yun-color-table'>
      <tbody>
        <tr >
          <td height="30" width="95" bgcolor="#ffffff">#FFFFFF</td>
          <td height="30" width="95" bgcolor="#dddddd">#DDDDDD</td>
          <td height="30" width="95" bgcolor="#aaaaaa">#AAAAAA</td>
          <td height="30" width="95" bgcolor="#888888">#888888</td>
          <td height="30" width="95" bgcolor="#666666">#666666</td>
          <td height="30" width="95" bgcolor="#444444">#444444</td>
          <td height="30" width="95" bgcolor="#000000">#000000</td>
        </tr>
        <tr>
          <td height="30" width="95" bgcolor="#ffb7dd">#FFB7DD</td>
          <td height="30" width="95" bgcolor="#ff88c2">#FF88C2</td>
          <td height="30" width="95" bgcolor="#ff44aa">#FF44AA</td>
          <td height="30" width="95" bgcolor="#ff0088">#FF0088</td>
          <td height="30" width="95" bgcolor="#c10066">#C10066</td>
          <td height="30" width="95" bgcolor="#a20055">#A20055</td>
          <td height="30" width="95" bgcolor="#8c0044">#8C0044</td>
        </tr>
        <tr>
          <td height="30" width="95" bgcolor="#ffcccc">#FFCCCC</td>
          <td height="30" width="95" bgcolor="#ff8888">#FF8888</td>
          <td height="30" width="95" bgcolor="#ff3333">#FF3333</td>
          <td height="30" width="95" bgcolor="#ff0000">#FF0000</td>
          <td height="30" width="95" bgcolor="#cc0000">#CC0000</td>
          <td height="30" width="95" bgcolor="#aa0000">#AA0000</td>
          <td height="30" width="95" bgcolor="#880000">#880000</td>
        </tr>
        <tr>
          <td height="30" width="95" bgcolor="#ffc8b4">#FFC8B4</td>
          <td height="30" width="95" bgcolor="#ffa488">#FFA488</td>
          <td height="30" width="95" bgcolor="#ff7744">#FF7744</td>
          <td height="30" width="95" bgcolor="#ff5511">#FF5511</td>
          <td height="30" width="95" bgcolor="#e63f00">#E63F00</td>
          <td height="30" width="95" bgcolor="#c63300">#C63300</td>
          <td height="30" width="95" bgcolor="#a42d00">#A42D00</td>
        </tr>
        <tr>
          <td height="30" width="95" bgcolor="#ffddaa">#FFDDAA</td>
          <td height="30" width="95" bgcolor="#ffbb66">#FFBB66</td>
          <td height="30" width="95" bgcolor="#ffaa33">#FFAA33</td>
          <td height="30" width="95" bgcolor="#ff8800">#FF8800</td>
          <td height="30" width="95" bgcolor="#ee7700">#EE7700</td>
          <td height="30" width="95" bgcolor="#cc6600">#CC6600</td>
          <td height="30" width="95" bgcolor="#bb5500">#BB5500</td>
        </tr>
        <tr>
          <td height="30" width="95" bgcolor="#ffee99">#FFEE99</td>
          <td height="30" width="95" bgcolor="#ffdd55">#FFDD55</td>
          <td height="30" width="95" bgcolor="#ffcc22">#FFCC22</td>
          <td height="30" width="95" bgcolor="#ffbb00">#FFBB00</td>
          <td height="30" width="95" bgcolor="#ddaa00">#DDAA00</td>
          <td height="30" width="95" bgcolor="#aa7700">#AA7700</td>
          <td height="30" width="95" bgcolor="#886600">#886600</td>
        </tr>
        <tr>
          <td height="30" width="95" bgcolor="#ffffbb">#FFFFBB</td>
          <td height="30" width="95" bgcolor="#ffff77">#FFFF77</td>
          <td height="30" width="95" bgcolor="#ffff33">#FFFF33</td>
          <td height="30" width="95" bgcolor="#ffff00">#FFFF00</td>
          <td height="30" width="95" bgcolor="#eeee00">#EEEE00</td>
          <td height="30" width="95" bgcolor="#bbbb00">#BBBB00</td>
          <td height="30" width="95" bgcolor="#888800">#888800</td>
        </tr>
        <tr>
          <td height="30" width="95" bgcolor="#eeffbb">#EEFFBB</td>
          <td height="30" width="95" bgcolor="#ddff77">#DDFF77</td>
          <td height="30" width="95" bgcolor="#ccff33">#CCFF33</td>
          <td height="30" width="95" bgcolor="#bbff00">#BBFF00</td>
          <td height="30" width="95" bgcolor="#99dd00">#99DD00</td>
          <td height="30" width="95" bgcolor="#88aa00">#88AA00</td>
          <td height="30" width="95" bgcolor="#668800">#668800</td>
        </tr>
        <tr>
          <td height="30" width="95" bgcolor="#ccff99">#CCFF99</td>
          <td height="30" width="95" bgcolor="#bbff66">#BBFF66</td>
          <td height="30" width="95" bgcolor="#99ff33">#99FF33</td>
          <td height="30" width="95" bgcolor="#77ff00">#77FF00</td>
          <td height="30" width="95" bgcolor="#66dd00">#66DD00</td>
          <td height="30" width="95" bgcolor="#55aa00">#55AA00</td>
          <td height="30" width="95" bgcolor="#227700">#227700</td>
        </tr>
        <tr>
          <td height="30" width="95" bgcolor="#99ff99">#99FF99</td>
          <td height="30" width="95" bgcolor="#66ff66">#66FF66</td>
          <td height="30" width="95" bgcolor="#33ff33">#33FF33</td>
          <td height="30" width="95" bgcolor="#00ff00">#00FF00</td>
          <td height="30" width="95" bgcolor="#00dd00">#00DD00</td>
          <td height="30" width="95" bgcolor="#00aa00">#00AA00</td>
          <td height="30" width="95" bgcolor="#008800">#008800</td>
        </tr>
        <tr>
          <td height="30" width="95" bgcolor="#bbffee">#BBFFEE</td>
          <td height="30" width="95" bgcolor="#77ffcc">#77FFCC</td>
          <td height="30" width="95" bgcolor="#33ffaa">#33FFAA</td>
          <td height="30" width="95" bgcolor="#00ff99">#00FF99</td>
          <td height="30" width="95" bgcolor="#00dd77">#00DD77</td>
          <td height="30" width="95" bgcolor="#00aa55">#00AA55</td>
          <td height="30" width="95" bgcolor="#008844">#008844</td>
        </tr>
        <tr>
          <td height="30" width="95" bgcolor="#aaffee">#AAFFEE</td>
          <td height="30" width="95" bgcolor="#77ffee">#77FFEE</td>
          <td height="30" width="95" bgcolor="#33ffdd">#33FFDD</td>
          <td height="30" width="95" bgcolor="#00ffcc">#00FFCC</td>
          <td height="30" width="95" bgcolor="#00ddaa">#00DDAA</td>
          <td height="30" width="95" bgcolor="#00aa88">#00AA88</td>
          <td height="30" width="95" bgcolor="#008866">#008866</td>
        </tr>
        <tr>
          <td height="30" width="95" bgcolor="#99ffff">#99FFFF</td>
          <td height="30" width="95" bgcolor="#66ffff">#66FFFF</td>
          <td height="30" width="95" bgcolor="#33ffff">#33FFFF</td>
          <td height="30" width="95" bgcolor="#00ffff">#00FFFF</td>
          <td height="30" width="95" bgcolor="#00dddd">#00DDDD</td>
          <td height="30" width="95" bgcolor="#00aaaa">#00AAAA</td>
          <td height="30" width="95" bgcolor="#008888">#008888</td>
        </tr>
        <tr>
          <td height="30" width="95" bgcolor="#cceeff">#CCEEFF</td>
          <td height="30" width="95" bgcolor="#77ddff">#77DDFF</td>
          <td height="30" width="95" bgcolor="#33ccff">#33CCFF</td>
          <td height="30" width="95" bgcolor="#00bbff">#00BBFF</td>
          <td height="30" width="95" bgcolor="#009fcc">#009FCC</td>
          <td height="30" width="95" bgcolor="#0088a8">#0088A8</td>
          <td height="30" width="95" bgcolor="#007799">#007799</td>
        </tr>
        <tr>
          <td height="30" width="95" bgcolor="#ccddff">#CCDDFF</td>
          <td height="30" width="95" bgcolor="#99bbff">#99BBFF</td>
          <td height="30" width="95" bgcolor="#5599ff">#5599FF</td>
          <td height="30" width="95" bgcolor="#0066ff">#0066FF</td>
          <td height="30" width="95" bgcolor="#0044bb">#0044BB</td>
          <td height="30" width="95" bgcolor="#003c9d">#003C9D</td>
          <td height="30" width="95" bgcolor="#003377">#003377</td>
        </tr>
        <tr>
          <td height="30" width="95" bgcolor="#ccccff">#CCCCFF</td>
          <td height="30" width="95" bgcolor="#9999ff">#9999FF</td>
          <td height="30" width="95" bgcolor="#5555ff">#5555FF</td>
          <td height="30" width="95" bgcolor="#0000ff">#0000FF</td>
          <td height="30" width="95" bgcolor="#0000cc">#0000CC</td>
          <td height="30" width="95" bgcolor="#0000aa">#0000AA</td>
          <td height="30" width="95" bgcolor="#000088">#000088</td>
        </tr>
        <tr>
          <td height="30" width="95" bgcolor="#ccbbff">#CCBBFF</td>
          <td height="30" width="95" bgcolor="#9f88ff">#9F88FF</td>
          <td height="30" width="95" bgcolor="#7744ff">#7744FF</td>
          <td height="30" width="95" bgcolor="#5500ff">#5500FF</td>
          <td height="30" width="95" bgcolor="#4400cc">#4400CC</td>
          <td height="30" width="95" bgcolor="#2200aa">#2200AA</td>
          <td height="30" width="95" bgcolor="#220088">#220088</td>
        </tr>
        <tr>
          <td height="30" width="95" bgcolor="#d1bbff">#D1BBFF</td>
          <td height="30" width="95" bgcolor="#b088ff">#B088FF</td>
          <td height="30" width="95" bgcolor="#9955ff">#9955FF</td>
          <td height="30" width="95" bgcolor="#7700ff">#7700FF</td>
          <td height="30" width="95" bgcolor="#5500dd">#5500DD</td>
          <td height="30" width="95" bgcolor="#4400b3">#4400B3</td>
          <td height="30" width="95" bgcolor="#3a0088">#3A0088</td>
        </tr>
        <tr>
          <td height="30" width="95" bgcolor="#e8ccff">#E8CCFF</td>
          <td height="30" width="95" bgcolor="#d28eff">#D28EFF</td>
          <td height="30" width="95" bgcolor="#b94fff">#B94FFF</td>
          <td height="30" width="95" bgcolor="#9900ff">#9900FF</td>
          <td height="30" width="95" bgcolor="#7700bb">#7700BB</td>
          <td height="30" width="95" bgcolor="#66009d">#66009D</td>
          <td height="30" width="95" bgcolor="#550088">#550088</td>
        </tr>
        <tr>
          <td height="30" width="95" bgcolor="#f0bbff">#F0BBFF</td>
          <td height="30" width="95" bgcolor="#e377ff">#E38EFF</td>
          <td height="30" width="95" bgcolor="#d93eff">#E93EFF</td>
          <td height="30" width="95" bgcolor="#cc00ff">#CC00FF</td>
          <td height="30" width="95" bgcolor="#a500cc">#A500CC</td>
          <td height="30" width="95" bgcolor="#7a0099">#7A0099</td>
          <td height="30" width="95" bgcolor="#660077">#660077</td>
        </tr>
        <tr>
          <td height="30" width="95" bgcolor="#ffb3ff">#FFB3FF</td>
          <td height="30" width="95" bgcolor="#ff77ff">#FF77FF</td>
          <td height="30" width="95" bgcolor="#ff3eff">#FF3EFF</td>
          <td height="30" width="95" bgcolor="#ff00ff">#FF0 0FF</td>
          <td height="30" width="95" bgcolor="#cc00cc">#CC00CC</td>
          <td height="30" width="95" bgcolor="#990099">#990099</td>
          <td height="30" width="95" bgcolor="#770077">#770077</td>
        </tr>
      </tbody>
    </table>
    
  </div>
</template>

<script>
export default {
  name: "yun-color",
  data() {
    return {
    };
  },
  mounted () {
    this.$nextTick(()=>{
        let tds = document.getElementsByTagName('td');
        [...tds].forEach(td => {
            td.onclick=function(){
                let input = document.getElementById("copy");
                input.value = td.textContent;
                document.getElementById('yuncolor').value=td.textContent;
                 input.select(); // 选中文本
                document.execCommand("copy"); // 执行浏览器复制命令
                alert("复制成功");
            }  
        });
    })
  },
  methods: {
      changeColor(){
          let input = document.getElementById("copy");
          input.value = document.getElementById('yuncolor').value;
      }
  }
};
</script>
<style lang='scss' scoped>
.yun-color {
  width: 100%;
  .yun-color-custom{
      width:100%;
      margin-bottom:15px;
      display: flex;
      input{
          display:inline-block;
           height:30px;
           outline: none;
           border:0;
      }
     .custom-color{
        width:60px;
          height:30px;
          margin-right:15px;
     }
  }
  .yun-color-table{
      text-align: center;
      font-size: 14px;
      td{
          cursor:default;
      }
  }
}
</style>