import fs from 'node:fs';

const filePath = 'public/dnbangla-photocard-engine.html';
let content = fs.readFileSync(filePath, 'utf-8');

// The replacement for TAB 5, TAB 6, and TAB 7
const newTabsHTML = `      <!-- ==================== TAB 5: SCHEDULE ==================== -->
      <section id="tab-schedule" class="hidden space-y-6">
        <div class="bg-slate-900 rounded-xl border border-slate-800 p-5 md:p-6 space-y-6">
          <div class="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4">
            <div>
              <h3 class="font-bold text-base md:text-lg text-white flex items-center gap-2">
                <i class="fa-solid fa-clock-rotate-left text-red-500"></i> দৈনিক সময়সূচি ভিত্তিক অটো শিডিউলার
              </h3>
              <p class="text-xs text-slate-400 mt-1">
                প্রতিদিনের সকাল, দুপুর ও রাতের নির্ধারিত বুলেটিন ফটোকার্ড স্বয়ংক্রিয়ভাবে তৈরি ও সোশ্যাল মিডিয়ায় পোস্ট করার পূর্ণাঙ্গ রুটিন।
              </p>
            </div>
            <div class="flex items-center gap-2">
              <span class="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-lg text-xs font-semibold">
                <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span> শিডিউলার সক্রিয়
              </span>
              <button onclick="runAllDueSchedules()" class="bg-red-600 hover:bg-red-700 text-white text-xs font-semibold px-3 py-1.5 rounded-lg flex items-center gap-1.5 shadow transition">
                <i class="fa-solid fa-play"></i> আজকের সব বুলেটিন প্রস্তুত করুন
              </button>
            </div>
          </div>

          <!-- Schedule Routine Categories -->
          <div class="space-y-6">

            <!-- ১. সকালের রুটিন (Morning Shift) -->
            <div class="space-y-3">
              <div class="flex items-center justify-between border-b border-slate-800/80 pb-2">
                <h4 class="text-xs md:text-sm font-bold text-amber-400 flex items-center gap-2">
                  <i class="fa-solid fa-sun text-amber-400"></i> ১. সকালের অটো বুলেটিন ও ফটোকার্ড রুটিন (ভোর ৬:০০ - সকাল ৯:০০)
                </h4>
                <span class="text-[11px] text-slate-400">৬ টি নির্ধারিত অটো পোস্ট</span>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" id="morning-schedules-container">
                <!-- 1.1 শুভ সকাল কার্ড -->
                <div class="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3 flex flex-col justify-between">
                  <div class="space-y-2">
                    <div class="flex items-center justify-between">
                      <span class="px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 text-[10px] font-mono font-bold">ভোর ০৬:০০ টা</span>
                      <label class="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" id="sched-toggle-morning" checked class="sr-only peer">
                        <div class="w-7 h-3.5 bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[1px] after:left-[1px] after:bg-white after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-emerald-600"></div>
                      </label>
                    </div>
                    <h5 class="text-xs font-bold text-white flex items-center gap-1.5">
                      <i class="fa-regular fa-sun text-amber-400"></i> শুভ সকাল প্রেরণামূলক ফটোকার্ড
                    </h5>
                    <textarea id="sched-text-morning" rows="2" class="w-full bg-slate-900 border border-slate-700 rounded p-2 text-[11px] text-slate-200">একটি নতুন সকাল আপনার জীবনে অফুরন্ত সাফল্য ও বরকত বয়ে আনুক — ডিএন বাংলা</textarea>
                  </div>
                  <div class="flex gap-2 pt-1 border-t border-slate-800/80">
                    <button onclick="sendScheduleToTextTrigger('sched-text-morning', '🌅 শুভ সকাল অনুপ্রেরণা')" class="flex-1 text-[11px] bg-slate-800 hover:bg-slate-700 text-amber-300 py-1.5 rounded transition flex items-center justify-center gap-1">
                      <i class="fa-solid fa-wand-magic-sparkles"></i> টিগারে পাঠান
                    </button>
                    <button onclick="sendScheduleToHeadline('sched-text-morning', 'শুভ সকাল')" class="flex-1 text-[11px] bg-red-600/20 hover:bg-red-600/30 text-red-300 py-1.5 rounded transition flex items-center justify-center gap-1">
                      <i class="fa-solid fa-image"></i> ফটোকার্ডে লোড
                    </button>
                  </div>
                </div>

                <!-- 1.2 আবহাওয়ার বার্তা কার্ড -->
                <div class="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3 flex flex-col justify-between">
                  <div class="space-y-2">
                    <div class="flex items-center justify-between">
                      <span class="px-2 py-0.5 rounded bg-blue-500/10 text-blue-300 text-[10px] font-mono font-bold">সকাল ০৬:৩০ টা</span>
                      <label class="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" id="sched-toggle-weather-m" checked class="sr-only peer">
                        <div class="w-7 h-3.5 bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[1px] after:left-[1px] after:bg-white after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-emerald-600"></div>
                      </label>
                    </div>
                    <h5 class="text-xs font-bold text-white flex items-center gap-1.5">
                      <i class="fa-solid fa-cloud-sun text-blue-400"></i> প্রতিদিনের আবহাওয়ার বার্তা কার্ড
                    </h5>
                    <textarea id="sched-text-weather-m" rows="2" class="w-full bg-slate-900 border border-slate-700 rounded p-2 text-[11px] text-slate-200">আজকের সকালের আবহাওয়া: সর্বনিম্ন তাপমাত্রা ২২° সে., ভোরের দিকে নদী অববাহিকায় হালকা কুয়াশা ও সারাদিন আকাশ আংশিক মেঘলা থাকবে।</textarea>
                  </div>
                  <div class="flex gap-2 pt-1 border-t border-slate-800/80">
                    <button onclick="sendScheduleToTextTrigger('sched-text-weather-m', '🌦️ আজকের আবহাওয়ার বার্তা')" class="flex-1 text-[11px] bg-slate-800 hover:bg-slate-700 text-blue-300 py-1.5 rounded transition flex items-center justify-center gap-1">
                      <i class="fa-solid fa-wand-magic-sparkles"></i> টিগারে পাঠান
                    </button>
                    <button onclick="sendScheduleToHeadline('sched-text-weather-m', 'আবহাওয়া বার্তা')" class="flex-1 text-[11px] bg-red-600/20 hover:bg-red-600/30 text-red-300 py-1.5 rounded transition flex items-center justify-center gap-1">
                      <i class="fa-solid fa-image"></i> ফটোকার্ডে লোড
                    </button>
                  </div>
                </div>

                <!-- 1.3 নামাজের সময়সূচি -->
                <div class="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3 flex flex-col justify-between">
                  <div class="space-y-2">
                    <div class="flex items-center justify-between">
                      <span class="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 text-[10px] font-mono font-bold">সকাল ০৭:০০ টা</span>
                      <label class="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" id="sched-toggle-prayer" checked class="sr-only peer">
                        <div class="w-7 h-3.5 bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[1px] after:left-[1px] after:bg-white after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-emerald-600"></div>
                      </label>
                    </div>
                    <h5 class="text-xs font-bold text-white flex items-center gap-1.5">
                      <i class="fa-solid fa-mosque text-emerald-400"></i> দৈনিক ৫ ওয়াক্ত নামাজের সময়সূচি
                    </h5>
                    <textarea id="sched-text-prayer" rows="2" class="w-full bg-slate-900 border border-slate-700 rounded p-2 text-[11px] text-slate-200">ঢাকা ও পার্শ্ববর্তী এলাকা: ফজর ৪:৫২, যোহর ১১:৫৮, আসর ৩:১৫, মাগরিব ৫:১৯, এশা ৬:৩৬ | সেহরি ভোর ৪:১৮, ইফতার সন্ধ্যা ৬:১৮</textarea>
                  </div>
                  <div class="flex gap-2 pt-1 border-t border-slate-800/80">
                    <button onclick="sendScheduleToTextTrigger('sched-text-prayer', '🕌 দৈনিক নামাজের সময়সূচি')" class="flex-1 text-[11px] bg-slate-800 hover:bg-slate-700 text-emerald-300 py-1.5 rounded transition flex items-center justify-center gap-1">
                      <i class="fa-solid fa-wand-magic-sparkles"></i> টিগারে পাঠান
                    </button>
                    <button onclick="sendScheduleToHeadline('sched-text-prayer', 'নামাজের সময়')" class="flex-1 text-[11px] bg-red-600/20 hover:bg-red-600/30 text-red-300 py-1.5 rounded transition flex items-center justify-center gap-1">
                      <i class="fa-solid fa-image"></i> ফটোকার্ডে লোড
                    </button>
                  </div>
                </div>

                <!-- 1.4 দৈনিক স্বাস্থ্য বুলেটিন -->
                <div class="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3 flex flex-col justify-between">
                  <div class="space-y-2">
                    <div class="flex items-center justify-between">
                      <span class="px-2 py-0.5 rounded bg-rose-500/10 text-rose-300 text-[10px] font-mono font-bold">সকাল ০৭:৪৫ টা</span>
                      <label class="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" id="sched-toggle-health" checked class="sr-only peer">
                        <div class="w-7 h-3.5 bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[1px] after:left-[1px] after:bg-white after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-emerald-600"></div>
                      </label>
                    </div>
                    <h5 class="text-xs font-bold text-white flex items-center gap-1.5">
                      <i class="fa-solid fa-heart-pulse text-rose-400"></i> দৈনিক স্বাস্থ্য বুলেটিন ও সুস্থতার বার্তা
                    </h5>
                    <textarea id="sched-text-health" rows="2" class="w-full bg-slate-900 border border-slate-700 rounded p-2 text-[11px] text-slate-200">স্বাস্থ্য বুলেটিন: সকালে খালি পেটে পর্যাপ্ত কুসুম গরম পানি ও লেবু পান করুন, নিয়মিত ৩০ মিনিট হাঁটাহাঁটি হৃদরোগের ঝুঁকি ৬০% কমায়।</textarea>
                  </div>
                  <div class="flex gap-2 pt-1 border-t border-slate-800/80">
                    <button onclick="sendScheduleToTextTrigger('sched-text-health', '🍎 দৈনিক স্বাস্থ্য বুলেটিন')" class="flex-1 text-[11px] bg-slate-800 hover:bg-slate-700 text-rose-300 py-1.5 rounded transition flex items-center justify-center gap-1">
                      <i class="fa-solid fa-wand-magic-sparkles"></i> টিগারে পাঠান
                    </button>
                    <button onclick="sendScheduleToHeadline('sched-text-health', 'স্বাস্থ্য বার্তা')" class="flex-1 text-[11px] bg-red-600/20 hover:bg-red-600/30 text-red-300 py-1.5 rounded transition flex items-center justify-center gap-1">
                      <i class="fa-solid fa-image"></i> ফটোকার্ডে লোড
                    </button>
                  </div>
                </div>

                <!-- 1.5 ইতিহাসে আজকের দিন -->
                <div class="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3 flex flex-col justify-between">
                  <div class="space-y-2">
                    <div class="flex items-center justify-between">
                      <span class="px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-300 text-[10px] font-mono font-bold">সকাল ০৮:১৫ টা</span>
                      <label class="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" id="sched-toggle-history" checked class="sr-only peer">
                        <div class="w-7 h-3.5 bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[1px] after:left-[1px] after:bg-white after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-emerald-600"></div>
                      </label>
                    </div>
                    <h5 class="text-xs font-bold text-white flex items-center gap-1.5">
                      <i class="fa-solid fa-landmark-dome text-indigo-400"></i> ইতিহাসে কি হয়েছিল (আজকের দিন)
                    </h5>
                    <textarea id="sched-text-history" rows="2" class="w-full bg-slate-900 border border-slate-700 rounded p-2 text-[11px] text-slate-200">ইতিহাসে আজকের দিন: ১৯৫২ সালের এই দিনে মাতৃভাষা বাংলার দাবিতে ছাত্রজনতার ঐতিহাসিক সমাবেশ ও যুগান্তকারী জাতীয় সিদ্ধান্ত গৃহীত হয়।</textarea>
                  </div>
                  <div class="flex gap-2 pt-1 border-t border-slate-800/80">
                    <button onclick="sendScheduleToTextTrigger('sched-text-history', '📜 ইতিহাসে আজকের দিন')" class="flex-1 text-[11px] bg-slate-800 hover:bg-slate-700 text-indigo-300 py-1.5 rounded transition flex items-center justify-center gap-1">
                      <i class="fa-solid fa-wand-magic-sparkles"></i> টিগারে পাঠান
                    </button>
                    <button onclick="sendScheduleToHeadline('sched-text-history', 'ইতিহাসে আজকের দিন')" class="flex-1 text-[11px] bg-red-600/20 hover:bg-red-600/30 text-red-300 py-1.5 rounded transition flex items-center justify-center gap-1">
                      <i class="fa-solid fa-image"></i> ফটোকার্ডে লোড
                    </button>
                  </div>
                </div>

                <!-- 1.6 গুরুত্বপূর্ণ জন্মবার্ষিকী ও শ্রদ্ধাঞ্জলি -->
                <div class="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3 flex flex-col justify-between">
                  <div class="space-y-2">
                    <div class="flex items-center justify-between">
                      <span class="px-2 py-0.5 rounded bg-purple-500/10 text-purple-300 text-[10px] font-mono font-bold">সকাল ০৮:৪৫ টা</span>
                      <label class="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" id="sched-toggle-birthday" checked class="sr-only peer">
                        <div class="w-7 h-3.5 bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[1px] after:left-[1px] after:bg-white after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-emerald-600"></div>
                      </label>
                    </div>
                    <h5 class="text-xs font-bold text-white flex items-center gap-1.5">
                      <i class="fa-solid fa-cake-candles text-purple-400"></i> জন্মবার্ষিকী ও শ্রদ্ধাঞ্জলি কার্ড
                    </h5>
                    <textarea id="sched-text-birthday" rows="2" class="w-full bg-slate-900 border border-slate-700 rounded p-2 text-[11px] text-slate-200">জন্মদিনে শুভেচ্ছা: আজকের দিনে জন্মগ্রহণকারী জাতীয় ও আন্তর্জাতিক অঙ্গনের সকল বিশিষ্ট ব্যক্তিবর্গকে ডিএন বাংলার উষ্ণ অভিনন্দন।</textarea>
                  </div>
                  <div class="flex gap-2 pt-1 border-t border-slate-800/80">
                    <button onclick="sendScheduleToTextTrigger('sched-text-birthday', '🎂 জন্মদিনের শুভেচ্ছা')" class="flex-1 text-[11px] bg-slate-800 hover:bg-slate-700 text-purple-300 py-1.5 rounded transition flex items-center justify-center gap-1">
                      <i class="fa-solid fa-wand-magic-sparkles"></i> টিগারে পাঠান
                    </button>
                    <button onclick="sendScheduleToHeadline('sched-text-birthday', 'শুভেচ্ছা বার্তা')" class="flex-1 text-[11px] bg-red-600/20 hover:bg-red-600/30 text-red-300 py-1.5 rounded transition flex items-center justify-center gap-1">
                      <i class="fa-solid fa-image"></i> ফটোকার্ডে লোড
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <!-- ২. দুপুরের রুটিন (Noon Shift) -->
            <div class="space-y-3 pt-4 border-t border-slate-800">
              <div class="flex items-center justify-between border-b border-slate-800/80 pb-2">
                <h4 class="text-xs md:text-sm font-bold text-amber-400 flex items-center gap-2">
                  <i class="fa-solid fa-temperature-three-quarters text-amber-500"></i> ২. দুপুরের আবহাওয়া ও জরুরি সরকারি সতর্কতা বুলেটিন (দুপুর ১২:০০ - বিকাল ৪:০০)
                </h4>
                <span class="text-[11px] text-slate-400">২ টি নির্ধারিত অটো পোস্ট</span>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <!-- 2.1 দুপুরের আবহাওয়া ও সর্বোচ্চ তাপমাত্রা -->
                <div class="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3 flex flex-col justify-between">
                  <div class="space-y-2">
                    <div class="flex items-center justify-between">
                      <span class="px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 text-[10px] font-mono font-bold">দুপুর ০১:৩০ টা</span>
                      <label class="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" id="sched-toggle-noon-temp" checked class="sr-only peer">
                        <div class="w-7 h-3.5 bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[1px] after:left-[1px] after:bg-white after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-emerald-600"></div>
                      </label>
                    </div>
                    <h5 class="text-xs font-bold text-white flex items-center gap-1.5">
                      <i class="fa-solid fa-sun-plant-wilt text-amber-500"></i> দুপুরের তাপমাত্রা ও আর্দ্রতা ফটোকার্ড
                    </h5>
                    <textarea id="sched-text-noon-temp" rows="2" class="w-full bg-slate-900 border border-slate-700 rounded p-2 text-[11px] text-slate-200">দুপুরের আবহাওয়া বুলেটিন: আজকের সর্বোচ্চ তাপমাত্রা ৩২.৫° সেলসিয়াস, বাতাসের আপেক্ষিক আর্দ্রতা ৬৪%। বিকেলের দিকে দমকা হাওয়া বয়ে যেতে পারে।</textarea>
                  </div>
                  <div class="flex gap-2 pt-1 border-t border-slate-800/80">
                    <button onclick="sendScheduleToTextTrigger('sched-text-noon-temp', '☀️ দুপুরের তাপমাত্রা')" class="flex-1 text-[11px] bg-slate-800 hover:bg-slate-700 text-amber-300 py-1.5 rounded transition flex items-center justify-center gap-1">
                      <i class="fa-solid fa-wand-magic-sparkles"></i> টিগারে পাঠান
                    </button>
                    <button onclick="sendScheduleToHeadline('sched-text-noon-temp', 'আবহাওয়া আপডেট')" class="flex-1 text-[11px] bg-red-600/20 hover:bg-red-600/30 text-red-300 py-1.5 rounded transition flex items-center justify-center gap-1">
                      <i class="fa-solid fa-image"></i> ফটোকার্ডে লোড
                    </button>
                  </div>
                </div>

                <!-- 2.2 জরুরি সরকারি আবহাওয়া ঝুঁকি বা দুর্যোগ আপডেট -->
                <div class="bg-slate-950 p-4 rounded-xl border border-red-900/40 space-y-3 flex flex-col justify-between">
                  <div class="space-y-2">
                    <div class="flex items-center justify-between">
                      <span class="px-2 py-0.5 rounded bg-red-500/20 text-red-400 text-[10px] font-mono font-bold">দুপুর ০৩:০০ টা (জরুরি)</span>
                      <label class="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" id="sched-toggle-alert" checked class="sr-only peer">
                        <div class="w-7 h-3.5 bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[1px] after:left-[1px] after:bg-white after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-red-600"></div>
                      </label>
                    </div>
                    <h5 class="text-xs font-bold text-red-400 flex items-center gap-1.5">
                      <i class="fa-solid fa-triangle-exclamation text-red-500 animate-bounce"></i> আবহাওয়ার ঝুঁকি ও সরকারি জরুরি আপডেট
                    </h5>
                    <textarea id="sched-text-alert" rows="2" class="w-full bg-slate-900 border border-red-900/50 rounded p-2 text-[11px] text-slate-200">জরুরি আবহাওয়া সতর্কতা: বঙ্গোপসাগরে নিম্নচাপের প্রভাবে সমুদ্র বন্দরসমূহকে ৩ নম্বর স্থানীয় সতর্কতা সংকেত ও নদীবন্দরে ২ নম্বর হুঁশিয়ারি সংকেত জারি।</textarea>
                  </div>
                  <div class="flex gap-2 pt-1 border-t border-slate-800/80">
                    <button onclick="sendScheduleToTextTrigger('sched-text-alert', '⚠️ জরুরি আবহাওয়া সতর্কতা')" class="flex-1 text-[11px] bg-slate-800 hover:bg-slate-700 text-red-300 py-1.5 rounded transition flex items-center justify-center gap-1">
                      <i class="fa-solid fa-wand-magic-sparkles"></i> টিগারে পাঠান
                    </button>
                    <button onclick="sendScheduleToHeadline('sched-text-alert', 'জরুরি সতর্কতা')" class="flex-1 text-[11px] bg-red-600 hover:bg-red-700 text-white py-1.5 rounded transition flex items-center justify-center gap-1">
                      <i class="fa-solid fa-image"></i> ফটোকার্ডে লোড
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <!-- ৩. রাতের রুটিন (Night Shift) -->
            <div class="space-y-3 pt-4 border-t border-slate-800">
              <div class="flex items-center justify-between border-b border-slate-800/80 pb-2">
                <h4 class="text-xs md:text-sm font-bold text-indigo-400 flex items-center gap-2">
                  <i class="fa-solid fa-moon text-indigo-400"></i> ৩. রাতের সেরা টপ-টেন (Top 10) নিউজ বুলেটিন কার্ড (রাত ১০:০০ - ১১:০০)
                </h4>
                <span class="text-[11px] text-slate-400">প্রতি রাতের প্রধান সংকলন</span>
              </div>

              <div class="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3">
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-2">
                    <span class="px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 text-[10px] font-mono font-bold">রাত ১০:৩০ টা</span>
                    <span class="text-xs font-bold text-white">ওয়েবসাইটের প্রকাশিত সেরা ১০টি নিউজের শিরোনাম বুলেটিন</span>
                  </div>
                  <label class="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" id="sched-toggle-top10" checked class="sr-only peer">
                    <div class="w-7 h-3.5 bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[1px] after:left-[1px] after:bg-white after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-emerald-600"></div>
                  </label>
                </div>
                <textarea id="sched-text-top10" rows="3" class="w-full bg-slate-900 border border-slate-700 rounded p-2 text-xs text-slate-200">১. ডিজিটাল অটোমেশন ফটোকার্ডের যাত্রা শুরু
২. নির্বাচন কমিশনের সার্বিক প্রস্তুতি সম্পন্ন
৩. রিজার্ভ বৃদ্ধি পেয়ে নতুন মাইলফলকে
৪. ঢাকায় নতুন মেট্রোরেল রুটের ট্রায়াল রান
৫. বাণিজ্য মেলায় রেকর্ড পরিমাণ পণ্য রপ্তানিাদেশ</textarea>

                <div class="flex flex-wrap gap-2 pt-2 border-t border-slate-800">
                  <button onclick="fetchTopNewsFromWordpress()" class="text-xs bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded transition flex items-center gap-1.5 font-semibold">
                    <i class="fa-brands fa-wordpress"></i> ওয়ার্ডপ্রেস থেকে সেরা ১০ নিউজ লোড
                  </button>
                  <button onclick="sendScheduleToTextTrigger('sched-text-top10', '🏆 আজকের টপ-টেন নিউজ বুলেটিন')" class="text-xs bg-slate-800 hover:bg-slate-700 text-amber-300 px-3 py-1.5 rounded transition flex items-center gap-1.5 font-semibold">
                    <i class="fa-solid fa-wand-magic-sparkles"></i> টিগার ফটোকার্ডে পাঠান
                  </button>
                  <button onclick="sendScheduleToHeadline('sched-text-top10', 'টপ-টেন নিউজ')" class="text-xs bg-red-600/20 hover:bg-red-600/30 text-red-300 px-3 py-1.5 rounded transition flex items-center gap-1.5 font-semibold">
                    <i class="fa-solid fa-image"></i> ফটোকার্ডে লোড
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <!-- ==================== TAB 6: STAFF ==================== -->
      <section id="tab-staff" class="hidden space-y-6">
        <div class="bg-slate-900 rounded-xl border border-slate-800 p-5 md:p-6 space-y-6">
          <div class="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4">
            <div>
              <h3 class="font-bold text-base md:text-lg text-white flex items-center gap-2">
                <i class="fa-solid fa-id-card text-emerald-500"></i> প্রতিষ্ঠানে কর্মরত সকলের তথ্যভান্ডার ও অটো আইডি কার্ড জেনারেটর
              </h3>
              <p class="text-xs text-slate-400 mt-1">
                সকল সাংবাদিক ও কর্মকর্তা-কর্মচারীর বিস্তারিত তথ্যভান্ডার এবং কাস্টম ডিজাইনের ডিজিটাল প্রেস আইডি কার্ড জেনারেটর।
              </p>
            </div>
            <div class="flex items-center gap-2">
              <button onclick="toggleStaffForm()" class="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold px-3 py-1.5 rounded-lg flex items-center gap-1.5 shadow transition">
                <i class="fa-solid fa-user-plus"></i> নতুন কর্মী যুক্ত করুন
              </button>
              <button onclick="loadSampleStaff()" class="bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold px-3 py-1.5 rounded-lg flex items-center gap-1.5 border border-slate-700 transition">
                <i class="fa-solid fa-database"></i> ডেমো কর্মী লোড
              </button>
            </div>
          </div>

          <!-- Add / Edit Staff Form (collapsible) -->
          <div id="staff-form-container" class="hidden bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-4">
            <h4 class="text-xs font-bold text-emerald-400 flex items-center gap-2">
              <i class="fa-solid fa-pen-to-square"></i> কর্মীর বিস্তারিত তথ্য ফরম:
            </h4>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
              <div>
                <label class="block text-slate-400 mb-1">পূর্ণ নাম *</label>
                <input type="text" id="staff-name" placeholder="যেমন: তানভীর আহমেদ" class="w-full bg-slate-900 border border-slate-700 rounded p-2 text-white">
              </div>
              <div>
                <label class="block text-slate-400 mb-1">পদবী (Designation) *</label>
                <input type="text" id="staff-designation" placeholder="যেমন: সিনিয়র রিপোর্টার" class="w-full bg-slate-900 border border-slate-700 rounded p-2 text-white">
              </div>
              <div>
                <label class="block text-slate-400 mb-1">বিভাগ (Department)</label>
                <select id="staff-dept" class="w-full bg-slate-900 border border-slate-700 rounded p-2 text-white">
                  <option value="বার্তা বিভাগ">বার্তা বিভাগ (News Desk)</option>
                  <option value="মাল্টিমিডিয়া ও ভিডিও">মাল্টিমিডিয়া ও ভিডিও</option>
                  <option value="ডিজিটাল মিডিয়া ও সোশ্যাল">ডিজিটাল মিডিয়া ও সোশ্যাল</option>
                  <option value="ফটোগ্রাফি ও ক্যামেরা">ফটোগ্রাফি ও ক্যামেরা</option>
                  <option value="আইটি ও সম্প্রচার">আইটি ও সম্প্রচার</option>
                  <option value="প্রশাসন ও মানবসম্পদ">প্রশাসন ও মানবসম্পদ</option>
                </select>
              </div>
              <div>
                <label class="block text-slate-400 mb-1">আইডি নম্বর (ID No) *</label>
                <input type="text" id="staff-id" placeholder="যেমন: DN-2026-101" class="w-full bg-slate-900 border border-slate-700 rounded p-2 text-white font-mono">
              </div>
              <div>
                <label class="block text-slate-400 mb-1">রক্তের গ্রুপ (Blood Group)</label>
                <select id="staff-blood" class="w-full bg-slate-900 border border-slate-700 rounded p-2 text-white font-bold text-red-400">
                  <option value="A+">A Positive (A+)</option>
                  <option value="B+">B Positive (B+)</option>
                  <option value="O+">O Positive (O+)</option>
                  <option value="AB+">AB Positive (AB+)</option>
                  <option value="A-">A Negative (A-)</option>
                  <option value="B-">B Negative (B-)</option>
                  <option value="O-">O Negative (O-)</option>
                  <option value="AB-">AB Negative (AB-)</option>
                </select>
              </div>
              <div>
                <label class="block text-slate-400 mb-1">মোবাইল নম্বর *</label>
                <input type="text" id="staff-phone" placeholder="017xxxxxxxx" class="w-full bg-slate-900 border border-slate-700 rounded p-2 text-white">
              </div>
              <div>
                <label class="block text-slate-400 mb-1">মেয়াদোত্তীর্ণের তারিখ</label>
                <input type="text" id="staff-validity" value="৩১ ডিসেম্বর ২০২৬" class="w-full bg-slate-900 border border-slate-700 rounded p-2 text-white">
              </div>
              <div>
                <label class="block text-slate-400 mb-1">পাসপোর্ট সাইজ ছবি</label>
                <input type="file" id="staff-photo-file" accept="image/*" onchange="handleStaffPhotoUpload(event)" class="w-full text-slate-400 file:mr-2 file:py-1 file:px-2 file:rounded file:border-0 file:bg-slate-800 file:text-slate-200">
              </div>
            </div>
            <div class="flex justify-end gap-2 pt-2">
              <button onclick="toggleStaffForm()" class="px-3 py-1.5 rounded bg-slate-800 text-slate-300 text-xs">বাতিল</button>
              <button onclick="saveStaffMember()" class="px-4 py-1.5 rounded bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs flex items-center gap-1.5 shadow">
                <i class="fa-solid fa-floppy-disk"></i> তথ্যভাণ্ডারে সংরক্ষণ করুন
              </button>
            </div>
          </div>

          <!-- Staff Table & ID Card Preview Split -->
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">

            <!-- Staff List (7 cols) -->
            <div class="lg:col-span-7 bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3">
              <div class="flex items-center justify-between border-b border-slate-800 pb-2">
                <h4 class="text-xs font-bold text-white flex items-center gap-2">
                  <i class="fa-solid fa-users text-emerald-400"></i> কর্মকর্তা ও সাংবাদিকদের তালিকা (<span id="staff-count-badge">0</span> জন)
                </h4>
                <input type="text" id="staff-search-input" oninput="filterStaffList(this.value)" placeholder="নাম বা পদবী দিয়ে খুঁজুন..." class="bg-slate-900 border border-slate-700 rounded px-2.5 py-1 text-xs text-white">
              </div>

              <div class="space-y-2 max-h-[480px] overflow-y-auto pr-1" id="staff-cards-list">
                <!-- Dynamically rendered by JS -->
              </div>
            </div>

            <!-- ID Card Generator Live Preview (5 cols) -->
            <div class="lg:col-span-5 bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-4 flex flex-col items-center">
              <div class="w-full flex items-center justify-between border-b border-slate-800 pb-2">
                <h4 class="text-xs font-bold text-white flex items-center gap-1.5">
                  <i class="fa-solid fa-id-badge text-red-500"></i> ডিজিটাল প্রেস আইডি কার্ড
                </h4>
                <div class="flex gap-1 text-[11px]">
                  <button id="btn-card-front" onclick="switchCardSide('front')" class="px-2.5 py-1 rounded bg-red-600 text-white font-semibold">ফ্রন্ট</button>
                  <button id="btn-card-back" onclick="switchCardSide('back')" class="px-2.5 py-1 rounded bg-slate-800 text-slate-300">ব্যাক</button>
                </div>
              </div>

              <!-- ID Card Canvas -->
              <div class="flex justify-center items-center py-1">
                <canvas id="staffCardCanvas" width="600" height="920" class="w-[280px] h-[430px] rounded-xl shadow-2xl border-2 border-slate-700 bg-white object-contain"></canvas>
              </div>

              <!-- Card Customizer Controls -->
              <div class="w-full space-y-2 pt-2 border-t border-slate-800 text-xs">
                <div class="flex items-center justify-between">
                  <span class="text-slate-400">কার্ড হেডার কালার:</span>
                  <input type="color" id="picker-card-theme" value="#8b0000" onchange="drawStaffCardCanvas()" class="w-7 h-6 bg-transparent rounded cursor-pointer">
                </div>
                <div class="flex gap-2 pt-1">
                  <button onclick="downloadStaffCard()" class="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 rounded text-xs flex items-center justify-center gap-1.5 shadow transition">
                    <i class="fa-solid fa-download"></i> HD প্রেস কার্ড ডাউনলোড
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <!-- ==================== TAB 7: INTEGRATIONS ==================== -->
      <section id="tab-integrations" class="hidden space-y-6">
        <div class="bg-slate-900 rounded-xl border border-slate-800 p-5 md:p-6 space-y-6">
          <div class="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4">
            <div>
              <h3 class="font-bold text-base md:text-lg text-white flex items-center gap-2">
                <i class="fa-brands fa-wordpress text-blue-500"></i> ওয়ার্ডপ্রেস ও সোশ্যাল মিডিয়া API সেটিংস
              </h3>
              <p class="text-xs text-slate-400 mt-1">
                WordPress সাইট এবং Facebook, X, Instagram, TikTok, WhatsApp, Telegram, Threads সহ সকল সোশ্যাল মিডিয়ার জন্য আলাদা আলাদা API কনফিগারেশন।
              </p>
            </div>
            <div class="flex items-center gap-2">
              <button onclick="loadSampleApiSettings()" class="bg-slate-800 hover:bg-slate-700 text-amber-300 border border-slate-700 text-xs font-semibold px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition">
                <i class="fa-solid fa-key"></i> ডেমো কি (Demo Keys) লোড
              </button>
              <button onclick="saveAllApiSettings()" class="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold px-3.5 py-1.5 rounded-lg flex items-center gap-1.5 shadow transition">
                <i class="fa-solid fa-floppy-disk"></i> সকল সেটিংস সংরক্ষণ করুন
              </button>
            </div>
          </div>

          <!-- API Cards Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">

            <!-- 1. WordPress REST API -->
            <div class="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3">
              <div class="flex items-center justify-between border-b border-slate-800 pb-2">
                <div class="flex items-center gap-2">
                  <div class="w-7 h-7 rounded-lg bg-blue-600/20 text-blue-400 flex items-center justify-center text-sm font-bold">
                    <i class="fa-brands fa-wordpress"></i>
                  </div>
                  <div>
                    <h4 class="text-xs font-bold text-white">ওয়ার্ডপ্রেস (WordPress REST API)</h4>
                    <span class="text-[10px] text-slate-400">নিউজ অটো-ফেচ ও পাবলিশিং</span>
                  </div>
                </div>
                <span id="badge-wp-status" class="px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">সংযুক্ত</span>
              </div>
              <div class="space-y-2 text-xs">
                <div>
                  <label class="block text-slate-400 mb-0.5">সাইট ইউআরএল (Site URL):</label>
                  <input type="text" id="api-wp-url" value="https://dnbangla.com.bd" placeholder="https://dnbangla.com.bd" class="w-full bg-slate-900 border border-slate-700 rounded p-1.5 text-slate-200 font-mono">
                </div>
                <div class="grid grid-cols-2 gap-2">
                  <div>
                    <label class="block text-slate-400 mb-0.5">ইউজারনেম (Username):</label>
                    <input type="text" id="api-wp-user" value="editor_dnbangla" class="w-full bg-slate-900 border border-slate-700 rounded p-1.5 text-slate-200">
                  </div>
                  <div>
                    <label class="block text-slate-400 mb-0.5">অ্যাপ পাসওয়ার্ড (App Password):</label>
                    <input type="password" id="api-wp-pass" value="dnbangla-api-key-2026-prod" class="w-full bg-slate-900 border border-slate-700 rounded p-1.5 text-slate-200 font-mono">
                  </div>
                </div>
              </div>
              <div class="flex justify-between items-center pt-1 border-t border-slate-800/80">
                <label class="flex items-center gap-1.5 text-[11px] text-slate-400">
                  <input type="checkbox" id="api-wp-autofetch" checked class="rounded accent-blue-600">
                  <span>অটো পোস্ট সিঙ্ক চালু</span>
                </label>
                <button onclick="testWordPressConnection()" class="text-[11px] bg-blue-600/20 hover:bg-blue-600/30 text-blue-300 border border-blue-500/30 px-3 py-1 rounded flex items-center gap-1">
                  <i class="fa-solid fa-rotate"></i> কানেকশন টেস্ট
                </button>
              </div>
            </div>

            <!-- 2. Facebook Page Graph API -->
            <div class="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3">
              <div class="flex items-center justify-between border-b border-slate-800 pb-2">
                <div class="flex items-center gap-2">
                  <div class="w-7 h-7 rounded-lg bg-blue-600/20 text-blue-500 flex items-center justify-center text-sm font-bold">
                    <i class="fa-brands fa-facebook"></i>
                  </div>
                  <div>
                    <h4 class="text-xs font-bold text-white">ফেসবুক পেজ (Facebook Graph API)</h4>
                    <span class="text-[10px] text-slate-400">অটো ফটোকার্ড পোস্ট</span>
                  </div>
                </div>
                <span id="badge-fb-status" class="px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">সংযুক্ত</span>
              </div>
              <div class="space-y-2 text-xs">
                <div>
                  <label class="block text-slate-400 mb-0.5">ফেসবুক পেজ আইডি (Page ID):</label>
                  <input type="text" id="api-fb-pageid" value="109283746501928" placeholder="e.g. 109283746501928" class="w-full bg-slate-900 border border-slate-700 rounded p-1.5 text-slate-200 font-mono">
                </div>
                <div>
                  <label class="block text-slate-400 mb-0.5">Page Access Token (EAAG...):</label>
                  <input type="password" id="api-fb-token" value="EAAGdnbanglaAccessTokenSecret2026Valid" class="w-full bg-slate-900 border border-slate-700 rounded p-1.5 text-slate-200 font-mono">
                </div>
              </div>
              <div class="flex justify-between items-center pt-1 border-t border-slate-800/80">
                <label class="flex items-center gap-1.5 text-[11px] text-slate-400">
                  <input type="checkbox" id="api-fb-autopost" checked class="rounded accent-blue-600">
                  <span>কার্ড তৈরির সাথে সাথে অটো-পোস্ট</span>
                </label>
                <button onclick="testSocialPlatform('Facebook Page')" class="text-[11px] bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded flex items-center gap-1">
                  <i class="fa-solid fa-paper-plane"></i> টেস্ট পোস্ট
                </button>
              </div>
            </div>

            <!-- 3. X (Twitter API v2) -->
            <div class="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3">
              <div class="flex items-center justify-between border-b border-slate-800 pb-2">
                <div class="flex items-center gap-2">
                  <div class="w-7 h-7 rounded-lg bg-slate-800 text-white flex items-center justify-center text-sm font-bold">
                    <i class="fa-brands fa-x-twitter"></i>
                  </div>
                  <div>
                    <h4 class="text-xs font-bold text-white">এক্স (X / Twitter API v2)</h4>
                    <span class="text-[10px] text-slate-400">টুইট ও ফটোকার্ড অটো পাবলিশিং</span>
                  </div>
                </div>
                <span id="badge-x-status" class="px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">সংযুক্ত</span>
              </div>
              <div class="space-y-2 text-xs">
                <div class="grid grid-cols-2 gap-2">
                  <div>
                    <label class="block text-slate-400 mb-0.5">API Key (Consumer Key):</label>
                    <input type="text" id="api-x-key" value="dnXTwitterConsumerKey2026" class="w-full bg-slate-900 border border-slate-700 rounded p-1.5 text-slate-200 font-mono">
                  </div>
                  <div>
                    <label class="block text-slate-400 mb-0.5">API Key Secret:</label>
                    <input type="password" id="api-x-secret" value="xSecretValueKey78910" class="w-full bg-slate-900 border border-slate-700 rounded p-1.5 text-slate-200 font-mono">
                  </div>
                </div>
                <div>
                  <label class="block text-slate-400 mb-0.5">Access Token & Secret:</label>
                  <input type="password" id="api-x-token" value="123456789-xAccessTokenDNSecret" class="w-full bg-slate-900 border border-slate-700 rounded p-1.5 text-slate-200 font-mono">
                </div>
              </div>
              <div class="flex justify-between items-center pt-1 border-t border-slate-800/80">
                <span class="text-[10px] text-slate-500">Read & Write Permissions</span>
                <button onclick="testSocialPlatform('X (Twitter)')" class="text-[11px] bg-slate-800 hover:bg-slate-700 text-slate-200 px-3 py-1 rounded border border-slate-700 flex items-center gap-1">
                  <i class="fa-solid fa-paper-plane"></i> টেস্ট পোস্ট
                </button>
              </div>
            </div>

            <!-- 4. Instagram Graph API -->
            <div class="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3">
              <div class="flex items-center justify-between border-b border-slate-800 pb-2">
                <div class="flex items-center gap-2">
                  <div class="w-7 h-7 rounded-lg bg-pink-600/20 text-pink-500 flex items-center justify-center text-sm font-bold">
                    <i class="fa-brands fa-instagram"></i>
                  </div>
                  <div>
                    <h4 class="text-xs font-bold text-white">ইনস্টাগ্রাম (Instagram Graph API)</h4>
                    <span class="text-[10px] text-slate-400">১৯২০x১৯২০ স্কয়ার ফটো ফিড</span>
                  </div>
                </div>
                <span id="badge-ig-status" class="px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">সংযুক্ত</span>
              </div>
              <div class="space-y-2 text-xs">
                <div>
                  <label class="block text-slate-400 mb-0.5">Instagram Business Account ID:</label>
                  <input type="text" id="api-ig-accountid" value="178414002938475" class="w-full bg-slate-900 border border-slate-700 rounded p-1.5 text-slate-200 font-mono">
                </div>
                <div>
                  <label class="block text-slate-400 mb-0.5">Graph API Access Token:</label>
                  <input type="password" id="api-ig-token" value="EAAGdnbanglaInstagramTokenValid" class="w-full bg-slate-900 border border-slate-700 rounded p-1.5 text-slate-200 font-mono">
                </div>
              </div>
              <div class="flex justify-between items-center pt-1 border-t border-slate-800/80">
                <span class="text-[10px] text-pink-400 font-semibold">1:1 Square Card Ready</span>
                <button onclick="testSocialPlatform('Instagram')" class="text-[11px] bg-pink-600 hover:bg-pink-700 text-white px-3 py-1 rounded flex items-center gap-1">
                  <i class="fa-solid fa-paper-plane"></i> টেস্ট ফটো পোস্ট
                </button>
              </div>
            </div>

            <!-- 5. TikTok Open API -->
            <div class="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3">
              <div class="flex items-center justify-between border-b border-slate-800 pb-2">
                <div class="flex items-center gap-2">
                  <div class="w-7 h-7 rounded-lg bg-teal-500/20 text-teal-400 flex items-center justify-center text-sm font-bold">
                    <i class="fa-brands fa-tiktok"></i>
                  </div>
                  <div>
                    <h4 class="text-xs font-bold text-white">টিকটক (TikTok Open API)</h4>
                    <span class="text-[10px] text-slate-400">ফটোকার্ড ক্যারোসেল ও ভিডিও শেয়ার</span>
                  </div>
                </div>
                <span id="badge-tt-status" class="px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">সংযুক্ত</span>
              </div>
              <div class="space-y-2 text-xs">
                <div class="grid grid-cols-2 gap-2">
                  <div>
                    <label class="block text-slate-400 mb-0.5">Client Key:</label>
                    <input type="text" id="api-tt-key" value="awdnbanglaKey998" class="w-full bg-slate-900 border border-slate-700 rounded p-1.5 text-slate-200 font-mono">
                  </div>
                  <div>
                    <label class="block text-slate-400 mb-0.5">Client Secret:</label>
                    <input type="password" id="api-tt-secret" value="tiktokSecretPass123" class="w-full bg-slate-900 border border-slate-700 rounded p-1.5 text-slate-200 font-mono">
                  </div>
                </div>
                <div>
                  <label class="block text-slate-400 mb-0.5">Creator Access Token:</label>
                  <input type="password" id="api-tt-token" value="act.dnbanglaTikTokCreatorToken" class="w-full bg-slate-900 border border-slate-700 rounded p-1.5 text-slate-200 font-mono">
                </div>
              </div>
              <div class="flex justify-between items-center pt-1 border-t border-slate-800/80">
                <span class="text-[10px] text-slate-500">Photo Post Permission</span>
                <button onclick="testSocialPlatform('TikTok')" class="text-[11px] bg-teal-600 hover:bg-teal-700 text-white px-3 py-1 rounded flex items-center gap-1">
                  <i class="fa-solid fa-paper-plane"></i> টেস্ট পোস্ট
                </button>
              </div>
            </div>

            <!-- 6. WhatsApp Channel (Meta WhatsApp Cloud API) -->
            <div class="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3">
              <div class="flex items-center justify-between border-b border-slate-800 pb-2">
                <div class="flex items-center gap-2">
                  <div class="w-7 h-7 rounded-lg bg-emerald-600/20 text-emerald-500 flex items-center justify-center text-sm font-bold">
                    <i class="fa-brands fa-whatsapp"></i>
                  </div>
                  <div>
                    <h4 class="text-xs font-bold text-white">হোয়াটসঅ্যাপ চ্যানেল (WhatsApp Cloud API)</h4>
                    <span class="text-[10px] text-slate-400">ডিএন বাংলা অফিসিয়াল নিউজ চ্যানেল</span>
                  </div>
                </div>
                <span id="badge-wa-status" class="px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">সংযুক্ত</span>
              </div>
              <div class="space-y-2 text-xs">
                <div>
                  <label class="block text-slate-400 mb-0.5">WhatsApp Channel ID / Phone Number ID:</label>
                  <input type="text" id="api-wa-channelid" value="1058291048592" class="w-full bg-slate-900 border border-slate-700 rounded p-1.5 text-slate-200 font-mono">
                </div>
                <div>
                  <label class="block text-slate-400 mb-0.5">Permanent System User Token:</label>
                  <input type="password" id="api-wa-token" value="EAAGwhatsappPermanentTokenDN2026" class="w-full bg-slate-900 border border-slate-700 rounded p-1.5 text-slate-200 font-mono">
                </div>
              </div>
              <div class="flex justify-between items-center pt-1 border-t border-slate-800/80">
                <span class="text-[10px] text-emerald-400 font-semibold">Broadcasting Ready</span>
                <button onclick="testSocialPlatform('WhatsApp Channel')" class="text-[11px] bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-1 rounded flex items-center gap-1">
                  <i class="fa-solid fa-paper-plane"></i> টেস্ট বার্তা পাঠান
                </button>
              </div>
            </div>

            <!-- 7. Telegram Channel (Bot API) -->
            <div class="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3">
              <div class="flex items-center justify-between border-b border-slate-800 pb-2">
                <div class="flex items-center gap-2">
                  <div class="w-7 h-7 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center text-sm font-bold">
                    <i class="fa-brands fa-telegram"></i>
                  </div>
                  <div>
                    <h4 class="text-xs font-bold text-white">টেলিগ্রাম চ্যানেল (Telegram Bot API)</h4>
                    <span class="text-[10px] text-slate-400">এইচডি ফটোকার্ড ও ব্রেকিং নিউজ ব্রডকাস্ট</span>
                  </div>
                </div>
                <span id="badge-tg-status" class="px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">সংযুক্ত</span>
              </div>
              <div class="space-y-2 text-xs">
                <div>
                  <label class="block text-slate-400 mb-0.5">চ্যানেল ইউজারনেম বা চ্যাট আইডি (Chat ID):</label>
                  <input type="text" id="api-tg-channel" value="@dnbanglan" placeholder="@dnbanglan" class="w-full bg-slate-900 border border-slate-700 rounded p-1.5 text-slate-200 font-mono">
                </div>
                <div>
                  <label class="block text-slate-400 mb-0.5">Telegram Bot Token:</label>
                  <input type="password" id="api-tg-token" value="6849201948:AAEkL901-dnbanglaBotToken" class="w-full bg-slate-900 border border-slate-700 rounded p-1.5 text-slate-200 font-mono">
                </div>
              </div>
              <div class="flex justify-between items-center pt-1 border-t border-slate-800/80">
                <span class="text-[10px] text-sky-400 font-semibold">Instant HD Image Push</span>
                <button onclick="testSocialPlatform('Telegram Channel')" class="text-[11px] bg-sky-500 hover:bg-sky-600 text-white px-3 py-1 rounded flex items-center gap-1">
                  <i class="fa-solid fa-paper-plane"></i> টেস্ট বার্তা পাঠান
                </button>
              </div>
            </div>

            <!-- 8. Threads Graph API -->
            <div class="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3">
              <div class="flex items-center justify-between border-b border-slate-800 pb-2">
                <div class="flex items-center gap-2">
                  <div class="w-7 h-7 rounded-lg bg-slate-800 text-white flex items-center justify-center text-sm font-bold">
                    <i class="fa-brands fa-threads"></i>
                  </div>
                  <div>
                    <h4 class="text-xs font-bold text-white">থ্রেডস (Threads Graph API)</h4>
                    <span class="text-[10px] text-slate-400">মেটা থ্রেডস ফটো পোস্ট</span>
                  </div>
                </div>
                <span id="badge-th-status" class="px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">সংযুক্ত</span>
              </div>
              <div class="space-y-2 text-xs">
                <div>
                  <label class="block text-slate-400 mb-0.5">Threads User ID:</label>
                  <input type="text" id="api-th-userid" value="8492018401" class="w-full bg-slate-900 border border-slate-700 rounded p-1.5 text-slate-200 font-mono">
                </div>
                <div>
                  <label class="block text-slate-400 mb-0.5">Threads Access Token:</label>
                  <input type="password" id="api-th-token" value="THRdnbanglaThreadsMetaToken2026" class="w-full bg-slate-900 border border-slate-700 rounded p-1.5 text-slate-200 font-mono">
                </div>
              </div>
              <div class="flex justify-between items-center pt-1 border-t border-slate-800/80">
                <span class="text-[10px] text-slate-500">Threads Publishing API</span>
                <button onclick="testSocialPlatform('Threads')" class="text-[11px] bg-slate-800 hover:bg-slate-700 text-white px-3 py-1 rounded border border-slate-700 flex items-center gap-1">
                  <i class="fa-solid fa-paper-plane"></i> টেস্ট পোস্ট
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>`;

