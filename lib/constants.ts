// 에이펙스이엔지 홈페이지 데이터 상수

export const COMPANY_INFO = {
  name: '에이펙스이엔지',
  nameEn: 'APEX E&G',
  slogan: '스마트 빌딩 솔루션의 미래를 선도합니다',
  description:
    '에이펙스이엔지는 건물자동화 및 에너지관리 시스템 전문기업으로, 첨단 기술과 풍부한 경험을 바탕으로 고객에게 최고의 솔루션을 제공합니다.',
  address: '경기도 광명시 일직로 43 GIDC A동 2002호',
  tel: '031-346-8600',
  fax: '031-346-8700',
  email: 'apex-eng@hanmail.net',
  established: '2005',
  copyright: `Copyright © ${new Date().getFullYear()} APEXENG Co., Ltd. All rights reserved.`,
} as const;

export const NAV_ITEMS = [
  { label: '회사소개', href: '#about' },
  { label: '사업분야', href: '#business' },
  { label: '제품소개', href: '#products' },
  { label: '인증현황', href: '#certifications' },
  { label: '연락처', href: '#contact' },
] as const;

export const STATS = [
  { value: '20+', label: '년 업력' },
  { value: '500+', label: '완료 프로젝트' },
  { value: '100+', label: '협력 기업' },
  { value: '99%', label: '고객 만족도' },
] as const;

export const BUSINESS_AREAS = [
  {
    id: 'bas',
    icon: 'Building2',
    title: '건물자동화시스템',
    titleEn: 'BAS',
    description:
      'Building Automation System - 빌딩 내 모든 설비를 통합 제어하여 쾌적하고 효율적인 건물 환경을 구현합니다.',
    gradient: 'from-sky-500/20 to-sky-600/10',
    borderColor: 'border-sky-500/30',
    iconColor: 'text-sky-400',
  },
  {
    id: 'ems',
    icon: 'Zap',
    title: '에너지관리시스템',
    titleEn: 'EMS',
    description:
      'Energy Management System - 실시간 에너지 모니터링 및 분석으로 최적의 에너지 효율을 달성합니다.',
    gradient: 'from-amber-500/20 to-amber-600/10',
    borderColor: 'border-amber-500/30',
    iconColor: 'text-amber-400',
  },
  {
    id: 'lighting',
    icon: 'Lightbulb',
    title: '조명제어시스템',
    titleEn: 'LCS',
    description:
      'Lighting Control System - 지능형 조명 제어로 에너지를 절감하고 최적의 조도 환경을 제공합니다.',
    gradient: 'from-yellow-500/20 to-yellow-600/10',
    borderColor: 'border-yellow-500/30',
    iconColor: 'text-yellow-400',
  },
  {
    id: 'dimming',
    icon: 'SlidersHorizontal',
    title: '디밍제어시스템',
    titleEn: 'DCS',
    description:
      'Dimming Control System - DALI/PWM 프로토콜 기반의 고정밀 디밍 제어로 섬세한 조명 연출이 가능합니다.',
    gradient: 'from-purple-500/20 to-purple-600/10',
    borderColor: 'border-purple-500/30',
    iconColor: 'text-purple-400',
  },
  {
    id: 'monitoring',
    icon: 'Monitor',
    title: '중앙감시시스템',
    titleEn: 'CMS',
    description:
      'Central Monitoring System - 전체 설비를 중앙에서 실시간으로 감시하고 원격 제어합니다.',
    gradient: 'from-indigo-500/20 to-indigo-600/10',
    borderColor: 'border-indigo-500/30',
    iconColor: 'text-indigo-400',
  },
  {
    id: 'smart',
    icon: 'Cpu',
    title: '스마트제어시스템',
    titleEn: 'SCS',
    description:
      'Smart Control System - IoT 기반 스마트 빌딩 솔루션으로 미래형 지능 건물을 실현합니다.',
    gradient: 'from-emerald-500/20 to-emerald-600/10',
    borderColor: 'border-emerald-500/30',
    iconColor: 'text-emerald-400',
  },
] as const;

