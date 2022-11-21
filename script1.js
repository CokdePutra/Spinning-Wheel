var padding = { top: 20, right: 40, bottom: 0, left: 0 },
  w = 500 - padding.left - padding.right,
  h = 500 - padding.top - padding.bottom,
  r = Math.min(w, h) / 2,
  rotation = 0,
  oldrotation = 0,
  picked = 100000,
  oldpick = [],
  color = d3.scale.category20(); //category20c()
//randomNumbers = getRandomNumbers();

//http://osric.com/bingo-card-generator/?title=HTML+and+CSS+BINGO!&words=padding%2Cfont-family%2Ccolor%2Cfont-weight%2Cfont-size%2Cbackground-color%2Cnesting%2Cbottom%2Csans-serif%2Cperiod%2Cpound+sign%2C%EF%B9%A4body%EF%B9%A5%2C%EF%B9%A4ul%EF%B9%A5%2C%EF%B9%A4h1%EF%B9%A5%2Cmargin%2C%3C++%3E%2C{+}%2C%EF%B9%A4p%EF%B9%A5%2C%EF%B9%A4!DOCTYPE+html%EF%B9%A5%2C%EF%B9%A4head%EF%B9%A5%2Ccolon%2C%EF%B9%A4style%EF%B9%A5%2C.html%2CHTML%2CCSS%2CJavaScript%2Cborder&freespace=true&freespaceValue=Web+Design+Master&freespaceRandom=false&width=5&height=5&number=35#results

var data = [
  {
    label: "Paket 1",
    value: 1,
    question: `
    <p>
    Paket 1
    <br>
    <br>
    1. Apa pengertian dari Paparan Deskriptif
    <br>
    2. Sebutkan 2 contoh Paparan Naratif
    <br>
    3. Sebutkan minimal 1 ciri-ciri dari Paparan Persuasif
    <br>
    4. Sebutkan bagian bagian Bentuk Media Promosi
    <br>
    5. Jelaskan apa itu Penjualan Pribadi (Personal Selling)
    <br>
    6. Sebutkan beberapa hal yang perlu di perhatikan dalam memilih Media Promosi
    </p>
    `,
  },
  {
    label: "Paket 2",
    value: 2,
    question: `
    <p>
    Paket 2
    <br>
    <br>
    1.Apa Pengertian dari Paparan Naratif
    <br>
    2. Sebutkan 1 contoh Paparan Argumentatif
    <br>
    3. Apa perbedaan dari Paparan Naratif dan Paparan Argumentatif
    <br>
    4. Sebutkan 3 Tujuan Utama Promosi
    <br>
    5. Sebutkan macam-macam Media Promosi
    <br>
    6. Sebutkan beberapa hal yang perlu di perhatikan dalam memilih Media Promosi
    </p>
    `,
  },
  {
    label: "Paket 3",
    value: 3,
    question: `
    <p>
    Paket 3
    <br>
    <br>
    1. Apa pengertian dari Paparan Argumentatif
    <br>
    2. Sebutkan 2 contoh Paparan Persuasif
    <br>
    3. Apa yang dimaksud dengan Media Promosi
    <br>
    4. Apa pengertian Direct Marketing dan sebutkan 1 contohnya
    <br>
    5. Apa itu Sales Promotion (Promosi Penjualan)
    <br>
    6. Sebutkan beberapa hal yang perlu di perhatikan dalam memilih Media Promosi
    </p>
    `,
  },
  {
    label: "Paket 4",
    value: 4,
    question: `
    <p>
    Paket 4
    <br>
    <br>
    1. Apa Pengertian dari Paparan Persuasif
    <br>
    2. Sebutkan minimal 1 contoh Paparan Deskriptif
    <br>
    3. Sebutkan minimal 1 ciri-ciri dari Paparan Naratif
    <br>
    4. Apa yang dimaksud dengan Bentuk Media Promosi
    <br>
    5. Sebutkan 2 contoh dari masing masing Media Promosi
    <br>
    6. Sebutkan beberapa hal yang perlu di perhatikan dalam memilih Media Promosi
    </p>
    `,
  },
  {
    label: "Paket 1",
    value: 1,
    question: `
    <p>
    Paket 1
    <br>
    <br>
    1. Apa pengertian dari Paparan Deskriptif
    <br>
    2. Sebutkan 2 contoh Paparan Naratif
    <br>
    3. Sebutkan minimal 1 ciri-ciri dari Paparan Persuasif
    <br>
    4. Sebutkan bagian bagian Bentuk Media Promosi
    <br>
    5. Jelaskan apa itu Penjualan Pribadi (Personal Selling)
    <br>
    6. Sebutkan beberapa hal yang perlu di perhatikan dalam memilih Media Promosi
    </p>
    `,
  },
  {
    label: "Paket 2",
    value: 2,
    question: `
    <p>
    Paket 2
    <br>
    <br>
    1.Apa Pengertian dari Paparan Naratif
    <br>
    2. Sebutkan 1 contoh Paparan Argumentatif
    <br>
    3. Apa perbedaan dari Paparan Naratif dan Paparan Argumentatif
    <br>
    4. Sebutkan 3 Tujuan Utama Promosi
    <br>
    5. Sebutkan macam-macam Media Promosi
    <br>
    6. Sebutkan beberapa hal yang perlu di perhatikan dalam memilih Media Promosi
    </p>
    `,
  },
  {
    label: "Paket 3",
    value: 3,
    question: `
    <p>
    Paket 3
    <br>
    <br>
    1. Apa pengertian dari Paparan Argumentatif
    <br>
    2. Sebutkan 2 contoh Paparan Persuasif
    <br>
    3. Apa yang dimaksud dengan Media Promosi
    <br>
    4. Apa pengertian Direct Marketing dan sebutkan 1 contohnya
    <br>
    5. Apa itu Sales Promotion (Promosi Penjualan)
    <br>
    6. Sebutkan beberapa hal yang perlu di perhatikan dalam memilih Media Promosi
    </p>
    `,
  },
  {
    label: "Paket 4",
    value: 4,
    question: `
    <p>
    Paket 4
    <br>
    <br>
    1. Apa Pengertian dari Paparan Persuasif
    <br>
    2. Sebutkan minimal 1 contoh Paparan Deskriptif
    <br>
    3. Sebutkan minimal 1 ciri-ciri dari Paparan Naratif
    <br>
    4. Apa yang dimaksud dengan Bentuk Media Promosi
    <br>
    5. Sebutkan 2 contoh dari masing masing Media Promosi
    <br>
    6. Sebutkan beberapa hal yang perlu di perhatikan dalam memilih Media Promosi
    </p>
    `,
  },
];