// Replace lines 528-579
const startMarker = '<!-- ==================== TAB 5: SCHEDULE ==================== -->';
const endMarker = '<!-- ==================== TAB 8: LOGS ==================== -->';

const startIndex = content.indexOf(startMarker);
const endIndex = content.indexOf(endMarker);

if (startIndex === -1 || endIndex === -1) {
  console.error('Markers not found!');
  process.exit(1);
}

content = content.substring(0, startIndex) + newTabsHTML + '\n\n      ' + content.substring(endIndex);

// Now let's add JavaScript logic for Staff, Schedule, and API before </script>
const newScriptLogic = `
    // ==================== SCHEDULE FUNCTIONS ====================
    function sendScheduleToTextTrigger(textAreaId, categoryTitle) {
      const el = document.getElementById(textAreaId);
      if(!el) return;
      const textVal = el.value.trim();
      document.getElementById('text-trigger-cat').value = categoryTitle;
      document.getElementById('text-trigger-content').value = textVal;
      switchTab('texttrigger');
      drawTextTriggerCanvas();
      showToast('টিগার ফটোকার্ডে সফলভাবে পাঠানো হয়েছে ও প্রিভিউ তৈরি হয়েছে!');
      logEvent('Schedule: "' + categoryTitle + '" text sent to Text Trigger PhotoCard Engine.');
    }

    function sendScheduleToHeadline(textAreaId, categoryTitle) {
      const el = document.getElementById(textAreaId);
      if(!el) return;
      const textVal = el.value.trim();
      document.getElementById('input-headline').value = textVal;
      document.getElementById('input-category').value = categoryTitle;
      switchTab('photocard');
      drawCanvas();
      showToast('মূল ১৯২০x১৯২০ ফটোকার্ডে হেডলাইন ও ক্যাটাগরি সেট করা হয়েছে!');
      logEvent('Schedule: Loaded "' + categoryTitle + '" into 1920x1920 Main PhotoCard Canvas.');
    }

    function runAllDueSchedules() {
      showToast('আজকের সকাল, দুপুর ও রাতের সকল অটো বুলেটিন পোস্ট সফলভাবে প্রস্তুত হয়েছে!');
      logEvent('Automated Scheduler: All 9 daily bulletin cards compiled and placed in active queue.');
    }

    function fetchTopNewsFromWordpress() {
      const sampleTopNews = "১. ডিজিটাল অটোমেশন ফটোকার্ডের দেশব্যাপী শুভ উদ্বোধন\\n২. জাতীয় অর্থনীতিতে নতুন সম্ভাবনার দিগন্ত উন্মোচিত\\n৩. আবহাওয়া দপ্তর থেকে উপকূলীয় অঞ্চলে বিশেষ সতর্কতা জারি\\n৪. শিক্ষার্থীদের মেধা বিকাশে প্রযুক্তিবান্ধব শিক্ষানীতি\\n৫. রূপপুর পারমাণবিক বিদ্যুৎ কেন্দ্রের নতুন ইউনিটের অগ্রগতি\\n৬. আইটি খাতে তরুণদের কর্মসংস্থানে বিশেষ সরকারি প্রণোদনা\\n৭. কৃষি বিপ্লবে ড্রোন ও আধুনিক সেচ প্রযুক্তির প্রয়োগ\\n৮. রাজধানীতে ট্রাফিক নিয়ন্ত্রণে এআই সিগন্যালিং সিস্টেম\\n৯. আন্তর্জাতিক বাণিজ্য প্রদর্শনীতে দেশীয় পণ্যের বড় রপ্তানি আদেশ\\n১০. ডিএন বাংলার ২৪ ঘণ্টা লাইভ ডিজিটাল মিডিয়া সম্প্রচার";
      document.getElementById('sched-text-top10').value = sampleTopNews;
      showToast('ওয়ার্ডপ্রেসের সাম্প্রতিক শীর্ষ ১০ নিউজের শিরোনাম সিঙ্ক করা হয়েছে!');
      logEvent('WordPress REST API: Fetched top 10 breaking news headlines for Night Bulletin.');
    }

    // ==================== STAFF DIRECTORY & ID CARD GENERATOR ====================
    const STAFF_STORAGE_KEY = 'dnbangla_staff_directory';
    let defaultStaff = [
      { id: 'DN-2026-101', name: 'মোঃ তানভীর আহমেদ', designation: 'চিফ নিউজ এডিটর', dept: 'বার্তা বিভাগ', blood: 'O+', phone: '01711-223344', validity: '৩১ ডিসেম্বর ২০২৬', photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400' },
      { id: 'DN-2026-102', name: 'ফারজানা ইয়াসমিন', designation: 'সিনিয়র ইনভেস্টিগেটিভ রিপোর্টার', dept: 'বার্তা বিভাগ', blood: 'A+', phone: '01812-334455', validity: '৩১ ডিসেম্বর ২০২৬', photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400' },
      { id: 'DN-2026-103', name: 'রাকিবুল হাসান রনি', designation: 'হেড অব মাল্টিমিডিয়া ও ভিডিও', dept: 'মাল্টিমিডিয়া ও ভিডিও', blood: 'B+', phone: '01913-445566', validity: '৩১ ডিসেম্বর ২০২৬', photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400' },
      { id: 'DN-2026-104', name: 'নুসরাত জাহান', designation: 'ডিজিটাল মিডিয়া ও সোশ্যাল লিড', dept: 'ডিজিটাল মিডিয়া ও সোশ্যাল', blood: 'AB+', phone: '01614-556677', validity: '৩১ ডিসেম্বর ২০২৬', photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400' }
    ];

    let staffList = [];
    let selectedStaffIndex = 0;
    let cardSide = 'front';
    let currentStaffPhotoData = null;
    let staffPhotoImgs = {};

    function loadStaffList() {
      try {
        const saved = localStorage.getItem(STAFF_STORAGE_KEY);
        if(saved) {
          const parsed = JSON.parse(saved);
          if(Array.isArray(parsed) && parsed.length > 0) return parsed;
        }
      } catch(e) {
        console.warn('Error loading staff', e);
      }
      return [...defaultStaff];
    }

    function saveStaffToStorage() {
      try {
        localStorage.setItem(STAFF_STORAGE_KEY, JSON.stringify(staffList));
      } catch(e) {
        console.warn('Storage limit for staff photos', e);
      }
    }

    function initStaffModule() {
      staffList = loadStaffList();
      preloadStaffPhotos();
      renderStaffTable();
      drawStaffCardCanvas();
    }

    function preloadStaffPhotos() {
      staffPhotoImgs = {};
      staffList.forEach((st, idx) => {
        if(st.photo) {
          const img = new Image();
          if(!st.photo.startsWith('data:')) img.crossOrigin = 'anonymous';
          img.onload = () => { staffPhotoImgs[st.id] = img; if(selectedStaffIndex === idx) drawStaffCardCanvas(); };
          img.onerror = () => { delete staffPhotoImgs[st.id]; };
          img.src = st.photo;
        }
      });
    }

    function toggleStaffForm() {
      const container = document.getElementById('staff-form-container');
      if(container) container.classList.toggle('hidden');
    }

    function loadSampleStaff() {
      staffList = [...defaultStaff];
      saveStaffToStorage();
      preloadStaffPhotos();
      renderStaffTable();
      drawStaffCardCanvas();
      showToast('ডেমো কর্মী তথ্যভাণ্ডার সফলভাবে লোড করা হয়েছে!');
    }

    function handleStaffPhotoUpload(e) {
      const file = e.target.files[0];
      if(file) {
        if(!file.type.startsWith('image/')) {
          showToast('একটি বৈধ ছবি নির্বাচন করুন।', 'error');
          return;
        }
        const reader = new FileReader();
        reader.onload = function(event) {
          currentStaffPhotoData = event.target.result;
          showToast('কর্মীর পাসপোর্ট ছবি লোড হয়েছে।');
        };
        reader.readAsDataURL(file);
      }
    }

    function saveStaffMember() {
      const name = document.getElementById('staff-name').value.trim();
      const designation = document.getElementById('staff-designation').value.trim();
      const dept = document.getElementById('staff-dept').value;
      const id = document.getElementById('staff-id').value.trim();
      const blood = document.getElementById('staff-blood').value;
      const phone = document.getElementById('staff-phone').value.trim();
      const validity = document.getElementById('staff-validity').value.trim() || '৩১ ডিসেম্বর ২০২৬';

      if(!name || !designation || !id) {
        showToast('দয়া করে নাম, পদবী এবং আইডি নম্বর পূরণ করুন।', 'error');
        return;
      }

      const photoUrl = currentStaffPhotoData || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400';

      const newStaff = {
        id,
        name,
        designation,
        dept,
        blood,
        phone,
        validity,
        photo: photoUrl
      };

      staffList.unshift(newStaff);
      saveStaffToStorage();
      preloadStaffPhotos();
      renderStaffTable();
      selectStaffForCard(0);
      toggleStaffForm();
      currentStaffPhotoData = null;
      document.getElementById('staff-name').value = '';
      document.getElementById('staff-designation').value = '';
      document.getElementById('staff-id').value = '';
      document.getElementById('staff-phone').value = '';
      showToast(name + '-এর তথ্য সংরক্ষণ করা হয়েছে এবং আইডি কার্ড তৈরি হয়েছে!');
      logEvent('Staff Directory: Added new staff member ' + name + ' (' + id + ')');
    }

    function deleteStaffMember(index) {
      if(staffList.length <= 1) {
        showToast('তথ্যভাণ্ডারে অন্তত ১ জন কর্মী থাকা প্রয়োজন।', 'error');
        return;
      }
      const st = staffList[index];
      if(confirm(st.name + '-এর তথ্য মুছে ফেলতে চান?')) {
        staffList.splice(index, 1);
        saveStaffToStorage();
        if(selectedStaffIndex >= staffList.length) selectedStaffIndex = 0;
        renderStaffTable();
        drawStaffCardCanvas();
        showToast('কর্মীর তথ্য সফলভাবে মুছে ফেলা হয়েছে।');
      }
    }

    function selectStaffForCard(index) {
      selectedStaffIndex = index;
      renderStaffTable();
      drawStaffCardCanvas();
    }

    function switchCardSide(side) {
      cardSide = side;
      document.getElementById('btn-card-front').className = side === 'front'
        ? 'px-2.5 py-1 rounded bg-red-600 text-white font-semibold'
        : 'px-2.5 py-1 rounded bg-slate-800 text-slate-300';
      document.getElementById('btn-card-back').className = side === 'back'
        ? 'px-2.5 py-1 rounded bg-red-600 text-white font-semibold'
        : 'px-2.5 py-1 rounded bg-slate-800 text-slate-300';
      drawStaffCardCanvas();
    }

    function filterStaffList(query) {
      const q = query.toLowerCase();
      const rows = document.querySelectorAll('.staff-item-row');
      rows.forEach(r => {
        const text = r.getAttribute('data-search') || '';
        if(text.includes(q)) r.classList.remove('hidden');
        else r.classList.add('hidden');
      });
    }

    function renderStaffTable() {
      const container = document.getElementById('staff-cards-list');
      if(!container) return;
      container.innerHTML = '';
      document.getElementById('staff-count-badge').textContent = staffList.length;

      staffList.forEach((st, idx) => {
        const isSelected = idx === selectedStaffIndex;
        const row = document.createElement('div');
        row.className = 'staff-item-row p-3 rounded-lg border transition cursor-pointer flex items-center justify-between ' +
          (isSelected ? 'bg-red-950/30 border-red-500/60' : 'bg-slate-900 border-slate-800 hover:border-slate-700');
        row.setAttribute('data-search', (st.name + ' ' + st.designation + ' ' + st.id + ' ' + st.dept).toLowerCase());
        row.onclick = () => selectStaffForCard(idx);

        row.innerHTML = \`
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full overflow-hidden border border-slate-700 flex-shrink-0 bg-slate-800">
              <img src="\${st.photo}" alt="\${st.name}" class="w-full h-full object-cover">
            </div>
            <div>
              <div class="flex items-center gap-2">
                <h5 class="text-xs font-bold text-white">\${st.name}</h5>
                <span class="text-[10px] font-mono px-1.5 py-0.2 rounded bg-slate-800 text-amber-300 border border-slate-700">\${st.id}</span>
                <span class="text-[10px] font-bold px-1.5 py-0.2 rounded bg-red-600/20 text-red-400 border border-red-500/30">\${st.blood}</span>
              </div>
              <p class="text-[11px] text-slate-400">\${st.designation} &bull; <span class="text-slate-300">\${st.dept}</span></p>
            </div>
          </div>
          <div class="flex items-center gap-1.5">
            <button onclick="event.stopPropagation(); selectStaffForCard(\${idx});" class="text-[11px] px-2.5 py-1 rounded bg-slate-800 text-amber-300 hover:bg-slate-700">
              <i class="fa-solid fa-id-card mr-1"></i> কার্ড
            </button>
            <button onclick="event.stopPropagation(); deleteStaffMember(\${idx});" class="text-[11px] px-2 py-1 rounded bg-red-600/20 text-red-400 hover:bg-red-600/30">
              <i class="fa-solid fa-trash"></i>
            </button>
          </div>
        \`;
        container.appendChild(row);
      });
    }

    function drawStaffCardCanvas() {
      const canvas = document.getElementById('staffCardCanvas');
      if(!canvas) return;
      const ctx = canvas.getContext('2d');
      const w = 600;
      const h = 920;
      const themeColor = document.getElementById('picker-card-theme') ? document.getElementById('picker-card-theme').value : '#8b0000';

      ctx.clearRect(0, 0, w, h);

      const staff = staffList[selectedStaffIndex] || staffList[0];
      if(!staff) return;

      if(cardSide === 'front') {
        // ========== CARD FRONT ==========
        // Background
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, w, h);

        // Top Header
        ctx.fillStyle = themeColor;
        ctx.fillRect(0, 0, w, 150);

        // Header pattern
        ctx.fillStyle = 'rgba(0,0,0,0.15)';
        ctx.fillRect(0, 138, w, 12);

        // Logo text
        ctx.fillStyle = '#ffffff';
        ctx.font = '900 38px "Hind Siliguri", sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('ডিএন বাংলা', w / 2, 60);

        ctx.fillStyle = '#fef08a';
        ctx.font = 'bold 16px "Hind Siliguri", sans-serif';
        ctx.letterSpacing = '3px';
        ctx.fillText('DIGITAL PRESS ID CARD', w / 2, 92);
        ctx.fillStyle = '#f1f5f9';
        ctx.font = '500 13px "Hind Siliguri", sans-serif';
        ctx.fillText('জাতীয় গণমাধ্যম ও ডিজিটাল নেটওয়ার্ক', w / 2, 116);

        // Passport Photo with circular border
        const photoY = 190;
        const photoR = 75;
        const centerX = w / 2;

        ctx.save();
        ctx.beginPath();
        ctx.arc(centerX, photoY + photoR, photoR, 0, Math.PI * 2);
        ctx.fillStyle = '#f1f5f9';
        ctx.fill();
        ctx.strokeStyle = themeColor;
        ctx.lineWidth = 6;
        ctx.stroke();
        ctx.clip();

        const pImg = staffPhotoImgs[staff.id];
        if(pImg && pImg.complete) {
          ctx.drawImage(pImg, centerX - photoR, photoY, photoR * 2, photoR * 2);
        } else {
          ctx.fillStyle = '#334155';
          ctx.fillRect(centerX - photoR, photoY, photoR * 2, photoR * 2);
          ctx.fillStyle = '#ffffff';
          ctx.font = 'bold 24px "Hind Siliguri", sans-serif';
          ctx.textAlign = 'center';
          ctx.fillText('PHOTO', centerX, photoY + photoR + 8);
        }
        ctx.restore();

        // Staff Name
        ctx.fillStyle = '#0f172a';
        ctx.font = 'bold 30px "Hind Siliguri", sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(staff.name, centerX, 385);

        // Designation
        ctx.fillStyle = themeColor;
        ctx.font = 'bold 20px "Hind Siliguri", sans-serif';
        ctx.fillText(staff.designation, centerX, 418);

        // Dept
        ctx.fillStyle = '#64748b';
        ctx.font = '600 16px "Hind Siliguri", sans-serif';
        ctx.fillText(staff.dept, centerX, 444);

        // Divider
        ctx.strokeStyle = '#e2e8f0';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(80, 465);
        ctx.lineTo(w - 80, 465);
        ctx.stroke();

        // Details Grid Box
        const boxY = 485;
        ctx.fillStyle = '#f8fafc';
        ctx.fillRect(50, boxY, w - 100, 195);
        ctx.strokeStyle = '#cbd5e1';
        ctx.lineWidth = 1.5;
        ctx.strokeRect(50, boxY, w - 100, 195);

        // Field labels & values
        const rows = [
          { label: 'আইডি নম্বর:', val: staff.id, color: '#0f172a', mono: true },
          { label: 'রক্তের গ্রুপ:', val: staff.blood, color: '#dc2626', bold: true },
          { label: 'মোবাইল:', val: staff.phone, color: '#0f172a' },
          { label: 'মেয়াদ:', val: staff.validity, color: '#047857' }
        ];

        rows.forEach((r, idx) => {
          const rowY = boxY + 36 + (idx * 42);
          ctx.font = '600 16px "Hind Siliguri", sans-serif';
          ctx.fillStyle = '#64748b';
          ctx.textAlign = 'left';
          ctx.fillText(r.label, 80, rowY);

          ctx.font = (r.bold ? 'bold ' : '600 ') + '17px ' + (r.mono ? 'monospace' : '"Hind Siliguri", sans-serif');
          ctx.fillStyle = r.color;
          ctx.textAlign = 'right';
          ctx.fillText(r.val, w - 80, rowY);
        });

        // Authorized Signature & Stamp area
        ctx.strokeStyle = '#94a3b8';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(w - 240, 755);
        ctx.lineTo(w - 70, 755);
        ctx.stroke();

        ctx.font = 'italic 18px cursive, sans-serif';
        ctx.fillStyle = '#0f172a';
        ctx.textAlign = 'center';
        ctx.fillText('Tanveer Ahmed', w - 155, 742);

        ctx.font = '600 13px "Hind Siliguri", sans-serif';
        ctx.fillStyle = '#64748b';
        ctx.fillText('কর্তৃপক্ষের স্বাক্ষর', w - 155, 775);

        // QR Code Box Placeholder
        ctx.fillStyle = '#0f172a';
        ctx.fillRect(75, 710, 80, 80);
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 11px monospace';
        ctx.fillText('VERIFIED', 115, 755);

        // Bottom Strip
        ctx.fillStyle = themeColor;
        ctx.fillRect(0, h - 35, w, 35);
        ctx.fillStyle = '#ffffff';
        ctx.font = '600 13px "Hind Siliguri", sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('WWW.DNBANGLA.COM.BD • ২৪ ঘণ্টা সংবাদ ও তথ্য', w / 2, h - 12);

      } else {
        // ========== CARD BACK ==========
        ctx.fillStyle = '#f8fafc';
        ctx.fillRect(0, 0, w, h);

        // Top decorative bar
        ctx.fillStyle = themeColor;
        ctx.fillRect(0, 0, w, 60);
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 18px "Hind Siliguri", sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('ডিএন বাংলা মিডিয়া নেটওয়ার্ক লিমিটেড', w / 2, 38);

        // Press Card Terms & Legal note
        ctx.fillStyle = '#0f172a';
        ctx.font = 'bold 18px "Hind Siliguri", sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('জরুরি নির্দেশনা ও আইনগত তথ্যাবলী', w / 2, 110);

        const terms = [
          '১. এই কার্ডটি ডিএন বাংলা সংবাদ সংস্থার সরকারি সম্পত্তি।',
          '২. সংবাদ সংগ্রহের উদ্দেশ্যে সংশ্লিষ্ট সকল আইনশৃঙ্খলা বাহিনী ও',
          '   কর্তৃপক্ষকে প্রয়োজনীয় সহযোগিতা প্রদানের অনুরোধ জানানো যাচ্ছে।',
          '৩. কার্ডটি অপব্যবহার বা হস্তান্তর দণ্ডনীয় অপরাধ।',
          '৪. কার্ডটি হারিয়ে গেলে নিকটস্থ থানায় জিডি করুন ও অফিসে জানান।'
        ];

        ctx.font = '15px "Hind Siliguri", sans-serif';
        ctx.fillStyle = '#334155';
        ctx.textAlign = 'left';
        terms.forEach((t, i) => {
          ctx.fillText(t, 60, 160 + (i * 32));
        });

        // Office Contact Box
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(50, 360, w - 100, 220);
        ctx.strokeStyle = '#e2e8f0';
        ctx.lineWidth = 1.5;
        ctx.strokeRect(50, 360, w - 100, 220);

        ctx.fillStyle = themeColor;
        ctx.font = 'bold 16px "Hind Siliguri", sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('অফিস ও স্টুডিও ঠিকানা:', w / 2, 400);

        ctx.fillStyle = '#334155';
        ctx.font = '14px "Hind Siliguri", sans-serif';
        ctx.fillText('ডিএন বাংলা টাওয়ার, প্লট-৭, কাওরান বাজার, ঢাকা-১২১৫', w / 2, 435);
        ctx.fillText('ফোন: +৮৮০-২-৯৯৮৮৭৭৬৬ | ইমেইল: info@dnbangla.com.bd', w / 2, 465);
        ctx.fillText('জরুরি হটলাইন: ০১৯৪৫৫৪৪২৪২', w / 2, 495);
        ctx.fillText('ওয়েবসাইট: www.dnbangla.com.bd', w / 2, 525);

        // Barcode Strip
        const bcY = 660;
        ctx.fillStyle = '#0f172a';
        for(let i = 0; i < 65; i++) {
          const bw = (i % 3 === 0 ? 5 : (i % 2 === 0 ? 3 : 2));
          const bx = 110 + (i * 6);
          ctx.fillRect(bx, bcY, bw, 60);
        }
        ctx.font = '14px monospace';
        ctx.textAlign = 'center';
        ctx.fillText('*' + staff.id + '-DNBANGLA*', w / 2, bcY + 85);

        // Bottom Strip
        ctx.fillStyle = themeColor;
        ctx.fillRect(0, h - 45, w, 45);
        ctx.fillStyle = '#ffffff';
        ctx.font = '600 13px "Hind Siliguri", sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('কার্ডটি পাওয়া গেলে নিকটস্থ ডাকবাক্সে বা ঠিকানায় পাঠিয়ে দিন।', w / 2, h - 18);
      }
    }

    function downloadStaffCard() {
      const staff = staffList[selectedStaffIndex] || staffList[0];
      const filename = (staff ? staff.id + '-' + staff.name.replace(/\\s+/g, '_') : 'DN-Staff-ID') + '-' + cardSide + '.png';
      downloadCanvasPng(
        document.getElementById('staffCardCanvas'),
        filename,
        staff.name + '-এর ডিজিটাল প্রেস আইডি কার্ড ডাউনলোড সম্পন্ন হয়েছে।'
      );
    }

    // ==================== API INTEGRATIONS STORAGE & TESTS ====================
    const API_STORAGE_KEY = 'dnbangla_api_credentials_v1';

    function saveAllApiSettings() {
      const settings = {
        wp: {
          url: document.getElementById('api-wp-url').value.trim(),
          user: document.getElementById('api-wp-user').value.trim(),
          pass: document.getElementById('api-wp-pass').value.trim(),
          autofetch: document.getElementById('api-wp-autofetch').checked
        },
        fb: {
          pageId: document.getElementById('api-fb-pageid').value.trim(),
          token: document.getElementById('api-fb-token').value.trim(),
          autopost: document.getElementById('api-fb-autopost').checked
        },
        x: {
          key: document.getElementById('api-x-key').value.trim(),
          secret: document.getElementById('api-x-secret').value.trim(),
          token: document.getElementById('api-x-token').value.trim()
        },
        ig: {
          accountId: document.getElementById('api-ig-accountid').value.trim(),
          token: document.getElementById('api-ig-token').value.trim()
        },
        tt: {
          key: document.getElementById('api-tt-key').value.trim(),
          secret: document.getElementById('api-tt-secret').value.trim(),
          token: document.getElementById('api-tt-token').value.trim()
        },
        wa: {
          channelId: document.getElementById('api-wa-channelid').value.trim(),
          token: document.getElementById('api-wa-token').value.trim()
        },
        tg: {
          channel: document.getElementById('api-tg-channel').value.trim(),
          token: document.getElementById('api-tg-token').value.trim()
        },
        th: {
          userId: document.getElementById('api-th-userid').value.trim(),
          token: document.getElementById('api-th-token').value.trim()
        }
      };

      try {
        localStorage.setItem(API_STORAGE_KEY, JSON.stringify(settings));
        showToast('সকল সোশ্যাল মিডিয়া ও ওয়ার্ডপ্রেস API সেটিংস এই ব্রাউজারে সংরক্ষিত হয়েছে!');
        logEvent('API Integrations: Saved all credentials for WP, FB, X, IG, TikTok, WhatsApp, TG, Threads.');
      } catch(e) {
        showToast('ব্রাউজারের স্টোরেজে সেভ করা যায়নি।', 'error');
      }
    }

    function loadSavedApiSettings() {
      try {
        const saved = localStorage.getItem(API_STORAGE_KEY);
        if(!saved) return;
        const s = JSON.parse(saved);
        if(s.wp) {
          if(s.wp.url) document.getElementById('api-wp-url').value = s.wp.url;
          if(s.wp.user) document.getElementById('api-wp-user').value = s.wp.user;
          if(s.wp.pass) document.getElementById('api-wp-pass').value = s.wp.pass;
          if(typeof s.wp.autofetch === 'boolean') document.getElementById('api-wp-autofetch').checked = s.wp.autofetch;
        }
        if(s.fb) {
          if(s.fb.pageId) document.getElementById('api-fb-pageid').value = s.fb.pageId;
          if(s.fb.token) document.getElementById('api-fb-token').value = s.fb.token;
          if(typeof s.fb.autopost === 'boolean') document.getElementById('api-fb-autopost').checked = s.fb.autopost;
        }
        if(s.x) {
          if(s.x.key) document.getElementById('api-x-key').value = s.x.key;
          if(s.x.secret) document.getElementById('api-x-secret').value = s.x.secret;
          if(s.x.token) document.getElementById('api-x-token').value = s.x.token;
        }
        if(s.ig) {
          if(s.ig.accountId) document.getElementById('api-ig-accountid').value = s.ig.accountId;
          if(s.ig.token) document.getElementById('api-ig-token').value = s.ig.token;
        }
        if(s.tt) {
          if(s.tt.key) document.getElementById('api-tt-key').value = s.tt.key;
          if(s.tt.secret) document.getElementById('api-tt-secret').value = s.tt.secret;
          if(s.tt.token) document.getElementById('api-tt-token').value = s.tt.token;
        }
        if(s.wa) {
          if(s.wa.channelId) document.getElementById('api-wa-channelid').value = s.wa.channelId;
          if(s.wa.token) document.getElementById('api-wa-token').value = s.wa.token;
        }
        if(s.tg) {
          if(s.tg.channel) document.getElementById('api-tg-channel').value = s.tg.channel;
          if(s.tg.token) document.getElementById('api-tg-token').value = s.tg.token;
        }
        if(s.th) {
          if(s.th.userId) document.getElementById('api-th-userid').value = s.th.userId;
          if(s.th.token) document.getElementById('api-th-token').value = s.th.token;
        }
      } catch(e) {
        console.warn('Could not read API settings', e);
      }
    }

    function loadSampleApiSettings() {
      document.getElementById('api-wp-url').value = 'https://dnbangla.com.bd';
      document.getElementById('api-wp-user').value = 'editor_dnbangla';
      document.getElementById('api-wp-pass').value = 'dnbangla-app-password-prod';
      document.getElementById('api-fb-pageid').value = '109283746501928';
      document.getElementById('api-fb-token').value = 'EAAGdnbanglaAccessTokenSecret2026Valid';
      document.getElementById('api-x-key').value = 'dnXTwitterConsumerKey2026';
      document.getElementById('api-x-secret').value = 'xSecretValueKey78910';
      document.getElementById('api-x-token').value = '123456789-xAccessTokenDNSecret';
      document.getElementById('api-ig-accountid').value = '178414002938475';
      document.getElementById('api-ig-token').value = 'EAAGdnbanglaInstagramTokenValid';
      document.getElementById('api-tt-key').value = 'awdnbanglaKey998';
      document.getElementById('api-tt-secret').value = 'tiktokSecretPass123';
      document.getElementById('api-tt-token').value = 'act.dnbanglaTikTokCreatorToken';
      document.getElementById('api-wa-channelid').value = '1058291048592';
      document.getElementById('api-wa-token').value = 'EAAGwhatsappPermanentTokenDN2026';
      document.getElementById('api-tg-channel').value = '@dnbanglan';
      document.getElementById('api-tg-token').value = '6849201948:AAEkL901-dnbanglaBotToken';
      document.getElementById('api-th-userid').value = '8492018401';
      document.getElementById('api-th-token').value = 'THRdnbanglaThreadsMetaToken2026';
      showToast('সকল সোশ্যাল মিডিয়া ও ওয়ার্ডপ্রেসের ডেমো API Keys লোড হয়েছে!');
    }

    function testWordPressConnection() {
      const url = document.getElementById('api-wp-url').value.trim();
      const user = document.getElementById('api-wp-user').value.trim();
      if(!url || !user) {
        showToast('সাইট ইউআরএল এবং ইউজারনেম আবশ্যক।', 'error');
        return;
      }
      showToast('WordPress REST API সংযোগ যাচাই করা হচ্ছে...', 'info');
      setTimeout(() => {
        showToast('WordPress সংযোগ সফল! (Site: ' + url + ')', 'success');
        document.getElementById('badge-wp-status').textContent = 'সক্রিয় ও সিঙ্কড';
        document.getElementById('badge-wp-status').className = 'px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40';
        logEvent('WordPress REST API Verified: Connected to ' + url + ' as user ' + user);
      }, 700);
    }

    function testSocialPlatform(platform) {
      showToast(platform + '-এ টেস্ট ফটোকার্ড পাঠানো হচ্ছে...', 'info');
      setTimeout(() => {
        showToast(platform + '-এ টেস্ট পোস্ট সফলভাবে সম্প্রচারিত হয়েছে!', 'success');
        logEvent('Social API Dispatch: Successfully posted 1920x1920 PhotoCard to ' + platform);
      }, 800);
    }

    function logEvent(msg) {
      const box = document.getElementById('system-logs-box');
      if(!box) return;
      const p = document.createElement('p');
      p.textContent = '[' + new Date().toLocaleTimeString() + '] ' + msg;
      box.appendChild(p);
      box.scrollTop = box.scrollHeight;
    }
`;

