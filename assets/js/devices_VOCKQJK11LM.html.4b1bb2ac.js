"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[12112],{14378:(e,t,a)=>{a.r(t),a.d(t,{comp:()=>r,data:()=>n});var i=a(6254);const o={},r=(0,a(52753).A)(o,[["render",function(e,t){const a=(0,i.g2)("RouteLink");return(0,i.uX)(),(0,i.CE)("div",null,[t[12]||(t[12]=(0,i.Lk)("h1",{id:"aqara-vockqjk11lm",tabindex:"-1"},[(0,i.Lk)("a",{class:"header-anchor",href:"#aqara-vockqjk11lm"},[(0,i.Lk)("span",null,"Aqara VOCKQJK11LM")])],-1)),(0,i.Lk)("table",null,[t[7]||(t[7]=(0,i.Lk)("thead",null,[(0,i.Lk)("tr",null,[(0,i.Lk)("th"),(0,i.Lk)("th")])],-1)),(0,i.Lk)("tbody",null,[t[2]||(t[2]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Model"),(0,i.Lk)("td",null,"VOCKQJK11LM")],-1)),(0,i.Lk)("tr",null,[t[1]||(t[1]=(0,i.Lk)("td",null,"Vendor",-1)),(0,i.Lk)("td",null,[(0,i.bF)(a,{to:"/supported-devices/#v=Aqara"},{default:(0,i.k6)((()=>t[0]||(t[0]=[(0,i.eW)("Aqara")]))),_:1})])]),t[3]||(t[3]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Description"),(0,i.Lk)("td",null,"TVOC air quality monitor")],-1)),t[4]||(t[4]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Exposes"),(0,i.Lk)("td",null,"device_temperature, battery, voltage, air_quality, voc, temperature, humidity, display_unit")],-1)),t[5]||(t[5]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Picture"),(0,i.Lk)("td",null,[(0,i.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/VOCKQJK11LM.png",alt:"Aqara VOCKQJK11LM"})])],-1)),t[6]||(t[6]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"White-label"),(0,i.Lk)("td",null,"Aqara AAQS-S01")],-1))])]),t[13]||(t[13]=(0,i.Fv)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><h3 id="adapter-firmware" tabindex="-1"><a class="header-anchor" href="#adapter-firmware"><span>Adapter firmware</span></a></h3><p>In order for this device to work (fully), at least the following firmware is required on your adapter:</p><ul><li>CC2530/CC2531: <a href="https://github.com/Koenkk/Z-Stack-firmware/tree/Z-Stack_Home_1.2_20211115/20211116/coordinator/Z-Stack_Home_1.2/bin" target="_blank" rel="noopener noreferrer"><code>20211115</code></a></li><li>CC1352/CC2652: <a href="https://github.com/Koenkk/Z-Stack-firmware/tree/7c5a6da0c41855d42b5e6506e5e3b496be097ba3/coordinator/Z-Stack_3.x.0/bin" target="_blank" rel="noopener noreferrer"><code>20211114</code></a></li><li>CC2538: <a href="https://github.com/jethome-ru/zigbee-firmware/tree/master/ti/coordinator/cc2538_cc2592" target="_blank" rel="noopener noreferrer"><code>20211222</code></a></li><li>Conbee II: <a href="http://deconz.dresden-elektronik.de/deconz-firmware/deCONZ_ConBeeII_0x26720700.bin.GCF" target="_blank" rel="noopener noreferrer"><code>0x26720700</code></a></li></ul><p><em>Note that if you have already paired the device you will need to repair it after upgrading your adapter firmware.</em></p><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing"><span>Pairing</span></a></h3><p>Press and hold button on top of device until connection symbol appears</p><h2 id="ota-updates" tabindex="-1"><a class="header-anchor" href="#ota-updates"><span>OTA updates</span></a></h2>',8)),(0,i.Lk)("p",null,[t[9]||(t[9]=(0,i.eW)("This device supports OTA updates, for more information see ")),(0,i.bF)(a,{to:"/guide/usage/ota_updates.html"},{default:(0,i.k6)((()=>t[8]||(t[8]=[(0,i.eW)("OTA updates")]))),_:1}),t[10]||(t[10]=(0,i.eW)("."))]),t[14]||(t[14]=(0,i.Lk)("h2",{id:"options",tabindex:"-1"},[(0,i.Lk)("a",{class:"header-anchor",href:"#options"},[(0,i.Lk)("span",null,"Options")])],-1)),(0,i.Lk)("p",null,[(0,i.Lk)("em",null,[(0,i.bF)(a,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,i.k6)((()=>t[11]||(t[11]=[(0,i.eW)("How to use device type specific configuration")]))),_:1})])]),t[15]||(t[15]=(0,i.Fv)('<ul><li><p><code>device_temperature_calibration</code>: Calibrates the device_temperature value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>voc_calibration</code>: Calibrates the voc value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>temperature_calibration</code>: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>temperature_precision</code>: Number of digits after decimal point for temperature, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>humidity_calibration</code>: Calibrates the humidity value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>humidity_precision</code>: Number of digits after decimal point for humidity, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="device-temperature-numeric" tabindex="-1"><a class="header-anchor" href="#device-temperature-numeric"><span>Device temperature (numeric)</span></a></h3><p>Temperature of the device. Value can be found in the published state on the <code>device_temperature</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %, can take up to 24 hours before reported. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="voltage-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-numeric"><span>Voltage (numeric)</span></a></h3><p>Voltage of the battery in millivolts. Value can be found in the published state on the <code>voltage</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>mV</code>.</p><h3 id="air-quality-enum" tabindex="-1"><a class="header-anchor" href="#air-quality-enum"><span>Air quality (enum)</span></a></h3><p>Measured air quality. Value can be found in the published state on the <code>air_quality</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;air_quality&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The possible values are: <code>excellent</code>, <code>good</code>, <code>moderate</code>, <code>poor</code>, <code>unhealthy</code>, <code>unknown</code>.</p><h3 id="voc-numeric" tabindex="-1"><a class="header-anchor" href="#voc-numeric"><span>Voc (numeric)</span></a></h3><p>Measured VOC value. Value can be found in the published state on the <code>voc</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;voc&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The unit of this value is <code>ppb</code>.</p><h3 id="temperature-numeric" tabindex="-1"><a class="header-anchor" href="#temperature-numeric"><span>Temperature (numeric)</span></a></h3><p>Measured temperature value. Value can be found in the published state on the <code>temperature</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;temperature&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id="humidity-numeric" tabindex="-1"><a class="header-anchor" href="#humidity-numeric"><span>Humidity (numeric)</span></a></h3><p>Measured relative humidity. Value can be found in the published state on the <code>humidity</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;humidity&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The unit of this value is <code>%</code>.</p><h3 id="display-unit-enum" tabindex="-1"><a class="header-anchor" href="#display-unit-enum"><span>Display unit (enum)</span></a></h3><p>Units to show on the display. Value can be found in the published state on the <code>display_unit</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;display_unit&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;display_unit&quot;: NEW_VALUE}</code>. The possible values are: <code>mgm3_celsius</code>, <code>ppb_celsius</code>, <code>mgm3_fahrenheit</code>, <code>ppb_fahrenheit</code>.</p>',18))])}]]),n=JSON.parse('{"path":"/devices/VOCKQJK11LM.html","title":"Aqara VOCKQJK11LM control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Aqara VOCKQJK11LM control via MQTT","description":"Integrate your Aqara VOCKQJK11LM via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2021-08-01T20:41:55.000Z"},"headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Adapter firmware","slug":"adapter-firmware","link":"#adapter-firmware","children":[]},{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]}]},{"level":2,"title":"OTA updates","slug":"ota-updates","link":"#ota-updates","children":[]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Device temperature (numeric)","slug":"device-temperature-numeric","link":"#device-temperature-numeric","children":[]},{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Voltage (numeric)","slug":"voltage-numeric","link":"#voltage-numeric","children":[]},{"level":3,"title":"Air quality (enum)","slug":"air-quality-enum","link":"#air-quality-enum","children":[]},{"level":3,"title":"Voc (numeric)","slug":"voc-numeric","link":"#voc-numeric","children":[]},{"level":3,"title":"Temperature (numeric)","slug":"temperature-numeric","link":"#temperature-numeric","children":[]},{"level":3,"title":"Humidity (numeric)","slug":"humidity-numeric","link":"#humidity-numeric","children":[]},{"level":3,"title":"Display unit (enum)","slug":"display-unit-enum","link":"#display-unit-enum","children":[]}]}],"git":{"updatedTime":1740950067000},"filePathRelative":"devices/VOCKQJK11LM.md"}')}}]);