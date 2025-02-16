const classifyTheme = (fondo:any) => {
    const colors = {
      Oscuro: ["black", "gray-900", "gray-950", "neutral-900", "neutral-950"],
      Neón: ["pink-500", "purple-500", "fuchsia-500", "cyan-500"],
      Azul: ["blue-500", "sky-500", "indigo-500", "blue-800"],
      Cálido: ["yellow-500", "orange-500", "red-500", "amber-500"],
      Turquesa: ["teal-500", "cyan-500", "emerald-500", "green-500"],
      Multicolor: ["rainbow", "gradient-to-r from-red-500 via-yellow-500"],
    };
  
    for (const [theme, keywords] of Object.entries(colors)) {
      if (keywords.some((color) => fondo.class1.includes(color) || fondo.class2?.includes(color) || fondo.class3?.includes(color))) {
        return theme;
      }
    }
  
    return "Otro"; // Si no se detecta un tema específico
  };
export const fondos = [
    {
    class1:"absolute top-0 z-[-2] h-full w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]",
    class2:"",
    class3:"",
    copyClass:'<div class="absolute inset-0 top-0 z-[-2] h-full w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>',
    index:1,
    },
    {
      class1:"relative h-full w-full bg-slate-950",
      class2:"absolute bottom-0 left-[-20%] right-0 top-[-0%] h-full w-full rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]",
      class3:"absolute bottom-0 right-[-20%] top-[-0%] h-full w-full rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]",
    copyClass:'<div class="relative z-[-2] h-full w-full bg-slate-950"><div class="absolute bottom-0 left-0 right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div><div class="absolute  bottom-0 right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div></div>',
    index:2,
    },
    {
      class1:"absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]",
      class2:"",
      class3:"",
    copyClass:'<div class="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>',
    index:3
    },
    {
    class1: "absolute top-0 z-[-2] h-full w-full bg-neutral-900 bg-gradient-to-b from-neutral-900 to-neutral-800",
    class2: "",
    class3: "",
    copyClass: '<div class="absolute inset-0 top-0 z-[-2] h-full w-full bg-neutral-900 bg-gradient-to-b from-neutral-900 to-neutral-800"></div>',
    index: 4
  },{
    class1: "relative h-full w-full bg-slate-800",
    class2: "absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 to-transparent",
    class3: "",
    copyClass: '<div class="relative h-full w-full bg-slate-800"><div class="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 to-transparent"></div></div>',
    index: 5
  },{
    class1: "relative h-full w-full bg-gradient-to-br from-indigo-500 to-sky-500",
    class2: "absolute top-0 left-0 z-10 h-full w-full opacity-25 bg-gradient-to-t from-gray-900 to-transparent",
    class3: "absolute bottom-0 right-0 z-10 h-full w-full opacity-25 bg-gradient-to-b from-gray-900 to-transparent",
    copyClass: '<div class="relative h-full w-full bg-gradient-to-br from-indigo-500 to-sky-500"><div class="absolute top-0 left-0 z-10 h-full w-full opacity-25 bg-gradient-to-t from-gray-900 to-transparent"></div><div class="absolute bottom-0 right-0 z-10 h-full w-full opacity-25 bg-gradient-to-b from-gray-900 to-transparent"></div></div>',
    index: 7
  },{
    class1: "relative h-full w-full bg-gradient-to-br from-amber-500 to-orange-500",
    class2: "absolute top-0 left-0 z-10 h-full w-full opacity-25 bg-gradient-to-t from-gray-900 to-transparent",
    class3: "absolute bottom-0 right-0 z-10 h-full w-full opacity-25 bg-gradient-to-b from-gray-900 to-transparent",
    copyClass: '<div class="relative h-full w-full bg-gradient-to-br from-amber-500 to-orange-500"><div class="absolute top-0 left-0 z-10 h-full w-full opacity-25 bg-gradient-to-t from-gray-900 to-transparent"></div><div class="absolute bottom-0 right-0 z-10 h-full w-full opacity-25 bg-gradient-to-b from-gray-900 to-transparent"></div></div>',
    index: 8
  },{
    class1: "relative h-full w-full bg-gradient-to-br from-teal-500 to-cyan-500",
    class2: "absolute top-0 left-0 z-10 h-full w-full opacity-10 bg-gradient-to-b from-gray-900 to-transparent",
    class3: "absolute bottom-0 right-0 z-10 h-full w-full opacity-50 bg-gradient-to-t from-gray-900 to-transparent",
    copyClass: '<div class="relative h-full w-full bg-gradient-to-br from-teal-500 to-cyan-500"><div class="absolute top-0 left-0 z-10 h-full w-full opacity-10 bg-gradient-to-b from-gray-900 to-transparent"></div><div class="absolute bottom-0 right-0 z-10 h-full w-full opacity-50 bg-gradient-to-t from-gray-900 to-transparent"></div></div>',
    index: 9
  },{
    class1: "absolute top-0 z-[-2] h-full w-full bg-purple-800 bg-gradient-to-b from-purple-800 to-transparent",
    class2: "",
    class3: "",
    copyClass: '<div class="absolute inset-0 top-0 z-[-2] h-full w-full bg-purple-800 bg-gradient-to-b from-purple-400 to-transparent"></div>',
    index: 10
  },
  {
    class1: "relative h-full w-full bg-gradient-to-r from-sky-500 to-transparent",
    class2: "absolute inset-0 rounded-full bg-clip-border",
    class3: "",
    copyClass: '<div class="relative h-full w-full bg-gradient-to-r from-sky-500 to-transparent"><div class="absolute inset-0 rounded-full bg-clip-border"></div></div>',
    index: 11
  },
  {
    class1: "absolute inset-0 z-[-10] h-full w-full bg-gradient-to-br from-indigo-500 to-transparent",
    class2: "",
    class3: "",
    copyClass: '<div class="absolute inset-0 z-[-10] h-full w-full bg-gradient-to-br from-indigo-500 to-transparent"></div>',
    index: 12
  },{
    class1: "relative h-full w-full bg-gray-800",  // Dark gray base
    class2: "absolute inset-0 bg-gradient-to-br from-yellow-500 to-transparent",
    class3: "",
    copyClass: '<div class="relative h-full w-full bg-gray-800"><div class="absolute inset-0 bg-gradient-to-br from-yellow-500 to-transparent"></div></div>',
    index: 13
  },
  {
    class1: "absolute inset-0 z-[-10] h-full w-full bg-gradient-to-br from-emerald-500 to-transparent",
    class2: "absolute inset-0 bg-gradient-to-tl from-teal-300 to-transparent",
    class3: "",
    copyClass: '<div class="absolute inset-0 z-[-10] h-full w-full bg-gradient-to-br from-emerald-500 to-transparent"><div class="absolute inset-0 bg-gradient-to-tl from-teal-300 to-transparent"></div></div>',
    index: 14
  },
  {
    class1: "absolute inset-0 z-[-10] h-full w-full bg-gradient-to-br from-violet-500 to-transparent",
    class2: "absolute inset-0 bg-gradient-to-tl from-fuchsia-300 to-transparent",
    class3: "absolute inset-0 z-1 bg-pattern-dots bg-opacity-25",
    copyClass: '<div class="absolute inset-0 z-[-10] h-full w-full bg-gradient-to-br from-violet-500 to-transparent"><div class="absolute inset-0 bg-gradient-to-tl from-fuchsia-300 to-transparent"></div><div class="absolute inset-0 z-1 bg-pattern-dots bg-opacity-25"></div></div>',
    index: 15
  },{
      class1: "absolute inset-0 z-[-10] h-full w-full bg-gradient-to-bl from-red-500 to-transparent",
      class2: "absolute inset-0 bg-gradient-to-tr from-orange-400 to-transparent",
      class3: "",
      copyClass: '<div class="absolute inset-0 z-[-10] h-full w-full bg-gradient-to-bl from-red-500 to-transparent"><div class="absolute inset-0 bg-gradient-to-tr from-orange-400 to-transparent"></div></div>',
      index: 16
    },
    {
      class1: "relative h-full w-full bg-gray-900",
      class2: "absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 opacity-50",
      class3: "",
      copyClass: '<div class="relative h-full w-full bg-gray-900"><div class="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 opacity-50"></div></div>',
      index: 17
    },
    {
      class1: "absolute inset-0 z-[-10] h-full w-full bg-gradient-to-r from-green-500 to-lime-300",
      class2: "",
      class3: "",
      copyClass: '<div class="absolute inset-0 z-[-10] h-full w-full bg-gradient-to-r from-green-500 to-lime-300"></div>',
      index: 18
    },
    {
      class1: "relative h-full w-full bg-black",
      class2: "absolute inset-0 bg-gradient-to-t from-indigo-700 via-purple-900 to-black opacity-60",
      class3: "",
      copyClass: '<div class="relative h-full w-full bg-black"><div class="absolute inset-0 bg-gradient-to-t from-indigo-700 via-purple-900 to-black opacity-60"></div></div>',
      index: 19
    },
    {
      class1: "absolute inset-0 z-[-10] h-full w-full bg-gradient-to-br from-teal-500 to-green-300",
      class2: "absolute inset-0 bg-gradient-to-tl from-cyan-400 to-transparent opacity-70",
      class3: "",
      copyClass: '<div class="absolute inset-0 z-[-10] h-full w-full bg-gradient-to-br from-teal-500 to-green-300"><div class="absolute inset-0 bg-gradient-to-tl from-cyan-400 to-transparent opacity-70"></div></div>',
      index: 20
    },
    {
      class1: "relative h-full w-full bg-gray-950",
      class2: "absolute inset-0 bg-gradient-to-r from-fuchsia-600 to-transparent",
      class3: "absolute inset-0 bg-pattern-dots bg-opacity-25",
      copyClass: '<div class="relative h-full w-full bg-gray-950"><div class="absolute inset-0 bg-gradient-to-r from-fuchsia-600 to-transparent"></div><div class="absolute inset-0 bg-pattern-dots bg-opacity-25"></div></div>',
      index: 21
    },
    {
      class1: "absolute inset-0 z-[-10] h-full w-full bg-gradient-to-tl from-yellow-500 to-rose-400",
      class2: "absolute inset-0 bg-gradient-to-br from-orange-400 to-transparent opacity-60",
      class3: "",
      copyClass: '<div class="absolute inset-0 z-[-10] h-full w-full bg-gradient-to-tl from-yellow-500 to-rose-400"><div class="absolute inset-0 bg-gradient-to-br from-orange-400 to-transparent opacity-60"></div></div>',
      index: 22
    },
    {
      class1: "relative h-full w-full bg-gray-900",
      class2: "absolute inset-0 bg-gradient-to-tr from-cyan-500 via-blue-600 to-gray-900 opacity-80",
      class3: "",
      copyClass: '<div class="relative h-full w-full bg-gray-900"><div class="absolute inset-0 bg-gradient-to-tr from-cyan-500 via-blue-600 to-gray-900 opacity-80"></div></div>',
      index: 23
    },{
      class1: "relative h-full w-full bg-black",
      class2: "absolute inset-0 bg-gradient-to-t from-blue-800 via-purple-900 to-black opacity-70",
      copyClass: '<div class="relative h-full w-full bg-black"><div class="absolute inset-0 bg-gradient-to-t from-blue-800 via-purple-900 to-black opacity-70"></div></div>',
      index: 24
    },
    {
      class1: "relative h-full w-full bg-black",
      class2: "absolute inset-0 bg-gradient-to-t from-fuchsia-700 via-pink-900 to-black opacity-60",
      copyClass: '<div class="relative h-full w-full bg-black"><div class="absolute inset-0 bg-gradient-to-t from-fuchsia-700 via-pink-900 to-black opacity-60"></div></div>',
      index: 25
    },
    {
      class1: "relative h-full w-full bg-gray-950",
      class2: "absolute inset-0 bg-gradient-to-br from-cyan-700 via-teal-900 to-black opacity-70",
      copyClass: '<div class="relative h-full w-full bg-gray-950"><div class="absolute inset-0 bg-gradient-to-br from-cyan-700 via-teal-900 to-black opacity-70"></div></div>',
      index: 26
    },
    {
      class1: "relative h-full w-full bg-gray-950",
      class2: "absolute inset-0 bg-gradient-to-tl from-rose-800 via-red-900 to-black opacity-75",
      copyClass: '<div class="relative h-full w-full bg-gray-950"><div class="absolute inset-0 bg-gradient-to-tl from-rose-800 via-red-900 to-black opacity-75"></div></div>',
      index: 27
    },
    {
      class1: "relative h-full w-full bg-black",
      class2: "absolute inset-0 bg-gradient-to-bl from-emerald-700 via-green-900 to-black opacity-65",
      copyClass: '<div class="relative h-full w-full bg-black"><div class="absolute inset-0 bg-gradient-to-bl from-emerald-700 via-green-900 to-black opacity-65"></div></div>',
      index: 28
    },
    {
      class1: "relative h-full w-full bg-gray-900",
      class2: "absolute inset-0 bg-gradient-to-b from-indigo-900 via-blue-800 to-black opacity-80",
      copyClass: '<div class="relative h-full w-full bg-gray-900"><div class="absolute inset-0 bg-gradient-to-b from-indigo-900 via-blue-800 to-black opacity-80"></div></div>',
      index: 29
    },
    {
      class1: "relative h-full w-full bg-black",
      class2: "absolute inset-0 bg-gradient-to-t from-gray-800 via-gray-900 to-black opacity-50",
      copyClass: '<div class="relative h-full w-full bg-black"><div class="absolute inset-0 bg-gradient-to-t from-gray-800 via-gray-900 to-black opacity-50"></div></div>',
      index: 30
    },
    {
      class1: "relative h-full w-full bg-black",
      class2: "absolute inset-0 bg-gradient-to-t from-orange-800 via-amber-900 to-black opacity-65",
      copyClass: '<div class="relative h-full w-full bg-black"><div class="absolute inset-0 bg-gradient-to-t from-orange-800 via-amber-900 to-black opacity-65"></div></div>',
      index: 31
    }, {
      class1: "relative h-full w-full bg-black",
      class2: "absolute inset-0 bg-gradient-to-t from-indigo-700 via-purple-900 to-black opacity-60",
      copyClass: '<div class="relative h-full w-full bg-black"><div class="absolute inset-0 bg-gradient-to-t from-indigo-700 via-purple-900 to-black opacity-60"></div></div>',
      index: 32
    },
    // 🌈 **Radial con efecto de iluminación**
    {
      class1: "relative h-full w-full bg-gray-950",
      class2: "absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.2),rgba(0,0,0,0.8))]",
      copyClass: '<div class="relative h-full w-full bg-gray-950"><div class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.2),rgba(0,0,0,0.8))]"></div></div>',
      index: 33
    },
    // 🟡 **Círculo degradado flotante**
    {
      class1: "relative h-full w-full bg-neutral-900",
      class2: "absolute inset-0 flex items-center justify-center",
      class3: "absolute w-60 h-60 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 blur-3xl opacity-50",
      copyClass: '<div class="relative h-full w-full bg-neutral-900"><div class="absolute inset-0 flex items-center justify-center"><div class="absolute w-60 h-60 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 blur-3xl opacity-50"></div></div></div>',
      index: 34
    },
    // 🔳 **Patrón cuadriculado**
    {
      class1: "relative h-full w-full bg-gray-900",
      class2: "absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.05)_25%,transparent_25%,transparent_75%,rgba(255,255,255,0.05)_75%),linear-gradient(45deg,rgba(255,255,255,0.05)_25%,transparent_25%,transparent_75%,rgba(255,255,255,0.05)_75%)] bg-[size:40px_40px]",
      copyClass: '<div class="relative h-full w-full bg-gray-900"><div class="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.05)_25%,transparent_25%,transparent_75%,rgba(255,255,255,0.05)_75%),linear-gradient(45deg,rgba(255,255,255,0.05)_25%,transparent_25%,transparent_75%,rgba(255,255,255,0.05)_75%)] bg-[size:40px_40px]"></div></div>',
      index: 35
    },
    // 🔵 **Anillos concéntricos**
    {
      class1: "relative h-full w-full bg-black",
      class2: "absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_10%,transparent_10%)] bg-[size:80px_80px]",
      copyClass: '<div class="relative h-full w-full bg-black"><div class="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_10%,transparent_10%)] bg-[size:80px_80px]"></div></div>',
      index: 36
    },
    // 🎭 **Degradado diagonal**
    {
      class1: "relative h-full w-full bg-gradient-to-tr from-purple-700 to-cyan-500",
      class2: "",
      copyClass: '<div class="relative h-full w-full bg-gradient-to-tr from-purple-700 to-cyan-500"></div>',
      index: 37
    },
    // 🌸 **Flor de luces con blur**
    {
      class1: "relative h-full w-full bg-gray-900",
      class2: "absolute w-60 h-60 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 blur-3xl opacity-40 top-10 left-10",
      class3: "absolute w-60 h-60 rounded-full bg-gradient-to-bl from-yellow-400 to-red-500 blur-3xl opacity-40 bottom-10 right-10",
      copyClass: '<div class="relative h-full w-full bg-gray-900"><div class="absolute w-60 h-60 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 blur-3xl opacity-40 top-10 left-10"></div><div class="absolute w-60 h-60 rounded-full bg-gradient-to-bl from-yellow-400 to-red-500 blur-3xl opacity-40 bottom-10 right-10"></div></div>',
      index: 38
    },
    // 🌀 **Ondas suaves**
    {
      class1: "relative h-full w-full bg-gray-900",
      class2: "absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.1),transparent)]",
      copyClass: '<div class="relative h-full w-full bg-gray-900"><div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.1),transparent)]"></div></div>',
      index: 39
    },
    // 🔮 **Iluminación tipo neón**
    {
      class1: "relative h-full w-full bg-gray-900",
      class2: "absolute w-64 h-64 rounded-full bg-gradient-to-t from-purple-500 to-transparent opacity-50 blur-2xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
      copyClass: '<div class="relative h-full w-full bg-gray-900"><div class="absolute w-64 h-64 rounded-full bg-gradient-to-t from-purple-500 to-transparent opacity-50 blur-2xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div></div>',
      index: 40
    }, // 1️⃣ 💙 Gradiente suave azul
    {
      class1: "relative h-full w-full bg-gradient-to-r from-blue-500 to-indigo-700",
      copyClass: '<div class="relative h-full w-full bg-gradient-to-r from-blue-500 to-indigo-700"></div>',
      index: 41
    },
    // 2️⃣ 🔥 Esferas con luces difusas
    {
      class1: "relative h-full w-full bg-gray-900",
      class2: "absolute w-64 h-64 rounded-full bg-gradient-to-br from-pink-500 to-purple-700 blur-3xl opacity-50 top-20 left-20",
      class3: "absolute w-64 h-64 rounded-full bg-gradient-to-br from-blue-500 to-teal-600 blur-3xl opacity-50 bottom-20 right-20",
      copyClass: '<div class="relative h-full w-full bg-gray-900"><div class="absolute w-64 h-64 rounded-full bg-gradient-to-br from-pink-500 to-purple-700 blur-3xl opacity-50 top-20 left-20"></div><div class="absolute w-64 h-64 rounded-full bg-gradient-to-br from-blue-500 to-teal-600 blur-3xl opacity-50 bottom-20 right-20"></div></div>',
      index: 42
    },
    // 3️⃣ 🌈 Arco iris sutil
    {
      class1: "relative h-full w-full bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500",
      copyClass: '<div class="relative h-full w-full bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500"></div>',
      index: 43
    },
    // 4️⃣ 🎭 Patrón de líneas diagonales
    {
      class1: "relative h-full w-full bg-gray-900",
      class2: "absolute inset-0 bg-[repeating-linear-gradient(45deg,rgba(255,255,255,0.05)_0px,rgba(255,255,255,0.05)_10px,transparent_10px,transparent_20px)]",
      copyClass: '<div class="relative h-full w-full bg-gray-900"><div class="absolute inset-0 bg-[repeating-linear-gradient(45deg,rgba(255,255,255,0.05)_0px,rgba(255,255,255,0.05)_10px,transparent_10px,transparent_20px)]"></div></div>',
      index: 44
    },
    // 5️⃣ 🟣 Degradado en anillos concéntricos
    {
      class1: "relative h-full w-full bg-black",
      class2: "absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_10%,transparent_10%)] bg-[size:100px_100px]",
      copyClass: '<div class="relative h-full w-full bg-black"><div class="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_10%,transparent_10%)] bg-[size:100px_100px]"></div></div>',
      index: 45
    },
    // 6️⃣ 🔲 Patrón cuadriculado
    {
      class1: "relative h-full w-full bg-gray-900",
      class2: "absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]",
      copyClass: '<div class="relative h-full w-full bg-gray-900"><div class="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div></div>',
      index: 46
    },
  
    // 8️⃣ 🌠 Fondo con estrellas
    {
      class1: "relative h-full w-full bg-black",
      class2: "absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:5px_5px]",
      copyClass: '<div class="relative h-full w-full bg-black"><div class="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:5px_5px]"></div></div>',
      index: 48
    },
    // 9️⃣ 🌊 Ondas suaves
    {
      class1: "relative h-full w-full bg-gray-900",
      class2: "absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.1),transparent)]",
      copyClass: '<div class="relative h-full w-full bg-gray-900"><div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.1),transparent)]"></div></div>',
      index: 49
    },
    // 🔟 🎇 Explosión de color
    {
      class1: "relative h-full w-full bg-black",
      class2: "absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,0,150,0.3),rgba(0,0,0,0))]",
      copyClass: '<div class="relative h-full w-full bg-black"><div class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,0,150,0.3),rgba(0,0,0,0))]"></div></div>',
      index: 50
    },
    {
      class1: "relative h-full w-full bg-gray-900",
      class2: "absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 opacity-60",
      copyClass: '<div class="relative h-full w-full bg-gray-900"><div class="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 opacity-60"></div></div>',
      index: 51
    },
    // 52️⃣ 🌊 Turquesa -> Azul -> Índigo
    {
      class1: "relative h-full w-full bg-gray-900",
      class2: "absolute inset-0 bg-gradient-to-br from-teal-500 via-blue-500 to-indigo-500 opacity-60",
      copyClass: '<div class="relative h-full w-full bg-gray-900"><div class="absolute inset-0 bg-gradient-to-br from-teal-500 via-blue-500 to-indigo-500 opacity-60"></div></div>',
      index: 52
    },
    // 53️⃣ 🌄 Amarillo -> Naranja -> Rojo
    {
      class1: "relative h-full w-full bg-gray-900",
      class2: "absolute inset-0 bg-gradient-to-br from-yellow-500 via-orange-500 to-red-500 opacity-50",
      copyClass: '<div class="relative h-full w-full bg-gray-900"><div class="absolute inset-0 bg-gradient-to-br from-yellow-500 via-orange-500 to-red-500 opacity-50"></div></div>',
      index: 53
    },
    // 54️⃣ 🟣 Púrpura -> Fucsia -> Azul Neón
    {
      class1: "relative h-full w-full bg-gray-900",
      class2: "absolute inset-0 bg-gradient-to-br from-purple-600 via-fuchsia-500 to-blue-500 opacity-60",
      copyClass: '<div class="relative h-full w-full bg-gray-900"><div class="absolute inset-0 bg-gradient-to-br from-purple-600 via-fuchsia-500 to-blue-500 opacity-60"></div></div>',
      index: 54
    },
    // 55️⃣ 🌿 Verde Esmeralda -> Azul Marino
    {
      class1: "relative h-full w-full bg-gray-900",
      class2: "absolute inset-0 bg-gradient-to-br from-emerald-500 via-teal-600 to-blue-800 opacity-55",
      copyClass: '<div class="relative h-full w-full bg-gray-900"><div class="absolute inset-0 bg-gradient-to-br from-emerald-500 via-teal-600 to-blue-800 opacity-55"></div></div>',
      index: 55
    },
    // 56️⃣ 🎨 Rosa Neón -> Naranja Vibrante
    {
      class1: "relative h-full w-full bg-gray-900",
      class2: "absolute inset-0 bg-gradient-to-br from-pink-500 via-red-500 to-orange-500 opacity-55",
      copyClass: '<div class="relative h-full w-full bg-gray-900"><div class="absolute inset-0 bg-gradient-to-br from-pink-500 via-red-500 to-orange-500 opacity-55"></div></div>',
      index: 56
    },
    // 57️⃣ 💠 Azul Eléctrico -> Verde Lima
    {
      class1: "relative h-full w-full bg-gray-900",
      class2: "absolute inset-0 bg-gradient-to-br from-blue-600 via-teal-400 to-lime-500 opacity-55",
      copyClass: '<div class="relative h-full w-full bg-gray-900"><div class="absolute inset-0 bg-gradient-to-br from-blue-600 via-teal-400 to-lime-500 opacity-55"></div></div>',
      index: 57
    },
    // 58️⃣ 🏜 Marrón -> Amarillo Arena
    {
      class1: "relative h-full w-full bg-gray-900",
      class2: "absolute inset-0 bg-gradient-to-br from-yellow-700 via-orange-600 to-brown-500 opacity-50",
      copyClass: '<div class="relative h-full w-full bg-gray-900"><div class="absolute inset-0 bg-gradient-to-br from-yellow-700 via-orange-600 to-brown-500 opacity-50"></div></div>',
      index: 58
    },
    // 59️⃣ 🏝 Celeste -> Turquesa -> Verde
    {
      class1: "relative h-full w-full bg-gray-900",
      class2: "absolute inset-0 bg-gradient-to-br from-cyan-400 via-teal-500 to-green-500 opacity-55",
      copyClass: '<div class="relative h-full w-full bg-gray-900"><div class="absolute inset-0 bg-gradient-to-br from-cyan-400 via-teal-500 to-green-500 opacity-55"></div></div>',
      index: 59
    },
    // 60️⃣ 🔮 Morado Oscuro -> Azul Profundo
    {
      class1: "relative h-full w-full bg-gray-900",
      class2: "absolute inset-0 bg-gradient-to-br from-indigo-900 via-blue-800 to-black opacity-60",
      copyClass: '<div class="relative h-full w-full bg-gray-900"><div class="absolute inset-0 bg-gradient-to-br from-indigo-900 via-blue-800 to-black opacity-60"></div></div>',
      index: 60
    }
  ].map((fondo) => (
    { ...fondo,uuid: crypto.randomUUID(),
        theme: classifyTheme(fondo)
     }))

export const fondosOrdenados = fondos.sort((a, b) => a.theme.localeCompare(b.theme));

