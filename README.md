# Solar50K · Prototypes (Next.js)

รวมต้นแบบ HTML ของโครงการโซลาร์ภาคประชาชน ห่อด้วย Next.js

## วิธีรัน

```bash
npm install
npm run dev
```

แล้วเปิด http://localhost:3000

## หน้าในโปรเจกต์

| URL | ต้นแบบ | ไฟล์ |
|---|---|---|
| `/` | หน้ารวมต้นแบบ | `app/page.js` |
| `/r2` | ต้นแบบหลัก R2 (v137) | `public/prototypes/r2-main.html` |
| `/e-contract` | ต้นแบบ e-Contract (v29) | `public/prototypes/econtract.html` |
| `/vendor` | ต้นแบบเฉพาะ Vendor (export จาก v137) | `public/prototypes/vendor.html` |

## หมายเหตุ

- ต้นแบบแต่ละตัวเป็นไฟล์ HTML เดียว (CSS / JS / รูป อยู่ในไฟล์) วางไว้ใน `public/prototypes/` และเปิดผ่าน URL สั้นที่ตั้งไว้ใน `next.config.mjs`
- ถ้าต้องการอัปเดตต้นแบบ ให้แทนที่ไฟล์ HTML ใน `public/prototypes/` ด้วยชื่อเดิม
- ข้อมูลทั้งหมดในต้นแบบเป็นข้อมูลจำลอง
- ฟอนต์ IBM Plex Sans Thai โหลดจาก Google Fonts ต้องต่ออินเทอร์เน็ตจึงจะแสดงฟอนต์ตามแบบ
