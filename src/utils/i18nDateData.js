import { isoFormat } from "d3";

export const i18n = {
    ar: { // Arabic
        months: [
            "كانون الثاني", "شباط", "آذار", "نيسان", "مايو", "حزيران", "تموز", "آب", "أيلول", "تشرين الأول", "تشرين الثاني", "كانون الأول"
        ],
        dayOfWeekShort: [
            "ن", "ث", "ع", "خ", "ج", "س", "ح"
        ],
        dayOfWeek: ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت", "الأحد"],
        selectDate: "اختر التاريخ",
        dateFormat: "DD/MM/YYYY", 
        pattern: "\\d{2}/\\d{2}/\\d{4}"
    },
    ro: { // Romanian
        months: [
            "Ianuarie", "Februarie", "Martie", "Aprilie", "Mai", "Iunie", "Iulie", "August", "Septembrie", "Octombrie", "Noiembrie", "Decembrie"
        ],
        dayOfWeekShort: [
            "Du", "Lu", "Ma", "Mi", "Jo", "Vi", "Sâ"
        ],
        dayOfWeek: ["Duminică", "Luni", "Marţi", "Miercuri", "Joi", "Vineri", "Sâmbătă"],
        selectDate: "Selectați data",
        dateFormat: "DD/MM/YYYY",
        pattern: "\\d{2}/\\d{2}/\\d{4}"
    },
    id: { // Indonesian
        months: [
            "Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"
        ],
        dayOfWeekShort: [
            "Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"
        ],
        dayOfWeek: ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"],
        selectDate: "Pilih tanggal",
        dateFormat: "DD/MM/YYYY",
        pattern: "\\d{2}/\\d{2}/\\d{4}"
    },
    is: { // Icelandic
        months: [
            "Janúar", "Febrúar", "Mars", "Apríl", "Maí", "Júní", "Júlí", "Ágúst", "September", "Október", "Nóvember", "Desember"
        ],
        dayOfWeekShort: [
            "Sun", "Mán", "Þrið", "Mið", "Fim", "Fös", "Lau"
        ],
        dayOfWeek: ["Sunnudagur", "Mánudagur", "Þriðjudagur", "Miðvikudagur", "Fimmtudagur", "Föstudagur", "Laugardagur"],
        selectDate: "Veldu dagsetningu",
        dateFormat: "DD/MM/YYYY",
        pattern: "\\d{2}/\\d{2}/\\d{4}"
    },
    bg: { // Bulgarian
        months: [
            "Януари", "Февруари", "Март", "Април", "Май", "Юни", "Юли", "Август", "Септември", "Октомври", "Ноември", "Декември"
        ],
        dayOfWeekShort: [
            "Нд", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"
        ],
        dayOfWeek: ["Неделя", "Понеделник", "Вторник", "Сряда", "Четвъртък", "Петък", "Събота"],
        selectDate: "Изберете дата",
        dateFormat: "DD/MM/YYYY",
        pattern: "\\d{2}/\\d{2}/\\d{4}"
    },
    fa: { // Persian/Farsi
        months: [
            'فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'
        ],
        dayOfWeekShort: [
            'یکشنبه', 'دوشنبه', 'سه شنبه', 'چهارشنبه', 'پنجشنبه', 'جمعه', 'شنبه'
        ],
        dayOfWeek: ["یک‌شنبه", "دوشنبه", "سه‌شنبه", "چهارشنبه", "پنج‌شنبه", "جمعه", "شنبه", "یک‌شنبه"],
        selectDate: "تاریخ را انتخاب کنید",
        dateFormat: "YYYY/MM/DD",
        pattern: "\\d{4}/\\d{2}/\\d{2}"
    },
    ru: { // Russian
        months: [
            'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
        ],
        dayOfWeekShort: [
            "Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"
        ],
        dayOfWeek: ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"],
        selectDate: "Выберите дату",
        dateFormat: "DD.MM.YYYY",
        pattern: "\\d{2}\\.\\d{2}\\.\\d{4}"
    },
    uk: { // Ukrainian
        months: [
            'Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'
        ],
        dayOfWeekShort: [
            "Нд", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"
        ],
        dayOfWeek: ["Неділя", "Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота"],
        selectDate: "Виберіть дату",
        dateFormat: "DD.MM.YYYY",
        pattern: "\\d{2}\\.\\d{2}\\.\\d{4}"
    },
    en: { // English
        months: [
            "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
        ],
        dayOfWeekShort: [
            "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"
        ],
        dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        selectDate: "Select Date",
        dateFormat: "MM/DD/YYYY", // Default format for English
        pattern: "\\d{2}/\\d{2}/\\d{4}"
    },
    el: { // Ελληνικά
        months: [
            "Ιανουάριος", "Φεβρουάριος", "Μάρτιος", "Απρίλιος", "Μάιος", "Ιούνιος", "Ιούλιος", "Αύγουστος", "Σεπτέμβριος", "Οκτώβριος", "Νοέμβριος", "Δεκέμβριος"
        ],
        dayOfWeekShort: [
            "Κυρ", "Δευ", "Τρι", "Τετ", "Πεμ", "Παρ", "Σαβ"
        ],
        dayOfWeek: ["Κυριακή", "Δευτέρα", "Τρίτη", "Τετάρτη", "Πέμπτη", "Παρασκευή", "Σάββατο"],
        selectDate: "Επιλέξτε Ημερομηνία",
        dateFormat: "DD/MM/YYYY",
        pattern: "\\d{2}/\\d{2}/\\d{4}"
    },
    de: { // German
        months: [
            'Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'
        ],
        dayOfWeekShort: [
            "So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"
        ],
        dayOfWeek: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"],
        selectDate: "Datum auswählen",
        dateFormat: "DD.MM.YYYY",
        pattern: "\\d{2}\\.\\d{2}\\.\\d{4}"
    },
    nl: { // Dutch
        months: [
            "januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"
        ],
        dayOfWeekShort: [
            "zo", "ma", "di", "wo", "do", "vr", "za"
        ],
        dayOfWeek: ["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"],
        selectDate: "Selecteer datum",
        dateFormat: "DD-MM-YYYY",
        pattern: "\\d{2}-\\d{2}-\\d{4}"
    },
    tr: { // Turkish
        months: [
            "Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"
        ],
        dayOfWeekShort: [
            "Paz", "Pts", "Sal", "Çar", "Per", "Cum", "Cts"
        ],
        dayOfWeek: ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"],
        selectDate: "Tarih seçin",
        dateFormat: "DD.MM.YYYY",
        pattern: "\\d{2}\\.\\d{2}\\.\\d{4}"
    },
    fr: { //French
        months: [
            "Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"
        ],
        dayOfWeekShort: [
            "Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"
        ],
        dayOfWeek: ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"],
        selectDate: "Sélectionnez une date",
        dateFormat: "DD/MM/YYYY",
        pattern: "\\d{2}/\\d{2}/\\d{4}"
    },
    es: { // Spanish
        months: [
            "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
        ],
        dayOfWeekShort: [
            "Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"
        ],
        dayOfWeek: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
        selectDate: "Seleccionar fecha",
        dateFormat: "DD/MM/YYYY",
        pattern: "\\d{2}/\\d{2}/\\d{4}"
    },
    th: { // Thai
        months: [
            'มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน', 'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'
        ],
        dayOfWeekShort: [
            'อา.', 'จ.', 'อ.', 'พ.', 'พฤ.', 'ศ.', 'ส.'
        ],
        dayOfWeek: ["อาทิตย์", "จันทร์", "อังคาร", "พุธ", "พฤหัส", "ศุกร์", "เสาร์", "อาทิตย์"],
        selectDate: "เลือกวันที่",
        dateFormat: "DD/MM/YYYY",
        pattern: "\\d{2}/\\d{2}/\\d{4}"
    },
    pl: { // Polish
        months: [
            "styczeń", "luty", "marzec", "kwiecień", "maj", "czerwiec", "lipiec", "sierpień", "wrzesień", "październik", "listopad", "grudzień"
        ],
        dayOfWeekShort: [
            "nd", "pn", "wt", "śr", "cz", "pt", "sb"
        ],
        dayOfWeek: ["niedziela", "poniedziałek", "wtorek", "środa", "czwartek", "piątek", "sobota"],
        selectDate: "Wybierz datę",
        dateFormat: "DD.MM.YYYY",
        pattern: "\\d{2}\\.\\d{2}\\.\\d{4}"
    },
    pt: { // Portuguese
        months: [
            "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
        ],
        dayOfWeekShort: [
            "Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"
        ],
        dayOfWeek: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"],
        selectDate: "Selecione a data",
        dateFormat: "DD/MM/YYYY",
        pattern: "\\d{2}/\\d{2}/\\d{4}"
    },
    ch: { // Simplified Chinese
        months: [
            "一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"
        ],
        dayOfWeekShort: [
            "日", "一", "二", "三", "四", "五", "六"
        ],
        dayOfWeek: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
        selectDate: "选择日期",
        dateFormat: "YYYY/MM/DD",
        pattern: "\\d{4}/\\d{2}/\\d{2}"
    },
    se: { // Swedish
        months: [
            "Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September",  "Oktober", "November", "December"
        ],
        dayOfWeekShort: [
            "Sön", "Mån", "Tis", "Ons", "Tor", "Fre", "Lör"
        ],
        dayOfWeek: ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"],
        selectDate: "Välj datum",
        dateFormat: "YYYY-MM-DD",
        pattern: "\\d{4}-\\d{2}-\\d{2}"
    },
    km: { // Khmer (ភាសាខ្មែរ)
        months: [
            "មករា​", "កុម្ភៈ", "មិនា​", "មេសា​", "ឧសភា​", "មិថុនា​", "កក្កដា​", "សីហា​", "កញ្ញា​", "តុលា​", "វិច្ឆិកា", "ធ្នូ​"
        ],
        dayOfWeekShort: ["អាទិ​", "ច័ន្ទ​", "អង្គារ​", "ពុធ​", "ព្រហ​​", "សុក្រ​", "សៅរ៍"],
        dayOfWeek: ["អាទិត្យ​", "ច័ន្ទ​", "អង្គារ​", "ពុធ​", "ព្រហស្បតិ៍​", "សុក្រ​", "សៅរ៍"],
        selectDate: "ជ្រើសរើសថ្ងៃ",
        dateFormat: "DD/MM/YYYY",
    },
    kr: { // Korean
        months: [
            "1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"
        ],
        dayOfWeekShort: [
            "일", "월", "화", "수", "목", "금", "토"
        ],
        dayOfWeek: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"],
        selectDate: "날짜 선택",
        dateFormat: "YYYY-MM-DD",
        pattern: "\\d{4}-\\d{2}-\\d{2}"
    },
    it: { // Italian
        months: [
            "Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"
        ],
        dayOfWeekShort: [
            "Dom", "Lun", "Mar", "Mer", "Gio", "Ven", "Sab"
        ],
        dayOfWeek: ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"],
        selectDate: "Seleziona data",
        dateFormat: "DD/MM/YYYY",
        pattern: "\\d{2}/\\d{2}/\\d{4}"
    },
    da: { // Dansk
        months: [
            "Januar", "Februar", "Marts", "April", "Maj", "Juni", "Juli", "August", "September", "Oktober", "November", "December"
        ],
        dayOfWeekShort: [
            "Søn", "Man", "Tir", "Ons", "Tor", "Fre", "Lør"
        ],
        dayOfWeek: ["søndag", "mandag", "tirsdag", "onsdag", "torsdag", "fredag", "lørdag"],
        selectDate: "Vælg dato",
        dateFormat: "DD/MM/YYYY",
        pattern: "\\d{2}/\\d{2}/\\d{4}"
    },
    no: { // Norwegian
        months: [
            "Januar", "Februar", "Mars", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Desember"
        ],
        dayOfWeekShort: [
            "Søn", "Man", "Tir", "Ons", "Tor", "Fre", "Lør"
        ],
        dayOfWeek: ['Søndag', 'Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lørdag'],
        selectDate: "Velg dato",
        dateFormat: "DD.MM.YYYY",
        pattern: "\\d{2}\\.\\d{2}\\.\\d{4}"
    },
    ja: { // Japanese
        months: [
            "1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"
        ],
        dayOfWeekShort: [
            "日", "月", "火", "水", "木", "金", "土"
        ],
        dayOfWeek: ["日曜", "月曜", "火曜", "水曜", "木曜", "金曜", "土曜"],
        selectDate: "日付を選択",
        dateFormat: "YYYY/MM/DD",
        pattern: "\\d{4}/\\d{2}/\\d{2}"
    },
    vi: { // Vietnamese
        months: [
            "Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"
        ],
        dayOfWeekShort: [
            "CN", "T2", "T3", "T4", "T5", "T6", "T7"
        ],
        dayOfWeek: ["Chủ nhật", "Thứ hai", "Thứ ba", "Thứ tư", "Thứ năm", "Thứ sáu", "Thứ bảy"],
        selectDate: "Chọn ngày",
        dateFormat: "DD/MM/YYYY",
        pattern: "\\d{2}/\\d{2}/\\d{4}"
    },
    sl: { // Slovenščina
        months: [
            "Januar", "Februar", "Marec", "April", "Maj", "Junij", "Julij", "Avgust", "September", "Oktober", "November", "December"
        ],
        dayOfWeekShort: [
            "Ned", "Pon", "Tor", "Sre", "Čet", "Pet", "Sob"
        ],
        dayOfWeek: ["Nedelja", "Ponedeljek", "Torek", "Sreda", "Četrtek", "Petek", "Sobota"],
        selectDate: "Izberite datum",
        dateFormat: "DD.MM.YYYY",
        pattern: "\\d{2}\\.\\d{2}\\.\\d{4}"
    },
    cs: { // Čeština
        months: [
            "Leden", "Únor", "Březen", "Duben", "Květen", "Červen", "Červenec", "Srpen", "Září", "Říjen", "Listopad", "Prosinec"
        ],
        dayOfWeekShort: [
            "Ne", "Po", "Út", "St", "Čt", "Pá", "So"
        ],
        dayOfWeek: ["Neděle", "Pondělí", "Úterý", "Středa", "Čtvrtek", "Pátek", "Sobota"],
        selectDate: "Vyberte datum",
        dateFormat: "DD.MM.YYYY",
        pattern: "\\d{2}\\.\\d{2}\\.\\d{4}"
    },
    hu: { // Hungarian
        months: [
            "Január", "Február", "Március", "Április", "Május", "Június", "Július", "Augusztus", "Szeptember", "Október", "November", "December"
        ],
        dayOfWeekShort: [
            "Va", "Hé", "Ke", "Sze", "Cs", "Pé", "Szo"
        ],
        dayOfWeek: ["vasárnap", "hétfő", "kedd", "szerda", "csütörtök", "péntek", "szombat"],
        selectDate: "Válasszon dátumot",
        dateFormat: "YYYY.MM.DD",
        pattern: "\\d{4}\\.\\d{2}\\.\\d{2}"
    },
    az: { //Azerbaijanian (Azeri)
        months: [
            "Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun", "Iyul", "Avqust", "Sentyabr", "Oktyabr", "Noyabr", "Dekabr"
        ],
        dayOfWeekShort: [
            "B", "Be", "Ça", "Ç", "Ca", "C", "Ş"
        ],
        dayOfWeek: ["Bazar", "Bazar ertəsi", "Çərşənbə axşamı", "Çərşənbə", "Cümə axşamı", "Cümə", "Şənbə"],
        selectDate: "Tarixi seçin",
        dateFormat: "DD.MM.YYYY",
        pattern: "\\d{2}\\.\\d{2}\\.\\d{4}"
    },
    bs: { //Bosanski
        months: [
            "Januar", "Februar", "Mart", "April", "Maj", "Jun", "Jul", "Avgust", "Septembar", "Oktobar", "Novembar", "Decembar"
        ],
        dayOfWeekShort: [
            "Ned", "Pon", "Uto", "Sri", "Čet", "Pet", "Sub"
        ],
        dayOfWeek: ["Nedjelja","Ponedjeljak", "Utorak", "Srijeda", "Četvrtak", "Petak", "Subota"],
        selectDate: "Odaberite datum",
        dateFormat: "DD.MM.YYYY",
        pattern: "\\d{2}\\.\\d{2}\\.\\d{4}"
    },
    ca: { //Català
        months: [
            "Gener", "Febrer", "Març", "Abril", "Maig", "Juny", "Juliol", "Agost", "Setembre", "Octubre", "Novembre", "Desembre"
        ],
        dayOfWeekShort: [
            "Dg", "Dl", "Dt", "Dc", "Dj", "Dv", "Ds"
        ],
        dayOfWeek: ["Diumenge", "Dilluns", "Dimarts", "Dimecres", "Dijous", "Divendres", "Dissabte"],
        selectDate: "Selecciona una data",
        dateFormat: "DD/MM/YYYY",
        pattern: "\\d{2}/\\d{2}/\\d{4}"
    },
    'en-GB': { //English (British)
        months: [
            "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
        ],
        dayOfWeekShort: [
            "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"
        ],
        dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        selectDate: "Select Date",
        dateFormat: "DD/MM/YYYY", // Default format for British English
        pattern: "\\d{2}/\\d{2}/\\d{4}"
    },
    et: { //"Eesti"
        months: [
            "Jaanuar", "Veebruar", "Märts", "Aprill", "Mai", "Juuni", "Juuli", "August", "September", "Oktoober", "November", "Detsember"
        ],
        dayOfWeekShort: [
            "P", "E", "T", "K", "N", "R", "L"
        ],
        dayOfWeek: ["Pühapäev", "Esmaspäev", "Teisipäev", "Kolmapäev", "Neljapäev", "Reede", "Laupäev"],
        selectDate: "Vali kuupäev",
        dateFormat: "DD.MM.YYYY",
        pattern: "\\d{2}\\.\\d{2}\\.\\d{4}"
    },
    eu: { //Euskara
        months: [
            "Urtarrila", "Otsaila", "Martxoa", "Apirila", "Maiatza", "Ekaina", "Uztaila", "Abuztua", "Iraila", "Urria", "Azaroa", "Abendua"
        ],
        dayOfWeekShort: [
            "Ig.", "Al.", "Ar.", "Az.", "Og.", "Or.", "La."
        ],
        dayOfWeek: ['Igandea', 'Astelehena', 'Asteartea', 'Asteazkena', 'Osteguna', 'Ostirala', 'Larunbata'],
        selectDate: "Data hautatu",
        dateFormat: "DD/MM/YYYY",
        pattern: "\\d{2}/\\d{2}/\\d{4}"
    },
    fi: { //Finnish (Suomi)
        months: [
            "Tammikuu", "Helmikuu", "Maaliskuu", "Huhtikuu", "Toukokuu", "Kesäkuu", "Heinäkuu", "Elokuu", "Syyskuu", "Lokakuu", "Marraskuu", "Joulukuu"
        ],
        dayOfWeekShort: [
            "Su", "Ma", "Ti", "Ke", "To", "Pe", "La"
        ],
        dayOfWeek: ["sunnuntai", "maanantai", "tiistai", "keskiviikko", "torstai", "perjantai", "lauantai"],
        selectDate: "Valitse päivämäärä",
        dateFormat: "DD.MM.YYYY",
        pattern: "\\d{2}\\.\\d{2}\\.\\d{4}"
    },
    gl: { //Galego
        months: [
            "Xan", "Feb", "Maz", "Abr", "Mai", "Xun", "Xul", "Ago", "Set", "Out", "Nov", "Dec"
        ],
        dayOfWeekShort: [
            "Dom", "Lun", "Mar", "Mer", "Xov", "Ven", "Sab"
        ],
        dayOfWeek: ["Domingo", "Luns", "Martes", "Mércores", "Xoves", "Venres", "Sábado"],
        selectDate: "Selecciona unha data",
        dateFormat: "DD/MM/YYYY",
        pattern: "\\d{2}/\\d{2}/\\d{4}"
    },
    hr: { //Hrvatski
        months: [
            "Siječanj", "Veljača", "Ožujak", "Travanj", "Svibanj", "Lipanj", "Srpanj", "Kolovoz", "Rujan", "Listopad", "Studeni", "Prosinac"
        ],
        dayOfWeekShort: [
            "Ned", "Pon", "Uto", "Sri", "Čet", "Pet", "Sub"
        ],
        dayOfWeek: ["Nedjelja", "Ponedjeljak", "Utorak", "Srijeda", "Četvrtak", "Petak", "Subota"],
        selectDate: "Odaberite datum",
        dateFormat: "DD.MM.YYYY",
        pattern: "\\d{2}\\.\\d{2}\\.\\d{4}"
    },
    ko: { //Korean (한국어)
        months: [
            "1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"
        ],
        dayOfWeekShort: [
            "일", "월", "화", "수", "목", "금", "토"
        ],
        dayOfWeek: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"],
        selectDate: "날짜 선택",
        dateFormat: "YYYY-MM-DD",
        pattern: "\\d{4}-\\d{2}-\\d{2}"
    },
    lt: { //Lithuanian (lietuvių)
        months: [
            "Sausio", "Vasario", "Kovo", "Balandžio", "Gegužės", "Birželio", "Liepos", "Rugpjūčio", "Rugsėjo", "Spalio", "Lapkričio", "Gruodžio"
        ],
        dayOfWeekShort: [
            "Sek", "Pir", "Ant", "Tre", "Ket", "Pen", "Šeš"
        ],
        dayOfWeek: ["Sekmadienis", "Pirmadienis", "Antradienis", "Trečiadienis", "Ketvirtadienis", "Penktadienis", "Šeštadienis"],
        selectDate: "Pasirinkite datą",
        dateFormat: "YYYY-MM-DD",
        pattern: "\\d{4}-\\d{2}-\\d{2}"
    },
    lv: { //Latvian (Latviešu)
        months: [
            "Janvāris", "Februāris", "Marts", "Aprīlis ", "Maijs", "Jūnijs", "Jūlijs", "Augusts", "Septembris", "Oktobris", "Novembris", "Decembris"
        ],
        dayOfWeekShort: [
            "Sv", "Pr", "Ot", "Tr", "Ct", "Pk", "St"
        ],
        dayOfWeek: ["Svētdiena", "Pirmdiena", "Otrdiena", "Trešdiena", "Ceturtdiena", "Piektdiena", "Sestdiena"],
        selectDate: "Izvēlieties datumu",
        dateFormat: "DD.MM.YYYY",
        pattern: "\\d{2}\\.\\d{2}\\.\\d{4}"
    },
    mk: { //Macedonian (Македонски)
        months: [
            "јануари", "февруари", "март", "април", "мај", "јуни", "јули", "август", "септември", "октомври", "ноември", "декември"
        ],
        dayOfWeekShort: [
            "нед", "пон", "вто", "сре", "чет", "пет", "саб"
        ],
        dayOfWeek: ["Недела", "Понеделник", "Вторник", "Среда", "Четврток", "Петок", "Сабота"],
        selectDate: "Изберете датум",
        dateFormat: "DD.MM.YYYY",
        pattern: "\\d{2}\\.\\d{2}\\.\\d{4}"
    },
    mn: { //Mongolian (Монгол)
        months: [
            "1-р сар", "2-р сар", "3-р сар", "4-р сар", "5-р сар", "6-р сар", "7-р сар", "8-р сар", "9-р сар", "10-р сар", "11-р сар", "12-р сар"
        ],
        dayOfWeekShort: [
            "Дав", "Мяг", "Лха", "Пүр", "Бсн", "Бям", "Ням"
        ],
        dayOfWeek: ["Даваа", "Мягмар", "Лхагва", "Пүрэв", "Баасан", "Бямба", "Ням"],
        selectDate: "Огноо сонгох",
        dateFormat: "YYYY-MM-DD",
        pattern: "\\d{4}-\\d{2}-\\d{2}"
    },
    'pt-BR': { //Português(Brasil)
        months: [
            "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
        ],
        dayOfWeekShort: [
            "Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"
        ],
        dayOfWeek: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"],
        selectDate: "Selecione a data",
        dateFormat: "DD/MM/YYYY",
        pattern: "\\d{2}/\\d{2}/\\d{4}"
    },
    sk: { //Slovenčina
        months: [
            "Január", "Február", "Marec", "Apríl", "Máj", "Jún", "Júl", "August", "September", "Október", "November", "December"
        ],
        dayOfWeekShort: [
            "Ne", "Po", "Ut", "St", "Št", "Pi", "So"
        ],
        dayOfWeek: ["Nedeľa", "Pondelok", "Utorok", "Streda", "Štvrtok", "Piatok", "Sobota"],
        selectDate: "Vyberte dátum",
        dateFormat: "DD.MM.YYYY",
        pattern: "\\d{2}\\.\\d{2}\\.\\d{4}"
    },
    sq: { //Albanian (Shqip)
        months: [
            "Janar", "Shkurt", "Mars", "Prill", "Maj", "Qershor", "Korrik", "Gusht", "Shtator", "Tetor", "Nëntor", "Dhjetor"
        ],
        dayOfWeekShort: [
            "Die", "Hën", "Mar", "Mër", "Enj", "Pre", "Shtu"
        ],
        dayOfWeek: ["E Diel", "E Hënë", "E Martē", "E Mërkurë", "E Enjte", "E Premte", "E Shtunë"],
        selectDate: "Zgjidhni datën",
        dateFormat: "DD/MM/YYYY",
        pattern: "\\d{2}/\\d{2}/\\d{4}"
    },
    'sr-YU': { //Serbian (Srpski)
        months: [
            "Januar", "Februar", "Mart", "April", "Maj", "Jun", "Jul", "Avgust", "Septembar", "Oktobar", "Novembar", "Decembar"
        ],
        dayOfWeekShort: [
            "Ned", "Pon", "Uto", "Sre", "čet", "Pet", "Sub"
        ],
        dayOfWeek: ["Nedelja","Ponedeljak", "Utorak", "Sreda", "Četvrtak", "Petak", "Subota"],
        selectDate: "Izaberite datum",
        dateFormat: "DD.MM.YYYY",
        pattern: "\\d{2}\\.\\d{2}\\.\\d{4}"
    },
    sr: { //Serbian Cyrillic (Српски)
        months: [
            "јануар", "фебруар", "март", "април", "мај", "јун", "јул", "август", "септембар", "октобар", "новембар", "децембар"
        ],
        dayOfWeekShort: [
            "нед", "пон", "уто", "сре", "чет", "пет", "суб"
        ],
        dayOfWeek: ["Недеља","Понедељак", "Уторак", "Среда", "Четвртак", "Петак", "Субота"],
        selectDate: "Изаберите датум",
        dateFormat: "DD.MM.YYYY",
        pattern: "\\d{2}\\.\\d{2}\\.\\d{4}"
    },
    sv: { //Svenska
        months: [
            "Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"
        ],
        dayOfWeekShort: [
            "Sön", "Mån", "Tis", "Ons", "Tor", "Fre", "Lör"
        ],
        dayOfWeek: ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"],
        selectDate: "Välj datum",
        dateFormat: "YYYY-MM-DD",
        pattern: "\\d{4}-\\d{2}-\\d{2}"
    },
    'zh-TW': { //Traditional Chinese (繁體中文)
        months: [
            "一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"
        ],
        dayOfWeekShort: [
            "日", "一", "二", "三", "四", "五", "六"
        ],
        dayOfWeek: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
        selectDate: "選擇日期",
        dateFormat: "YYYY/MM/DD",
        pattern: "\\d{4}/\\d{2}/\\d{2}"
    },
    zh: { //Simplified Chinese (简体中文)
        months: [
            "一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"
        ],
        dayOfWeekShort: [
            "日", "一", "二", "三", "四", "五", "六"
        ],
        dayOfWeek: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
        selectDate: "选择日期",
        dateFormat: "YYYY/MM/DD",
        pattern: "\\d{4}/\\d{2}/\\d{2}"
    },
    ug:{ // Uyghur(ئۇيغۇرچە)
        months: [
            "1-ئاي","2-ئاي","3-ئاي","4-ئاي","5-ئاي","6-ئاي","7-ئاي","8-ئاي","9-ئاي","10-ئاي","11-ئاي","12-ئاي"
        ],
        dayOfWeek: [
            "يەكشەنبە", "دۈشەنبە","سەيشەنبە","چارشەنبە","پەيشەنبە","جۈمە","شەنبە",
        ],
        dayOfWeekShort: [
            "يە", "دۈ", "سە", "چا", "پە", "جۈ", "شە"
        ],
        selectDate: "تارىخ تاللاڭ",
        dateFormat: "YYYY-MM-DD",
        pattern: "\\d{4}-\\d{2}-\\d{2}"
    },
    he: { //Hebrew (עברית)
        months: [
            'ינואר', 'פברואר', 'מרץ', 'אפריל', 'מאי', 'יוני', 'יולי', 'אוגוסט', 'ספטמבר', 'אוקטובר', 'נובמבר', 'דצמבר'
        ],
        dayOfWeekShort: [
            'א\'', 'ב\'', 'ג\'', 'ד\'', 'ה\'', 'ו\'', 'שבת'
        ],
        dayOfWeek: ["ראשון", "שני", "שלישי", "רביעי", "חמישי", "שישי", "שבת", "ראשון"],
        selectDate: "בחר תאריך",
        dateFormat: "DD/MM/YYYY",
        pattern: "\\d{2}/\\d{2}/\\d{4}"
    },
    hy: { // Armenian
        months: [
            "Հունվար", "Փետրվար", "Մարտ", "Ապրիլ", "Մայիս", "Հունիս", "Հուլիս", "Օգոստոս", "Սեպտեմբեր", "Հոկտեմբեր", "Նոյեմբեր", "Դեկտեմբեր"
        ],
        dayOfWeekShort: [
            "Կի", "Երկ", "Երք", "Չոր", "Հնգ", "Ուրբ", "Շբթ"
        ],
        dayOfWeek: ["Կիրակի", "Երկուշաբթի", "Երեքշաբթի", "Չորեքշաբթի", "Հինգշաբթի", "Ուրբաթ", "Շաբաթ"],
        selectDate: "Ընտրեք ամսաթիվը",
        dateFormat: "DD/MM/YYYY",
        pattern: "\\d{2}/\\d{2}/\\d{4}"
    },
    kg: { // Kyrgyz
        months: [
            'Үчтүн айы', 'Бирдин айы', 'Жалган Куран', 'Чын Куран', 'Бугу', 'Кулжа', 'Теке', 'Баш Оона', 'Аяк Оона', 'Тогуздун айы', 'Жетинин айы', 'Бештин айы'
        ],
        dayOfWeekShort: [
            "Жек", "Дүй", "Шей", "Шар", "Бей", "Жум", "Ише"
        ],
        dayOfWeek: [
            "Жекшемб", "Дүйшөмб", "Шейшемб", "Шаршемб", "Бейшемби", "Жума", "Ишенб"
        ],
        selectDate: "Күндү тандаңыз",
        dateFormat: "DD.MM.YYYY",
        pattern: "\\d{2}\\.\\d{2}\\.\\d{4}"
    },
    rm: { // Romansh
        months: [
            "Schaner", "Favrer", "Mars", "Avrigl", "Matg", "Zercladur", "Fanadur", "Avust", "Settember", "October", "November", "December"
        ],
        dayOfWeekShort: [
            "Du", "Gli", "Ma", "Me", "Gie", "Ve", "So"
        ],
        dayOfWeek: [
            "Dumengia", "Glindesdi", "Mardi", "Mesemna", "Gievgia", "Venderdi", "Sonda"
        ],
        selectDate: "Selecziunar data",
        dateFormat: "DD.MM.YYYY",
        pattern: "\\d{2}\\.\\d{2}\\.\\d{4}"
    },
    ka: { // Georgian
        months: [
            'იანვარი', 'თებერვალი', 'მარტი', 'აპრილი', 'მაისი', 'ივნისი', 'ივლისი', 'აგვისტო', 'სექტემბერი', 'ოქტომბერი', 'ნოემბერი', 'დეკემბერი'
        ],
        dayOfWeekShort: [
            "კვ", "ორშ", "სამშ", "ოთხ", "ხუთ", "პარ", "შაბ"
        ],
        dayOfWeek: ["კვირა", "ორშაბათი", "სამშაბათი", "ოთხშაბათი", "ხუთშაბათი", "პარასკევი", "შაბათი"],
        selectDate: "აირჩიეთ თარიღი",
        dateFormat: "DD/MM/YYYY",
        pattern: "\\d{2}/\\d{2}/\\d{4}"
    },
    kk: { // Kazakh
        months: [
            'Қаңтар', 'Ақпан', 'Наурыз', 'Сәуір', 'Мамыр', 'Маусым', 'Шілде', 'Тамыз', 'Қыркүйек', 'Қазан', 'Қараша', 'Желтоқсан'
        ],
        dayOfWeekShort: [
            "Жк", "Дс", "Сс", "Ср", "Бс", "Жм", "Сб"
        ],
        dayOfWeek: ["Жексенбі", "Дүйсенбі", "Сейсенбі", "Сәрсенбі", "Бейсенбі", "Жұма", "Сенбі"],
        selectDate: "Күнді таңдаңыз",
        dateFormat: "DD.MM.YYYY",
        pattern: "\\d{2}\\.\\d{2}\\.\\d{4}"
    }
}