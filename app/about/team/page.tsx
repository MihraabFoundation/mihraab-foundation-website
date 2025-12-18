import SubpageHero from "@/components/subpage-hero"
import Footer from "@/components/footer"
import ScholarsCarousel from "@/components/scholars-carousel"
import { TeamMember } from "@/models/TeamMember"
import TrusteeCard from "@/components/trustee-card"

export const metadata = {
  title: "Our Team | Mihraab Foundation",
  description: "Meet the dedicated team behind Mihraab Foundation - our resident scholars and board of trustees",
}

const residentScholars: TeamMember[] = [
  {
    name: "Shaykh Umair Ahmad",
    title: "Executive Director & Resident Scholar",
    image: "/staff/umair_ahmad_transparent.png",
    bio: "Shaykh Syed Umair Ahmad was born in Denver, CO and soon after moved to Seattle, WA where he completed high school and went on to earn a Bachelors Degree in Business Administration from Central Washington University. As a student, he served as President of the Muslim Student Association at North Seattle College where the club was awarded the Most Active student organization on campus. Shaykh Umair later served two years as President of MSA Northwest and became a key contributor to Islamic Quiz of Seattle. He went on to become an active member in the Greater Seattle community, establishing youth programs in addition to teaching in his local masjid. While working as a Senior Sales Rep with Verizon Wireless he began his pursuit of sacred knowledge with Mufti Abdul Mujeeb Al-Nadwi and other local scholars. \n\nBy the grace of Allah, in 2009 he embarked on his journey to South Africa where he attended Madrasah In’aamiyyah to study the Higher Islamic Sciences, which included Arabic Morphology, Arabic Grammar, Science of Recitation (Tajwīd), Jurisprudence (Fiqh), Principles of Jurisprudence (Usul al-Fiqh), Qur’ānic Exegesis (Tafsir), Principles of Qur’ānic Exegesis (Usul al-Tafsir), Prophetic Traditions (Hadith), and Principles of Prophetic Traditions (Usul al-Hadith). \n\nIn 2015, Shaykh Umair’s studies culminated in him receiving an ijāzah al-tadris, which literally means “a license to teach,” as well as an unbroken chain of transmission by which to narrate the Prophetic Traditions (Ahadith) of such books as the Muwatta of Imam Malik and Imam Muhammad, six of the authenticated books of Prophetic Traditions (the Sihah al-Sittah: Bukhari, Muslim, Abu Dawud, Tirmidhi, Nasa’i, and Ibn Majah), and the Sharh Ma’ani al-Athār of Imam al-Tahawi. He also holds an unbroken chain of recitation of the entire Qur’an in the rendition of Imam Hafs. \n\nHe began serving the Greater-Seattle community in 2015 through Mihraab Foundation as a Resident Scholar and Youth Director. From 2017 - 2021 he was the Director of Islamic Studies and teacher at Cordoba Academy, an Islāmic School in the North-Seattle area, now serving as an advisor to the Islāmic School. Currently Shaykh Umair is a teacher at Darul Uloom Seattle alongside serving as Resident Scholar and Executive Director of Mihraab Foundation.",
  },
  {
    name: "Shaykh Qasim Hatem",
    title: "Resident Scholar",
    image: "/staff/qasim_hatem_transparent.png",
    bio: "Shaykh Qasim Hatem was born in Cedar Rapids, Iowa, where his forefathers built one of the very first mosques in North America. His family moved to Washington State in 1993, where he would later earn a full-ride scholarship to play football for the University of Washington. Originally recruited as a linebacker, he would go on to earn a starting position in 2001 at nose tackle on the top-ranked and Rose Bowl-winning Huskies. Appearing in Sports Illustrated and being scouted by NFL teams, Shaykh Qasim seemed destined to fulfill the “All-American Dream.” Shortly after that spectacular finish in the Rose Bowl however, Shaykh Qasim incurred a life-threatening injury. Although he would not be able to play football that fall, he had the opportunity to return and play in the next two seasons to complete his collegiate football career. He chose a different path entirely: his faith. \n\nA year after graduating with his bachelor's degree in psychology in 2003, Shaykh Qasim traveled to Yemen to study in the blessed city of Tarim. He first enrolled in the Badr Language Institute and then moved on to the prestigious seminary, Dar al-Mustafa, to study the traditional Islamic disciplines under some of the most illustrious scholars of our time. Shaykh Qasim completed his rigorous studies in 2011, with primary ijazaat (licenses to teach) in: Shafi’i fiqh (jurisprudence), ’aqeedah (Islamic creed), nahu (Arabic grammar), tajweed (Quranic recitation in hafs), and da’wa (methodology of inviting to Islam). He also has a Master of Arts in Transformational Leadership from the School of Theology and Ministry at Seattle University.\n\nCurrently Shaykh Qasim is a Resident Scholar of the Mihraab Foundation based in Seattle, Washington. He is also the Muslim Chaplain for Harborview and University of Washington Medical Centers.",
  },
  {
    name: "Qāri Osman Shareef",
    title: "Hifdh Academy Director & Resident Scholar",
    image: "/staff/osman_transparent.png",
    bio: "Raised in Chicago, IL, Qāri Mohammed Osman Shareef completed his memorization of the Holy Qur’ān at the Institute of Islamic Education in Elgin, IL at the age of 15. In 2009 he traveled to South Africa where he enrolled in the ‘Ālimiyyah program, studying the various Higher Islamic Sciences including but not limited to Arabic Grammar and Morphology, Fiqh, Hadīth, Tafsīr, Usūl al Fiqh, Mustalah al Hadīth, etc. His studies culminated with the renowned Dawratul Hadīth, which consists of the study of Sahīh al Bukhari, Sahīh Muslim, Sunan at Tirmidhī, Sunah Abi Dawūd, Sunan an Nasa’ī, Sunan Ibn Mājah, diploma in Islāmic Theology at Madrasa In’aamiyyah in Camperdown, South Africa.\n\nFrom a young age Qāri Osman was always fascinated in the recitation of Qur’ān; his passion lead him to pursue an ‘ijāzah (formal authorization) in the rendition of Imām Hafs (Riwāyah Hafs ‘an Shu’ba) followed by an ‘ijāzah in Saba’ ‘Asharah Qirā’ah (10 different methods of reciting the Holy Qur’ān) in South Africa at Madrasa In’aamiyyah. He graduated with an ‘ijāzah al tadrīs (licensure to teach) and asānīd (unbroken chains of transmission) in Qirā’ah, Hadīth, Fiqh, and various other Sacred Sciences of Islām in 2014 at the age of 25. He has taught hifdh in Dallas, TX at multiple institutions. From 2016 - 2021 he was teaching and producing huffādh (students who memorized the entire Holy Qur'ān) and the Director of the Qur'ān Academy at Islamic Foundation North in Libertyville, IL.\n\nHe is currently a Resident Scholar of Mihraab Foundation as well as the Director and Teacher of the Mihraab Hifdh Academy.",
  },
  {
    name: "Mawlāna Ahmad Ali",
    title: "Youth Director & Resident Scholar",
    image: "/staff/ahmad_transparent.png",
    bio: "Mawlāna Ahmad Ali was born and raised in the Pacific Northwest, surrounded by the lush forests of Seattle. His pursuit of sacred knowledge began shortly after middle school, when he traveled to Cornwall, Canada, to complete the memorization of the Holy Qur’ān at Al-Rashid Islamic Institute under the guidance of Mawlāna Mazhar Alam (may Allah preserve him). The institute and its distinguished teachers left an enduring mark on his intellectual and spiritual formation.\n\nFollowing this, he embarked on his formal ‘ālimiyyah studies at the Institute of Islamic Education in Chicago. He later returned to Seattle, continuing his education privately under the tutelage of Shaykh Umair Ahmad and Mufti Abdul Mujeeb Qasimi. After exhausting the opportunities available to him locally, his teachers encouraged him to pursue advanced studies in a full-time institution.\n\nResponding to their counsel, he enrolled in the Intermediate Program at Darul Qasim College, completing it in 2023. Thereafter, upon the directive of the founder, Shaykh Amin Kholwadia, he journeyed to Karachi, Pakistan, to undertake the culminating stage of the dars-e-nizāmī curriculum, the renowned Dawrat al-Hadīth at Jāmiʿah ʿUlūm Islāmiyyah, Banūrī Town, Karachi. There, he received asānīd in the Sihāh Sittah and an ‘ijāzah authorizing him to formally teach the Islamic sciences.\n\nMawlāna Ahmad currently serves as Resident Scholar, Youth Director, and Hifdh Instructor at Mihraab Foundation.",
  },
  {
    name: "Shaykh Umar Holdridge",
    title: "Administrative Assistant & Resident Scholar",
    image: "/staff/umar_holdridge_transparent.png",
    bio: "Converting to Islām in 2013 whilst a student at Western Washington University, he earned a BA in Economics & Environmental Studies and graduated Magna Cum Laude in 2017. He moved to the Seattle area where he worked as a Data Analyst and immediately took tutelage under local scholars becoming a diligent student at Mihraab Foundation.\n\nAfter exhausting his efforts locally, he moved to Turkey and completed the five year seminary at İsmailağa Camii İlim ve Hizmet Vakfı earning asānīd and ijāzāt (licensure to teach).\n\nCurrently Shaykh Umar is a Resident Scholar of Mihraab Foundation and Administrative Assistant.",
  },
  { 
    name: "Ustādhah Umm Muhammad (Aminah Coleman)",
    title: "Resident Scholar",
    image: "/placeholder-user.jpg",
    bio: "Umm Muhammad was born in Berkeley, California, and lived in the Middle East for 15 years. During that time, she studied traditional Islamic disciplines under some of the most distinguished scholars of our time in various traditional Islamic institutes - namely, the prestigious seminary Dar al-Zahra. She has ijazah (license to teach) in tajweed (Qur'anic recitation), and studied Shafi’i fiqh (jurisprudence), hadith (Prophetic sayings), seerah (life of the Prophet pbuh), and `aqeedah (Islamic creed).\n\nUmm Muhammad returned to the United States in 2011. She became active in the Greater Seattle Muslim community and has weekly Islamic classes for women at various mosques in the area. She also obtained a Bachelors of Science in Nursing from the University of Washington. Currently, she resides with her husband Shaykh Qasim Hatem in Seattle, Washington.",
  },
]

