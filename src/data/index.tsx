import type { interviewDataType } from "../types";

export const interviewData: interviewDataType[] = [
  {
    id: 1,
    question: "ما هو HTML؟",
    difficulty: "مبتدئ",
    language: "html",
    markdown: `
HTML تعني **لغة ترميز النص الفائق** (Hyper Text Markup Language). وهي لغة ترميز تتكون من وسوم (tags) مختلفة. تُستخدم لتعريف هيكلة صفحات الويب. تعتبر HTML اللبنة الأساسية لصفحة الويب، والتي تُستخدم لعرض النصوص، الصور، والمحتويات الأخرى.
    `,
  },
  {
    id: 2,
    question: "ما هي العناصر الدلالية (Semantic) في HTML؟",
    difficulty: "مبتدئ",
    language: "html",
    markdown: `
العناصر الدلالية في HTML هي العناصر التي تعبر عن معنى وهيكلة المحتوى داخل المستند. ببساطة: اسم الوسم بيعكس الغرض من المحتوى.

من الأمثلة على العناصر الدلالية:

- \`<header>\`
- \`<main>\`
- \`<section>\`
- \`<article>\`
- \`<aside>\`
- \`<footer>\`
    `,
  },
  {
    id: 3,
    question: "ما الفرق بين عناصر Inline وعناصر Block في HTML؟",
    difficulty: "مبتدئ",
    language: "html",
    markdown: `
**Element Inline**:
- ما بيبدأ بسطر جديد
- بياخد قد عرض المحتوى
- أمثلة: <span>, <a>, <em>

**Element Block**:
- بيبدأ دايمًا بسطر جديد
- بياخد العرض الكامل
- أمثلة: <div>, <p>, <h1>
`,
  },
  {
    id: 4,
    question: "ما هي القوائم في HTML؟ اشرح أنواع القوائم المختلفة.",
    difficulty: "مبتدئ",
    language: "html",
    markdown: `
في HTML، القوائم بتُستخدم لعرض مجموعة عناصر بشكل مرتب أو غير مرتب.

### 1. قائمة غير مرتبة (Unordered List):
تُكتب باستخدام \`<ul>\`  \`<li>\`. العناصر بتظهر بنقاط.

\`\`\`html
<ul>
  <li>عنصر 1</li>
  <li>عنصر 2</li>
  <li>عنصر 3</li>
</ul>
\`\`\`

### 2. قائمة مرتبة (Ordered List):
تُكتب باستخدام \`<ol>\` \`<li>\`. العناصر بتظهر بأرقام.

\`\`\`html
<ol>
  <li>عنصر 1</li>
  <li>عنصر 2</li>
  <li>عنصر 3</li>
</ol>
\`\`\`

### 3. قائمة تعريفية (Definition List):
تُستخدم لعرض المصطلحات مع تعريفها، باستخدام \`<dl>\` \`<dt>\` \`<dd>\`.

\`\`\`html
<dl>
  <dt>HTML</dt>
  <dd>لغة هيكلة صفحات الويب</dd>

  <dt>CSS</dt>
  <dd>لغة تنسيق صفحات الويب</dd>
</dl>
\`\`\`
    `,
  },
  {
    id: 5,
    question: "ما الفرق بين وسم <div> و <span>؟",
    difficulty: "مبتدئ",
    language: "html",
    markdown: `- **<div>**
  - عنصر Block
  - يُستخدم لتجميع وتنظيم أقسام كبيرة من الصفحة
  - يبدأ بسطر جديد ويأخذ كامل العرض
  - غالبًا لتقسيم هيكل الصفحة

- **<span>**
  - عنصر Inline
  - يُستخدم لتنسيق أجزاء صغيرة من النص أو المحتوى
  - ما بيبدأ بسطر جديد، بياخد قد عرض المحتوى
  - غالبًا لتنسيق كلمة أو جملة محددة
`,
  },
  {
    id: 6,
    question: "شو هو الـ DOCTYPE declaration؟",
    difficulty: "مبتدئ",
    language: "html",
    markdown: `
بـ HTML، الـ **DOCTYPE declaration** أو "تصريح نوع المستند" هو عبارة عن سطر بنكتبه بأول الصفحة.  
مهمته إنه يعرّف المتصفح على نوع المستند وأي نسخة من HTML مكتوبة فيها الصفحة.

يعني ببساطة بيقول للمتصفح: "يا متصفح، أنا عم بستخدم HTML5" أو غيرها، مشان يعرف كيف يفسّر الكود ويعرضه صح.
    `,
  },
  {
    id: 7,
    question: "شو هدف و استخدام وسم <iframe>؟",
    difficulty: "مبتدئ",
    language: "html",
    markdown: `
وسم **<iframe>** بيخليك تضمن (embed) صفحة أو محتوى خارجي جوّا صفحتك الحالية.  
بتعطيه رابط، وهو بيعرضلك الموقع أو الملف بداخل إطار صغير.

أكتر استخداماته المشهورة:  
- تضمين فيديو من YouTube  
- تضمين خريطة من Google Maps  
- عرض صفحات أو مستندات تانية من برا

يعني كأنه شاشة صغيرة جوّا موقعك بتعرض شي من برا.
    `,
  },
  {
    id: 8,
    question: "شو الفرق بين <b> و <strong> بـ HTML؟",
    difficulty: "مبتدئ",
    language: "html",
    markdown: `
الوسمين **<b>** و **<strong>** اتنيناتهم بيخلوا النص غامق (bold).  
بس في فرق بينهم من ناحية المعنى (semantic):

- **<b>**: بتستعمله إذا بدك بس تخلي النص غامق شكليًا لحتى يبين أكتر، يعني مجرد تنسيق.  
- **<strong>**: بتستعمله إذا بدك تقول: "هالنص مهم" أو "إلو دلالة خاصة"، مشان محركات البحث وقارئات الشاشة يفهموا إنو النص فعليًا مهم مو بس شكله غامق.

يعني الفرق إنو <b> للتنسيق، و <strong> للدلالة عالأهمية.
    `,
  },
  {
    id: 9,
    question: "شو هي الـ meta tags بـ HTML؟",
    difficulty: "مبتدئ",
    language: "html",
    markdown: `
الـ **meta tags** هي وسوم بتحطها جوّا <head> بالصفحة.  
وظيفتها إنها تعرّف المتصفح ومحركات البحث بمعلومات عن صفحتك (metadata).

أمثلة على اللي بتحددو:
- نوع الترميز (charset) مثل UTF-8  
- الوصف (description) اللي بيظهر بمحركات البحث  
- الكلمات المفتاحية (keywords)  
- اسم المؤلف (author)  
- إعدادات العرض على الموبايل (viewport)

يعني باختصار: وسوم بتنقل معلومات عن الصفحة مو للمستخدم بشكل مباشر، بس للمتصفح ومحركات البحث.
    `,
  },
  {
    id: 10,
    question: "اشرحلي شو يعني Tag بـ HTML؟",
    difficulty: "مبتدئ",
    language: "html",
    markdown: `
بـ HTML، الـ **Tag** هو أساس الكود. هو عبارة عن كلمة محصورة بين <>، وبتحدد وظيفة أو عنصر بالصفحة.

يعني كل عنصر بالصفحة بيتعرف بواسطة tag.  
أمثلة:  
- <div> لعمل حاوية  
- <p> لفقرة  
- <a> للرابط  
- <span> لجزء صغير من النص  
- <img> للصورة

بالتالي، الوسوم هي المفاتيح اللي منبني فيها هيكلة الموقع.
    `,
  },
  {
    id: 11,
    question: "شو هو CSS؟",
    difficulty: "مبتدئ",
    language: "css",
    markdown: `
CSS هو اختصار لـ **Cascading Style Sheets**.  
باختصار هو يلي بيساعدنا نزيّن وننسّق صفحة الويب لحتى تصير جذابة للمستخدمين.  

CSS بيحدد كيف العناصر لازم يبينوا عالشاشة.  
وكمان بيعطينا كتير Selectors مشان نختار عناصر الـ HTML ونطبقلها الستايل اللي بدنا ياه.  

من هالـ Selectors:  
- **Element Selector**  
- **Class Selector**  
- **ID Selector**  

يعني CSS هو المسؤول عن الشكل والترتيب والألوان وكل شي بصري بالموقع.
  `,
  },
  {
    id: 12,
    question: "شرحلي شو يعني Selectors بالـ CSS.",
    difficulty: "مبتدئ",
    language: "css",
    markdown: `
Selectors بالـ CSS هني الأدوات اللي منستخدمها لحتى نختار عنصر أو أكتر من عناصر الـ HTML ونطبقلهم خصائص معينة.  

أمثلة:  
- **Element Selector**: منحدد العنصر باسم التاغ.  
- **ID Selector**: منستخدم # مع قيمة الـ id.  
- **Class Selector**: منستخدم . مع قيمة الكلاس.  
- **Universal Selector (*)**: بيختار كل العناصر.  
- **Attribute Selector**: بيختار العناصر حسب الـ attribute تبعها.  
- **Direct Child Selector (>)**: بيختار أولاد مباشرين لعناصر معينة.  
- **Pseudo Selectors**: متل :hover, :nth-child(), ::after, ::before.  

يعني selectors هني متل العنوان اللي منروح لعندو لحتى نغير شكل العنصر.
  `,
  },
  {
    id: 13,
    question: "شو الفرق بين visibility: hidden و display: none بالـ CSS؟",
    difficulty: "مبتدئ",
    language: "css",
    markdown: `
- **visibility: hidden** → بتخفي العنصر بس بتضل مساحته فاضية وما بتروح.  

- **display: none** → بتخفي العنصر نهائياً وبتشيل مساحته من التصميم كأنو مو موجود.  

يعني الفرق:  
- hidden: العنصر مخفي بس بعدو ماخد مكان.  
- none: العنصر مختفي وكأنو انمسح من الصفحة.
  `,
  },
  {
    id: 14,
    question: "شو الفرق بين CSS Grid و Flexbox؟",
    difficulty: "متوسط",
    language: "css",
    markdown: `
- **CSS Grid**
  - تخطيط ثنائي الأبعاد (صفوف + أعمدة)
  - بتحكم بالصفوف والأعمدة بنفس الوقت
  - مناسب للتصاميم المعقدة والكبيرة
  - فيك تحط العناصر بأي مكان بالشبكة
  - بتعرف صفوف وأعمدة مع بعض

- **Flexbox**
  - تخطيط أحادي البعد (يا صف يا أعمدة)
  - بتحكم باتجاه واحد بس (row أو column)
  - مناسب للتصاميم البسيطة والمرتبة خطياً
  - العناصر بتمشي حسب ترتيب الكود
  - بيعرف اتجاه واحد بس

الخلاصة:  
- **Grid**: بستخدمها للـ layouts المعقدة.  
- **Flexbox**: بستخدمها للتوزيعات البسيطة الخطية.
  `,
  },
  {
    id: 15,
    question: "شو هو JavaScript؟",
    difficulty: "مبتدئ",
    language: "javascript",
    markdown: `
JavaScript هي لغة برمجة عالية المستوى.  
ديناميكية (ما إلها نوع ثابت للمتغيرات).  

منستخدمها لحتى نضيف عناصر تفاعلية وحركة عصفحات الويب.  
وبتشتغل عالـ frontend وكمان عالـ backend.  

أمثلة على استعمالها:  
- فحص مدخلات المستخدم.  
- إضافة حركات (Animations).  
- التعامل مع السيرفر (AJAX).  
- بناء تطبيقات كاملة.  

يعني JavaScript هي اللي بتعطي الحياة والحركة لأي موقع أو تطبيق ويب حديث.
  `,
  },
  {
  id: 16,
  question: "شو الفرق بين let و var و const؟",
  difficulty: "متوسط",
  language: "javascript",
  markdown: `
- **var**
  - نطاقها Function-scoped
  - بتنرفع (Hoisted) وبتتعيّن كـ undefined
  - ما في TDZ (يعني ممكن توصلها قبل التصريح)
  - فيك تعيد تعيينها وإعادة تعريفها بنفس الـ scope

- **let**
  - نطاقها Block-scoped
  - بتنرفع بس ما بتنعيّن
  - فيها TDZ (ما فيك توصلها قبل التصريح)
  - فيك تعيد تعيينها، بس ما فيك تعيد تعريفها بنفس الـ scope

- **const**
  - نطاقها Block-scoped
  - بتنرفع بس ما بتنعيّن
  - فيها TDZ
  - لا إعادة تعيين ولا إعادة تعريف (ثابتة)
  `
},
{
  id: 17,
  question: "شو الفرق بين == و === بالـ JavaScript؟",
  difficulty: "مبتدئ",
  language: "javascript",
  markdown: `
- **== (Double Equal)**  
  - بيقارن القيم بس، حتى لو الأنواع مختلفة.
  - مثال: \`5 == "5"\` بيرجع true.

- **=== (Triple Equal)**  
  - بيقارن القيم **والنوع** مع بعض.
  - مثال: \`5 === "5"\` بيرجع false.

\`\`\`js
let num = 5;
let str = "5";

console.log(num == str);   // true
console.log(num === str);  // false
\`\`\`
  `
},
{
  id: 18,
  question: "شو هو الـ DOM؟",
  difficulty: "مبتدئ",
  language: "javascript",
  markdown: `
- DOM اختصار لـ Document Object Model.
- هو تمثيل شجري لهيكل صفحة الويب (HTML).
- بيعطينا إمكانية نتحكم بالعناصر والخواص والمحتوى باستخدام JavaScript.
- يعني بتقدر تغيّر النصوص، تضيف عناصر، تعدّل بالـ attributes... كله عن طريق الـ DOM.
  `
},
{
  id: 19,
  question: "شو الفرق بين null و undefined بالـ JavaScript؟",
  difficulty: "مبتدئ",
  language: "javascript",
  markdown: `
- **undefined**
  - القيمة الافتراضية لأي متغير معلن عنه بس ما نُعطي قيمة.
  - القيمة الراجعة الافتراضية لأي function ما عندها return.
  - إذا جربت توصل لخاصية مش موجودة بجسم (object)، بيرجع undefined.

- **null**
  - قيمة بتعطيها للمتغير بشكل صريح لتقول إنه "فاضي".
  - يعني بتقول إنه هذا المتغير ما إلو قيمة حالياً.

\`\`\`js
let a;        // undefined
let b = null; // null

console.log(a);       // undefined
console.log(b);       // null
console.log(a === b); // false
\`\`\`
  `
},
{
  id: 20,
  question: "شو هو React؟",
  difficulty: "مبتدئ",
  language: "react",
  markdown: `
- React مكتبة JavaScript مفتوحة المصدر من Facebook.
- مخصصة لبناء واجهات المستخدم (UI) بطريقة معتمدة على المكوّنات (Components).

**أهم ميزاتها:**
- Component-Based Architecture (بناء الواجهة كمكوّنات)
- Virtual DOM (أداء أسرع عن طريق نسخة افتراضية من الـ DOM)
- JSX (JavaScript + XML)
- One-Way Data Binding (ربط بيانات باتجاه واحد)
- Single Page Application (SPA)
- إدارة الحالة (State Management)
  `
}
];
