import { useState } from "react";
import { skillGroups } from "../data";
import SkillGem from "./SkillGem";

const fingers = [
  { x: 161, y: 166, angle: -12, scale: .79 },
  { x: 206, y: 122, angle: -7, scale: .95 },
  { x: 259, y: 98, angle: 1, scale: 1.04 },
  { x: 315, y: 116, angle: 12, scale: 1 },
];

const gems = [
  [178, 267], [223, 252], [272, 244], [323, 255], [235, 317], [302, 327],
];

function Rivet({ x, y, radius = 4.2 }: { x: number; y: number; radius?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${radius / 4.2})`}>
      <circle cx=".45" cy=".7" r="4.75" fill="#1c110b" opacity=".8" />
      <circle r="4.2" fill="url(#rivet-metal)" stroke="#b78950" strokeWidth=".55" />
      <path d="M-1.8 .65 1.55-1.12" stroke="#22140f" strokeLinecap="round" strokeWidth="1.13" />
      <path d="M-1.6 1.25 1.7-.55" stroke="#ead299" strokeOpacity=".62" strokeWidth=".52" />
    </g>
  );
}

function Finger({ x, y, angle, scale }: (typeof fingers)[number]) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${angle}) scale(${scale})`}>
      <path d="M-23 151-26 92-22 65-24 27Q-23 2-6-7L12-5Q26 4 25 23L20 63 24 92 22 149 10 169-10 169Z" fill="url(#finger-shadow)" stroke="#100c0d" strokeWidth="3.2" />
      <path d="M-24 42-23 20Q-22 4-9-3L8-3Q20 3 23 20L21 40 12 48-13 48Z" fill="url(#metal-face)" stroke="#302016" strokeWidth="2" />
      <path d="M-17 34-16 19Q-14 8-7 5Q4 3 9 7L15 13 15 33 8 41-8 41Z" fill="url(#finger-cap)" stroke="#f7d59b" strokeOpacity=".6" />
      <path d="M-17 31-16 20Q-14 9-7 5Q2 3 8 6M14 33 8 40-7 41" fill="none" stroke="#ffefc6" strokeOpacity=".76" strokeWidth=".9" />
      <path d="M-14 21Q-12 10 0 9L8 11 11 15Q-2 13-14 24Z" fill="url(#specular)" />
      <path d="M-11 34Q-1 39 10 33L8 39-7 40Z" fill="#261910" opacity=".53" />
      <path d="M-22 52-15 47 15 47 23 54 20 76 13 83-15 83-22 74Z" fill="url(#metal-edge)" stroke="#342312" strokeWidth="2" />
      <path d="M-16 58Q0 52 16 56L14 68 8 74-10 74-17 68Z" fill="url(#hinge-metal)" stroke="#211812" />
      <path d="M-15 59Q0 55 15 58M-16 67Q0 70 14 65" fill="none" stroke="#f0cd8d" strokeOpacity=".6" strokeWidth=".75" />
      <Rivet x={-15} y={62} radius={2.85} />
      <Rivet x={14} y={61} radius={2.7} />
      <path d="M-20 83-13 78 13 78 21 85 23 112 16 122-16 122-23 112Z" fill="url(#metal-face)" stroke="#302016" strokeWidth="2" />
      <path d="M-14 86 11 85 15 90 16 106 10 114-11 114-16 108Z" fill="url(#finger-cap)" stroke="#fff1bd" strokeOpacity=".5" />
      <path d="M-12 88 8 87 14 91 14 96Q4 89-14 98Z" fill="url(#specular)" opacity=".85" />
      <path d="M-10 98 8 98M-10 102 10 102M-10 105 9 105M-17 48 12 46M-18 119 13 119" fill="none" stroke="#21170f" strokeOpacity=".65" strokeWidth=".8" />
      <path d="M-12 110 8 110 12 106" fill="none" stroke="#fce4a9" strokeOpacity=".55" strokeWidth=".7" />
      <path d="M-18 124-14 119 15 119 21 126 20 151 11 161-11 163-22 152Z" fill="url(#metal-edge)" stroke="#2f2115" strokeWidth="2" />
      <circle cy="140" r="8.1" fill="url(#finger-shadow)" stroke="#e7bc72" strokeWidth="1.05" />
      <circle cy="140" r="6.1" fill="none" stroke="#b9945c" strokeOpacity=".5" strokeWidth=".55" />
      <Rivet x={0} y={140} />
      <path d="M-21 22-21 32M-20 58-20 68M-21 91-21 103M-20 128-20 145" stroke="#f4d297" strokeOpacity=".8" strokeWidth="1.6" />
      <path d="M15 39 20 34M14 74 18 71M16 106 18 102M15 150 17 145" stroke="#fee5a5" strokeOpacity=".33" strokeWidth=".8" />
    </g>
  );
}