var svg = d3
  .select("#chart")
  .append("svg")
  .data([data])
  .attr("width", w + padding.left + padding.right)
  .attr("height", h + padding.top + padding.bottom);

var container = svg
  .append("g")
  .attr("class", "chartholder")
  .attr(
    "transform",
    "translate(" + (w / 2 + padding.left) + "," + (h / 2 + padding.top) + ")"
  );

var vis = container.append("g");

var pie = d3.layout
  .pie()
  .sort(null)
  .value(function (d) {
    return 1;
  });

// declare an arc generator function
var arc = d3.svg.arc().outerRadius(r);

// select paths, use arc generator to draw
var arcs = vis
  .selectAll("g.slice")
  .data(pie)
  .enter()
  .append("g")
  .attr("class", "slice");

arcs
  .append("path")
  .attr("fill", function (d, i) {
    return color(i);
  })
  .attr("d", function (d) {
    return arc(d);
  });

// add the text
arcs
  .append("text")
  .attr("transform", function (d) {
    d.innerRadius = 0;
    d.outerRadius = r;
    d.angle = (d.startAngle + d.endAngle) / 2;
    return (
      "rotate(" +
      ((d.angle * 180) / Math.PI - 90) +
      ")translate(" +
      (d.outerRadius - 10) +
      ")"
    );
  })
  .attr("text-anchor", "end")
  .text(function (d, i) {
    return data[i].label;
  });

container.on("click", spin);

function spin(d) {
  container.on("click", null);

  var ps = 360 / data.length,
    pieslice = Math.round(1440 / data.length),
    rng = Math.floor(Math.random() * 1440 + 360);

  rotation = Math.round(rng / ps) * ps;

  picked = Math.round(data.length - (rotation % 360) / ps);
  picked = picked >= data.length ? picked % data.length : picked;

  rotation += 90 - Math.round(ps / 2);

  vis
    .transition()
    .duration(3000)
    .attrTween("transform", rotTween)
    .each("end", function () {
      //populate question
      d3.select("#question h1").html(data[picked].question);

      let val = data[picked].value;
      console.log(val);
      if (val == 1) {
        // alert("Selamat Kamu Mendapatkan Soal Paket 1");
        window.location.href = "Paket1";
      } else if (val == 2) {
        // alert("Selamat Kamu Mendapatkan Soal Paket 2");
        window.location.href = "Paket1";
      } else if (val == 3) {
        // alert("Selamat Kamu Mendapatkan Soal Paket 3");
        window.location.href = "Paket1";
      } else if (val == 4) {
        // alert("Selamat Kamu Mendapatkan Soal Paket 4");
        window.location.href = "Paket1";
      }

      oldrotation = rotation;

      container.on("click", spin);
    });
}

//make arrow
svg
  .append("g")
  .attr(
    "transform",
    "translate(" +
      (w + padding.left + padding.right) +
      "," +
      (h / 2 + padding.top) +
      ")"
  )
  .append("path")
  .attr("d", "M-" + r * 0.15 + ",0L0," + r * 0.05 + "L0,-" + r * 0.05 + "Z")
  .style({ fill: "black" });

//draw spin circle
container
  .append("circle")
  .attr("cx", 0)
  .attr("cy", 0)
  .attr("r", 60)
  .style({ fill: "white", cursor: "pointer" });

//spin text
container
  .append("text")
  .attr("x", 0)
  .attr("y", 15)
  .attr("text-anchor", "middle")
  .text("SPIN")
  .style({ "font-weight": "bold", "font-size": "30px" });

function rotTween(to) {
  var i = d3.interpolate(oldrotation % 360, rotation);
  return function (t) {
    return "rotate(" + i(t) + ")";
  };
}

function getRandomNumbers() {
  var array = new Uint16Array(1000);
  var scale = d3.scale.linear().range([360, 1440]).domain([0, 100000]);

  if (
    window.hasOwnProperty("crypto") &&
    typeof window.crypto.getRandomValues === "function"
  ) {
    window.crypto.getRandomValues(array);
    console.log("works");
  } else {
    //no support for crypto, get crappy random numbers
    for (var i = 0; i < 1000; i++) {
      array[i] = Math.floor(Math.random() * 100000) + 1;
    }
  }

  return array;
}