export const PRODUCTS = [
  {
    id: 'central',
    label: '중앙감시장치',
    name: 'APEX CMS-1000',
    description:
      '빌딩 내 모든 설비를 통합적으로 감시하고 제어하는 고성능 중앙감시시스템입니다. 직관적인 UI와 강력한 데이터 분석 기능을 제공합니다.',
    features: [
      '실시간 설비 상태 모니터링',
      '원격 제어 및 자동화',
      '이상 감지 및 알람 시스템',
      '에너지 사용량 분석',
      '보고서 자동 생성',
    ],
    specs: {
      '통신 프로토콜': 'BACnet, Modbus, LonWorks',
      '최대 연결 포인트': '65,536 points',
      '운영체제': 'Windows Server 2019',
      '데이터 저장': '10년 이력 관리',
    },
  },
  {
    id: 'lighting',
    label: '조명제어',
    name: 'APEX LCS-500',
    description:
      'Intelligent 조명 제어 시스템으로 조도, 시간대, 재실 여부에 따라 자동으로 최적의 조명 환경을 구현합니다.',
    features: [
      'DALI/RS-485 통신 지원',
      '재실 감지 자동 제어',
      '조도 센서 연동',
      '시나리오별 조명 프리셋',
      '에너지 절감 30~50%',
    ],
    specs: {
      '통신 방식': 'DALI, RS-485',
      '제어 채널': '최대 256채널',
      '전원': 'AC 220V 50/60Hz',
      '보호 등급': 'IP20',
    },
  },
  {
    id: 'dimming',
    label: '디밍제어',
    name: 'APEX DCS-300',
    description:
      'DALI 프로토콜 기반의 고정밀 디밍 제어기로 LED 조명의 섬세한 밝기 조절과 색온도 제어를 지원합니다.',
    features: [
      'DALI-2 인증 제품',
      '0.1% 정밀 디밍 제어',
      'RGB/RGBW 색상 제어',
      '전압 안정화 기능',
      '소음 없는 무소음 제어',
    ],
    specs: {
      '디밍 범위': '0.1% ~ 100%',
      '통신': 'DALI-2 / PWM',
      '출력 전류': '350mA ~ 700mA',
      '효율': '95% 이상',
    },
  },
  {
    id: 'energy',
    label: '에너지관리',
    name: 'APEX EMS-2000',
    description:
      '건물 전체의 에너지 흐름을 실시간으로 분석하고 최적화하여 에너지 비용 절감과 탄소 배출 감소를 실현합니다.',
    features: [
      '실시간 전력 모니터링',
      'AI 기반 에너지 예측',
      '피크 부하 관리',
      '탄소 배출량 추적',
      '에너지 절감 리포트',
    ],
    specs: {
      '측정 항목': '전력, 전류, 전압, 역률',
      '데이터 주기': '1초 ~ 1시간',
      '통신': 'BACnet IP, Modbus TCP',
      '분석 기간': '최대 10년',
    },
  },
  {
    id: 'smart',
    label: '스마트제어',
    name: 'APEX SCS-100',
    description:
      'IoT 기반 스마트 빌딩 통합 솔루션으로 냉난방, 조명, 보안, 에너지를 하나의 플랫폼에서 지능적으로 관리합니다.',
    features: [
      'IoT 센서 통합 관리',
      'AI 자동 최적화',
      '모바일 앱 연동',
      '음성 제어 지원',
      '클라우드 데이터 관리',
    ],
    specs: {
      '지원 프로토콜': 'MQTT, BACnet, REST API',
      '연결 기기': '최대 10,000개',
      '클라우드': 'AWS / Azure 지원',
      '앱 지원': 'iOS / Android',
    },
  },
] as const;

export const CERTIFICATIONS = [
  {
    id: 'iso9001',
    name: 'ISO 9001',
    issuer: '국제표준화기구',
    description: '품질경영시스템 국제 인증',
    year: '2010',
    color: 'text-sky-400',
    bgColor: 'bg-sky-500/10',
    borderColor: 'border-sky-500/30',
  },
  {
    id: 'iso14001',
    name: 'ISO 14001',
    issuer: '국제표준화기구',
    description: '환경경영시스템 국제 인증',
    year: '2012',
    color: 'text-emerald-400',
    bgColor: 'bg-emerald-500/10',
    borderColor: 'border-emerald-500/30',
  },
  {
    id: 'venture',
    name: '벤처기업',
    issuer: '중소벤처기업부',
    description: '벤처기업 확인서',
    year: '2015',
    color: 'text-indigo-400',
    bgColor: 'bg-indigo-500/10',
    borderColor: 'border-indigo-500/30',
  },
  {
    id: 'inno',
    name: '이노비즈',
    issuer: '중소벤처기업부',
    description: '기술혁신형 중소기업 인증',
    year: '2016',
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500/30',
  },
  {
    id: 'patent1',
    name: '특허 제10-1234567호',
    issuer: '특허청',
    description: '건물자동화 제어 알고리즘',
    year: '2018',
    color: 'text-amber-400',
    bgColor: 'bg-amber-500/10',
    borderColor: 'border-amber-500/30',
  },
  {
    id: 'patent2',
    name: '특허 제10-2345678호',
    issuer: '특허청',
    description: 'IoT 스마트 디밍 제어 시스템',
    year: '2020',
    color: 'text-rose-400',
    bgColor: 'bg-rose-500/10',
    borderColor: 'border-rose-500/30',
  },
] as const;