const boardOfTrustees: TeamMember[] = [
  {
    name: "Shaykh Umair Ahmad",
    title: "Executive Director",
    image: "/staff/umair_ahmad_transparent.png"
  },
  {
    name: "Shaykh Qasim Hatem",
    title: "Religious Chair",
    image: "/staff/qasim_hatem_transparent.png"
  },
  {
    name: "Qari Osman Shareef",
    title: "Religious Chair",
    image: "/staff/osman_transparent.png"
  },
  {
    name: "Fouzi Husaini",
    title: "President",
    image: "/placeholder-user.jpg"
  },
  {
    name: "Mohammad Sarhan",
    title: "Secretary",
    image: "/placeholder-user.jpg"
  },
  {
    name: "Hassan Hatem",
    title: "Treasurer",
    image: "/placeholder-user.jpg"
  },
]

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-background">
      <SubpageHero title="Our Team" />

      {/* Resident Scholars Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-3">
              Resident Scholars
            </h2>
            <p className="text-muted-foreground">
              Learn from traditionally trained scholars
            </p>
          </div>
          
          <ScholarsCarousel scholars={residentScholars} />
        </div>
      </section>

      {/* Board of Trustees Section */}
      <section className="py-16 px-4 md:px-8 bg-secondary/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
              Board of Trustees
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our board provides strategic guidance and governance to ensure Mihraab Foundation 
              fulfills its mission effectively.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {boardOfTrustees.map((trustee, index) => (
              <TrusteeCard key={index} member={trustee} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