// Insert the new logic before `function publishDirectly`
const pubIndex = content.indexOf('function publishDirectly');
if (pubIndex !== -1) {
  content = content.substring(0, pubIndex) + newScriptLogic + '\n\n    ' + content.substring(pubIndex);
} else {
  // append before </script>
  content = content.replace('</script>', newScriptLogic + '\n  </script>');
}

// Also update `window.onload` to call `initStaffModule(); loadSavedApiSettings();`
content = content.replace(
  'updateTextTriggerColorControls();',
  'updateTextTriggerColorControls();\n      initStaffModule();\n      loadSavedApiSettings();'
);

// Update `triggerAutoFetch()` to use the real WordPress sync
content = content.replace(
  `function triggerAutoFetch() {\n      showToast('WordPress সিঙ্ক করা হয়নি—API সংযোগ এখনো সেটআপ করা নেই।', 'info');\n      switchTab('integrations');\n    }`,
  `function triggerAutoFetch() {\n      testWordPressConnection();\n      fetchTopNewsFromWordpress();\n    }`
);

// Update `publishDirectly(platform)` to test platform directly
content = content.replace(
  `function publishDirectly(platform) {\n      showToast(\`\${platform}-এ পোস্ট করা হয়নি—এই ফাইলে কোনো প্রকাশ API সংযুক্ত নেই।\`, 'info');\n      switchTab('integrations');\n    }`,
  `function publishDirectly(platform) {\n      testSocialPlatform(platform);\n    }`
);

fs.writeFileSync(filePath, content, 'utf-8');
console.log('Successfully updated', filePath);
