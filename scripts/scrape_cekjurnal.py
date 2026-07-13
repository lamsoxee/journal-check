#!/usr/bin/env python3
"""Scrape SINTA journals from cekjurnal.id (extracts embedded JSON data)"""
import json, re, time, requests

OUTPUT = "data/journals.json"
URL = "https://cekjurnal.id/jurnal"
HEADERS = {"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36"}

def map_freq(f):
    if not f: return "Tidak Diketahui"
    n = len([p for p in f.replace(";",",").split(",") if p.strip()])
    if n >= 10: return "Bulanan"
    if n >= 4: return "Kuartalan"
    if n >= 3: return "Tri-bulanan"
    if n >= 2: return "Semesteran"
    return "Tidak Diketahui"

def map_apc(a):
    if not a: return None
    if a in ("0", 0): return 0
    try: return int(str(a).replace(".","").replace(",",""))
    except: return None

print("🚀 Fetching journals from cekjurnal.id...")
r = requests.get(URL, headers=HEADERS, timeout=15)
m = re.search(r"window\.JURNAL_SERVER_DATA\s*=\s*(\[.*?\]);", r.text, re.DOTALL)
if not m:
    print("❌ Data not found"); exit(1)

raw = json.loads(m.group(1))
print(f"📦 Found {len(raw)} raw entries")

journals = []
for j in raw:
    if not j.get("sinta"): continue
    scope = [s.strip() for s in (j.get("scope","") or "").split(";") if s.strip()][:5]
    journals.append({
        "id": len(journals)+1,
        "title": j.get("nama",""),
        "sintaLevel": int(j["sinta"]),
        "apc": map_apc(j.get("apc")),
        "loaTime": "1-2 minggu" if j.get("fast_track") else "2-4 minggu",
        "scope": scope,
        "frequency": map_freq(j.get("frekuensi")),
        "publisher": j.get("penerbit",""),
        "journal_url": j.get("link",""),
        "website_url": j.get("link",""),
        "e_issn": j.get("e_issn"),
        "p_issn": j.get("p_issn"),
        "description": f"Jurnal terakreditasi SINTA {j['sinta']}. Diterbitkan oleh {j.get('penerbit','')}.",
        "last_updated": time.strftime("%Y-%m-%d")
    })

with open(OUTPUT, "w", encoding="utf-8") as f:
    json.dump(journals, f, indent=2, ensure_ascii=False)

sinta = {}
for j in journals:
    sinta[j["sintaLevel"]] = sinta.get(j["sintaLevel"],0)+1
free = sum(1 for j in journals if j["apc"]==0)

print(f"\n✅ Done! {len(journals)} journals → {OUTPUT}")
print(f"📊 SINTA: {sinta}")
print(f"🆓 Free: {free}")
