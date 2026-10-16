import jsPDF from 'jspdf';
import { PERSONAL_INFO, EXPERIENCES, EDUCATION, CERTIFICATIONS, SKILLS_DATA } from '../data/portfolioData';

export function downloadResumePDF() {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 16;
  const contentWidth = pageWidth - margin * 2;

  // Colors
  const darkNavy = '#1A233A';
  const crimsonRed = '#C53030';
  const stoneGrey = '#4A5568';
  const lightGrey = '#718096';
  const cardBg = '#F7FAFC';

  // --- PAGE 1 ---
  // Top Header Banner
  doc.setFillColor(26, 35, 58); // darkNavy
  doc.rect(0, 0, pageWidth, 34, 'F');

  // Accent Line
  doc.setFillColor(197, 48, 48); // crimsonRed
  doc.rect(0, 34, pageWidth, 2, 'F');

  // Name
  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(22);
  doc.text(PERSONAL_INFO.name, margin, 18);

  // Subtitle
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10.5);
  doc.setTextColor(220, 226, 235);
  doc.text('English Teacher  |  Consultant  |  Administration & Customer Service  |  Web Developer', margin, 27);

  // Two columns on page 1
  const leftColWidth = 55;
  const leftColX = margin;
  const rightColX = margin + leftColWidth + 6;
  const rightColWidth = pageWidth - margin - rightColX;

  let leftY = 46;
  let rightY = 46;

  // --- LEFT COLUMN (Contact, Skills, Languages) ---
  // Contact Section
  doc.setTextColor(26, 35, 58);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12);
  doc.text('Contact', leftColX, leftY);
  leftY += 6;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(74, 85, 104);
  doc.text(`Email: ${PERSONAL_INFO.email}`, leftColX, leftY);
  leftY += 4.5;
  doc.text(`Location: ${PERSONAL_INFO.location}`, leftColX, leftY);
  leftY += 8;

  // Technical Skills
  doc.setTextColor(26, 35, 58);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.text('Technical Skills', leftColX, leftY);
  leftY += 6;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(74, 85, 104);
  const techBullets = [
    '• Python & Django framework',
    '• Web & backend development',
    '• Automation code for invoicing',
    '• Payment archiving systems',
    '• Computer software (Word, Excel,',
    '  PowerPoint)'
  ];
  techBullets.forEach(b => {
    doc.text(b, leftColX, leftY);
    leftY += 4.2;
  });
  leftY += 5;

  // Professional Skills
  doc.setTextColor(26, 35, 58);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.text('Professional Skills', leftColX, leftY);
  leftY += 6;

  const profBullets = [
    '• Organizing files, contracts, data',
    '• Building organizational work systems',
    '• Client relations & etiquette',
    '• Speaking club & event planning',
    '• Invoicing & financial tracking',
    '• Office equipment & operations'
  ];
  profBullets.forEach(b => {
    doc.text(b, leftColX, leftY);
    leftY += 4.2;
  });
  leftY += 5;

  // Languages
  doc.setTextColor(26, 35, 58);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.text('Languages', leftColX, leftY);
  leftY += 6;

  doc.text('• Arabic (native)', leftColX, leftY);
  leftY += 4.5;
  doc.text('• English (fluent)', leftColX, leftY);

  // --- RIGHT COLUMN (Professional Summary, Stats, Experience) ---
  // Summary
  doc.setTextColor(26, 35, 58);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12);
  doc.text('Professional Summary', rightColX, rightY);
  rightY += 6;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.8);
  doc.setTextColor(74, 85, 104);
  const summaryText =
    'Versatile professional with experience in consulting, administration, reception, customer service, and 6 years of English teaching. Skilled at building organized work systems, managing data and contracts, and handling clients with strong communication and persuasion skills. Fluent in English, with technical skills in programming and web development.';
  const splitSummary = doc.splitTextToSize(summaryText, rightColWidth);
  doc.text(splitSummary, rightColX, rightY);
  rightY += splitSummary.length * 4 + 4;

  // Metric Callout Boxes
  const statBoxWidth = (rightColWidth - 9) / 4;
  const statBoxHeight = 19;
  const stats = [
    { num: '6', label: 'years teaching English' },
    { num: '1,000+', label: 'students in placement tests' },
    { num: 'WON', label: 'competition for English website' },
    { num: '100%', label: 'grades in ASU courses' }
  ];

  stats.forEach((st, idx) => {
    const boxX = rightColX + idx * (statBoxWidth + 3);
    doc.setFillColor(247, 250, 252);
    doc.roundedRect(boxX, rightY, statBoxWidth, statBoxHeight, 1.5, 1.5, 'F');
    doc.setDrawColor(226, 232, 240);
    doc.roundedRect(boxX, rightY, statBoxWidth, statBoxHeight, 1.5, 1.5, 'S');

    doc.setTextColor(197, 48, 48); // red accent for stat
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.text(st.num, boxX + statBoxWidth / 2, rightY + 6, { align: 'center' });

    doc.setTextColor(113, 128, 150);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(6.8);
    const splitLabel = doc.splitTextToSize(st.label, statBoxWidth - 3);
    doc.text(splitLabel, boxX + statBoxWidth / 2, rightY + 11, { align: 'center' });
  });

  rightY += statBoxHeight + 7;

  // Experience Header
  doc.setTextColor(26, 35, 58);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12);
  doc.text('Experience', rightColX, rightY);
  rightY += 6;

  // English Teacher
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(26, 35, 58);
  doc.text('English Teacher  |  6 years', rightColX, rightY);
  rightY += 4.5;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.2);
  doc.setTextColor(74, 85, 104);
  const teacherBullets = [
    '• Taught English for 6 years to students of different ages and levels',
    '• Conducted oral placement tests for 1,000+ students at Belgray University',
    '• Conducted oral placement tests for students at an English language center',
    '• Conducted needs analyses and built tailored learning plans for English students',
    '• Conducted market research on learners\' needs for language learning',
    '• Created online courses and ran online conversation sessions'
  ];
  teacherBullets.forEach(b => {
    const lines = doc.splitTextToSize(b, rightColWidth);
    doc.text(lines, rightColX, rightY);
    rightY += lines.length * 3.8;
  });
  rightY += 3;

  // Online Tutor
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(26, 35, 58);
  doc.text('Online English Tutor  |  Preply', rightColX, rightY);
  rightY += 4.5;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.2);
  doc.setTextColor(74, 85, 104);
  const tutorBullets = [
    '• Teach English online one-to-one, preparing lessons and materials for each student'
  ];
  tutorBullets.forEach(b => {
    const lines = doc.splitTextToSize(b, rightColWidth);
    doc.text(lines, rightColX, rightY);
    rightY += lines.length * 3.8;
  });
  rightY += 3;

  // Intern
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(26, 35, 58);
  doc.text('Intern  |  House of Study', rightColX, rightY);
  rightY += 4.5;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.2);
  doc.setTextColor(74, 85, 104);
  const internBullets = [
    '• Internship in English teaching, supporting lesson preparation and classroom activities'
  ];
  internBullets.forEach(b => {
    const lines = doc.splitTextToSize(b, rightColWidth);
    doc.text(lines, rightColX, rightY);
    rightY += lines.length * 3.8;
  });
  rightY += 3;

  // Consultant
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(26, 35, 58);
  doc.text('Consultant', rightColX, rightY);
  rightY += 4.5;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.2);
  doc.setTextColor(74, 85, 104);
  const consultBullets = [
    '• Advise clients on learning English',
    '• Built organizational systems for files, data, and workflows'
  ];
  consultBullets.forEach(b => {
    const lines = doc.splitTextToSize(b, rightColWidth);
    doc.text(lines, rightColX, rightY);
    rightY += lines.length * 3.8;
  });

  // Footer page 1
  doc.setFontSize(7.5);
  doc.setTextColor(160, 174, 192);
  doc.text('Page 1 of 2  •  Curriculum Vitae of Zainab Mohammed Aloraibi', pageWidth / 2, pageHeight - 7, { align: 'center' });

  // --- PAGE 2 ---
  doc.addPage();

  // Top Bar page 2
  doc.setFillColor(26, 35, 58);
  doc.rect(0, 0, pageWidth, 24, 'F');
  doc.setFillColor(197, 48, 48);
  doc.rect(0, 24, pageWidth, 2, 'F');

  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(16);
  doc.text(PERSONAL_INFO.name, margin, 14);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9.5);
  doc.setTextColor(220, 226, 235);
  doc.text('Curriculum Vitae  |  Page 2', margin, 20);

  leftY = 34;
  rightY = 34;

  // LEFT COLUMN PAGE 2 (Game Scan Info, Education, Certifications)
  // Game Feature Box
  doc.setFillColor(247, 250, 252);
  doc.roundedRect(leftColX, leftY, leftColWidth, 24, 2, 2, 'F');
  doc.setDrawColor(226, 232, 240);
  doc.roundedRect(leftColX, leftY, leftColWidth, 24, 2, 2, 'S');

  doc.setTextColor(26, 35, 58);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.text('Interactive Speaking Game', leftColX + 3, leftY + 6);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.8);
  doc.setTextColor(74, 85, 104);
  const gameDesc = doc.splitTextToSize('Family Feud-style speaking game programmed for the speaking social club: speak-up-feud', leftColWidth - 6);
  doc.text(gameDesc, leftColX + 3, leftY + 11);
  leftY += 28;

  // Education
  doc.setTextColor(26, 35, 58);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.text('Education', leftColX, leftY);
  leftY += 5.5;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(74, 85, 104);
  const eduText = doc.splitTextToSize("Currently pursuing a master's degree in biomedical science", leftColWidth);
  doc.text(eduText, leftColX, leftY);
  leftY += eduText.length * 4.2 + 6;

  // Certifications & Courses
  doc.setTextColor(26, 35, 58);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.text('Certifications & Courses', leftColX, leftY);
  leftY += 6;

  const certsList = [
    { title: '• TESOL Certification, Part 1', sub: '  in progress' },
    { title: '• Teach English Now!', sub: '  Lesson Design and Assessment\n  Arizona State University (online)\n  Jul 2026, Grade 96%' },
    { title: '• Teach English Now!', sub: '  Theories of Second Language Acquisition\n  Arizona State University (online)\n  Jun 2026, Grade 100%' },
    { title: '• Teach English Now!', sub: '  Foundational Principles\n  Arizona State University (online)\n  Jun 2026, Grade 100%' }
  ];

  certsList.forEach(c => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.2);
    doc.setTextColor(26, 35, 58);
    doc.text(c.title, leftColX, leftY);
    leftY += 3.8;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.6);
    doc.setTextColor(74, 85, 104);
    const subLines = doc.splitTextToSize(c.sub, leftColWidth);
    doc.text(subLines, leftColX, leftY);
    leftY += subLines.length * 3.5 + 3;
  });

  // RIGHT COLUMN PAGE 2 (Administration & Customer Service, Projects & Achievements)
  doc.setTextColor(26, 35, 58);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12);
  doc.text('Administration & Customer Service', rightColX, rightY);
  rightY += 6;

  // Administrator
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(26, 35, 58);
  doc.text('Administrator', rightColX, rightY);
  rightY += 4.5;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.2);
  doc.setTextColor(74, 85, 104);
  const adminBullets = [
    '• Organized files, records, and contracts; prepared invoices',
    '• Built a complete system for archiving payments',
    '• Wrote automation code to generate invoices automatically',
    '• Planned and managed events'
  ];
  adminBullets.forEach(b => {
    const lines = doc.splitTextToSize(b, rightColWidth);
    doc.text(lines, rightColX, rightY);
    rightY += lines.length * 3.8;
  });
  rightY += 3;

  // Receptionist
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(26, 35, 58);
  doc.text('Receptionist', rightColX, rightY);
  rightY += 4.5;

  const recBullets = [
    '• Welcomed visitors and handled calls and inquiries professionally',
    '• Kept schedules, records, and front-desk operations organized'
  ];
  recBullets.forEach(b => {
    const lines = doc.splitTextToSize(b, rightColWidth);
    doc.text(lines, rightColX, rightY);
    rightY += lines.length * 3.8;
  });
  rightY += 3;

  // Customer Service
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(26, 35, 58);
  doc.text('Customer Service', rightColX, rightY);
  rightY += 4.5;

  const csBullets = [
    '• Handled client inquiries with professionalism, courtesy, and persuasion'
  ];
  csBullets.forEach(b => {
    const lines = doc.splitTextToSize(b, rightColWidth);
    doc.text(lines, rightColX, rightY);
    rightY += lines.length * 3.8;
  });
  rightY += 6;

  // Projects & Achievements
  doc.setTextColor(26, 35, 58);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12);
  doc.text('Projects & Achievements', rightColX, rightY);
  rightY += 6;

  // Competition win
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.2);
  doc.setTextColor(197, 48, 48); // red title
  doc.text('Competition Win', rightColX, rightY);
  rightY += 4;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.2);
  doc.setTextColor(74, 85, 104);
  const winLines = doc.splitTextToSize('• Won a competition for developing a project that combines English learning with a website', rightColWidth);
  doc.text(winLines, rightColX, rightY);
  rightY += winLines.length * 3.8 + 3;

  // Coding projects
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.2);
  doc.setTextColor(197, 48, 48);
  doc.text('Coding Projects', rightColX, rightY);
  rightY += 4;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.2);
  doc.setTextColor(74, 85, 104);
  const codeLines = doc.splitTextToSize('• Designed and programmed a complete web-based Family Feud–style game for the social club: speak-up-feud', rightColWidth);
  doc.text(codeLines, rightColX, rightY);
  rightY += codeLines.length * 3.8 + 3;

  // Social club
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.2);
  doc.setTextColor(197, 48, 48);
  doc.text('Social Club Leadership', rightColX, rightY);
  rightY += 4;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.2);
  doc.setTextColor(74, 85, 104);
  const clubLines = doc.splitTextToSize('• Organized and ran a social club focused on speaking practice, activities, and events, preparing all the materials', rightColWidth);
  doc.text(clubLines, rightColX, rightY);
  rightY += clubLines.length * 3.8;

  // Footer page 2
  doc.setFontSize(7.5);
  doc.setTextColor(160, 174, 192);
  doc.text('Page 2 of 2  •  Curriculum Vitae of Zainab Mohammed Aloraibi', pageWidth / 2, pageHeight - 7, { align: 'center' });

  // Save the PDF
  doc.save('Zainab_Mohammed_Aloraibi_CV.pdf');
}
