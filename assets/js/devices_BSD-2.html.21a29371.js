"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[87388],{57294:(e,t,a)=>{a.r(t),a.d(t,{comp:()=>s,data:()=>r});var o=a(6254);const i={},s=(0,a(52753).A)(i,[["render",function(e,t){const a=(0,o.g2)("RouteLink");return(0,o.uX)(),(0,o.CE)("div",null,[t[7]||(t[7]=(0,o.Lk)("h1",{id:"bosch-bsd-2",tabindex:"-1"},[(0,o.Lk)("a",{class:"header-anchor",href:"#bosch-bsd-2"},[(0,o.Lk)("span",null,"Bosch BSD-2")])],-1)),(0,o.Lk)("table",null,[t[6]||(t[6]=(0,o.Lk)("thead",null,[(0,o.Lk)("tr",null,[(0,o.Lk)("th"),(0,o.Lk)("th")])],-1)),(0,o.Lk)("tbody",null,[t[2]||(t[2]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Model"),(0,o.Lk)("td",null,"BSD-2")],-1)),(0,o.Lk)("tr",null,[t[1]||(t[1]=(0,o.Lk)("td",null,"Vendor",-1)),(0,o.Lk)("td",null,[(0,o.bF)(a,{to:"/supported-devices/#v=Bosch"},{default:(0,o.k6)((()=>t[0]||(t[0]=[(0,o.eW)("Bosch")]))),_:1})])]),t[3]||(t[3]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Description"),(0,o.Lk)("td",null,"Smoke alarm II")],-1)),t[4]||(t[4]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Exposes"),(0,o.Lk)("td",null,"smoke, test, alarm_smoke, alarm_burglar, battery, sensitivity, broadcast_alarm")],-1)),t[5]||(t[5]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Picture"),(0,o.Lk)("td",null,[(0,o.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/BSD-2.png",alt:"Bosch BSD-2"})])],-1))])]),t[8]||(t[8]=(0,o.Fv)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing"><span>Pairing</span></a></h3><ul><li>Before starting the pairing process the device&#39;s install code needs to be added to Zigbee2MQTT. Scan the QR code printed on the bottom of the device with the camera of your mobile phone and copy the received value (Attention: The install code printed in plain text on the device is not sufficient!)</li><li>The install code can be found inside the device before attaching it to the mounting plate</li><li>Add this install code under Settings -&gt; Tools -&gt; Add install code</li></ul><h3 id="factory-resetting" tabindex="-1"><a class="header-anchor" href="#factory-resetting"><span>Factory resetting</span></a></h3><p>To factory reset the device remove the battery and wait 20 seconds or briefly press the device&#39;s main button. While pressing and holding the device&#39;s main button, insert the battery back. As soon as the device&#39;s LED on the front is starting to blink red, release the device&#39;s main button and press and hold it again until the device beeps. The device will reboot, which can take up to a minute. <a href="https://www.youtube.com/watch?v=PRAIsw4PoqE" target="_blank" rel="noopener noreferrer">Watch on Youtube</a></p><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="smoke-binary" tabindex="-1"><a class="header-anchor" href="#smoke-binary"><span>Smoke (binary)</span></a></h3><p>Indicates whether the device detected smoke. Value can be found in the published state on the <code>smoke</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> smoke is ON, if <code>false</code> OFF.</p><h3 id="test-binary" tabindex="-1"><a class="header-anchor" href="#test-binary"><span>Test (binary)</span></a></h3><p>Indicates whether the device is currently performing a test. Value can be found in the published state on the <code>test</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> test is ON, if <code>false</code> OFF.</p><h3 id="alarm-smoke-binary" tabindex="-1"><a class="header-anchor" href="#alarm-smoke-binary"><span>Alarm smoke (binary)</span></a></h3><p>Toggle the smoke alarm siren. Value can be found in the published state on the <code>alarm_smoke</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;alarm_smoke&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;alarm_smoke&quot;: NEW_VALUE}</code>. If value equals <code>true</code> alarm smoke is ON, if <code>false</code> OFF.</p><h3 id="alarm-burglar-binary" tabindex="-1"><a class="header-anchor" href="#alarm-burglar-binary"><span>Alarm burglar (binary)</span></a></h3><p>Toggle the burglar alarm siren. Value can be found in the published state on the <code>alarm_burglar</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;alarm_burglar&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;alarm_burglar&quot;: NEW_VALUE}</code>. If value equals <code>true</code> alarm burglar is ON, if <code>false</code> OFF.</p><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;battery&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="sensitivity-enum" tabindex="-1"><a class="header-anchor" href="#sensitivity-enum"><span>Sensitivity (enum)</span></a></h3><p>Sensitivity of the smoke detector. Value can be found in the published state on the <code>sensitivity</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;sensitivity&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;sensitivity&quot;: NEW_VALUE}</code>. The possible values are: <code>low</code>, <code>medium</code>, <code>high</code>.</p><h3 id="broadcast-alarm-enum" tabindex="-1"><a class="header-anchor" href="#broadcast-alarm-enum"><span>Broadcast alarm (enum)</span></a></h3><p>Set siren state of all BSD-2 via broadcast. Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;broadcast_alarm&quot;: NEW_VALUE}</code>. The possible values are: <code>smoke_off</code>, <code>smoke_on</code>, <code>burglar_off</code>, <code>burglar_on</code>.</p>',20))])}]]),r=JSON.parse('{"path":"/devices/BSD-2.html","title":"Bosch BSD-2 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Bosch BSD-2 control via MQTT","description":"Integrate your Bosch BSD-2 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2023-03-30T17:14:41.000Z"},"headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]},{"level":3,"title":"Factory resetting","slug":"factory-resetting","link":"#factory-resetting","children":[]}]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Smoke (binary)","slug":"smoke-binary","link":"#smoke-binary","children":[]},{"level":3,"title":"Test (binary)","slug":"test-binary","link":"#test-binary","children":[]},{"level":3,"title":"Alarm smoke (binary)","slug":"alarm-smoke-binary","link":"#alarm-smoke-binary","children":[]},{"level":3,"title":"Alarm burglar (binary)","slug":"alarm-burglar-binary","link":"#alarm-burglar-binary","children":[]},{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Sensitivity (enum)","slug":"sensitivity-enum","link":"#sensitivity-enum","children":[]},{"level":3,"title":"Broadcast alarm (enum)","slug":"broadcast-alarm-enum","link":"#broadcast-alarm-enum","children":[]}]}],"git":{"updatedTime":1740950067000},"filePathRelative":"devices/BSD-2.md"}')}}]);