export default function Gauntlet({ onSnap, disabled }: { onSnap: () => void; disabled: boolean }) {
  const [activeGem, setActiveGem] = useState("");
  return (
    <div className="artifact">
      <div className="artifact-halo" aria-hidden="true">
        <div className="halo-ticks" />
        <div className="halo-inner" />
        <i /><i /><i /><i />
      </div>
      <button type="button" className="artifact-trigger" aria-label="Snap the mechanical gauntlet" onClick={onSnap} disabled={disabled} />
      <svg className="gauntlet" viewBox="0 26 520 506" xmlns="http://www.w3.org/2000/svg" aria-label="Original gold mechanical gauntlet with six skill gems">
        <defs>
          <linearGradient id="metal-face" x1="0" y1="0" x2="1" y2=".9" gradientUnits="objectBoundingBox">
            <stop stopColor="#3e2212" /><stop offset=".15" stopColor="#a26831" /><stop offset=".27" stopColor="#f4d38b" />
            <stop offset=".38" stopColor="#775028" /><stop offset=".53" stopColor="#b57a37" /><stop offset=".7" stopColor="#d5a858" />
            <stop offset=".8" stopColor="#835124" /><stop offset="1" stopColor="#362116" />
          </linearGradient>
          <linearGradient id="metal-edge" x1="0" y1="0" x2=".93" y2="1">
            <stop stopColor="#fff0b1" /><stop offset=".17" stopColor="#e6b86b" /><stop offset=".42" stopColor="#7b4d20" />
            <stop offset=".64" stopColor="#372014" /><stop offset=".78" stopColor="#bc8741" /><stop offset="1" stopColor="#6b3d1b" />
          </linearGradient>
          <linearGradient id="metal-dark" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#151016" /><stop offset=".33" stopColor="#5f3a20" /><stop offset=".46" stopColor="#a06a34" />
            <stop offset=".58" stopColor="#5c3b24" /><stop offset="1" stopColor="#1a1313" />
          </linearGradient>
          <linearGradient id="plate-beam" x1="0" y1="0" x2=".6" y2="1">
            <stop stopColor="#f7dea1" /><stop offset=".33" stopColor="#957345" /><stop offset=".49" stopColor="#a07338" />
            <stop offset=".65" stopColor="#5d3b22" /><stop offset="1" stopColor="#2e1d18" />
          </linearGradient>
          <radialGradient id="palm-metal" cx=".26" cy=".14" r="1.06">
            <stop stopColor="#fff1c2" /><stop offset=".24" stopColor="#d4a361" /><stop offset=".53" stopColor="#89572e" />
            <stop offset=".72" stopColor="#665034" /><stop offset=".88" stopColor="#9a6f40" /><stop offset="1" stopColor="#392419" />
          </radialGradient>
          <linearGradient id="finger-shadow" x1="0" y1="0" x2="1" y2=".33">
            <stop stopColor="#1b1412" /><stop offset=".34" stopColor="#09080a" /><stop offset=".73" stopColor="#241a16" /><stop offset="1" stopColor="#754d2c" />
          </linearGradient>
          <linearGradient id="finger-cap" x1="0" y1=".1" x2=".73" y2="1">
            <stop stopColor="#392516" /><stop offset=".22" stopColor="#ad7e46" /><stop offset=".39" stopColor="#c69d64" />
            <stop offset=".57" stopColor="#785434" /><stop offset=".81" stopColor="#3e2e25" /><stop offset="1" stopColor="#896346" />
          </linearGradient>
          <linearGradient id="hinge-metal" x1="0" y1="0" x2="0" y2="1">
            <stop stopColor="#211811" /><stop offset=".25" stopColor="#6b4b29" /><stop offset=".46" stopColor="#e5c58a" />
            <stop offset=".63" stopColor="#a47c46" /><stop offset=".85" stopColor="#49331e" /><stop offset="1" stopColor="#211710" />
          </linearGradient>
          <linearGradient id="specular" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#fff9dd" stopOpacity=".94" /><stop offset=".42" stopColor="#fff1c0" stopOpacity=".53" />
            <stop offset="1" stopColor="#eac478" stopOpacity="0" />
          </linearGradient>
          <radialGradient id="rivet-metal" cx=".32" cy=".19" r=".91">
            <stop stopColor="#f1d199" /><stop offset=".36" stopColor="#af824a" /><stop offset=".74" stopColor="#5e432d" /><stop offset="1" stopColor="#32241a" />
          </radialGradient>
          <filter id="artifact-depth" x="-35%" y="-30%" width="170%" height="190%">
            <feDropShadow dx="11" dy="17" stdDeviation="15" floodColor="#010105" floodOpacity=".87" />
            <feDropShadow dx="2.6" dy="4" stdDeviation="3" floodColor="#090502" floodOpacity=".47" />
          </filter>
          <filter id="metal-grain" x="0" y="0" width="100%" height="100%" colorInterpolationFilters="sRGB">
            <feTurbulence type="fractalNoise" baseFrequency=".13 .71" numOctaves="3" seed="8" />
            <feColorMatrix type="matrix" values="0 0 0 0 .9  0 0 0 0 .76  0 0 0 0 .51  .31 .25 .22 0 -.22" />
            <feComposite in2="SourceAlpha" operator="in" />
          </filter>
          <filter id="gem-spill" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="6" />
          </filter>
          <pattern id="brushed-metal" width="7" height="5" patternUnits="userSpaceOnUse">
            <path d="M0 1.5h7M2 3.5h5" stroke="#fbe3a3" strokeOpacity=".19" strokeWidth=".32" />
          </pattern>
        </defs>

        <g filter="url(#artifact-depth)" transform="rotate(-13 260 283)">
          <g className="gauntlet-fingers">
            {fingers.map((finger) => <Finger key={finger.x} {...finger} />)}
          </g>

          <g className="gauntlet-thumb">
            <path d="M343 343 354 280 368 225 385 191Q404 167 419 181L432 192Q442 203 433 219L407 249 399 289 392 328 373 359Z" fill="url(#metal-dark)" stroke="#120e0f" strokeWidth="6" />
            <path d="M375 224 387 192Q398 177 413 179L425 190 427 202 408 224 391 237Z" fill="url(#metal-edge)" stroke="#50331c" strokeWidth="2.5" />
            <path d="M383 222 394 198 406 191 416 198 404 217 393 229Z" fill="url(#metal-face)" stroke="#f3cd8a" strokeWidth="1.1" />
            <path d="M369 232 386 231 402 243 400 266 386 280 367 270 360 255Z" fill="url(#metal-face)" stroke="#3f2819" strokeWidth="2" />
            <path d="M369 247 385 240 394 253 382 271 368 262Z" fill="url(#metal-dark)" stroke="#d8a661" />
            <path d="M354 275 368 269 392 282 393 306 382 333 366 346 349 333 345 308Z" fill="url(#metal-edge)" stroke="#3a2519" strokeWidth="2.6" />
            <path d="M354 307 362 282 382 289 381 312 367 330 355 325Z" fill="url(#metal-face)" stroke="#d3a05d" />
            <circle cx="363" cy="301" r="7" fill="#211510" stroke="#e4b772" />
          </g>

          <path d="M159 236 202 223 241 217 279 213 323 217 352 235 367 268 374 318 353 379 316 433 309 489 290 515 228 510 197 482 196 425 174 375 143 336 133 284 139 251Z" fill="#170f11" stroke="#0c0b0b" strokeWidth="8" />
          <path d="M210 383 316 383 330 427 312 493 287 512 234 509 202 482 194 428Z" fill="url(#metal-edge)" stroke="#58371e" strokeWidth="3" />
          <path d="M200 433 227 403 296 405 319 435 303 480 280 500 236 493 212 473Z" fill="url(#metal-face)" stroke="#b4834b" strokeWidth="1.2" />
          <path d="M222 431 240 419 283 423 301 441 288 476 268 487 237 474Z" fill="url(#metal-dark)" stroke="#e8b970" strokeWidth="1.4" />
          <path d="M239 438 250 429 275 433 287 447 276 468 251 473 235 455Z" fill="url(#plate-beam)" stroke="#442e21" strokeWidth="1.4" />
          <path d="M243 448 253 440 274 442 278 449 267 459 250 460Z" fill="#120e10" stroke="#bd9859" />
          <path d="M253 452h16" stroke="#f8d68d" strokeWidth="1.15" />
          <path d="M216 442l6 19m-3-26 6 19m73-14-6 18m10-21-6 18" stroke="#241914" strokeWidth="2" strokeLinecap="round" />
          <path d="M218 442l5.3 18m-2.2-25 5.3 17m72.9-11-5.2 16m9.7-21-5.5 17" stroke="#edbd71" strokeWidth=".75" strokeOpacity=".75" />
          <path d="M223 419Q255 401 299 419L293 427Q253 414 225 432Z" fill="url(#specular)" opacity=".41" />
          <path d="M209 463 210 478 235 502 282 506 305 488M208 430l20-18m73 3 14 16" fill="none" stroke="#f6d498" strokeOpacity=".64" strokeWidth="2" />
          <path d="M205 481 217 487 234 498 280 501M313 456l-7 22" fill="none" stroke="#161114" strokeWidth="3" />

          <path d="M142 251 155 237 185 230 212 223 251 217 289 216 326 225 353 245 365 282 365 318 347 372 314 412 282 430 230 427 198 400 182 371 154 340 140 302 135 277Z" fill="url(#palm-metal)" stroke="#5f381e" strokeWidth="3.6" />
          <path d="M142 255 155 243 183 235 216 228 250 222 286 221 324 231 347 247 353 266 329 252 308 249 286 241 258 239 228 246 204 248 181 257 161 280 145 279Z" fill="url(#metal-edge)" stroke="#dfb375" strokeWidth="1.05" />
          <path d="M147 288 164 275 182 271 180 292 172 306 184 331 200 351 207 378 190 382 171 355 155 333Z" fill="url(#metal-dark)" stroke="#c89757" strokeWidth="1.6" />
          <path d="M344 263 357 280 358 320 341 366 319 390 303 397 309 369 328 345 337 314 331 295Z" fill="url(#metal-dark)" stroke="#be8c4c" strokeWidth="1.9" />
          <path d="M197 281 218 268 255 260 288 257 316 271 333 297 331 333 306 369 301 395 281 419 234 414 213 390 201 354 182 329 184 300Z" fill="url(#metal-face)" stroke="#4c301d" strokeWidth="2.7" />
          <path d="M202 293 223 280 260 274 285 275 311 291 319 316 309 340 287 350 276 375 248 382 226 368 220 345 200 331 192 312Z" fill="url(#metal-dark)" stroke="#e8bb74" strokeWidth="1.15" />
          <path d="M205 298 227 284 261 280 286 280 305 292 311 302 286 297 261 299 227 302 210 314 198 313Z" fill="url(#plate-beam)" stroke="#31231a" strokeWidth="1.3" />
          <path d="M205 339 222 353 235 381 251 390 278 386 300 370 295 396 279 414 236 408 217 389Z" fill="url(#plate-beam)" stroke="#452b1a" strokeWidth="1.7" />
          <path d="M237 386 251 394 275 392 287 387 280 404 238 402 229 391Z" fill="url(#metal-dark)" stroke="#cc9a54" strokeWidth="1.3" />
          <path d="M204 277 219 266 256 259 285 256 316 272M190 334l21 26m101 7 20-29M213 397l19 21 47 5 25-15" fill="none" stroke="#ffe2a8" strokeWidth="1.3" strokeOpacity=".67" />
          <path d="M150 287 162 281 171 283 167 300 157 309ZM345 273 352 285 353 312 345 315 340 292Z" fill="#f4cc86" opacity=".59" />
          <path d="M156 319 167 316 183 340 179 348 174 345ZM330 341l10-13-7 23-13 15Z" fill="#efbf75" opacity=".5" />
          <path d="M145 252 197 234 255 221 321 228 348 243 358 275 352 328 332 369 300 404 269 416 235 409 210 388 198 352 166 325 147 290Z" fill="url(#brushed-metal)" opacity=".55" />
          <path d="M144 257 155 244 185 235 216 229 250 223 286 222 323 232 347 248 350 260Q322 244 289 237 254 232 221 244 190 246 160 264L150 274Z" fill="url(#specular)" opacity=".55" />
          <path d="M146 249 185 233 251 220 288 219 326 229 353 249 364 283 362 320 344 367 309 409 278 425 233 424 202 399 182 368 155 338 140 292Z" fill="#fff3cd" filter="url(#metal-grain)" opacity=".31" />
          <path d="M152 251 181 241m16-7 23-4m31-7 31-.5m45 8.5 12 7M181 348l13 21m121 23 15-20" fill="none" stroke="#fff5d1" strokeOpacity=".59" strokeLinecap="round" strokeWidth=".75" />
          <path d="M174 315l-5 7 10 14m163-10-7 19-14 14M220 383l-6-11m77 20 7-11M203 276l13-7m79 2 12 6" fill="none" stroke="#24180f" strokeOpacity=".72" strokeLinecap="round" strokeWidth=".9" />

          {[[153,267], [347,259], [187,360], [329,370], [215,421], [305,427], [227,481], [281,485]].map(([x, y]) => (
            <Rivet key={x + ":" + y} x={x} y={y} />
          ))}
          {skillGroups.map(({ title, color, id }, index) => (
            <SkillGem
              key={id}
              x={gems[index][0]}
              y={gems[index][1]}
              color={color}
              label={title}
              index={index}
              disabled={disabled}
              onLabel={setActiveGem}
              onSnap={onSnap}
            />
          ))}
        </g>
      </svg>
      {activeGem && !disabled && <div className="gem-tooltip" role="tooltip">{activeGem}</div>}
    </div>
  );
}
