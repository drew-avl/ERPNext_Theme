(() => {
  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));

  // ../nxt_theme/nxt_theme/public/js/tailwise/vendors/lucide.js
  (() => {
    var __defProp2 = Object.defineProperty;
    var __export = (target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var createElement = (tag, attrs, children = []) => {
      const element = document.createElementNS("http://www.w3.org/2000/svg", tag);
      Object.keys(attrs).forEach((name) => {
        element.setAttribute(name, String(attrs[name]));
      });
      if (children.length) {
        children.forEach((child) => {
          const childElement = createElement(...child);
          element.appendChild(childElement);
        });
      }
      return element;
    };
    var createElement$1 = ([tag, attrs, children]) => createElement(tag, attrs, children);
    var getAttrs = (element) => Array.from(element.attributes).reduce((attrs, attr) => {
      attrs[attr.name] = attr.value;
      return attrs;
    }, {});
    var getClassNames = (attrs) => {
      if (typeof attrs === "string")
        return attrs;
      if (!attrs || !attrs.class)
        return "";
      if (attrs.class && typeof attrs.class === "string") {
        return attrs.class.split(" ");
      }
      if (attrs.class && Array.isArray(attrs.class)) {
        return attrs.class;
      }
      return "";
    };
    var combineClassNames = (arrayOfClassnames) => {
      const classNameArray = arrayOfClassnames.flatMap(getClassNames);
      return classNameArray.map((classItem) => classItem.trim()).filter(Boolean).filter((value, index, self2) => self2.indexOf(value) === index).join(" ");
    };
    var toPascalCase = (string) => string.replace(/(\w)(\w*)(_|-|\s*)/g, (g0, g1, g2) => g1.toUpperCase() + g2.toLowerCase());
    var replaceElement = (element, { nameAttr, icons: icons2, attrs }) => {
      var _a;
      const iconName = element.getAttribute(nameAttr);
      if (iconName == null)
        return;
      const ComponentName = toPascalCase(iconName);
      const iconNode = icons2[ComponentName];
      if (!iconNode) {
        return console.warn(
          `${element.outerHTML} icon name was not found in the provided icons object.`
        );
      }
      const elementAttrs = getAttrs(element);
      const [tag, iconAttributes, children] = iconNode;
      const iconAttrs = __spreadValues(__spreadValues(__spreadProps(__spreadValues({}, iconAttributes), {
        "data-lucide": iconName
      }), attrs), elementAttrs);
      const classNames = combineClassNames(["lucide", `lucide-${iconName}`, elementAttrs, attrs]);
      if (classNames) {
        Object.assign(iconAttrs, {
          class: classNames
        });
      }
      const svgElement = createElement$1([tag, iconAttrs, children]);
      return (_a = element.parentNode) == null ? void 0 : _a.replaceChild(svgElement, element);
    };
    var iconsAndAliases_exports = {};
    __export(iconsAndAliases_exports, {
      Accessibility: () => Accessibility,
      Activity: () => Activity,
      ActivitySquare: () => ActivitySquare,
      AirVent: () => AirVent,
      Airplay: () => Airplay,
      AlarmCheck: () => AlarmCheck,
      AlarmClock: () => AlarmClock,
      AlarmClockOff: () => AlarmClockOff,
      AlarmMinus: () => AlarmMinus,
      AlarmPlus: () => AlarmPlus,
      Album: () => Album,
      AlertCircle: () => AlertCircle,
      AlertOctagon: () => AlertOctagon,
      AlertTriangle: () => AlertTriangle,
      AlignCenter: () => AlignCenter,
      AlignCenterHorizontal: () => AlignCenterHorizontal,
      AlignCenterVertical: () => AlignCenterVertical,
      AlignEndHorizontal: () => AlignEndHorizontal,
      AlignEndVertical: () => AlignEndVertical,
      AlignHorizontalDistributeCenter: () => AlignHorizontalDistributeCenter,
      AlignHorizontalDistributeEnd: () => AlignHorizontalDistributeEnd,
      AlignHorizontalDistributeStart: () => AlignHorizontalDistributeStart,
      AlignHorizontalJustifyCenter: () => AlignHorizontalJustifyCenter,
      AlignHorizontalJustifyEnd: () => AlignHorizontalJustifyEnd,
      AlignHorizontalJustifyStart: () => AlignHorizontalJustifyStart,
      AlignHorizontalSpaceAround: () => AlignHorizontalSpaceAround,
      AlignHorizontalSpaceBetween: () => AlignHorizontalSpaceBetween,
      AlignJustify: () => AlignJustify,
      AlignLeft: () => AlignLeft,
      AlignRight: () => AlignRight,
      AlignStartHorizontal: () => AlignStartHorizontal,
      AlignStartVertical: () => AlignStartVertical,
      AlignVerticalDistributeCenter: () => AlignVerticalDistributeCenter,
      AlignVerticalDistributeEnd: () => AlignVerticalDistributeEnd,
      AlignVerticalDistributeStart: () => AlignVerticalDistributeStart,
      AlignVerticalJustifyCenter: () => AlignVerticalJustifyCenter,
      AlignVerticalJustifyEnd: () => AlignVerticalJustifyEnd,
      AlignVerticalJustifyStart: () => AlignVerticalJustifyStart,
      AlignVerticalSpaceAround: () => AlignVerticalSpaceAround,
      AlignVerticalSpaceBetween: () => AlignVerticalSpaceBetween,
      Ampersand: () => Ampersand,
      Ampersands: () => Ampersands,
      Anchor: () => Anchor,
      Angry: () => Angry,
      Annoyed: () => Annoyed,
      Antenna: () => Antenna,
      Aperture: () => Aperture,
      AppWindow: () => AppWindow,
      Apple: () => Apple,
      Archive: () => Archive,
      ArchiveRestore: () => ArchiveRestore,
      ArchiveX: () => ArchiveX,
      AreaChart: () => AreaChart,
      Armchair: () => Armchair,
      ArrowBigDown: () => ArrowBigDown,
      ArrowBigDownDash: () => ArrowBigDownDash,
      ArrowBigLeft: () => ArrowBigLeft,
      ArrowBigLeftDash: () => ArrowBigLeftDash,
      ArrowBigRight: () => ArrowBigRight,
      ArrowBigRightDash: () => ArrowBigRightDash,
      ArrowBigUp: () => ArrowBigUp,
      ArrowBigUpDash: () => ArrowBigUpDash,
      ArrowDown: () => ArrowDown,
      ArrowDown01: () => ArrowDown01,
      ArrowDown10: () => ArrowDown10,
      ArrowDownAZ: () => ArrowDownAZ,
      ArrowDownAz: () => ArrowDownAZ,
      ArrowDownCircle: () => ArrowDownCircle,
      ArrowDownFromLine: () => ArrowDownFromLine,
      ArrowDownLeft: () => ArrowDownLeft,
      ArrowDownLeftFromCircle: () => ArrowDownLeftFromCircle,
      ArrowDownLeftSquare: () => ArrowDownLeftSquare,
      ArrowDownNarrowWide: () => ArrowDownNarrowWide,
      ArrowDownRight: () => ArrowDownRight,
      ArrowDownRightFromCircle: () => ArrowDownRightFromCircle,
      ArrowDownRightSquare: () => ArrowDownRightSquare,
      ArrowDownSquare: () => ArrowDownSquare,
      ArrowDownToDot: () => ArrowDownToDot,
      ArrowDownToLine: () => ArrowDownToLine,
      ArrowDownUp: () => ArrowDownUp,
      ArrowDownWideNarrow: () => ArrowDownWideNarrow,
      ArrowDownZA: () => ArrowDownZA,
      ArrowDownZa: () => ArrowDownZA,
      ArrowLeft: () => ArrowLeft,
      ArrowLeftCircle: () => ArrowLeftCircle,
      ArrowLeftFromLine: () => ArrowLeftFromLine,
      ArrowLeftRight: () => ArrowLeftRight,
      ArrowLeftSquare: () => ArrowLeftSquare,
      ArrowLeftToLine: () => ArrowLeftToLine,
      ArrowRight: () => ArrowRight,
      ArrowRightCircle: () => ArrowRightCircle,
      ArrowRightFromLine: () => ArrowRightFromLine,
      ArrowRightLeft: () => ArrowRightLeft,
      ArrowRightSquare: () => ArrowRightSquare,
      ArrowRightToLine: () => ArrowRightToLine,
      ArrowUp: () => ArrowUp,
      ArrowUp01: () => ArrowUp01,
      ArrowUp10: () => ArrowUp10,
      ArrowUpAZ: () => ArrowUpAZ,
      ArrowUpAz: () => ArrowUpAZ,
      ArrowUpCircle: () => ArrowUpCircle,
      ArrowUpDown: () => ArrowUpDown,
      ArrowUpFromDot: () => ArrowUpFromDot,
      ArrowUpFromLine: () => ArrowUpFromLine,
      ArrowUpLeft: () => ArrowUpLeft,
      ArrowUpLeftFromCircle: () => ArrowUpLeftFromCircle,
      ArrowUpLeftSquare: () => ArrowUpLeftSquare,
      ArrowUpNarrowWide: () => ArrowUpNarrowWide,
      ArrowUpRight: () => ArrowUpRight,
      ArrowUpRightFromCircle: () => ArrowUpRightFromCircle,
      ArrowUpRightSquare: () => ArrowUpRightSquare,
      ArrowUpSquare: () => ArrowUpSquare,
      ArrowUpToLine: () => ArrowUpToLine,
      ArrowUpWideNarrow: () => ArrowUpWideNarrow,
      ArrowUpZA: () => ArrowUpZA,
      ArrowUpZa: () => ArrowUpZA,
      ArrowsUpFromLine: () => ArrowsUpFromLine,
      Asterisk: () => Asterisk,
      AtSign: () => AtSign,
      Atom: () => Atom,
      Award: () => Award,
      Axe: () => Axe,
      Axis3D: () => Axis3d,
      Axis3d: () => Axis3d,
      Baby: () => Baby,
      Backpack: () => Backpack,
      Badge: () => Badge,
      BadgeAlert: () => BadgeAlert,
      BadgeCent: () => BadgeCent,
      BadgeCheck: () => BadgeCheck,
      BadgeDollarSign: () => BadgeDollarSign,
      BadgeEuro: () => BadgeEuro,
      BadgeHelp: () => BadgeHelp,
      BadgeIndianRupee: () => BadgeIndianRupee,
      BadgeInfo: () => BadgeInfo,
      BadgeJapaneseYen: () => BadgeJapaneseYen,
      BadgeMinus: () => BadgeMinus,
      BadgePercent: () => BadgePercent,
      BadgePlus: () => BadgePlus,
      BadgePoundSterling: () => BadgePoundSterling,
      BadgeRussianRuble: () => BadgeRussianRuble,
      BadgeSwissFranc: () => BadgeSwissFranc,
      BadgeX: () => BadgeX,
      BaggageClaim: () => BaggageClaim,
      Ban: () => Ban,
      Banana: () => Banana,
      Banknote: () => Banknote,
      BarChart: () => BarChart,
      BarChart2: () => BarChart2,
      BarChart3: () => BarChart3,
      BarChart4: () => BarChart4,
      BarChartBig: () => BarChartBig,
      BarChartHorizontal: () => BarChartHorizontal,
      BarChartHorizontalBig: () => BarChartHorizontalBig,
      Barcode: () => Barcode,
      Baseline: () => Baseline,
      Bath: () => Bath,
      Battery: () => Battery,
      BatteryCharging: () => BatteryCharging,
      BatteryFull: () => BatteryFull,
      BatteryLow: () => BatteryLow,
      BatteryMedium: () => BatteryMedium,
      BatteryWarning: () => BatteryWarning,
      Beaker: () => Beaker,
      Bean: () => Bean,
      BeanOff: () => BeanOff,
      Bed: () => Bed,
      BedDouble: () => BedDouble,
      BedSingle: () => BedSingle,
      Beef: () => Beef,
      Beer: () => Beer,
      Bell: () => Bell,
      BellDot: () => BellDot,
      BellMinus: () => BellMinus,
      BellOff: () => BellOff,
      BellPlus: () => BellPlus,
      BellRing: () => BellRing,
      Bike: () => Bike,
      Binary: () => Binary,
      Biohazard: () => Biohazard,
      Bird: () => Bird,
      Bitcoin: () => Bitcoin,
      Blinds: () => Blinds,
      Blocks: () => Blocks,
      Bluetooth: () => Bluetooth,
      BluetoothConnected: () => BluetoothConnected,
      BluetoothOff: () => BluetoothOff,
      BluetoothSearching: () => BluetoothSearching,
      Bold: () => Bold,
      Bomb: () => Bomb,
      Bone: () => Bone,
      Book: () => Book,
      BookA: () => BookA,
      BookAudio: () => BookAudio,
      BookCheck: () => BookCheck,
      BookCopy: () => BookCopy,
      BookDashed: () => BookDashed,
      BookDown: () => BookDown,
      BookHeadphones: () => BookHeadphones,
      BookHeart: () => BookHeart,
      BookImage: () => BookImage,
      BookKey: () => BookKey,
      BookLock: () => BookLock,
      BookMarked: () => BookMarked,
      BookMinus: () => BookMinus,
      BookOpen: () => BookOpen,
      BookOpenCheck: () => BookOpenCheck,
      BookOpenText: () => BookOpenText,
      BookPlus: () => BookPlus,
      BookTemplate: () => BookDashed,
      BookText: () => BookText,
      BookType: () => BookType,
      BookUp: () => BookUp,
      BookUp2: () => BookUp2,
      BookUser: () => BookUser,
      BookX: () => BookX,
      Bookmark: () => Bookmark,
      BookmarkCheck: () => BookmarkCheck,
      BookmarkMinus: () => BookmarkMinus,
      BookmarkPlus: () => BookmarkPlus,
      BookmarkX: () => BookmarkX,
      BoomBox: () => BoomBox,
      Bot: () => Bot,
      Box: () => Box,
      BoxSelect: () => BoxSelect,
      Boxes: () => Boxes,
      Braces: () => Braces,
      Brackets: () => Brackets,
      Brain: () => Brain,
      BrainCircuit: () => BrainCircuit,
      BrainCog: () => BrainCog,
      Briefcase: () => Briefcase,
      BringToFront: () => BringToFront,
      Brush: () => Brush,
      Bug: () => Bug,
      BugOff: () => BugOff,
      BugPlay: () => BugPlay,
      Building: () => Building,
      Building2: () => Building2,
      Bus: () => Bus,
      BusFront: () => BusFront,
      Cable: () => Cable,
      CableCar: () => CableCar,
      Cake: () => Cake,
      CakeSlice: () => CakeSlice,
      Calculator: () => Calculator,
      Calendar: () => Calendar2,
      CalendarCheck: () => CalendarCheck,
      CalendarCheck2: () => CalendarCheck2,
      CalendarClock: () => CalendarClock,
      CalendarDays: () => CalendarDays,
      CalendarHeart: () => CalendarHeart,
      CalendarMinus: () => CalendarMinus,
      CalendarOff: () => CalendarOff,
      CalendarPlus: () => CalendarPlus,
      CalendarRange: () => CalendarRange,
      CalendarSearch: () => CalendarSearch,
      CalendarX: () => CalendarX,
      CalendarX2: () => CalendarX2,
      Camera: () => Camera,
      CameraOff: () => CameraOff,
      CandlestickChart: () => CandlestickChart,
      Candy: () => Candy,
      CandyCane: () => CandyCane,
      CandyOff: () => CandyOff,
      Car: () => Car,
      CarFront: () => CarFront,
      CarTaxiFront: () => CarTaxiFront,
      Caravan: () => Caravan,
      Carrot: () => Carrot,
      CaseLower: () => CaseLower,
      CaseSensitive: () => CaseSensitive,
      CaseUpper: () => CaseUpper,
      CassetteTape: () => CassetteTape,
      Cast: () => Cast,
      Castle: () => Castle,
      Cat: () => Cat,
      Check: () => Check,
      CheckCheck: () => CheckCheck,
      CheckCircle: () => CheckCircle,
      CheckCircle2: () => CheckCircle2,
      CheckSquare: () => CheckSquare,
      ChefHat: () => ChefHat,
      Cherry: () => Cherry,
      ChevronDown: () => ChevronDown,
      ChevronDownCircle: () => ChevronDownCircle,
      ChevronDownSquare: () => ChevronDownSquare,
      ChevronFirst: () => ChevronFirst,
      ChevronLast: () => ChevronLast,
      ChevronLeft: () => ChevronLeft,
      ChevronLeftCircle: () => ChevronLeftCircle,
      ChevronLeftSquare: () => ChevronLeftSquare,
      ChevronRight: () => ChevronRight,
      ChevronRightCircle: () => ChevronRightCircle,
      ChevronRightSquare: () => ChevronRightSquare,
      ChevronUp: () => ChevronUp,
      ChevronUpCircle: () => ChevronUpCircle,
      ChevronUpSquare: () => ChevronUpSquare,
      ChevronsDown: () => ChevronsDown,
      ChevronsDownUp: () => ChevronsDownUp,
      ChevronsLeft: () => ChevronsLeft,
      ChevronsLeftRight: () => ChevronsLeftRight,
      ChevronsRight: () => ChevronsRight,
      ChevronsRightLeft: () => ChevronsRightLeft,
      ChevronsUp: () => ChevronsUp,
      ChevronsUpDown: () => ChevronsUpDown,
      Chrome: () => Chrome,
      Church: () => Church,
      Cigarette: () => Cigarette,
      CigaretteOff: () => CigaretteOff,
      Circle: () => Circle,
      CircleDashed: () => CircleDashed,
      CircleDollarSign: () => CircleDollarSign,
      CircleDot: () => CircleDot,
      CircleDotDashed: () => CircleDotDashed,
      CircleEllipsis: () => CircleEllipsis,
      CircleEqual: () => CircleEqual,
      CircleOff: () => CircleOff,
      CircleSlash: () => CircleSlash,
      CircleSlash2: () => CircleSlash2,
      CircleSlashed: () => CircleSlash2,
      CircuitBoard: () => CircuitBoard,
      Citrus: () => Citrus,
      Clapperboard: () => Clapperboard,
      Clipboard: () => Clipboard,
      ClipboardCheck: () => ClipboardCheck,
      ClipboardCopy: () => ClipboardCopy,
      ClipboardEdit: () => ClipboardEdit,
      ClipboardList: () => ClipboardList,
      ClipboardPaste: () => ClipboardPaste,
      ClipboardSignature: () => ClipboardSignature,
      ClipboardType: () => ClipboardType,
      ClipboardX: () => ClipboardX,
      Clock: () => Clock,
      Clock1: () => Clock1,
      Clock10: () => Clock10,
      Clock11: () => Clock11,
      Clock12: () => Clock12,
      Clock2: () => Clock2,
      Clock3: () => Clock3,
      Clock4: () => Clock4,
      Clock5: () => Clock5,
      Clock6: () => Clock6,
      Clock7: () => Clock7,
      Clock8: () => Clock8,
      Clock9: () => Clock9,
      Cloud: () => Cloud,
      CloudCog: () => CloudCog,
      CloudDrizzle: () => CloudDrizzle,
      CloudFog: () => CloudFog,
      CloudHail: () => CloudHail,
      CloudLightning: () => CloudLightning,
      CloudMoon: () => CloudMoon,
      CloudMoonRain: () => CloudMoonRain,
      CloudOff: () => CloudOff,
      CloudRain: () => CloudRain,
      CloudRainWind: () => CloudRainWind,
      CloudSnow: () => CloudSnow,
      CloudSun: () => CloudSun,
      CloudSunRain: () => CloudSunRain,
      Cloudy: () => Cloudy,
      Clover: () => Clover,
      Club: () => Club,
      Code: () => Code,
      Code2: () => Code2,
      Codepen: () => Codepen,
      Codesandbox: () => Codesandbox,
      Coffee: () => Coffee,
      Cog: () => Cog,
      Coins: () => Coins,
      Columns: () => Columns,
      Combine: () => Combine,
      Command: () => Command,
      Compass: () => Compass,
      Component: () => Component,
      Computer: () => Computer,
      ConciergeBell: () => ConciergeBell,
      Cone: () => Cone,
      Construction: () => Construction,
      Contact: () => Contact,
      Contact2: () => Contact2,
      Container: () => Container,
      Contrast: () => Contrast,
      Cookie: () => Cookie,
      Copy: () => Copy,
      CopyCheck: () => CopyCheck,
      CopyMinus: () => CopyMinus,
      CopyPlus: () => CopyPlus,
      CopySlash: () => CopySlash,
      CopyX: () => CopyX,
      Copyleft: () => Copyleft,
      Copyright: () => Copyright,
      CornerDownLeft: () => CornerDownLeft,
      CornerDownRight: () => CornerDownRight,
      CornerLeftDown: () => CornerLeftDown,
      CornerLeftUp: () => CornerLeftUp,
      CornerRightDown: () => CornerRightDown,
      CornerRightUp: () => CornerRightUp,
      CornerUpLeft: () => CornerUpLeft,
      CornerUpRight: () => CornerUpRight,
      Cpu: () => Cpu,
      CreativeCommons: () => CreativeCommons,
      CreditCard: () => CreditCard,
      Croissant: () => Croissant,
      Crop: () => Crop,
      Cross: () => Cross,
      Crosshair: () => Crosshair,
      Crown: () => Crown,
      Cuboid: () => Cuboid,
      CupSoda: () => CupSoda,
      CurlyBraces: () => Braces,
      Currency: () => Currency,
      Cylinder: () => Cylinder,
      Database: () => Database,
      DatabaseBackup: () => DatabaseBackup,
      DatabaseZap: () => DatabaseZap,
      Delete: () => Delete,
      Dessert: () => Dessert,
      Diameter: () => Diameter,
      Diamond: () => Diamond,
      Dice1: () => Dice1,
      Dice2: () => Dice2,
      Dice3: () => Dice3,
      Dice4: () => Dice4,
      Dice5: () => Dice5,
      Dice6: () => Dice6,
      Dices: () => Dices,
      Diff: () => Diff,
      Disc: () => Disc,
      Disc2: () => Disc2,
      Disc3: () => Disc3,
      Divide: () => Divide,
      DivideCircle: () => DivideCircle,
      DivideSquare: () => DivideSquare,
      Dna: () => Dna,
      DnaOff: () => DnaOff,
      Dog: () => Dog,
      DollarSign: () => DollarSign,
      Donut: () => Donut,
      DoorClosed: () => DoorClosed,
      DoorOpen: () => DoorOpen,
      Dot: () => Dot,
      Download: () => Download,
      DownloadCloud: () => DownloadCloud,
      DraftingCompass: () => DraftingCompass,
      Drama: () => Drama,
      Dribbble: () => Dribbble,
      Droplet: () => Droplet,
      Droplets: () => Droplets,
      Drumstick: () => Drumstick,
      Dumbbell: () => Dumbbell,
      Ear: () => Ear,
      EarOff: () => EarOff,
      Edit: () => PenSquare,
      Edit2: () => Pen,
      Edit3: () => PenLine,
      Egg: () => Egg,
      EggFried: () => EggFried,
      EggOff: () => EggOff,
      Equal: () => Equal,
      EqualNot: () => EqualNot,
      Eraser: () => Eraser,
      Euro: () => Euro,
      Expand: () => Expand,
      ExternalLink: () => ExternalLink,
      Eye: () => Eye,
      EyeOff: () => EyeOff,
      Facebook: () => Facebook,
      Factory: () => Factory,
      Fan: () => Fan,
      FastForward: () => FastForward,
      Feather: () => Feather,
      FerrisWheel: () => FerrisWheel,
      Figma: () => Figma,
      File: () => File,
      FileArchive: () => FileArchive,
      FileAudio: () => FileAudio,
      FileAudio2: () => FileAudio2,
      FileAxis3D: () => FileAxis3d,
      FileAxis3d: () => FileAxis3d,
      FileBadge: () => FileBadge,
      FileBadge2: () => FileBadge2,
      FileBarChart: () => FileBarChart,
      FileBarChart2: () => FileBarChart2,
      FileBox: () => FileBox,
      FileCheck: () => FileCheck,
      FileCheck2: () => FileCheck2,
      FileClock: () => FileClock,
      FileCode: () => FileCode,
      FileCode2: () => FileCode2,
      FileCog: () => FileCog,
      FileCog2: () => FileCog,
      FileDiff: () => FileDiff,
      FileDigit: () => FileDigit,
      FileDown: () => FileDown,
      FileEdit: () => FileEdit,
      FileHeart: () => FileHeart,
      FileImage: () => FileImage,
      FileInput: () => FileInput,
      FileJson: () => FileJson,
      FileJson2: () => FileJson2,
      FileKey: () => FileKey,
      FileKey2: () => FileKey2,
      FileLineChart: () => FileLineChart,
      FileLock: () => FileLock,
      FileLock2: () => FileLock2,
      FileMinus: () => FileMinus,
      FileMinus2: () => FileMinus2,
      FileOutput: () => FileOutput,
      FilePieChart: () => FilePieChart,
      FilePlus: () => FilePlus,
      FilePlus2: () => FilePlus2,
      FileQuestion: () => FileQuestion,
      FileScan: () => FileScan,
      FileSearch: () => FileSearch,
      FileSearch2: () => FileSearch2,
      FileSignature: () => FileSignature,
      FileSpreadsheet: () => FileSpreadsheet,
      FileStack: () => FileStack,
      FileSymlink: () => FileSymlink,
      FileTerminal: () => FileTerminal,
      FileText: () => FileText,
      FileType: () => FileType,
      FileType2: () => FileType2,
      FileUp: () => FileUp,
      FileVideo: () => FileVideo,
      FileVideo2: () => FileVideo2,
      FileVolume: () => FileVolume,
      FileVolume2: () => FileVolume2,
      FileWarning: () => FileWarning,
      FileX: () => FileX,
      FileX2: () => FileX2,
      Files: () => Files,
      Film: () => Film,
      Filter: () => Filter,
      FilterX: () => FilterX,
      Fingerprint: () => Fingerprint,
      Fish: () => Fish,
      FishOff: () => FishOff,
      FishSymbol: () => FishSymbol,
      Flag: () => Flag,
      FlagOff: () => FlagOff,
      FlagTriangleLeft: () => FlagTriangleLeft,
      FlagTriangleRight: () => FlagTriangleRight,
      Flame: () => Flame,
      FlameKindling: () => FlameKindling,
      Flashlight: () => Flashlight,
      FlashlightOff: () => FlashlightOff,
      FlaskConical: () => FlaskConical,
      FlaskConicalOff: () => FlaskConicalOff,
      FlaskRound: () => FlaskRound,
      FlipHorizontal: () => FlipHorizontal,
      FlipHorizontal2: () => FlipHorizontal2,
      FlipVertical: () => FlipVertical,
      FlipVertical2: () => FlipVertical2,
      Flower: () => Flower,
      Flower2: () => Flower2,
      Focus: () => Focus,
      FoldHorizontal: () => FoldHorizontal,
      FoldVertical: () => FoldVertical,
      Folder: () => Folder,
      FolderArchive: () => FolderArchive,
      FolderCheck: () => FolderCheck,
      FolderClock: () => FolderClock,
      FolderClosed: () => FolderClosed,
      FolderCog: () => FolderCog,
      FolderCog2: () => FolderCog,
      FolderDot: () => FolderDot,
      FolderDown: () => FolderDown,
      FolderEdit: () => FolderEdit,
      FolderGit: () => FolderGit,
      FolderGit2: () => FolderGit2,
      FolderHeart: () => FolderHeart,
      FolderInput: () => FolderInput,
      FolderKanban: () => FolderKanban,
      FolderKey: () => FolderKey,
      FolderLock: () => FolderLock,
      FolderMinus: () => FolderMinus,
      FolderOpen: () => FolderOpen,
      FolderOpenDot: () => FolderOpenDot,
      FolderOutput: () => FolderOutput,
      FolderPlus: () => FolderPlus,
      FolderRoot: () => FolderRoot,
      FolderSearch: () => FolderSearch,
      FolderSearch2: () => FolderSearch2,
      FolderSymlink: () => FolderSymlink,
      FolderSync: () => FolderSync,
      FolderTree: () => FolderTree,
      FolderUp: () => FolderUp,
      FolderX: () => FolderX,
      Folders: () => Folders,
      Footprints: () => Footprints,
      Forklift: () => Forklift,
      FormInput: () => FormInput,
      Forward: () => Forward,
      Frame: () => Frame,
      Framer: () => Framer,
      Frown: () => Frown,
      Fuel: () => Fuel,
      Fullscreen: () => Fullscreen,
      FunctionSquare: () => FunctionSquare,
      GalleryHorizontal: () => GalleryHorizontal,
      GalleryHorizontalEnd: () => GalleryHorizontalEnd,
      GalleryThumbnails: () => GalleryThumbnails,
      GalleryVertical: () => GalleryVertical,
      GalleryVerticalEnd: () => GalleryVerticalEnd,
      Gamepad: () => Gamepad,
      Gamepad2: () => Gamepad2,
      GanttChart: () => GanttChart,
      GanttChartSquare: () => GanttChartSquare,
      Gauge: () => Gauge,
      GaugeCircle: () => GaugeCircle,
      Gavel: () => Gavel,
      Gem: () => Gem,
      Ghost: () => Ghost,
      Gift: () => Gift,
      GitBranch: () => GitBranch,
      GitBranchPlus: () => GitBranchPlus,
      GitCommit: () => GitCommitHorizontal,
      GitCommitHorizontal: () => GitCommitHorizontal,
      GitCommitVertical: () => GitCommitVertical,
      GitCompare: () => GitCompare,
      GitCompareArrows: () => GitCompareArrows,
      GitFork: () => GitFork,
      GitGraph: () => GitGraph,
      GitMerge: () => GitMerge,
      GitPullRequest: () => GitPullRequest,
      GitPullRequestArrow: () => GitPullRequestArrow,
      GitPullRequestClosed: () => GitPullRequestClosed,
      GitPullRequestCreate: () => GitPullRequestCreate,
      GitPullRequestCreateArrow: () => GitPullRequestCreateArrow,
      GitPullRequestDraft: () => GitPullRequestDraft,
      Github: () => Github,
      Gitlab: () => Gitlab,
      GlassWater: () => GlassWater,
      Glasses: () => Glasses,
      Globe: () => Globe,
      Globe2: () => Globe2,
      Goal: () => Goal,
      Grab: () => Grab,
      GraduationCap: () => GraduationCap,
      Grape: () => Grape,
      Grid: () => Grid3x3,
      Grid2X2: () => Grid2x2,
      Grid2x2: () => Grid2x2,
      Grid3X3: () => Grid3x3,
      Grid3x3: () => Grid3x3,
      Grip: () => Grip,
      GripHorizontal: () => GripHorizontal,
      GripVertical: () => GripVertical,
      Group: () => Group,
      Hammer: () => Hammer,
      Hand: () => Hand,
      HandMetal: () => HandMetal,
      HardDrive: () => HardDrive,
      HardDriveDownload: () => HardDriveDownload,
      HardDriveUpload: () => HardDriveUpload,
      HardHat: () => HardHat,
      Hash: () => Hash,
      Haze: () => Haze,
      HdmiPort: () => HdmiPort,
      Heading: () => Heading,
      Heading1: () => Heading1,
      Heading2: () => Heading2,
      Heading3: () => Heading3,
      Heading4: () => Heading4,
      Heading5: () => Heading5,
      Heading6: () => Heading6,
      Headphones: () => Headphones,
      Heart: () => Heart,
      HeartCrack: () => HeartCrack,
      HeartHandshake: () => HeartHandshake,
      HeartOff: () => HeartOff,
      HeartPulse: () => HeartPulse,
      HelpCircle: () => HelpCircle,
      HelpingHand: () => HelpingHand,
      Hexagon: () => Hexagon,
      Highlighter: () => Highlighter,
      History: () => History,
      Home: () => Home,
      Hop: () => Hop,
      HopOff: () => HopOff,
      Hotel: () => Hotel,
      Hourglass: () => Hourglass,
      IceCream: () => IceCream,
      IceCream2: () => IceCream2,
      Image: () => Image,
      ImageDown: () => ImageDown,
      ImageMinus: () => ImageMinus,
      ImageOff: () => ImageOff,
      ImagePlus: () => ImagePlus,
      Import: () => Import,
      Inbox: () => Inbox,
      Indent: () => Indent,
      IndianRupee: () => IndianRupee,
      Infinity: () => Infinity2,
      Info: () => Info,
      Inspect: () => MousePointerSquare,
      Instagram: () => Instagram,
      Italic: () => Italic,
      IterationCcw: () => IterationCcw,
      IterationCw: () => IterationCw,
      JapaneseYen: () => JapaneseYen,
      Joystick: () => Joystick,
      Kanban: () => Kanban,
      KanbanSquare: () => KanbanSquare,
      KanbanSquareDashed: () => KanbanSquareDashed,
      Key: () => Key,
      KeyRound: () => KeyRound,
      KeySquare: () => KeySquare,
      Keyboard: () => Keyboard,
      Lamp: () => Lamp,
      LampCeiling: () => LampCeiling,
      LampDesk: () => LampDesk,
      LampFloor: () => LampFloor,
      LampWallDown: () => LampWallDown,
      LampWallUp: () => LampWallUp,
      LandPlot: () => LandPlot,
      Landmark: () => Landmark,
      Languages: () => Languages,
      Laptop: () => Laptop,
      Laptop2: () => Laptop2,
      Lasso: () => Lasso,
      LassoSelect: () => LassoSelect,
      Laugh: () => Laugh,
      Layers: () => Layers,
      Layers2: () => Layers2,
      Layers3: () => Layers3,
      Layout: () => Layout,
      LayoutDashboard: () => LayoutDashboard,
      LayoutGrid: () => LayoutGrid,
      LayoutList: () => LayoutList,
      LayoutPanelLeft: () => LayoutPanelLeft,
      LayoutPanelTop: () => LayoutPanelTop,
      LayoutTemplate: () => LayoutTemplate,
      Leaf: () => Leaf,
      LeafyGreen: () => LeafyGreen,
      Library: () => Library,
      LibraryBig: () => LibraryBig,
      LibrarySquare: () => LibrarySquare,
      LifeBuoy: () => LifeBuoy,
      Ligature: () => Ligature,
      Lightbulb: () => Lightbulb,
      LightbulbOff: () => LightbulbOff,
      LineChart: () => LineChart,
      Link: () => Link,
      Link2: () => Link2,
      Link2Off: () => Link2Off,
      Linkedin: () => Linkedin,
      List: () => List,
      ListChecks: () => ListChecks,
      ListEnd: () => ListEnd,
      ListFilter: () => ListFilter,
      ListMinus: () => ListMinus,
      ListMusic: () => ListMusic,
      ListOrdered: () => ListOrdered,
      ListPlus: () => ListPlus,
      ListRestart: () => ListRestart,
      ListStart: () => ListStart,
      ListTodo: () => ListTodo,
      ListTree: () => ListTree,
      ListVideo: () => ListVideo,
      ListX: () => ListX,
      Loader: () => Loader,
      Loader2: () => Loader2,
      Locate: () => Locate,
      LocateFixed: () => LocateFixed,
      LocateOff: () => LocateOff,
      Lock: () => Lock,
      LockKeyhole: () => LockKeyhole,
      LogIn: () => LogIn,
      LogOut: () => LogOut,
      Lollipop: () => Lollipop,
      Luggage: () => Luggage,
      MSquare: () => MSquare,
      Magnet: () => Magnet,
      Mail: () => Mail,
      MailCheck: () => MailCheck,
      MailMinus: () => MailMinus,
      MailOpen: () => MailOpen,
      MailPlus: () => MailPlus,
      MailQuestion: () => MailQuestion,
      MailSearch: () => MailSearch,
      MailWarning: () => MailWarning,
      MailX: () => MailX,
      Mailbox: () => Mailbox,
      Mails: () => Mails,
      Map: () => Map2,
      MapPin: () => MapPin,
      MapPinOff: () => MapPinOff,
      MapPinned: () => MapPinned,
      Martini: () => Martini,
      Maximize: () => Maximize,
      Maximize2: () => Maximize2,
      Medal: () => Medal,
      Megaphone: () => Megaphone,
      MegaphoneOff: () => MegaphoneOff,
      Meh: () => Meh,
      MemoryStick: () => MemoryStick,
      Menu: () => Menu,
      MenuSquare: () => MenuSquare,
      Merge: () => Merge,
      MessageCircle: () => MessageCircle,
      MessageSquare: () => MessageSquare,
      MessageSquareDashed: () => MessageSquareDashed,
      MessageSquarePlus: () => MessageSquarePlus,
      MessagesSquare: () => MessagesSquare,
      Mic: () => Mic,
      Mic2: () => Mic2,
      MicOff: () => MicOff,
      Microscope: () => Microscope,
      Microwave: () => Microwave,
      Milestone: () => Milestone,
      Milk: () => Milk,
      MilkOff: () => MilkOff,
      Minimize: () => Minimize,
      Minimize2: () => Minimize2,
      Minus: () => Minus,
      MinusCircle: () => MinusCircle,
      MinusSquare: () => MinusSquare,
      Monitor: () => Monitor,
      MonitorCheck: () => MonitorCheck,
      MonitorDot: () => MonitorDot,
      MonitorDown: () => MonitorDown,
      MonitorOff: () => MonitorOff,
      MonitorPause: () => MonitorPause,
      MonitorPlay: () => MonitorPlay,
      MonitorSmartphone: () => MonitorSmartphone,
      MonitorSpeaker: () => MonitorSpeaker,
      MonitorStop: () => MonitorStop,
      MonitorUp: () => MonitorUp,
      MonitorX: () => MonitorX,
      Moon: () => Moon,
      MoonStar: () => MoonStar,
      MoreHorizontal: () => MoreHorizontal,
      MoreVertical: () => MoreVertical,
      Mountain: () => Mountain,
      MountainSnow: () => MountainSnow,
      Mouse: () => Mouse,
      MousePointer: () => MousePointer,
      MousePointer2: () => MousePointer2,
      MousePointerClick: () => MousePointerClick,
      MousePointerSquare: () => MousePointerSquare,
      MousePointerSquareDashed: () => MousePointerSquareDashed,
      Move: () => Move,
      Move3D: () => Move3d,
      Move3d: () => Move3d,
      MoveDiagonal: () => MoveDiagonal,
      MoveDiagonal2: () => MoveDiagonal2,
      MoveDown: () => MoveDown,
      MoveDownLeft: () => MoveDownLeft,
      MoveDownRight: () => MoveDownRight,
      MoveHorizontal: () => MoveHorizontal,
      MoveLeft: () => MoveLeft,
      MoveRight: () => MoveRight,
      MoveUp: () => MoveUp,
      MoveUpLeft: () => MoveUpLeft,
      MoveUpRight: () => MoveUpRight,
      MoveVertical: () => MoveVertical,
      Music: () => Music,
      Music2: () => Music2,
      Music3: () => Music3,
      Music4: () => Music4,
      Navigation: () => Navigation,
      Navigation2: () => Navigation2,
      Navigation2Off: () => Navigation2Off,
      NavigationOff: () => NavigationOff,
      Network: () => Network,
      Newspaper: () => Newspaper,
      Nfc: () => Nfc,
      Nut: () => Nut,
      NutOff: () => NutOff,
      Octagon: () => Octagon,
      Option: () => Option,
      Orbit: () => Orbit,
      Outdent: () => Outdent,
      Package: () => Package,
      Package2: () => Package2,
      PackageCheck: () => PackageCheck,
      PackageMinus: () => PackageMinus,
      PackageOpen: () => PackageOpen,
      PackagePlus: () => PackagePlus,
      PackageSearch: () => PackageSearch,
      PackageX: () => PackageX,
      PaintBucket: () => PaintBucket,
      Paintbrush: () => Paintbrush,
      Paintbrush2: () => Paintbrush2,
      Palette: () => Palette,
      Palmtree: () => Palmtree,
      PanelBottom: () => PanelBottom,
      PanelBottomClose: () => PanelBottomClose,
      PanelBottomInactive: () => PanelBottomInactive,
      PanelBottomOpen: () => PanelBottomOpen,
      PanelLeft: () => PanelLeft,
      PanelLeftClose: () => PanelLeftClose,
      PanelLeftInactive: () => PanelLeftInactive,
      PanelLeftOpen: () => PanelLeftOpen,
      PanelRight: () => PanelRight,
      PanelRightClose: () => PanelRightClose,
      PanelRightInactive: () => PanelRightInactive,
      PanelRightOpen: () => PanelRightOpen,
      PanelTop: () => PanelTop,
      PanelTopClose: () => PanelTopClose,
      PanelTopInactive: () => PanelTopInactive,
      PanelTopOpen: () => PanelTopOpen,
      Paperclip: () => Paperclip,
      Parentheses: () => Parentheses,
      ParkingCircle: () => ParkingCircle,
      ParkingCircleOff: () => ParkingCircleOff,
      ParkingMeter: () => ParkingMeter,
      ParkingSquare: () => ParkingSquare,
      ParkingSquareOff: () => ParkingSquareOff,
      PartyPopper: () => PartyPopper,
      Pause: () => Pause,
      PauseCircle: () => PauseCircle,
      PauseOctagon: () => PauseOctagon,
      PawPrint: () => PawPrint,
      PcCase: () => PcCase,
      Pen: () => Pen,
      PenBox: () => PenSquare,
      PenLine: () => PenLine,
      PenSquare: () => PenSquare,
      PenTool: () => PenTool,
      Pencil: () => Pencil,
      PencilLine: () => PencilLine,
      PencilRuler: () => PencilRuler,
      Pentagon: () => Pentagon,
      Percent: () => Percent,
      PercentCircle: () => PercentCircle,
      PercentDiamond: () => PercentDiamond,
      PercentSquare: () => PercentSquare,
      PersonStanding: () => PersonStanding,
      Phone: () => Phone,
      PhoneCall: () => PhoneCall,
      PhoneForwarded: () => PhoneForwarded,
      PhoneIncoming: () => PhoneIncoming,
      PhoneMissed: () => PhoneMissed,
      PhoneOff: () => PhoneOff,
      PhoneOutgoing: () => PhoneOutgoing,
      Pi: () => Pi,
      PiSquare: () => PiSquare,
      PictureInPicture: () => PictureInPicture,
      PictureInPicture2: () => PictureInPicture2,
      PieChart: () => PieChart,
      PiggyBank: () => PiggyBank,
      Pilcrow: () => Pilcrow,
      PilcrowSquare: () => PilcrowSquare,
      Pill: () => Pill,
      Pin: () => Pin,
      PinOff: () => PinOff,
      Pipette: () => Pipette,
      Pizza: () => Pizza,
      Plane: () => Plane,
      PlaneLanding: () => PlaneLanding,
      PlaneTakeoff: () => PlaneTakeoff,
      Play: () => Play,
      PlayCircle: () => PlayCircle,
      PlaySquare: () => PlaySquare,
      Plug: () => Plug,
      Plug2: () => Plug2,
      PlugZap: () => PlugZap,
      PlugZap2: () => PlugZap2,
      Plus: () => Plus,
      PlusCircle: () => PlusCircle,
      PlusSquare: () => PlusSquare,
      Pocket: () => Pocket,
      PocketKnife: () => PocketKnife,
      Podcast: () => Podcast,
      Pointer: () => Pointer,
      Popcorn: () => Popcorn,
      Popsicle: () => Popsicle,
      PoundSterling: () => PoundSterling,
      Power: () => Power,
      PowerCircle: () => PowerCircle,
      PowerOff: () => PowerOff,
      PowerSquare: () => PowerSquare,
      Presentation: () => Presentation,
      Printer: () => Printer,
      Projector: () => Projector,
      Puzzle: () => Puzzle,
      Pyramid: () => Pyramid,
      QrCode: () => QrCode,
      Quote: () => Quote,
      Rabbit: () => Rabbit,
      Radar: () => Radar,
      Radiation: () => Radiation,
      Radio: () => Radio,
      RadioReceiver: () => RadioReceiver,
      RadioTower: () => RadioTower,
      Radius: () => Radius,
      RailSymbol: () => RailSymbol,
      Rainbow: () => Rainbow,
      Rat: () => Rat,
      Ratio: () => Ratio,
      Receipt: () => Receipt,
      RectangleHorizontal: () => RectangleHorizontal,
      RectangleVertical: () => RectangleVertical,
      Recycle: () => Recycle,
      Redo: () => Redo,
      Redo2: () => Redo2,
      RedoDot: () => RedoDot,
      RefreshCcw: () => RefreshCcw,
      RefreshCcwDot: () => RefreshCcwDot,
      RefreshCw: () => RefreshCw,
      RefreshCwOff: () => RefreshCwOff,
      Refrigerator: () => Refrigerator,
      Regex: () => Regex,
      RemoveFormatting: () => RemoveFormatting,
      Repeat: () => Repeat,
      Repeat1: () => Repeat1,
      Repeat2: () => Repeat2,
      Replace: () => Replace,
      ReplaceAll: () => ReplaceAll,
      Reply: () => Reply,
      ReplyAll: () => ReplyAll,
      Rewind: () => Rewind,
      Rocket: () => Rocket,
      RockingChair: () => RockingChair,
      RollerCoaster: () => RollerCoaster,
      Rotate3D: () => Rotate3d,
      Rotate3d: () => Rotate3d,
      RotateCcw: () => RotateCcw,
      RotateCw: () => RotateCw,
      Route: () => Route,
      RouteOff: () => RouteOff,
      Router: () => Router,
      Rows: () => Rows,
      Rss: () => Rss,
      Ruler: () => Ruler,
      RussianRuble: () => RussianRuble,
      Sailboat: () => Sailboat,
      Salad: () => Salad,
      Sandwich: () => Sandwich,
      Satellite: () => Satellite,
      SatelliteDish: () => SatelliteDish,
      Save: () => Save,
      SaveAll: () => SaveAll,
      Scale: () => Scale,
      Scale3D: () => Scale3d,
      Scale3d: () => Scale3d,
      Scaling: () => Scaling,
      Scan: () => Scan,
      ScanBarcode: () => ScanBarcode,
      ScanEye: () => ScanEye,
      ScanFace: () => ScanFace,
      ScanLine: () => ScanLine,
      ScanSearch: () => ScanSearch,
      ScanText: () => ScanText,
      ScatterChart: () => ScatterChart,
      School: () => School,
      School2: () => School2,
      Scissors: () => Scissors,
      ScissorsLineDashed: () => ScissorsLineDashed,
      ScissorsSquare: () => ScissorsSquare,
      ScissorsSquareDashedBottom: () => ScissorsSquareDashedBottom,
      ScreenShare: () => ScreenShare,
      ScreenShareOff: () => ScreenShareOff,
      Scroll: () => Scroll,
      ScrollText: () => ScrollText,
      Search: () => Search,
      SearchCheck: () => SearchCheck,
      SearchCode: () => SearchCode,
      SearchSlash: () => SearchSlash,
      SearchX: () => SearchX,
      Send: () => Send,
      SendHorizonal: () => SendHorizontal,
      SendHorizontal: () => SendHorizontal,
      SendToBack: () => SendToBack,
      SeparatorHorizontal: () => SeparatorHorizontal,
      SeparatorVertical: () => SeparatorVertical,
      Server: () => Server,
      ServerCog: () => ServerCog,
      ServerCrash: () => ServerCrash,
      ServerOff: () => ServerOff,
      Settings: () => Settings,
      Settings2: () => Settings2,
      Shapes: () => Shapes,
      Share: () => Share,
      Share2: () => Share2,
      Sheet: () => Sheet,
      Shell: () => Shell,
      Shield: () => Shield,
      ShieldAlert: () => ShieldAlert,
      ShieldBan: () => ShieldBan,
      ShieldCheck: () => ShieldCheck,
      ShieldClose: () => ShieldX,
      ShieldEllipsis: () => ShieldEllipsis,
      ShieldHalf: () => ShieldHalf,
      ShieldMinus: () => ShieldMinus,
      ShieldOff: () => ShieldOff,
      ShieldPlus: () => ShieldPlus,
      ShieldQuestion: () => ShieldQuestion,
      ShieldX: () => ShieldX,
      Ship: () => Ship,
      ShipWheel: () => ShipWheel,
      Shirt: () => Shirt,
      ShoppingBag: () => ShoppingBag,
      ShoppingBasket: () => ShoppingBasket,
      ShoppingCart: () => ShoppingCart,
      Shovel: () => Shovel,
      ShowerHead: () => ShowerHead,
      Shrink: () => Shrink,
      Shrub: () => Shrub,
      Shuffle: () => Shuffle,
      Sidebar: () => PanelLeft,
      SidebarClose: () => PanelLeftClose,
      SidebarOpen: () => PanelLeftOpen,
      Sigma: () => Sigma,
      SigmaSquare: () => SigmaSquare,
      Signal: () => Signal,
      SignalHigh: () => SignalHigh,
      SignalLow: () => SignalLow,
      SignalMedium: () => SignalMedium,
      SignalZero: () => SignalZero,
      Signpost: () => Signpost,
      SignpostBig: () => SignpostBig,
      Siren: () => Siren,
      SkipBack: () => SkipBack,
      SkipForward: () => SkipForward,
      Skull: () => Skull,
      Slack: () => Slack,
      Slash: () => Slash,
      Slice: () => Slice,
      Sliders: () => Sliders,
      SlidersHorizontal: () => SlidersHorizontal,
      Smartphone: () => Smartphone,
      SmartphoneCharging: () => SmartphoneCharging,
      SmartphoneNfc: () => SmartphoneNfc,
      Smile: () => Smile,
      SmilePlus: () => SmilePlus,
      Snail: () => Snail,
      Snowflake: () => Snowflake,
      Sofa: () => Sofa,
      SortAsc: () => ArrowUpNarrowWide,
      SortDesc: () => ArrowDownWideNarrow,
      Soup: () => Soup,
      Space: () => Space,
      Spade: () => Spade,
      Sparkle: () => Sparkle,
      Sparkles: () => Sparkles,
      Speaker: () => Speaker,
      Speech: () => Speech,
      SpellCheck: () => SpellCheck,
      SpellCheck2: () => SpellCheck2,
      Spline: () => Spline,
      Split: () => Split,
      SplitSquareHorizontal: () => SplitSquareHorizontal,
      SplitSquareVertical: () => SplitSquareVertical,
      SprayCan: () => SprayCan,
      Sprout: () => Sprout,
      Square: () => Square,
      SquareAsterisk: () => SquareAsterisk,
      SquareCode: () => SquareCode,
      SquareDashedBottom: () => SquareDashedBottom,
      SquareDashedBottomCode: () => SquareDashedBottomCode,
      SquareDot: () => SquareDot,
      SquareEqual: () => SquareEqual,
      SquareGantt: () => GanttChartSquare,
      SquareKanban: () => KanbanSquare,
      SquareKanbanDashed: () => KanbanSquareDashed,
      SquareSlash: () => SquareSlash,
      SquareStack: () => SquareStack,
      Squirrel: () => Squirrel,
      Stamp: () => Stamp,
      Star: () => Star,
      StarHalf: () => StarHalf,
      StarOff: () => StarOff,
      Stars: () => Sparkles,
      StepBack: () => StepBack,
      StepForward: () => StepForward,
      Stethoscope: () => Stethoscope,
      Sticker: () => Sticker,
      StickyNote: () => StickyNote,
      StopCircle: () => StopCircle,
      Store: () => Store,
      StretchHorizontal: () => StretchHorizontal,
      StretchVertical: () => StretchVertical,
      Strikethrough: () => Strikethrough,
      Subscript: () => Subscript,
      Subtitles: () => Subtitles,
      Sun: () => Sun,
      SunDim: () => SunDim,
      SunMedium: () => SunMedium,
      SunMoon: () => SunMoon,
      SunSnow: () => SunSnow,
      Sunrise: () => Sunrise,
      Sunset: () => Sunset,
      Superscript: () => Superscript,
      SwissFranc: () => SwissFranc,
      SwitchCamera: () => SwitchCamera,
      Sword: () => Sword,
      Swords: () => Swords,
      Syringe: () => Syringe,
      Table: () => Table,
      Table2: () => Table2,
      TableProperties: () => TableProperties,
      Tablet: () => Tablet,
      TabletSmartphone: () => TabletSmartphone,
      Tablets: () => Tablets,
      Tag: () => Tag,
      Tags: () => Tags,
      Tally1: () => Tally1,
      Tally2: () => Tally2,
      Tally3: () => Tally3,
      Tally4: () => Tally4,
      Tally5: () => Tally5,
      Tangent: () => Tangent,
      Target: () => Target,
      Tent: () => Tent,
      TentTree: () => TentTree,
      Terminal: () => Terminal,
      TerminalSquare: () => TerminalSquare,
      TestTube: () => TestTube,
      TestTube2: () => TestTube2,
      TestTubes: () => TestTubes,
      Text: () => Text,
      TextCursor: () => TextCursor,
      TextCursorInput: () => TextCursorInput,
      TextQuote: () => TextQuote,
      TextSelect: () => TextSelect,
      TextSelection: () => TextSelect,
      Theater: () => Theater,
      Thermometer: () => Thermometer,
      ThermometerSnowflake: () => ThermometerSnowflake,
      ThermometerSun: () => ThermometerSun,
      ThumbsDown: () => ThumbsDown,
      ThumbsUp: () => ThumbsUp,
      Ticket: () => Ticket,
      Timer: () => Timer,
      TimerOff: () => TimerOff,
      TimerReset: () => TimerReset,
      ToggleLeft: () => ToggleLeft,
      ToggleRight: () => ToggleRight,
      Tornado: () => Tornado,
      Torus: () => Torus,
      Touchpad: () => Touchpad,
      TouchpadOff: () => TouchpadOff,
      TowerControl: () => TowerControl,
      ToyBrick: () => ToyBrick,
      Tractor: () => Tractor,
      TrafficCone: () => TrafficCone,
      Train: () => TramFront,
      TrainFront: () => TrainFront,
      TrainFrontTunnel: () => TrainFrontTunnel,
      TrainTrack: () => TrainTrack,
      TramFront: () => TramFront,
      Trash: () => Trash,
      Trash2: () => Trash2,
      TreeDeciduous: () => TreeDeciduous,
      TreePine: () => TreePine,
      Trees: () => Trees,
      Trello: () => Trello,
      TrendingDown: () => TrendingDown,
      TrendingUp: () => TrendingUp,
      Triangle: () => Triangle,
      TriangleRight: () => TriangleRight,
      Trophy: () => Trophy,
      Truck: () => Truck,
      Turtle: () => Turtle,
      Tv: () => Tv,
      Tv2: () => Tv2,
      Twitch: () => Twitch,
      Twitter: () => Twitter,
      Type: () => Type,
      Umbrella: () => Umbrella,
      UmbrellaOff: () => UmbrellaOff,
      Underline: () => Underline,
      Undo: () => Undo,
      Undo2: () => Undo2,
      UndoDot: () => UndoDot,
      UnfoldHorizontal: () => UnfoldHorizontal,
      UnfoldVertical: () => UnfoldVertical,
      Ungroup: () => Ungroup,
      Unlink: () => Unlink,
      Unlink2: () => Unlink2,
      Unlock: () => Unlock,
      UnlockKeyhole: () => UnlockKeyhole,
      Unplug: () => Unplug,
      Upload: () => Upload,
      UploadCloud: () => UploadCloud,
      Usb: () => Usb,
      User: () => User,
      User2: () => User2,
      UserCheck: () => UserCheck,
      UserCheck2: () => UserCheck2,
      UserCircle: () => UserCircle,
      UserCircle2: () => UserCircle2,
      UserCog: () => UserCog,
      UserCog2: () => UserCog2,
      UserMinus: () => UserMinus,
      UserMinus2: () => UserMinus2,
      UserPlus: () => UserPlus,
      UserPlus2: () => UserPlus2,
      UserSquare: () => UserSquare,
      UserSquare2: () => UserSquare2,
      UserX: () => UserX,
      UserX2: () => UserX2,
      Users: () => Users,
      Users2: () => Users2,
      Utensils: () => Utensils,
      UtensilsCrossed: () => UtensilsCrossed,
      UtilityPole: () => UtilityPole,
      Variable: () => Variable,
      Vegan: () => Vegan,
      VenetianMask: () => VenetianMask,
      Verified: () => BadgeCheck,
      Vibrate: () => Vibrate,
      VibrateOff: () => VibrateOff,
      Video: () => Video,
      VideoOff: () => VideoOff,
      Videotape: () => Videotape,
      View: () => View,
      Voicemail: () => Voicemail,
      Volume: () => Volume,
      Volume1: () => Volume1,
      Volume2: () => Volume2,
      VolumeX: () => VolumeX,
      Vote: () => Vote,
      Wallet: () => Wallet,
      Wallet2: () => Wallet2,
      WalletCards: () => WalletCards,
      Wallpaper: () => Wallpaper,
      Wand: () => Wand,
      Wand2: () => Wand2,
      Warehouse: () => Warehouse,
      Watch: () => Watch,
      Waves: () => Waves,
      Waypoints: () => Waypoints,
      Webcam: () => Webcam,
      Webhook: () => Webhook,
      Weight: () => Weight,
      Wheat: () => Wheat,
      WheatOff: () => WheatOff,
      WholeWord: () => WholeWord,
      Wifi: () => Wifi,
      WifiOff: () => WifiOff,
      Wind: () => Wind,
      Wine: () => Wine,
      WineOff: () => WineOff,
      Workflow: () => Workflow,
      WrapText: () => WrapText,
      Wrench: () => Wrench,
      X: () => X,
      XCircle: () => XCircle,
      XOctagon: () => XOctagon,
      XSquare: () => XSquare,
      Youtube: () => Youtube,
      Zap: () => Zap,
      ZapOff: () => ZapOff,
      ZoomIn: () => ZoomIn,
      ZoomOut: () => ZoomOut
    });
    var defaultAttributes = {
      xmlns: "http://www.w3.org/2000/svg",
      width: 24,
      height: 24,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-width": 2,
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    };
    var Accessibility = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "16", cy: "4", r: "1" }],
        ["path", { d: "m18 19 1-7-6 1" }],
        ["path", { d: "m5 8 3-3 5.5 3-2.36 3.5" }],
        ["path", { d: "M4.24 14.5a5 5 0 0 0 6.88 6" }],
        ["path", { d: "M13.76 17.5a5 5 0 0 0-6.88-6" }]
      ]
    ];
    var ActivitySquare = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
        ["path", { d: "M17 12h-2l-2 5-2-10-2 5H7" }]
      ]
    ];
    var Activity = [
      "svg",
      defaultAttributes,
      [["path", { d: "M22 12h-4l-3 9L9 3l-3 9H2" }]]
    ];
    var AirVent = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M6 12H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"
          }
        ],
        ["path", { d: "M6 8h12" }],
        [
          "path",
          { d: "M18.3 17.7a2.5 2.5 0 0 1-3.16 3.83 2.53 2.53 0 0 1-1.14-2V12" }
        ],
        ["path", { d: "M6.6 15.6A2 2 0 1 0 10 17v-5" }]
      ]
    ];
    var Airplay = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"
          }
        ],
        ["polygon", { points: "12 15 17 21 7 21 12 15" }]
      ]
    ];
    var AlarmCheck = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "12", cy: "13", r: "8" }],
        ["path", { d: "M5 3 2 6" }],
        ["path", { d: "m22 6-3-3" }],
        ["path", { d: "M6.38 18.7 4 21" }],
        ["path", { d: "M17.64 18.67 20 21" }],
        ["path", { d: "m9 13 2 2 4-4" }]
      ]
    ];
    var AlarmClockOff = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M6.87 6.87a8 8 0 1 0 11.26 11.26" }],
        ["path", { d: "M19.9 14.25a8 8 0 0 0-9.15-9.15" }],
        ["path", { d: "m22 6-3-3" }],
        ["path", { d: "M6.26 18.67 4 21" }],
        ["path", { d: "m2 2 20 20" }],
        ["path", { d: "M4 4 2 6" }]
      ]
    ];
    var AlarmClock = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "12", cy: "13", r: "8" }],
        ["path", { d: "M12 9v4l2 2" }],
        ["path", { d: "M5 3 2 6" }],
        ["path", { d: "m22 6-3-3" }],
        ["path", { d: "M6.38 18.7 4 21" }],
        ["path", { d: "M17.64 18.67 20 21" }]
      ]
    ];
    var AlarmMinus = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "12", cy: "13", r: "8" }],
        ["path", { d: "M5 3 2 6" }],
        ["path", { d: "m22 6-3-3" }],
        ["path", { d: "M6.38 18.7 4 21" }],
        ["path", { d: "M17.64 18.67 20 21" }],
        ["path", { d: "M9 13h6" }]
      ]
    ];
    var AlarmPlus = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "12", cy: "13", r: "8" }],
        ["path", { d: "M5 3 2 6" }],
        ["path", { d: "m22 6-3-3" }],
        ["path", { d: "M6.38 18.7 4 21" }],
        ["path", { d: "M17.64 18.67 20 21" }],
        ["path", { d: "M12 10v6" }],
        ["path", { d: "M9 13h6" }]
      ]
    ];
    var Album = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2" }],
        ["polyline", { points: "11 3 11 11 14 8 17 11 17 3" }]
      ]
    ];
    var AlertCircle = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "12", cy: "12", r: "10" }],
        ["line", { x1: "12", x2: "12", y1: "8", y2: "12" }],
        ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16" }]
      ]
    ];
    var AlertOctagon = [
      "svg",
      defaultAttributes,
      [
        [
          "polygon",
          {
            points: "7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"
          }
        ],
        ["line", { x1: "12", x2: "12", y1: "8", y2: "12" }],
        ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16" }]
      ]
    ];
    var AlertTriangle = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"
          }
        ],
        ["path", { d: "M12 9v4" }],
        ["path", { d: "M12 17h.01" }]
      ]
    ];
    var AlignCenterHorizontal = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M2 12h20" }],
        ["path", { d: "M10 16v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4" }],
        ["path", { d: "M10 8V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v4" }],
        ["path", { d: "M20 16v1a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-1" }],
        ["path", { d: "M14 8V7c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v1" }]
      ]
    ];
    var AlignCenterVertical = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M12 2v20" }],
        ["path", { d: "M8 10H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h4" }],
        ["path", { d: "M16 10h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-4" }],
        ["path", { d: "M8 20H7a2 2 0 0 1-2-2v-2c0-1.1.9-2 2-2h1" }],
        ["path", { d: "M16 14h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1" }]
      ]
    ];
    var AlignCenter = [
      "svg",
      defaultAttributes,
      [
        ["line", { x1: "21", x2: "3", y1: "6", y2: "6" }],
        ["line", { x1: "17", x2: "7", y1: "12", y2: "12" }],
        ["line", { x1: "19", x2: "5", y1: "18", y2: "18" }]
      ]
    ];
    var AlignEndHorizontal = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "6", height: "16", x: "4", y: "2", rx: "2" }],
        ["rect", { width: "6", height: "9", x: "14", y: "9", rx: "2" }],
        ["path", { d: "M22 22H2" }]
      ]
    ];
    var AlignEndVertical = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "16", height: "6", x: "2", y: "4", rx: "2" }],
        ["rect", { width: "9", height: "6", x: "9", y: "14", rx: "2" }],
        ["path", { d: "M22 22V2" }]
      ]
    ];
    var AlignHorizontalDistributeCenter = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "6", height: "14", x: "4", y: "5", rx: "2" }],
        ["rect", { width: "6", height: "10", x: "14", y: "7", rx: "2" }],
        ["path", { d: "M17 22v-5" }],
        ["path", { d: "M17 7V2" }],
        ["path", { d: "M7 22v-3" }],
        ["path", { d: "M7 5V2" }]
      ]
    ];
    var AlignHorizontalDistributeEnd = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "6", height: "14", x: "4", y: "5", rx: "2" }],
        ["rect", { width: "6", height: "10", x: "14", y: "7", rx: "2" }],
        ["path", { d: "M10 2v20" }],
        ["path", { d: "M20 2v20" }]
      ]
    ];
    var AlignHorizontalDistributeStart = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "6", height: "14", x: "4", y: "5", rx: "2" }],
        ["rect", { width: "6", height: "10", x: "14", y: "7", rx: "2" }],
        ["path", { d: "M4 2v20" }],
        ["path", { d: "M14 2v20" }]
      ]
    ];
    var AlignHorizontalJustifyCenter = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "6", height: "14", x: "2", y: "5", rx: "2" }],
        ["rect", { width: "6", height: "10", x: "16", y: "7", rx: "2" }],
        ["path", { d: "M12 2v20" }]
      ]
    ];
    var AlignHorizontalJustifyEnd = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "6", height: "14", x: "2", y: "5", rx: "2" }],
        ["rect", { width: "6", height: "10", x: "12", y: "7", rx: "2" }],
        ["path", { d: "M22 2v20" }]
      ]
    ];
    var AlignHorizontalJustifyStart = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "6", height: "14", x: "6", y: "5", rx: "2" }],
        ["rect", { width: "6", height: "10", x: "16", y: "7", rx: "2" }],
        ["path", { d: "M2 2v20" }]
      ]
    ];
    var AlignHorizontalSpaceAround = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "6", height: "10", x: "9", y: "7", rx: "2" }],
        ["path", { d: "M4 22V2" }],
        ["path", { d: "M20 22V2" }]
      ]
    ];
    var AlignHorizontalSpaceBetween = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "6", height: "14", x: "3", y: "5", rx: "2" }],
        ["rect", { width: "6", height: "10", x: "15", y: "7", rx: "2" }],
        ["path", { d: "M3 2v20" }],
        ["path", { d: "M21 2v20" }]
      ]
    ];
    var AlignJustify = [
      "svg",
      defaultAttributes,
      [
        ["line", { x1: "3", x2: "21", y1: "6", y2: "6" }],
        ["line", { x1: "3", x2: "21", y1: "12", y2: "12" }],
        ["line", { x1: "3", x2: "21", y1: "18", y2: "18" }]
      ]
    ];
    var AlignLeft = [
      "svg",
      defaultAttributes,
      [
        ["line", { x1: "21", x2: "3", y1: "6", y2: "6" }],
        ["line", { x1: "15", x2: "3", y1: "12", y2: "12" }],
        ["line", { x1: "17", x2: "3", y1: "18", y2: "18" }]
      ]
    ];
    var AlignRight = [
      "svg",
      defaultAttributes,
      [
        ["line", { x1: "21", x2: "3", y1: "6", y2: "6" }],
        ["line", { x1: "21", x2: "9", y1: "12", y2: "12" }],
        ["line", { x1: "21", x2: "7", y1: "18", y2: "18" }]
      ]
    ];
    var AlignStartHorizontal = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "6", height: "16", x: "4", y: "6", rx: "2" }],
        ["rect", { width: "6", height: "9", x: "14", y: "6", rx: "2" }],
        ["path", { d: "M22 2H2" }]
      ]
    ];
    var AlignStartVertical = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "9", height: "6", x: "6", y: "14", rx: "2" }],
        ["rect", { width: "16", height: "6", x: "6", y: "4", rx: "2" }],
        ["path", { d: "M2 2v20" }]
      ]
    ];
    var AlignVerticalDistributeCenter = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "14", height: "6", x: "5", y: "14", rx: "2" }],
        ["rect", { width: "10", height: "6", x: "7", y: "4", rx: "2" }],
        ["path", { d: "M22 7h-5" }],
        ["path", { d: "M7 7H1" }],
        ["path", { d: "M22 17h-3" }],
        ["path", { d: "M5 17H2" }]
      ]
    ];
    var AlignVerticalDistributeEnd = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "14", height: "6", x: "5", y: "14", rx: "2" }],
        ["rect", { width: "10", height: "6", x: "7", y: "4", rx: "2" }],
        ["path", { d: "M2 20h20" }],
        ["path", { d: "M2 10h20" }]
      ]
    ];
    var AlignVerticalDistributeStart = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "14", height: "6", x: "5", y: "14", rx: "2" }],
        ["rect", { width: "10", height: "6", x: "7", y: "4", rx: "2" }],
        ["path", { d: "M2 14h20" }],
        ["path", { d: "M2 4h20" }]
      ]
    ];
    var AlignVerticalJustifyCenter = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "14", height: "6", x: "5", y: "16", rx: "2" }],
        ["rect", { width: "10", height: "6", x: "7", y: "2", rx: "2" }],
        ["path", { d: "M2 12h20" }]
      ]
    ];
    var AlignVerticalJustifyEnd = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "14", height: "6", x: "5", y: "12", rx: "2" }],
        ["rect", { width: "10", height: "6", x: "7", y: "2", rx: "2" }],
        ["path", { d: "M2 22h20" }]
      ]
    ];
    var AlignVerticalJustifyStart = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "14", height: "6", x: "5", y: "16", rx: "2" }],
        ["rect", { width: "10", height: "6", x: "7", y: "6", rx: "2" }],
        ["path", { d: "M2 2h20" }]
      ]
    ];
    var AlignVerticalSpaceAround = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "10", height: "6", x: "7", y: "9", rx: "2" }],
        ["path", { d: "M22 20H2" }],
        ["path", { d: "M22 4H2" }]
      ]
    ];
    var AlignVerticalSpaceBetween = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "14", height: "6", x: "5", y: "15", rx: "2" }],
        ["rect", { width: "10", height: "6", x: "7", y: "3", rx: "2" }],
        ["path", { d: "M2 21h20" }],
        ["path", { d: "M2 3h20" }]
      ]
    ];
    var Ampersand = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M17.5 12c0 4.4-3.6 8-8 8A4.5 4.5 0 0 1 5 15.5c0-6 8-4 8-8.5a3 3 0 1 0-6 0c0 3 2.5 8.5 12 13"
          }
        ],
        ["path", { d: "M16 12h3" }]
      ]
    ];
    var Ampersands = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M10 17c-5-3-7-7-7-9a2 2 0 0 1 4 0c0 2.5-5 2.5-5 6 0 1.7 1.3 3 3 3 2.8 0 5-2.2 5-5"
          }
        ],
        [
          "path",
          {
            d: "M22 17c-5-3-7-7-7-9a2 2 0 0 1 4 0c0 2.5-5 2.5-5 6 0 1.7 1.3 3 3 3 2.8 0 5-2.2 5-5"
          }
        ]
      ]
    ];
    var Anchor = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "12", cy: "5", r: "3" }],
        ["line", { x1: "12", x2: "12", y1: "22", y2: "8" }],
        ["path", { d: "M5 12H2a10 10 0 0 0 20 0h-3" }]
      ]
    ];
    var Angry = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "12", cy: "12", r: "10" }],
        ["path", { d: "M16 16s-1.5-2-4-2-4 2-4 2" }],
        ["path", { d: "M7.5 8 10 9" }],
        ["path", { d: "m14 9 2.5-1" }],
        ["path", { d: "M9 10h0" }],
        ["path", { d: "M15 10h0" }]
      ]
    ];
    var Annoyed = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "12", cy: "12", r: "10" }],
        ["path", { d: "M8 15h8" }],
        ["path", { d: "M8 9h2" }],
        ["path", { d: "M14 9h2" }]
      ]
    ];
    var Antenna = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M2 12 7 2" }],
        ["path", { d: "m7 12 5-10" }],
        ["path", { d: "m12 12 5-10" }],
        ["path", { d: "m17 12 5-10" }],
        ["path", { d: "M4.5 7h15" }],
        ["path", { d: "M12 16v6" }]
      ]
    ];
    var Aperture = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "12", cy: "12", r: "10" }],
        ["line", { x1: "14.31", x2: "20.05", y1: "8", y2: "17.94" }],
        ["line", { x1: "9.69", x2: "21.17", y1: "8", y2: "8" }],
        ["line", { x1: "7.38", x2: "13.12", y1: "12", y2: "2.06" }],
        ["line", { x1: "9.69", x2: "3.95", y1: "16", y2: "6.06" }],
        ["line", { x1: "14.31", x2: "2.83", y1: "16", y2: "16" }],
        ["line", { x1: "16.62", x2: "10.88", y1: "12", y2: "21.94" }]
      ]
    ];
    var AppWindow = [
      "svg",
      defaultAttributes,
      [
        ["rect", { x: "2", y: "4", width: "20", height: "16", rx: "2" }],
        ["path", { d: "M10 4v4" }],
        ["path", { d: "M2 8h20" }],
        ["path", { d: "M6 4v4" }]
      ]
    ];
    var Apple = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"
          }
        ],
        ["path", { d: "M10 2c1 .5 2 2 2 5" }]
      ]
    ];
    var ArchiveRestore = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "20", height: "5", x: "2", y: "3", rx: "1" }],
        ["path", { d: "M4 8v11a2 2 0 0 0 2 2h2" }],
        ["path", { d: "M20 8v11a2 2 0 0 1-2 2h-2" }],
        ["path", { d: "m9 15 3-3 3 3" }],
        ["path", { d: "M12 12v9" }]
      ]
    ];
    var ArchiveX = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "20", height: "5", x: "2", y: "3", rx: "1" }],
        ["path", { d: "M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8" }],
        ["path", { d: "m9.5 17 5-5" }],
        ["path", { d: "m9.5 12 5 5" }]
      ]
    ];
    var Archive = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "20", height: "5", x: "2", y: "3", rx: "1" }],
        ["path", { d: "M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8" }],
        ["path", { d: "M10 12h4" }]
      ]
    ];
    var AreaChart = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M3 3v18h18" }],
        ["path", { d: "M7 12v5h12V8l-5 5-4-4Z" }]
      ]
    ];
    var Armchair = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3" }],
        [
          "path",
          {
            d: "M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v2H7v-2a2 2 0 0 0-4 0Z"
          }
        ],
        ["path", { d: "M5 18v2" }],
        ["path", { d: "M19 18v2" }]
      ]
    ];
    var ArrowBigDownDash = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M15 5H9" }],
        ["path", { d: "M15 9v3h4l-7 7-7-7h4V9h6z" }]
      ]
    ];
    var ArrowBigDown = [
      "svg",
      defaultAttributes,
      [["path", { d: "M15 6v6h4l-7 7-7-7h4V6h6z" }]]
    ];
    var ArrowBigLeftDash = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M19 15V9" }],
        ["path", { d: "M15 15h-3v4l-7-7 7-7v4h3v6z" }]
      ]
    ];
    var ArrowBigLeft = [
      "svg",
      defaultAttributes,
      [["path", { d: "M18 15h-6v4l-7-7 7-7v4h6v6z" }]]
    ];
    var ArrowBigRightDash = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M5 9v6" }],
        ["path", { d: "M9 9h3V5l7 7-7 7v-4H9V9z" }]
      ]
    ];
    var ArrowBigRight = [
      "svg",
      defaultAttributes,
      [["path", { d: "M6 9h6V5l7 7-7 7v-4H6V9z" }]]
    ];
    var ArrowBigUpDash = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M9 19h6" }],
        ["path", { d: "M9 15v-3H5l7-7 7 7h-4v3H9z" }]
      ]
    ];
    var ArrowBigUp = [
      "svg",
      defaultAttributes,
      [["path", { d: "M9 18v-6H5l7-7 7 7h-4v6H9z" }]]
    ];
    var ArrowDown01 = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "m3 16 4 4 4-4" }],
        ["path", { d: "M7 20V4" }],
        ["rect", { x: "15", y: "4", width: "4", height: "6", ry: "2" }],
        ["path", { d: "M17 20v-6h-2" }],
        ["path", { d: "M15 20h4" }]
      ]
    ];
    var ArrowDown10 = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "m3 16 4 4 4-4" }],
        ["path", { d: "M7 20V4" }],
        ["path", { d: "M17 10V4h-2" }],
        ["path", { d: "M15 10h4" }],
        ["rect", { x: "15", y: "14", width: "4", height: "6", ry: "2" }]
      ]
    ];
    var ArrowDownAZ = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "m3 16 4 4 4-4" }],
        ["path", { d: "M7 20V4" }],
        ["path", { d: "M20 8h-5" }],
        ["path", { d: "M15 10V6.5a2.5 2.5 0 0 1 5 0V10" }],
        ["path", { d: "M15 14h5l-5 6h5" }]
      ]
    ];
    var ArrowDownCircle = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "12", cy: "12", r: "10" }],
        ["path", { d: "M12 8v8" }],
        ["path", { d: "m8 12 4 4 4-4" }]
      ]
    ];
    var ArrowDownFromLine = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M19 3H5" }],
        ["path", { d: "M12 21V7" }],
        ["path", { d: "m6 15 6 6 6-6" }]
      ]
    ];
    var ArrowDownLeftFromCircle = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M2 12a10 10 0 1 1 10 10" }],
        ["path", { d: "m2 22 10-10" }],
        ["path", { d: "M8 22H2v-6" }]
      ]
    ];
    var ArrowDownLeftSquare = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
        ["path", { d: "m16 8-8 8" }],
        ["path", { d: "M16 16H8V8" }]
      ]
    ];
    var ArrowDownLeft = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M17 7 7 17" }],
        ["path", { d: "M17 17H7V7" }]
      ]
    ];
    var ArrowDownNarrowWide = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "m3 16 4 4 4-4" }],
        ["path", { d: "M7 20V4" }],
        ["path", { d: "M11 4h4" }],
        ["path", { d: "M11 8h7" }],
        ["path", { d: "M11 12h10" }]
      ]
    ];
    var ArrowDownRightFromCircle = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M12 22a10 10 0 1 1 10-10" }],
        ["path", { d: "M22 22 12 12" }],
        ["path", { d: "M22 16v6h-6" }]
      ]
    ];
    var ArrowDownRightSquare = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
        ["path", { d: "m8 8 8 8" }],
        ["path", { d: "M16 8v8H8" }]
      ]
    ];
    var ArrowDownRight = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "m7 7 10 10" }],
        ["path", { d: "M17 7v10H7" }]
      ]
    ];
    var ArrowDownSquare = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
        ["path", { d: "M12 8v8" }],
        ["path", { d: "m8 12 4 4 4-4" }]
      ]
    ];
    var ArrowDownToDot = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M12 2v14" }],
        ["path", { d: "m19 9-7 7-7-7" }],
        ["circle", { cx: "12", cy: "21", r: "1" }]
      ]
    ];
    var ArrowDownToLine = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M12 17V3" }],
        ["path", { d: "m6 11 6 6 6-6" }],
        ["path", { d: "M19 21H5" }]
      ]
    ];
    var ArrowDownUp = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "m3 16 4 4 4-4" }],
        ["path", { d: "M7 20V4" }],
        ["path", { d: "m21 8-4-4-4 4" }],
        ["path", { d: "M17 4v16" }]
      ]
    ];
    var ArrowDownWideNarrow = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "m3 16 4 4 4-4" }],
        ["path", { d: "M7 20V4" }],
        ["path", { d: "M11 4h10" }],
        ["path", { d: "M11 8h7" }],
        ["path", { d: "M11 12h4" }]
      ]
    ];
    var ArrowDownZA = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "m3 16 4 4 4-4" }],
        ["path", { d: "M7 4v16" }],
        ["path", { d: "M15 4h5l-5 6h5" }],
        ["path", { d: "M15 20v-3.5a2.5 2.5 0 0 1 5 0V20" }],
        ["path", { d: "M20 18h-5" }]
      ]
    ];
    var ArrowDown = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M12 5v14" }],
        ["path", { d: "m19 12-7 7-7-7" }]
      ]
    ];
    var ArrowLeftCircle = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "12", cy: "12", r: "10" }],
        ["path", { d: "M16 12H8" }],
        ["path", { d: "m12 8-4 4 4 4" }]
      ]
    ];
    var ArrowLeftFromLine = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "m9 6-6 6 6 6" }],
        ["path", { d: "M3 12h14" }],
        ["path", { d: "M21 19V5" }]
      ]
    ];
    var ArrowLeftRight = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M8 3 4 7l4 4" }],
        ["path", { d: "M4 7h16" }],
        ["path", { d: "m16 21 4-4-4-4" }],
        ["path", { d: "M20 17H4" }]
      ]
    ];
    var ArrowLeftSquare = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
        ["path", { d: "m12 8-4 4 4 4" }],
        ["path", { d: "M16 12H8" }]
      ]
    ];
    var ArrowLeftToLine = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M3 19V5" }],
        ["path", { d: "m13 6-6 6 6 6" }],
        ["path", { d: "M7 12h14" }]
      ]
    ];
    var ArrowLeft = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "m12 19-7-7 7-7" }],
        ["path", { d: "M19 12H5" }]
      ]
    ];
    var ArrowRightCircle = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "12", cy: "12", r: "10" }],
        ["path", { d: "M8 12h8" }],
        ["path", { d: "m12 16 4-4-4-4" }]
      ]
    ];
    var ArrowRightFromLine = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M3 5v14" }],
        ["path", { d: "M21 12H7" }],
        ["path", { d: "m15 18 6-6-6-6" }]
      ]
    ];
    var ArrowRightLeft = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "m16 3 4 4-4 4" }],
        ["path", { d: "M20 7H4" }],
        ["path", { d: "m8 21-4-4 4-4" }],
        ["path", { d: "M4 17h16" }]
      ]
    ];
    var ArrowRightSquare = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
        ["path", { d: "M8 12h8" }],
        ["path", { d: "m12 16 4-4-4-4" }]
      ]
    ];
    var ArrowRightToLine = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M17 12H3" }],
        ["path", { d: "m11 18 6-6-6-6" }],
        ["path", { d: "M21 5v14" }]
      ]
    ];
    var ArrowRight = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M5 12h14" }],
        ["path", { d: "m12 5 7 7-7 7" }]
      ]
    ];
    var ArrowUp01 = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "m3 8 4-4 4 4" }],
        ["path", { d: "M7 4v16" }],
        ["rect", { x: "15", y: "4", width: "4", height: "6", ry: "2" }],
        ["path", { d: "M17 20v-6h-2" }],
        ["path", { d: "M15 20h4" }]
      ]
    ];
    var ArrowUp10 = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "m3 8 4-4 4 4" }],
        ["path", { d: "M7 4v16" }],
        ["path", { d: "M17 10V4h-2" }],
        ["path", { d: "M15 10h4" }],
        ["rect", { x: "15", y: "14", width: "4", height: "6", ry: "2" }]
      ]
    ];
    var ArrowUpAZ = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "m3 8 4-4 4 4" }],
        ["path", { d: "M7 4v16" }],
        ["path", { d: "M20 8h-5" }],
        ["path", { d: "M15 10V6.5a2.5 2.5 0 0 1 5 0V10" }],
        ["path", { d: "M15 14h5l-5 6h5" }]
      ]
    ];
    var ArrowUpCircle = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "12", cy: "12", r: "10" }],
        ["path", { d: "m16 12-4-4-4 4" }],
        ["path", { d: "M12 16V8" }]
      ]
    ];
    var ArrowUpDown = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "m21 16-4 4-4-4" }],
        ["path", { d: "M17 20V4" }],
        ["path", { d: "m3 8 4-4 4 4" }],
        ["path", { d: "M7 4v16" }]
      ]
    ];
    var ArrowUpFromDot = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "m5 9 7-7 7 7" }],
        ["path", { d: "M12 16V2" }],
        ["circle", { cx: "12", cy: "21", r: "1" }]
      ]
    ];
    var ArrowUpFromLine = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "m18 9-6-6-6 6" }],
        ["path", { d: "M12 3v14" }],
        ["path", { d: "M5 21h14" }]
      ]
    ];
    var ArrowUpLeftFromCircle = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M2 8V2h6" }],
        ["path", { d: "m2 2 10 10" }],
        ["path", { d: "M12 2A10 10 0 1 1 2 12" }]
      ]
    ];
    var ArrowUpLeftSquare = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
        ["path", { d: "M8 16V8h8" }],
        ["path", { d: "M16 16 8 8" }]
      ]
    ];
    var ArrowUpLeft = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M7 17V7h10" }],
        ["path", { d: "M17 17 7 7" }]
      ]
    ];
    var ArrowUpNarrowWide = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "m3 8 4-4 4 4" }],
        ["path", { d: "M7 4v16" }],
        ["path", { d: "M11 12h4" }],
        ["path", { d: "M11 16h7" }],
        ["path", { d: "M11 20h10" }]
      ]
    ];
    var ArrowUpRightFromCircle = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M22 12A10 10 0 1 1 12 2" }],
        ["path", { d: "M22 2 12 12" }],
        ["path", { d: "M16 2h6v6" }]
      ]
    ];
    var ArrowUpRightSquare = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
        ["path", { d: "M8 8h8v8" }],
        ["path", { d: "m8 16 8-8" }]
      ]
    ];
    var ArrowUpRight = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M7 7h10v10" }],
        ["path", { d: "M7 17 17 7" }]
      ]
    ];
    var ArrowUpSquare = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
        ["path", { d: "m16 12-4-4-4 4" }],
        ["path", { d: "M12 16V8" }]
      ]
    ];
    var ArrowUpToLine = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M5 3h14" }],
        ["path", { d: "m18 13-6-6-6 6" }],
        ["path", { d: "M12 7v14" }]
      ]
    ];
    var ArrowUpWideNarrow = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "m3 8 4-4 4 4" }],
        ["path", { d: "M7 4v16" }],
        ["path", { d: "M11 12h10" }],
        ["path", { d: "M11 16h7" }],
        ["path", { d: "M11 20h4" }]
      ]
    ];
    var ArrowUpZA = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "m3 8 4-4 4 4" }],
        ["path", { d: "M7 4v16" }],
        ["path", { d: "M15 4h5l-5 6h5" }],
        ["path", { d: "M15 20v-3.5a2.5 2.5 0 0 1 5 0V20" }],
        ["path", { d: "M20 18h-5" }]
      ]
    ];
    var ArrowUp = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "m5 12 7-7 7 7" }],
        ["path", { d: "M12 19V5" }]
      ]
    ];
    var ArrowsUpFromLine = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "m4 6 3-3 3 3" }],
        ["path", { d: "M7 17V3" }],
        ["path", { d: "m14 6 3-3 3 3" }],
        ["path", { d: "M17 17V3" }],
        ["path", { d: "M4 21h16" }]
      ]
    ];
    var Asterisk = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M12 6v12" }],
        ["path", { d: "M17.196 9 6.804 15" }],
        ["path", { d: "m6.804 9 10.392 6" }]
      ]
    ];
    var AtSign = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "12", cy: "12", r: "4" }],
        ["path", { d: "M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8" }]
      ]
    ];
    var Atom = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "12", cy: "12", r: "1" }],
        [
          "path",
          {
            d: "M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z"
          }
        ],
        [
          "path",
          {
            d: "M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z"
          }
        ]
      ]
    ];
    var Award = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "12", cy: "8", r: "6" }],
        ["path", { d: "M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" }]
      ]
    ];
    var Axe = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "m14 12-8.5 8.5a2.12 2.12 0 1 1-3-3L11 9" }],
        ["path", { d: "M15 13 9 7l4-4 6 6h3a8 8 0 0 1-7 7z" }]
      ]
    ];
    var Axis3d = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M4 4v16h16" }],
        ["path", { d: "m4 20 7-7" }]
      ]
    ];
    var Baby = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M9 12h.01" }],
        ["path", { d: "M15 12h.01" }],
        ["path", { d: "M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5" }],
        [
          "path",
          {
            d: "M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1"
          }
        ]
      ]
    ];
    var Backpack = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M4 10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z"
          }
        ],
        ["path", { d: "M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" }],
        ["path", { d: "M8 21v-5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v5" }],
        ["path", { d: "M8 10h8" }],
        ["path", { d: "M8 18h8" }]
      ]
    ];
    var BadgeAlert = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
          }
        ],
        ["line", { x1: "12", x2: "12", y1: "8", y2: "12" }],
        ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16" }]
      ]
    ];
    var BadgeCent = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
          }
        ],
        ["path", { d: "M12 7v10" }],
        ["path", { d: "M15.4 10a4 4 0 1 0 0 4" }]
      ]
    ];
    var BadgeCheck = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
          }
        ],
        ["path", { d: "m9 12 2 2 4-4" }]
      ]
    ];
    var BadgeDollarSign = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
          }
        ],
        ["path", { d: "M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" }],
        ["path", { d: "M12 18V6" }]
      ]
    ];
    var BadgeEuro = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
          }
        ],
        ["path", { d: "M7 12h5" }],
        ["path", { d: "M15 9.4a4 4 0 1 0 0 5.2" }]
      ]
    ];
    var BadgeHelp = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
          }
        ],
        ["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" }],
        ["line", { x1: "12", x2: "12.01", y1: "17", y2: "17" }]
      ]
    ];
    var BadgeIndianRupee = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
          }
        ],
        ["path", { d: "M8 8h8" }],
        ["path", { d: "M8 12h8" }],
        ["path", { d: "m13 17-5-1h1a4 4 0 0 0 0-8" }]
      ]
    ];
    var BadgeInfo = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
          }
        ],
        ["line", { x1: "12", x2: "12", y1: "16", y2: "12" }],
        ["line", { x1: "12", x2: "12.01", y1: "8", y2: "8" }]
      ]
    ];
    var BadgeJapaneseYen = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
          }
        ],
        ["path", { d: "m9 8 3 3v7" }],
        ["path", { d: "m12 11 3-3" }],
        ["path", { d: "M9 12h6" }],
        ["path", { d: "M9 16h6" }]
      ]
    ];
    var BadgeMinus = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
          }
        ],
        ["line", { x1: "8", x2: "16", y1: "12", y2: "12" }]
      ]
    ];
    var BadgePercent = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
          }
        ],
        ["path", { d: "m15 9-6 6" }],
        ["path", { d: "M9 9h.01" }],
        ["path", { d: "M15 15h.01" }]
      ]
    ];
    var BadgePlus = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
          }
        ],
        ["line", { x1: "12", x2: "12", y1: "8", y2: "16" }],
        ["line", { x1: "8", x2: "16", y1: "12", y2: "12" }]
      ]
    ];
    var BadgePoundSterling = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
          }
        ],
        ["path", { d: "M8 12h4" }],
        ["path", { d: "M10 16V9.5a2.5 2.5 0 0 1 5 0" }],
        ["path", { d: "M8 16h7" }]
      ]
    ];
    var BadgeRussianRuble = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
          }
        ],
        ["path", { d: "M9 16h5" }],
        ["path", { d: "M9 12h5a2 2 0 1 0 0-4h-3v9" }]
      ]
    ];
    var BadgeSwissFranc = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
          }
        ],
        ["path", { d: "M11 17V8h4" }],
        ["path", { d: "M11 12h3" }],
        ["path", { d: "M9 16h4" }]
      ]
    ];
    var BadgeX = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
          }
        ],
        ["line", { x1: "15", x2: "9", y1: "9", y2: "15" }],
        ["line", { x1: "9", x2: "15", y1: "9", y2: "15" }]
      ]
    ];
    var Badge = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
          }
        ]
      ]
    ];
    var BaggageClaim = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M22 18H6a2 2 0 0 1-2-2V7a2 2 0 0 0-2-2" }],
        ["path", { d: "M17 14V4a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v10" }],
        ["rect", { width: "13", height: "8", x: "8", y: "6", rx: "1" }],
        ["circle", { cx: "18", cy: "20", r: "2" }],
        ["circle", { cx: "9", cy: "20", r: "2" }]
      ]
    ];
    var Ban = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "12", cy: "12", r: "10" }],
        ["path", { d: "m4.9 4.9 14.2 14.2" }]
      ]
    ];
    var Banana = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M4 13c3.5-2 8-2 10 2a5.5 5.5 0 0 1 8 5" }],
        [
          "path",
          {
            d: "M5.15 17.89c5.52-1.52 8.65-6.89 7-12C11.55 4 11.5 2 13 2c3.22 0 5 5.5 5 8 0 6.5-4.2 12-10.49 12C5.11 22 2 22 2 20c0-1.5 1.14-1.55 3.15-2.11Z"
          }
        ]
      ]
    ];
    var Banknote = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "20", height: "12", x: "2", y: "6", rx: "2" }],
        ["circle", { cx: "12", cy: "12", r: "2" }],
        ["path", { d: "M6 12h.01M18 12h.01" }]
      ]
    ];
    var BarChart2 = [
      "svg",
      defaultAttributes,
      [
        ["line", { x1: "18", x2: "18", y1: "20", y2: "10" }],
        ["line", { x1: "12", x2: "12", y1: "20", y2: "4" }],
        ["line", { x1: "6", x2: "6", y1: "20", y2: "14" }]
      ]
    ];
    var BarChart3 = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M3 3v18h18" }],
        ["path", { d: "M18 17V9" }],
        ["path", { d: "M13 17V5" }],
        ["path", { d: "M8 17v-3" }]
      ]
    ];
    var BarChart4 = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M3 3v18h18" }],
        ["path", { d: "M13 17V9" }],
        ["path", { d: "M18 17V5" }],
        ["path", { d: "M8 17v-3" }]
      ]
    ];
    var BarChartBig = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M3 3v18h18" }],
        ["rect", { width: "4", height: "7", x: "7", y: "10", rx: "1" }],
        ["rect", { width: "4", height: "12", x: "15", y: "5", rx: "1" }]
      ]
    ];
    var BarChartHorizontalBig = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M3 3v18h18" }],
        ["rect", { width: "12", height: "4", x: "7", y: "5", rx: "1" }],
        ["rect", { width: "7", height: "4", x: "7", y: "13", rx: "1" }]
      ]
    ];
    var BarChartHorizontal = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M3 3v18h18" }],
        ["path", { d: "M7 16h8" }],
        ["path", { d: "M7 11h12" }],
        ["path", { d: "M7 6h3" }]
      ]
    ];
    var BarChart = [
      "svg",
      defaultAttributes,
      [
        ["line", { x1: "12", x2: "12", y1: "20", y2: "10" }],
        ["line", { x1: "18", x2: "18", y1: "20", y2: "4" }],
        ["line", { x1: "6", x2: "6", y1: "20", y2: "16" }]
      ]
    ];
    var Barcode = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M3 5v14" }],
        ["path", { d: "M8 5v14" }],
        ["path", { d: "M12 5v14" }],
        ["path", { d: "M17 5v14" }],
        ["path", { d: "M21 5v14" }]
      ]
    ];
    var Baseline = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M4 20h16" }],
        ["path", { d: "m6 16 6-12 6 12" }],
        ["path", { d: "M8 12h8" }]
      ]
    ];
    var Bath = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.683 3 4 3.683 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5"
          }
        ],
        ["line", { x1: "10", x2: "8", y1: "5", y2: "7" }],
        ["line", { x1: "2", x2: "22", y1: "12", y2: "12" }],
        ["line", { x1: "7", x2: "7", y1: "19", y2: "21" }],
        ["line", { x1: "17", x2: "17", y1: "19", y2: "21" }]
      ]
    ];
    var BatteryCharging = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M15 7h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2" }],
        ["path", { d: "M6 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h1" }],
        ["path", { d: "m11 7-3 5h4l-3 5" }],
        ["line", { x1: "22", x2: "22", y1: "11", y2: "13" }]
      ]
    ];
    var BatteryFull = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "16", height: "10", x: "2", y: "7", rx: "2", ry: "2" }],
        ["line", { x1: "22", x2: "22", y1: "11", y2: "13" }],
        ["line", { x1: "6", x2: "6", y1: "11", y2: "13" }],
        ["line", { x1: "10", x2: "10", y1: "11", y2: "13" }],
        ["line", { x1: "14", x2: "14", y1: "11", y2: "13" }]
      ]
    ];
    var BatteryLow = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "16", height: "10", x: "2", y: "7", rx: "2", ry: "2" }],
        ["line", { x1: "22", x2: "22", y1: "11", y2: "13" }],
        ["line", { x1: "6", x2: "6", y1: "11", y2: "13" }]
      ]
    ];
    var BatteryMedium = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "16", height: "10", x: "2", y: "7", rx: "2", ry: "2" }],
        ["line", { x1: "22", x2: "22", y1: "11", y2: "13" }],
        ["line", { x1: "6", x2: "6", y1: "11", y2: "13" }],
        ["line", { x1: "10", x2: "10", y1: "11", y2: "13" }]
      ]
    ];
    var BatteryWarning = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M14 7h2a2 2 0 0 1 2 2v6c0 1-1 2-2 2h-2" }],
        ["path", { d: "M6 7H4a2 2 0 0 0-2 2v6c0 1 1 2 2 2h2" }],
        ["line", { x1: "22", x2: "22", y1: "11", y2: "13" }],
        ["line", { x1: "10", x2: "10", y1: "7", y2: "13" }],
        ["line", { x1: "10", x2: "10", y1: "17", y2: "17.01" }]
      ]
    ];
    var Battery = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "16", height: "10", x: "2", y: "7", rx: "2", ry: "2" }],
        ["line", { x1: "22", x2: "22", y1: "11", y2: "13" }]
      ]
    ];
    var Beaker = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M4.5 3h15" }],
        ["path", { d: "M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3" }],
        ["path", { d: "M6 14h12" }]
      ]
    ];
    var BeanOff = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22a13.96 13.96 0 0 0 9.9-4.1"
          }
        ],
        ["path", { d: "M10.75 5.093A6 6 0 0 1 22 8c0 2.411-.61 4.68-1.683 6.66" }],
        [
          "path",
          {
            d: "M5.341 10.62a4 4 0 0 0 6.487 1.208M10.62 5.341a4.015 4.015 0 0 1 2.039 2.04"
          }
        ],
        ["line", { x1: "2", x2: "22", y1: "2", y2: "22" }]
      ]
    ];
    var Bean = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M10.165 6.598C9.954 7.478 9.64 8.36 9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22c7.732 0 14-6.268 14-14a6 6 0 0 0-11.835-1.402Z"
          }
        ],
        ["path", { d: "M5.341 10.62a4 4 0 1 0 5.279-5.28" }]
      ]
    ];
    var BedDouble = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8" }],
        ["path", { d: "M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4" }],
        ["path", { d: "M12 4v6" }],
        ["path", { d: "M2 18h20" }]
      ]
    ];
    var BedSingle = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M3 20v-8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8" }],
        ["path", { d: "M5 10V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4" }],
        ["path", { d: "M3 18h18" }]
      ]
    ];
    var Bed = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M2 4v16" }],
        ["path", { d: "M2 8h18a2 2 0 0 1 2 2v10" }],
        ["path", { d: "M2 17h20" }],
        ["path", { d: "M6 8v9" }]
      ]
    ];
    var Beef = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "12.5", cy: "8.5", r: "2.5" }],
        [
          "path",
          {
            d: "M12.5 2a6.5 6.5 0 0 0-6.22 4.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3A6.5 6.5 0 0 0 12.5 2Z"
          }
        ],
        [
          "path",
          {
            d: "m18.5 6 2.19 4.5a6.48 6.48 0 0 1 .31 2 6.49 6.49 0 0 1-2.6 5.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5"
          }
        ]
      ]
    ];
    var Beer = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M17 11h1a3 3 0 0 1 0 6h-1" }],
        ["path", { d: "M9 12v6" }],
        ["path", { d: "M13 12v6" }],
        [
          "path",
          {
            d: "M14 7.5c-1 0-1.44.5-3 .5s-2-.5-3-.5-1.72.5-2.5.5a2.5 2.5 0 0 1 0-5c.78 0 1.57.5 2.5.5S9.44 2 11 2s2 1.5 3 1.5 1.72-.5 2.5-.5a2.5 2.5 0 0 1 0 5c-.78 0-1.5-.5-2.5-.5Z"
          }
        ],
        ["path", { d: "M5 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8" }]
      ]
    ];
    var BellDot = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M19.4 14.9C20.2 16.4 21 17 21 17H3s3-2 3-9c0-3.3 2.7-6 6-6 .7 0 1.3.1 1.9.3"
          }
        ],
        ["path", { d: "M10.3 21a1.94 1.94 0 0 0 3.4 0" }],
        ["circle", { cx: "18", cy: "8", r: "3" }]
      ]
    ];
    var BellMinus = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M18.4 12c.8 3.8 2.6 5 2.6 5H3s3-2 3-9c0-3.3 2.7-6 6-6 1.8 0 3.4.8 4.5 2"
          }
        ],
        ["path", { d: "M10.3 21a1.94 1.94 0 0 0 3.4 0" }],
        ["path", { d: "M15 8h6" }]
      ]
    ];
    var BellOff = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M8.7 3A6 6 0 0 1 18 8a21.3 21.3 0 0 0 .6 5" }],
        ["path", { d: "M17 17H3s3-2 3-9a4.67 4.67 0 0 1 .3-1.7" }],
        ["path", { d: "M10.3 21a1.94 1.94 0 0 0 3.4 0" }],
        ["path", { d: "m2 2 20 20" }]
      ]
    ];
    var BellPlus = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M19.3 14.8C20.1 16.4 21 17 21 17H3s3-2 3-9c0-3.3 2.7-6 6-6 1 0 1.9.2 2.8.7"
          }
        ],
        ["path", { d: "M10.3 21a1.94 1.94 0 0 0 3.4 0" }],
        ["path", { d: "M15 8h6" }],
        ["path", { d: "M18 5v6" }]
      ]
    ];
    var BellRing = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" }],
        ["path", { d: "M10.3 21a1.94 1.94 0 0 0 3.4 0" }],
        ["path", { d: "M4 2C2.8 3.7 2 5.7 2 8" }],
        ["path", { d: "M22 8c0-2.3-.8-4.3-2-6" }]
      ]
    ];
    var Bell = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" }],
        ["path", { d: "M10.3 21a1.94 1.94 0 0 0 3.4 0" }]
      ]
    ];
    var Bike = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "18.5", cy: "17.5", r: "3.5" }],
        ["circle", { cx: "5.5", cy: "17.5", r: "3.5" }],
        ["circle", { cx: "15", cy: "5", r: "1" }],
        ["path", { d: "M12 17.5V14l-3-3 4-3 2 3h2" }]
      ]
    ];
    var Binary = [
      "svg",
      defaultAttributes,
      [
        ["rect", { x: "14", y: "14", width: "4", height: "6", rx: "2" }],
        ["rect", { x: "6", y: "4", width: "4", height: "6", rx: "2" }],
        ["path", { d: "M6 20h4" }],
        ["path", { d: "M14 10h4" }],
        ["path", { d: "M6 14h2v6" }],
        ["path", { d: "M14 4h2v6" }]
      ]
    ];
    var Biohazard = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "12", cy: "11.9", r: "2" }],
        ["path", { d: "M6.7 3.4c-.9 2.5 0 5.2 2.2 6.7C6.5 9 3.7 9.6 2 11.6" }],
        ["path", { d: "m8.9 10.1 1.4.8" }],
        ["path", { d: "M17.3 3.4c.9 2.5 0 5.2-2.2 6.7 2.4-1.2 5.2-.6 6.9 1.5" }],
        ["path", { d: "m15.1 10.1-1.4.8" }],
        [
          "path",
          { d: "M16.7 20.8c-2.6-.4-4.6-2.6-4.7-5.3-.2 2.6-2.1 4.8-4.7 5.2" }
        ],
        ["path", { d: "M12 13.9v1.6" }],
        ["path", { d: "M13.5 5.4c-1-.2-2-.2-3 0" }],
        ["path", { d: "M17 16.4c.7-.7 1.2-1.6 1.5-2.5" }],
        ["path", { d: "M5.5 13.9c.3.9.8 1.8 1.5 2.5" }]
      ]
    ];
    var Bird = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M16 7h.01" }],
        ["path", { d: "M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20" }],
        ["path", { d: "m20 7 2 .5-2 .5" }],
        ["path", { d: "M10 18v3" }],
        ["path", { d: "M14 17.75V21" }],
        ["path", { d: "M7 18a6 6 0 0 0 3.84-10.61" }]
      ]
    ];
    var Bitcoin = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727"
          }
        ]
      ]
    ];
    var Blinds = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M3 3h18" }],
        ["path", { d: "M20 7H8" }],
        ["path", { d: "M20 11H8" }],
        ["path", { d: "M10 19h10" }],
        ["path", { d: "M8 15h12" }],
        ["path", { d: "M4 3v14" }],
        ["circle", { cx: "4", cy: "19", r: "2" }]
      ]
    ];
    var Blocks = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "7", height: "7", x: "14", y: "3", rx: "1" }],
        [
          "path",
          {
            d: "M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3"
          }
        ]
      ]
    ];
    var BluetoothConnected = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "m7 7 10 10-5 5V2l5 5L7 17" }],
        ["line", { x1: "18", x2: "21", y1: "12", y2: "12" }],
        ["line", { x1: "3", x2: "6", y1: "12", y2: "12" }]
      ]
    ];
    var BluetoothOff = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "m17 17-5 5V12l-5 5" }],
        ["path", { d: "m2 2 20 20" }],
        ["path", { d: "M14.5 9.5 17 7l-5-5v4.5" }]
      ]
    ];
    var BluetoothSearching = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "m7 7 10 10-5 5V2l5 5L7 17" }],
        ["path", { d: "M20.83 14.83a4 4 0 0 0 0-5.66" }],
        ["path", { d: "M18 12h.01" }]
      ]
    ];
    var Bluetooth = [
      "svg",
      defaultAttributes,
      [["path", { d: "m7 7 10 10-5 5V2l5 5L7 17" }]]
    ];
    var Bold = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M14 12a4 4 0 0 0 0-8H6v8" }],
        ["path", { d: "M15 20a4 4 0 0 0 0-8H6v8Z" }]
      ]
    ];
    var Bomb = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "11", cy: "13", r: "9" }],
        [
          "path",
          {
            d: "M14.35 4.65 16.3 2.7a2.41 2.41 0 0 1 3.4 0l1.6 1.6a2.4 2.4 0 0 1 0 3.4l-1.95 1.95"
          }
        ],
        ["path", { d: "m22 2-1.5 1.5" }]
      ]
    ];
    var Bone = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M17 10c.7-.7 1.69 0 2.5 0a2.5 2.5 0 1 0 0-5 .5.5 0 0 1-.5-.5 2.5 2.5 0 1 0-5 0c0 .81.7 1.8 0 2.5l-7 7c-.7.7-1.69 0-2.5 0a2.5 2.5 0 0 0 0 5c.28 0 .5.22.5.5a2.5 2.5 0 1 0 5 0c0-.81-.7-1.8 0-2.5Z"
          }
        ]
      ]
    ];
    var BookA = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" }
        ],
        ["path", { d: "m8 13 4-7 4 7" }],
        ["path", { d: "M9.1 11h5.7" }]
      ]
    ];
    var BookAudio = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" }
        ],
        ["path", { d: "M8 8v3" }],
        ["path", { d: "M12 6v7" }],
        ["path", { d: "M16 8v3" }]
      ]
    ];
    var BookCheck = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" }
        ],
        ["path", { d: "m9 9.5 2 2 4-4" }]
      ]
    ];
    var BookCopy = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M2 16V4a2 2 0 0 1 2-2h11" }],
        ["path", { d: "M5 14H4a2 2 0 1 0 0 4h1" }],
        ["path", { d: "M22 18H11a2 2 0 1 0 0 4h11V6H11a2 2 0 0 0-2 2v12" }]
      ]
    ];
    var BookDashed = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M20 22h-2" }],
        ["path", { d: "M20 15v2h-2" }],
        ["path", { d: "M4 19.5V15" }],
        ["path", { d: "M20 8v3" }],
        ["path", { d: "M18 2h2v2" }],
        ["path", { d: "M4 11V9" }],
        ["path", { d: "M12 2h2" }],
        ["path", { d: "M12 22h2" }],
        ["path", { d: "M12 17h2" }],
        ["path", { d: "M8 22H6.5a2.5 2.5 0 0 1 0-5H8" }],
        ["path", { d: "M4 5v-.5A2.5 2.5 0 0 1 6.5 2H8" }]
      ]
    ];
    var BookDown = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" }
        ],
        ["path", { d: "M12 13V7" }],
        ["path", { d: "m9 10 3 3 3-3" }]
      ]
    ];
    var BookHeadphones = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" }
        ],
        ["circle", { cx: "9", cy: "12", r: "1" }],
        ["path", { d: "M8 12v-2a4 4 0 0 1 8 0v2" }],
        ["circle", { cx: "15", cy: "12", r: "1" }]
      ]
    ];
    var BookHeart = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" }
        ],
        [
          "path",
          {
            d: "M16 8.2C16 7 15 6 13.8 6c-.8 0-1.4.3-1.8.9-.4-.6-1-.9-1.8-.9C9 6 8 7 8 8.2c0 .6.3 1.2.7 1.6h0C10 11.1 12 13 12 13s2-1.9 3.3-3.1h0c.4-.4.7-1 .7-1.7z"
          }
        ]
      ]
    ];
    var BookImage = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" }
        ],
        ["circle", { cx: "10", cy: "8", r: "2" }],
        ["path", { d: "m20 13.7-2.1-2.1c-.8-.8-2-.8-2.8 0L9.7 17" }]
      ]
    ];
    var BookKey = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H14" }],
        ["path", { d: "M20 8v14H6.5a2.5 2.5 0 0 1 0-5H20" }],
        ["circle", { cx: "14", cy: "8", r: "2" }],
        ["path", { d: "m20 2-4.5 4.5" }],
        ["path", { d: "m19 3 1 1" }]
      ]
    ];
    var BookLock = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H10" }],
        ["path", { d: "M20 15v7H6.5a2.5 2.5 0 0 1 0-5H20" }],
        ["rect", { width: "8", height: "5", x: "12", y: "6", rx: "1" }],
        ["path", { d: "M18 6V4a2 2 0 1 0-4 0v2" }]
      ]
    ];
    var BookMarked = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" }
        ],
        ["polyline", { points: "10 2 10 10 13 7 16 10 16 2" }]
      ]
    ];
    var BookMinus = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" }
        ],
        ["path", { d: "M9 10h6" }]
      ]
    ];
    var BookOpenCheck = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M8 3H2v15h7c1.7 0 3 1.3 3 3V7c0-2.2-1.8-4-4-4Z" }],
        ["path", { d: "m16 12 2 2 4-4" }],
        ["path", { d: "M22 6V3h-6c-2.2 0-4 1.8-4 4v14c0-1.7 1.3-3 3-3h7v-2.3" }]
      ]
    ];
    var BookOpenText = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" }],
        ["path", { d: "M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" }],
        ["path", { d: "M6 8h2" }],
        ["path", { d: "M6 12h2" }],
        ["path", { d: "M16 8h2" }],
        ["path", { d: "M16 12h2" }]
      ]
    ];
    var BookOpen = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" }],
        ["path", { d: "M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" }]
      ]
    ];
    var BookPlus = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" }
        ],
        ["path", { d: "M9 10h6" }],
        ["path", { d: "M12 7v6" }]
      ]
    ];
    var BookText = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" }
        ],
        ["path", { d: "M8 7h6" }],
        ["path", { d: "M8 11h8" }]
      ]
    ];
    var BookType = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" }
        ],
        ["path", { d: "M16 8V6H8v2" }],
        ["path", { d: "M12 6v7" }],
        ["path", { d: "M10 13h4" }]
      ]
    ];
    var BookUp2 = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2" }],
        ["path", { d: "M18 2h2v20H6.5a2.5 2.5 0 0 1 0-5H20" }],
        ["path", { d: "M12 13V7" }],
        ["path", { d: "m9 10 3-3 3 3" }],
        ["path", { d: "m9 5 3-3 3 3" }]
      ]
    ];
    var BookUp = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" }
        ],
        ["path", { d: "M12 13V7" }],
        ["path", { d: "m9 10 3-3 3 3" }]
      ]
    ];
    var BookUser = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" }
        ],
        ["circle", { cx: "12", cy: "8", r: "2" }],
        ["path", { d: "M15 13a3 3 0 1 0-6 0" }]
      ]
    ];
    var BookX = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" }
        ],
        ["path", { d: "m14.5 7-5 5" }],
        ["path", { d: "m9.5 7 5 5" }]
      ]
    ];
    var Book = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" }
        ]
      ]
    ];
    var BookmarkCheck = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z" }],
        ["path", { d: "m9 10 2 2 4-4" }]
      ]
    ];
    var BookmarkMinus = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" }],
        ["line", { x1: "15", x2: "9", y1: "10", y2: "10" }]
      ]
    ];
    var BookmarkPlus = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" }],
        ["line", { x1: "12", x2: "12", y1: "7", y2: "13" }],
        ["line", { x1: "15", x2: "9", y1: "10", y2: "10" }]
      ]
    ];
    var BookmarkX = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z" }],
        ["path", { d: "m14.5 7.5-5 5" }],
        ["path", { d: "m9.5 7.5 5 5" }]
      ]
    ];
    var Bookmark = [
      "svg",
      defaultAttributes,
      [["path", { d: "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" }]]
    ];
    var BoomBox = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M4 9V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4" }],
        ["path", { d: "M8 8v1" }],
        ["path", { d: "M12 8v1" }],
        ["path", { d: "M16 8v1" }],
        ["rect", { width: "20", height: "12", x: "2", y: "9", rx: "2" }],
        ["circle", { cx: "8", cy: "15", r: "2" }],
        ["circle", { cx: "16", cy: "15", r: "2" }]
      ]
    ];
    var Bot = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M12 8V4H8" }],
        ["rect", { width: "16", height: "12", x: "4", y: "8", rx: "2" }],
        ["path", { d: "M2 14h2" }],
        ["path", { d: "M20 14h2" }],
        ["path", { d: "M15 13v2" }],
        ["path", { d: "M9 13v2" }]
      ]
    ];
    var BoxSelect = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M5 3a2 2 0 0 0-2 2" }],
        ["path", { d: "M19 3a2 2 0 0 1 2 2" }],
        ["path", { d: "M21 19a2 2 0 0 1-2 2" }],
        ["path", { d: "M5 21a2 2 0 0 1-2-2" }],
        ["path", { d: "M9 3h1" }],
        ["path", { d: "M9 21h1" }],
        ["path", { d: "M14 3h1" }],
        ["path", { d: "M14 21h1" }],
        ["path", { d: "M3 9v1" }],
        ["path", { d: "M21 9v1" }],
        ["path", { d: "M3 14v1" }],
        ["path", { d: "M21 14v1" }]
      ]
    ];
    var Box = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"
          }
        ],
        ["path", { d: "m3.3 7 8.7 5 8.7-5" }],
        ["path", { d: "M12 22V12" }]
      ]
    ];
    var Boxes = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z"
          }
        ],
        ["path", { d: "m7 16.5-4.74-2.85" }],
        ["path", { d: "m7 16.5 5-3" }],
        ["path", { d: "M7 16.5v5.17" }],
        [
          "path",
          {
            d: "M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z"
          }
        ],
        ["path", { d: "m17 16.5-5-3" }],
        ["path", { d: "m17 16.5 4.74-2.85" }],
        ["path", { d: "M17 16.5v5.17" }],
        [
          "path",
          {
            d: "M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z"
          }
        ],
        ["path", { d: "M12 8 7.26 5.15" }],
        ["path", { d: "m12 8 4.74-2.85" }],
        ["path", { d: "M12 13.5V8" }]
      ]
    ];
    var Braces = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1"
          }
        ],
        [
          "path",
          {
            d: "M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1"
          }
        ]
      ]
    ];
    var Brackets = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M16 3h3v18h-3" }],
        ["path", { d: "M8 21H5V3h3" }]
      ]
    ];
    var BrainCircuit = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M12 4.5a2.5 2.5 0 0 0-4.96-.46 2.5 2.5 0 0 0-1.98 3 2.5 2.5 0 0 0-1.32 4.24 3 3 0 0 0 .34 5.58 2.5 2.5 0 0 0 2.96 3.08 2.5 2.5 0 0 0 4.91.05L12 20V4.5Z"
          }
        ],
        ["path", { d: "M16 8V5c0-1.1.9-2 2-2" }],
        ["path", { d: "M12 13h4" }],
        ["path", { d: "M12 18h6a2 2 0 0 1 2 2v1" }],
        ["path", { d: "M12 8h8" }],
        ["path", { d: "M20.5 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z" }],
        ["path", { d: "M16.5 13a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z" }],
        ["path", { d: "M20.5 21a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z" }],
        ["path", { d: "M18.5 3a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z" }]
      ]
    ];
    var BrainCog = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "12", cy: "12", r: "3" }],
        [
          "path",
          {
            d: "M12 4.5a2.5 2.5 0 0 0-4.96-.46 2.5 2.5 0 0 0-1.98 3 2.5 2.5 0 0 0-1.32 4.24 3 3 0 0 0 .34 5.58 2.5 2.5 0 0 0 2.96 3.08A2.5 2.5 0 0 0 12 19.5a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 12 4.5"
          }
        ],
        ["path", { d: "m15.7 10.4-.9.4" }],
        ["path", { d: "m9.2 13.2-.9.4" }],
        ["path", { d: "m13.6 15.7-.4-.9" }],
        ["path", { d: "m10.8 9.2-.4-.9" }],
        ["path", { d: "m15.7 13.5-.9-.4" }],
        ["path", { d: "m9.2 10.9-.9-.4" }],
        ["path", { d: "m10.5 15.7.4-.9" }],
        ["path", { d: "m13.1 9.2.4-.9" }]
      ]
    ];
    var Brain = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"
          }
        ],
        [
          "path",
          {
            d: "M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"
          }
        ]
      ]
    ];
    var Briefcase = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "20", height: "14", x: "2", y: "7", rx: "2", ry: "2" }],
        ["path", { d: "M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" }]
      ]
    ];
    var BringToFront = [
      "svg",
      defaultAttributes,
      [
        ["rect", { x: "8", y: "8", width: "8", height: "8", rx: "2" }],
        ["path", { d: "M4 10a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2" }],
        ["path", { d: "M14 20a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2" }]
      ]
    ];
    var Brush = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          { d: "m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08" }
        ],
        [
          "path",
          {
            d: "M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z"
          }
        ]
      ]
    ];
    var BugOff = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M15 7.13V6a3 3 0 0 0-5.14-2.1L8 2" }],
        ["path", { d: "M14.12 3.88 16 2" }],
        ["path", { d: "M22 13h-4v-2a4 4 0 0 0-4-4h-1.3" }],
        ["path", { d: "M20.97 5c0 2.1-1.6 3.8-3.5 4" }],
        ["path", { d: "m2 2 20 20" }],
        ["path", { d: "M7.7 7.7A4 4 0 0 0 6 11v3a6 6 0 0 0 11.13 3.13" }],
        ["path", { d: "M12 20v-8" }],
        ["path", { d: "M6 13H2" }],
        ["path", { d: "M3 21c0-2.1 1.7-3.9 3.8-4" }]
      ]
    ];
    var BugPlay = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "m8 2 1.88 1.88" }],
        ["path", { d: "M14.12 3.88 16 2" }],
        ["path", { d: "M9 7.13v-1a3.003 3.003 0 1 1 6 0v1" }],
        [
          "path",
          { d: "M18 11a4 4 0 0 0-4-4h-4a4 4 0 0 0-4 4v3a6.1 6.1 0 0 0 2 4.5" }
        ],
        ["path", { d: "M6.53 9C4.6 8.8 3 7.1 3 5" }],
        ["path", { d: "M6 13H2" }],
        ["path", { d: "M3 21c0-2.1 1.7-3.9 3.8-4" }],
        ["path", { d: "M20.97 5c0 2.1-1.6 3.8-3.5 4" }],
        ["path", { d: "m12 12 8 5-8 5Z" }]
      ]
    ];
    var Bug = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "m8 2 1.88 1.88" }],
        ["path", { d: "M14.12 3.88 16 2" }],
        ["path", { d: "M9 7.13v-1a3.003 3.003 0 1 1 6 0v1" }],
        [
          "path",
          {
            d: "M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6"
          }
        ],
        ["path", { d: "M12 20v-9" }],
        ["path", { d: "M6.53 9C4.6 8.8 3 7.1 3 5" }],
        ["path", { d: "M6 13H2" }],
        ["path", { d: "M3 21c0-2.1 1.7-3.9 3.8-4" }],
        ["path", { d: "M20.97 5c0 2.1-1.6 3.8-3.5 4" }],
        ["path", { d: "M22 13h-4" }],
        ["path", { d: "M17.2 17c2.1.1 3.8 1.9 3.8 4" }]
      ]
    ];
    var Building2 = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" }],
        ["path", { d: "M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" }],
        ["path", { d: "M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" }],
        ["path", { d: "M10 6h4" }],
        ["path", { d: "M10 10h4" }],
        ["path", { d: "M10 14h4" }],
        ["path", { d: "M10 18h4" }]
      ]
    ];
    var Building = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2", ry: "2" }],
        ["path", { d: "M9 22v-4h6v4" }],
        ["path", { d: "M8 6h.01" }],
        ["path", { d: "M16 6h.01" }],
        ["path", { d: "M12 6h.01" }],
        ["path", { d: "M12 10h.01" }],
        ["path", { d: "M12 14h.01" }],
        ["path", { d: "M16 10h.01" }],
        ["path", { d: "M16 14h.01" }],
        ["path", { d: "M8 10h.01" }],
        ["path", { d: "M8 14h.01" }]
      ]
    ];
    var BusFront = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M4 6 2 7" }],
        ["path", { d: "M10 6h4" }],
        ["path", { d: "m22 7-2-1" }],
        ["rect", { width: "16", height: "16", x: "4", y: "3", rx: "2" }],
        ["path", { d: "M4 11h16" }],
        ["path", { d: "M8 15h.01" }],
        ["path", { d: "M16 15h.01" }],
        ["path", { d: "M6 19v2" }],
        ["path", { d: "M18 21v-2" }]
      ]
    ];
    var Bus = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M8 6v6" }],
        ["path", { d: "M15 6v6" }],
        ["path", { d: "M2 12h19.6" }],
        [
          "path",
          {
            d: "M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3"
          }
        ],
        ["circle", { cx: "7", cy: "18", r: "2" }],
        ["path", { d: "M9 18h5" }],
        ["circle", { cx: "16", cy: "18", r: "2" }]
      ]
    ];
    var CableCar = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M10 3h.01" }],
        ["path", { d: "M14 2h.01" }],
        ["path", { d: "m2 9 20-5" }],
        ["path", { d: "M12 12V6.5" }],
        ["rect", { width: "16", height: "10", x: "4", y: "12", rx: "3" }],
        ["path", { d: "M9 12v5" }],
        ["path", { d: "M15 12v5" }],
        ["path", { d: "M4 17h16" }]
      ]
    ];
    var Cable = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M4 9a2 2 0 0 1-2-2V5h6v2a2 2 0 0 1-2 2Z" }],
        ["path", { d: "M3 5V3" }],
        ["path", { d: "M7 5V3" }],
        ["path", { d: "M19 15V6.5a3.5 3.5 0 0 0-7 0v11a3.5 3.5 0 0 1-7 0V9" }],
        ["path", { d: "M17 21v-2" }],
        ["path", { d: "M21 21v-2" }],
        ["path", { d: "M22 19h-6v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2Z" }]
      ]
    ];
    var CakeSlice = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "9", cy: "7", r: "2" }],
        [
          "path",
          {
            d: "M7.2 7.9 3 11v9c0 .6.4 1 1 1h16c.6 0 1-.4 1-1v-9c0-2-3-6-7-8l-3.6 2.6"
          }
        ],
        ["path", { d: "M16 13H3" }],
        ["path", { d: "M16 17H3" }]
      ]
    ];
    var Cake = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8" }],
        ["path", { d: "M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1" }],
        ["path", { d: "M2 21h20" }],
        ["path", { d: "M7 8v2" }],
        ["path", { d: "M12 8v2" }],
        ["path", { d: "M17 8v2" }],
        ["path", { d: "M7 4h.01" }],
        ["path", { d: "M12 4h.01" }],
        ["path", { d: "M17 4h.01" }]
      ]
    ];
    var Calculator = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2" }],
        ["line", { x1: "8", x2: "16", y1: "6", y2: "6" }],
        ["line", { x1: "16", x2: "16", y1: "14", y2: "18" }],
        ["path", { d: "M16 10h.01" }],
        ["path", { d: "M12 10h.01" }],
        ["path", { d: "M8 10h.01" }],
        ["path", { d: "M12 14h.01" }],
        ["path", { d: "M8 14h.01" }],
        ["path", { d: "M12 18h.01" }],
        ["path", { d: "M8 18h.01" }]
      ]
    ];
    var CalendarCheck2 = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          { d: "M21 14V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8" }
        ],
        ["line", { x1: "16", x2: "16", y1: "2", y2: "6" }],
        ["line", { x1: "8", x2: "8", y1: "2", y2: "6" }],
        ["line", { x1: "3", x2: "21", y1: "10", y2: "10" }],
        ["path", { d: "m16 20 2 2 4-4" }]
      ]
    ];
    var CalendarCheck = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", ry: "2" }],
        ["line", { x1: "16", x2: "16", y1: "2", y2: "6" }],
        ["line", { x1: "8", x2: "8", y1: "2", y2: "6" }],
        ["line", { x1: "3", x2: "21", y1: "10", y2: "10" }],
        ["path", { d: "m9 16 2 2 4-4" }]
      ]
    ];
    var CalendarClock = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          { d: "M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5" }
        ],
        ["path", { d: "M16 2v4" }],
        ["path", { d: "M8 2v4" }],
        ["path", { d: "M3 10h5" }],
        ["path", { d: "M17.5 17.5 16 16.25V14" }],
        ["path", { d: "M22 16a6 6 0 1 1-12 0 6 6 0 0 1 12 0Z" }]
      ]
    ];
    var CalendarDays = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", ry: "2" }],
        ["line", { x1: "16", x2: "16", y1: "2", y2: "6" }],
        ["line", { x1: "8", x2: "8", y1: "2", y2: "6" }],
        ["line", { x1: "3", x2: "21", y1: "10", y2: "10" }],
        ["path", { d: "M8 14h.01" }],
        ["path", { d: "M12 14h.01" }],
        ["path", { d: "M16 14h.01" }],
        ["path", { d: "M8 18h.01" }],
        ["path", { d: "M12 18h.01" }],
        ["path", { d: "M16 18h.01" }]
      ]
    ];
    var CalendarHeart = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          { d: "M21 10V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h7" }
        ],
        ["path", { d: "M16 2v4" }],
        ["path", { d: "M8 2v4" }],
        ["path", { d: "M3 10h18" }],
        [
          "path",
          {
            d: "M21.29 14.7a2.43 2.43 0 0 0-2.65-.52c-.3.12-.57.3-.8.53l-.34.34-.35-.34a2.43 2.43 0 0 0-2.65-.53c-.3.12-.56.3-.79.53-.95.94-1 2.53.2 3.74L17.5 22l3.6-3.55c1.2-1.21 1.14-2.8.19-3.74Z"
          }
        ]
      ]
    ];
    var CalendarMinus = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          { d: "M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8" }
        ],
        ["line", { x1: "16", x2: "16", y1: "2", y2: "6" }],
        ["line", { x1: "8", x2: "8", y1: "2", y2: "6" }],
        ["line", { x1: "3", x2: "21", y1: "10", y2: "10" }],
        ["line", { x1: "16", x2: "22", y1: "19", y2: "19" }]
      ]
    ];
    var CalendarOff = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          { d: "M4.18 4.18A2 2 0 0 0 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 1.82-1.18" }
        ],
        ["path", { d: "M21 15.5V6a2 2 0 0 0-2-2H9.5" }],
        ["path", { d: "M16 2v4" }],
        ["path", { d: "M3 10h7" }],
        ["path", { d: "M21 10h-5.5" }],
        ["line", { x1: "2", x2: "22", y1: "2", y2: "22" }]
      ]
    ];
    var CalendarPlus = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          { d: "M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8" }
        ],
        ["line", { x1: "16", x2: "16", y1: "2", y2: "6" }],
        ["line", { x1: "8", x2: "8", y1: "2", y2: "6" }],
        ["line", { x1: "3", x2: "21", y1: "10", y2: "10" }],
        ["line", { x1: "19", x2: "19", y1: "16", y2: "22" }],
        ["line", { x1: "16", x2: "22", y1: "19", y2: "19" }]
      ]
    ];
    var CalendarRange = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", ry: "2" }],
        ["line", { x1: "16", x2: "16", y1: "2", y2: "6" }],
        ["line", { x1: "8", x2: "8", y1: "2", y2: "6" }],
        ["line", { x1: "3", x2: "21", y1: "10", y2: "10" }],
        ["path", { d: "M17 14h-6" }],
        ["path", { d: "M13 18H7" }],
        ["path", { d: "M7 14h.01" }],
        ["path", { d: "M17 18h.01" }]
      ]
    ];
    var CalendarSearch = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          { d: "M21 12V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h7.5" }
        ],
        ["path", { d: "M16 2v4" }],
        ["path", { d: "M8 2v4" }],
        ["path", { d: "M3 10h18" }],
        ["path", { d: "M18 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6v0Z" }],
        ["path", { d: "m22 22-1.5-1.5" }]
      ]
    ];
    var CalendarX2 = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          { d: "M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8" }
        ],
        ["line", { x1: "16", x2: "16", y1: "2", y2: "6" }],
        ["line", { x1: "8", x2: "8", y1: "2", y2: "6" }],
        ["line", { x1: "3", x2: "21", y1: "10", y2: "10" }],
        ["line", { x1: "17", x2: "22", y1: "17", y2: "22" }],
        ["line", { x1: "17", x2: "22", y1: "22", y2: "17" }]
      ]
    ];
    var CalendarX = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", ry: "2" }],
        ["line", { x1: "16", x2: "16", y1: "2", y2: "6" }],
        ["line", { x1: "8", x2: "8", y1: "2", y2: "6" }],
        ["line", { x1: "3", x2: "21", y1: "10", y2: "10" }],
        ["line", { x1: "10", x2: "14", y1: "14", y2: "18" }],
        ["line", { x1: "14", x2: "10", y1: "14", y2: "18" }]
      ]
    ];
    var Calendar2 = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", ry: "2" }],
        ["line", { x1: "16", x2: "16", y1: "2", y2: "6" }],
        ["line", { x1: "8", x2: "8", y1: "2", y2: "6" }],
        ["line", { x1: "3", x2: "21", y1: "10", y2: "10" }]
      ]
    ];
    var CameraOff = [
      "svg",
      defaultAttributes,
      [
        ["line", { x1: "2", x2: "22", y1: "2", y2: "22" }],
        ["path", { d: "M7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16" }],
        ["path", { d: "M9.5 4h5L17 7h3a2 2 0 0 1 2 2v7.5" }],
        ["path", { d: "M14.121 15.121A3 3 0 1 1 9.88 10.88" }]
      ]
    ];
    var Camera = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"
          }
        ],
        ["circle", { cx: "12", cy: "13", r: "3" }]
      ]
    ];
    var CandlestickChart = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M9 5v4" }],
        ["rect", { width: "4", height: "6", x: "7", y: "9", rx: "1" }],
        ["path", { d: "M9 15v2" }],
        ["path", { d: "M17 3v2" }],
        ["rect", { width: "4", height: "8", x: "15", y: "5", rx: "1" }],
        ["path", { d: "M17 13v3" }],
        ["path", { d: "M3 3v18h18" }]
      ]
    ];
    var CandyCane = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M5.7 21a2 2 0 0 1-3.5-2l8.6-14a6 6 0 0 1 10.4 6 2 2 0 1 1-3.464-2 2 2 0 1 0-3.464-2Z"
          }
        ],
        ["path", { d: "M17.75 7 15 2.1" }],
        ["path", { d: "M10.9 4.8 13 9" }],
        ["path", { d: "m7.9 9.7 2 4.4" }],
        ["path", { d: "M4.9 14.7 7 18.9" }]
      ]
    ];
    var CandyOff = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "m8.5 8.5-1 1a4.95 4.95 0 0 0 7 7l1-1" }],
        [
          "path",
          {
            d: "M11.843 6.187A4.947 4.947 0 0 1 16.5 7.5a4.947 4.947 0 0 1 1.313 4.657"
          }
        ],
        ["path", { d: "M14 16.5V14" }],
        ["path", { d: "M14 6.5v1.843" }],
        ["path", { d: "M10 10v7.5" }],
        [
          "path",
          {
            d: "m16 7 1-5 1.367.683A3 3 0 0 0 19.708 3H21v1.292a3 3 0 0 0 .317 1.341L22 7l-5 1"
          }
        ],
        [
          "path",
          {
            d: "m8 17-1 5-1.367-.683A3 3 0 0 0 4.292 21H3v-1.292a3 3 0 0 0-.317-1.341L2 17l5-1"
          }
        ],
        ["line", { x1: "2", x2: "22", y1: "2", y2: "22" }]
      ]
    ];
    var Candy = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          { d: "m9.5 7.5-2 2a4.95 4.95 0 1 0 7 7l2-2a4.95 4.95 0 1 0-7-7Z" }
        ],
        ["path", { d: "M14 6.5v10" }],
        ["path", { d: "M10 7.5v10" }],
        [
          "path",
          {
            d: "m16 7 1-5 1.37.68A3 3 0 0 0 19.7 3H21v1.3c0 .46.1.92.32 1.33L22 7l-5 1"
          }
        ],
        [
          "path",
          {
            d: "m8 17-1 5-1.37-.68A3 3 0 0 0 4.3 21H3v-1.3a3 3 0 0 0-.32-1.33L2 17l5-1"
          }
        ]
      ]
    ];
    var CarFront = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8"
          }
        ],
        ["path", { d: "M7 14h.01" }],
        ["path", { d: "M17 14h.01" }],
        ["rect", { width: "18", height: "8", x: "3", y: "10", rx: "2" }],
        ["path", { d: "M5 18v2" }],
        ["path", { d: "M19 18v2" }]
      ]
    ];
    var CarTaxiFront = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M10 2h4" }],
        [
          "path",
          {
            d: "m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8"
          }
        ],
        ["path", { d: "M7 14h.01" }],
        ["path", { d: "M17 14h.01" }],
        ["rect", { width: "18", height: "8", x: "3", y: "10", rx: "2" }],
        ["path", { d: "M5 18v2" }],
        ["path", { d: "M19 18v2" }]
      ]
    ];
    var Car = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"
          }
        ],
        ["circle", { cx: "7", cy: "17", r: "2" }],
        ["path", { d: "M9 17h6" }],
        ["circle", { cx: "17", cy: "17", r: "2" }]
      ]
    ];
    var Caravan = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "4", height: "4", x: "2", y: "9" }],
        ["rect", { width: "4", height: "10", x: "10", y: "9" }],
        ["path", { d: "M18 19V9a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v8a2 2 0 0 0 2 2h2" }],
        ["circle", { cx: "8", cy: "19", r: "2" }],
        ["path", { d: "M10 19h12v-2" }]
      ]
    ];
    var Carrot = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM8.64 14l-2.05-2.04M15.34 15l-2.46-2.46"
          }
        ],
        [
          "path",
          { d: "M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9z" }
        ],
        [
          "path",
          { d: "M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2z" }
        ]
      ]
    ];
    var CaseLower = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "7", cy: "12", r: "3" }],
        ["path", { d: "M10 9v6" }],
        ["circle", { cx: "17", cy: "12", r: "3" }],
        ["path", { d: "M14 7v8" }]
      ]
    ];
    var CaseSensitive = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "m3 15 4-8 4 8" }],
        ["path", { d: "M4 13h6" }],
        ["circle", { cx: "18", cy: "12", r: "3" }],
        ["path", { d: "M21 9v6" }]
      ]
    ];
    var CaseUpper = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "m3 15 4-8 4 8" }],
        ["path", { d: "M4 13h6" }],
        ["path", { d: "M15 11h4.5a2 2 0 0 1 0 4H15V7h4a2 2 0 0 1 0 4" }]
      ]
    ];
    var CassetteTape = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2" }],
        ["circle", { cx: "8", cy: "10", r: "2" }],
        ["path", { d: "M8 12h8" }],
        ["circle", { cx: "16", cy: "10", r: "2" }],
        [
          "path",
          { d: "m6 20 .7-2.9A1.4 1.4 0 0 1 8.1 16h7.8a1.4 1.4 0 0 1 1.4 1l.7 3" }
        ]
      ]
    ];
    var Cast = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          { d: "M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6" }
        ],
        ["path", { d: "M2 12a9 9 0 0 1 8 8" }],
        ["path", { d: "M2 16a5 5 0 0 1 4 4" }],
        ["line", { x1: "2", x2: "2.01", y1: "20", y2: "20" }]
      ]
    ];
    var Castle = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M22 20v-9H2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2Z" }],
        ["path", { d: "M18 11V4H6v7" }],
        ["path", { d: "M15 22v-4a3 3 0 0 0-3-3v0a3 3 0 0 0-3 3v4" }],
        ["path", { d: "M22 11V9" }],
        ["path", { d: "M2 11V9" }],
        ["path", { d: "M6 4V2" }],
        ["path", { d: "M18 4V2" }],
        ["path", { d: "M10 4V2" }],
        ["path", { d: "M14 4V2" }]
      ]
    ];
    var Cat = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M12 5c.67 0 1.35.09 2 .26 1.78-2 5.03-2.84 6.42-2.26 1.4.58-.42 7-.42 7 .57 1.07 1 2.24 1 3.44C21 17.9 16.97 21 12 21s-9-3-9-7.56c0-1.25.5-2.4 1-3.44 0 0-1.89-6.42-.5-7 1.39-.58 4.72.23 6.5 2.23A9.04 9.04 0 0 1 12 5Z"
          }
        ],
        ["path", { d: "M8 14v.5" }],
        ["path", { d: "M16 14v.5" }],
        ["path", { d: "M11.25 16.25h1.5L12 17l-.75-.75Z" }]
      ]
    ];
    var CheckCheck = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M18 6 7 17l-5-5" }],
        ["path", { d: "m22 10-7.5 7.5L13 16" }]
      ]
    ];
    var CheckCircle2 = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
          }
        ],
        ["path", { d: "m9 12 2 2 4-4" }]
      ]
    ];
    var CheckCircle = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14" }],
        ["polyline", { points: "22 4 12 14.01 9 11.01" }]
      ]
    ];
    var CheckSquare = [
      "svg",
      defaultAttributes,
      [
        ["polyline", { points: "9 11 12 14 22 4" }],
        [
          "path",
          { d: "M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" }
        ]
      ]
    ];
    var Check = [
      "svg",
      defaultAttributes,
      [["polyline", { points: "20 6 9 17 4 12" }]]
    ];
    var ChefHat = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z"
          }
        ],
        ["line", { x1: "6", x2: "18", y1: "17", y2: "17" }]
      ]
    ];
    var Cherry = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M2 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z" }],
        ["path", { d: "M12 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z" }],
        ["path", { d: "M7 14c3.22-2.91 4.29-8.75 5-12 1.66 2.38 4.94 9 5 12" }],
        ["path", { d: "M22 9c-4.29 0-7.14-2.33-10-7 5.71 0 10 4.67 10 7Z" }]
      ]
    ];
    var ChevronDownCircle = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "12", cy: "12", r: "10" }],
        ["path", { d: "m16 10-4 4-4-4" }]
      ]
    ];
    var ChevronDownSquare = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
        ["path", { d: "m16 10-4 4-4-4" }]
      ]
    ];
    var ChevronDown = [
      "svg",
      defaultAttributes,
      [["path", { d: "m6 9 6 6 6-6" }]]
    ];
    var ChevronFirst = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "m17 18-6-6 6-6" }],
        ["path", { d: "M7 6v12" }]
      ]
    ];
    var ChevronLast = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "m7 18 6-6-6-6" }],
        ["path", { d: "M17 6v12" }]
      ]
    ];
    var ChevronLeftCircle = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "12", cy: "12", r: "10" }],
        ["path", { d: "m14 16-4-4 4-4" }]
      ]
    ];
    var ChevronLeftSquare = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
        ["path", { d: "m14 16-4-4 4-4" }]
      ]
    ];
    var ChevronLeft = [
      "svg",
      defaultAttributes,
      [["path", { d: "m15 18-6-6 6-6" }]]
    ];
    var ChevronRightCircle = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "12", cy: "12", r: "10" }],
        ["path", { d: "m10 8 4 4-4 4" }]
      ]
    ];
    var ChevronRightSquare = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
        ["path", { d: "m10 8 4 4-4 4" }]
      ]
    ];
    var ChevronRight = [
      "svg",
      defaultAttributes,
      [["path", { d: "m9 18 6-6-6-6" }]]
    ];
    var ChevronUpCircle = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "12", cy: "12", r: "10" }],
        ["path", { d: "m8 14 4-4 4 4" }]
      ]
    ];
    var ChevronUpSquare = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
        ["path", { d: "m8 14 4-4 4 4" }]
      ]
    ];
    var ChevronUp = [
      "svg",
      defaultAttributes,
      [["path", { d: "m18 15-6-6-6 6" }]]
    ];
    var ChevronsDownUp = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "m7 20 5-5 5 5" }],
        ["path", { d: "m7 4 5 5 5-5" }]
      ]
    ];
    var ChevronsDown = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "m7 6 5 5 5-5" }],
        ["path", { d: "m7 13 5 5 5-5" }]
      ]
    ];
    var ChevronsLeftRight = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "m9 7-5 5 5 5" }],
        ["path", { d: "m15 7 5 5-5 5" }]
      ]
    ];
    var ChevronsLeft = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "m11 17-5-5 5-5" }],
        ["path", { d: "m18 17-5-5 5-5" }]
      ]
    ];
    var ChevronsRightLeft = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "m20 17-5-5 5-5" }],
        ["path", { d: "m4 17 5-5-5-5" }]
      ]
    ];
    var ChevronsRight = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "m6 17 5-5-5-5" }],
        ["path", { d: "m13 17 5-5-5-5" }]
      ]
    ];
    var ChevronsUpDown = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "m7 15 5 5 5-5" }],
        ["path", { d: "m7 9 5-5 5 5" }]
      ]
    ];
    var ChevronsUp = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "m17 11-5-5-5 5" }],
        ["path", { d: "m17 18-5-5-5 5" }]
      ]
    ];
    var Chrome = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "12", cy: "12", r: "10" }],
        ["circle", { cx: "12", cy: "12", r: "4" }],
        ["line", { x1: "21.17", x2: "12", y1: "8", y2: "8" }],
        ["line", { x1: "3.95", x2: "8.54", y1: "6.06", y2: "14" }],
        ["line", { x1: "10.88", x2: "15.46", y1: "21.94", y2: "14" }]
      ]
    ];
    var Church = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "m18 7 4 2v11a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9l4-2" }],
        ["path", { d: "M14 22v-4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v4" }],
        ["path", { d: "M18 22V5l-6-3-6 3v17" }],
        ["path", { d: "M12 7v5" }],
        ["path", { d: "M10 9h4" }]
      ]
    ];
    var CigaretteOff = [
      "svg",
      defaultAttributes,
      [
        ["line", { x1: "2", x2: "22", y1: "2", y2: "22" }],
        ["path", { d: "M12 12H2v4h14" }],
        ["path", { d: "M22 12v4" }],
        ["path", { d: "M18 12h-.5" }],
        ["path", { d: "M7 12v4" }],
        ["path", { d: "M18 8c0-2.5-2-2.5-2-5" }],
        ["path", { d: "M22 8c0-2.5-2-2.5-2-5" }]
      ]
    ];
    var Cigarette = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M18 12H2v4h16" }],
        ["path", { d: "M22 12v4" }],
        ["path", { d: "M7 12v4" }],
        ["path", { d: "M18 8c0-2.5-2-2.5-2-5" }],
        ["path", { d: "M22 8c0-2.5-2-2.5-2-5" }]
      ]
    ];
    var CircleDashed = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M10.1 2.18a9.93 9.93 0 0 1 3.8 0" }],
        ["path", { d: "M17.6 3.71a9.95 9.95 0 0 1 2.69 2.7" }],
        ["path", { d: "M21.82 10.1a9.93 9.93 0 0 1 0 3.8" }],
        ["path", { d: "M20.29 17.6a9.95 9.95 0 0 1-2.7 2.69" }],
        ["path", { d: "M13.9 21.82a9.94 9.94 0 0 1-3.8 0" }],
        ["path", { d: "M6.4 20.29a9.95 9.95 0 0 1-2.69-2.7" }],
        ["path", { d: "M2.18 13.9a9.93 9.93 0 0 1 0-3.8" }],
        ["path", { d: "M3.71 6.4a9.95 9.95 0 0 1 2.7-2.69" }]
      ]
    ];
    var CircleDollarSign = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "12", cy: "12", r: "10" }],
        ["path", { d: "M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" }],
        ["path", { d: "M12 18V6" }]
      ]
    ];
    var CircleDotDashed = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M10.1 2.18a9.93 9.93 0 0 1 3.8 0" }],
        ["path", { d: "M17.6 3.71a9.95 9.95 0 0 1 2.69 2.7" }],
        ["path", { d: "M21.82 10.1a9.93 9.93 0 0 1 0 3.8" }],
        ["path", { d: "M20.29 17.6a9.95 9.95 0 0 1-2.7 2.69" }],
        ["path", { d: "M13.9 21.82a9.94 9.94 0 0 1-3.8 0" }],
        ["path", { d: "M6.4 20.29a9.95 9.95 0 0 1-2.69-2.7" }],
        ["path", { d: "M2.18 13.9a9.93 9.93 0 0 1 0-3.8" }],
        ["path", { d: "M3.71 6.4a9.95 9.95 0 0 1 2.7-2.69" }],
        ["circle", { cx: "12", cy: "12", r: "1" }]
      ]
    ];
    var CircleDot = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "12", cy: "12", r: "10" }],
        ["circle", { cx: "12", cy: "12", r: "1" }]
      ]
    ];
    var CircleEllipsis = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "12", cy: "12", r: "10" }],
        ["path", { d: "M17 12h.01" }],
        ["path", { d: "M12 12h.01" }],
        ["path", { d: "M7 12h.01" }]
      ]
    ];
    var CircleEqual = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M7 10h10" }],
        ["path", { d: "M7 14h10" }],
        ["circle", { cx: "12", cy: "12", r: "10" }]
      ]
    ];
    var CircleOff = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "m2 2 20 20" }],
        ["path", { d: "M8.35 2.69A10 10 0 0 1 21.3 15.65" }],
        ["path", { d: "M19.08 19.08A10 10 0 1 1 4.92 4.92" }]
      ]
    ];
    var CircleSlash2 = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "12", cy: "12", r: "10" }],
        ["path", { d: "M22 2 2 22" }]
      ]
    ];
    var CircleSlash = [
      "svg",
      defaultAttributes,
      [
        ["line", { x1: "9", x2: "15", y1: "15", y2: "9" }],
        ["circle", { cx: "12", cy: "12", r: "10" }]
      ]
    ];
    var Circle = [
      "svg",
      defaultAttributes,
      [["circle", { cx: "12", cy: "12", r: "10" }]]
    ];
    var CircuitBoard = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
        ["path", { d: "M11 9h4a2 2 0 0 0 2-2V3" }],
        ["circle", { cx: "9", cy: "9", r: "2" }],
        ["path", { d: "M7 21v-4a2 2 0 0 1 2-2h4" }],
        ["circle", { cx: "15", cy: "15", r: "2" }]
      ]
    ];
    var Citrus = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M21.66 17.67a1.08 1.08 0 0 1-.04 1.6A12 12 0 0 1 4.73 2.38a1.1 1.1 0 0 1 1.61-.04z"
          }
        ],
        ["path", { d: "M19.65 15.66A8 8 0 0 1 8.35 4.34" }],
        ["path", { d: "m14 10-5.5 5.5" }],
        ["path", { d: "M14 17.85V10H6.15" }]
      ]
    ];
    var Clapperboard = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z"
          }
        ],
        ["path", { d: "m6.2 5.3 3.1 3.9" }],
        ["path", { d: "m12.4 3.4 3.1 4" }],
        ["path", { d: "M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" }]
      ]
    ];
    var ClipboardCheck = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1" }],
        [
          "path",
          {
            d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"
          }
        ],
        ["path", { d: "m9 14 2 2 4-4" }]
      ]
    ];
    var ClipboardCopy = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1" }],
        [
          "path",
          { d: "M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" }
        ],
        ["path", { d: "M16 4h2a2 2 0 0 1 2 2v4" }],
        ["path", { d: "M21 14H11" }],
        ["path", { d: "m15 10-4 4 4 4" }]
      ]
    ];
    var ClipboardEdit = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1" }],
        [
          "path",
          {
            d: "M10.42 12.61a2.1 2.1 0 1 1 2.97 2.97L7.95 21 4 22l.99-3.95 5.43-5.44Z"
          }
        ],
        ["path", { d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-5.5" }],
        ["path", { d: "M4 13.5V6a2 2 0 0 1 2-2h2" }]
      ]
    ];
    var ClipboardList = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1" }],
        [
          "path",
          {
            d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"
          }
        ],
        ["path", { d: "M12 11h4" }],
        ["path", { d: "M12 16h4" }],
        ["path", { d: "M8 11h.01" }],
        ["path", { d: "M8 16h.01" }]
      ]
    ];
    var ClipboardPaste = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M15 2H9a1 1 0 0 0-1 1v2c0 .6.4 1 1 1h6c.6 0 1-.4 1-1V3c0-.6-.4-1-1-1Z"
          }
        ],
        [
          "path",
          {
            d: "M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2M16 4h2a2 2 0 0 1 2 2v2M11 14h10"
          }
        ],
        ["path", { d: "m17 10 4 4-4 4" }]
      ]
    ];
    var ClipboardSignature = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1" }],
        [
          "path",
          { d: "M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-.5" }
        ],
        ["path", { d: "M16 4h2a2 2 0 0 1 1.73 1" }],
        [
          "path",
          {
            d: "M18.42 9.61a2.1 2.1 0 1 1 2.97 2.97L16.95 17 13 18l.99-3.95 4.43-4.44Z"
          }
        ],
        ["path", { d: "M8 18h1" }]
      ]
    ];
    var ClipboardType = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1" }],
        [
          "path",
          {
            d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"
          }
        ],
        ["path", { d: "M9 12v-1h6v1" }],
        ["path", { d: "M11 17h2" }],
        ["path", { d: "M12 11v6" }]
      ]
    ];
    var ClipboardX = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1" }],
        [
          "path",
          {
            d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"
          }
        ],
        ["path", { d: "m15 11-6 6" }],
        ["path", { d: "m9 11 6 6" }]
      ]
    ];
    var Clipboard = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1" }],
        [
          "path",
          {
            d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"
          }
        ]
      ]
    ];
    var Clock1 = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "12", cy: "12", r: "10" }],
        ["polyline", { points: "12 6 12 12 14.5 8" }]
      ]
    ];
    var Clock10 = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "12", cy: "12", r: "10" }],
        ["polyline", { points: "12 6 12 12 8 10" }]
      ]
    ];
    var Clock11 = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "12", cy: "12", r: "10" }],
        ["polyline", { points: "12 6 12 12 9.5 8" }]
      ]
    ];
    var Clock12 = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "12", cy: "12", r: "10" }],
        ["polyline", { points: "12 6 12 12" }]
      ]
    ];
    var Clock2 = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "12", cy: "12", r: "10" }],
        ["polyline", { points: "12 6 12 12 16 10" }]
      ]
    ];
    var Clock3 = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "12", cy: "12", r: "10" }],
        ["polyline", { points: "12 6 12 12 16.5 12" }]
      ]
    ];
    var Clock4 = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "12", cy: "12", r: "10" }],
        ["polyline", { points: "12 6 12 12 16 14" }]
      ]
    ];
    var Clock5 = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "12", cy: "12", r: "10" }],
        ["polyline", { points: "12 6 12 12 14.5 16" }]
      ]
    ];
    var Clock6 = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "12", cy: "12", r: "10" }],
        ["polyline", { points: "12 6 12 12 12 16.5" }]
      ]
    ];
    var Clock7 = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "12", cy: "12", r: "10" }],
        ["polyline", { points: "12 6 12 12 9.5 16" }]
      ]
    ];
    var Clock8 = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "12", cy: "12", r: "10" }],
        ["polyline", { points: "12 6 12 12 8 14" }]
      ]
    ];
    var Clock9 = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "12", cy: "12", r: "10" }],
        ["polyline", { points: "12 6 12 12 7.5 12" }]
      ]
    ];
    var Clock = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "12", cy: "12", r: "10" }],
        ["polyline", { points: "12 6 12 12 16 14" }]
      ]
    ];
    var CloudCog = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "12", cy: "17", r: "3" }],
        ["path", { d: "M4.2 15.1A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.2" }],
        ["path", { d: "m15.7 18.4-.9-.3" }],
        ["path", { d: "m9.2 15.9-.9-.3" }],
        ["path", { d: "m10.6 20.7.3-.9" }],
        ["path", { d: "m13.1 14.2.3-.9" }],
        ["path", { d: "m13.6 20.7-.4-1" }],
        ["path", { d: "m10.8 14.3-.4-1" }],
        ["path", { d: "m8.3 18.6 1-.4" }],
        ["path", { d: "m14.7 15.8 1-.4" }]
      ]
    ];
    var CloudDrizzle = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" }],
        ["path", { d: "M8 19v1" }],
        ["path", { d: "M8 14v1" }],
        ["path", { d: "M16 19v1" }],
        ["path", { d: "M16 14v1" }],
        ["path", { d: "M12 21v1" }],
        ["path", { d: "M12 16v1" }]
      ]
    ];
    var CloudFog = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" }],
        ["path", { d: "M16 17H7" }],
        ["path", { d: "M17 21H9" }]
      ]
    ];
    var CloudHail = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" }],
        ["path", { d: "M16 14v2" }],
        ["path", { d: "M8 14v2" }],
        ["path", { d: "M16 20h.01" }],
        ["path", { d: "M8 20h.01" }],
        ["path", { d: "M12 16v2" }],
        ["path", { d: "M12 22h.01" }]
      ]
    ];
    var CloudLightning = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973" }],
        ["path", { d: "m13 12-3 5h4l-3 5" }]
      ]
    ];
    var CloudMoonRain = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M10.083 9A6.002 6.002 0 0 1 16 4a4.243 4.243 0 0 0 6 6c0 2.22-1.206 4.16-3 5.197"
          }
        ],
        ["path", { d: "M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24" }],
        ["path", { d: "M11 20v2" }],
        ["path", { d: "M7 19v2" }]
      ]
    ];
    var CloudMoon = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M13 16a3 3 0 1 1 0 6H7a5 5 0 1 1 4.9-6Z" }],
        [
          "path",
          { d: "M10.1 9A6 6 0 0 1 16 4a4.24 4.24 0 0 0 6 6 6 6 0 0 1-3 5.197" }
        ]
      ]
    ];
    var CloudOff = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "m2 2 20 20" }],
        ["path", { d: "M5.782 5.782A7 7 0 0 0 9 19h8.5a4.5 4.5 0 0 0 1.307-.193" }],
        [
          "path",
          {
            d: "M21.532 16.5A4.5 4.5 0 0 0 17.5 10h-1.79A7.008 7.008 0 0 0 10 5.07"
          }
        ]
      ]
    ];
    var CloudRainWind = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" }],
        ["path", { d: "m9.2 22 3-7" }],
        ["path", { d: "m9 13-3 7" }],
        ["path", { d: "m17 13-3 7" }]
      ]
    ];
    var CloudRain = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" }],
        ["path", { d: "M16 14v6" }],
        ["path", { d: "M8 14v6" }],
        ["path", { d: "M12 16v6" }]
      ]
    ];
    var CloudSnow = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" }],
        ["path", { d: "M8 15h.01" }],
        ["path", { d: "M8 19h.01" }],
        ["path", { d: "M12 17h.01" }],
        ["path", { d: "M12 21h.01" }],
        ["path", { d: "M16 15h.01" }],
        ["path", { d: "M16 19h.01" }]
      ]
    ];
    var CloudSunRain = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M12 2v2" }],
        ["path", { d: "m4.93 4.93 1.41 1.41" }],
        ["path", { d: "M20 12h2" }],
        ["path", { d: "m19.07 4.93-1.41 1.41" }],
        ["path", { d: "M15.947 12.65a4 4 0 0 0-5.925-4.128" }],
        ["path", { d: "M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24" }],
        ["path", { d: "M11 20v2" }],
        ["path", { d: "M7 19v2" }]
      ]
    ];
    var CloudSun = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M12 2v2" }],
        ["path", { d: "m4.93 4.93 1.41 1.41" }],
        ["path", { d: "M20 12h2" }],
        ["path", { d: "m19.07 4.93-1.41 1.41" }],
        ["path", { d: "M15.947 12.65a4 4 0 0 0-5.925-4.128" }],
        ["path", { d: "M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z" }]
      ]
    ];
    var Cloud = [
      "svg",
      defaultAttributes,
      [["path", { d: "M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" }]]
    ];
    var Cloudy = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M17.5 21H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" }],
        ["path", { d: "M22 10a3 3 0 0 0-3-3h-2.207a5.502 5.502 0 0 0-10.702.5" }]
      ]
    ];
    var Clover = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M16.2 3.8a2.7 2.7 0 0 0-3.81 0l-.4.38-.4-.4a2.7 2.7 0 0 0-3.82 0C6.73 4.85 6.67 6.64 8 8l4 4 4-4c1.33-1.36 1.27-3.15.2-4.2z"
          }
        ],
        [
          "path",
          {
            d: "M8 8c-1.36-1.33-3.15-1.27-4.2-.2a2.7 2.7 0 0 0 0 3.81l.38.4-.4.4a2.7 2.7 0 0 0 0 3.82C4.85 17.27 6.64 17.33 8 16"
          }
        ],
        [
          "path",
          {
            d: "M16 16c1.36 1.33 3.15 1.27 4.2.2a2.7 2.7 0 0 0 0-3.81l-.38-.4.4-.4a2.7 2.7 0 0 0 0-3.82C19.15 6.73 17.36 6.67 16 8"
          }
        ],
        [
          "path",
          {
            d: "M7.8 20.2a2.7 2.7 0 0 0 3.81 0l.4-.38.4.4a2.7 2.7 0 0 0 3.82 0c1.06-1.06 1.12-2.85-.21-4.21l-4-4-4 4c-1.33 1.36-1.27 3.15-.2 4.2z"
          }
        ],
        ["path", { d: "m7 17-5 5" }]
      ]
    ];
    var Club = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M17.28 9.05a5.5 5.5 0 1 0-10.56 0A5.5 5.5 0 1 0 12 17.66a5.5 5.5 0 1 0 5.28-8.6Z"
          }
        ],
        ["path", { d: "M12 17.66L12 22" }]
      ]
    ];
    var Code2 = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "m18 16 4-4-4-4" }],
        ["path", { d: "m6 8-4 4 4 4" }],
        ["path", { d: "m14.5 4-5 16" }]
      ]
    ];
    var Code = [
      "svg",
      defaultAttributes,
      [
        ["polyline", { points: "16 18 22 12 16 6" }],
        ["polyline", { points: "8 6 2 12 8 18" }]
      ]
    ];
    var Codepen = [
      "svg",
      defaultAttributes,
      [
        ["polygon", { points: "12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" }],
        ["line", { x1: "12", x2: "12", y1: "22", y2: "15.5" }],
        ["polyline", { points: "22 8.5 12 15.5 2 8.5" }],
        ["polyline", { points: "2 15.5 12 8.5 22 15.5" }],
        ["line", { x1: "12", x2: "12", y1: "2", y2: "8.5" }]
      ]
    ];
    var Codesandbox = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
          }
        ],
        ["polyline", { points: "7.5 4.21 12 6.81 16.5 4.21" }],
        ["polyline", { points: "7.5 19.79 7.5 14.6 3 12" }],
        ["polyline", { points: "21 12 16.5 14.6 16.5 19.79" }],
        ["polyline", { points: "3.27 6.96 12 12.01 20.73 6.96" }],
        ["line", { x1: "12", x2: "12", y1: "22.08", y2: "12" }]
      ]
    ];
    var Coffee = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M17 8h1a4 4 0 1 1 0 8h-1" }],
        ["path", { d: "M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" }],
        ["line", { x1: "6", x2: "6", y1: "2", y2: "4" }],
        ["line", { x1: "10", x2: "10", y1: "2", y2: "4" }],
        ["line", { x1: "14", x2: "14", y1: "2", y2: "4" }]
      ]
    ];
    var Cog = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" }],
        ["path", { d: "M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" }],
        ["path", { d: "M12 2v2" }],
        ["path", { d: "M12 22v-2" }],
        ["path", { d: "m17 20.66-1-1.73" }],
        ["path", { d: "M11 10.27 7 3.34" }],
        ["path", { d: "m20.66 17-1.73-1" }],
        ["path", { d: "m3.34 7 1.73 1" }],
        ["path", { d: "M14 12h8" }],
        ["path", { d: "M2 12h2" }],
        ["path", { d: "m20.66 7-1.73 1" }],
        ["path", { d: "m3.34 17 1.73-1" }],
        ["path", { d: "m17 3.34-1 1.73" }],
        ["path", { d: "m11 13.73-4 6.93" }]
      ]
    ];
    var Coins = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "8", cy: "8", r: "6" }],
        ["path", { d: "M18.09 10.37A6 6 0 1 1 10.34 18" }],
        ["path", { d: "M7 6h1v4" }],
        ["path", { d: "m16.71 13.88.7.71-2.82 2.82" }]
      ]
    ];
    var Columns = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2" }],
        ["line", { x1: "12", x2: "12", y1: "3", y2: "21" }]
      ]
    ];
    var Combine = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "8", height: "8", x: "2", y: "2", rx: "2" }],
        ["path", { d: "M14 2c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2" }],
        ["path", { d: "M20 2c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2" }],
        ["path", { d: "M10 18H5c-1.7 0-3-1.3-3-3v-1" }],
        ["polyline", { points: "7 21 10 18 7 15" }],
        ["rect", { width: "8", height: "8", x: "14", y: "14", rx: "2" }]
      ]
    ];
    var Command = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"
          }
        ]
      ]
    ];
    var Compass = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "12", cy: "12", r: "10" }],
        [
          "polygon",
          { points: "16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" }
        ]
      ]
    ];
    var Component = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M5.5 8.5 9 12l-3.5 3.5L2 12l3.5-3.5Z" }],
        ["path", { d: "m12 2 3.5 3.5L12 9 8.5 5.5 12 2Z" }],
        ["path", { d: "M18.5 8.5 22 12l-3.5 3.5L15 12l3.5-3.5Z" }],
        ["path", { d: "m12 15 3.5 3.5L12 22l-3.5-3.5L12 15Z" }]
      ]
    ];
    var Computer = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "14", height: "8", x: "5", y: "2", rx: "2" }],
        ["rect", { width: "20", height: "8", x: "2", y: "14", rx: "2" }],
        ["path", { d: "M6 18h2" }],
        ["path", { d: "M12 18h6" }]
      ]
    ];
    var ConciergeBell = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M2 18a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v2H2v-2Z" }],
        ["path", { d: "M20 16a8 8 0 1 0-16 0" }],
        ["path", { d: "M12 4v4" }],
        ["path", { d: "M10 4h4" }]
      ]
    ];
    var Cone = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "m20.9 18.55-8-15.98a1 1 0 0 0-1.8 0l-8 15.98" }],
        ["ellipse", { cx: "12", cy: "19", rx: "9", ry: "3" }]
      ]
    ];
    var Construction = [
      "svg",
      defaultAttributes,
      [
        ["rect", { x: "2", y: "6", width: "20", height: "8", rx: "1" }],
        ["path", { d: "M17 14v7" }],
        ["path", { d: "M7 14v7" }],
        ["path", { d: "M17 3v3" }],
        ["path", { d: "M7 3v3" }],
        ["path", { d: "M10 14 2.3 6.3" }],
        ["path", { d: "m14 6 7.7 7.7" }],
        ["path", { d: "m8 6 8 8" }]
      ]
    ];
    var Contact2 = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M16 18a4 4 0 0 0-8 0" }],
        ["circle", { cx: "12", cy: "11", r: "3" }],
        ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2" }],
        ["line", { x1: "8", x2: "8", y1: "2", y2: "4" }],
        ["line", { x1: "16", x2: "16", y1: "2", y2: "4" }]
      ]
    ];
    var Contact = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2" }],
        ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2" }],
        ["circle", { cx: "12", cy: "10", r: "2" }],
        ["line", { x1: "8", x2: "8", y1: "2", y2: "4" }],
        ["line", { x1: "16", x2: "16", y1: "2", y2: "4" }]
      ]
    ];
    var Container = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M22 7.7c0-.6-.4-1.2-.8-1.5l-6.3-3.9a1.72 1.72 0 0 0-1.7 0l-10.3 6c-.5.2-.9.8-.9 1.4v6.6c0 .5.4 1.2.8 1.5l6.3 3.9a1.72 1.72 0 0 0 1.7 0l10.3-6c.5-.3.9-1 .9-1.5Z"
          }
        ],
        ["path", { d: "M10 21.9V14L2.1 9.1" }],
        ["path", { d: "m10 14 11.9-6.9" }],
        ["path", { d: "M14 19.8v-8.1" }],
        ["path", { d: "M18 17.5V9.4" }]
      ]
    ];
    var Contrast = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "12", cy: "12", r: "10" }],
        ["path", { d: "M12 18a6 6 0 0 0 0-12v12z" }]
      ]
    ];
    var Cookie = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" }],
        ["path", { d: "M8.5 8.5v.01" }],
        ["path", { d: "M16 15.5v.01" }],
        ["path", { d: "M12 12v.01" }],
        ["path", { d: "M11 17v.01" }],
        ["path", { d: "M7 14v.01" }]
      ]
    ];
    var CopyCheck = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "m12 15 2 2 4-4" }],
        ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2" }],
        ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" }]
      ]
    ];
    var CopyMinus = [
      "svg",
      defaultAttributes,
      [
        ["line", { x1: "12", x2: "18", y1: "15", y2: "15" }],
        ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2" }],
        ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" }]
      ]
    ];
    var CopyPlus = [
      "svg",
      defaultAttributes,
      [
        ["line", { x1: "15", x2: "15", y1: "12", y2: "18" }],
        ["line", { x1: "12", x2: "18", y1: "15", y2: "15" }],
        ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2" }],
        ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" }]
      ]
    ];
    var CopySlash = [
      "svg",
      defaultAttributes,
      [
        ["line", { x1: "12", x2: "18", y1: "18", y2: "12" }],
        ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2" }],
        ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" }]
      ]
    ];
    var CopyX = [
      "svg",
      defaultAttributes,
      [
        ["line", { x1: "12", x2: "18", y1: "12", y2: "18" }],
        ["line", { x1: "12", x2: "18", y1: "18", y2: "12" }],
        ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2" }],
        ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" }]
      ]
    ];
    var Copy = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2" }],
        ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" }]
      ]
    ];
    var Copyleft = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "12", cy: "12", r: "10" }],
        ["path", { d: "M9.17 14.83a4 4 0 1 0 0-5.66" }]
      ]
    ];
    var Copyright = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "12", cy: "12", r: "10" }],
        ["path", { d: "M14.83 14.83a4 4 0 1 1 0-5.66" }]
      ]
    ];
    var CornerDownLeft = [
      "svg",
      defaultAttributes,
      [
        ["polyline", { points: "9 10 4 15 9 20" }],
        ["path", { d: "M20 4v7a4 4 0 0 1-4 4H4" }]
      ]
    ];
    var CornerDownRight = [
      "svg",
      defaultAttributes,
      [
        ["polyline", { points: "15 10 20 15 15 20" }],
        ["path", { d: "M4 4v7a4 4 0 0 0 4 4h12" }]
      ]
    ];
    var CornerLeftDown = [
      "svg",
      defaultAttributes,
      [
        ["polyline", { points: "14 15 9 20 4 15" }],
        ["path", { d: "M20 4h-7a4 4 0 0 0-4 4v12" }]
      ]
    ];
    var CornerLeftUp = [
      "svg",
      defaultAttributes,
      [
        ["polyline", { points: "14 9 9 4 4 9" }],
        ["path", { d: "M20 20h-7a4 4 0 0 1-4-4V4" }]
      ]
    ];
    var CornerRightDown = [
      "svg",
      defaultAttributes,
      [
        ["polyline", { points: "10 15 15 20 20 15" }],
        ["path", { d: "M4 4h7a4 4 0 0 1 4 4v12" }]
      ]
    ];
    var CornerRightUp = [
      "svg",
      defaultAttributes,
      [
        ["polyline", { points: "10 9 15 4 20 9" }],
        ["path", { d: "M4 20h7a4 4 0 0 0 4-4V4" }]
      ]
    ];
    var CornerUpLeft = [
      "svg",
      defaultAttributes,
      [
        ["polyline", { points: "9 14 4 9 9 4" }],
        ["path", { d: "M20 20v-7a4 4 0 0 0-4-4H4" }]
      ]
    ];
    var CornerUpRight = [
      "svg",
      defaultAttributes,
      [
        ["polyline", { points: "15 14 20 9 15 4" }],
        ["path", { d: "M4 20v-7a4 4 0 0 1 4-4h12" }]
      ]
    ];
    var Cpu = [
      "svg",
      defaultAttributes,
      [
        ["rect", { x: "4", y: "4", width: "16", height: "16", rx: "2" }],
        ["rect", { x: "9", y: "9", width: "6", height: "6" }],
        ["path", { d: "M15 2v2" }],
        ["path", { d: "M15 20v2" }],
        ["path", { d: "M2 15h2" }],
        ["path", { d: "M2 9h2" }],
        ["path", { d: "M20 15h2" }],
        ["path", { d: "M20 9h2" }],
        ["path", { d: "M9 2v2" }],
        ["path", { d: "M9 20v2" }]
      ]
    ];
    var CreativeCommons = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "12", cy: "12", r: "10" }],
        [
          "path",
          {
            d: "M10 9.3a2.8 2.8 0 0 0-3.5 1 3.1 3.1 0 0 0 0 3.4 2.7 2.7 0 0 0 3.5 1"
          }
        ],
        [
          "path",
          {
            d: "M17 9.3a2.8 2.8 0 0 0-3.5 1 3.1 3.1 0 0 0 0 3.4 2.7 2.7 0 0 0 3.5 1"
          }
        ]
      ]
    ];
    var CreditCard = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "20", height: "14", x: "2", y: "5", rx: "2" }],
        ["line", { x1: "2", x2: "22", y1: "10", y2: "10" }]
      ]
    ];
    var Croissant = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "m4.6 13.11 5.79-3.21c1.89-1.05 4.79 1.78 3.71 3.71l-3.22 5.81C8.8 23.16.79 15.23 4.6 13.11Z"
          }
        ],
        [
          "path",
          {
            d: "m10.5 9.5-1-2.29C9.2 6.48 8.8 6 8 6H4.5C2.79 6 2 6.5 2 8.5a7.71 7.71 0 0 0 2 4.83"
          }
        ],
        ["path", { d: "M8 6c0-1.55.24-4-2-4-2 0-2.5 2.17-2.5 4" }],
        [
          "path",
          {
            d: "m14.5 13.5 2.29 1c.73.3 1.21.7 1.21 1.5v3.5c0 1.71-.5 2.5-2.5 2.5a7.71 7.71 0 0 1-4.83-2"
          }
        ],
        ["path", { d: "M18 16c1.55 0 4-.24 4 2 0 2-2.17 2.5-4 2.5" }]
      ]
    ];
    var Crop = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M6 2v14a2 2 0 0 0 2 2h14" }],
        ["path", { d: "M18 22V8a2 2 0 0 0-2-2H2" }]
      ]
    ];
    var Cross = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M11 2a2 2 0 0 0-2 2v5H4a2 2 0 0 0-2 2v2c0 1.1.9 2 2 2h5v5c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2v-5h5a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-5V4a2 2 0 0 0-2-2h-2z"
          }
        ]
      ]
    ];
    var Crosshair = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "12", cy: "12", r: "10" }],
        ["line", { x1: "22", x2: "18", y1: "12", y2: "12" }],
        ["line", { x1: "6", x2: "2", y1: "12", y2: "12" }],
        ["line", { x1: "12", x2: "12", y1: "6", y2: "2" }],
        ["line", { x1: "12", x2: "12", y1: "22", y2: "18" }]
      ]
    ];
    var Crown = [
      "svg",
      defaultAttributes,
      [["path", { d: "m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14" }]]
    ];
    var Cuboid = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "m21.12 6.4-6.05-4.06a2 2 0 0 0-2.17-.05L2.95 8.41a2 2 0 0 0-.95 1.7v5.82a2 2 0 0 0 .88 1.66l6.05 4.07a2 2 0 0 0 2.17.05l9.95-6.12a2 2 0 0 0 .95-1.7V8.06a2 2 0 0 0-.88-1.66Z"
          }
        ],
        ["path", { d: "M10 22v-8L2.25 9.15" }],
        ["path", { d: "m10 14 11.77-6.87" }]
      ]
    ];
    var CupSoda = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          { d: "m6 8 1.75 12.28a2 2 0 0 0 2 1.72h4.54a2 2 0 0 0 2-1.72L18 8" }
        ],
        ["path", { d: "M5 8h14" }],
        ["path", { d: "M7 15a6.47 6.47 0 0 1 5 0 6.47 6.47 0 0 0 5 0" }],
        ["path", { d: "m12 8 1-6h2" }]
      ]
    ];
    var Currency = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "12", cy: "12", r: "8" }],
        ["line", { x1: "3", x2: "6", y1: "3", y2: "6" }],
        ["line", { x1: "21", x2: "18", y1: "3", y2: "6" }],
        ["line", { x1: "3", x2: "6", y1: "21", y2: "18" }],
        ["line", { x1: "21", x2: "18", y1: "21", y2: "18" }]
      ]
    ];
    var Cylinder = [
      "svg",
      defaultAttributes,
      [
        ["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3" }],
        ["path", { d: "M3 5v14a9 3 0 0 0 18 0V5" }]
      ]
    ];
    var DatabaseBackup = [
      "svg",
      defaultAttributes,
      [
        ["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3" }],
        ["path", { d: "M3 12a9 3 0 0 0 5 2.69" }],
        ["path", { d: "M21 9.3V5" }],
        ["path", { d: "M3 5v14a9 3 0 0 0 6.47 2.88" }],
        ["path", { d: "M12 12v4h4" }],
        [
          "path",
          {
            d: "M13 20a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L12 16"
          }
        ]
      ]
    ];
    var DatabaseZap = [
      "svg",
      defaultAttributes,
      [
        ["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3" }],
        ["path", { d: "M3 5V19A9 3 0 0 0 15 21.84" }],
        ["path", { d: "M21 5V8" }],
        ["path", { d: "M21 12L18 17H22L19 22" }],
        ["path", { d: "M3 12A9 3 0 0 0 14.59 14.87" }]
      ]
    ];
    var Database = [
      "svg",
      defaultAttributes,
      [
        ["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3" }],
        ["path", { d: "M3 5V19A9 3 0 0 0 21 19V5" }],
        ["path", { d: "M3 12A9 3 0 0 0 21 12" }]
      ]
    ];
    var Delete = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M20 5H9l-7 7 7 7h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z" }],
        ["line", { x1: "18", x2: "12", y1: "9", y2: "15" }],
        ["line", { x1: "12", x2: "18", y1: "9", y2: "15" }]
      ]
    ];
    var Dessert = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "12", cy: "4", r: "2" }],
        [
          "path",
          {
            d: "M10.2 3.2C5.5 4 2 8.1 2 13a2 2 0 0 0 4 0v-1a2 2 0 0 1 4 0v4a2 2 0 0 0 4 0v-4a2 2 0 0 1 4 0v1a2 2 0 0 0 4 0c0-4.9-3.5-9-8.2-9.8"
          }
        ],
        ["path", { d: "M3.2 14.8a9 9 0 0 0 17.6 0" }]
      ]
    ];
    var Diameter = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "19", cy: "19", r: "2" }],
        ["circle", { cx: "5", cy: "5", r: "2" }],
        ["path", { d: "M6.48 3.66a10 10 0 0 1 13.86 13.86" }],
        ["path", { d: "m6.41 6.41 11.18 11.18" }],
        ["path", { d: "M3.66 6.48a10 10 0 0 0 13.86 13.86" }]
      ]
    ];
    var Diamond = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z"
          }
        ]
      ]
    ];
    var Dice1 = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2" }],
        ["path", { d: "M12 12h.01" }]
      ]
    ];
    var Dice2 = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2" }],
        ["path", { d: "M15 9h.01" }],
        ["path", { d: "M9 15h.01" }]
      ]
    ];
    var Dice3 = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2" }],
        ["path", { d: "M16 8h.01" }],
        ["path", { d: "M12 12h.01" }],
        ["path", { d: "M8 16h.01" }]
      ]
    ];
    var Dice4 = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2" }],
        ["path", { d: "M16 8h.01" }],
        ["path", { d: "M8 8h.01" }],
        ["path", { d: "M8 16h.01" }],
        ["path", { d: "M16 16h.01" }]
      ]
    ];
    var Dice5 = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2" }],
        ["path", { d: "M16 8h.01" }],
        ["path", { d: "M8 8h.01" }],
        ["path", { d: "M8 16h.01" }],
        ["path", { d: "M16 16h.01" }],
        ["path", { d: "M12 12h.01" }]
      ]
    ];
    var Dice6 = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2" }],
        ["path", { d: "M16 8h.01" }],
        ["path", { d: "M16 12h.01" }],
        ["path", { d: "M16 16h.01" }],
        ["path", { d: "M8 8h.01" }],
        ["path", { d: "M8 12h.01" }],
        ["path", { d: "M8 16h.01" }]
      ]
    ];
    var Dices = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "12", height: "12", x: "2", y: "10", rx: "2", ry: "2" }],
        [
          "path",
          {
            d: "m17.92 14 3.5-3.5a2.24 2.24 0 0 0 0-3l-5-4.92a2.24 2.24 0 0 0-3 0L10 6"
          }
        ],
        ["path", { d: "M6 18h.01" }],
        ["path", { d: "M10 14h.01" }],
        ["path", { d: "M15 6h.01" }],
        ["path", { d: "M18 9h.01" }]
      ]
    ];
    var Diff = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M12 3v14" }],
        ["path", { d: "M5 10h14" }],
        ["path", { d: "M5 21h14" }]
      ]
    ];
    var Disc2 = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "12", cy: "12", r: "10" }],
        ["circle", { cx: "12", cy: "12", r: "4" }],
        ["path", { d: "M12 12h.01" }]
      ]
    ];
    var Disc3 = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "12", cy: "12", r: "10" }],
        ["path", { d: "M6 12c0-1.7.7-3.2 1.8-4.2" }],
        ["circle", { cx: "12", cy: "12", r: "2" }],
        ["path", { d: "M18 12c0 1.7-.7 3.2-1.8 4.2" }]
      ]
    ];
    var Disc = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "12", cy: "12", r: "10" }],
        ["circle", { cx: "12", cy: "12", r: "2" }]
      ]
    ];
    var DivideCircle = [
      "svg",
      defaultAttributes,
      [
        ["line", { x1: "8", x2: "16", y1: "12", y2: "12" }],
        ["line", { x1: "12", x2: "12", y1: "16", y2: "16" }],
        ["line", { x1: "12", x2: "12", y1: "8", y2: "8" }],
        ["circle", { cx: "12", cy: "12", r: "10" }]
      ]
    ];
    var DivideSquare = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2" }],
        ["line", { x1: "8", x2: "16", y1: "12", y2: "12" }],
        ["line", { x1: "12", x2: "12", y1: "16", y2: "16" }],
        ["line", { x1: "12", x2: "12", y1: "8", y2: "8" }]
      ]
    ];
    var Divide = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "12", cy: "6", r: "1" }],
        ["line", { x1: "5", x2: "19", y1: "12", y2: "12" }],
        ["circle", { cx: "12", cy: "18", r: "1" }]
      ]
    ];
    var DnaOff = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          { d: "M15 2c-1.35 1.5-2.092 3-2.5 4.5M9 22c1.35-1.5 2.092-3 2.5-4.5" }
        ],
        [
          "path",
          { d: "M2 15c3.333-3 6.667-3 10-3m10-3c-1.5 1.35-3 2.092-4.5 2.5" }
        ],
        ["path", { d: "m17 6-2.5-2.5" }],
        ["path", { d: "m14 8-1.5-1.5" }],
        ["path", { d: "m7 18 2.5 2.5" }],
        ["path", { d: "m3.5 14.5.5.5" }],
        ["path", { d: "m20 9 .5.5" }],
        ["path", { d: "m6.5 12.5 1 1" }],
        ["path", { d: "m16.5 10.5 1 1" }],
        ["path", { d: "m10 16 1.5 1.5" }],
        ["line", { x1: "2", x2: "22", y1: "2", y2: "22" }]
      ]
    ];
    var Dna = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M2 15c6.667-6 13.333 0 20-6" }],
        ["path", { d: "M9 22c1.798-1.998 2.518-3.995 2.807-5.993" }],
        ["path", { d: "M15 2c-1.798 1.998-2.518 3.995-2.807 5.993" }],
        ["path", { d: "m17 6-2.5-2.5" }],
        ["path", { d: "m14 8-1-1" }],
        ["path", { d: "m7 18 2.5 2.5" }],
        ["path", { d: "m3.5 14.5.5.5" }],
        ["path", { d: "m20 9 .5.5" }],
        ["path", { d: "m6.5 12.5 1 1" }],
        ["path", { d: "m16.5 10.5 1 1" }],
        ["path", { d: "m10 16 1.5 1.5" }]
      ]
    ];
    var Dog = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M10 5.172C10 3.782 8.423 2.679 6.5 3c-2.823.47-4.113 6.006-4 7 .08.703 1.725 1.722 3.656 1 1.261-.472 1.96-1.45 2.344-2.5"
          }
        ],
        [
          "path",
          {
            d: "M14.267 5.172c0-1.39 1.577-2.493 3.5-2.172 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.855-1.45-2.239-2.5"
          }
        ],
        ["path", { d: "M8 14v.5" }],
        ["path", { d: "M16 14v.5" }],
        ["path", { d: "M11.25 16.25h1.5L12 17l-.75-.75Z" }],
        [
          "path",
          {
            d: "M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444c0-1.061-.162-2.2-.493-3.309m-9.243-6.082A8.801 8.801 0 0 1 12 5c.78 0 1.5.108 2.161.306"
          }
        ]
      ]
    ];
    var DollarSign = [
      "svg",
      defaultAttributes,
      [
        ["line", { x1: "12", x2: "12", y1: "2", y2: "22" }],
        ["path", { d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" }]
      ]
    ];
    var Donut = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M20.5 10a2.5 2.5 0 0 1-2.4-3H18a2.95 2.95 0 0 1-2.6-4.4 10 10 0 1 0 6.3 7.1c-.3.2-.8.3-1.2.3"
          }
        ],
        ["circle", { cx: "12", cy: "12", r: "3" }]
      ]
    ];
    var DoorClosed = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14" }],
        ["path", { d: "M2 20h20" }],
        ["path", { d: "M14 12v.01" }]
      ]
    ];
    var DoorOpen = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M13 4h3a2 2 0 0 1 2 2v14" }],
        ["path", { d: "M2 20h3" }],
        ["path", { d: "M13 20h9" }],
        ["path", { d: "M10 12v.01" }],
        [
          "path",
          {
            d: "M13 4.562v16.157a1 1 0 0 1-1.242.97L5 20V5.562a2 2 0 0 1 1.515-1.94l4-1A2 2 0 0 1 13 4.561Z"
          }
        ]
      ]
    ];
    var Dot = [
      "svg",
      defaultAttributes,
      [["circle", { cx: "12.1", cy: "12.1", r: "1" }]]
    ];
    var DownloadCloud = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" }],
        ["path", { d: "M12 12v9" }],
        ["path", { d: "m8 17 4 4 4-4" }]
      ]
    ];
    var Download = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }],
        ["polyline", { points: "7 10 12 15 17 10" }],
        ["line", { x1: "12", x2: "12", y1: "15", y2: "3" }]
      ]
    ];
    var DraftingCompass = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "12", cy: "5", r: "2" }],
        ["path", { d: "m3 21 8.02-14.26" }],
        ["path", { d: "m12.99 6.74 1.93 3.44" }],
        ["path", { d: "M19 12c-3.87 4-10.13 4-14 0" }],
        ["path", { d: "m21 21-2.16-3.84" }]
      ]
    ];
    var Drama = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M 10 11h.01" }],
        ["path", { d: "M 14 6h.01" }],
        ["path", { d: "M 18 6h.01" }],
        ["path", { d: "M 6.5 13.1h.01" }],
        ["path", { d: "M22 5c0 9-4 12-6 12s-6-3-6-12c0-2 2-3 6-3s6 1 6 3" }],
        ["path", { d: "M17.4 9.9c-.8.8-2 .8-2.8 0" }],
        [
          "path",
          {
            d: "M10.1 7.1C9 7.2 7.7 7.7 6 8.6c-3.5 2-4.7 3.9-3.7 5.6 4.5 7.8 9.5 8.4 11.2 7.4.9-.5 1.9-2.1 1.9-4.7"
          }
        ],
        ["path", { d: "M9.1 16.5c.3-1.1 1.4-1.7 2.4-1.4" }]
      ]
    ];
    var Dribbble = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "12", cy: "12", r: "10" }],
        ["path", { d: "M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" }],
        ["path", { d: "M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32" }],
        ["path", { d: "M8.56 2.75c4.37 6 6 9.42 8 17.72" }]
      ]
    ];
    var Droplet = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"
          }
        ]
      ]
    ];
    var Droplets = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"
          }
        ],
        [
          "path",
          {
            d: "M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"
          }
        ]
      ]
    ];
    var Drumstick = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M15.45 15.4c-2.13.65-4.3.32-5.7-1.1-2.29-2.27-1.76-6.5 1.17-9.42 2.93-2.93 7.15-3.46 9.43-1.18 1.41 1.41 1.74 3.57 1.1 5.71-1.4-.51-3.26-.02-4.64 1.36-1.38 1.38-1.87 3.23-1.36 4.63z"
          }
        ],
        [
          "path",
          {
            d: "m11.25 15.6-2.16 2.16a2.5 2.5 0 1 1-4.56 1.73 2.49 2.49 0 0 1-1.41-4.24 2.5 2.5 0 0 1 3.14-.32l2.16-2.16"
          }
        ]
      ]
    ];
    var Dumbbell = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "m6.5 6.5 11 11" }],
        ["path", { d: "m21 21-1-1" }],
        ["path", { d: "m3 3 1 1" }],
        ["path", { d: "m18 22 4-4" }],
        ["path", { d: "m2 6 4-4" }],
        ["path", { d: "m3 10 7-7" }],
        ["path", { d: "m14 21 7-7" }]
      ]
    ];
    var EarOff = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M6 18.5a3.5 3.5 0 1 0 7 0c0-1.57.92-2.52 2.04-3.46" }],
        ["path", { d: "M6 8.5c0-.75.13-1.47.36-2.14" }],
        ["path", { d: "M8.8 3.15A6.5 6.5 0 0 1 19 8.5c0 1.63-.44 2.81-1.09 3.76" }],
        ["path", { d: "M12.5 6A2.5 2.5 0 0 1 15 8.5M10 13a2 2 0 0 0 1.82-1.18" }],
        ["line", { x1: "2", x2: "22", y1: "2", y2: "22" }]
      ]
    ];
    var Ear = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M6 8.5a6.5 6.5 0 1 1 13 0c0 6-6 6-6 10a3.5 3.5 0 1 1-7 0" }],
        ["path", { d: "M15 8.5a2.5 2.5 0 0 0-5 0v1a2 2 0 1 1 0 4" }]
      ]
    ];
    var EggFried = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "11.5", cy: "12.5", r: "3.5" }],
        [
          "path",
          {
            d: "M3 8c0-3.5 2.5-6 6.5-6 5 0 4.83 3 7.5 5s5 2 5 6c0 4.5-2.5 6.5-7 6.5-2.5 0-2.5 2.5-6 2.5s-7-2-7-5.5c0-3 1.5-3 1.5-5C3.5 10 3 9 3 8Z"
          }
        ]
      ]
    ];
    var EggOff = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M6.399 6.399C5.362 8.157 4.65 10.189 4.5 12c-.37 4.43 1.27 9.95 7.5 10 3.256-.026 5.259-1.547 6.375-3.625"
          }
        ],
        [
          "path",
          {
            d: "M19.532 13.875A14.07 14.07 0 0 0 19.5 12c-.36-4.34-3.95-9.96-7.5-10-1.04.012-2.082.502-3.046 1.297"
          }
        ],
        ["line", { x1: "2", x2: "22", y1: "2", y2: "22" }]
      ]
    ];
    var Egg = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M12 22c6.23-.05 7.87-5.57 7.5-10-.36-4.34-3.95-9.96-7.5-10-3.55.04-7.14 5.66-7.5 10-.37 4.43 1.27 9.95 7.5 10z"
          }
        ]
      ]
    ];
    var EqualNot = [
      "svg",
      defaultAttributes,
      [
        ["line", { x1: "5", x2: "19", y1: "9", y2: "9" }],
        ["line", { x1: "5", x2: "19", y1: "15", y2: "15" }],
        ["line", { x1: "19", x2: "5", y1: "5", y2: "19" }]
      ]
    ];
    var Equal = [
      "svg",
      defaultAttributes,
      [
        ["line", { x1: "5", x2: "19", y1: "9", y2: "9" }],
        ["line", { x1: "5", x2: "19", y1: "15", y2: "15" }]
      ]
    ];
    var Eraser = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"
          }
        ],
        ["path", { d: "M22 21H7" }],
        ["path", { d: "m5 11 9 9" }]
      ]
    ];
    var Euro = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M4 10h12" }],
        ["path", { d: "M4 14h9" }],
        [
          "path",
          {
            d: "M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2"
          }
        ]
      ]
    ];
    var Expand = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "m21 21-6-6m6 6v-4.8m0 4.8h-4.8" }],
        ["path", { d: "M3 16.2V21m0 0h4.8M3 21l6-6" }],
        ["path", { d: "M21 7.8V3m0 0h-4.8M21 3l-6 6" }],
        ["path", { d: "M3 7.8V3m0 0h4.8M3 3l6 6" }]
      ]
    ];
    var ExternalLink = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" }],
        ["polyline", { points: "15 3 21 3 21 9" }],
        ["line", { x1: "10", x2: "21", y1: "14", y2: "3" }]
      ]
    ];
    var EyeOff = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M9.88 9.88a3 3 0 1 0 4.24 4.24" }],
        [
          "path",
          {
            d: "M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"
          }
        ],
        [
          "path",
          {
            d: "M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"
          }
        ],
        ["line", { x1: "2", x2: "22", y1: "2", y2: "22" }]
      ]
    ];
    var Eye = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" }],
        ["circle", { cx: "12", cy: "12", r: "3" }]
      ]
    ];
    var Facebook = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
          }
        ]
      ]
    ];
    var Factory = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"
          }
        ],
        ["path", { d: "M17 18h1" }],
        ["path", { d: "M12 18h1" }],
        ["path", { d: "M7 18h1" }]
      ]
    ];
    var Fan = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M10.827 16.379a6.082 6.082 0 0 1-8.618-7.002l5.412 1.45a6.082 6.082 0 0 1 7.002-8.618l-1.45 5.412a6.082 6.082 0 0 1 8.618 7.002l-5.412-1.45a6.082 6.082 0 0 1-7.002 8.618l1.45-5.412Z"
          }
        ],
        ["path", { d: "M12 12v.01" }]
      ]
    ];
    var FastForward = [
      "svg",
      defaultAttributes,
      [
        ["polygon", { points: "13 19 22 12 13 5 13 19" }],
        ["polygon", { points: "2 19 11 12 2 5 2 19" }]
      ]
    ];
    var Feather = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" }],
        ["line", { x1: "16", x2: "2", y1: "8", y2: "22" }],
        ["line", { x1: "17.5", x2: "9", y1: "15", y2: "15" }]
      ]
    ];
    var FerrisWheel = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "12", cy: "12", r: "2" }],
        ["path", { d: "M12 2v4" }],
        ["path", { d: "m6.8 15-3.5 2" }],
        ["path", { d: "m20.7 7-3.5 2" }],
        ["path", { d: "M6.8 9 3.3 7" }],
        ["path", { d: "m20.7 17-3.5-2" }],
        ["path", { d: "m9 22 3-8 3 8" }],
        ["path", { d: "M8 22h8" }],
        ["path", { d: "M18 18.7a9 9 0 1 0-12 0" }]
      ]
    ];
    var Figma = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" }],
        ["path", { d: "M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" }],
        ["path", { d: "M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" }],
        ["path", { d: "M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" }],
        [
          "path",
          { d: "M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" }
        ]
      ]
    ];
    var FileArchive = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M4 22V4c0-.5.2-1 .6-1.4C5 2.2 5.5 2 6 2h8.5L20 7.5V20c0 .5-.2 1-.6 1.4-.4.4-.9.6-1.4.6h-2"
          }
        ],
        ["polyline", { points: "14 2 14 8 20 8" }],
        ["circle", { cx: "10", cy: "20", r: "2" }],
        ["path", { d: "M10 7V6" }],
        ["path", { d: "M10 12v-1" }],
        ["path", { d: "M10 18v-2" }]
      ]
    ];
    var FileAudio2 = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v2" }],
        ["polyline", { points: "14 2 14 8 20 8" }],
        ["path", { d: "M2 17v-3a4 4 0 0 1 8 0v3" }],
        ["circle", { cx: "9", cy: "17", r: "1" }],
        ["circle", { cx: "3", cy: "17", r: "1" }]
      ]
    ];
    var FileAudio = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M17.5 22h.5c.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4V7.5L14.5 2H6c-.5 0-1 .2-1.4.6C4.2 3 4 3.5 4 4v3"
          }
        ],
        ["polyline", { points: "14 2 14 8 20 8" }],
        ["path", { d: "M10 20v-1a2 2 0 1 1 4 0v1a2 2 0 1 1-4 0Z" }],
        ["path", { d: "M6 20v-1a2 2 0 1 0-4 0v1a2 2 0 1 0 4 0Z" }],
        ["path", { d: "M2 19v-3a6 6 0 0 1 12 0v3" }]
      ]
    ];
    var FileAxis3d = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"
          }
        ],
        ["polyline", { points: "14 2 14 8 20 8" }],
        ["path", { d: "M8 10v8h8" }],
        ["path", { d: "m8 18 4-4" }]
      ]
    ];
    var FileBadge2 = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"
          }
        ],
        ["path", { d: "M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" }],
        ["path", { d: "m14 12.5 1 5.5-3-1-3 1 1-5.5" }]
      ]
    ];
    var FileBadge = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M4 7V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-6" }],
        ["polyline", { points: "14 2 14 8 20 8" }],
        ["path", { d: "M5 17a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" }],
        ["path", { d: "M7 16.5 8 22l-3-1-3 1 1-5.5" }]
      ]
    ];
    var FileBarChart2 = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"
          }
        ],
        ["polyline", { points: "14 2 14 8 20 8" }],
        ["path", { d: "M12 18v-6" }],
        ["path", { d: "M8 18v-1" }],
        ["path", { d: "M16 18v-3" }]
      ]
    ];
    var FileBarChart = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"
          }
        ],
        ["polyline", { points: "14 2 14 8 20 8" }],
        ["path", { d: "M12 18v-4" }],
        ["path", { d: "M8 18v-2" }],
        ["path", { d: "M16 18v-6" }]
      ]
    ];
    var FileBox = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M14.5 22H18a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4" }],
        ["polyline", { points: "14 2 14 8 20 8" }],
        [
          "path",
          {
            d: "M2.97 13.12c-.6.36-.97 1.02-.97 1.74v3.28c0 .72.37 1.38.97 1.74l3 1.83c.63.39 1.43.39 2.06 0l3-1.83c.6-.36.97-1.02.97-1.74v-3.28c0-.72-.37-1.38-.97-1.74l-3-1.83a1.97 1.97 0 0 0-2.06 0l-3 1.83Z"
          }
        ],
        ["path", { d: "m7 17-4.74-2.85" }],
        ["path", { d: "m7 17 4.74-2.85" }],
        ["path", { d: "M7 17v5" }]
      ]
    ];
    var FileCheck2 = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4" }],
        ["polyline", { points: "14 2 14 8 20 8" }],
        ["path", { d: "m3 15 2 2 4-4" }]
      ]
    ];
    var FileCheck = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"
          }
        ],
        ["polyline", { points: "14 2 14 8 20 8" }],
        ["path", { d: "m9 15 2 2 4-4" }]
      ]
    ];
    var FileClock = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M16 22h2c.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4V7.5L14.5 2H6c-.5 0-1 .2-1.4.6C4.2 3 4 3.5 4 4v3"
          }
        ],
        ["polyline", { points: "14 2 14 8 20 8" }],
        ["circle", { cx: "8", cy: "16", r: "6" }],
        ["path", { d: "M9.5 17.5 8 16.25V14" }]
      ]
    ];
    var FileCode2 = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4" }],
        ["polyline", { points: "14 2 14 8 20 8" }],
        ["path", { d: "m9 18 3-3-3-3" }],
        ["path", { d: "m5 12-3 3 3 3" }]
      ]
    ];
    var FileCode = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"
          }
        ],
        ["polyline", { points: "14 2 14 8 20 8" }],
        ["path", { d: "m10 13-2 2 2 2" }],
        ["path", { d: "m14 17 2-2-2-2" }]
      ]
    ];
    var FileCog = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "6", cy: "13", r: "3" }],
        ["path", { d: "m9.7 14.4-.9-.3" }],
        ["path", { d: "m3.2 11.9-.9-.3" }],
        ["path", { d: "m4.6 16.7.3-.9" }],
        ["path", { d: "m7.6 16.7-.4-1" }],
        ["path", { d: "m4.8 10.3-.4-1" }],
        ["path", { d: "m2.3 14.6 1-.4" }],
        ["path", { d: "m8.7 11.8 1-.4" }],
        ["path", { d: "m7.4 9.3-.3.9" }],
        ["path", { d: "M14 2v6h6" }],
        [
          "path",
          {
            d: "M4 5.5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-1.5"
          }
        ]
      ]
    ];
    var FileDiff = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"
          }
        ],
        ["path", { d: "M12 13V7" }],
        ["path", { d: "M9 10h6" }],
        ["path", { d: "M9 17h6" }]
      ]
    ];
    var FileDigit = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "4", height: "6", x: "2", y: "12", rx: "2" }],
        ["path", { d: "M14 2v6h6" }],
        ["path", { d: "M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4" }],
        ["path", { d: "M10 12h2v6" }],
        ["path", { d: "M10 18h4" }]
      ]
    ];
    var FileDown = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"
          }
        ],
        ["polyline", { points: "14 2 14 8 20 8" }],
        ["path", { d: "M12 18v-6" }],
        ["path", { d: "m9 15 3 3 3-3" }]
      ]
    ];
    var FileEdit = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M4 13.5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-5.5" }],
        ["polyline", { points: "14 2 14 8 20 8" }],
        [
          "path",
          {
            d: "M10.42 12.61a2.1 2.1 0 1 1 2.97 2.97L7.95 21 4 22l.99-3.95 5.43-5.44Z"
          }
        ]
      ]
    ];
    var FileHeart = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M4 6V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2H4" }],
        ["polyline", { points: "14 2 14 8 20 8" }],
        [
          "path",
          {
            d: "M10.29 10.7a2.43 2.43 0 0 0-2.66-.52c-.29.12-.56.3-.78.53l-.35.34-.35-.34a2.43 2.43 0 0 0-2.65-.53c-.3.12-.56.3-.79.53-.95.94-1 2.53.2 3.74L6.5 18l3.6-3.55c1.2-1.21 1.14-2.8.19-3.74Z"
          }
        ]
      ]
    ];
    var FileImage = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"
          }
        ],
        ["polyline", { points: "14 2 14 8 20 8" }],
        ["circle", { cx: "10", cy: "13", r: "2" }],
        ["path", { d: "m20 17-1.09-1.09a2 2 0 0 0-2.82 0L10 22" }]
      ]
    ];
    var FileInput = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4" }],
        ["polyline", { points: "14 2 14 8 20 8" }],
        ["path", { d: "M2 15h10" }],
        ["path", { d: "m9 18 3-3-3-3" }]
      ]
    ];
    var FileJson2 = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4" }],
        ["polyline", { points: "14 2 14 8 20 8" }],
        [
          "path",
          {
            d: "M4 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1"
          }
        ],
        [
          "path",
          {
            d: "M8 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1"
          }
        ]
      ]
    ];
    var FileJson = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"
          }
        ],
        ["polyline", { points: "14 2 14 8 20 8" }],
        [
          "path",
          {
            d: "M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1"
          }
        ],
        [
          "path",
          {
            d: "M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1"
          }
        ]
      ]
    ];
    var FileKey2 = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M4 10V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2H4" }],
        ["polyline", { points: "14 2 14 8 20 8" }],
        ["circle", { cx: "4", cy: "16", r: "2" }],
        ["path", { d: "m10 10-4.5 4.5" }],
        ["path", { d: "m9 11 1 1" }]
      ]
    ];
    var FileKey = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"
          }
        ],
        ["circle", { cx: "10", cy: "16", r: "2" }],
        ["path", { d: "m16 10-4.5 4.5" }],
        ["path", { d: "m15 11 1 1" }]
      ]
    ];
    var FileLineChart = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"
          }
        ],
        ["polyline", { points: "14 2 14 8 20 8" }],
        ["path", { d: "m16 13-3.5 3.5-2-2L8 17" }]
      ]
    ];
    var FileLock2 = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M4 5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2H4" }],
        ["polyline", { points: "14 2 14 8 20 8" }],
        ["rect", { width: "8", height: "5", x: "2", y: "13", rx: "1" }],
        ["path", { d: "M8 13v-2a2 2 0 1 0-4 0v2" }]
      ]
    ];
    var FileLock = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"
          }
        ],
        ["rect", { width: "8", height: "6", x: "8", y: "12", rx: "1" }],
        ["path", { d: "M15 12v-2a3 3 0 1 0-6 0v2" }]
      ]
    ];
    var FileMinus2 = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4" }],
        ["polyline", { points: "14 2 14 8 20 8" }],
        ["path", { d: "M3 15h6" }]
      ]
    ];
    var FileMinus = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"
          }
        ],
        ["polyline", { points: "14 2 14 8 20 8" }],
        ["line", { x1: "9", x2: "15", y1: "15", y2: "15" }]
      ]
    ];
    var FileOutput = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4" }],
        ["polyline", { points: "14 2 14 8 20 8" }],
        ["path", { d: "M2 15h10" }],
        ["path", { d: "m5 12-3 3 3 3" }]
      ]
    ];
    var FilePieChart = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M16 22h2a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v3" }],
        ["polyline", { points: "14 2 14 8 20 8" }],
        ["path", { d: "M4.04 11.71a5.84 5.84 0 1 0 8.2 8.29" }],
        ["path", { d: "M13.83 16A5.83 5.83 0 0 0 8 10.17V16h5.83Z" }]
      ]
    ];
    var FilePlus2 = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4" }],
        ["polyline", { points: "14 2 14 8 20 8" }],
        ["path", { d: "M3 15h6" }],
        ["path", { d: "M6 12v6" }]
      ]
    ];
    var FilePlus = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"
          }
        ],
        ["polyline", { points: "14 2 14 8 20 8" }],
        ["line", { x1: "12", x2: "12", y1: "18", y2: "12" }],
        ["line", { x1: "9", x2: "15", y1: "15", y2: "15" }]
      ]
    ];
    var FileQuestion = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"
          }
        ],
        [
          "path",
          {
            d: "M10 10.3c.2-.4.5-.8.9-1a2.1 2.1 0 0 1 2.6.4c.3.4.5.8.5 1.3 0 1.3-2 2-2 2"
          }
        ],
        ["path", { d: "M12 17h.01" }]
      ]
    ];
    var FileScan = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M20 10V7.5L14.5 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h4.5" }],
        ["polyline", { points: "14 2 14 8 20 8" }],
        ["path", { d: "M16 22a2 2 0 0 1-2-2" }],
        ["path", { d: "M20 22a2 2 0 0 0 2-2" }],
        ["path", { d: "M20 14a2 2 0 0 1 2 2" }],
        ["path", { d: "M16 14a2 2 0 0 0-2 2" }]
      ]
    ];
    var FileSearch2 = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"
          }
        ],
        ["polyline", { points: "14 2 14 8 20 8" }],
        ["circle", { cx: "11.5", cy: "14.5", r: "2.5" }],
        ["path", { d: "M13.25 16.25 15 18" }]
      ]
    ];
    var FileSearch = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v3" }],
        ["polyline", { points: "14 2 14 8 20 8" }],
        ["path", { d: "M5 17a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" }],
        ["path", { d: "m9 18-1.5-1.5" }]
      ]
    ];
    var FileSignature = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M20 19.5v.5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8.5L18 5.5"
          }
        ],
        ["path", { d: "M8 18h1" }],
        [
          "path",
          {
            d: "M18.42 9.61a2.1 2.1 0 1 1 2.97 2.97L16.95 17 13 18l.99-3.95 4.43-4.44Z"
          }
        ]
      ]
    ];
    var FileSpreadsheet = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"
          }
        ],
        ["polyline", { points: "14 2 14 8 20 8" }],
        ["path", { d: "M8 13h2" }],
        ["path", { d: "M8 17h2" }],
        ["path", { d: "M14 13h2" }],
        ["path", { d: "M14 17h2" }]
      ]
    ];
    var FileStack = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M16 2v5h5" }],
        [
          "path",
          {
            d: "M21 6v6.5c0 .8-.7 1.5-1.5 1.5h-7c-.8 0-1.5-.7-1.5-1.5v-9c0-.8.7-1.5 1.5-1.5H17l4 4z"
          }
        ],
        ["path", { d: "M7 8v8.8c0 .3.2.6.4.8.2.2.5.4.8.4H15" }],
        ["path", { d: "M3 12v8.8c0 .3.2.6.4.8.2.2.5.4.8.4H11" }]
      ]
    ];
    var FileSymlink = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v7" }],
        ["polyline", { points: "14 2 14 8 20 8" }],
        ["path", { d: "m10 18 3-3-3-3" }],
        ["path", { d: "M4 18v-1a2 2 0 0 1 2-2h6" }]
      ]
    ];
    var FileTerminal = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"
          }
        ],
        ["polyline", { points: "14 2 14 8 20 8" }],
        ["path", { d: "m8 16 2-2-2-2" }],
        ["path", { d: "M12 18h4" }]
      ]
    ];
    var FileText = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"
          }
        ],
        ["polyline", { points: "14 2 14 8 20 8" }],
        ["line", { x1: "16", x2: "8", y1: "13", y2: "13" }],
        ["line", { x1: "16", x2: "8", y1: "17", y2: "17" }],
        ["line", { x1: "10", x2: "8", y1: "9", y2: "9" }]
      ]
    ];
    var FileType2 = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4" }],
        ["polyline", { points: "14 2 14 8 20 8" }],
        ["path", { d: "M2 13v-1h6v1" }],
        ["path", { d: "M4 18h2" }],
        ["path", { d: "M5 12v6" }]
      ]
    ];
    var FileType = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"
          }
        ],
        ["polyline", { points: "14 2 14 8 20 8" }],
        ["path", { d: "M9 13v-1h6v1" }],
        ["path", { d: "M11 18h2" }],
        ["path", { d: "M12 12v6" }]
      ]
    ];
    var FileUp = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"
          }
        ],
        ["polyline", { points: "14 2 14 8 20 8" }],
        ["path", { d: "M12 12v6" }],
        ["path", { d: "m15 15-3-3-3 3" }]
      ]
    ];
    var FileVideo2 = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M4 8V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2H4" }],
        ["polyline", { points: "14 2 14 8 20 8" }],
        ["path", { d: "m10 15.5 4 2.5v-6l-4 2.5" }],
        ["rect", { width: "8", height: "6", x: "2", y: "12", rx: "1" }]
      ]
    ];
    var FileVideo = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"
          }
        ],
        ["polyline", { points: "14 2 14 8 20 8" }],
        ["path", { d: "m10 11 5 3-5 3v-6Z" }]
      ]
    ];
    var FileVolume2 = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"
          }
        ],
        ["polyline", { points: "14 2 14 8 20 8" }],
        ["path", { d: "M11.5 13.5c.32.4.5.94.5 1.5s-.18 1.1-.5 1.5" }],
        ["path", { d: "M15 12c.64.8 1 1.87 1 3s-.36 2.2-1 3" }],
        ["path", { d: "M8 15h.01" }]
      ]
    ];
    var FileVolume = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v3" }],
        ["polyline", { points: "14 2 14 8 20 8" }],
        ["path", { d: "m7 10-3 2H2v4h2l3 2v-8Z" }],
        ["path", { d: "M11 11c.64.8 1 1.87 1 3s-.36 2.2-1 3" }]
      ]
    ];
    var FileWarning = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"
          }
        ],
        ["path", { d: "M12 9v4" }],
        ["path", { d: "M12 17h.01" }]
      ]
    ];
    var FileX2 = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4" }],
        ["path", { d: "M14 2v6h6" }],
        ["path", { d: "m3 12.5 5 5" }],
        ["path", { d: "m8 12.5-5 5" }]
      ]
    ];
    var FileX = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"
          }
        ],
        ["polyline", { points: "14 2 14 8 20 8" }],
        ["line", { x1: "9.5", x2: "14.5", y1: "12.5", y2: "17.5" }],
        ["line", { x1: "14.5", x2: "9.5", y1: "12.5", y2: "17.5" }]
      ]
    ];
    var File = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"
          }
        ],
        ["polyline", { points: "14 2 14 8 20 8" }]
      ]
    ];
    var Files = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M15.5 2H8.6c-.4 0-.8.2-1.1.5-.3.3-.5.7-.5 1.1v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8c.4 0 .8-.2 1.1-.5.3-.3.5-.7.5-1.1V6.5L15.5 2z"
          }
        ],
        ["path", { d: "M3 7.6v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8" }],
        ["path", { d: "M15 2v5h5" }]
      ]
    ];
    var Film = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
        ["path", { d: "M7 3v18" }],
        ["path", { d: "M3 7.5h4" }],
        ["path", { d: "M3 12h18" }],
        ["path", { d: "M3 16.5h4" }],
        ["path", { d: "M17 3v18" }],
        ["path", { d: "M17 7.5h4" }],
        ["path", { d: "M17 16.5h4" }]
      ]
    ];
    var FilterX = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M13.013 3H2l8 9.46V19l4 2v-8.54l.9-1.055" }],
        ["path", { d: "m22 3-5 5" }],
        ["path", { d: "m17 3 5 5" }]
      ]
    ];
    var Filter = [
      "svg",
      defaultAttributes,
      [["polygon", { points: "22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" }]]
    ];
    var Fingerprint = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M2 12C2 6.5 6.5 2 12 2a10 10 0 0 1 8 4" }],
        ["path", { d: "M5 19.5C5.5 18 6 15 6 12c0-.7.12-1.37.34-2" }],
        ["path", { d: "M17.29 21.02c.12-.6.43-2.3.5-3.02" }],
        ["path", { d: "M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4" }],
        ["path", { d: "M8.65 22c.21-.66.45-1.32.57-2" }],
        ["path", { d: "M14 13.12c0 2.38 0 6.38-1 8.88" }],
        ["path", { d: "M2 16h.01" }],
        ["path", { d: "M21.8 16c.2-2 .131-5.354 0-6" }],
        ["path", { d: "M9 6.8a6 6 0 0 1 9 5.2c0 .47 0 1.17-.02 2" }]
      ]
    ];
    var FishOff = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M18 12.47v.03m0-.5v.47m-.475 5.056A6.744 6.744 0 0 1 15 18c-3.56 0-7.56-2.53-8.5-6 .348-1.28 1.114-2.433 2.121-3.38m3.444-2.088A8.802 8.802 0 0 1 15 6c3.56 0 6.06 2.54 7 6-.309 1.14-.786 2.177-1.413 3.058"
          }
        ],
        [
          "path",
          {
            d: "M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33m7.48-4.372A9.77 9.77 0 0 1 16 6.07m0 11.86a9.77 9.77 0 0 1-1.728-3.618"
          }
        ],
        [
          "path",
          {
            d: "m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98M8.53 3h5.27a2 2 0 0 1 1.98 1.67l.23 1.4M2 2l20 20"
          }
        ]
      ]
    ];
    var FishSymbol = [
      "svg",
      defaultAttributes,
      [["path", { d: "M2 16s9-15 20-4C11 23 2 8 2 8" }]]
    ];
    var Fish = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.47-3.44 6-7 6s-7.56-2.53-8.5-6Z"
          }
        ],
        ["path", { d: "M18 12v.5" }],
        ["path", { d: "M16 17.93a9.77 9.77 0 0 1 0-11.86" }],
        [
          "path",
          {
            d: "M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33"
          }
        ],
        [
          "path",
          {
            d: "M10.46 7.26C10.2 5.88 9.17 4.24 8 3h5.8a2 2 0 0 1 1.98 1.67l.23 1.4"
          }
        ],
        [
          "path",
          {
            d: "m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98"
          }
        ]
      ]
    ];
    var FlagOff = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M8 2c3 0 5 2 8 2s4-1 4-1v11" }],
        ["path", { d: "M4 22V4" }],
        ["path", { d: "M4 15s1-1 4-1 5 2 8 2" }],
        ["line", { x1: "2", x2: "22", y1: "2", y2: "22" }]
      ]
    ];
    var FlagTriangleLeft = [
      "svg",
      defaultAttributes,
      [["path", { d: "M17 22V2L7 7l10 5" }]]
    ];
    var FlagTriangleRight = [
      "svg",
      defaultAttributes,
      [["path", { d: "M7 22V2l10 5-10 5" }]]
    ];
    var Flag = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          { d: "M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" }
        ],
        ["line", { x1: "4", x2: "4", y1: "22", y2: "15" }]
      ]
    ];
    var FlameKindling = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M12 2c1 3 2.5 3.5 3.5 4.5A5 5 0 0 1 17 10a5 5 0 1 1-10 0c0-.3 0-.6.1-.9a2 2 0 1 0 3.3-2C8 4.5 11 2 12 2Z"
          }
        ],
        ["path", { d: "m5 22 14-4" }],
        ["path", { d: "m5 18 14 4" }]
      ]
    ];
    var Flame = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"
          }
        ]
      ]
    ];
    var FlashlightOff = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M16 16v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V10c0-2-2-2-2-4" }],
        ["path", { d: "M7 2h11v4c0 2-2 2-2 4v1" }],
        ["line", { x1: "11", x2: "18", y1: "6", y2: "6" }],
        ["line", { x1: "2", x2: "22", y1: "2", y2: "22" }]
      ]
    ];
    var Flashlight = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M18 6c0 2-2 2-2 4v10a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V10c0-2-2-2-2-4V2h12z"
          }
        ],
        ["line", { x1: "6", x2: "18", y1: "6", y2: "6" }],
        ["line", { x1: "12", x2: "12", y1: "12", y2: "12" }]
      ]
    ];
    var FlaskConicalOff = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M10 10 4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-1.272-2.542"
          }
        ],
        ["path", { d: "M10 2v2.343" }],
        ["path", { d: "M14 2v6.343" }],
        ["path", { d: "M8.5 2h7" }],
        ["path", { d: "M7 16h9" }],
        ["line", { x1: "2", x2: "22", y1: "2", y2: "22" }]
      ]
    ];
    var FlaskConical = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2"
          }
        ],
        ["path", { d: "M8.5 2h7" }],
        ["path", { d: "M7 16h10" }]
      ]
    ];
    var FlaskRound = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M10 2v7.31" }],
        ["path", { d: "M14 9.3V1.99" }],
        ["path", { d: "M8.5 2h7" }],
        ["path", { d: "M14 9.3a6.5 6.5 0 1 1-4 0" }],
        ["path", { d: "M5.52 16h12.96" }]
      ]
    ];
    var FlipHorizontal2 = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "m3 7 5 5-5 5V7" }],
        ["path", { d: "m21 7-5 5 5 5V7" }],
        ["path", { d: "M12 20v2" }],
        ["path", { d: "M12 14v2" }],
        ["path", { d: "M12 8v2" }],
        ["path", { d: "M12 2v2" }]
      ]
    ];
    var FlipHorizontal = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M8 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h3" }],
        ["path", { d: "M16 3h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-3" }],
        ["path", { d: "M12 20v2" }],
        ["path", { d: "M12 14v2" }],
        ["path", { d: "M12 8v2" }],
        ["path", { d: "M12 2v2" }]
      ]
    ];
    var FlipVertical2 = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "m17 3-5 5-5-5h10" }],
        ["path", { d: "m17 21-5-5-5 5h10" }],
        ["path", { d: "M4 12H2" }],
        ["path", { d: "M10 12H8" }],
        ["path", { d: "M16 12h-2" }],
        ["path", { d: "M22 12h-2" }]
      ]
    ];
    var FlipVertical = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M21 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3" }],
        ["path", { d: "M21 16v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3" }],
        ["path", { d: "M4 12H2" }],
        ["path", { d: "M10 12H8" }],
        ["path", { d: "M16 12h-2" }],
        ["path", { d: "M22 12h-2" }]
      ]
    ];
    var Flower2 = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1"
          }
        ],
        ["circle", { cx: "12", cy: "8", r: "2" }],
        ["path", { d: "M12 10v12" }],
        ["path", { d: "M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z" }],
        ["path", { d: "M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z" }]
      ]
    ];
    var Flower = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M12 7.5a4.5 4.5 0 1 1 4.5 4.5M12 7.5A4.5 4.5 0 1 0 7.5 12M12 7.5V9m-4.5 3a4.5 4.5 0 1 0 4.5 4.5M7.5 12H9m7.5 0a4.5 4.5 0 1 1-4.5 4.5m4.5-4.5H15m-3 4.5V15"
          }
        ],
        ["circle", { cx: "12", cy: "12", r: "3" }],
        ["path", { d: "m8 16 1.5-1.5" }],
        ["path", { d: "M14.5 9.5 16 8" }],
        ["path", { d: "m8 8 1.5 1.5" }],
        ["path", { d: "M14.5 14.5 16 16" }]
      ]
    ];
    var Focus = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "12", cy: "12", r: "3" }],
        ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2" }],
        ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2" }],
        ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2" }],
        ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2" }]
      ]
    ];
    var FoldHorizontal = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M2 12h6" }],
        ["path", { d: "M22 12h-6" }],
        ["path", { d: "M12 2v2" }],
        ["path", { d: "M12 8v2" }],
        ["path", { d: "M12 14v2" }],
        ["path", { d: "M12 20v2" }],
        ["path", { d: "m19 9-3 3 3 3" }],
        ["path", { d: "m5 15 3-3-3-3" }]
      ]
    ];
    var FoldVertical = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M12 22v-6" }],
        ["path", { d: "M12 8V2" }],
        ["path", { d: "M4 12H2" }],
        ["path", { d: "M10 12H8" }],
        ["path", { d: "M16 12h-2" }],
        ["path", { d: "M22 12h-2" }],
        ["path", { d: "m15 19-3-3-3 3" }],
        ["path", { d: "m15 5-3 3-3-3" }]
      ]
    ];
    var FolderArchive = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "15", cy: "19", r: "2" }],
        [
          "path",
          {
            d: "M20.9 19.8A2 2 0 0 0 22 18V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h5.1"
          }
        ],
        ["path", { d: "M15 11v-1" }],
        ["path", { d: "M15 17v-2" }]
      ]
    ];
    var FolderCheck = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"
          }
        ],
        ["path", { d: "m9 13 2 2 4-4" }]
      ]
    ];
    var FolderClock = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "16", cy: "16", r: "6" }],
        [
          "path",
          {
            d: "M7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2"
          }
        ],
        ["path", { d: "M16 14v2l1 1" }]
      ]
    ];
    var FolderClosed = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"
          }
        ],
        ["path", { d: "M2 10h20" }]
      ]
    ];
    var FolderCog = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "18", cy: "18", r: "3" }],
        [
          "path",
          {
            d: "M10.3 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v3.3"
          }
        ],
        ["path", { d: "m21.7 19.4-.9-.3" }],
        ["path", { d: "m15.2 16.9-.9-.3" }],
        ["path", { d: "m16.6 21.7.3-.9" }],
        ["path", { d: "m19.1 15.2.3-.9" }],
        ["path", { d: "m19.6 21.7-.4-1" }],
        ["path", { d: "m16.8 15.3-.4-1" }],
        ["path", { d: "m14.3 19.6 1-.4" }],
        ["path", { d: "m20.7 16.8 1-.4" }]
      ]
    ];
    var FolderDot = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"
          }
        ],
        ["circle", { cx: "12", cy: "13", r: "1" }]
      ]
    ];
    var FolderDown = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"
          }
        ],
        ["path", { d: "M12 10v6" }],
        ["path", { d: "m15 13-3 3-3-3" }]
      ]
    ];
    var FolderEdit = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M8.4 10.6a2.1 2.1 0 1 1 2.99 2.98L6 19l-4 1 1-3.9Z" }],
        [
          "path",
          {
            d: "M2 11.5V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-9.5"
          }
        ]
      ]
    ];
    var FolderGit2 = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5"
          }
        ],
        ["circle", { cx: "13", cy: "12", r: "2" }],
        ["path", { d: "M18 19c-2.8 0-5-2.2-5-5v8" }],
        ["circle", { cx: "20", cy: "19", r: "2" }]
      ]
    ];
    var FolderGit = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "12", cy: "13", r: "2" }],
        [
          "path",
          {
            d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"
          }
        ],
        ["path", { d: "M14 13h3" }],
        ["path", { d: "M7 13h3" }]
      ]
    ];
    var FolderHeart = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M11 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v1.5"
          }
        ],
        [
          "path",
          {
            d: "M13.9 17.45c-1.2-1.2-1.14-2.8-.2-3.73a2.43 2.43 0 0 1 3.44 0l.36.34.34-.34a2.43 2.43 0 0 1 3.45-.01v0c.95.95 1 2.53-.2 3.74L17.5 21Z"
          }
        ]
      ]
    ];
    var FolderInput = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M2 9V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1"
          }
        ],
        ["path", { d: "M2 13h10" }],
        ["path", { d: "m9 16 3-3-3-3" }]
      ]
    ];
    var FolderKanban = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"
          }
        ],
        ["path", { d: "M8 10v4" }],
        ["path", { d: "M12 10v2" }],
        ["path", { d: "M16 10v6" }]
      ]
    ];
    var FolderKey = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "16", cy: "20", r: "2" }],
        [
          "path",
          {
            d: "M10 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v2"
          }
        ],
        ["path", { d: "m22 14-4.5 4.5" }],
        ["path", { d: "m21 15 1 1" }]
      ]
    ];
    var FolderLock = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "8", height: "5", x: "14", y: "17", rx: "1" }],
        [
          "path",
          {
            d: "M10 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v2.5"
          }
        ],
        ["path", { d: "M20 17v-2a2 2 0 1 0-4 0v2" }]
      ]
    ];
    var FolderMinus = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M9 13h6" }],
        [
          "path",
          {
            d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"
          }
        ]
      ]
    ];
    var FolderOpenDot = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "m6 14 1.45-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.55 6a2 2 0 0 1-1.94 1.5H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H18a2 2 0 0 1 2 2v2"
          }
        ],
        ["circle", { cx: "14", cy: "15", r: "1" }]
      ]
    ];
    var FolderOpen = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"
          }
        ]
      ]
    ];
    var FolderOutput = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M2 7.5V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2"
          }
        ],
        ["path", { d: "M2 13h10" }],
        ["path", { d: "m5 10-3 3 3 3" }]
      ]
    ];
    var FolderPlus = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M12 10v6" }],
        ["path", { d: "M9 13h6" }],
        [
          "path",
          {
            d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"
          }
        ]
      ]
    ];
    var FolderRoot = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"
          }
        ],
        ["circle", { cx: "12", cy: "13", r: "2" }],
        ["path", { d: "M12 15v5" }]
      ]
    ];
    var FolderSearch2 = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "11.5", cy: "12.5", r: "2.5" }],
        [
          "path",
          {
            d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"
          }
        ],
        ["path", { d: "M13.3 14.3 15 16" }]
      ]
    ];
    var FolderSearch = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "17", cy: "17", r: "3" }],
        [
          "path",
          {
            d: "M10.7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v4.1"
          }
        ],
        ["path", { d: "m21 21-1.5-1.5" }]
      ]
    ];
    var FolderSymlink = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M2 9V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2"
          }
        ],
        ["path", { d: "m8 16 3-3-3-3" }],
        ["path", { d: "M2 16v-1a2 2 0 0 1 2-2h6" }]
      ]
    ];
    var FolderSync = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v1"
          }
        ],
        ["path", { d: "M12 10v4h4" }],
        [
          "path",
          {
            d: "m12 14 1.5-1.5c.9-.9 2.2-1.5 3.5-1.5s2.6.6 3.5 1.5c.4.4.8 1 1 1.5"
          }
        ],
        ["path", { d: "M22 22v-4h-4" }],
        [
          "path",
          {
            d: "m22 18-1.5 1.5c-.9.9-2.1 1.5-3.5 1.5s-2.6-.6-3.5-1.5c-.4-.4-.8-1-1-1.5"
          }
        ]
      ]
    ];
    var FolderTree = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M20 10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2.5a1 1 0 0 1-.8-.4l-.9-1.2A1 1 0 0 0 15 3h-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z"
          }
        ],
        [
          "path",
          {
            d: "M20 21a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2.9a1 1 0 0 1-.88-.55l-.42-.85a1 1 0 0 0-.92-.6H13a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z"
          }
        ],
        ["path", { d: "M3 5a2 2 0 0 0 2 2h3" }],
        ["path", { d: "M3 3v13a2 2 0 0 0 2 2h3" }]
      ]
    ];
    var FolderUp = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"
          }
        ],
        ["path", { d: "M12 10v6" }],
        ["path", { d: "m9 13 3-3 3 3" }]
      ]
    ];
    var FolderX = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"
          }
        ],
        ["path", { d: "m9.5 10.5 5 5" }],
        ["path", { d: "m14.5 10.5-5 5" }]
      ]
    ];
    var Folder = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"
          }
        ]
      ]
    ];
    var Folders = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M20 17a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3.9a2 2 0 0 1-1.69-.9l-.81-1.2a2 2 0 0 0-1.67-.9H8a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2Z"
          }
        ],
        ["path", { d: "M2 8v11a2 2 0 0 0 2 2h14" }]
      ]
    ];
    var Footprints = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z"
          }
        ],
        [
          "path",
          {
            d: "M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z"
          }
        ],
        ["path", { d: "M16 17h4" }],
        ["path", { d: "M4 13h4" }]
      ]
    ];
    var Forklift = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M12 12H5a2 2 0 0 0-2 2v5" }],
        ["circle", { cx: "13", cy: "19", r: "2" }],
        ["circle", { cx: "5", cy: "19", r: "2" }],
        ["path", { d: "M8 19h3m5-17v17h6M6 12V7c0-1.1.9-2 2-2h3l5 5" }]
      ]
    ];
    var FormInput = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "20", height: "12", x: "2", y: "6", rx: "2" }],
        ["path", { d: "M12 12h.01" }],
        ["path", { d: "M17 12h.01" }],
        ["path", { d: "M7 12h.01" }]
      ]
    ];
    var Forward = [
      "svg",
      defaultAttributes,
      [
        ["polyline", { points: "15 17 20 12 15 7" }],
        ["path", { d: "M4 18v-2a4 4 0 0 1 4-4h12" }]
      ]
    ];
    var Frame = [
      "svg",
      defaultAttributes,
      [
        ["line", { x1: "22", x2: "2", y1: "6", y2: "6" }],
        ["line", { x1: "22", x2: "2", y1: "18", y2: "18" }],
        ["line", { x1: "6", x2: "6", y1: "2", y2: "22" }],
        ["line", { x1: "18", x2: "18", y1: "2", y2: "22" }]
      ]
    ];
    var Framer = [
      "svg",
      defaultAttributes,
      [["path", { d: "M5 16V9h14V2H5l14 14h-7m-7 0 7 7v-7m-7 0h7" }]]
    ];
    var Frown = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "12", cy: "12", r: "10" }],
        ["path", { d: "M16 16s-1.5-2-4-2-4 2-4 2" }],
        ["line", { x1: "9", x2: "9.01", y1: "9", y2: "9" }],
        ["line", { x1: "15", x2: "15.01", y1: "9", y2: "9" }]
      ]
    ];
    var Fuel = [
      "svg",
      defaultAttributes,
      [
        ["line", { x1: "3", x2: "15", y1: "22", y2: "22" }],
        ["line", { x1: "4", x2: "14", y1: "9", y2: "9" }],
        ["path", { d: "M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18" }],
        [
          "path",
          {
            d: "M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5"
          }
        ]
      ]
    ];
    var Fullscreen = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2" }],
        ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2" }],
        ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2" }],
        ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2" }],
        ["rect", { width: "10", height: "8", x: "7", y: "8", rx: "1" }]
      ]
    ];
    var FunctionSquare = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2" }],
        ["path", { d: "M9 17c2 0 2.8-1 2.8-2.8V10c0-2 1-3.3 3.2-3" }],
        ["path", { d: "M9 11.2h5.7" }]
      ]
    ];
    var GalleryHorizontalEnd = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M2 7v10" }],
        ["path", { d: "M6 5v14" }],
        ["rect", { width: "12", height: "18", x: "10", y: "3", rx: "2" }]
      ]
    ];
    var GalleryHorizontal = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M2 3v18" }],
        ["rect", { width: "12", height: "18", x: "6", y: "3", rx: "2" }],
        ["path", { d: "M22 3v18" }]
      ]
    ];
    var GalleryThumbnails = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "18", height: "14", x: "3", y: "3", rx: "2" }],
        ["path", { d: "M4 21h1" }],
        ["path", { d: "M9 21h1" }],
        ["path", { d: "M14 21h1" }],
        ["path", { d: "M19 21h1" }]
      ]
    ];
    var GalleryVerticalEnd = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M7 2h10" }],
        ["path", { d: "M5 6h14" }],
        ["rect", { width: "18", height: "12", x: "3", y: "10", rx: "2" }]
      ]
    ];
    var GalleryVertical = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M3 2h18" }],
        ["rect", { width: "18", height: "12", x: "3", y: "6", rx: "2" }],
        ["path", { d: "M3 22h18" }]
      ]
    ];
    var Gamepad2 = [
      "svg",
      defaultAttributes,
      [
        ["line", { x1: "6", x2: "10", y1: "11", y2: "11" }],
        ["line", { x1: "8", x2: "8", y1: "9", y2: "13" }],
        ["line", { x1: "15", x2: "15.01", y1: "12", y2: "12" }],
        ["line", { x1: "18", x2: "18.01", y1: "10", y2: "10" }],
        [
          "path",
          {
            d: "M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z"
          }
        ]
      ]
    ];
    var Gamepad = [
      "svg",
      defaultAttributes,
      [
        ["line", { x1: "6", x2: "10", y1: "12", y2: "12" }],
        ["line", { x1: "8", x2: "8", y1: "10", y2: "14" }],
        ["line", { x1: "15", x2: "15.01", y1: "13", y2: "13" }],
        ["line", { x1: "18", x2: "18.01", y1: "11", y2: "11" }],
        ["rect", { width: "20", height: "12", x: "2", y: "6", rx: "2" }]
      ]
    ];
    var GanttChartSquare = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
        ["path", { d: "M9 8h7" }],
        ["path", { d: "M8 12h6" }],
        ["path", { d: "M11 16h5" }]
      ]
    ];
    var GanttChart = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M8 6h10" }],
        ["path", { d: "M6 12h9" }],
        ["path", { d: "M11 18h7" }]
      ]
    ];
    var GaugeCircle = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M15.6 2.7a10 10 0 1 0 5.7 5.7" }],
        ["circle", { cx: "12", cy: "12", r: "2" }],
        ["path", { d: "M13.4 10.6 19 5" }]
      ]
    ];
    var Gauge = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "m12 14 4-4" }],
        ["path", { d: "M3.34 19a10 10 0 1 1 17.32 0" }]
      ]
    ];
    var Gavel = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "m14 13-7.5 7.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L11 10"
          }
        ],
        ["path", { d: "m16 16 6-6" }],
        ["path", { d: "m8 8 6-6" }],
        ["path", { d: "m9 7 8 8" }],
        ["path", { d: "m21 11-8-8" }]
      ]
    ];
    var Gem = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M6 3h12l4 6-10 13L2 9Z" }],
        ["path", { d: "M11 3 8 9l4 13 4-13-3-6" }],
        ["path", { d: "M2 9h20" }]
      ]
    ];
    var Ghost = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M9 10h.01" }],
        ["path", { d: "M15 10h.01" }],
        [
          "path",
          {
            d: "M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8z"
          }
        ]
      ]
    ];
    var Gift = [
      "svg",
      defaultAttributes,
      [
        ["rect", { x: "3", y: "8", width: "18", height: "4", rx: "1" }],
        ["path", { d: "M12 8v13" }],
        ["path", { d: "M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" }],
        [
          "path",
          {
            d: "M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"
          }
        ]
      ]
    ];
    var GitBranchPlus = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M6 3v12" }],
        ["path", { d: "M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" }],
        ["path", { d: "M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" }],
        ["path", { d: "M15 6a9 9 0 0 0-9 9" }],
        ["path", { d: "M18 15v6" }],
        ["path", { d: "M21 18h-6" }]
      ]
    ];
    var GitBranch = [
      "svg",
      defaultAttributes,
      [
        ["line", { x1: "6", x2: "6", y1: "3", y2: "15" }],
        ["circle", { cx: "18", cy: "6", r: "3" }],
        ["circle", { cx: "6", cy: "18", r: "3" }],
        ["path", { d: "M18 9a9 9 0 0 1-9 9" }]
      ]
    ];
    var GitCommitHorizontal = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "12", cy: "12", r: "3" }],
        ["line", { x1: "3", x2: "9", y1: "12", y2: "12" }],
        ["line", { x1: "15", x2: "21", y1: "12", y2: "12" }]
      ]
    ];
    var GitCommitVertical = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M12 3v6" }],
        ["circle", { cx: "12", cy: "12", r: "3" }],
        ["path", { d: "M12 15v6" }]
      ]
    ];
    var GitCompareArrows = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "5", cy: "6", r: "3" }],
        ["path", { d: "M12 6h5a2 2 0 0 1 2 2v7" }],
        ["path", { d: "m15 9-3-3 3-3" }],
        ["circle", { cx: "19", cy: "18", r: "3" }],
        ["path", { d: "M12 18H7a2 2 0 0 1-2-2V9" }],
        ["path", { d: "m9 15 3 3-3 3" }]
      ]
    ];
    var GitCompare = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "18", cy: "18", r: "3" }],
        ["circle", { cx: "6", cy: "6", r: "3" }],
        ["path", { d: "M13 6h3a2 2 0 0 1 2 2v7" }],
        ["path", { d: "M11 18H8a2 2 0 0 1-2-2V9" }]
      ]
    ];
    var GitFork = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "12", cy: "18", r: "3" }],
        ["circle", { cx: "6", cy: "6", r: "3" }],
        ["circle", { cx: "18", cy: "6", r: "3" }],
        ["path", { d: "M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9" }],
        ["path", { d: "M12 12v3" }]
      ]
    ];
    var GitGraph = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "5", cy: "6", r: "3" }],
        ["path", { d: "M5 9v6" }],
        ["circle", { cx: "5", cy: "18", r: "3" }],
        ["path", { d: "M12 3v18" }],
        ["circle", { cx: "19", cy: "6", r: "3" }],
        ["path", { d: "M16 15.7A9 9 0 0 0 19 9" }]
      ]
    ];
    var GitMerge = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "18", cy: "18", r: "3" }],
        ["circle", { cx: "6", cy: "6", r: "3" }],
        ["path", { d: "M6 21V9a9 9 0 0 0 9 9" }]
      ]
    ];
    var GitPullRequestArrow = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "5", cy: "6", r: "3" }],
        ["path", { d: "M5 9v12" }],
        ["circle", { cx: "19", cy: "18", r: "3" }],
        ["path", { d: "m15 9-3-3 3-3" }],
        ["path", { d: "M12 6h5a2 2 0 0 1 2 2v7" }]
      ]
    ];
    var GitPullRequestClosed = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "6", cy: "6", r: "3" }],
        ["path", { d: "M6 9v12" }],
        ["path", { d: "m21 3-6 6" }],
        ["path", { d: "m21 9-6-6" }],
        ["path", { d: "M18 11.5V15" }],
        ["circle", { cx: "18", cy: "18", r: "3" }]
      ]
    ];
    var GitPullRequestCreateArrow = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "5", cy: "6", r: "3" }],
        ["path", { d: "M5 9v12" }],
        ["path", { d: "m15 9-3-3 3-3" }],
        ["path", { d: "M12 6h5a2 2 0 0 1 2 2v3" }],
        ["path", { d: "M19 15v6" }],
        ["path", { d: "M22 18h-6" }]
      ]
    ];
    var GitPullRequestCreate = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "6", cy: "6", r: "3" }],
        ["path", { d: "M6 9v12" }],
        ["path", { d: "M13 6h3a2 2 0 0 1 2 2v3" }],
        ["path", { d: "M18 15v6" }],
        ["path", { d: "M21 18h-6" }]
      ]
    ];
    var GitPullRequestDraft = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "18", cy: "18", r: "3" }],
        ["circle", { cx: "6", cy: "6", r: "3" }],
        ["path", { d: "M18 6V5" }],
        ["path", { d: "M18 11v-1" }],
        ["line", { x1: "6", x2: "6", y1: "9", y2: "21" }]
      ]
    ];
    var GitPullRequest = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "18", cy: "18", r: "3" }],
        ["circle", { cx: "6", cy: "6", r: "3" }],
        ["path", { d: "M13 6h3a2 2 0 0 1 2 2v7" }],
        ["line", { x1: "6", x2: "6", y1: "9", y2: "21" }]
      ]
    ];
    var Github = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
          }
        ],
        ["path", { d: "M9 18c-4.51 2-5-2-7-2" }]
      ]
    ];
    var Gitlab = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "m22 13.29-3.33-10a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18l-2.26 6.67H8.32L6.1 3.26a.42.42 0 0 0-.1-.18.38.38 0 0 0-.26-.08.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18L2 13.29a.74.74 0 0 0 .27.83L12 21l9.69-6.88a.71.71 0 0 0 .31-.83Z"
          }
        ]
      ]
    ];
    var GlassWater = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M15.2 22H8.8a2 2 0 0 1-2-1.79L5 3h14l-1.81 17.21A2 2 0 0 1 15.2 22Z"
          }
        ],
        ["path", { d: "M6 12a5 5 0 0 1 6 0 5 5 0 0 0 6 0" }]
      ]
    ];
    var Glasses = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "6", cy: "15", r: "4" }],
        ["circle", { cx: "18", cy: "15", r: "4" }],
        ["path", { d: "M14 15a2 2 0 0 0-2-2 2 2 0 0 0-2 2" }],
        ["path", { d: "M2.5 13 5 7c.7-1.3 1.4-2 3-2" }],
        ["path", { d: "M21.5 13 19 7c-.7-1.3-1.5-2-3-2" }]
      ]
    ];
    var Globe2 = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M21.54 15H17a2 2 0 0 0-2 2v4.54" }],
        [
          "path",
          {
            d: "M7 3.34V5a3 3 0 0 0 3 3v0a2 2 0 0 1 2 2v0c0 1.1.9 2 2 2v0a2 2 0 0 0 2-2v0c0-1.1.9-2 2-2h3.17"
          }
        ],
        [
          "path",
          { d: "M11 21.95V18a2 2 0 0 0-2-2v0a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05" }
        ],
        ["circle", { cx: "12", cy: "12", r: "10" }]
      ]
    ];
    var Globe = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "12", cy: "12", r: "10" }],
        ["path", { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" }],
        ["path", { d: "M2 12h20" }]
      ]
    ];
    var Goal = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M12 13V2l8 4-8 4" }],
        ["path", { d: "M20.55 10.23A9 9 0 1 1 8 4.94" }],
        ["path", { d: "M8 10a5 5 0 1 0 8.9 2.02" }]
      ]
    ];
    var Grab = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M18 11.5V9a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v1.4" }],
        ["path", { d: "M14 10V8a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2" }],
        ["path", { d: "M10 9.9V9a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v5" }],
        ["path", { d: "M6 14v0a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" }],
        [
          "path",
          {
            d: "M18 11v0a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-4a8 8 0 0 1-8-8 2 2 0 1 1 4 0"
          }
        ]
      ]
    ];
    var GraduationCap = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M22 10v6M2 10l10-5 10 5-10 5z" }],
        ["path", { d: "M6 12v5c3 3 9 3 12 0v-5" }]
      ]
    ];
    var Grape = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M22 5V2l-5.89 5.89" }],
        ["circle", { cx: "16.6", cy: "15.89", r: "3" }],
        ["circle", { cx: "8.11", cy: "7.4", r: "3" }],
        ["circle", { cx: "12.35", cy: "11.65", r: "3" }],
        ["circle", { cx: "13.91", cy: "5.85", r: "3" }],
        ["circle", { cx: "18.15", cy: "10.09", r: "3" }],
        ["circle", { cx: "6.56", cy: "13.2", r: "3" }],
        ["circle", { cx: "10.8", cy: "17.44", r: "3" }],
        ["circle", { cx: "5", cy: "19", r: "3" }]
      ]
    ];
    var Grid2x2 = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
        ["path", { d: "M3 12h18" }],
        ["path", { d: "M12 3v18" }]
      ]
    ];
    var Grid3x3 = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
        ["path", { d: "M3 9h18" }],
        ["path", { d: "M3 15h18" }],
        ["path", { d: "M9 3v18" }],
        ["path", { d: "M15 3v18" }]
      ]
    ];
    var GripHorizontal = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "12", cy: "9", r: "1" }],
        ["circle", { cx: "19", cy: "9", r: "1" }],
        ["circle", { cx: "5", cy: "9", r: "1" }],
        ["circle", { cx: "12", cy: "15", r: "1" }],
        ["circle", { cx: "19", cy: "15", r: "1" }],
        ["circle", { cx: "5", cy: "15", r: "1" }]
      ]
    ];
    var GripVertical = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "9", cy: "12", r: "1" }],
        ["circle", { cx: "9", cy: "5", r: "1" }],
        ["circle", { cx: "9", cy: "19", r: "1" }],
        ["circle", { cx: "15", cy: "12", r: "1" }],
        ["circle", { cx: "15", cy: "5", r: "1" }],
        ["circle", { cx: "15", cy: "19", r: "1" }]
      ]
    ];
    var Grip = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "12", cy: "5", r: "1" }],
        ["circle", { cx: "19", cy: "5", r: "1" }],
        ["circle", { cx: "5", cy: "5", r: "1" }],
        ["circle", { cx: "12", cy: "12", r: "1" }],
        ["circle", { cx: "19", cy: "12", r: "1" }],
        ["circle", { cx: "5", cy: "12", r: "1" }],
        ["circle", { cx: "12", cy: "19", r: "1" }],
        ["circle", { cx: "19", cy: "19", r: "1" }],
        ["circle", { cx: "5", cy: "19", r: "1" }]
      ]
    ];
    var Group = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M3 7V5c0-1.1.9-2 2-2h2" }],
        ["path", { d: "M17 3h2c1.1 0 2 .9 2 2v2" }],
        ["path", { d: "M21 17v2c0 1.1-.9 2-2 2h-2" }],
        ["path", { d: "M7 21H5c-1.1 0-2-.9-2-2v-2" }],
        ["rect", { width: "7", height: "5", x: "7", y: "7", rx: "1" }],
        ["rect", { width: "7", height: "5", x: "10", y: "12", rx: "1" }]
      ]
    ];
    var Hammer = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "m15 12-8.5 8.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L12 9"
          }
        ],
        ["path", { d: "M17.64 15 22 10.64" }],
        [
          "path",
          {
            d: "m20.91 11.7-1.25-1.25c-.6-.6-.93-1.4-.93-2.25v-.86L16.01 4.6a5.56 5.56 0 0 0-3.94-1.64H9l.92.82A6.18 6.18 0 0 1 12 8.4v1.56l2 2h2.47l2.26 1.91"
          }
        ]
      ]
    ];
    var HandMetal = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M18 12.5V10a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v1.4" }],
        ["path", { d: "M14 11V9a2 2 0 1 0-4 0v2" }],
        ["path", { d: "M10 10.5V5a2 2 0 1 0-4 0v9" }],
        [
          "path",
          {
            d: "m7 15-1.76-1.76a2 2 0 0 0-2.83 2.82l3.6 3.6C7.5 21.14 9.2 22 12 22h2a8 8 0 0 0 8-8V7a2 2 0 1 0-4 0v5"
          }
        ]
      ]
    ];
    var Hand = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" }],
        ["path", { d: "M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2" }],
        ["path", { d: "M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8" }],
        [
          "path",
          {
            d: "M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"
          }
        ]
      ]
    ];
    var HardDriveDownload = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M12 2v8" }],
        ["path", { d: "m16 6-4 4-4-4" }],
        ["rect", { width: "20", height: "8", x: "2", y: "14", rx: "2" }],
        ["path", { d: "M6 18h.01" }],
        ["path", { d: "M10 18h.01" }]
      ]
    ];
    var HardDriveUpload = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "m16 6-4-4-4 4" }],
        ["path", { d: "M12 2v8" }],
        ["rect", { width: "20", height: "8", x: "2", y: "14", rx: "2" }],
        ["path", { d: "M6 18h.01" }],
        ["path", { d: "M10 18h.01" }]
      ]
    ];
    var HardDrive = [
      "svg",
      defaultAttributes,
      [
        ["line", { x1: "22", x2: "2", y1: "12", y2: "12" }],
        [
          "path",
          {
            d: "M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"
          }
        ],
        ["line", { x1: "6", x2: "6.01", y1: "16", y2: "16" }],
        ["line", { x1: "10", x2: "10.01", y1: "16", y2: "16" }]
      ]
    ];
    var HardHat = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2z"
          }
        ],
        ["path", { d: "M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5" }],
        ["path", { d: "M4 15v-3a6 6 0 0 1 6-6h0" }],
        ["path", { d: "M14 6h0a6 6 0 0 1 6 6v3" }]
      ]
    ];
    var Hash = [
      "svg",
      defaultAttributes,
      [
        ["line", { x1: "4", x2: "20", y1: "9", y2: "9" }],
        ["line", { x1: "4", x2: "20", y1: "15", y2: "15" }],
        ["line", { x1: "10", x2: "8", y1: "3", y2: "21" }],
        ["line", { x1: "16", x2: "14", y1: "3", y2: "21" }]
      ]
    ];
    var Haze = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "m5.2 6.2 1.4 1.4" }],
        ["path", { d: "M2 13h2" }],
        ["path", { d: "M20 13h2" }],
        ["path", { d: "m17.4 7.6 1.4-1.4" }],
        ["path", { d: "M22 17H2" }],
        ["path", { d: "M22 21H2" }],
        ["path", { d: "M16 13a4 4 0 0 0-8 0" }],
        ["path", { d: "M12 5V2.5" }]
      ]
    ];
    var HdmiPort = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M22 9a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h1l2 2h12l2-2h1a1 1 0 0 0 1-1Z"
          }
        ],
        ["path", { d: "M7.5 12h9" }]
      ]
    ];
    var Heading1 = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M4 12h8" }],
        ["path", { d: "M4 18V6" }],
        ["path", { d: "M12 18V6" }],
        ["path", { d: "m17 12 3-2v8" }]
      ]
    ];
    var Heading2 = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M4 12h8" }],
        ["path", { d: "M4 18V6" }],
        ["path", { d: "M12 18V6" }],
        ["path", { d: "M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1" }]
      ]
    ];
    var Heading3 = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M4 12h8" }],
        ["path", { d: "M4 18V6" }],
        ["path", { d: "M12 18V6" }],
        ["path", { d: "M17.5 10.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2" }],
        ["path", { d: "M17 17.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2" }]
      ]
    ];
    var Heading4 = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M4 12h8" }],
        ["path", { d: "M4 18V6" }],
        ["path", { d: "M12 18V6" }],
        ["path", { d: "M17 10v4h4" }],
        ["path", { d: "M21 10v8" }]
      ]
    ];
    var Heading5 = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M4 12h8" }],
        ["path", { d: "M4 18V6" }],
        ["path", { d: "M12 18V6" }],
        ["path", { d: "M17 13v-3h4" }],
        [
          "path",
          { d: "M17 17.7c.4.2.8.3 1.3.3 1.5 0 2.7-1.1 2.7-2.5S19.8 13 18.3 13H17" }
        ]
      ]
    ];
    var Heading6 = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M4 12h8" }],
        ["path", { d: "M4 18V6" }],
        ["path", { d: "M12 18V6" }],
        ["circle", { cx: "19", cy: "16", r: "2" }],
        ["path", { d: "M20 10c-2 2-3 3.5-3 6" }]
      ]
    ];
    var Heading = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M6 12h12" }],
        ["path", { d: "M6 20V4" }],
        ["path", { d: "M18 20V4" }]
      ]
    ];
    var Headphones = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"
          }
        ]
      ]
    ];
    var HeartCrack = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
          }
        ],
        ["path", { d: "m12 13-1-1 2-2-3-3 2-2" }]
      ]
    ];
    var HeartHandshake = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
          }
        ],
        [
          "path",
          {
            d: "M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66"
          }
        ],
        ["path", { d: "m18 15-2-2" }],
        ["path", { d: "m15 18-2-2" }]
      ]
    ];
    var HeartOff = [
      "svg",
      defaultAttributes,
      [
        ["line", { x1: "2", y1: "2", x2: "22", y2: "22" }],
        [
          "path",
          {
            d: "M16.5 16.5 12 21l-7-7c-1.5-1.45-3-3.2-3-5.5a5.5 5.5 0 0 1 2.14-4.35"
          }
        ],
        [
          "path",
          {
            d: "M8.76 3.1c1.15.22 2.13.78 3.24 1.9 1.5-1.5 2.74-2 4.5-2A5.5 5.5 0 0 1 22 8.5c0 2.12-1.3 3.78-2.67 5.17"
          }
        ]
      ]
    ];
    var HeartPulse = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
          }
        ],
        ["path", { d: "M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27" }]
      ]
    ];
    var Heart = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
          }
        ]
      ]
    ];
    var HelpCircle = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "12", cy: "12", r: "10" }],
        ["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" }],
        ["path", { d: "M12 17h.01" }]
      ]
    ];
    var HelpingHand = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "m3 15 5.12-5.12A3 3 0 0 1 10.24 9H13a2 2 0 1 1 0 4h-2.5m4-.68 4.17-4.89a1.88 1.88 0 0 1 2.92 2.36l-4.2 5.94A3 3 0 0 1 14.96 17H9.83a2 2 0 0 0-1.42.59L7 19"
          }
        ],
        ["path", { d: "m2 14 6 6" }]
      ]
    ];
    var Hexagon = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
          }
        ]
      ]
    ];
    var Highlighter = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "m9 11-6 6v3h9l3-3" }],
        [
          "path",
          { d: "m22 12-4.6 4.6a2 2 0 0 1-2.8 0l-5.2-5.2a2 2 0 0 1 0-2.8L14 4" }
        ]
      ]
    ];
    var History = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" }],
        ["path", { d: "M3 3v5h5" }],
        ["path", { d: "M12 7v5l4 2" }]
      ]
    ];
    var Home = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" }],
        ["polyline", { points: "9 22 9 12 15 12 15 22" }]
      ]
    ];
    var HopOff = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          { d: "M17.5 5.5C19 7 20.5 9 21 11c-1.323.265-2.646.39-4.118.226" }
        ],
        ["path", { d: "M5.5 17.5C7 19 9 20.5 11 21c.5-2.5.5-5-1-8.5" }],
        ["path", { d: "M17.5 17.5c-2.5 0-4 0-6-1" }],
        ["path", { d: "M20 11.5c1 1.5 2 3.5 2 4.5" }],
        ["path", { d: "M11.5 20c1.5 1 3.5 2 4.5 2 .5-1.5 0-3-.5-4.5" }],
        ["path", { d: "M22 22c-2 0-3.5-.5-5.5-1.5" }],
        [
          "path",
          {
            d: "M4.783 4.782C1.073 8.492 1 14.5 5 18c1-1 2-4.5 1.5-6.5 1.5 1 4 1 5.5.5M8.227 2.57C11.578 1.335 15.453 2.089 18 5c-.88.88-3.7 1.761-5.726 1.618"
          }
        ],
        ["line", { x1: "2", x2: "22", y1: "2", y2: "22" }]
      ]
    ];
    var Hop = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M17.5 5.5C19 7 20.5 9 21 11c-2.5.5-5 .5-8.5-1" }],
        ["path", { d: "M5.5 17.5C7 19 9 20.5 11 21c.5-2.5.5-5-1-8.5" }],
        ["path", { d: "M16.5 11.5c1 2 1 3.5 1 6-2.5 0-4 0-6-1" }],
        ["path", { d: "M20 11.5c1 1.5 2 3.5 2 4.5-1.5.5-3 0-4.5-.5" }],
        ["path", { d: "M11.5 20c1.5 1 3.5 2 4.5 2 .5-1.5 0-3-.5-4.5" }],
        ["path", { d: "M20.5 16.5c1 2 1.5 3.5 1.5 5.5-2 0-3.5-.5-5.5-1.5" }],
        [
          "path",
          {
            d: "M4.783 4.782C8.493 1.072 14.5 1 18 5c-1 1-4.5 2-6.5 1.5 1 1.5 1 4 .5 5.5-1.5.5-4 .5-5.5-.5C7 13.5 6 17 5 18c-4-3.5-3.927-9.508-.217-13.218Z"
          }
        ],
        ["path", { d: "M4.5 4.5 3 3c-.184-.185-.184-.816 0-1" }]
      ]
    ];
    var Hotel = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M18 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z"
          }
        ],
        ["path", { d: "m9 16 .348-.24c1.465-1.013 3.84-1.013 5.304 0L15 16" }],
        ["path", { d: "M8 7h.01" }],
        ["path", { d: "M16 7h.01" }],
        ["path", { d: "M12 7h.01" }],
        ["path", { d: "M12 11h.01" }],
        ["path", { d: "M16 11h.01" }],
        ["path", { d: "M8 11h.01" }],
        ["path", { d: "M10 22v-6.5m4 0V22" }]
      ]
    ];
    var Hourglass = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M5 22h14" }],
        ["path", { d: "M5 2h14" }],
        [
          "path",
          {
            d: "M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22"
          }
        ],
        [
          "path",
          {
            d: "M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"
          }
        ]
      ]
    ];
    var IceCream2 = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M12 17c5 0 8-2.69 8-6H4c0 3.31 3 6 8 6Zm-4 4h8m-4-3v3M5.14 11a3.5 3.5 0 1 1 6.71 0"
          }
        ],
        ["path", { d: "M12.14 11a3.5 3.5 0 1 1 6.71 0" }],
        ["path", { d: "M15.5 6.5a3.5 3.5 0 1 0-7 0" }]
      ]
    ];
    var IceCream = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "m7 11 4.08 10.35a1 1 0 0 0 1.84 0L17 11" }],
        ["path", { d: "M17 7A5 5 0 0 0 7 7" }],
        ["path", { d: "M17 7a2 2 0 0 1 0 4H7a2 2 0 0 1 0-4" }]
      ]
    ];
    var ImageDown = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "9", cy: "9", r: "2" }],
        [
          "path",
          { d: "M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10.8" }
        ],
        ["path", { d: "m21 15-3.1-3.1a2 2 0 0 0-2.814.014L6 21" }],
        ["path", { d: "m14 19.5 3 3v-6" }],
        ["path", { d: "m17 22.5 3-3" }]
      ]
    ];
    var ImageMinus = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M21 9v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7" }],
        ["line", { x1: "16", x2: "22", y1: "5", y2: "5" }],
        ["circle", { cx: "9", cy: "9", r: "2" }],
        ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" }]
      ]
    ];
    var ImageOff = [
      "svg",
      defaultAttributes,
      [
        ["line", { x1: "2", x2: "22", y1: "2", y2: "22" }],
        ["path", { d: "M10.41 10.41a2 2 0 1 1-2.83-2.83" }],
        ["line", { x1: "13.5", x2: "6", y1: "13.5", y2: "21" }],
        ["line", { x1: "18", x2: "21", y1: "12", y2: "15" }],
        [
          "path",
          {
            d: "M3.59 3.59A1.99 1.99 0 0 0 3 5v14a2 2 0 0 0 2 2h14c.55 0 1.052-.22 1.41-.59"
          }
        ],
        ["path", { d: "M21 15V5a2 2 0 0 0-2-2H9" }]
      ]
    ];
    var ImagePlus = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7" }],
        ["line", { x1: "16", x2: "22", y1: "5", y2: "5" }],
        ["line", { x1: "19", x2: "19", y1: "2", y2: "8" }],
        ["circle", { cx: "9", cy: "9", r: "2" }],
        ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" }]
      ]
    ];
    var Image = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2" }],
        ["circle", { cx: "9", cy: "9", r: "2" }],
        ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" }]
      ]
    ];
    var Import = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M12 3v12" }],
        ["path", { d: "m8 11 4 4 4-4" }],
        [
          "path",
          {
            d: "M8 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4"
          }
        ]
      ]
    ];
    var Inbox = [
      "svg",
      defaultAttributes,
      [
        ["polyline", { points: "22 12 16 12 14 15 10 15 8 12 2 12" }],
        [
          "path",
          {
            d: "M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"
          }
        ]
      ]
    ];
    var Indent = [
      "svg",
      defaultAttributes,
      [
        ["polyline", { points: "3 8 7 12 3 16" }],
        ["line", { x1: "21", x2: "11", y1: "12", y2: "12" }],
        ["line", { x1: "21", x2: "11", y1: "6", y2: "6" }],
        ["line", { x1: "21", x2: "11", y1: "18", y2: "18" }]
      ]
    ];
    var IndianRupee = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M6 3h12" }],
        ["path", { d: "M6 8h12" }],
        ["path", { d: "m6 13 8.5 8" }],
        ["path", { d: "M6 13h3" }],
        ["path", { d: "M9 13c6.667 0 6.667-10 0-10" }]
      ]
    ];
    var Infinity2 = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 0 0 0-8c-2 0-4 1.33-6 4Z"
          }
        ]
      ]
    ];
    var Info = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "12", cy: "12", r: "10" }],
        ["path", { d: "M12 16v-4" }],
        ["path", { d: "M12 8h.01" }]
      ]
    ];
    var Instagram = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "20", height: "20", x: "2", y: "2", rx: "5", ry: "5" }],
        ["path", { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" }],
        ["line", { x1: "17.5", x2: "17.51", y1: "6.5", y2: "6.5" }]
      ]
    ];
    var Italic = [
      "svg",
      defaultAttributes,
      [
        ["line", { x1: "19", x2: "10", y1: "4", y2: "4" }],
        ["line", { x1: "14", x2: "5", y1: "20", y2: "20" }],
        ["line", { x1: "15", x2: "9", y1: "4", y2: "20" }]
      ]
    ];
    var IterationCcw = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M20 10c0-4.4-3.6-8-8-8s-8 3.6-8 8 3.6 8 8 8h8" }],
        ["polyline", { points: "16 14 20 18 16 22" }]
      ]
    ];
    var IterationCw = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M4 10c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8H4" }],
        ["polyline", { points: "8 22 4 18 8 14" }]
      ]
    ];
    var JapaneseYen = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M12 9.5V21m0-11.5L6 3m6 6.5L18 3" }],
        ["path", { d: "M6 15h12" }],
        ["path", { d: "M6 11h12" }]
      ]
    ];
    var Joystick = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M21 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2Z"
          }
        ],
        ["path", { d: "M6 15v-2" }],
        ["path", { d: "M12 15V9" }],
        ["circle", { cx: "12", cy: "6", r: "3" }]
      ]
    ];
    var KanbanSquareDashed = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M8 7v7" }],
        ["path", { d: "M12 7v4" }],
        ["path", { d: "M16 7v9" }],
        ["path", { d: "M5 3a2 2 0 0 0-2 2" }],
        ["path", { d: "M9 3h1" }],
        ["path", { d: "M14 3h1" }],
        ["path", { d: "M19 3a2 2 0 0 1 2 2" }],
        ["path", { d: "M21 9v1" }],
        ["path", { d: "M21 14v1" }],
        ["path", { d: "M21 19a2 2 0 0 1-2 2" }],
        ["path", { d: "M14 21h1" }],
        ["path", { d: "M9 21h1" }],
        ["path", { d: "M5 21a2 2 0 0 1-2-2" }],
        ["path", { d: "M3 14v1" }],
        ["path", { d: "M3 9v1" }]
      ]
    ];
    var KanbanSquare = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
        ["path", { d: "M8 7v7" }],
        ["path", { d: "M12 7v4" }],
        ["path", { d: "M16 7v9" }]
      ]
    ];
    var Kanban = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M6 5v11" }],
        ["path", { d: "M12 5v6" }],
        ["path", { d: "M18 5v14" }]
      ]
    ];
    var KeyRound = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          { d: "M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z" }
        ],
        ["circle", { cx: "16.5", cy: "7.5", r: ".5" }]
      ]
    ];
    var KeySquare = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M12.4 2.7c.9-.9 2.5-.9 3.4 0l5.5 5.5c.9.9.9 2.5 0 3.4l-3.7 3.7c-.9.9-2.5.9-3.4 0L8.7 9.8c-.9-.9-.9-2.5 0-3.4Z"
          }
        ],
        ["path", { d: "m14 7 3 3" }],
        ["path", { d: "M9.4 10.6 2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4" }]
      ]
    ];
    var Key = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "7.5", cy: "15.5", r: "5.5" }],
        ["path", { d: "m21 2-9.6 9.6" }],
        ["path", { d: "m15.5 7.5 3 3L22 7l-3-3" }]
      ]
    ];
    var Keyboard = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2", ry: "2" }],
        ["path", { d: "M6 8h.001" }],
        ["path", { d: "M10 8h.001" }],
        ["path", { d: "M14 8h.001" }],
        ["path", { d: "M18 8h.001" }],
        ["path", { d: "M8 12h.001" }],
        ["path", { d: "M12 12h.001" }],
        ["path", { d: "M16 12h.001" }],
        ["path", { d: "M7 16h10" }]
      ]
    ];
    var LampCeiling = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M12 2v5" }],
        ["path", { d: "M6 7h12l4 9H2l4-9Z" }],
        ["path", { d: "M9.17 16a3 3 0 1 0 5.66 0" }]
      ]
    ];
    var LampDesk = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "m14 5-3 3 2 7 8-8-7-2Z" }],
        ["path", { d: "m14 5-3 3-3-3 3-3 3 3Z" }],
        ["path", { d: "M9.5 6.5 4 12l3 6" }],
        ["path", { d: "M3 22v-2c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2H3Z" }]
      ]
    ];
    var LampFloor = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M9 2h6l3 7H6l3-7Z" }],
        ["path", { d: "M12 9v13" }],
        ["path", { d: "M9 22h6" }]
      ]
    ];
    var LampWallDown = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M11 13h6l3 7H8l3-7Z" }],
        ["path", { d: "M14 13V8a2 2 0 0 0-2-2H8" }],
        ["path", { d: "M4 9h2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H4v6Z" }]
      ]
    ];
    var LampWallUp = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M11 4h6l3 7H8l3-7Z" }],
        ["path", { d: "M14 11v5a2 2 0 0 1-2 2H8" }],
        ["path", { d: "M4 15h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H4v-6Z" }]
      ]
    ];
    var Lamp = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M8 2h8l4 10H4L8 2Z" }],
        ["path", { d: "M12 12v6" }],
        ["path", { d: "M8 22v-2c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2H8Z" }]
      ]
    ];
    var LandPlot = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "m12 8 6-3-6-3v10" }],
        [
          "path",
          {
            d: "m8 11.99-5.5 3.14a1 1 0 0 0 0 1.74l8.5 4.86a2 2 0 0 0 2 0l8.5-4.86a1 1 0 0 0 0-1.74L16 12"
          }
        ],
        ["path", { d: "m6.49 12.85 11.02 6.3" }],
        ["path", { d: "M17.51 12.85 6.5 19.15" }]
      ]
    ];
    var Landmark = [
      "svg",
      defaultAttributes,
      [
        ["line", { x1: "3", x2: "21", y1: "22", y2: "22" }],
        ["line", { x1: "6", x2: "6", y1: "18", y2: "11" }],
        ["line", { x1: "10", x2: "10", y1: "18", y2: "11" }],
        ["line", { x1: "14", x2: "14", y1: "18", y2: "11" }],
        ["line", { x1: "18", x2: "18", y1: "18", y2: "11" }],
        ["polygon", { points: "12 2 20 7 4 7" }]
      ]
    ];
    var Languages = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "m5 8 6 6" }],
        ["path", { d: "m4 14 6-6 2-3" }],
        ["path", { d: "M2 5h12" }],
        ["path", { d: "M7 2h1" }],
        ["path", { d: "m22 22-5-10-5 10" }],
        ["path", { d: "M14 18h6" }]
      ]
    ];
    var Laptop2 = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "18", height: "12", x: "3", y: "4", rx: "2", ry: "2" }],
        ["line", { x1: "2", x2: "22", y1: "20", y2: "20" }]
      ]
    ];
    var Laptop = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"
          }
        ]
      ]
    ];
    var LassoSelect = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M7 22a5 5 0 0 1-2-4" }],
        ["path", { d: "M7 16.93c.96.43 1.96.74 2.99.91" }],
        [
          "path",
          {
            d: "M3.34 14A6.8 6.8 0 0 1 2 10c0-4.42 4.48-8 10-8s10 3.58 10 8a7.19 7.19 0 0 1-.33 2"
          }
        ],
        ["path", { d: "M5 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" }],
        [
          "path",
          {
            d: "M14.33 22h-.09a.35.35 0 0 1-.24-.32v-10a.34.34 0 0 1 .33-.34c.08 0 .15.03.21.08l7.34 6a.33.33 0 0 1-.21.59h-4.49l-2.57 3.85a.35.35 0 0 1-.28.14v0z"
          }
        ]
      ]
    ];
    var Lasso = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M7 22a5 5 0 0 1-2-4" }],
        [
          "path",
          {
            d: "M3.3 14A6.8 6.8 0 0 1 2 10c0-4.4 4.5-8 10-8s10 3.6 10 8-4.5 8-10 8a12 12 0 0 1-5-1"
          }
        ],
        ["path", { d: "M5 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" }]
      ]
    ];
    var Laugh = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "12", cy: "12", r: "10" }],
        ["path", { d: "M18 13a6 6 0 0 1-6 5 6 6 0 0 1-6-5h12Z" }],
        ["line", { x1: "9", x2: "9.01", y1: "9", y2: "9" }],
        ["line", { x1: "15", x2: "15.01", y1: "9", y2: "9" }]
      ]
    ];
    var Layers2 = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "m16.02 12 5.48 3.13a1 1 0 0 1 0 1.74L13 21.74a2 2 0 0 1-2 0l-8.5-4.87a1 1 0 0 1 0-1.74L7.98 12"
          }
        ],
        [
          "path",
          {
            d: "M13 13.74a2 2 0 0 1-2 0L2.5 8.87a1 1 0 0 1 0-1.74L11 2.26a2 2 0 0 1 2 0l8.5 4.87a1 1 0 0 1 0 1.74Z"
          }
        ]
      ]
    ];
    var Layers3 = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"
          }
        ],
        [
          "path",
          {
            d: "m6.08 9.5-3.5 1.6a1 1 0 0 0 0 1.81l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9a1 1 0 0 0 0-1.83l-3.5-1.59"
          }
        ],
        [
          "path",
          {
            d: "m6.08 14.5-3.5 1.6a1 1 0 0 0 0 1.81l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9a1 1 0 0 0 0-1.83l-3.5-1.59"
          }
        ]
      ]
    ];
    var Layers = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"
          }
        ],
        ["path", { d: "m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" }],
        ["path", { d: "m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" }]
      ]
    ];
    var LayoutDashboard = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "7", height: "9", x: "3", y: "3", rx: "1" }],
        ["rect", { width: "7", height: "5", x: "14", y: "3", rx: "1" }],
        ["rect", { width: "7", height: "9", x: "14", y: "12", rx: "1" }],
        ["rect", { width: "7", height: "5", x: "3", y: "16", rx: "1" }]
      ]
    ];
    var LayoutGrid = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "7", height: "7", x: "3", y: "3", rx: "1" }],
        ["rect", { width: "7", height: "7", x: "14", y: "3", rx: "1" }],
        ["rect", { width: "7", height: "7", x: "14", y: "14", rx: "1" }],
        ["rect", { width: "7", height: "7", x: "3", y: "14", rx: "1" }]
      ]
    ];
    var LayoutList = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "7", height: "7", x: "3", y: "3", rx: "1" }],
        ["rect", { width: "7", height: "7", x: "3", y: "14", rx: "1" }],
        ["path", { d: "M14 4h7" }],
        ["path", { d: "M14 9h7" }],
        ["path", { d: "M14 15h7" }],
        ["path", { d: "M14 20h7" }]
      ]
    ];
    var LayoutPanelLeft = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "7", height: "18", x: "3", y: "3", rx: "1" }],
        ["rect", { width: "7", height: "7", x: "14", y: "3", rx: "1" }],
        ["rect", { width: "7", height: "7", x: "14", y: "14", rx: "1" }]
      ]
    ];
    var LayoutPanelTop = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "18", height: "7", x: "3", y: "3", rx: "1" }],
        ["rect", { width: "7", height: "7", x: "3", y: "14", rx: "1" }],
        ["rect", { width: "7", height: "7", x: "14", y: "14", rx: "1" }]
      ]
    ];
    var LayoutTemplate = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "18", height: "7", x: "3", y: "3", rx: "1" }],
        ["rect", { width: "9", height: "7", x: "3", y: "14", rx: "1" }],
        ["rect", { width: "5", height: "7", x: "16", y: "14", rx: "1" }]
      ]
    ];
    var Layout = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2" }],
        ["line", { x1: "3", x2: "21", y1: "9", y2: "9" }],
        ["line", { x1: "9", x2: "9", y1: "21", y2: "9" }]
      ]
    ];
    var Leaf = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"
          }
        ],
        ["path", { d: "M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" }]
      ]
    ];
    var LeafyGreen = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M2 22c1.25-.987 2.27-1.975 3.9-2.2a5.56 5.56 0 0 1 3.8 1.5 4 4 0 0 0 6.187-2.353 3.5 3.5 0 0 0 3.69-5.116A3.5 3.5 0 0 0 20.95 8 3.5 3.5 0 1 0 16 3.05a3.5 3.5 0 0 0-5.831 1.373 3.5 3.5 0 0 0-5.116 3.69 4 4 0 0 0-2.348 6.155C3.499 15.42 4.409 16.712 4.2 18.1 3.926 19.743 3.014 20.732 2 22"
          }
        ],
        ["path", { d: "M2 22 17 7" }]
      ]
    ];
    var LibraryBig = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "8", height: "18", x: "3", y: "3", rx: "1" }],
        ["path", { d: "M7 3v18" }],
        [
          "path",
          {
            d: "M20.4 18.9c.2.5-.1 1.1-.6 1.3l-1.9.7c-.5.2-1.1-.1-1.3-.6L11.1 5.1c-.2-.5.1-1.1.6-1.3l1.9-.7c.5-.2 1.1.1 1.3.6Z"
          }
        ]
      ]
    ];
    var LibrarySquare = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
        ["path", { d: "M7 7v10" }],
        ["path", { d: "M11 7v10" }],
        ["path", { d: "m15 7 2 10" }]
      ]
    ];
    var Library = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "m16 6 4 14" }],
        ["path", { d: "M12 6v14" }],
        ["path", { d: "M8 8v12" }],
        ["path", { d: "M4 4v16" }]
      ]
    ];
    var LifeBuoy = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "12", cy: "12", r: "10" }],
        ["path", { d: "m4.93 4.93 4.24 4.24" }],
        ["path", { d: "m14.83 9.17 4.24-4.24" }],
        ["path", { d: "m14.83 14.83 4.24 4.24" }],
        ["path", { d: "m9.17 14.83-4.24 4.24" }],
        ["circle", { cx: "12", cy: "12", r: "4" }]
      ]
    ];
    var Ligature = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M8 20V8c0-2.2 1.8-4 4-4 1.5 0 2.8.8 3.5 2" }],
        ["path", { d: "M6 12h4" }],
        ["path", { d: "M14 12h2v8" }],
        ["path", { d: "M6 20h4" }],
        ["path", { d: "M14 20h4" }]
      ]
    ];
    var LightbulbOff = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M16.8 11.2c.8-.9 1.2-2 1.2-3.2a6 6 0 0 0-9.3-5" }],
        ["path", { d: "m2 2 20 20" }],
        ["path", { d: "M6.3 6.3a4.67 4.67 0 0 0 1.2 5.2c.7.7 1.3 1.5 1.5 2.5" }],
        ["path", { d: "M9 18h6" }],
        ["path", { d: "M10 22h4" }]
      ]
    ];
    var Lightbulb = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"
          }
        ],
        ["path", { d: "M9 18h6" }],
        ["path", { d: "M10 22h4" }]
      ]
    ];
    var LineChart = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M3 3v18h18" }],
        ["path", { d: "m19 9-5 5-4-4-3 3" }]
      ]
    ];
    var Link2Off = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M9 17H7A5 5 0 0 1 7 7" }],
        ["path", { d: "M15 7h2a5 5 0 0 1 4 8" }],
        ["line", { x1: "8", x2: "12", y1: "12", y2: "12" }],
        ["line", { x1: "2", x2: "22", y1: "2", y2: "22" }]
      ]
    ];
    var Link2 = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M9 17H7A5 5 0 0 1 7 7h2" }],
        ["path", { d: "M15 7h2a5 5 0 1 1 0 10h-2" }],
        ["line", { x1: "8", x2: "16", y1: "12", y2: "12" }]
      ]
    ];
    var Link = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" }
        ],
        [
          "path",
          { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" }
        ]
      ]
    ];
    var Linkedin = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
          }
        ],
        ["rect", { width: "4", height: "12", x: "2", y: "9" }],
        ["circle", { cx: "4", cy: "4", r: "2" }]
      ]
    ];
    var ListChecks = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "m3 17 2 2 4-4" }],
        ["path", { d: "m3 7 2 2 4-4" }],
        ["path", { d: "M13 6h8" }],
        ["path", { d: "M13 12h8" }],
        ["path", { d: "M13 18h8" }]
      ]
    ];
    var ListEnd = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M16 12H3" }],
        ["path", { d: "M16 6H3" }],
        ["path", { d: "M10 18H3" }],
        ["path", { d: "M21 6v10a2 2 0 0 1-2 2h-5" }],
        ["path", { d: "m16 16-2 2 2 2" }]
      ]
    ];
    var ListFilter = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M3 6h18" }],
        ["path", { d: "M7 12h10" }],
        ["path", { d: "M10 18h4" }]
      ]
    ];
    var ListMinus = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M11 12H3" }],
        ["path", { d: "M16 6H3" }],
        ["path", { d: "M16 18H3" }],
        ["path", { d: "M21 12h-6" }]
      ]
    ];
    var ListMusic = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M21 15V6" }],
        ["path", { d: "M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" }],
        ["path", { d: "M12 12H3" }],
        ["path", { d: "M16 6H3" }],
        ["path", { d: "M12 18H3" }]
      ]
    ];
    var ListOrdered = [
      "svg",
      defaultAttributes,
      [
        ["line", { x1: "10", x2: "21", y1: "6", y2: "6" }],
        ["line", { x1: "10", x2: "21", y1: "12", y2: "12" }],
        ["line", { x1: "10", x2: "21", y1: "18", y2: "18" }],
        ["path", { d: "M4 6h1v4" }],
        ["path", { d: "M4 10h2" }],
        ["path", { d: "M6 18H4c0-1 2-2 2-3s-1-1.5-2-1" }]
      ]
    ];
    var ListPlus = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M11 12H3" }],
        ["path", { d: "M16 6H3" }],
        ["path", { d: "M16 18H3" }],
        ["path", { d: "M18 9v6" }],
        ["path", { d: "M21 12h-6" }]
      ]
    ];
    var ListRestart = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M21 6H3" }],
        ["path", { d: "M7 12H3" }],
        ["path", { d: "M7 18H3" }],
        [
          "path",
          {
            d: "M12 18a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L11 14"
          }
        ],
        ["path", { d: "M11 10v4h4" }]
      ]
    ];
    var ListStart = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M16 12H3" }],
        ["path", { d: "M16 18H3" }],
        ["path", { d: "M10 6H3" }],
        ["path", { d: "M21 18V8a2 2 0 0 0-2-2h-5" }],
        ["path", { d: "m16 8-2-2 2-2" }]
      ]
    ];
    var ListTodo = [
      "svg",
      defaultAttributes,
      [
        ["rect", { x: "3", y: "5", width: "6", height: "6", rx: "1" }],
        ["path", { d: "m3 17 2 2 4-4" }],
        ["path", { d: "M13 6h8" }],
        ["path", { d: "M13 12h8" }],
        ["path", { d: "M13 18h8" }]
      ]
    ];
    var ListTree = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M21 12h-8" }],
        ["path", { d: "M21 6H8" }],
        ["path", { d: "M21 18h-8" }],
        ["path", { d: "M3 6v4c0 1.1.9 2 2 2h3" }],
        ["path", { d: "M3 10v6c0 1.1.9 2 2 2h3" }]
      ]
    ];
    var ListVideo = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M12 12H3" }],
        ["path", { d: "M16 6H3" }],
        ["path", { d: "M12 18H3" }],
        ["path", { d: "m16 12 5 3-5 3v-6Z" }]
      ]
    ];
    var ListX = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M11 12H3" }],
        ["path", { d: "M16 6H3" }],
        ["path", { d: "M16 18H3" }],
        ["path", { d: "m19 10-4 4" }],
        ["path", { d: "m15 10 4 4" }]
      ]
    ];
    var List = [
      "svg",
      defaultAttributes,
      [
        ["line", { x1: "8", x2: "21", y1: "6", y2: "6" }],
        ["line", { x1: "8", x2: "21", y1: "12", y2: "12" }],
        ["line", { x1: "8", x2: "21", y1: "18", y2: "18" }],
        ["line", { x1: "3", x2: "3.01", y1: "6", y2: "6" }],
        ["line", { x1: "3", x2: "3.01", y1: "12", y2: "12" }],
        ["line", { x1: "3", x2: "3.01", y1: "18", y2: "18" }]
      ]
    ];
    var Loader2 = [
      "svg",
      defaultAttributes,
      [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56" }]]
    ];
    var Loader = [
      "svg",
      defaultAttributes,
      [
        ["line", { x1: "12", x2: "12", y1: "2", y2: "6" }],
        ["line", { x1: "12", x2: "12", y1: "18", y2: "22" }],
        ["line", { x1: "4.93", x2: "7.76", y1: "4.93", y2: "7.76" }],
        ["line", { x1: "16.24", x2: "19.07", y1: "16.24", y2: "19.07" }],
        ["line", { x1: "2", x2: "6", y1: "12", y2: "12" }],
        ["line", { x1: "18", x2: "22", y1: "12", y2: "12" }],
        ["line", { x1: "4.93", x2: "7.76", y1: "19.07", y2: "16.24" }],
        ["line", { x1: "16.24", x2: "19.07", y1: "7.76", y2: "4.93" }]
      ]
    ];
    var LocateFixed = [
      "svg",
      defaultAttributes,
      [
        ["line", { x1: "2", x2: "5", y1: "12", y2: "12" }],
        ["line", { x1: "19", x2: "22", y1: "12", y2: "12" }],
        ["line", { x1: "12", x2: "12", y1: "2", y2: "5" }],
        ["line", { x1: "12", x2: "12", y1: "19", y2: "22" }],
        ["circle", { cx: "12", cy: "12", r: "7" }],
        ["circle", { cx: "12", cy: "12", r: "3" }]
      ]
    ];
    var LocateOff = [
      "svg",
      defaultAttributes,
      [
        ["line", { x1: "2", x2: "5", y1: "12", y2: "12" }],
        ["line", { x1: "19", x2: "22", y1: "12", y2: "12" }],
        ["line", { x1: "12", x2: "12", y1: "2", y2: "5" }],
        ["line", { x1: "12", x2: "12", y1: "19", y2: "22" }],
        [
          "path",
          {
            d: "M7.11 7.11C5.83 8.39 5 10.1 5 12c0 3.87 3.13 7 7 7 1.9 0 3.61-.83 4.89-2.11"
          }
        ],
        [
          "path",
          {
            d: "M18.71 13.96c.19-.63.29-1.29.29-1.96 0-3.87-3.13-7-7-7-.67 0-1.33.1-1.96.29"
          }
        ],
        ["line", { x1: "2", x2: "22", y1: "2", y2: "22" }]
      ]
    ];
    var Locate = [
      "svg",
      defaultAttributes,
      [
        ["line", { x1: "2", x2: "5", y1: "12", y2: "12" }],
        ["line", { x1: "19", x2: "22", y1: "12", y2: "12" }],
        ["line", { x1: "12", x2: "12", y1: "2", y2: "5" }],
        ["line", { x1: "12", x2: "12", y1: "19", y2: "22" }],
        ["circle", { cx: "12", cy: "12", r: "7" }]
      ]
    ];
    var LockKeyhole = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "12", cy: "16", r: "1" }],
        ["rect", { x: "3", y: "10", width: "18", height: "12", rx: "2" }],
        ["path", { d: "M7 10V7a5 5 0 0 1 10 0v3" }]
      ]
    ];
    var Lock = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2" }],
        ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4" }]
      ]
    ];
    var LogIn = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" }],
        ["polyline", { points: "10 17 15 12 10 7" }],
        ["line", { x1: "15", x2: "3", y1: "12", y2: "12" }]
      ]
    ];
    var LogOut = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" }],
        ["polyline", { points: "16 17 21 12 16 7" }],
        ["line", { x1: "21", x2: "9", y1: "12", y2: "12" }]
      ]
    ];
    var Lollipop = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "11", cy: "11", r: "8" }],
        ["path", { d: "m21 21-4.3-4.3" }],
        ["path", { d: "M11 11a2 2 0 0 0 4 0 4 4 0 0 0-8 0 6 6 0 0 0 12 0" }]
      ]
    ];
    var Luggage = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M6 20h0a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h0"
          }
        ],
        ["path", { d: "M8 18V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v14" }],
        ["path", { d: "M10 20h4" }],
        ["circle", { cx: "16", cy: "20", r: "2" }],
        ["circle", { cx: "8", cy: "20", r: "2" }]
      ]
    ];
    var MSquare = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
        ["path", { d: "M8 16V8l4 4 4-4v8" }]
      ]
    ];
    var Magnet = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "m6 15-4-4 6.75-6.77a7.79 7.79 0 0 1 11 11L13 22l-4-4 6.39-6.36a2.14 2.14 0 0 0-3-3L6 15"
          }
        ],
        ["path", { d: "m5 8 4 4" }],
        ["path", { d: "m12 15 4 4" }]
      ]
    ];
    var MailCheck = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          { d: "M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8" }
        ],
        ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" }],
        ["path", { d: "m16 19 2 2 4-4" }]
      ]
    ];
    var MailMinus = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          { d: "M22 15V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8" }
        ],
        ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" }],
        ["path", { d: "M16 19h6" }]
      ]
    ];
    var MailOpen = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z"
          }
        ],
        ["path", { d: "m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" }]
      ]
    ];
    var MailPlus = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          { d: "M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8" }
        ],
        ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" }],
        ["path", { d: "M19 16v6" }],
        ["path", { d: "M16 19h6" }]
      ]
    ];
    var MailQuestion = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          { d: "M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5" }
        ],
        ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" }],
        [
          "path",
          {
            d: "M18 15.28c.2-.4.5-.8.9-1a2.1 2.1 0 0 1 2.6.4c.3.4.5.8.5 1.3 0 1.3-2 2-2 2"
          }
        ],
        ["path", { d: "M20 22v.01" }]
      ]
    ];
    var MailSearch = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          { d: "M22 12.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h7.5" }
        ],
        ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" }],
        ["path", { d: "M18 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6v0Z" }],
        ["circle", { cx: "18", cy: "18", r: "3" }],
        ["path", { d: "m22 22-1.5-1.5" }]
      ]
    ];
    var MailWarning = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          { d: "M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5" }
        ],
        ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" }],
        ["path", { d: "M20 14v4" }],
        ["path", { d: "M20 22v.01" }]
      ]
    ];
    var MailX = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          { d: "M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h9" }
        ],
        ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" }],
        ["path", { d: "m17 17 4 4" }],
        ["path", { d: "m21 17-4 4" }]
      ]
    ];
    var Mail = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2" }],
        ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" }]
      ]
    ];
    var Mailbox = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5C2 7 4 5 6.5 5H18c2.2 0 4 1.8 4 4v8Z"
          }
        ],
        ["polyline", { points: "15,9 18,9 18,11" }],
        ["path", { d: "M6.5 5C9 5 11 7 11 9.5V17a2 2 0 0 1-2 2v0" }],
        ["line", { x1: "6", x2: "7", y1: "10", y2: "10" }]
      ]
    ];
    var Mails = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "16", height: "13", x: "6", y: "4", rx: "2" }],
        ["path", { d: "m22 7-7.1 3.78c-.57.3-1.23.3-1.8 0L6 7" }],
        ["path", { d: "M2 8v11c0 1.1.9 2 2 2h14" }]
      ]
    ];
    var MapPinOff = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M5.43 5.43A8.06 8.06 0 0 0 4 10c0 6 8 12 8 12a29.94 29.94 0 0 0 5-5"
          }
        ],
        [
          "path",
          {
            d: "M19.18 13.52A8.66 8.66 0 0 0 20 10a8 8 0 0 0-8-8 7.88 7.88 0 0 0-3.52.82"
          }
        ],
        [
          "path",
          {
            d: "M9.13 9.13A2.78 2.78 0 0 0 9 10a3 3 0 0 0 3 3 2.78 2.78 0 0 0 .87-.13"
          }
        ],
        ["path", { d: "M14.9 9.25a3 3 0 0 0-2.15-2.16" }],
        ["line", { x1: "2", x2: "22", y1: "2", y2: "22" }]
      ]
    ];
    var MapPin = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" }],
        ["circle", { cx: "12", cy: "10", r: "3" }]
      ]
    ];
    var MapPinned = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M18 8c0 4.5-6 9-6 9s-6-4.5-6-9a6 6 0 0 1 12 0" }],
        ["circle", { cx: "12", cy: "8", r: "2" }],
        [
          "path",
          {
            d: "M8.835 14H5a1 1 0 0 0-.9.7l-2 6c-.1.1-.1.2-.1.3 0 .6.4 1 1 1h18c.6 0 1-.4 1-1 0-.1 0-.2-.1-.3l-2-6a1 1 0 0 0-.9-.7h-3.835"
          }
        ]
      ]
    ];
    var Map2 = [
      "svg",
      defaultAttributes,
      [
        ["polygon", { points: "3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" }],
        ["line", { x1: "9", x2: "9", y1: "3", y2: "18" }],
        ["line", { x1: "15", x2: "15", y1: "6", y2: "21" }]
      ]
    ];
    var Martini = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M8 22h8" }],
        ["path", { d: "M12 11v11" }],
        ["path", { d: "m19 3-7 8-7-8Z" }]
      ]
    ];
    var Maximize2 = [
      "svg",
      defaultAttributes,
      [
        ["polyline", { points: "15 3 21 3 21 9" }],
        ["polyline", { points: "9 21 3 21 3 15" }],
        ["line", { x1: "21", x2: "14", y1: "3", y2: "10" }],
        ["line", { x1: "3", x2: "10", y1: "21", y2: "14" }]
      ]
    ];
    var Maximize = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M8 3H5a2 2 0 0 0-2 2v3" }],
        ["path", { d: "M21 8V5a2 2 0 0 0-2-2h-3" }],
        ["path", { d: "M3 16v3a2 2 0 0 0 2 2h3" }],
        ["path", { d: "M16 21h3a2 2 0 0 0 2-2v-3" }]
      ]
    ];
    var Medal = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15"
          }
        ],
        ["path", { d: "M11 12 5.12 2.2" }],
        ["path", { d: "m13 12 5.88-9.8" }],
        ["path", { d: "M8 7h8" }],
        ["circle", { cx: "12", cy: "17", r: "5" }],
        ["path", { d: "M12 18v-2h-.5" }]
      ]
    ];
    var MegaphoneOff = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M9.26 9.26 3 11v3l14.14 3.14" }],
        ["path", { d: "M21 15.34V6l-7.31 2.03" }],
        ["path", { d: "M11.6 16.8a3 3 0 1 1-5.8-1.6" }],
        ["line", { x1: "2", x2: "22", y1: "2", y2: "22" }]
      ]
    ];
    var Megaphone = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "m3 11 18-5v12L3 14v-3z" }],
        ["path", { d: "M11.6 16.8a3 3 0 1 1-5.8-1.6" }]
      ]
    ];
    var Meh = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "12", cy: "12", r: "10" }],
        ["line", { x1: "8", x2: "16", y1: "15", y2: "15" }],
        ["line", { x1: "9", x2: "9.01", y1: "9", y2: "9" }],
        ["line", { x1: "15", x2: "15.01", y1: "9", y2: "9" }]
      ]
    ];
    var MemoryStick = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M6 19v-3" }],
        ["path", { d: "M10 19v-3" }],
        ["path", { d: "M14 19v-3" }],
        ["path", { d: "M18 19v-3" }],
        ["path", { d: "M8 11V9" }],
        ["path", { d: "M16 11V9" }],
        ["path", { d: "M12 11V9" }],
        ["path", { d: "M2 15h20" }],
        [
          "path",
          {
            d: "M2 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1.1a2 2 0 0 0 0 3.837V17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-5.1a2 2 0 0 0 0-3.837Z"
          }
        ]
      ]
    ];
    var MenuSquare = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
        ["path", { d: "M7 8h10" }],
        ["path", { d: "M7 12h10" }],
        ["path", { d: "M7 16h10" }]
      ]
    ];
    var Menu = [
      "svg",
      defaultAttributes,
      [
        ["line", { x1: "4", x2: "20", y1: "12", y2: "12" }],
        ["line", { x1: "4", x2: "20", y1: "6", y2: "6" }],
        ["line", { x1: "4", x2: "20", y1: "18", y2: "18" }]
      ]
    ];
    var Merge = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "m8 6 4-4 4 4" }],
        ["path", { d: "M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22" }],
        ["path", { d: "m20 22-5-5" }]
      ]
    ];
    var MessageCircle = [
      "svg",
      defaultAttributes,
      [["path", { d: "m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" }]]
    ];
    var MessageSquareDashed = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M3 6V5c0-1.1.9-2 2-2h2" }],
        ["path", { d: "M11 3h3" }],
        ["path", { d: "M18 3h1c1.1 0 2 .9 2 2" }],
        ["path", { d: "M21 9v2" }],
        ["path", { d: "M21 15c0 1.1-.9 2-2 2h-1" }],
        ["path", { d: "M14 17h-3" }],
        ["path", { d: "m7 17-4 4v-5" }],
        ["path", { d: "M3 12v-2" }]
      ]
    ];
    var MessageSquarePlus = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" }
        ],
        ["line", { x1: "9", x2: "15", y1: "10", y2: "10" }],
        ["line", { x1: "12", x2: "12", y1: "7", y2: "13" }]
      ]
    ];
    var MessageSquare = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" }
        ]
      ]
    ];
    var MessagesSquare = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          { d: "M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" }
        ],
        ["path", { d: "M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" }]
      ]
    ];
    var Mic2 = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "m12 8-9.04 9.06a2.82 2.82 0 1 0 3.98 3.98L16 12" }],
        ["circle", { cx: "17", cy: "7", r: "5" }]
      ]
    ];
    var MicOff = [
      "svg",
      defaultAttributes,
      [
        ["line", { x1: "2", x2: "22", y1: "2", y2: "22" }],
        ["path", { d: "M18.89 13.23A7.12 7.12 0 0 0 19 12v-2" }],
        ["path", { d: "M5 10v2a7 7 0 0 0 12 5" }],
        ["path", { d: "M15 9.34V5a3 3 0 0 0-5.68-1.33" }],
        ["path", { d: "M9 9v3a3 3 0 0 0 5.12 2.12" }],
        ["line", { x1: "12", x2: "12", y1: "19", y2: "22" }]
      ]
    ];
    var Mic = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" }],
        ["path", { d: "M19 10v2a7 7 0 0 1-14 0v-2" }],
        ["line", { x1: "12", x2: "12", y1: "19", y2: "22" }]
      ]
    ];
    var Microscope = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M6 18h8" }],
        ["path", { d: "M3 22h18" }],
        ["path", { d: "M14 22a7 7 0 1 0 0-14h-1" }],
        ["path", { d: "M9 14h2" }],
        ["path", { d: "M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z" }],
        ["path", { d: "M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" }]
      ]
    ];
    var Microwave = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "20", height: "15", x: "2", y: "4", rx: "2" }],
        ["rect", { width: "8", height: "7", x: "6", y: "8", rx: "1" }],
        ["path", { d: "M18 8v7" }],
        ["path", { d: "M6 19v2" }],
        ["path", { d: "M18 19v2" }]
      ]
    ];
    var Milestone = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M18 6H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h13l4-3.5L18 6Z" }],
        ["path", { d: "M12 13v8" }],
        ["path", { d: "M12 3v3" }]
      ]
    ];
    var MilkOff = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M8 2h8" }],
        [
          "path",
          {
            d: "M9 2v1.343M15 2v2.789a4 4 0 0 0 .672 2.219l.656.984a4 4 0 0 1 .672 2.22v1.131M7.8 7.8l-.128.192A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-3"
          }
        ],
        ["path", { d: "M7 15a6.47 6.47 0 0 1 5 0 6.472 6.472 0 0 0 3.435.435" }],
        ["line", { x1: "2", x2: "22", y1: "2", y2: "22" }]
      ]
    ];
    var Milk = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M8 2h8" }],
        [
          "path",
          {
            d: "M9 2v2.789a4 4 0 0 1-.672 2.219l-.656.984A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-9.789a4 4 0 0 0-.672-2.219l-.656-.984A4 4 0 0 1 15 4.788V2"
          }
        ],
        ["path", { d: "M7 15a6.472 6.472 0 0 1 5 0 6.47 6.47 0 0 0 5 0" }]
      ]
    ];
    var Minimize2 = [
      "svg",
      defaultAttributes,
      [
        ["polyline", { points: "4 14 10 14 10 20" }],
        ["polyline", { points: "20 10 14 10 14 4" }],
        ["line", { x1: "14", x2: "21", y1: "10", y2: "3" }],
        ["line", { x1: "3", x2: "10", y1: "21", y2: "14" }]
      ]
    ];
    var Minimize = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M8 3v3a2 2 0 0 1-2 2H3" }],
        ["path", { d: "M21 8h-3a2 2 0 0 1-2-2V3" }],
        ["path", { d: "M3 16h3a2 2 0 0 1 2 2v3" }],
        ["path", { d: "M16 21v-3a2 2 0 0 1 2-2h3" }]
      ]
    ];
    var MinusCircle = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "12", cy: "12", r: "10" }],
        ["path", { d: "M8 12h8" }]
      ]
    ];
    var MinusSquare = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
        ["path", { d: "M8 12h8" }]
      ]
    ];
    var Minus = [
      "svg",
      defaultAttributes,
      [["path", { d: "M5 12h14" }]]
    ];
    var MonitorCheck = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "m9 10 2 2 4-4" }],
        ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2" }],
        ["path", { d: "M12 17v4" }],
        ["path", { d: "M8 21h8" }]
      ]
    ];
    var MonitorDot = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "19", cy: "6", r: "3" }],
        ["path", { d: "M22 12v3a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h9" }],
        ["path", { d: "M12 17v4" }],
        ["path", { d: "M8 21h8" }]
      ]
    ];
    var MonitorDown = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M12 13V7" }],
        ["path", { d: "m15 10-3 3-3-3" }],
        ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2" }],
        ["path", { d: "M12 17v4" }],
        ["path", { d: "M8 21h8" }]
      ]
    ];
    var MonitorOff = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M17 17H4a2 2 0 0 1-2-2V5c0-1.5 1-2 1-2" }],
        ["path", { d: "M22 15V5a2 2 0 0 0-2-2H9" }],
        ["path", { d: "M8 21h8" }],
        ["path", { d: "M12 17v4" }],
        ["path", { d: "m2 2 20 20" }]
      ]
    ];
    var MonitorPause = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M10 13V7" }],
        ["path", { d: "M14 13V7" }],
        ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2" }],
        ["path", { d: "M12 17v4" }],
        ["path", { d: "M8 21h8" }]
      ]
    ];
    var MonitorPlay = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "m10 7 5 3-5 3Z" }],
        ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2" }],
        ["path", { d: "M12 17v4" }],
        ["path", { d: "M8 21h8" }]
      ]
    ];
    var MonitorSmartphone = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8" }],
        ["path", { d: "M10 19v-3.96 3.15" }],
        ["path", { d: "M7 19h5" }],
        ["rect", { width: "6", height: "10", x: "16", y: "12", rx: "2" }]
      ]
    ];
    var MonitorSpeaker = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M5.5 20H8" }],
        ["path", { d: "M17 9h.01" }],
        ["rect", { width: "10", height: "16", x: "12", y: "4", rx: "2" }],
        ["path", { d: "M8 6H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4" }],
        ["circle", { cx: "17", cy: "15", r: "1" }]
      ]
    ];
    var MonitorStop = [
      "svg",
      defaultAttributes,
      [
        ["rect", { x: "9", y: "7", width: "6", height: "6" }],
        ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2" }],
        ["path", { d: "M12 17v4" }],
        ["path", { d: "M8 21h8" }]
      ]
    ];
    var MonitorUp = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "m9 10 3-3 3 3" }],
        ["path", { d: "M12 13V7" }],
        ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2" }],
        ["path", { d: "M12 17v4" }],
        ["path", { d: "M8 21h8" }]
      ]
    ];
    var MonitorX = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "m14.5 12.5-5-5" }],
        ["path", { d: "m9.5 12.5 5-5" }],
        ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2" }],
        ["path", { d: "M12 17v4" }],
        ["path", { d: "M8 21h8" }]
      ]
    ];
    var Monitor = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2" }],
        ["line", { x1: "8", x2: "16", y1: "21", y2: "21" }],
        ["line", { x1: "12", x2: "12", y1: "17", y2: "21" }]
      ]
    ];
    var MoonStar = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" }],
        ["path", { d: "M19 3v4" }],
        ["path", { d: "M21 5h-4" }]
      ]
    ];
    var Moon = [
      "svg",
      defaultAttributes,
      [["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" }]]
    ];
    var MoreHorizontal = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "12", cy: "12", r: "1" }],
        ["circle", { cx: "19", cy: "12", r: "1" }],
        ["circle", { cx: "5", cy: "12", r: "1" }]
      ]
    ];
    var MoreVertical = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "12", cy: "12", r: "1" }],
        ["circle", { cx: "12", cy: "5", r: "1" }],
        ["circle", { cx: "12", cy: "19", r: "1" }]
      ]
    ];
    var MountainSnow = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "m8 3 4 8 5-5 5 15H2L8 3z" }],
        [
          "path",
          { d: "M4.14 15.08c2.62-1.57 5.24-1.43 7.86.42 2.74 1.94 5.49 2 8.23.19" }
        ]
      ]
    ];
    var Mountain = [
      "svg",
      defaultAttributes,
      [["path", { d: "m8 3 4 8 5-5 5 15H2L8 3z" }]]
    ];
    var MousePointer2 = [
      "svg",
      defaultAttributes,
      [["path", { d: "m4 4 7.07 17 2.51-7.39L21 11.07z" }]]
    ];
    var MousePointerClick = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "m9 9 5 12 1.8-5.2L21 14Z" }],
        ["path", { d: "M7.2 2.2 8 5.1" }],
        ["path", { d: "m5.1 8-2.9-.8" }],
        ["path", { d: "M14 4.1 12 6" }],
        ["path", { d: "m6 12-1.9 2" }]
      ]
    ];
    var MousePointerSquareDashed = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M5 3a2 2 0 0 0-2 2" }],
        ["path", { d: "M19 3a2 2 0 0 1 2 2" }],
        ["path", { d: "m12 12 4 10 1.7-4.3L22 16Z" }],
        ["path", { d: "M5 21a2 2 0 0 1-2-2" }],
        ["path", { d: "M9 3h1" }],
        ["path", { d: "M9 21h2" }],
        ["path", { d: "M14 3h1" }],
        ["path", { d: "M3 9v1" }],
        ["path", { d: "M21 9v2" }],
        ["path", { d: "M3 14v1" }]
      ]
    ];
    var MousePointerSquare = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          { d: "M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6" }
        ],
        ["path", { d: "m12 12 4 10 1.7-4.3L22 16Z" }]
      ]
    ];
    var MousePointer = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "m3 3 7.07 16.97 2.51-7.39 7.39-2.51L3 3z" }],
        ["path", { d: "m13 13 6 6" }]
      ]
    ];
    var Mouse = [
      "svg",
      defaultAttributes,
      [
        ["rect", { x: "5", y: "2", width: "14", height: "20", rx: "7" }],
        ["path", { d: "M12 6v4" }]
      ]
    ];
    var Move3d = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M5 3v16h16" }],
        ["path", { d: "m5 19 6-6" }],
        ["path", { d: "m2 6 3-3 3 3" }],
        ["path", { d: "m18 16 3 3-3 3" }]
      ]
    ];
    var MoveDiagonal2 = [
      "svg",
      defaultAttributes,
      [
        ["polyline", { points: "5 11 5 5 11 5" }],
        ["polyline", { points: "19 13 19 19 13 19" }],
        ["line", { x1: "5", x2: "19", y1: "5", y2: "19" }]
      ]
    ];
    var MoveDiagonal = [
      "svg",
      defaultAttributes,
      [
        ["polyline", { points: "13 5 19 5 19 11" }],
        ["polyline", { points: "11 19 5 19 5 13" }],
        ["line", { x1: "19", x2: "5", y1: "5", y2: "19" }]
      ]
    ];
    var MoveDownLeft = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M11 19H5V13" }],
        ["path", { d: "M19 5L5 19" }]
      ]
    ];
    var MoveDownRight = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M19 13V19H13" }],
        ["path", { d: "M5 5L19 19" }]
      ]
    ];
    var MoveDown = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M8 18L12 22L16 18" }],
        ["path", { d: "M12 2V22" }]
      ]
    ];
    var MoveHorizontal = [
      "svg",
      defaultAttributes,
      [
        ["polyline", { points: "18 8 22 12 18 16" }],
        ["polyline", { points: "6 8 2 12 6 16" }],
        ["line", { x1: "2", x2: "22", y1: "12", y2: "12" }]
      ]
    ];
    var MoveLeft = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M6 8L2 12L6 16" }],
        ["path", { d: "M2 12H22" }]
      ]
    ];
    var MoveRight = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M18 8L22 12L18 16" }],
        ["path", { d: "M2 12H22" }]
      ]
    ];
    var MoveUpLeft = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M5 11V5H11" }],
        ["path", { d: "M5 5L19 19" }]
      ]
    ];
    var MoveUpRight = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M13 5H19V11" }],
        ["path", { d: "M19 5L5 19" }]
      ]
    ];
    var MoveUp = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M8 6L12 2L16 6" }],
        ["path", { d: "M12 2V22" }]
      ]
    ];
    var MoveVertical = [
      "svg",
      defaultAttributes,
      [
        ["polyline", { points: "8 18 12 22 16 18" }],
        ["polyline", { points: "8 6 12 2 16 6" }],
        ["line", { x1: "12", x2: "12", y1: "2", y2: "22" }]
      ]
    ];
    var Move = [
      "svg",
      defaultAttributes,
      [
        ["polyline", { points: "5 9 2 12 5 15" }],
        ["polyline", { points: "9 5 12 2 15 5" }],
        ["polyline", { points: "15 19 12 22 9 19" }],
        ["polyline", { points: "19 9 22 12 19 15" }],
        ["line", { x1: "2", x2: "22", y1: "12", y2: "12" }],
        ["line", { x1: "12", x2: "12", y1: "2", y2: "22" }]
      ]
    ];
    var Music2 = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "8", cy: "18", r: "4" }],
        ["path", { d: "M12 18V2l7 4" }]
      ]
    ];
    var Music3 = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "12", cy: "18", r: "4" }],
        ["path", { d: "M16 18V2" }]
      ]
    ];
    var Music4 = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M9 18V5l12-2v13" }],
        ["path", { d: "m9 9 12-2" }],
        ["circle", { cx: "6", cy: "18", r: "3" }],
        ["circle", { cx: "18", cy: "16", r: "3" }]
      ]
    ];
    var Music = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M9 18V5l12-2v13" }],
        ["circle", { cx: "6", cy: "18", r: "3" }],
        ["circle", { cx: "18", cy: "16", r: "3" }]
      ]
    ];
    var Navigation2Off = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M9.31 9.31 5 21l7-4 7 4-1.17-3.17" }],
        ["path", { d: "M14.53 8.88 12 2l-1.17 3.17" }],
        ["line", { x1: "2", x2: "22", y1: "2", y2: "22" }]
      ]
    ];
    var Navigation2 = [
      "svg",
      defaultAttributes,
      [["polygon", { points: "12 2 19 21 12 17 5 21 12 2" }]]
    ];
    var NavigationOff = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M8.43 8.43 3 11l8 2 2 8 2.57-5.43" }],
        ["path", { d: "M17.39 11.73 22 2l-9.73 4.61" }],
        ["line", { x1: "2", x2: "22", y1: "2", y2: "22" }]
      ]
    ];
    var Navigation = [
      "svg",
      defaultAttributes,
      [["polygon", { points: "3 11 22 2 13 21 11 13 3 11" }]]
    ];
    var Network = [
      "svg",
      defaultAttributes,
      [
        ["rect", { x: "16", y: "16", width: "6", height: "6", rx: "1" }],
        ["rect", { x: "2", y: "16", width: "6", height: "6", rx: "1" }],
        ["rect", { x: "9", y: "2", width: "6", height: "6", rx: "1" }],
        ["path", { d: "M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" }],
        ["path", { d: "M12 12V8" }]
      ]
    ];
    var Newspaper = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"
          }
        ],
        ["path", { d: "M18 14h-8" }],
        ["path", { d: "M15 18h-5" }],
        ["path", { d: "M10 6h8v4h-8V6Z" }]
      ]
    ];
    var Nfc = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M6 8.32a7.43 7.43 0 0 1 0 7.36" }],
        ["path", { d: "M9.46 6.21a11.76 11.76 0 0 1 0 11.58" }],
        ["path", { d: "M12.91 4.1a15.91 15.91 0 0 1 .01 15.8" }],
        ["path", { d: "M16.37 2a20.16 20.16 0 0 1 0 20" }]
      ]
    ];
    var NutOff = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M12 4V2" }],
        [
          "path",
          {
            d: "M5 10v4a7.004 7.004 0 0 0 5.277 6.787c.412.104.802.292 1.102.592L12 22l.621-.621c.3-.3.69-.488 1.102-.592a7.01 7.01 0 0 0 4.125-2.939"
          }
        ],
        ["path", { d: "M19 10v3.343" }],
        [
          "path",
          {
            d: "M12 12c-1.349-.573-1.905-1.005-2.5-2-.546.902-1.048 1.353-2.5 2-1.018-.644-1.46-1.08-2-2-1.028.71-1.69.918-3 1 1.081-1.048 1.757-2.03 2-3 .194-.776.84-1.551 1.79-2.21m11.654 5.997c.887-.457 1.28-.891 1.556-1.787 1.032.916 1.683 1.157 3 1-1.297-1.036-1.758-2.03-2-3-.5-2-4-4-8-4-.74 0-1.461.068-2.15.192"
          }
        ],
        ["line", { x1: "2", x2: "22", y1: "2", y2: "22" }]
      ]
    ];
    var Nut = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M12 4V2" }],
        [
          "path",
          {
            d: "M5 10v4a7.004 7.004 0 0 0 5.277 6.787c.412.104.802.292 1.102.592L12 22l.621-.621c.3-.3.69-.488 1.102-.592A7.003 7.003 0 0 0 19 14v-4"
          }
        ],
        [
          "path",
          {
            d: "M12 4C8 4 4.5 6 4 8c-.243.97-.919 1.952-2 3 1.31-.082 1.972-.29 3-1 .54.92.982 1.356 2 2 1.452-.647 1.954-1.098 2.5-2 .595.995 1.151 1.427 2.5 2 1.31-.621 1.862-1.058 2.5-2 .629.977 1.162 1.423 2.5 2 1.209-.548 1.68-.967 2-2 1.032.916 1.683 1.157 3 1-1.297-1.036-1.758-2.03-2-3-.5-2-4-4-8-4Z"
          }
        ]
      ]
    ];
    var Octagon = [
      "svg",
      defaultAttributes,
      [
        [
          "polygon",
          {
            points: "7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"
          }
        ]
      ]
    ];
    var Option = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M3 3h6l6 18h6" }],
        ["path", { d: "M14 3h7" }]
      ]
    ];
    var Orbit = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "12", cy: "12", r: "3" }],
        ["circle", { cx: "19", cy: "5", r: "2" }],
        ["circle", { cx: "5", cy: "19", r: "2" }],
        ["path", { d: "M10.4 21.9a10 10 0 0 0 9.941-15.416" }],
        ["path", { d: "M13.5 2.1a10 10 0 0 0-9.841 15.416" }]
      ]
    ];
    var Outdent = [
      "svg",
      defaultAttributes,
      [
        ["polyline", { points: "7 8 3 12 7 16" }],
        ["line", { x1: "21", x2: "11", y1: "12", y2: "12" }],
        ["line", { x1: "21", x2: "11", y1: "6", y2: "6" }],
        ["line", { x1: "21", x2: "11", y1: "18", y2: "18" }]
      ]
    ];
    var Package2 = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" }],
        [
          "path",
          { d: "m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" }
        ],
        ["path", { d: "M12 3v6" }]
      ]
    ];
    var PackageCheck = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "m16 16 2 2 4-4" }],
        [
          "path",
          {
            d: "M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"
          }
        ],
        ["path", { d: "m7.5 4.27 9 5.15" }],
        ["polyline", { points: "3.29 7 12 12 20.71 7" }],
        ["line", { x1: "12", x2: "12", y1: "22", y2: "12" }]
      ]
    ];
    var PackageMinus = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M16 16h6" }],
        [
          "path",
          {
            d: "M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"
          }
        ],
        ["path", { d: "m7.5 4.27 9 5.15" }],
        ["polyline", { points: "3.29 7 12 12 20.71 7" }],
        ["line", { x1: "12", x2: "12", y1: "22", y2: "12" }]
      ]
    ];
    var PackageOpen = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M20.91 8.84 8.56 2.23a1.93 1.93 0 0 0-1.81 0L3.1 4.13a2.12 2.12 0 0 0-.05 3.69l12.22 6.93a2 2 0 0 0 1.94 0L21 12.51a2.12 2.12 0 0 0-.09-3.67Z"
          }
        ],
        [
          "path",
          {
            d: "m3.09 8.84 12.35-6.61a1.93 1.93 0 0 1 1.81 0l3.65 1.9a2.12 2.12 0 0 1 .1 3.69L8.73 14.75a2 2 0 0 1-1.94 0L3 12.51a2.12 2.12 0 0 1 .09-3.67Z"
          }
        ],
        ["line", { x1: "12", x2: "12", y1: "22", y2: "13" }],
        [
          "path",
          {
            d: "M20 13.5v3.37a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13.5"
          }
        ]
      ]
    ];
    var PackagePlus = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M16 16h6" }],
        ["path", { d: "M19 13v6" }],
        [
          "path",
          {
            d: "M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"
          }
        ],
        ["path", { d: "m7.5 4.27 9 5.15" }],
        ["polyline", { points: "3.29 7 12 12 20.71 7" }],
        ["line", { x1: "12", x2: "12", y1: "22", y2: "12" }]
      ]
    ];
    var PackageSearch = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"
          }
        ],
        ["path", { d: "m7.5 4.27 9 5.15" }],
        ["polyline", { points: "3.29 7 12 12 20.71 7" }],
        ["line", { x1: "12", x2: "12", y1: "22", y2: "12" }],
        ["circle", { cx: "18.5", cy: "15.5", r: "2.5" }],
        ["path", { d: "M20.27 17.27 22 19" }]
      ]
    ];
    var PackageX = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"
          }
        ],
        ["path", { d: "m7.5 4.27 9 5.15" }],
        ["polyline", { points: "3.29 7 12 12 20.71 7" }],
        ["line", { x1: "12", x2: "12", y1: "22", y2: "12" }],
        ["path", { d: "m17 13 5 5m-5 0 5-5" }]
      ]
    ];
    var Package = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "m7.5 4.27 9 5.15" }],
        [
          "path",
          {
            d: "M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"
          }
        ],
        ["path", { d: "m3.3 7 8.7 5 8.7-5" }],
        ["path", { d: "M12 22V12" }]
      ]
    ];
    var PaintBucket = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "m19 11-8-8-8.6 8.6a2 2 0 0 0 0 2.8l5.2 5.2c.8.8 2 .8 2.8 0L19 11Z"
          }
        ],
        ["path", { d: "m5 2 5 5" }],
        ["path", { d: "M2 13h15" }],
        ["path", { d: "M22 20a2 2 0 1 1-4 0c0-1.6 1.7-2.4 2-4 .3 1.6 2 2.4 2 4Z" }]
      ]
    ];
    var Paintbrush2 = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M14 19.9V16h3a2 2 0 0 0 2-2v-2H5v2c0 1.1.9 2 2 2h3v3.9a2 2 0 1 0 4 0Z"
          }
        ],
        ["path", { d: "M6 12V2h12v10" }],
        ["path", { d: "M14 2v4" }],
        ["path", { d: "M10 2v2" }]
      ]
    ];
    var Paintbrush = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M18.37 2.63 14 7l-1.59-1.59a2 2 0 0 0-2.82 0L8 7l9 9 1.59-1.59a2 2 0 0 0 0-2.82L17 10l4.37-4.37a2.12 2.12 0 1 0-3-3Z"
          }
        ],
        ["path", { d: "M9 8c-2 3-4 3.5-7 4l8 10c2-1 6-5 6-7" }],
        ["path", { d: "M14.5 17.5 4.5 15" }]
      ]
    ];
    var Palette = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "13.5", cy: "6.5", r: ".5" }],
        ["circle", { cx: "17.5", cy: "10.5", r: ".5" }],
        ["circle", { cx: "8.5", cy: "7.5", r: ".5" }],
        ["circle", { cx: "6.5", cy: "12.5", r: ".5" }],
        [
          "path",
          {
            d: "M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"
          }
        ]
      ]
    ];
    var Palmtree = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M13 8c0-2.76-2.46-5-5.5-5S2 5.24 2 8h2l1-1 1 1h4" }],
        [
          "path",
          {
            d: "M13 7.14A5.82 5.82 0 0 1 16.5 6c3.04 0 5.5 2.24 5.5 5h-3l-1-1-1 1h-3"
          }
        ],
        [
          "path",
          {
            d: "M5.89 9.71c-2.15 2.15-2.3 5.47-.35 7.43l4.24-4.25.7-.7.71-.71 2.12-2.12c-1.95-1.96-5.27-1.8-7.42.35z"
          }
        ],
        ["path", { d: "M11 15.5c.5 2.5-.17 4.5-1 6.5h4c2-5.5-.5-12-1-14" }]
      ]
    ];
    var PanelBottomClose = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2" }],
        ["line", { x1: "3", x2: "21", y1: "15", y2: "15" }],
        ["path", { d: "m15 8-3 3-3-3" }]
      ]
    ];
    var PanelBottomInactive = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
        ["path", { d: "M14 15h1" }],
        ["path", { d: "M19 15h2" }],
        ["path", { d: "M3 15h2" }],
        ["path", { d: "M9 15h1" }]
      ]
    ];
    var PanelBottomOpen = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2" }],
        ["line", { x1: "3", x2: "21", y1: "15", y2: "15" }],
        ["path", { d: "m9 10 3-3 3 3" }]
      ]
    ];
    var PanelBottom = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2" }],
        ["line", { x1: "3", x2: "21", y1: "15", y2: "15" }]
      ]
    ];
    var PanelLeftClose = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2" }],
        ["path", { d: "M9 3v18" }],
        ["path", { d: "m16 15-3-3 3-3" }]
      ]
    ];
    var PanelLeftInactive = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
        ["path", { d: "M9 14v1" }],
        ["path", { d: "M9 19v2" }],
        ["path", { d: "M9 3v2" }],
        ["path", { d: "M9 9v1" }]
      ]
    ];
    var PanelLeftOpen = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2" }],
        ["path", { d: "M9 3v18" }],
        ["path", { d: "m14 9 3 3-3 3" }]
      ]
    ];
    var PanelLeft = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2" }],
        ["line", { x1: "9", x2: "9", y1: "3", y2: "21" }]
      ]
    ];
    var PanelRightClose = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2" }],
        ["line", { x1: "15", x2: "15", y1: "3", y2: "21" }],
        ["path", { d: "m8 9 3 3-3 3" }]
      ]
    ];
    var PanelRightInactive = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
        ["path", { d: "M15 14v1" }],
        ["path", { d: "M15 19v2" }],
        ["path", { d: "M15 3v2" }],
        ["path", { d: "M15 9v1" }]
      ]
    ];
    var PanelRightOpen = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2" }],
        ["line", { x1: "15", x2: "15", y1: "3", y2: "21" }],
        ["path", { d: "m10 15-3-3 3-3" }]
      ]
    ];
    var PanelRight = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2" }],
        ["line", { x1: "15", x2: "15", y1: "3", y2: "21" }]
      ]
    ];
    var PanelTopClose = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2" }],
        ["line", { x1: "3", x2: "21", y1: "9", y2: "9" }],
        ["path", { d: "m9 16 3-3 3 3" }]
      ]
    ];
    var PanelTopInactive = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
        ["path", { d: "M14 9h1" }],
        ["path", { d: "M19 9h2" }],
        ["path", { d: "M3 9h2" }],
        ["path", { d: "M9 9h1" }]
      ]
    ];
    var PanelTopOpen = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2" }],
        ["line", { x1: "3", x2: "21", y1: "9", y2: "9" }],
        ["path", { d: "m15 14-3 3-3-3" }]
      ]
    ];
    var PanelTop = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2" }],
        ["line", { x1: "3", x2: "21", y1: "9", y2: "9" }]
      ]
    ];
    var Paperclip = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"
          }
        ]
      ]
    ];
    var Parentheses = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M8 21s-4-3-4-9 4-9 4-9" }],
        ["path", { d: "M16 3s4 3 4 9-4 9-4 9" }]
      ]
    ];
    var ParkingCircleOff = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "12", cy: "12", r: "10" }],
        ["path", { d: "m5 5 14 14" }],
        ["path", { d: "M13 13a3 3 0 1 0 0-6H9v2" }],
        ["path", { d: "M9 17v-2.34" }]
      ]
    ];
    var ParkingCircle = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "12", cy: "12", r: "10" }],
        ["path", { d: "M9 17V7h4a3 3 0 0 1 0 6H9" }]
      ]
    ];
    var ParkingMeter = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M9 9a3 3 0 1 1 6 0" }],
        ["path", { d: "M12 12v3" }],
        ["path", { d: "M11 15h2" }],
        [
          "path",
          {
            d: "M19 9a7 7 0 1 0-13.6 2.3C6.4 14.4 8 19 8 19h8s1.6-4.6 2.6-7.7c.3-.8.4-1.5.4-2.3"
          }
        ],
        ["path", { d: "M12 19v3" }]
      ]
    ];
    var ParkingSquareOff = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          { d: "M3.6 3.6A2 2 0 0 1 5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-.59 1.41" }
        ],
        ["path", { d: "M3 8.7V19a2 2 0 0 0 2 2h10.3" }],
        ["path", { d: "m2 2 20 20" }],
        ["path", { d: "M13 13a3 3 0 1 0 0-6H9v2" }],
        ["path", { d: "M9 17v-2.3" }]
      ]
    ];
    var ParkingSquare = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
        ["path", { d: "M9 17V7h4a3 3 0 0 1 0 6H9" }]
      ]
    ];
    var PartyPopper = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M5.8 11.3 2 22l10.7-3.79" }],
        ["path", { d: "M4 3h.01" }],
        ["path", { d: "M22 8h.01" }],
        ["path", { d: "M15 2h.01" }],
        ["path", { d: "M22 20h.01" }],
        [
          "path",
          {
            d: "m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12v0c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10"
          }
        ],
        [
          "path",
          {
            d: "m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11v0c-.11.7-.72 1.22-1.43 1.22H17"
          }
        ],
        [
          "path",
          { d: "m11 2 .33.82c.34.86-.2 1.82-1.11 1.98v0C9.52 4.9 9 5.52 9 6.23V7" }
        ],
        [
          "path",
          {
            d: "M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z"
          }
        ]
      ]
    ];
    var PauseCircle = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "12", cy: "12", r: "10" }],
        ["line", { x1: "10", x2: "10", y1: "15", y2: "9" }],
        ["line", { x1: "14", x2: "14", y1: "15", y2: "9" }]
      ]
    ];
    var PauseOctagon = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M10 15V9" }],
        ["path", { d: "M14 15V9" }],
        [
          "path",
          {
            d: "M7.714 2h8.572L22 7.714v8.572L16.286 22H7.714L2 16.286V7.714L7.714 2z"
          }
        ]
      ]
    ];
    var Pause = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "4", height: "16", x: "6", y: "4" }],
        ["rect", { width: "4", height: "16", x: "14", y: "4" }]
      ]
    ];
    var PawPrint = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "11", cy: "4", r: "2" }],
        ["circle", { cx: "18", cy: "8", r: "2" }],
        ["circle", { cx: "20", cy: "16", r: "2" }],
        [
          "path",
          {
            d: "M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z"
          }
        ]
      ]
    ];
    var PcCase = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "14", height: "20", x: "5", y: "2", rx: "2" }],
        ["path", { d: "M15 14h.01" }],
        ["path", { d: "M9 6h6" }],
        ["path", { d: "M9 10h6" }]
      ]
    ];
    var PenLine = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M12 20h9" }],
        ["path", { d: "M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" }]
      ]
    ];
    var PenSquare = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          { d: "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" }
        ],
        ["path", { d: "M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4Z" }]
      ]
    ];
    var PenTool = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "m12 19 7-7 3 3-7 7-3-3z" }],
        ["path", { d: "m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" }],
        ["path", { d: "m2 2 7.586 7.586" }],
        ["circle", { cx: "11", cy: "11", r: "2" }]
      ]
    ];
    var Pen = [
      "svg",
      defaultAttributes,
      [["path", { d: "M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" }]]
    ];
    var PencilLine = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M12 20h9" }],
        ["path", { d: "M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" }],
        ["path", { d: "m15 5 3 3" }]
      ]
    ];
    var PencilRuler = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "m15 5 4 4" }],
        [
          "path",
          {
            d: "M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13"
          }
        ],
        ["path", { d: "m8 6 2-2" }],
        ["path", { d: "m2 22 5.5-1.5L21.17 6.83a2.82 2.82 0 0 0-4-4L3.5 16.5Z" }],
        ["path", { d: "m18 16 2-2" }],
        [
          "path",
          {
            d: "m17 11 4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17"
          }
        ]
      ]
    ];
    var Pencil = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" }],
        ["path", { d: "m15 5 4 4" }]
      ]
    ];
    var Pentagon = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M3.5 8.7c-.7.5-1 1.4-.7 2.2l2.8 8.7c.3.8 1 1.4 1.9 1.4h9.1c.9 0 1.6-.6 1.9-1.4l2.8-8.7c.3-.8 0-1.7-.7-2.2l-7.4-5.3a2.1 2.1 0 0 0-2.4 0Z"
          }
        ]
      ]
    ];
    var PercentCircle = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "12", cy: "12", r: "10" }],
        ["path", { d: "m15 9-6 6" }],
        ["path", { d: "M9 9h.01" }],
        ["path", { d: "M15 15h.01" }]
      ]
    ];
    var PercentDiamond = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0Z"
          }
        ],
        ["path", { d: "M9.2 9.2h.01" }],
        ["path", { d: "m14.5 9.5-5 5" }],
        ["path", { d: "M14.7 14.8h.01" }]
      ]
    ];
    var PercentSquare = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
        ["path", { d: "m15 9-6 6" }],
        ["path", { d: "M9 9h.01" }],
        ["path", { d: "M15 15h.01" }]
      ]
    ];
    var Percent = [
      "svg",
      defaultAttributes,
      [
        ["line", { x1: "19", x2: "5", y1: "5", y2: "19" }],
        ["circle", { cx: "6.5", cy: "6.5", r: "2.5" }],
        ["circle", { cx: "17.5", cy: "17.5", r: "2.5" }]
      ]
    ];
    var PersonStanding = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "12", cy: "5", r: "1" }],
        ["path", { d: "m9 20 3-6 3 6" }],
        ["path", { d: "m6 8 6 2 6-2" }],
        ["path", { d: "M12 10v4" }]
      ]
    ];
    var PhoneCall = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
          }
        ],
        ["path", { d: "M14.05 2a9 9 0 0 1 8 7.94" }],
        ["path", { d: "M14.05 6A5 5 0 0 1 18 10" }]
      ]
    ];
    var PhoneForwarded = [
      "svg",
      defaultAttributes,
      [
        ["polyline", { points: "18 2 22 6 18 10" }],
        ["line", { x1: "14", x2: "22", y1: "6", y2: "6" }],
        [
          "path",
          {
            d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
          }
        ]
      ]
    ];
    var PhoneIncoming = [
      "svg",
      defaultAttributes,
      [
        ["polyline", { points: "16 2 16 8 22 8" }],
        ["line", { x1: "22", x2: "16", y1: "2", y2: "8" }],
        [
          "path",
          {
            d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
          }
        ]
      ]
    ];
    var PhoneMissed = [
      "svg",
      defaultAttributes,
      [
        ["line", { x1: "22", x2: "16", y1: "2", y2: "8" }],
        ["line", { x1: "16", x2: "22", y1: "2", y2: "8" }],
        [
          "path",
          {
            d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
          }
        ]
      ]
    ];
    var PhoneOff = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91"
          }
        ],
        ["line", { x1: "22", x2: "2", y1: "2", y2: "22" }]
      ]
    ];
    var PhoneOutgoing = [
      "svg",
      defaultAttributes,
      [
        ["polyline", { points: "22 8 22 2 16 2" }],
        ["line", { x1: "16", x2: "22", y1: "8", y2: "2" }],
        [
          "path",
          {
            d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
          }
        ]
      ]
    ];
    var Phone = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
          }
        ]
      ]
    ];
    var PiSquare = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
        ["path", { d: "M7 7h10" }],
        ["path", { d: "M10 7v10" }],
        ["path", { d: "M16 17a2 2 0 0 1-2-2V7" }]
      ]
    ];
    var Pi = [
      "svg",
      defaultAttributes,
      [
        ["line", { x1: "9", x2: "9", y1: "4", y2: "20" }],
        ["path", { d: "M4 7c0-1.7 1.3-3 3-3h13" }],
        ["path", { d: "M18 20c-1.7 0-3-1.3-3-3V4" }]
      ]
    ];
    var PictureInPicture2 = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M21 9V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h4" }],
        ["rect", { width: "10", height: "7", x: "12", y: "13", rx: "2" }]
      ]
    ];
    var PictureInPicture = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M8 4.5v5H3m-1-6 6 6m13 0v-3c0-1.16-.84-2-2-2h-7m-9 9v2c0 1.05.95 2 2 2h3"
          }
        ],
        ["rect", { width: "10", height: "7", x: "12", y: "13.5", ry: "2" }]
      ]
    ];
    var PieChart = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M21.21 15.89A10 10 0 1 1 8 2.83" }],
        ["path", { d: "M22 12A10 10 0 0 0 12 2v10z" }]
      ]
    ];
    var PiggyBank = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2h0V5z"
          }
        ],
        ["path", { d: "M2 9v1c0 1.1.9 2 2 2h1" }],
        ["path", { d: "M16 11h0" }]
      ]
    ];
    var PilcrowSquare = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
        ["path", { d: "M12 12H9.5a2.5 2.5 0 0 1 0-5H17" }],
        ["path", { d: "M12 7v10" }],
        ["path", { d: "M16 7v10" }]
      ]
    ];
    var Pilcrow = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M13 4v16" }],
        ["path", { d: "M17 4v16" }],
        ["path", { d: "M19 4H9.5a4.5 4.5 0 0 0 0 9H13" }]
      ]
    ];
    var Pill = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          { d: "m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z" }
        ],
        ["path", { d: "m8.5 8.5 7 7" }]
      ]
    ];
    var PinOff = [
      "svg",
      defaultAttributes,
      [
        ["line", { x1: "2", x2: "22", y1: "2", y2: "22" }],
        ["line", { x1: "12", x2: "12", y1: "17", y2: "22" }],
        [
          "path",
          { d: "M9 9v1.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V17h12" }
        ],
        ["path", { d: "M15 9.34V6h1a2 2 0 0 0 0-4H7.89" }]
      ]
    ];
    var Pin = [
      "svg",
      defaultAttributes,
      [
        ["line", { x1: "12", x2: "12", y1: "17", y2: "22" }],
        [
          "path",
          {
            d: "M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z"
          }
        ]
      ]
    ];
    var Pipette = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "m2 22 1-1h3l9-9" }],
        ["path", { d: "M3 21v-3l9-9" }],
        [
          "path",
          {
            d: "m15 6 3.4-3.4a2.1 2.1 0 1 1 3 3L18 9l.4.4a2.1 2.1 0 1 1-3 3l-3.8-3.8a2.1 2.1 0 1 1 3-3l.4.4Z"
          }
        ]
      ]
    ];
    var Pizza = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M15 11h.01" }],
        ["path", { d: "M11 15h.01" }],
        ["path", { d: "M16 16h.01" }],
        ["path", { d: "m2 16 20 6-6-20A20 20 0 0 0 2 16" }],
        ["path", { d: "M5.71 17.11a17.04 17.04 0 0 1 11.4-11.4" }]
      ]
    ];
    var PlaneLanding = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M2 22h20" }],
        [
          "path",
          {
            d: "M3.77 10.77 2 9l2-4.5 1.1.55c.55.28.9.84.9 1.45s.35 1.17.9 1.45L8 8.5l3-6 1.05.53a2 2 0 0 1 1.09 1.52l.72 5.4a2 2 0 0 0 1.09 1.52l4.4 2.2c.42.22.78.55 1.01.96l.6 1.03c.49.88-.06 1.98-1.06 2.1l-1.18.15c-.47.06-.95-.02-1.37-.24L4.29 11.15a2 2 0 0 1-.52-.38Z"
          }
        ]
      ]
    ];
    var PlaneTakeoff = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M2 22h20" }],
        [
          "path",
          {
            d: "M6.36 17.4 4 17l-2-4 1.1-.55a2 2 0 0 1 1.8 0l.17.1a2 2 0 0 0 1.8 0L8 12 5 6l.9-.45a2 2 0 0 1 2.09.2l4.02 3a2 2 0 0 0 2.1.2l4.19-2.06a2.41 2.41 0 0 1 1.73-.17L21 7a1.4 1.4 0 0 1 .87 1.99l-.38.76c-.23.46-.6.84-1.07 1.08L7.58 17.2a2 2 0 0 1-1.22.18Z"
          }
        ]
      ]
    ];
    var Plane = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"
          }
        ]
      ]
    ];
    var PlayCircle = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "12", cy: "12", r: "10" }],
        ["polygon", { points: "10 8 16 12 10 16 10 8" }]
      ]
    ];
    var PlaySquare = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
        ["path", { d: "m9 8 6 4-6 4Z" }]
      ]
    ];
    var Play = [
      "svg",
      defaultAttributes,
      [["polygon", { points: "5 3 19 12 5 21 5 3" }]]
    ];
    var Plug2 = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M9 2v6" }],
        ["path", { d: "M15 2v6" }],
        ["path", { d: "M12 17v5" }],
        ["path", { d: "M5 8h14" }],
        ["path", { d: "M6 11V8h12v3a6 6 0 1 1-12 0v0Z" }]
      ]
    ];
    var PlugZap2 = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "m13 2-2 2.5h3L12 7" }],
        ["path", { d: "M10 14v-3" }],
        ["path", { d: "M14 14v-3" }],
        ["path", { d: "M11 19c-1.7 0-3-1.3-3-3v-2h8v2c0 1.7-1.3 3-3 3Z" }],
        ["path", { d: "M12 22v-3" }]
      ]
    ];
    var PlugZap = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z"
          }
        ],
        ["path", { d: "m2 22 3-3" }],
        ["path", { d: "M7.5 13.5 10 11" }],
        ["path", { d: "M10.5 16.5 13 14" }],
        ["path", { d: "m18 3-4 4h6l-4 4" }]
      ]
    ];
    var Plug = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M12 22v-5" }],
        ["path", { d: "M9 8V2" }],
        ["path", { d: "M15 8V2" }],
        ["path", { d: "M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z" }]
      ]
    ];
    var PlusCircle = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "12", cy: "12", r: "10" }],
        ["path", { d: "M8 12h8" }],
        ["path", { d: "M12 8v8" }]
      ]
    ];
    var PlusSquare = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
        ["path", { d: "M8 12h8" }],
        ["path", { d: "M12 8v8" }]
      ]
    ];
    var Plus = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M5 12h14" }],
        ["path", { d: "M12 5v14" }]
      ]
    ];
    var PocketKnife = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M3 2v1c0 1 2 1 2 2S3 6 3 7s2 1 2 2-2 1-2 2 2 1 2 2" }],
        ["path", { d: "M18 6h.01" }],
        ["path", { d: "M6 18h.01" }],
        [
          "path",
          { d: "M20.83 8.83a4 4 0 0 0-5.66-5.66l-12 12a4 4 0 1 0 5.66 5.66Z" }
        ],
        ["path", { d: "M18 11.66V22a4 4 0 0 0 4-4V6" }]
      ]
    ];
    var Pocket = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z"
          }
        ],
        ["polyline", { points: "8 10 12 14 16 10" }]
      ]
    ];
    var Podcast = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "12", cy: "11", r: "1" }],
        [
          "path",
          {
            d: "M11 17a1 1 0 0 1 2 0c0 .5-.34 3-.5 4.5a.5.5 0 0 1-1 0c-.16-1.5-.5-4-.5-4.5Z"
          }
        ],
        ["path", { d: "M8 14a5 5 0 1 1 8 0" }],
        ["path", { d: "M17 18.5a9 9 0 1 0-10 0" }]
      ]
    ];
    var Pointer = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M22 14a8 8 0 0 1-8 8" }],
        ["path", { d: "M18 11v-1a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" }],
        ["path", { d: "M14 10V9a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v1" }],
        ["path", { d: "M10 9.5V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v10" }],
        [
          "path",
          {
            d: "M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"
          }
        ]
      ]
    ];
    var Popcorn = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M18 8a2 2 0 0 0 0-4 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0 0 4"
          }
        ],
        ["path", { d: "M10 22 9 8" }],
        ["path", { d: "m14 22 1-14" }],
        [
          "path",
          {
            d: "M20 8c.5 0 .9.4.8 1l-2.6 12c-.1.5-.7 1-1.2 1H7c-.6 0-1.1-.4-1.2-1L3.2 9c-.1-.6.3-1 .8-1Z"
          }
        ]
      ]
    ];
    var Popsicle = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M18.6 14.4c.8-.8.8-2 0-2.8l-8.1-8.1a4.95 4.95 0 1 0-7.1 7.1l8.1 8.1c.9.7 2.1.7 2.9-.1Z"
          }
        ],
        ["path", { d: "m22 22-5.5-5.5" }]
      ]
    ];
    var PoundSterling = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M18 7c0-5.333-8-5.333-8 0" }],
        ["path", { d: "M10 7v14" }],
        ["path", { d: "M6 21h12" }],
        ["path", { d: "M6 13h10" }]
      ]
    ];
    var PowerCircle = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "12", cy: "12", r: "10" }],
        ["path", { d: "M12 12V6" }],
        ["path", { d: "M8 7.5A6.1 6.1 0 0 0 12 18a6 6 0 0 0 4-10.5" }]
      ]
    ];
    var PowerOff = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M18.36 6.64A9 9 0 0 1 20.77 15" }],
        ["path", { d: "M6.16 6.16a9 9 0 1 0 12.68 12.68" }],
        ["path", { d: "M12 2v4" }],
        ["path", { d: "m2 2 20 20" }]
      ]
    ];
    var PowerSquare = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
        ["path", { d: "M12 7v5" }],
        ["path", { d: "M8 9a5.14 5.14 0 0 0 4 8 4.95 4.95 0 0 0 4-8" }]
      ]
    ];
    var Power = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M12 2v10" }],
        ["path", { d: "M18.4 6.6a9 9 0 1 1-12.77.04" }]
      ]
    ];
    var Presentation = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M2 3h20" }],
        ["path", { d: "M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3" }],
        ["path", { d: "m7 21 5-5 5 5" }]
      ]
    ];
    var Printer = [
      "svg",
      defaultAttributes,
      [
        ["polyline", { points: "6 9 6 2 18 2 18 9" }],
        [
          "path",
          {
            d: "M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"
          }
        ],
        ["rect", { width: "12", height: "8", x: "6", y: "14" }]
      ]
    ];
    var Projector = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M5 7 3 5" }],
        ["path", { d: "M9 6V3" }],
        ["path", { d: "m13 7 2-2" }],
        ["circle", { cx: "9", cy: "13", r: "3" }],
        [
          "path",
          {
            d: "M11.83 12H20a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2.17"
          }
        ],
        ["path", { d: "M16 16h2" }]
      ]
    ];
    var Puzzle = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 1.998 12c0-.617.236-1.234.706-1.704L4.23 8.77c.24-.24.581-.353.917-.303.515.077.877.528 1.073 1.01a2.5 2.5 0 1 0 3.259-3.259c-.482-.196-.933-.558-1.01-1.073-.05-.336.062-.676.303-.917l1.525-1.525A2.402 2.402 0 0 1 12 1.998c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.237 3.237c-.464.18-.894.527-.967 1.02Z"
          }
        ]
      ]
    ];
    var Pyramid = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M2.5 16.88a1 1 0 0 1-.32-1.43l9-13.02a1 1 0 0 1 1.64 0l9 13.01a1 1 0 0 1-.32 1.44l-8.51 4.86a2 2 0 0 1-1.98 0Z"
          }
        ],
        ["path", { d: "M12 2v20" }]
      ]
    ];
    var QrCode = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "5", height: "5", x: "3", y: "3", rx: "1" }],
        ["rect", { width: "5", height: "5", x: "16", y: "3", rx: "1" }],
        ["rect", { width: "5", height: "5", x: "3", y: "16", rx: "1" }],
        ["path", { d: "M21 16h-3a2 2 0 0 0-2 2v3" }],
        ["path", { d: "M21 21v.01" }],
        ["path", { d: "M12 7v3a2 2 0 0 1-2 2H7" }],
        ["path", { d: "M3 12h.01" }],
        ["path", { d: "M12 3h.01" }],
        ["path", { d: "M12 16v.01" }],
        ["path", { d: "M16 12h1" }],
        ["path", { d: "M21 12v.01" }],
        ["path", { d: "M12 21v-1" }]
      ]
    ];
    var Quote = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"
          }
        ],
        [
          "path",
          {
            d: "M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"
          }
        ]
      ]
    ];
    var Rabbit = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M20 8.54V4a2 2 0 1 0-4 0v3" }],
        [
          "path",
          {
            d: "M18 21h-8a4 4 0 0 1-4-4 7 7 0 0 1 7-7h.2L9.6 6.4a1.93 1.93 0 1 1 2.8-2.8L15.8 7h.2c3.3 0 6 2.7 6 6v1a2 2 0 0 1-2 2h-1c-1.7 0-3 1.3-3 3"
          }
        ],
        ["path", { d: "M7.61 12.53a3 3 0 1 0-1.6 4.3" }],
        ["path", { d: "M13 16a3 3 0 0 1 2.24 5" }],
        ["path", { d: "M18 12h.01" }]
      ]
    ];
    var Radar = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M19.07 4.93A10 10 0 0 0 6.99 3.34" }],
        ["path", { d: "M4 6h.01" }],
        ["path", { d: "M2.29 9.62A10 10 0 1 0 21.31 8.35" }],
        ["path", { d: "M16.24 7.76A6 6 0 1 0 8.23 16.67" }],
        ["path", { d: "M12 18h.01" }],
        ["path", { d: "M17.99 11.66A6 6 0 0 1 15.77 16.67" }],
        ["circle", { cx: "12", cy: "12", r: "2" }],
        ["path", { d: "m13.41 10.59 5.66-5.66" }]
      ]
    ];
    var Radiation = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M12 12h0" }],
        [
          "path",
          {
            d: "M7.5 4.2c-.3-.5-.9-.7-1.3-.4C3.9 5.5 2.3 8.1 2 11c-.1.5.4 1 1 1h5c0-1.5.8-2.8 2-3.4-1.1-1.9-2-3.5-2.5-4.4z"
          }
        ],
        [
          "path",
          {
            d: "M21 12c.6 0 1-.4 1-1-.3-2.9-1.8-5.5-4.1-7.1-.4-.3-1.1-.2-1.3.3-.6.9-1.5 2.5-2.6 4.3 1.2.7 2 2 2 3.5h5z"
          }
        ],
        [
          "path",
          {
            d: "M7.5 19.8c-.3.5-.1 1.1.4 1.3 2.6 1.2 5.6 1.2 8.2 0 .5-.2.7-.8.4-1.3-.5-.9-1.4-2.5-2.5-4.3-1.2.7-2.8.7-4 0-1.1 1.8-2 3.4-2.5 4.3z"
          }
        ]
      ]
    ];
    var RadioReceiver = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M5 16v2" }],
        ["path", { d: "M19 16v2" }],
        ["rect", { width: "20", height: "8", x: "2", y: "8", rx: "2" }],
        ["path", { d: "M18 12h0" }]
      ]
    ];
    var RadioTower = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M4.9 16.1C1 12.2 1 5.8 4.9 1.9" }],
        ["path", { d: "M7.8 4.7a6.14 6.14 0 0 0-.8 7.5" }],
        ["circle", { cx: "12", cy: "9", r: "2" }],
        ["path", { d: "M16.2 4.8c2 2 2.26 5.11.8 7.47" }],
        ["path", { d: "M19.1 1.9a9.96 9.96 0 0 1 0 14.1" }],
        ["path", { d: "M9.5 18h5" }],
        ["path", { d: "m8 22 4-11 4 11" }]
      ]
    ];
    var Radio = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M4.9 19.1C1 15.2 1 8.8 4.9 4.9" }],
        ["path", { d: "M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5" }],
        ["circle", { cx: "12", cy: "12", r: "2" }],
        ["path", { d: "M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5" }],
        ["path", { d: "M19.1 4.9C23 8.8 23 15.1 19.1 19" }]
      ]
    ];
    var Radius = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M20.34 17.52a10 10 0 1 0-2.82 2.82" }],
        ["circle", { cx: "19", cy: "19", r: "2" }],
        ["path", { d: "m13.41 13.41 4.18 4.18" }],
        ["circle", { cx: "12", cy: "12", r: "2" }]
      ]
    ];
    var RailSymbol = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M5 15h14" }],
        ["path", { d: "M5 9h14" }],
        ["path", { d: "m14 20-5-5 6-6-5-5" }]
      ]
    ];
    var Rainbow = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M22 17a10 10 0 0 0-20 0" }],
        ["path", { d: "M6 17a6 6 0 0 1 12 0" }],
        ["path", { d: "M10 17a2 2 0 0 1 4 0" }]
      ]
    ];
    var Rat = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M17 5c0-1.7-1.3-3-3-3s-3 1.3-3 3c0 .8.3 1.5.8 2H11c-3.9 0-7 3.1-7 7v0c0 2.2 1.8 4 4 4"
          }
        ],
        [
          "path",
          {
            d: "M16.8 3.9c.3-.3.6-.5 1-.7 1.5-.6 3.3.1 3.9 1.6.6 1.5-.1 3.3-1.6 3.9l1.6 2.8c.2.3.2.7.2 1-.2.8-.9 1.2-1.7 1.1 0 0-1.6-.3-2.7-.6H17c-1.7 0-3 1.3-3 3"
          }
        ],
        ["path", { d: "M13.2 18a3 3 0 0 0-2.2-5" }],
        ["path", { d: "M13 22H4a2 2 0 0 1 0-4h12" }],
        ["path", { d: "M16 9h.01" }]
      ]
    ];
    var Ratio = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "12", height: "20", x: "6", y: "2", rx: "2" }],
        ["rect", { width: "20", height: "12", x: "2", y: "6", rx: "2" }]
      ]
    ];
    var Receipt = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1-2-1Z"
          }
        ],
        ["path", { d: "M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" }],
        ["path", { d: "M12 17V7" }]
      ]
    ];
    var RectangleHorizontal = [
      "svg",
      defaultAttributes,
      [["rect", { width: "20", height: "12", x: "2", y: "6", rx: "2" }]]
    ];
    var RectangleVertical = [
      "svg",
      defaultAttributes,
      [["rect", { width: "12", height: "20", x: "6", y: "2", rx: "2" }]]
    ];
    var Recycle = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5"
          }
        ],
        [
          "path",
          {
            d: "M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12"
          }
        ],
        ["path", { d: "m14 16-3 3 3 3" }],
        ["path", { d: "M8.293 13.596 7.196 9.5 3.1 10.598" }],
        [
          "path",
          {
            d: "m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843"
          }
        ],
        ["path", { d: "m13.378 9.633 4.096 1.098 1.097-4.096" }]
      ]
    ];
    var Redo2 = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "m15 14 5-5-5-5" }],
        ["path", { d: "M20 9H9.5A5.5 5.5 0 0 0 4 14.5v0A5.5 5.5 0 0 0 9.5 20H13" }]
      ]
    ];
    var RedoDot = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "12", cy: "17", r: "1" }],
        ["path", { d: "M21 7v6h-6" }],
        ["path", { d: "M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7" }]
      ]
    ];
    var Redo = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M21 7v6h-6" }],
        ["path", { d: "M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7" }]
      ]
    ];
    var RefreshCcwDot = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M3 2v6h6" }],
        ["path", { d: "M21 12A9 9 0 0 0 6 5.3L3 8" }],
        ["path", { d: "M21 22v-6h-6" }],
        ["path", { d: "M3 12a9 9 0 0 0 15 6.7l3-2.7" }],
        ["circle", { cx: "12", cy: "12", r: "1" }]
      ]
    ];
    var RefreshCcw = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" }],
        ["path", { d: "M3 3v5h5" }],
        ["path", { d: "M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" }],
        ["path", { d: "M16 16h5v5" }]
      ]
    ];
    var RefreshCwOff = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          { d: "M21 8L18.74 5.74A9.75 9.75 0 0 0 12 3C11 3 10.03 3.16 9.13 3.47" }
        ],
        ["path", { d: "M8 16H3v5" }],
        ["path", { d: "M3 12C3 9.51 4 7.26 5.64 5.64" }],
        [
          "path",
          { d: "m3 16 2.26 2.26A9.75 9.75 0 0 0 12 21c2.49 0 4.74-1 6.36-2.64" }
        ],
        ["path", { d: "M21 12c0 1-.16 1.97-.47 2.87" }],
        ["path", { d: "M21 3v5h-5" }],
        ["path", { d: "M22 22 2 2" }]
      ]
    ];
    var RefreshCw = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" }],
        ["path", { d: "M21 3v5h-5" }],
        ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" }],
        ["path", { d: "M8 16H3v5" }]
      ]
    ];
    var Refrigerator = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Z"
          }
        ],
        ["path", { d: "M5 10h14" }],
        ["path", { d: "M15 7v6" }]
      ]
    ];
    var Regex = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M17 3v10" }],
        ["path", { d: "m12.67 5.5 8.66 5" }],
        ["path", { d: "m12.67 10.5 8.66-5" }],
        [
          "path",
          {
            d: "M9 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2z"
          }
        ]
      ]
    ];
    var RemoveFormatting = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M4 7V4h16v3" }],
        ["path", { d: "M5 20h6" }],
        ["path", { d: "M13 4 8 20" }],
        ["path", { d: "m15 15 5 5" }],
        ["path", { d: "m20 15-5 5" }]
      ]
    ];
    var Repeat1 = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "m17 2 4 4-4 4" }],
        ["path", { d: "M3 11v-1a4 4 0 0 1 4-4h14" }],
        ["path", { d: "m7 22-4-4 4-4" }],
        ["path", { d: "M21 13v1a4 4 0 0 1-4 4H3" }],
        ["path", { d: "M11 10h1v4" }]
      ]
    ];
    var Repeat2 = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "m2 9 3-3 3 3" }],
        ["path", { d: "M13 18H7a2 2 0 0 1-2-2V6" }],
        ["path", { d: "m22 15-3 3-3-3" }],
        ["path", { d: "M11 6h6a2 2 0 0 1 2 2v10" }]
      ]
    ];
    var Repeat = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "m17 2 4 4-4 4" }],
        ["path", { d: "M3 11v-1a4 4 0 0 1 4-4h14" }],
        ["path", { d: "m7 22-4-4 4-4" }],
        ["path", { d: "M21 13v1a4 4 0 0 1-4 4H3" }]
      ]
    ];
    var ReplaceAll = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M14 4c0-1.1.9-2 2-2" }],
        ["path", { d: "M20 2c1.1 0 2 .9 2 2" }],
        ["path", { d: "M22 8c0 1.1-.9 2-2 2" }],
        ["path", { d: "M16 10c-1.1 0-2-.9-2-2" }],
        ["path", { d: "m3 7 3 3 3-3" }],
        ["path", { d: "M6 10V5c0-1.7 1.3-3 3-3h1" }],
        ["rect", { width: "8", height: "8", x: "2", y: "14", rx: "2" }],
        ["path", { d: "M14 14c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2" }],
        ["path", { d: "M20 14c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2" }]
      ]
    ];
    var Replace = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M14 4c0-1.1.9-2 2-2" }],
        ["path", { d: "M20 2c1.1 0 2 .9 2 2" }],
        ["path", { d: "M22 8c0 1.1-.9 2-2 2" }],
        ["path", { d: "M16 10c-1.1 0-2-.9-2-2" }],
        ["path", { d: "m3 7 3 3 3-3" }],
        ["path", { d: "M6 10V5c0-1.7 1.3-3 3-3h1" }],
        ["rect", { width: "8", height: "8", x: "2", y: "14", rx: "2" }]
      ]
    ];
    var ReplyAll = [
      "svg",
      defaultAttributes,
      [
        ["polyline", { points: "7 17 2 12 7 7" }],
        ["polyline", { points: "12 17 7 12 12 7" }],
        ["path", { d: "M22 18v-2a4 4 0 0 0-4-4H7" }]
      ]
    ];
    var Reply = [
      "svg",
      defaultAttributes,
      [
        ["polyline", { points: "9 17 4 12 9 7" }],
        ["path", { d: "M20 18v-2a4 4 0 0 0-4-4H4" }]
      ]
    ];
    var Rewind = [
      "svg",
      defaultAttributes,
      [
        ["polygon", { points: "11 19 2 12 11 5 11 19" }],
        ["polygon", { points: "22 19 13 12 22 5 22 19" }]
      ]
    ];
    var Rocket = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"
          }
        ],
        [
          "path",
          {
            d: "m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"
          }
        ],
        ["path", { d: "M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" }],
        ["path", { d: "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" }]
      ]
    ];
    var RockingChair = [
      "svg",
      defaultAttributes,
      [
        ["polyline", { points: "3.5 2 6.5 12.5 18 12.5" }],
        ["line", { x1: "9.5", x2: "5.5", y1: "12.5", y2: "20" }],
        ["line", { x1: "15", x2: "18.5", y1: "12.5", y2: "20" }],
        ["path", { d: "M2.75 18a13 13 0 0 0 18.5 0" }]
      ]
    ];
    var RollerCoaster = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M6 19V5" }],
        ["path", { d: "M10 19V6.8" }],
        ["path", { d: "M14 19v-7.8" }],
        ["path", { d: "M18 5v4" }],
        ["path", { d: "M18 19v-6" }],
        ["path", { d: "M22 19V9" }],
        [
          "path",
          { d: "M2 19V9a4 4 0 0 1 4-4c2 0 4 1.33 6 4s4 4 6 4a4 4 0 1 0-3-6.65" }
        ]
      ]
    ];
    var Rotate3d = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M16.466 7.5C15.643 4.237 13.952 2 12 2 9.239 2 7 6.477 7 12s2.239 10 5 10c.342 0 .677-.069 1-.2"
          }
        ],
        ["path", { d: "m15.194 13.707 3.814 1.86-1.86 3.814" }],
        [
          "path",
          {
            d: "M19 15.57c-1.804.885-4.274 1.43-7 1.43-5.523 0-10-2.239-10-5s4.477-5 10-5c4.838 0 8.873 1.718 9.8 4"
          }
        ]
      ]
    ];
    var RotateCcw = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" }],
        ["path", { d: "M3 3v5h5" }]
      ]
    ];
    var RotateCw = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" }],
        ["path", { d: "M21 3v5h-5" }]
      ]
    ];
    var RouteOff = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "6", cy: "19", r: "3" }],
        ["path", { d: "M9 19h8.5c.4 0 .9-.1 1.3-.2" }],
        ["path", { d: "M5.2 5.2A3.5 3.53 0 0 0 6.5 12H12" }],
        ["path", { d: "m2 2 20 20" }],
        ["path", { d: "M21 15.3a3.5 3.5 0 0 0-3.3-3.3" }],
        ["path", { d: "M15 5h-4.3" }],
        ["circle", { cx: "18", cy: "5", r: "3" }]
      ]
    ];
    var Route = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "6", cy: "19", r: "3" }],
        ["path", { d: "M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15" }],
        ["circle", { cx: "18", cy: "5", r: "3" }]
      ]
    ];
    var Router = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "20", height: "8", x: "2", y: "14", rx: "2" }],
        ["path", { d: "M6.01 18H6" }],
        ["path", { d: "M10.01 18H10" }],
        ["path", { d: "M15 10v4" }],
        ["path", { d: "M17.84 7.17a4 4 0 0 0-5.66 0" }],
        ["path", { d: "M20.66 4.34a8 8 0 0 0-11.31 0" }]
      ]
    ];
    var Rows = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2" }],
        ["line", { x1: "3", x2: "21", y1: "12", y2: "12" }]
      ]
    ];
    var Rss = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M4 11a9 9 0 0 1 9 9" }],
        ["path", { d: "M4 4a16 16 0 0 1 16 16" }],
        ["circle", { cx: "5", cy: "19", r: "1" }]
      ]
    ];
    var Ruler = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"
          }
        ],
        ["path", { d: "m14.5 12.5 2-2" }],
        ["path", { d: "m11.5 9.5 2-2" }],
        ["path", { d: "m8.5 6.5 2-2" }],
        ["path", { d: "m17.5 15.5 2-2" }]
      ]
    ];
    var RussianRuble = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M6 11h8a4 4 0 0 0 0-8H9v18" }],
        ["path", { d: "M6 15h8" }]
      ]
    ];
    var Sailboat = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M22 18H2a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4Z" }],
        ["path", { d: "M21 14 10 2 3 14h18Z" }],
        ["path", { d: "M10 2v16" }]
      ]
    ];
    var Salad = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M7 21h10" }],
        ["path", { d: "M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z" }],
        [
          "path",
          {
            d: "M11.38 12a2.4 2.4 0 0 1-.4-4.77 2.4 2.4 0 0 1 3.2-2.77 2.4 2.4 0 0 1 3.47-.63 2.4 2.4 0 0 1 3.37 3.37 2.4 2.4 0 0 1-1.1 3.7 2.51 2.51 0 0 1 .03 1.1"
          }
        ],
        ["path", { d: "m13 12 4-4" }],
        ["path", { d: "M10.9 7.25A3.99 3.99 0 0 0 4 10c0 .73.2 1.41.54 2" }]
      ]
    ];
    var Sandwich = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M3 11v3a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-3" }],
        [
          "path",
          {
            d: "M12 19H4a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-3.83"
          }
        ],
        ["path", { d: "m3 11 7.77-6.04a2 2 0 0 1 2.46 0L21 11H3Z" }],
        ["path", { d: "M12.97 19.77 7 15h12.5l-3.75 4.5a2 2 0 0 1-2.78.27Z" }]
      ]
    ];
    var SatelliteDish = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M4 10a7.31 7.31 0 0 0 10 10Z" }],
        ["path", { d: "m9 15 3-3" }],
        ["path", { d: "M17 13a6 6 0 0 0-6-6" }],
        ["path", { d: "M21 13A10 10 0 0 0 11 3" }]
      ]
    ];
    var Satellite = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M13 7 9 3 5 7l4 4" }],
        ["path", { d: "m17 11 4 4-4 4-4-4" }],
        ["path", { d: "m8 12 4 4 6-6-4-4Z" }],
        ["path", { d: "m16 8 3-3" }],
        ["path", { d: "M9 21a6 6 0 0 0-6-6" }]
      ]
    ];
    var SaveAll = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          { d: "M6 4a2 2 0 0 1 2-2h10l4 4v10.2a2 2 0 0 1-2 1.8H8a2 2 0 0 1-2-2Z" }
        ],
        ["path", { d: "M10 2v4h6" }],
        ["path", { d: "M18 18v-7h-8v7" }],
        ["path", { d: "M18 22H4a2 2 0 0 1-2-2V6" }]
      ]
    ];
    var Save = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          { d: "M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" }
        ],
        ["polyline", { points: "17 21 17 13 7 13 7 21" }],
        ["polyline", { points: "7 3 7 8 15 8" }]
      ]
    ];
    var Scale3d = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "19", cy: "19", r: "2" }],
        ["circle", { cx: "5", cy: "5", r: "2" }],
        ["path", { d: "M5 7v12h12" }],
        ["path", { d: "m5 19 6-6" }]
      ]
    ];
    var Scale = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" }],
        ["path", { d: "m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" }],
        ["path", { d: "M7 21h10" }],
        ["path", { d: "M12 3v18" }],
        ["path", { d: "M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" }]
      ]
    ];
    var Scaling = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M21 3 9 15" }],
        ["path", { d: "M12 3H3v18h18v-9" }],
        ["path", { d: "M16 3h5v5" }],
        ["path", { d: "M14 15H9v-5" }]
      ]
    ];
    var ScanBarcode = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2" }],
        ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2" }],
        ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2" }],
        ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2" }],
        ["path", { d: "M8 7v10" }],
        ["path", { d: "M12 7v10" }],
        ["path", { d: "M17 7v10" }]
      ]
    ];
    var ScanEye = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2" }],
        ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2" }],
        ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2" }],
        ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2" }],
        ["circle", { cx: "12", cy: "12", r: "1" }],
        ["path", { d: "M5 12s2.5-5 7-5 7 5 7 5-2.5 5-7 5-7-5-7-5" }]
      ]
    ];
    var ScanFace = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2" }],
        ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2" }],
        ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2" }],
        ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2" }],
        ["path", { d: "M8 14s1.5 2 4 2 4-2 4-2" }],
        ["path", { d: "M9 9h.01" }],
        ["path", { d: "M15 9h.01" }]
      ]
    ];
    var ScanLine = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2" }],
        ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2" }],
        ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2" }],
        ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2" }],
        ["path", { d: "M7 12h10" }]
      ]
    ];
    var ScanSearch = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2" }],
        ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2" }],
        ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2" }],
        ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2" }],
        ["circle", { cx: "12", cy: "12", r: "3" }],
        ["path", { d: "m16 16-1.9-1.9" }]
      ]
    ];
    var ScanText = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2" }],
        ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2" }],
        ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2" }],
        ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2" }],
        ["path", { d: "M7 8h8" }],
        ["path", { d: "M7 12h10" }],
        ["path", { d: "M7 16h6" }]
      ]
    ];
    var Scan = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2" }],
        ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2" }],
        ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2" }],
        ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2" }]
      ]
    ];
    var ScatterChart = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "7.5", cy: "7.5", r: ".5" }],
        ["circle", { cx: "18.5", cy: "5.5", r: ".5" }],
        ["circle", { cx: "11.5", cy: "11.5", r: ".5" }],
        ["circle", { cx: "7.5", cy: "16.5", r: ".5" }],
        ["circle", { cx: "17.5", cy: "14.5", r: ".5" }],
        ["path", { d: "M3 3v18h18" }]
      ]
    ];
    var School2 = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "12", cy: "10", r: "1" }],
        [
          "path",
          { d: "M22 20V8h-4l-6-4-6 4H2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2Z" }
        ],
        ["path", { d: "M6 17v.01" }],
        ["path", { d: "M6 13v.01" }],
        ["path", { d: "M18 17v.01" }],
        ["path", { d: "M18 13v.01" }],
        ["path", { d: "M14 22v-5a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v5" }]
      ]
    ];
    var School = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "m4 6 8-4 8 4" }],
        ["path", { d: "m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2" }],
        ["path", { d: "M14 22v-4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v4" }],
        ["path", { d: "M18 5v17" }],
        ["path", { d: "M6 5v17" }],
        ["circle", { cx: "12", cy: "9", r: "2" }]
      ]
    ];
    var ScissorsLineDashed = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M5.42 9.42 8 12" }],
        ["circle", { cx: "4", cy: "8", r: "2" }],
        ["path", { d: "m14 6-8.58 8.58" }],
        ["circle", { cx: "4", cy: "16", r: "2" }],
        ["path", { d: "M10.8 14.8 14 18" }],
        ["path", { d: "M16 12h-2" }],
        ["path", { d: "M22 12h-2" }]
      ]
    ];
    var ScissorsSquareDashedBottom = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M4 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2"
          }
        ],
        ["path", { d: "M10 22H8" }],
        ["path", { d: "M16 22h-2" }],
        ["circle", { cx: "8", cy: "8", r: "2" }],
        ["path", { d: "M9.414 9.414 12 12" }],
        ["path", { d: "M14.8 14.8 18 18" }],
        ["circle", { cx: "8", cy: "16", r: "2" }],
        ["path", { d: "m18 6-8.586 8.586" }]
      ]
    ];
    var ScissorsSquare = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "20", height: "20", x: "2", y: "2", rx: "2" }],
        ["circle", { cx: "8", cy: "8", r: "2" }],
        ["path", { d: "M9.414 9.414 12 12" }],
        ["path", { d: "M14.8 14.8 18 18" }],
        ["circle", { cx: "8", cy: "16", r: "2" }],
        ["path", { d: "m18 6-8.586 8.586" }]
      ]
    ];
    var Scissors = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "6", cy: "6", r: "3" }],
        ["path", { d: "M8.12 8.12 12 12" }],
        ["path", { d: "M20 4 8.12 15.88" }],
        ["circle", { cx: "6", cy: "18", r: "3" }],
        ["path", { d: "M14.8 14.8 20 20" }]
      ]
    ];
    var ScreenShareOff = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          { d: "M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3" }
        ],
        ["path", { d: "M8 21h8" }],
        ["path", { d: "M12 17v4" }],
        ["path", { d: "m22 3-5 5" }],
        ["path", { d: "m17 3 5 5" }]
      ]
    ];
    var ScreenShare = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          { d: "M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3" }
        ],
        ["path", { d: "M8 21h8" }],
        ["path", { d: "M12 17v4" }],
        ["path", { d: "m17 8 5-5" }],
        ["path", { d: "M17 3h5v5" }]
      ]
    ];
    var ScrollText = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          { d: "M8 21h12a2 2 0 0 0 2-2v-2H10v2a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v3h4" }
        ],
        ["path", { d: "M19 17V5a2 2 0 0 0-2-2H4" }],
        ["path", { d: "M15 8h-5" }],
        ["path", { d: "M15 12h-5" }]
      ]
    ];
    var Scroll = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          { d: "M8 21h12a2 2 0 0 0 2-2v-2H10v2a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v3h4" }
        ],
        ["path", { d: "M19 17V5a2 2 0 0 0-2-2H4" }]
      ]
    ];
    var SearchCheck = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "m8 11 2 2 4-4" }],
        ["circle", { cx: "11", cy: "11", r: "8" }],
        ["path", { d: "m21 21-4.3-4.3" }]
      ]
    ];
    var SearchCode = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "m9 9-2 2 2 2" }],
        ["path", { d: "m13 13 2-2-2-2" }],
        ["circle", { cx: "11", cy: "11", r: "8" }],
        ["path", { d: "m21 21-4.3-4.3" }]
      ]
    ];
    var SearchSlash = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "m13.5 8.5-5 5" }],
        ["circle", { cx: "11", cy: "11", r: "8" }],
        ["path", { d: "m21 21-4.3-4.3" }]
      ]
    ];
    var SearchX = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "m13.5 8.5-5 5" }],
        ["path", { d: "m8.5 8.5 5 5" }],
        ["circle", { cx: "11", cy: "11", r: "8" }],
        ["path", { d: "m21 21-4.3-4.3" }]
      ]
    ];
    var Search = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "11", cy: "11", r: "8" }],
        ["path", { d: "m21 21-4.3-4.3" }]
      ]
    ];
    var SendHorizontal = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "m3 3 3 9-3 9 19-9Z" }],
        ["path", { d: "M6 12h16" }]
      ]
    ];
    var SendToBack = [
      "svg",
      defaultAttributes,
      [
        ["rect", { x: "14", y: "14", width: "8", height: "8", rx: "2" }],
        ["rect", { x: "2", y: "2", width: "8", height: "8", rx: "2" }],
        ["path", { d: "M7 14v1a2 2 0 0 0 2 2h1" }],
        ["path", { d: "M14 7h1a2 2 0 0 1 2 2v1" }]
      ]
    ];
    var Send = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "m22 2-7 20-4-9-9-4Z" }],
        ["path", { d: "M22 2 11 13" }]
      ]
    ];
    var SeparatorHorizontal = [
      "svg",
      defaultAttributes,
      [
        ["line", { x1: "3", x2: "21", y1: "12", y2: "12" }],
        ["polyline", { points: "8 8 12 4 16 8" }],
        ["polyline", { points: "16 16 12 20 8 16" }]
      ]
    ];
    var SeparatorVertical = [
      "svg",
      defaultAttributes,
      [
        ["line", { x1: "12", x2: "12", y1: "3", y2: "21" }],
        ["polyline", { points: "8 8 4 12 8 16" }],
        ["polyline", { points: "16 16 20 12 16 8" }]
      ]
    ];
    var ServerCog = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "12", cy: "12", r: "3" }],
        [
          "path",
          {
            d: "M4.5 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-.5"
          }
        ],
        [
          "path",
          {
            d: "M4.5 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-.5"
          }
        ],
        ["path", { d: "M6 6h.01" }],
        ["path", { d: "M6 18h.01" }],
        ["path", { d: "m15.7 13.4-.9-.3" }],
        ["path", { d: "m9.2 10.9-.9-.3" }],
        ["path", { d: "m10.6 15.7.3-.9" }],
        ["path", { d: "m13.6 15.7-.4-1" }],
        ["path", { d: "m10.8 9.3-.4-1" }],
        ["path", { d: "m8.3 13.6 1-.4" }],
        ["path", { d: "m14.7 10.8 1-.4" }],
        ["path", { d: "m13.4 8.3-.3.9" }]
      ]
    ];
    var ServerCrash = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M6 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2"
          }
        ],
        [
          "path",
          {
            d: "M6 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2"
          }
        ],
        ["path", { d: "M6 6h.01" }],
        ["path", { d: "M6 18h.01" }],
        ["path", { d: "m13 6-4 6h6l-4 6" }]
      ]
    ];
    var ServerOff = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M7 2h13a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-5" }],
        ["path", { d: "M10 10 2.5 2.5C2 2 2 2.5 2 5v3a2 2 0 0 0 2 2h6z" }],
        ["path", { d: "M22 17v-1a2 2 0 0 0-2-2h-1" }],
        ["path", { d: "M4 14a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16.5l1-.5.5.5-8-8H4z" }],
        ["path", { d: "M6 18h.01" }],
        ["path", { d: "m2 2 20 20" }]
      ]
    ];
    var Server = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "20", height: "8", x: "2", y: "2", rx: "2", ry: "2" }],
        ["rect", { width: "20", height: "8", x: "2", y: "14", rx: "2", ry: "2" }],
        ["line", { x1: "6", x2: "6.01", y1: "6", y2: "6" }],
        ["line", { x1: "6", x2: "6.01", y1: "18", y2: "18" }]
      ]
    ];
    var Settings2 = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M20 7h-9" }],
        ["path", { d: "M14 17H5" }],
        ["circle", { cx: "17", cy: "17", r: "3" }],
        ["circle", { cx: "7", cy: "7", r: "3" }]
      ]
    ];
    var Settings = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"
          }
        ],
        ["circle", { cx: "12", cy: "12", r: "3" }]
      ]
    ];
    var Shapes = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z"
          }
        ],
        ["rect", { x: "3", y: "14", width: "7", height: "7", rx: "1" }],
        ["circle", { cx: "17.5", cy: "17.5", r: "3.5" }]
      ]
    ];
    var Share2 = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "18", cy: "5", r: "3" }],
        ["circle", { cx: "6", cy: "12", r: "3" }],
        ["circle", { cx: "18", cy: "19", r: "3" }],
        ["line", { x1: "8.59", x2: "15.42", y1: "13.51", y2: "17.49" }],
        ["line", { x1: "15.41", x2: "8.59", y1: "6.51", y2: "10.49" }]
      ]
    ];
    var Share = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" }],
        ["polyline", { points: "16 6 12 2 8 6" }],
        ["line", { x1: "12", x2: "12", y1: "2", y2: "15" }]
      ]
    ];
    var Sheet = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2" }],
        ["line", { x1: "3", x2: "21", y1: "9", y2: "9" }],
        ["line", { x1: "3", x2: "21", y1: "15", y2: "15" }],
        ["line", { x1: "9", x2: "9", y1: "9", y2: "21" }],
        ["line", { x1: "15", x2: "15", y1: "9", y2: "21" }]
      ]
    ];
    var Shell = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M14 11a2 2 0 1 1-4 0 4 4 0 0 1 8 0 6 6 0 0 1-12 0 8 8 0 0 1 16 0 10 10 0 1 1-20 0 11.93 11.93 0 0 1 2.42-7.22 2 2 0 1 1 3.16 2.44"
          }
        ]
      ]
    ];
    var ShieldAlert = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" }],
        ["path", { d: "M12 8v4" }],
        ["path", { d: "M12 16h.01" }]
      ]
    ];
    var ShieldBan = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" }],
        ["path", { d: "m4 5 14 12" }]
      ]
    ];
    var ShieldCheck = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" }],
        ["path", { d: "m9 12 2 2 4-4" }]
      ]
    ];
    var ShieldEllipsis = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" }],
        ["path", { d: "M8 11h.01" }],
        ["path", { d: "M12 11h.01" }],
        ["path", { d: "M16 11h.01" }]
      ]
    ];
    var ShieldHalf = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" }],
        ["path", { d: "M12 22V2" }]
      ]
    ];
    var ShieldMinus = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" }],
        ["path", { d: "M8 11h8" }]
      ]
    ];
    var ShieldOff = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M19.7 14a6.9 6.9 0 0 0 .3-2V5l-8-3-3.2 1.2" }],
        ["path", { d: "m2 2 20 20" }],
        ["path", { d: "M4.7 4.7 4 5v7c0 6 8 10 8 10a20.3 20.3 0 0 0 5.62-4.38" }]
      ]
    ];
    var ShieldPlus = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" }],
        ["path", { d: "M8 11h8" }],
        ["path", { d: "M12 15V7" }]
      ]
    ];
    var ShieldQuestion = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" }],
        ["path", { d: "M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3" }],
        ["path", { d: "M12 17h.01" }]
      ]
    ];
    var ShieldX = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" }],
        ["path", { d: "m14.5 9-5 5" }],
        ["path", { d: "m9.5 9 5 5" }]
      ]
    ];
    var Shield = [
      "svg",
      defaultAttributes,
      [["path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" }]]
    ];
    var ShipWheel = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "12", cy: "12", r: "8" }],
        ["path", { d: "M12 2v7.5" }],
        ["path", { d: "m19 5-5.23 5.23" }],
        ["path", { d: "M22 12h-7.5" }],
        ["path", { d: "m19 19-5.23-5.23" }],
        ["path", { d: "M12 14.5V22" }],
        ["path", { d: "M10.23 13.77 5 19" }],
        ["path", { d: "M9.5 12H2" }],
        ["path", { d: "M10.23 10.23 5 5" }],
        ["circle", { cx: "12", cy: "12", r: "2.5" }]
      ]
    ];
    var Ship = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1 .6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"
          }
        ],
        [
          "path",
          { d: "M19.38 20A11.6 11.6 0 0 0 21 14l-9-4-9 4c0 2.9.94 5.34 2.81 7.76" }
        ],
        ["path", { d: "M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6" }],
        ["path", { d: "M12 10v4" }],
        ["path", { d: "M12 2v3" }]
      ]
    ];
    var Shirt = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"
          }
        ]
      ]
    ];
    var ShoppingBag = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" }],
        ["path", { d: "M3 6h18" }],
        ["path", { d: "M16 10a4 4 0 0 1-8 0" }]
      ]
    ];
    var ShoppingBasket = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "m5 11 4-7" }],
        ["path", { d: "m19 11-4-7" }],
        ["path", { d: "M2 11h20" }],
        [
          "path",
          { d: "m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8c.9 0 1.8-.7 2-1.6l1.7-7.4" }
        ],
        ["path", { d: "m9 11 1 9" }],
        ["path", { d: "M4.5 15.5h15" }],
        ["path", { d: "m15 11-1 9" }]
      ]
    ];
    var ShoppingCart = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "8", cy: "21", r: "1" }],
        ["circle", { cx: "19", cy: "21", r: "1" }],
        [
          "path",
          {
            d: "M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"
          }
        ]
      ]
    ];
    var Shovel = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M2 22v-5l5-5 5 5-5 5z" }],
        ["path", { d: "M9.5 14.5 16 8" }],
        [
          "path",
          {
            d: "m17 2 5 5-.5.5a3.53 3.53 0 0 1-5 0s0 0 0 0a3.53 3.53 0 0 1 0-5L17 2"
          }
        ]
      ]
    ];
    var ShowerHead = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "m4 4 2.5 2.5" }],
        ["path", { d: "M13.5 6.5a4.95 4.95 0 0 0-7 7" }],
        ["path", { d: "M15 5 5 15" }],
        ["path", { d: "M14 17v.01" }],
        ["path", { d: "M10 16v.01" }],
        ["path", { d: "M13 13v.01" }],
        ["path", { d: "M16 10v.01" }],
        ["path", { d: "M11 20v.01" }],
        ["path", { d: "M17 14v.01" }],
        ["path", { d: "M20 11v.01" }]
      ]
    ];
    var Shrink = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "m15 15 6 6m-6-6v4.8m0-4.8h4.8" }],
        ["path", { d: "M9 19.8V15m0 0H4.2M9 15l-6 6" }],
        ["path", { d: "M15 4.2V9m0 0h4.8M15 9l6-6" }],
        ["path", { d: "M9 4.2V9m0 0H4.2M9 9 3 3" }]
      ]
    ];
    var Shrub = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M12 22v-7l-2-2" }],
        [
          "path",
          {
            d: "M17 8v.8A6 6 0 0 1 13.8 20v0H10v0A6.5 6.5 0 0 1 7 8h0a5 5 0 0 1 10 0Z"
          }
        ],
        ["path", { d: "m14 14-2 2" }]
      ]
    ];
    var Shuffle = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          { d: "M2 18h1.4c1.3 0 2.5-.6 3.3-1.7l6.1-8.6c.7-1.1 2-1.7 3.3-1.7H22" }
        ],
        ["path", { d: "m18 2 4 4-4 4" }],
        ["path", { d: "M2 6h1.9c1.5 0 2.9.9 3.6 2.2" }],
        ["path", { d: "M22 18h-5.9c-1.3 0-2.6-.7-3.3-1.8l-.5-.8" }],
        ["path", { d: "m18 14 4 4-4 4" }]
      ]
    ];
    var SigmaSquare = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
        ["path", { d: "M16 8.9V7H8l4 5-4 5h8v-1.9" }]
      ]
    ];
    var Sigma = [
      "svg",
      defaultAttributes,
      [["path", { d: "M18 7V4H6l6 8-6 8h12v-3" }]]
    ];
    var SignalHigh = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M2 20h.01" }],
        ["path", { d: "M7 20v-4" }],
        ["path", { d: "M12 20v-8" }],
        ["path", { d: "M17 20V8" }]
      ]
    ];
    var SignalLow = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M2 20h.01" }],
        ["path", { d: "M7 20v-4" }]
      ]
    ];
    var SignalMedium = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M2 20h.01" }],
        ["path", { d: "M7 20v-4" }],
        ["path", { d: "M12 20v-8" }]
      ]
    ];
    var SignalZero = [
      "svg",
      defaultAttributes,
      [["path", { d: "M2 20h.01" }]]
    ];
    var Signal = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M2 20h.01" }],
        ["path", { d: "M7 20v-4" }],
        ["path", { d: "M12 20v-8" }],
        ["path", { d: "M17 20V8" }],
        ["path", { d: "M22 4v16" }]
      ]
    ];
    var SignpostBig = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M10 9H4L2 7l2-2h6" }],
        ["path", { d: "M14 5h6l2 2-2 2h-6" }],
        ["path", { d: "M10 22V4a2 2 0 1 1 4 0v18" }],
        ["path", { d: "M8 22h8" }]
      ]
    ];
    var Signpost = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M12 3v3" }],
        ["path", { d: "M18.5 13h-13L2 9.5 5.5 6h13L22 9.5Z" }],
        ["path", { d: "M12 13v8" }]
      ]
    ];
    var Siren = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M7 12a5 5 0 0 1 5-5v0a5 5 0 0 1 5 5v6H7v-6Z" }],
        ["path", { d: "M5 20a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v2H5v-2Z" }],
        ["path", { d: "M21 12h1" }],
        ["path", { d: "M18.5 4.5 18 5" }],
        ["path", { d: "M2 12h1" }],
        ["path", { d: "M12 2v1" }],
        ["path", { d: "m4.929 4.929.707.707" }],
        ["path", { d: "M12 12v6" }]
      ]
    ];
    var SkipBack = [
      "svg",
      defaultAttributes,
      [
        ["polygon", { points: "19 20 9 12 19 4 19 20" }],
        ["line", { x1: "5", x2: "5", y1: "19", y2: "5" }]
      ]
    ];
    var SkipForward = [
      "svg",
      defaultAttributes,
      [
        ["polygon", { points: "5 4 15 12 5 20 5 4" }],
        ["line", { x1: "19", x2: "19", y1: "5", y2: "19" }]
      ]
    ];
    var Skull = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "9", cy: "12", r: "1" }],
        ["circle", { cx: "15", cy: "12", r: "1" }],
        ["path", { d: "M8 20v2h8v-2" }],
        ["path", { d: "m12.5 17-.5-1-.5 1h1z" }],
        [
          "path",
          { d: "M16 20a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20" }
        ]
      ]
    ];
    var Slack = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "3", height: "8", x: "13", y: "2", rx: "1.5" }],
        ["path", { d: "M19 8.5V10h1.5A1.5 1.5 0 1 0 19 8.5" }],
        ["rect", { width: "3", height: "8", x: "8", y: "14", rx: "1.5" }],
        ["path", { d: "M5 15.5V14H3.5A1.5 1.5 0 1 0 5 15.5" }],
        ["rect", { width: "8", height: "3", x: "14", y: "13", rx: "1.5" }],
        ["path", { d: "M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5" }],
        ["rect", { width: "8", height: "3", x: "2", y: "8", rx: "1.5" }],
        ["path", { d: "M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5" }]
      ]
    ];
    var Slash = [
      "svg",
      defaultAttributes,
      [["path", { d: "M22 2 2 22" }]]
    ];
    var Slice = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "m8 14-6 6h9v-3" }],
        ["path", { d: "M18.37 3.63 8 14l3 3L21.37 6.63a2.12 2.12 0 1 0-3-3Z" }]
      ]
    ];
    var SlidersHorizontal = [
      "svg",
      defaultAttributes,
      [
        ["line", { x1: "21", x2: "14", y1: "4", y2: "4" }],
        ["line", { x1: "10", x2: "3", y1: "4", y2: "4" }],
        ["line", { x1: "21", x2: "12", y1: "12", y2: "12" }],
        ["line", { x1: "8", x2: "3", y1: "12", y2: "12" }],
        ["line", { x1: "21", x2: "16", y1: "20", y2: "20" }],
        ["line", { x1: "12", x2: "3", y1: "20", y2: "20" }],
        ["line", { x1: "14", x2: "14", y1: "2", y2: "6" }],
        ["line", { x1: "8", x2: "8", y1: "10", y2: "14" }],
        ["line", { x1: "16", x2: "16", y1: "18", y2: "22" }]
      ]
    ];
    var Sliders = [
      "svg",
      defaultAttributes,
      [
        ["line", { x1: "4", x2: "4", y1: "21", y2: "14" }],
        ["line", { x1: "4", x2: "4", y1: "10", y2: "3" }],
        ["line", { x1: "12", x2: "12", y1: "21", y2: "12" }],
        ["line", { x1: "12", x2: "12", y1: "8", y2: "3" }],
        ["line", { x1: "20", x2: "20", y1: "21", y2: "16" }],
        ["line", { x1: "20", x2: "20", y1: "12", y2: "3" }],
        ["line", { x1: "2", x2: "6", y1: "14", y2: "14" }],
        ["line", { x1: "10", x2: "14", y1: "8", y2: "8" }],
        ["line", { x1: "18", x2: "22", y1: "16", y2: "16" }]
      ]
    ];
    var SmartphoneCharging = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "14", height: "20", x: "5", y: "2", rx: "2", ry: "2" }],
        ["path", { d: "M12.667 8 10 12h4l-2.667 4" }]
      ]
    ];
    var SmartphoneNfc = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "7", height: "12", x: "2", y: "6", rx: "1" }],
        ["path", { d: "M13 8.32a7.43 7.43 0 0 1 0 7.36" }],
        ["path", { d: "M16.46 6.21a11.76 11.76 0 0 1 0 11.58" }],
        ["path", { d: "M19.91 4.1a15.91 15.91 0 0 1 .01 15.8" }]
      ]
    ];
    var Smartphone = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "14", height: "20", x: "5", y: "2", rx: "2", ry: "2" }],
        ["path", { d: "M12 18h.01" }]
      ]
    ];
    var SmilePlus = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M22 11v1a10 10 0 1 1-9-10" }],
        ["path", { d: "M8 14s1.5 2 4 2 4-2 4-2" }],
        ["line", { x1: "9", x2: "9.01", y1: "9", y2: "9" }],
        ["line", { x1: "15", x2: "15.01", y1: "9", y2: "9" }],
        ["path", { d: "M16 5h6" }],
        ["path", { d: "M19 2v6" }]
      ]
    ];
    var Smile = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "12", cy: "12", r: "10" }],
        ["path", { d: "M8 14s1.5 2 4 2 4-2 4-2" }],
        ["line", { x1: "9", x2: "9.01", y1: "9", y2: "9" }],
        ["line", { x1: "15", x2: "15.01", y1: "9", y2: "9" }]
      ]
    ];
    var Snail = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M2 13a6 6 0 1 0 12 0 4 4 0 1 0-8 0 2 2 0 0 0 4 0" }],
        ["circle", { cx: "10", cy: "13", r: "8" }],
        ["path", { d: "M2 21h12c4.4 0 8-3.6 8-8V7a2 2 0 1 0-4 0v6" }],
        ["path", { d: "M18 3 19.1 5.2" }],
        ["path", { d: "M22 3 20.9 5.2" }]
      ]
    ];
    var Snowflake = [
      "svg",
      defaultAttributes,
      [
        ["line", { x1: "2", x2: "22", y1: "12", y2: "12" }],
        ["line", { x1: "12", x2: "12", y1: "2", y2: "22" }],
        ["path", { d: "m20 16-4-4 4-4" }],
        ["path", { d: "m4 8 4 4-4 4" }],
        ["path", { d: "m16 4-4 4-4-4" }],
        ["path", { d: "m8 20 4-4 4 4" }]
      ]
    ];
    var Sofa = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3" }],
        [
          "path",
          {
            d: "M2 11v5a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v2H6v-2a2 2 0 0 0-4 0Z"
          }
        ],
        ["path", { d: "M4 18v2" }],
        ["path", { d: "M20 18v2" }],
        ["path", { d: "M12 4v9" }]
      ]
    ];
    var Soup = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z" }],
        ["path", { d: "M7 21h10" }],
        ["path", { d: "M19.5 12 22 6" }],
        [
          "path",
          {
            d: "M16.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.73 1.62"
          }
        ],
        [
          "path",
          {
            d: "M11.25 3c.27.1.8.53.74 1.36-.05.83-.93 1.2-.98 2.02-.06.78.33 1.24.72 1.62"
          }
        ],
        [
          "path",
          {
            d: "M6.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.74 1.62"
          }
        ]
      ]
    ];
    var Space = [
      "svg",
      defaultAttributes,
      [["path", { d: "M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1" }]]
    ];
    var Spade = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M5 9c-1.5 1.5-3 3.2-3 5.5A5.5 5.5 0 0 0 7.5 20c1.8 0 3-.5 4.5-2 1.5 1.5 2.7 2 4.5 2a5.5 5.5 0 0 0 5.5-5.5c0-2.3-1.5-4-3-5.5l-7-7-7 7Z"
          }
        ],
        ["path", { d: "M12 18v4" }]
      ]
    ];
    var Sparkle = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "m12 3-1.9 5.8a2 2 0 0 1-1.287 1.288L3 12l5.8 1.9a2 2 0 0 1 1.288 1.287L12 21l1.9-5.8a2 2 0 0 1 1.287-1.288L21 12l-5.8-1.9a2 2 0 0 1-1.288-1.287Z"
          }
        ]
      ]
    ];
    var Sparkles = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"
          }
        ],
        ["path", { d: "M5 3v4" }],
        ["path", { d: "M19 17v4" }],
        ["path", { d: "M3 5h4" }],
        ["path", { d: "M17 19h4" }]
      ]
    ];
    var Speaker = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2", ry: "2" }],
        ["circle", { cx: "12", cy: "14", r: "4" }],
        ["line", { x1: "12", x2: "12.01", y1: "6", y2: "6" }]
      ]
    ];
    var Speech = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M8.8 20v-4.1l1.9.2a2.3 2.3 0 0 0 2.164-2.1V8.3A5.37 5.37 0 0 0 2 8.25c0 2.8.656 3.054 1 4.55a5.77 5.77 0 0 1 .029 2.758L2 20"
          }
        ],
        ["path", { d: "M19.8 17.8a7.5 7.5 0 0 0 .003-10.603" }],
        ["path", { d: "M17 15a3.5 3.5 0 0 0-.025-4.975" }]
      ]
    ];
    var SpellCheck2 = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "m6 16 6-12 6 12" }],
        ["path", { d: "M8 12h8" }],
        [
          "path",
          {
            d: "M4 21c1.1 0 1.1-1 2.3-1s1.1 1 2.3 1c1.1 0 1.1-1 2.3-1 1.1 0 1.1 1 2.3 1 1.1 0 1.1-1 2.3-1 1.1 0 1.1 1 2.3 1 1.1 0 1.1-1 2.3-1"
          }
        ]
      ]
    ];
    var SpellCheck = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "m6 16 6-12 6 12" }],
        ["path", { d: "M8 12h8" }],
        ["path", { d: "m16 20 2 2 4-4" }]
      ]
    ];
    var Spline = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "19", cy: "5", r: "2" }],
        ["circle", { cx: "5", cy: "19", r: "2" }],
        ["path", { d: "M5 17A12 12 0 0 1 17 5" }]
      ]
    ];
    var SplitSquareHorizontal = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M8 19H5c-1 0-2-1-2-2V7c0-1 1-2 2-2h3" }],
        ["path", { d: "M16 5h3c1 0 2 1 2 2v10c0 1-1 2-2 2h-3" }],
        ["line", { x1: "12", x2: "12", y1: "4", y2: "20" }]
      ]
    ];
    var SplitSquareVertical = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M5 8V5c0-1 1-2 2-2h10c1 0 2 1 2 2v3" }],
        ["path", { d: "M19 16v3c0 1-1 2-2 2H7c-1 0-2-1-2-2v-3" }],
        ["line", { x1: "4", x2: "20", y1: "12", y2: "12" }]
      ]
    ];
    var Split = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M16 3h5v5" }],
        ["path", { d: "M8 3H3v5" }],
        ["path", { d: "M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3" }],
        ["path", { d: "m15 9 6-6" }]
      ]
    ];
    var SprayCan = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M3 3h.01" }],
        ["path", { d: "M7 5h.01" }],
        ["path", { d: "M11 7h.01" }],
        ["path", { d: "M3 7h.01" }],
        ["path", { d: "M7 9h.01" }],
        ["path", { d: "M3 11h.01" }],
        ["rect", { width: "4", height: "4", x: "15", y: "5" }],
        ["path", { d: "m19 9 2 2v10c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1V11l2-2" }],
        ["path", { d: "m13 14 8-2" }],
        ["path", { d: "m13 19 8-2" }]
      ]
    ];
    var Sprout = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M7 20h10" }],
        ["path", { d: "M10 20c5.5-2.5.8-6.4 3-10" }],
        [
          "path",
          {
            d: "M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z"
          }
        ],
        [
          "path",
          {
            d: "M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z"
          }
        ]
      ]
    ];
    var SquareAsterisk = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
        ["path", { d: "M12 8v8" }],
        ["path", { d: "m8.5 14 7-4" }],
        ["path", { d: "m8.5 10 7 4" }]
      ]
    ];
    var SquareCode = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
        ["path", { d: "m10 10-2 2 2 2" }],
        ["path", { d: "m14 14 2-2-2-2" }]
      ]
    ];
    var SquareDashedBottomCode = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "m10 10-2 2 2 2" }],
        ["path", { d: "m14 14 2-2-2-2" }],
        [
          "path",
          {
            d: "M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2"
          }
        ],
        ["path", { d: "M9 21h1" }],
        ["path", { d: "M14 21h1" }]
      ]
    ];
    var SquareDashedBottom = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2"
          }
        ],
        ["path", { d: "M9 21h1" }],
        ["path", { d: "M14 21h1" }]
      ]
    ];
    var SquareDot = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
        ["circle", { cx: "12", cy: "12", r: "1" }]
      ]
    ];
    var SquareEqual = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
        ["path", { d: "M7 10h10" }],
        ["path", { d: "M7 14h10" }]
      ]
    ];
    var SquareSlash = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
        ["line", { x1: "9", x2: "15", y1: "15", y2: "9" }]
      ]
    ];
    var SquareStack = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M4 10c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2" }],
        ["path", { d: "M10 16c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2" }],
        ["rect", { width: "8", height: "8", x: "14", y: "14", rx: "2" }]
      ]
    ];
    var Square = [
      "svg",
      defaultAttributes,
      [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }]]
    ];
    var Squirrel = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M18 6a4 4 0 0 0-4 4 7 7 0 0 0-7 7c0-5 4-5 4-10.5a4.5 4.5 0 1 0-9 0 2.5 2.5 0 0 0 5 0C7 10 3 11 3 17c0 2.8 2.2 5 5 5h10"
          }
        ],
        [
          "path",
          { d: "M16 20c0-1.7 1.3-3 3-3h1a2 2 0 0 0 2-2v-2a4 4 0 0 0-4-4V4" }
        ],
        ["path", { d: "M15.2 22a3 3 0 0 0-2.2-5" }],
        ["path", { d: "M18 13h.01" }]
      ]
    ];
    var Stamp = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M5 22h14" }],
        [
          "path",
          {
            d: "M19.27 13.73A2.5 2.5 0 0 0 17.5 13h-11A2.5 2.5 0 0 0 4 15.5V17a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-1.5c0-.66-.26-1.3-.73-1.77Z"
          }
        ],
        [
          "path",
          {
            d: "M14 13V8.5C14 7 15 7 15 5a3 3 0 0 0-3-3c-1.66 0-3 1-3 3s1 2 1 3.5V13"
          }
        ]
      ]
    ];
    var StarHalf = [
      "svg",
      defaultAttributes,
      [["path", { d: "M12 17.8 5.8 21 7 14.1 2 9.3l7-1L12 2" }]]
    ];
    var StarOff = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          { d: "M8.34 8.34 2 9.27l5 4.87L5.82 21 12 17.77 18.18 21l-.59-3.43" }
        ],
        ["path", { d: "M18.42 12.76 22 9.27l-6.91-1L12 2l-1.44 2.91" }],
        ["line", { x1: "2", x2: "22", y1: "2", y2: "22" }]
      ]
    ];
    var Star = [
      "svg",
      defaultAttributes,
      [
        [
          "polygon",
          {
            points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
          }
        ]
      ]
    ];
    var StepBack = [
      "svg",
      defaultAttributes,
      [
        ["line", { x1: "18", x2: "18", y1: "20", y2: "4" }],
        ["polygon", { points: "14,20 4,12 14,4" }]
      ]
    ];
    var StepForward = [
      "svg",
      defaultAttributes,
      [
        ["line", { x1: "6", x2: "6", y1: "4", y2: "20" }],
        ["polygon", { points: "10,4 20,12 10,20" }]
      ]
    ];
    var Stethoscope = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3"
          }
        ],
        ["path", { d: "M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4" }],
        ["circle", { cx: "20", cy: "10", r: "2" }]
      ]
    ];
    var Sticker = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M15.5 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V8.5L15.5 3Z"
          }
        ],
        ["path", { d: "M15 3v6h6" }],
        ["path", { d: "M10 16s.8 1 2 1c1.3 0 2-1 2-1" }],
        ["path", { d: "M8 13h0" }],
        ["path", { d: "M16 13h0" }]
      ]
    ];
    var StickyNote = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M15.5 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V8.5L15.5 3Z"
          }
        ],
        ["path", { d: "M15 3v6h6" }]
      ]
    ];
    var StopCircle = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "12", cy: "12", r: "10" }],
        ["rect", { width: "6", height: "6", x: "9", y: "9" }]
      ]
    ];
    var Store = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          { d: "m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" }
        ],
        ["path", { d: "M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" }],
        ["path", { d: "M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" }],
        ["path", { d: "M2 7h20" }],
        [
          "path",
          {
            d: "M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7"
          }
        ]
      ]
    ];
    var StretchHorizontal = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "20", height: "6", x: "2", y: "4", rx: "2" }],
        ["rect", { width: "20", height: "6", x: "2", y: "14", rx: "2" }]
      ]
    ];
    var StretchVertical = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "6", height: "20", x: "4", y: "2", rx: "2" }],
        ["rect", { width: "6", height: "20", x: "14", y: "2", rx: "2" }]
      ]
    ];
    var Strikethrough = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M16 4H9a3 3 0 0 0-2.83 4" }],
        ["path", { d: "M14 12a4 4 0 0 1 0 8H6" }],
        ["line", { x1: "4", x2: "20", y1: "12", y2: "12" }]
      ]
    ];
    var Subscript = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "m4 5 8 8" }],
        ["path", { d: "m12 5-8 8" }],
        [
          "path",
          {
            d: "M20 19h-4c0-1.5.44-2 1.5-2.5S20 15.33 20 14c0-.47-.17-.93-.48-1.29a2.11 2.11 0 0 0-2.62-.44c-.42.24-.74.62-.9 1.07"
          }
        ]
      ]
    ];
    var Subtitles = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M7 13h4" }],
        ["path", { d: "M15 13h2" }],
        ["path", { d: "M7 9h2" }],
        ["path", { d: "M13 9h4" }],
        [
          "path",
          { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z" }
        ]
      ]
    ];
    var SunDim = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "12", cy: "12", r: "4" }],
        ["path", { d: "M12 4h.01" }],
        ["path", { d: "M20 12h.01" }],
        ["path", { d: "M12 20h.01" }],
        ["path", { d: "M4 12h.01" }],
        ["path", { d: "M17.657 6.343h.01" }],
        ["path", { d: "M17.657 17.657h.01" }],
        ["path", { d: "M6.343 17.657h.01" }],
        ["path", { d: "M6.343 6.343h.01" }]
      ]
    ];
    var SunMedium = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "12", cy: "12", r: "4" }],
        ["path", { d: "M12 3v1" }],
        ["path", { d: "M12 20v1" }],
        ["path", { d: "M3 12h1" }],
        ["path", { d: "M20 12h1" }],
        ["path", { d: "m18.364 5.636-.707.707" }],
        ["path", { d: "m6.343 17.657-.707.707" }],
        ["path", { d: "m5.636 5.636.707.707" }],
        ["path", { d: "m17.657 17.657.707.707" }]
      ]
    ];
    var SunMoon = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M12 8a2.83 2.83 0 0 0 4 4 4 4 0 1 1-4-4" }],
        ["path", { d: "M12 2v2" }],
        ["path", { d: "M12 20v2" }],
        ["path", { d: "m4.9 4.9 1.4 1.4" }],
        ["path", { d: "m17.7 17.7 1.4 1.4" }],
        ["path", { d: "M2 12h2" }],
        ["path", { d: "M20 12h2" }],
        ["path", { d: "m6.3 17.7-1.4 1.4" }],
        ["path", { d: "m19.1 4.9-1.4 1.4" }]
      ]
    ];
    var SunSnow = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M10 9a3 3 0 1 0 0 6" }],
        ["path", { d: "M2 12h1" }],
        ["path", { d: "M14 21V3" }],
        ["path", { d: "M10 4V3" }],
        ["path", { d: "M10 21v-1" }],
        ["path", { d: "m3.64 18.36.7-.7" }],
        ["path", { d: "m4.34 6.34-.7-.7" }],
        ["path", { d: "M14 12h8" }],
        ["path", { d: "m17 4-3 3" }],
        ["path", { d: "m14 17 3 3" }],
        ["path", { d: "m21 15-3-3 3-3" }]
      ]
    ];
    var Sun = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "12", cy: "12", r: "4" }],
        ["path", { d: "M12 2v2" }],
        ["path", { d: "M12 20v2" }],
        ["path", { d: "m4.93 4.93 1.41 1.41" }],
        ["path", { d: "m17.66 17.66 1.41 1.41" }],
        ["path", { d: "M2 12h2" }],
        ["path", { d: "M20 12h2" }],
        ["path", { d: "m6.34 17.66-1.41 1.41" }],
        ["path", { d: "m19.07 4.93-1.41 1.41" }]
      ]
    ];
    var Sunrise = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M12 2v8" }],
        ["path", { d: "m4.93 10.93 1.41 1.41" }],
        ["path", { d: "M2 18h2" }],
        ["path", { d: "M20 18h2" }],
        ["path", { d: "m19.07 10.93-1.41 1.41" }],
        ["path", { d: "M22 22H2" }],
        ["path", { d: "m8 6 4-4 4 4" }],
        ["path", { d: "M16 18a4 4 0 0 0-8 0" }]
      ]
    ];
    var Sunset = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M12 10V2" }],
        ["path", { d: "m4.93 10.93 1.41 1.41" }],
        ["path", { d: "M2 18h2" }],
        ["path", { d: "M20 18h2" }],
        ["path", { d: "m19.07 10.93-1.41 1.41" }],
        ["path", { d: "M22 22H2" }],
        ["path", { d: "m16 6-4 4-4-4" }],
        ["path", { d: "M16 18a4 4 0 0 0-8 0" }]
      ]
    ];
    var Superscript = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "m4 19 8-8" }],
        ["path", { d: "m12 19-8-8" }],
        [
          "path",
          {
            d: "M20 12h-4c0-1.5.442-2 1.5-2.5S20 8.334 20 7.002c0-.472-.17-.93-.484-1.29a2.105 2.105 0 0 0-2.617-.436c-.42.239-.738.614-.899 1.06"
          }
        ]
      ]
    ];
    var SwissFranc = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M10 21V3h8" }],
        ["path", { d: "M6 16h9" }],
        ["path", { d: "M10 9.5h7" }]
      ]
    ];
    var SwitchCamera = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M11 19H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5" }],
        ["path", { d: "M13 5h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-5" }],
        ["circle", { cx: "12", cy: "12", r: "3" }],
        ["path", { d: "m18 22-3-3 3-3" }],
        ["path", { d: "m6 2 3 3-3 3" }]
      ]
    ];
    var Sword = [
      "svg",
      defaultAttributes,
      [
        ["polyline", { points: "14.5 17.5 3 6 3 3 6 3 17.5 14.5" }],
        ["line", { x1: "13", x2: "19", y1: "19", y2: "13" }],
        ["line", { x1: "16", x2: "20", y1: "16", y2: "20" }],
        ["line", { x1: "19", x2: "21", y1: "21", y2: "19" }]
      ]
    ];
    var Swords = [
      "svg",
      defaultAttributes,
      [
        ["polyline", { points: "14.5 17.5 3 6 3 3 6 3 17.5 14.5" }],
        ["line", { x1: "13", x2: "19", y1: "19", y2: "13" }],
        ["line", { x1: "16", x2: "20", y1: "16", y2: "20" }],
        ["line", { x1: "19", x2: "21", y1: "21", y2: "19" }],
        ["polyline", { points: "14.5 6.5 18 3 21 3 21 6 17.5 9.5" }],
        ["line", { x1: "5", x2: "9", y1: "14", y2: "18" }],
        ["line", { x1: "7", x2: "4", y1: "17", y2: "20" }],
        ["line", { x1: "3", x2: "5", y1: "19", y2: "21" }]
      ]
    ];
    var Syringe = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "m18 2 4 4" }],
        ["path", { d: "m17 7 3-3" }],
        [
          "path",
          { d: "M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5" }
        ],
        ["path", { d: "m9 11 4 4" }],
        ["path", { d: "m5 19-3 3" }],
        ["path", { d: "m14 4 6 6" }]
      ]
    ];
    var Table2 = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"
          }
        ]
      ]
    ];
    var TableProperties = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M15 3v18" }],
        ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
        ["path", { d: "M21 9H3" }],
        ["path", { d: "M21 15H3" }]
      ]
    ];
    var Table = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M12 3v18" }],
        ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
        ["path", { d: "M3 9h18" }],
        ["path", { d: "M3 15h18" }]
      ]
    ];
    var TabletSmartphone = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "10", height: "14", x: "3", y: "8", rx: "2" }],
        [
          "path",
          { d: "M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4" }
        ],
        ["path", { d: "M8 18h.01" }]
      ]
    ];
    var Tablet = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2", ry: "2" }],
        ["line", { x1: "12", x2: "12.01", y1: "18", y2: "18" }]
      ]
    ];
    var Tablets = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "7", cy: "7", r: "5" }],
        ["circle", { cx: "17", cy: "17", r: "5" }],
        ["path", { d: "M12 17h10" }],
        ["path", { d: "m3.46 10.54 7.08-7.08" }]
      ]
    ];
    var Tag = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z"
          }
        ],
        ["path", { d: "M7 7h.01" }]
      ]
    ];
    var Tags = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M9 5H2v7l6.29 6.29c.94.94 2.48.94 3.42 0l3.58-3.58c.94-.94.94-2.48 0-3.42L9 5Z"
          }
        ],
        ["path", { d: "M6 9.01V9" }],
        ["path", { d: "m15 5 6.3 6.3a2.4 2.4 0 0 1 0 3.4L17 19" }]
      ]
    ];
    var Tally1 = [
      "svg",
      defaultAttributes,
      [["path", { d: "M4 4v16" }]]
    ];
    var Tally2 = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M4 4v16" }],
        ["path", { d: "M9 4v16" }]
      ]
    ];
    var Tally3 = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M4 4v16" }],
        ["path", { d: "M9 4v16" }],
        ["path", { d: "M14 4v16" }]
      ]
    ];
    var Tally4 = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M4 4v16" }],
        ["path", { d: "M9 4v16" }],
        ["path", { d: "M14 4v16" }],
        ["path", { d: "M19 4v16" }]
      ]
    ];
    var Tally5 = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M4 4v16" }],
        ["path", { d: "M9 4v16" }],
        ["path", { d: "M14 4v16" }],
        ["path", { d: "M19 4v16" }],
        ["path", { d: "M22 6 2 18" }]
      ]
    ];
    var Tangent = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "17", cy: "4", r: "2" }],
        ["path", { d: "M15.59 5.41 5.41 15.59" }],
        ["circle", { cx: "4", cy: "17", r: "2" }],
        ["path", { d: "M12 22s-4-9-1.5-11.5S22 12 22 12" }]
      ]
    ];
    var Target = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "12", cy: "12", r: "10" }],
        ["circle", { cx: "12", cy: "12", r: "6" }],
        ["circle", { cx: "12", cy: "12", r: "2" }]
      ]
    ];
    var TentTree = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "4", cy: "4", r: "2" }],
        ["path", { d: "m14 5 3-3 3 3" }],
        ["path", { d: "m14 10 3-3 3 3" }],
        ["path", { d: "M17 14V2" }],
        ["path", { d: "M17 14H7l-5 8h20Z" }],
        ["path", { d: "M8 14v8" }],
        ["path", { d: "m9 14 5 8" }]
      ]
    ];
    var Tent = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M3.5 21 14 3" }],
        ["path", { d: "M20.5 21 10 3" }],
        ["path", { d: "M15.5 21 12 15l-3.5 6" }],
        ["path", { d: "M2 21h20" }]
      ]
    ];
    var TerminalSquare = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "m7 11 2-2-2-2" }],
        ["path", { d: "M11 13h4" }],
        ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2" }]
      ]
    ];
    var Terminal = [
      "svg",
      defaultAttributes,
      [
        ["polyline", { points: "4 17 10 11 4 5" }],
        ["line", { x1: "12", x2: "20", y1: "19", y2: "19" }]
      ]
    ];
    var TestTube2 = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M21 7 6.82 21.18a2.83 2.83 0 0 1-3.99-.01v0a2.83 2.83 0 0 1 0-4L17 3"
          }
        ],
        ["path", { d: "m16 2 6 6" }],
        ["path", { d: "M12 16H4" }]
      ]
    ];
    var TestTube = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          { d: "M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5h0c-1.4 0-2.5-1.1-2.5-2.5V2" }
        ],
        ["path", { d: "M8.5 2h7" }],
        ["path", { d: "M14.5 16h-5" }]
      ]
    ];
    var TestTubes = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M9 2v17.5A2.5 2.5 0 0 1 6.5 22v0A2.5 2.5 0 0 1 4 19.5V2" }],
        [
          "path",
          { d: "M20 2v17.5a2.5 2.5 0 0 1-2.5 2.5v0a2.5 2.5 0 0 1-2.5-2.5V2" }
        ],
        ["path", { d: "M3 2h7" }],
        ["path", { d: "M14 2h7" }],
        ["path", { d: "M9 16H4" }],
        ["path", { d: "M20 16h-5" }]
      ]
    ];
    var TextCursorInput = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M5 4h1a3 3 0 0 1 3 3 3 3 0 0 1 3-3h1" }],
        ["path", { d: "M13 20h-1a3 3 0 0 1-3-3 3 3 0 0 1-3 3H5" }],
        ["path", { d: "M5 16H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h1" }],
        ["path", { d: "M13 8h7a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-7" }],
        ["path", { d: "M9 7v10" }]
      ]
    ];
    var TextCursor = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M17 22h-1a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h1" }],
        ["path", { d: "M7 22h1a4 4 0 0 0 4-4v-1" }],
        ["path", { d: "M7 2h1a4 4 0 0 1 4 4v1" }]
      ]
    ];
    var TextQuote = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M17 6H3" }],
        ["path", { d: "M21 12H8" }],
        ["path", { d: "M21 18H8" }],
        ["path", { d: "M3 12v6" }]
      ]
    ];
    var TextSelect = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M5 3a2 2 0 0 0-2 2" }],
        ["path", { d: "M19 3a2 2 0 0 1 2 2" }],
        ["path", { d: "M21 19a2 2 0 0 1-2 2" }],
        ["path", { d: "M5 21a2 2 0 0 1-2-2" }],
        ["path", { d: "M9 3h1" }],
        ["path", { d: "M9 21h1" }],
        ["path", { d: "M14 3h1" }],
        ["path", { d: "M14 21h1" }],
        ["path", { d: "M3 9v1" }],
        ["path", { d: "M21 9v1" }],
        ["path", { d: "M3 14v1" }],
        ["path", { d: "M21 14v1" }],
        ["line", { x1: "7", x2: "15", y1: "8", y2: "8" }],
        ["line", { x1: "7", x2: "17", y1: "12", y2: "12" }],
        ["line", { x1: "7", x2: "13", y1: "16", y2: "16" }]
      ]
    ];
    var Text = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M17 6.1H3" }],
        ["path", { d: "M21 12.1H3" }],
        ["path", { d: "M15.1 18H3" }]
      ]
    ];
    var Theater = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M2 10s3-3 3-8" }],
        ["path", { d: "M22 10s-3-3-3-8" }],
        ["path", { d: "M10 2c0 4.4-3.6 8-8 8" }],
        ["path", { d: "M14 2c0 4.4 3.6 8 8 8" }],
        ["path", { d: "M2 10s2 2 2 5" }],
        ["path", { d: "M22 10s-2 2-2 5" }],
        ["path", { d: "M8 15h8" }],
        ["path", { d: "M2 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1" }],
        ["path", { d: "M14 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1" }]
      ]
    ];
    var ThermometerSnowflake = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M2 12h10" }],
        ["path", { d: "M9 4v16" }],
        ["path", { d: "m3 9 3 3-3 3" }],
        ["path", { d: "M12 6 9 9 6 6" }],
        ["path", { d: "m6 18 3-3 1.5 1.5" }],
        ["path", { d: "M20 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z" }]
      ]
    ];
    var ThermometerSun = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M12 9a4 4 0 0 0-2 7.5" }],
        ["path", { d: "M12 3v2" }],
        ["path", { d: "m6.6 18.4-1.4 1.4" }],
        ["path", { d: "M20 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z" }],
        ["path", { d: "M4 13H2" }],
        ["path", { d: "M6.34 7.34 4.93 5.93" }]
      ]
    ];
    var Thermometer = [
      "svg",
      defaultAttributes,
      [["path", { d: "M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z" }]]
    ];
    var ThumbsDown = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M17 14V2" }],
        [
          "path",
          {
            d: "M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z"
          }
        ]
      ]
    ];
    var ThumbsUp = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M7 10v12" }],
        [
          "path",
          {
            d: "M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"
          }
        ]
      ]
    ];
    var Ticket = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"
          }
        ],
        ["path", { d: "M13 5v2" }],
        ["path", { d: "M13 17v2" }],
        ["path", { d: "M13 11v2" }]
      ]
    ];
    var TimerOff = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M10 2h4" }],
        ["path", { d: "M4.6 11a8 8 0 0 0 1.7 8.7 8 8 0 0 0 8.7 1.7" }],
        ["path", { d: "M7.4 7.4a8 8 0 0 1 10.3 1 8 8 0 0 1 .9 10.2" }],
        ["path", { d: "m2 2 20 20" }],
        ["path", { d: "M12 12v-2" }]
      ]
    ];
    var TimerReset = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M10 2h4" }],
        ["path", { d: "M12 14v-4" }],
        ["path", { d: "M4 13a8 8 0 0 1 8-7 8 8 0 1 1-5.3 14L4 17.6" }],
        ["path", { d: "M9 17H4v5" }]
      ]
    ];
    var Timer = [
      "svg",
      defaultAttributes,
      [
        ["line", { x1: "10", x2: "14", y1: "2", y2: "2" }],
        ["line", { x1: "12", x2: "15", y1: "14", y2: "11" }],
        ["circle", { cx: "12", cy: "14", r: "8" }]
      ]
    ];
    var ToggleLeft = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "20", height: "12", x: "2", y: "6", rx: "6", ry: "6" }],
        ["circle", { cx: "8", cy: "12", r: "2" }]
      ]
    ];
    var ToggleRight = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "20", height: "12", x: "2", y: "6", rx: "6", ry: "6" }],
        ["circle", { cx: "16", cy: "12", r: "2" }]
      ]
    ];
    var Tornado = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M21 4H3" }],
        ["path", { d: "M18 8H6" }],
        ["path", { d: "M19 12H9" }],
        ["path", { d: "M16 16h-6" }],
        ["path", { d: "M11 20H9" }]
      ]
    ];
    var Torus = [
      "svg",
      defaultAttributes,
      [
        ["ellipse", { cx: "12", cy: "11", rx: "3", ry: "2" }],
        ["ellipse", { cx: "12", cy: "12.5", rx: "10", ry: "8.5" }]
      ]
    ];
    var TouchpadOff = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M4 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16" }],
        ["path", { d: "M2 14h12" }],
        ["path", { d: "M22 14h-2" }],
        ["path", { d: "M12 20v-6" }],
        ["path", { d: "m2 2 20 20" }],
        ["path", { d: "M22 16V6a2 2 0 0 0-2-2H10" }]
      ]
    ];
    var Touchpad = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2" }],
        ["path", { d: "M2 14h20" }],
        ["path", { d: "M12 20v-6" }]
      ]
    ];
    var TowerControl = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M18.2 12.27 20 6H4l1.8 6.27a1 1 0 0 0 .95.73h10.5a1 1 0 0 0 .96-.73Z"
          }
        ],
        ["path", { d: "M8 13v9" }],
        ["path", { d: "M16 22v-9" }],
        ["path", { d: "m9 6 1 7" }],
        ["path", { d: "m15 6-1 7" }],
        ["path", { d: "M12 6V2" }],
        ["path", { d: "M13 2h-2" }]
      ]
    ];
    var ToyBrick = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "18", height: "12", x: "3", y: "8", rx: "1" }],
        ["path", { d: "M10 8V5c0-.6-.4-1-1-1H6a1 1 0 0 0-1 1v3" }],
        ["path", { d: "M19 8V5c0-.6-.4-1-1-1h-3a1 1 0 0 0-1 1v3" }]
      ]
    ];
    var Tractor = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M3 4h9l1 7" }],
        ["path", { d: "M4 11V4" }],
        ["path", { d: "M8 10V4" }],
        ["path", { d: "M18 5c-.6 0-1 .4-1 1v5.6" }],
        ["path", { d: "m10 11 11 .9c.6 0 .9.5.8 1.1l-.8 5h-1" }],
        ["circle", { cx: "7", cy: "15", r: ".5" }],
        ["circle", { cx: "7", cy: "15", r: "5" }],
        ["path", { d: "M16 18h-5" }],
        ["circle", { cx: "18", cy: "18", r: "2" }]
      ]
    ];
    var TrafficCone = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M9.3 6.2a4.55 4.55 0 0 0 5.4 0" }],
        ["path", { d: "M7.9 10.7c.9.8 2.4 1.3 4.1 1.3s3.2-.5 4.1-1.3" }],
        [
          "path",
          {
            d: "M13.9 3.5a1.93 1.93 0 0 0-3.8-.1l-3 10c-.1.2-.1.4-.1.6 0 1.7 2.2 3 5 3s5-1.3 5-3c0-.2 0-.4-.1-.5Z"
          }
        ],
        [
          "path",
          {
            d: "m7.5 12.2-4.7 2.7c-.5.3-.8.7-.8 1.1s.3.8.8 1.1l7.6 4.5c.9.5 2.1.5 3 0l7.6-4.5c.7-.3 1-.7 1-1.1s-.3-.8-.8-1.1l-4.7-2.8"
          }
        ]
      ]
    ];
    var TrainFrontTunnel = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M2 22V12a10 10 0 1 1 20 0v10" }],
        ["path", { d: "M15 6.8v1.4a3 2.8 0 1 1-6 0V6.8" }],
        ["path", { d: "M10 15h.01" }],
        ["path", { d: "M14 15h.01" }],
        ["path", { d: "M10 19a4 4 0 0 1-4-4v-3a6 6 0 1 1 12 0v3a4 4 0 0 1-4 4Z" }],
        ["path", { d: "m9 19-2 3" }],
        ["path", { d: "m15 19 2 3" }]
      ]
    ];
    var TrainFront = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M8 3.1V7a4 4 0 0 0 8 0V3.1" }],
        ["path", { d: "m9 15-1-1" }],
        ["path", { d: "m15 15 1-1" }],
        [
          "path",
          { d: "M9 19c-2.8 0-5-2.2-5-5v-4a8 8 0 0 1 16 0v4c0 2.8-2.2 5-5 5Z" }
        ],
        ["path", { d: "m8 19-2 3" }],
        ["path", { d: "m16 19 2 3" }]
      ]
    ];
    var TrainTrack = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M2 17 17 2" }],
        ["path", { d: "m2 14 8 8" }],
        ["path", { d: "m5 11 8 8" }],
        ["path", { d: "m8 8 8 8" }],
        ["path", { d: "m11 5 8 8" }],
        ["path", { d: "m14 2 8 8" }],
        ["path", { d: "M7 22 22 7" }]
      ]
    ];
    var TramFront = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "16", height: "16", x: "4", y: "3", rx: "2" }],
        ["path", { d: "M4 11h16" }],
        ["path", { d: "M12 3v8" }],
        ["path", { d: "m8 19-2 3" }],
        ["path", { d: "m18 22-2-3" }],
        ["path", { d: "M8 15h0" }],
        ["path", { d: "M16 15h0" }]
      ]
    ];
    var Trash2 = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M3 6h18" }],
        ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" }],
        ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" }],
        ["line", { x1: "10", x2: "10", y1: "11", y2: "17" }],
        ["line", { x1: "14", x2: "14", y1: "11", y2: "17" }]
      ]
    ];
    var Trash = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M3 6h18" }],
        ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" }],
        ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" }]
      ]
    ];
    var TreeDeciduous = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M8 19h8a4 4 0 0 0 3.8-2.8 4 4 0 0 0-1.6-4.5c1-1.1 1-2.7.4-4-.7-1.2-2.2-2-3.6-1.7a3 3 0 0 0-3-3 3 3 0 0 0-3 3c-1.4-.2-2.9.5-3.6 1.7-.7 1.3-.5 2.9.4 4a4 4 0 0 0-1.6 4.5A4 4 0 0 0 8 19Z"
          }
        ],
        ["path", { d: "M12 19v3" }]
      ]
    ];
    var TreePine = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "m17 14 3 3.3a1 1 0 0 1-.7 1.7H4.7a1 1 0 0 1-.7-1.7L7 14h-.3a1 1 0 0 1-.7-1.7L9 9h-.2A1 1 0 0 1 8 7.3L12 3l4 4.3a1 1 0 0 1-.8 1.7H15l3 3.3a1 1 0 0 1-.7 1.7H17Z"
          }
        ],
        ["path", { d: "M12 22v-3" }]
      ]
    ];
    var Trees = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M10 10v.2A3 3 0 0 1 8.9 16v0H5v0h0a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z"
          }
        ],
        ["path", { d: "M7 16v6" }],
        ["path", { d: "M13 19v3" }],
        [
          "path",
          {
            d: "M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5"
          }
        ]
      ]
    ];
    var Trello = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2" }],
        ["rect", { width: "3", height: "9", x: "7", y: "7" }],
        ["rect", { width: "3", height: "5", x: "14", y: "7" }]
      ]
    ];
    var TrendingDown = [
      "svg",
      defaultAttributes,
      [
        ["polyline", { points: "22 17 13.5 8.5 8.5 13.5 2 7" }],
        ["polyline", { points: "16 17 22 17 22 11" }]
      ]
    ];
    var TrendingUp = [
      "svg",
      defaultAttributes,
      [
        ["polyline", { points: "22 7 13.5 15.5 8.5 10.5 2 17" }],
        ["polyline", { points: "16 7 22 7 22 13" }]
      ]
    ];
    var TriangleRight = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M22 18a2 2 0 0 1-2 2H3c-1.1 0-1.3-.6-.4-1.3L20.4 4.3c.9-.7 1.6-.4 1.6.7Z"
          }
        ]
      ]
    ];
    var Triangle = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"
          }
        ]
      ]
    ];
    var Trophy = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M6 9H4.5a2.5 2.5 0 0 1 0-5H6" }],
        ["path", { d: "M18 9h1.5a2.5 2.5 0 0 0 0-5H18" }],
        ["path", { d: "M4 22h16" }],
        [
          "path",
          { d: "M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" }
        ],
        [
          "path",
          { d: "M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" }
        ],
        ["path", { d: "M18 2H6v7a6 6 0 0 0 12 0V2Z" }]
      ]
    ];
    var Truck = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          { d: "M5 18H3c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v11" }
        ],
        ["path", { d: "M14 9h4l4 4v4c0 .6-.4 1-1 1h-2" }],
        ["circle", { cx: "7", cy: "18", r: "2" }],
        ["path", { d: "M15 18H9" }],
        ["circle", { cx: "17", cy: "18", r: "2" }]
      ]
    ];
    var Turtle = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "m12 10 2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a8 8 0 1 0-16 0v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3l2-4h4Z"
          }
        ],
        ["path", { d: "M4.82 7.9 8 10" }],
        ["path", { d: "M15.18 7.9 12 10" }],
        ["path", { d: "M16.93 10H20a2 2 0 0 1 0 4H2" }]
      ]
    ];
    var Tv2 = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M7 21h10" }],
        ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2" }]
      ]
    ];
    var Tv = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "20", height: "15", x: "2", y: "7", rx: "2", ry: "2" }],
        ["polyline", { points: "17 2 12 7 7 2" }]
      ]
    ];
    var Twitch = [
      "svg",
      defaultAttributes,
      [["path", { d: "M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7" }]]
    ];
    var Twitter = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"
          }
        ]
      ]
    ];
    var Type = [
      "svg",
      defaultAttributes,
      [
        ["polyline", { points: "4 7 4 4 20 4 20 7" }],
        ["line", { x1: "9", x2: "15", y1: "20", y2: "20" }],
        ["line", { x1: "12", x2: "12", y1: "4", y2: "20" }]
      ]
    ];
    var UmbrellaOff = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M12 2v1" }],
        [
          "path",
          { d: "M15.5 21a1.85 1.85 0 0 1-3.5-1v-8H2a10 10 0 0 1 3.428-6.575" }
        ],
        ["path", { d: "M17.5 12H22A10 10 0 0 0 9.004 3.455" }],
        ["path", { d: "m2 2 20 20" }]
      ]
    ];
    var Umbrella = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M22 12a10.06 10.06 1 0 0-20 0Z" }],
        ["path", { d: "M12 12v8a2 2 0 0 0 4 0" }],
        ["path", { d: "M12 2v1" }]
      ]
    ];
    var Underline = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M6 4v6a6 6 0 0 0 12 0V4" }],
        ["line", { x1: "4", x2: "20", y1: "20", y2: "20" }]
      ]
    ];
    var Undo2 = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M9 14 4 9l5-5" }],
        [
          "path",
          { d: "M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5v0a5.5 5.5 0 0 1-5.5 5.5H11" }
        ]
      ]
    ];
    var UndoDot = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "12", cy: "17", r: "1" }],
        ["path", { d: "M3 7v6h6" }],
        ["path", { d: "M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13" }]
      ]
    ];
    var Undo = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M3 7v6h6" }],
        ["path", { d: "M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13" }]
      ]
    ];
    var UnfoldHorizontal = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M16 12h6" }],
        ["path", { d: "M8 12H2" }],
        ["path", { d: "M12 2v2" }],
        ["path", { d: "M12 8v2" }],
        ["path", { d: "M12 14v2" }],
        ["path", { d: "M12 20v2" }],
        ["path", { d: "m19 15 3-3-3-3" }],
        ["path", { d: "m5 9-3 3 3 3" }]
      ]
    ];
    var UnfoldVertical = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M12 22v-6" }],
        ["path", { d: "M12 8V2" }],
        ["path", { d: "M4 12H2" }],
        ["path", { d: "M10 12H8" }],
        ["path", { d: "M16 12h-2" }],
        ["path", { d: "M22 12h-2" }],
        ["path", { d: "m15 19-3 3-3-3" }],
        ["path", { d: "m15 5-3-3-3 3" }]
      ]
    ];
    var Ungroup = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "8", height: "6", x: "5", y: "4", rx: "1" }],
        ["rect", { width: "8", height: "6", x: "11", y: "14", rx: "1" }]
      ]
    ];
    var Unlink2 = [
      "svg",
      defaultAttributes,
      [["path", { d: "M15 7h2a5 5 0 0 1 0 10h-2m-6 0H7A5 5 0 0 1 7 7h2" }]]
    ];
    var Unlink = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71"
          }
        ],
        [
          "path",
          {
            d: "m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71"
          }
        ],
        ["line", { x1: "8", x2: "8", y1: "2", y2: "5" }],
        ["line", { x1: "2", x2: "5", y1: "8", y2: "8" }],
        ["line", { x1: "16", x2: "16", y1: "19", y2: "22" }],
        ["line", { x1: "19", x2: "22", y1: "16", y2: "16" }]
      ]
    ];
    var UnlockKeyhole = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "12", cy: "16", r: "1" }],
        ["rect", { x: "3", y: "10", width: "18", height: "12", rx: "2" }],
        ["path", { d: "M7 10V7a5 5 0 0 1 9.33-2.5" }]
      ]
    ];
    var Unlock = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2" }],
        ["path", { d: "M7 11V7a5 5 0 0 1 9.9-1" }]
      ]
    ];
    var Unplug = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "m19 5 3-3" }],
        ["path", { d: "m2 22 3-3" }],
        [
          "path",
          {
            d: "M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z"
          }
        ],
        ["path", { d: "M7.5 13.5 10 11" }],
        ["path", { d: "M10.5 16.5 13 14" }],
        [
          "path",
          {
            d: "m12 6 6 6 2.3-2.3a2.4 2.4 0 0 0 0-3.4l-2.6-2.6a2.4 2.4 0 0 0-3.4 0Z"
          }
        ]
      ]
    ];
    var UploadCloud = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" }],
        ["path", { d: "M12 12v9" }],
        ["path", { d: "m16 16-4-4-4 4" }]
      ]
    ];
    var Upload = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }],
        ["polyline", { points: "17 8 12 3 7 8" }],
        ["line", { x1: "12", x2: "12", y1: "3", y2: "15" }]
      ]
    ];
    var Usb = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "10", cy: "7", r: "1" }],
        ["circle", { cx: "4", cy: "20", r: "1" }],
        ["path", { d: "M4.7 19.3 19 5" }],
        ["path", { d: "m21 3-3 1 2 2Z" }],
        ["path", { d: "M9.26 7.68 5 12l2 5" }],
        ["path", { d: "m10 14 5 2 3.5-3.5" }],
        ["path", { d: "m18 12 1-1 1 1-1 1Z" }]
      ]
    ];
    var User2 = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "12", cy: "8", r: "5" }],
        ["path", { d: "M20 21a8 8 0 1 0-16 0" }]
      ]
    ];
    var UserCheck2 = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M14 19a6 6 0 0 0-12 0" }],
        ["circle", { cx: "8", cy: "9", r: "4" }],
        ["polyline", { points: "16 11 18 13 22 9" }]
      ]
    ];
    var UserCheck = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" }],
        ["circle", { cx: "9", cy: "7", r: "4" }],
        ["polyline", { points: "16 11 18 13 22 9" }]
      ]
    ];
    var UserCircle2 = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M18 20a6 6 0 0 0-12 0" }],
        ["circle", { cx: "12", cy: "10", r: "4" }],
        ["circle", { cx: "12", cy: "12", r: "10" }]
      ]
    ];
    var UserCircle = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "12", cy: "12", r: "10" }],
        ["circle", { cx: "12", cy: "10", r: "3" }],
        ["path", { d: "M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" }]
      ]
    ];
    var UserCog2 = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "18", cy: "15", r: "3" }],
        ["circle", { cx: "8", cy: "9", r: "4" }],
        ["path", { d: "M10.5 13.5A6 6 0 0 0 2 19" }],
        ["path", { d: "m21.7 16.4-.9-.3" }],
        ["path", { d: "m15.2 13.9-.9-.3" }],
        ["path", { d: "m16.6 18.7.3-.9" }],
        ["path", { d: "m19.1 12.2.3-.9" }],
        ["path", { d: "m19.6 18.7-.4-1" }],
        ["path", { d: "m16.8 12.3-.4-1" }],
        ["path", { d: "m14.3 16.6 1-.4" }],
        ["path", { d: "m20.7 13.8 1-.4" }]
      ]
    ];
    var UserCog = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "18", cy: "15", r: "3" }],
        ["circle", { cx: "9", cy: "7", r: "4" }],
        ["path", { d: "M10 15H6a4 4 0 0 0-4 4v2" }],
        ["path", { d: "m21.7 16.4-.9-.3" }],
        ["path", { d: "m15.2 13.9-.9-.3" }],
        ["path", { d: "m16.6 18.7.3-.9" }],
        ["path", { d: "m19.1 12.2.3-.9" }],
        ["path", { d: "m19.6 18.7-.4-1" }],
        ["path", { d: "m16.8 12.3-.4-1" }],
        ["path", { d: "m14.3 16.6 1-.4" }],
        ["path", { d: "m20.7 13.8 1-.4" }]
      ]
    ];
    var UserMinus2 = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M14 19a6 6 0 0 0-12 0" }],
        ["circle", { cx: "8", cy: "9", r: "4" }],
        ["line", { x1: "22", x2: "16", y1: "11", y2: "11" }]
      ]
    ];
    var UserMinus = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" }],
        ["circle", { cx: "9", cy: "7", r: "4" }],
        ["line", { x1: "22", x2: "16", y1: "11", y2: "11" }]
      ]
    ];
    var UserPlus2 = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M14 19a6 6 0 0 0-12 0" }],
        ["circle", { cx: "8", cy: "9", r: "4" }],
        ["line", { x1: "19", x2: "19", y1: "8", y2: "14" }],
        ["line", { x1: "22", x2: "16", y1: "11", y2: "11" }]
      ]
    ];
    var UserPlus = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" }],
        ["circle", { cx: "9", cy: "7", r: "4" }],
        ["line", { x1: "19", x2: "19", y1: "8", y2: "14" }],
        ["line", { x1: "22", x2: "16", y1: "11", y2: "11" }]
      ]
    ];
    var UserSquare2 = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M18 21a6 6 0 0 0-12 0" }],
        ["circle", { cx: "12", cy: "11", r: "4" }],
        ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }]
      ]
    ];
    var UserSquare = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
        ["circle", { cx: "12", cy: "10", r: "3" }],
        ["path", { d: "M7 21v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" }]
      ]
    ];
    var UserX2 = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M14 19a6 6 0 0 0-12 0" }],
        ["circle", { cx: "8", cy: "9", r: "4" }],
        ["line", { x1: "17", x2: "22", y1: "8", y2: "13" }],
        ["line", { x1: "22", x2: "17", y1: "8", y2: "13" }]
      ]
    ];
    var UserX = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" }],
        ["circle", { cx: "9", cy: "7", r: "4" }],
        ["line", { x1: "17", x2: "22", y1: "8", y2: "13" }],
        ["line", { x1: "22", x2: "17", y1: "8", y2: "13" }]
      ]
    ];
    var User = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" }],
        ["circle", { cx: "12", cy: "7", r: "4" }]
      ]
    ];
    var Users2 = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M14 19a6 6 0 0 0-12 0" }],
        ["circle", { cx: "8", cy: "9", r: "4" }],
        ["path", { d: "M22 19a6 6 0 0 0-6-6 4 4 0 1 0 0-8" }]
      ]
    ];
    var Users = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" }],
        ["circle", { cx: "9", cy: "7", r: "4" }],
        ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87" }],
        ["path", { d: "M16 3.13a4 4 0 0 1 0 7.75" }]
      ]
    ];
    var UtensilsCrossed = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          { d: "m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8" }
        ],
        [
          "path",
          {
            d: "M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7"
          }
        ],
        ["path", { d: "m2.1 21.8 6.4-6.3" }],
        ["path", { d: "m19 5-7 7" }]
      ]
    ];
    var Utensils = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" }],
        ["path", { d: "M7 2v20" }],
        ["path", { d: "M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" }]
      ]
    ];
    var UtilityPole = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M12 2v20" }],
        ["path", { d: "M2 5h20" }],
        ["path", { d: "M3 3v2" }],
        ["path", { d: "M7 3v2" }],
        ["path", { d: "M17 3v2" }],
        ["path", { d: "M21 3v2" }],
        ["path", { d: "m19 5-7 7-7-7" }]
      ]
    ];
    var Variable = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M8 21s-4-3-4-9 4-9 4-9" }],
        ["path", { d: "M16 3s4 3 4 9-4 9-4 9" }],
        ["line", { x1: "15", x2: "9", y1: "9", y2: "15" }],
        ["line", { x1: "9", x2: "15", y1: "9", y2: "15" }]
      ]
    ];
    var Vegan = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M2 2a26.6 26.6 0 0 1 10 20c.9-6.82 1.5-9.5 4-14" }],
        ["path", { d: "M16 8c4 0 6-2 6-6-4 0-6 2-6 6" }],
        ["path", { d: "M17.41 3.6a10 10 0 1 0 3 3" }]
      ]
    ];
    var VenetianMask = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M2 12a5 5 0 0 0 5 5 8 8 0 0 1 5 2 8 8 0 0 1 5-2 5 5 0 0 0 5-5V7h-5a8 8 0 0 0-5 2 8 8 0 0 0-5-2H2Z"
          }
        ],
        ["path", { d: "M6 11c1.5 0 3 .5 3 2-2 0-3 0-3-2Z" }],
        ["path", { d: "M18 11c-1.5 0-3 .5-3 2 2 0 3 0 3-2Z" }]
      ]
    ];
    var VibrateOff = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "m2 8 2 2-2 2 2 2-2 2" }],
        ["path", { d: "m22 8-2 2 2 2-2 2 2 2" }],
        ["path", { d: "M8 8v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2" }],
        ["path", { d: "M16 10.34V6c0-.55-.45-1-1-1h-4.34" }],
        ["line", { x1: "2", x2: "22", y1: "2", y2: "22" }]
      ]
    ];
    var Vibrate = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "m2 8 2 2-2 2 2 2-2 2" }],
        ["path", { d: "m22 8-2 2 2 2-2 2 2 2" }],
        ["rect", { width: "8", height: "14", x: "8", y: "5", rx: "1" }]
      ]
    ];
    var VideoOff = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M10.66 6H14a2 2 0 0 1 2 2v2.34l1 1L22 8v8" }],
        [
          "path",
          { d: "M16 16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2l10 10Z" }
        ],
        ["line", { x1: "2", x2: "22", y1: "2", y2: "22" }]
      ]
    ];
    var Video = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "m22 8-6 4 6 4V8Z" }],
        ["rect", { width: "14", height: "12", x: "2", y: "6", rx: "2", ry: "2" }]
      ]
    ];
    var Videotape = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2" }],
        ["path", { d: "M2 8h20" }],
        ["circle", { cx: "8", cy: "14", r: "2" }],
        ["path", { d: "M8 12h8" }],
        ["circle", { cx: "16", cy: "14", r: "2" }]
      ]
    ];
    var View = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          { d: "M5 12s2.545-5 7-5c4.454 0 7 5 7 5s-2.546 5-7 5c-4.455 0-7-5-7-5z" }
        ],
        ["path", { d: "M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" }],
        ["path", { d: "M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2" }],
        ["path", { d: "M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2" }]
      ]
    ];
    var Voicemail = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "6", cy: "12", r: "4" }],
        ["circle", { cx: "18", cy: "12", r: "4" }],
        ["line", { x1: "6", x2: "18", y1: "16", y2: "16" }]
      ]
    ];
    var Volume1 = [
      "svg",
      defaultAttributes,
      [
        ["polygon", { points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5" }],
        ["path", { d: "M15.54 8.46a5 5 0 0 1 0 7.07" }]
      ]
    ];
    var Volume2 = [
      "svg",
      defaultAttributes,
      [
        ["polygon", { points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5" }],
        ["path", { d: "M15.54 8.46a5 5 0 0 1 0 7.07" }],
        ["path", { d: "M19.07 4.93a10 10 0 0 1 0 14.14" }]
      ]
    ];
    var VolumeX = [
      "svg",
      defaultAttributes,
      [
        ["polygon", { points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5" }],
        ["line", { x1: "22", x2: "16", y1: "9", y2: "15" }],
        ["line", { x1: "16", x2: "22", y1: "9", y2: "15" }]
      ]
    ];
    var Volume = [
      "svg",
      defaultAttributes,
      [["polygon", { points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5" }]]
    ];
    var Vote = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "m9 12 2 2 4-4" }],
        ["path", { d: "M5 7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v12H5V7Z" }],
        ["path", { d: "M22 19H2" }]
      ]
    ];
    var Wallet2 = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M17 14h.01" }],
        [
          "path",
          {
            d: "M7 7h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14"
          }
        ]
      ]
    ];
    var WalletCards = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
        ["path", { d: "M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2" }],
        [
          "path",
          {
            d: "M3 11h3c.8 0 1.6.3 2.1.9l1.1.9c1.6 1.6 4.1 1.6 5.7 0l1.1-.9c.5-.5 1.3-.9 2.1-.9H21"
          }
        ]
      ]
    ];
    var Wallet = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M21 12V7H5a2 2 0 0 1 0-4h14v4" }],
        ["path", { d: "M3 5v14a2 2 0 0 0 2 2h16v-5" }],
        ["path", { d: "M18 12a2 2 0 0 0 0 4h4v-4Z" }]
      ]
    ];
    var Wallpaper = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "8", cy: "9", r: "2" }],
        [
          "path",
          {
            d: "m9 17 6.1-6.1a2 2 0 0 1 2.81.01L22 15V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2"
          }
        ],
        ["path", { d: "M8 21h8" }],
        ["path", { d: "M12 17v4" }]
      ]
    ];
    var Wand2 = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72Z"
          }
        ],
        ["path", { d: "m14 7 3 3" }],
        ["path", { d: "M5 6v4" }],
        ["path", { d: "M19 14v4" }],
        ["path", { d: "M10 2v2" }],
        ["path", { d: "M7 8H3" }],
        ["path", { d: "M21 16h-4" }],
        ["path", { d: "M11 3H9" }]
      ]
    ];
    var Wand = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M15 4V2" }],
        ["path", { d: "M15 16v-2" }],
        ["path", { d: "M8 9h2" }],
        ["path", { d: "M20 9h2" }],
        ["path", { d: "M17.8 11.8 19 13" }],
        ["path", { d: "M15 9h0" }],
        ["path", { d: "M17.8 6.2 19 5" }],
        ["path", { d: "m3 21 9-9" }],
        ["path", { d: "M12.2 6.2 11 5" }]
      ]
    ];
    var Warehouse = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M22 8.35V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35A2 2 0 0 1 3.26 6.5l8-3.2a2 2 0 0 1 1.48 0l8 3.2A2 2 0 0 1 22 8.35Z"
          }
        ],
        ["path", { d: "M6 18h12" }],
        ["path", { d: "M6 14h12" }],
        ["rect", { width: "12", height: "12", x: "6", y: "10" }]
      ]
    ];
    var Watch = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "12", cy: "12", r: "6" }],
        ["polyline", { points: "12 10 12 12 13 13" }],
        [
          "path",
          {
            d: "m16.13 7.66-.81-4.05a2 2 0 0 0-2-1.61h-2.68a2 2 0 0 0-2 1.61l-.78 4.05"
          }
        ],
        [
          "path",
          { d: "m7.88 16.36.8 4a2 2 0 0 0 2 1.61h2.72a2 2 0 0 0 2-1.61l.81-4.05" }
        ]
      ]
    ];
    var Waves = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"
          }
        ],
        [
          "path",
          {
            d: "M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"
          }
        ],
        [
          "path",
          {
            d: "M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"
          }
        ]
      ]
    ];
    var Waypoints = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "12", cy: "4.5", r: "2.5" }],
        ["path", { d: "m10.2 6.3-3.9 3.9" }],
        ["circle", { cx: "4.5", cy: "12", r: "2.5" }],
        ["path", { d: "M7 12h10" }],
        ["circle", { cx: "19.5", cy: "12", r: "2.5" }],
        ["path", { d: "m13.8 17.7 3.9-3.9" }],
        ["circle", { cx: "12", cy: "19.5", r: "2.5" }]
      ]
    ];
    var Webcam = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "12", cy: "10", r: "8" }],
        ["circle", { cx: "12", cy: "10", r: "3" }],
        ["path", { d: "M7 22h10" }],
        ["path", { d: "M12 22v-4" }]
      ]
    ];
    var Webhook = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2"
          }
        ],
        [
          "path",
          { d: "m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06" }
        ],
        ["path", { d: "m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8" }]
      ]
    ];
    var Weight = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "12", cy: "5", r: "3" }],
        [
          "path",
          {
            d: "M6.5 8a2 2 0 0 0-1.905 1.46L2.1 18.5A2 2 0 0 0 4 21h16a2 2 0 0 0 1.925-2.54L19.4 9.5A2 2 0 0 0 17.48 8Z"
          }
        ]
      ]
    ];
    var WheatOff = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "m2 22 10-10" }],
        ["path", { d: "m16 8-1.17 1.17" }],
        [
          "path",
          {
            d: "M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"
          }
        ],
        [
          "path",
          {
            d: "m8 8-.53.53a3.5 3.5 0 0 0 0 4.94L9 15l1.53-1.53c.55-.55.88-1.25.98-1.97"
          }
        ],
        [
          "path",
          {
            d: "M10.91 5.26c.15-.26.34-.51.56-.73L13 3l1.53 1.53a3.5 3.5 0 0 1 .28 4.62"
          }
        ],
        ["path", { d: "M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z" }],
        [
          "path",
          {
            d: "M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"
          }
        ],
        [
          "path",
          {
            d: "m16 16-.53.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.49 3.49 0 0 1 1.97-.98"
          }
        ],
        [
          "path",
          {
            d: "M18.74 13.09c.26-.15.51-.34.73-.56L21 11l-1.53-1.53a3.5 3.5 0 0 0-4.62-.28"
          }
        ],
        ["line", { x1: "2", x2: "22", y1: "2", y2: "22" }]
      ]
    ];
    var Wheat = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M2 22 16 8" }],
        [
          "path",
          {
            d: "M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"
          }
        ],
        [
          "path",
          {
            d: "M7.47 8.53 9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"
          }
        ],
        [
          "path",
          {
            d: "M11.47 4.53 13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"
          }
        ],
        ["path", { d: "M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z" }],
        [
          "path",
          {
            d: "M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"
          }
        ],
        [
          "path",
          {
            d: "M15.47 13.47 17 15l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"
          }
        ],
        [
          "path",
          {
            d: "M19.47 9.47 21 11l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L13 11l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"
          }
        ]
      ]
    ];
    var WholeWord = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "7", cy: "12", r: "3" }],
        ["path", { d: "M10 9v6" }],
        ["circle", { cx: "17", cy: "12", r: "3" }],
        ["path", { d: "M14 7v8" }],
        ["path", { d: "M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1" }]
      ]
    ];
    var WifiOff = [
      "svg",
      defaultAttributes,
      [
        ["line", { x1: "2", x2: "22", y1: "2", y2: "22" }],
        ["path", { d: "M8.5 16.5a5 5 0 0 1 7 0" }],
        ["path", { d: "M2 8.82a15 15 0 0 1 4.17-2.65" }],
        ["path", { d: "M10.66 5c4.01-.36 8.14.9 11.34 3.76" }],
        ["path", { d: "M16.85 11.25a10 10 0 0 1 2.22 1.68" }],
        ["path", { d: "M5 13a10 10 0 0 1 5.24-2.76" }],
        ["line", { x1: "12", x2: "12.01", y1: "20", y2: "20" }]
      ]
    ];
    var Wifi = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M5 13a10 10 0 0 1 14 0" }],
        ["path", { d: "M8.5 16.5a5 5 0 0 1 7 0" }],
        ["path", { d: "M2 8.82a15 15 0 0 1 20 0" }],
        ["line", { x1: "12", x2: "12.01", y1: "20", y2: "20" }]
      ]
    ];
    var Wind = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2" }],
        ["path", { d: "M9.6 4.6A2 2 0 1 1 11 8H2" }],
        ["path", { d: "M12.6 19.4A2 2 0 1 0 14 16H2" }]
      ]
    ];
    var WineOff = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M8 22h8" }],
        ["path", { d: "M7 10h3m7 0h-1.343" }],
        ["path", { d: "M12 15v7" }],
        [
          "path",
          {
            d: "M7.307 7.307A12.33 12.33 0 0 0 7 10a5 5 0 0 0 7.391 4.391M8.638 2.981C8.75 2.668 8.872 2.34 9 2h6c1.5 4 2 6 2 8 0 .407-.05.809-.145 1.198"
          }
        ],
        ["line", { x1: "2", x2: "22", y1: "2", y2: "22" }]
      ]
    ];
    var Wine = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M8 22h8" }],
        ["path", { d: "M7 10h10" }],
        ["path", { d: "M12 15v7" }],
        [
          "path",
          {
            d: "M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5Z"
          }
        ]
      ]
    ];
    var Workflow = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "8", height: "8", x: "3", y: "3", rx: "2" }],
        ["path", { d: "M7 11v4a2 2 0 0 0 2 2h4" }],
        ["rect", { width: "8", height: "8", x: "13", y: "13", rx: "2" }]
      ]
    ];
    var WrapText = [
      "svg",
      defaultAttributes,
      [
        ["line", { x1: "3", x2: "21", y1: "6", y2: "6" }],
        ["path", { d: "M3 12h15a3 3 0 1 1 0 6h-4" }],
        ["polyline", { points: "16 16 14 18 16 20" }],
        ["line", { x1: "3", x2: "10", y1: "18", y2: "18" }]
      ]
    ];
    var Wrench = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
          }
        ]
      ]
    ];
    var XCircle = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "12", cy: "12", r: "10" }],
        ["path", { d: "m15 9-6 6" }],
        ["path", { d: "m9 9 6 6" }]
      ]
    ];
    var XOctagon = [
      "svg",
      defaultAttributes,
      [
        [
          "polygon",
          {
            points: "7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"
          }
        ],
        ["path", { d: "m15 9-6 6" }],
        ["path", { d: "m9 9 6 6" }]
      ]
    ];
    var XSquare = [
      "svg",
      defaultAttributes,
      [
        ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2" }],
        ["path", { d: "m15 9-6 6" }],
        ["path", { d: "m9 9 6 6" }]
      ]
    ];
    var X = [
      "svg",
      defaultAttributes,
      [
        ["path", { d: "M18 6 6 18" }],
        ["path", { d: "m6 6 12 12" }]
      ]
    ];
    var Youtube = [
      "svg",
      defaultAttributes,
      [
        [
          "path",
          {
            d: "M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"
          }
        ],
        ["path", { d: "m10 15 5-3-5-3z" }]
      ]
    ];
    var ZapOff = [
      "svg",
      defaultAttributes,
      [
        ["polyline", { points: "12.41 6.75 13 2 10.57 4.92" }],
        ["polyline", { points: "18.57 12.91 21 10 15.66 10" }],
        ["polyline", { points: "8 8 3 14 12 14 11 22 16 16" }],
        ["line", { x1: "2", x2: "22", y1: "2", y2: "22" }]
      ]
    ];
    var Zap = [
      "svg",
      defaultAttributes,
      [["polygon", { points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2" }]]
    ];
    var ZoomIn = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "11", cy: "11", r: "8" }],
        ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65" }],
        ["line", { x1: "11", x2: "11", y1: "8", y2: "14" }],
        ["line", { x1: "8", x2: "14", y1: "11", y2: "11" }]
      ]
    ];
    var ZoomOut = [
      "svg",
      defaultAttributes,
      [
        ["circle", { cx: "11", cy: "11", r: "8" }],
        ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65" }],
        ["line", { x1: "8", x2: "14", y1: "11", y2: "11" }]
      ]
    ];
    var createIcons2 = ({ icons: icons2 = {}, nameAttr = "data-lucide", attrs = {} } = {}) => {
      if (!Object.values(icons2).length) {
        throw new Error(
          "Please provide an icons object.\nIf you want to use all the icons you can import it like:\n `import { createIcons, icons } from 'lucide';\nlucide.createIcons({icons});`"
        );
      }
      if (typeof document === "undefined") {
        throw new Error("`createIcons()` only works in a browser environment.");
      }
      const elementsToReplace = document.querySelectorAll(`[${nameAttr}]`);
      Array.from(elementsToReplace).forEach(
        (element) => replaceElement(element, { nameAttr, icons: icons2, attrs })
      );
      if (nameAttr === "data-lucide") {
        const deprecatedElements = document.querySelectorAll("[icon-name]");
        if (deprecatedElements.length > 0) {
          console.warn("[Lucide] Some icons were found with the now deprecated icon-name attribute. These will still be replaced for backwards compatibility, but will no longer be supported in v1.0 and you should switch to data-lucide");
          Array.from(deprecatedElements).forEach(
            (element) => replaceElement(element, { nameAttr: "icon-name", icons: icons2, attrs })
          );
        }
      }
    };
    window.createIcons = createIcons2;
    window.icons = iconsAndAliases_exports;
  })();

  // ../nxt_theme/nxt_theme/public/js/tailwise/vendors/popper.js
  (() => {
    var __defProp2 = Object.defineProperty;
    var __export = (target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var lib_exports = {};
    __export(lib_exports, {
      afterMain: () => afterMain,
      afterRead: () => afterRead,
      afterWrite: () => afterWrite,
      applyStyles: () => applyStyles_default,
      arrow: () => arrow_default,
      auto: () => auto,
      basePlacements: () => basePlacements,
      beforeMain: () => beforeMain,
      beforeRead: () => beforeRead,
      beforeWrite: () => beforeWrite,
      bottom: () => bottom,
      clippingParents: () => clippingParents,
      computeStyles: () => computeStyles_default,
      createPopper: () => createPopper3,
      createPopperBase: () => createPopper,
      createPopperLite: () => createPopper2,
      detectOverflow: () => detectOverflow,
      end: () => end,
      eventListeners: () => eventListeners_default,
      flip: () => flip_default,
      hide: () => hide_default,
      left: () => left,
      main: () => main,
      modifierPhases: () => modifierPhases,
      offset: () => offset_default,
      placements: () => placements,
      popper: () => popper,
      popperGenerator: () => popperGenerator,
      popperOffsets: () => popperOffsets_default,
      preventOverflow: () => preventOverflow_default,
      read: () => read,
      reference: () => reference,
      right: () => right,
      start: () => start,
      top: () => top,
      variationPlacements: () => variationPlacements,
      viewport: () => viewport,
      write: () => write
    });
    var top = "top";
    var bottom = "bottom";
    var right = "right";
    var left = "left";
    var auto = "auto";
    var basePlacements = [top, bottom, right, left];
    var start = "start";
    var end = "end";
    var clippingParents = "clippingParents";
    var viewport = "viewport";
    var popper = "popper";
    var reference = "reference";
    var variationPlacements = /* @__PURE__ */ basePlacements.reduce(function(acc, placement) {
      return acc.concat([placement + "-" + start, placement + "-" + end]);
    }, []);
    var placements = /* @__PURE__ */ [].concat(basePlacements, [auto]).reduce(function(acc, placement) {
      return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
    }, []);
    var beforeRead = "beforeRead";
    var read = "read";
    var afterRead = "afterRead";
    var beforeMain = "beforeMain";
    var main = "main";
    var afterMain = "afterMain";
    var beforeWrite = "beforeWrite";
    var write = "write";
    var afterWrite = "afterWrite";
    var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];
    function getNodeName(element) {
      return element ? (element.nodeName || "").toLowerCase() : null;
    }
    function getWindow(node) {
      if (node == null) {
        return window;
      }
      if (node.toString() !== "[object Window]") {
        var ownerDocument = node.ownerDocument;
        return ownerDocument ? ownerDocument.defaultView || window : window;
      }
      return node;
    }
    function isElement(node) {
      var OwnElement = getWindow(node).Element;
      return node instanceof OwnElement || node instanceof Element;
    }
    function isHTMLElement(node) {
      var OwnElement = getWindow(node).HTMLElement;
      return node instanceof OwnElement || node instanceof HTMLElement;
    }
    function isShadowRoot(node) {
      if (typeof ShadowRoot === "undefined") {
        return false;
      }
      var OwnElement = getWindow(node).ShadowRoot;
      return node instanceof OwnElement || node instanceof ShadowRoot;
    }
    function applyStyles(_ref) {
      var state = _ref.state;
      Object.keys(state.elements).forEach(function(name) {
        var style = state.styles[name] || {};
        var attributes = state.attributes[name] || {};
        var element = state.elements[name];
        if (!isHTMLElement(element) || !getNodeName(element)) {
          return;
        }
        Object.assign(element.style, style);
        Object.keys(attributes).forEach(function(name2) {
          var value = attributes[name2];
          if (value === false) {
            element.removeAttribute(name2);
          } else {
            element.setAttribute(name2, value === true ? "" : value);
          }
        });
      });
    }
    function effect(_ref2) {
      var state = _ref2.state;
      var initialStyles = {
        popper: {
          position: state.options.strategy,
          left: "0",
          top: "0",
          margin: "0"
        },
        arrow: {
          position: "absolute"
        },
        reference: {}
      };
      Object.assign(state.elements.popper.style, initialStyles.popper);
      state.styles = initialStyles;
      if (state.elements.arrow) {
        Object.assign(state.elements.arrow.style, initialStyles.arrow);
      }
      return function() {
        Object.keys(state.elements).forEach(function(name) {
          var element = state.elements[name];
          var attributes = state.attributes[name] || {};
          var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]);
          var style = styleProperties.reduce(function(style2, property) {
            style2[property] = "";
            return style2;
          }, {});
          if (!isHTMLElement(element) || !getNodeName(element)) {
            return;
          }
          Object.assign(element.style, style);
          Object.keys(attributes).forEach(function(attribute) {
            element.removeAttribute(attribute);
          });
        });
      };
    }
    var applyStyles_default = {
      name: "applyStyles",
      enabled: true,
      phase: "write",
      fn: applyStyles,
      effect,
      requires: ["computeStyles"]
    };
    function getBasePlacement(placement) {
      return placement.split("-")[0];
    }
    var max = Math.max;
    var min = Math.min;
    var round = Math.round;
    function getUAString() {
      var uaData = navigator.userAgentData;
      if (uaData != null && uaData.brands && Array.isArray(uaData.brands)) {
        return uaData.brands.map(function(item) {
          return item.brand + "/" + item.version;
        }).join(" ");
      }
      return navigator.userAgent;
    }
    function isLayoutViewport() {
      return !/^((?!chrome|android).)*safari/i.test(getUAString());
    }
    function getBoundingClientRect(element, includeScale, isFixedStrategy) {
      if (includeScale === void 0) {
        includeScale = false;
      }
      if (isFixedStrategy === void 0) {
        isFixedStrategy = false;
      }
      var clientRect = element.getBoundingClientRect();
      var scaleX = 1;
      var scaleY = 1;
      if (includeScale && isHTMLElement(element)) {
        scaleX = element.offsetWidth > 0 ? round(clientRect.width) / element.offsetWidth || 1 : 1;
        scaleY = element.offsetHeight > 0 ? round(clientRect.height) / element.offsetHeight || 1 : 1;
      }
      var _ref = isElement(element) ? getWindow(element) : window, visualViewport = _ref.visualViewport;
      var addVisualOffsets = !isLayoutViewport() && isFixedStrategy;
      var x = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
      var y = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
      var width = clientRect.width / scaleX;
      var height = clientRect.height / scaleY;
      return {
        width,
        height,
        top: y,
        right: x + width,
        bottom: y + height,
        left: x,
        x,
        y
      };
    }
    function getLayoutRect(element) {
      var clientRect = getBoundingClientRect(element);
      var width = element.offsetWidth;
      var height = element.offsetHeight;
      if (Math.abs(clientRect.width - width) <= 1) {
        width = clientRect.width;
      }
      if (Math.abs(clientRect.height - height) <= 1) {
        height = clientRect.height;
      }
      return {
        x: element.offsetLeft,
        y: element.offsetTop,
        width,
        height
      };
    }
    function contains(parent, child) {
      var rootNode = child.getRootNode && child.getRootNode();
      if (parent.contains(child)) {
        return true;
      } else if (rootNode && isShadowRoot(rootNode)) {
        var next = child;
        do {
          if (next && parent.isSameNode(next)) {
            return true;
          }
          next = next.parentNode || next.host;
        } while (next);
      }
      return false;
    }
    function getComputedStyle2(element) {
      return getWindow(element).getComputedStyle(element);
    }
    function isTableElement(element) {
      return ["table", "td", "th"].indexOf(getNodeName(element)) >= 0;
    }
    function getDocumentElement(element) {
      return ((isElement(element) ? element.ownerDocument : element.document) || window.document).documentElement;
    }
    function getParentNode(element) {
      if (getNodeName(element) === "html") {
        return element;
      }
      return element.assignedSlot || element.parentNode || (isShadowRoot(element) ? element.host : null) || getDocumentElement(element);
    }
    function getTrueOffsetParent(element) {
      if (!isHTMLElement(element) || getComputedStyle2(element).position === "fixed") {
        return null;
      }
      return element.offsetParent;
    }
    function getContainingBlock(element) {
      var isFirefox = /firefox/i.test(getUAString());
      var isIE = /Trident/i.test(getUAString());
      if (isIE && isHTMLElement(element)) {
        var elementCss = getComputedStyle2(element);
        if (elementCss.position === "fixed") {
          return null;
        }
      }
      var currentNode = getParentNode(element);
      if (isShadowRoot(currentNode)) {
        currentNode = currentNode.host;
      }
      while (isHTMLElement(currentNode) && ["html", "body"].indexOf(getNodeName(currentNode)) < 0) {
        var css = getComputedStyle2(currentNode);
        if (css.transform !== "none" || css.perspective !== "none" || css.contain === "paint" || ["transform", "perspective"].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === "filter" || isFirefox && css.filter && css.filter !== "none") {
          return currentNode;
        } else {
          currentNode = currentNode.parentNode;
        }
      }
      return null;
    }
    function getOffsetParent(element) {
      var window2 = getWindow(element);
      var offsetParent = getTrueOffsetParent(element);
      while (offsetParent && isTableElement(offsetParent) && getComputedStyle2(offsetParent).position === "static") {
        offsetParent = getTrueOffsetParent(offsetParent);
      }
      if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle2(offsetParent).position === "static")) {
        return window2;
      }
      return offsetParent || getContainingBlock(element) || window2;
    }
    function getMainAxisFromPlacement(placement) {
      return ["top", "bottom"].indexOf(placement) >= 0 ? "x" : "y";
    }
    function within(min2, value, max2) {
      return max(min2, min(value, max2));
    }
    function withinMaxClamp(min2, value, max2) {
      var v = within(min2, value, max2);
      return v > max2 ? max2 : v;
    }
    function getFreshSideObject() {
      return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      };
    }
    function mergePaddingObject(paddingObject) {
      return Object.assign({}, getFreshSideObject(), paddingObject);
    }
    function expandToHashMap(value, keys) {
      return keys.reduce(function(hashMap, key) {
        hashMap[key] = value;
        return hashMap;
      }, {});
    }
    var toPaddingObject = function toPaddingObject2(padding, state) {
      padding = typeof padding === "function" ? padding(Object.assign({}, state.rects, {
        placement: state.placement
      })) : padding;
      return mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
    };
    function arrow(_ref) {
      var _state$modifiersData$;
      var state = _ref.state, name = _ref.name, options = _ref.options;
      var arrowElement = state.elements.arrow;
      var popperOffsets2 = state.modifiersData.popperOffsets;
      var basePlacement = getBasePlacement(state.placement);
      var axis = getMainAxisFromPlacement(basePlacement);
      var isVertical = [left, right].indexOf(basePlacement) >= 0;
      var len = isVertical ? "height" : "width";
      if (!arrowElement || !popperOffsets2) {
        return;
      }
      var paddingObject = toPaddingObject(options.padding, state);
      var arrowRect = getLayoutRect(arrowElement);
      var minProp = axis === "y" ? top : left;
      var maxProp = axis === "y" ? bottom : right;
      var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets2[axis] - state.rects.popper[len];
      var startDiff = popperOffsets2[axis] - state.rects.reference[axis];
      var arrowOffsetParent = getOffsetParent(arrowElement);
      var clientSize = arrowOffsetParent ? axis === "y" ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
      var centerToReference = endDiff / 2 - startDiff / 2;
      var min2 = paddingObject[minProp];
      var max2 = clientSize - arrowRect[len] - paddingObject[maxProp];
      var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
      var offset2 = within(min2, center, max2);
      var axisProp = axis;
      state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset2, _state$modifiersData$.centerOffset = offset2 - center, _state$modifiersData$);
    }
    function effect2(_ref2) {
      var state = _ref2.state, options = _ref2.options;
      var _options$element = options.element, arrowElement = _options$element === void 0 ? "[data-popper-arrow]" : _options$element;
      if (arrowElement == null) {
        return;
      }
      if (typeof arrowElement === "string") {
        arrowElement = state.elements.popper.querySelector(arrowElement);
        if (!arrowElement) {
          return;
        }
      }
      if (!contains(state.elements.popper, arrowElement)) {
        return;
      }
      state.elements.arrow = arrowElement;
    }
    var arrow_default = {
      name: "arrow",
      enabled: true,
      phase: "main",
      fn: arrow,
      effect: effect2,
      requires: ["popperOffsets"],
      requiresIfExists: ["preventOverflow"]
    };
    function getVariation(placement) {
      return placement.split("-")[1];
    }
    var unsetSides = {
      top: "auto",
      right: "auto",
      bottom: "auto",
      left: "auto"
    };
    function roundOffsetsByDPR(_ref, win) {
      var x = _ref.x, y = _ref.y;
      var dpr = win.devicePixelRatio || 1;
      return {
        x: round(x * dpr) / dpr || 0,
        y: round(y * dpr) / dpr || 0
      };
    }
    function mapToStyles(_ref2) {
      var _Object$assign2;
      var popper2 = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed;
      var _offsets$x = offsets.x, x = _offsets$x === void 0 ? 0 : _offsets$x, _offsets$y = offsets.y, y = _offsets$y === void 0 ? 0 : _offsets$y;
      var _ref3 = typeof roundOffsets === "function" ? roundOffsets({
        x,
        y
      }) : {
        x,
        y
      };
      x = _ref3.x;
      y = _ref3.y;
      var hasX = offsets.hasOwnProperty("x");
      var hasY = offsets.hasOwnProperty("y");
      var sideX = left;
      var sideY = top;
      var win = window;
      if (adaptive) {
        var offsetParent = getOffsetParent(popper2);
        var heightProp = "clientHeight";
        var widthProp = "clientWidth";
        if (offsetParent === getWindow(popper2)) {
          offsetParent = getDocumentElement(popper2);
          if (getComputedStyle2(offsetParent).position !== "static" && position === "absolute") {
            heightProp = "scrollHeight";
            widthProp = "scrollWidth";
          }
        }
        offsetParent = offsetParent;
        if (placement === top || (placement === left || placement === right) && variation === end) {
          sideY = bottom;
          var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : offsetParent[heightProp];
          y -= offsetY - popperRect.height;
          y *= gpuAcceleration ? 1 : -1;
        }
        if (placement === left || (placement === top || placement === bottom) && variation === end) {
          sideX = right;
          var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : offsetParent[widthProp];
          x -= offsetX - popperRect.width;
          x *= gpuAcceleration ? 1 : -1;
        }
      }
      var commonStyles = Object.assign({
        position
      }, adaptive && unsetSides);
      var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
        x,
        y
      }, getWindow(popper2)) : {
        x,
        y
      };
      x = _ref4.x;
      y = _ref4.y;
      if (gpuAcceleration) {
        var _Object$assign;
        return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? "0" : "", _Object$assign[sideX] = hasX ? "0" : "", _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
      }
      return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : "", _Object$assign2[sideX] = hasX ? x + "px" : "", _Object$assign2.transform = "", _Object$assign2));
    }
    function computeStyles(_ref5) {
      var state = _ref5.state, options = _ref5.options;
      var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
      var commonStyles = {
        placement: getBasePlacement(state.placement),
        variation: getVariation(state.placement),
        popper: state.elements.popper,
        popperRect: state.rects.popper,
        gpuAcceleration,
        isFixed: state.options.strategy === "fixed"
      };
      if (state.modifiersData.popperOffsets != null) {
        state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
          offsets: state.modifiersData.popperOffsets,
          position: state.options.strategy,
          adaptive,
          roundOffsets
        })));
      }
      if (state.modifiersData.arrow != null) {
        state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
          offsets: state.modifiersData.arrow,
          position: "absolute",
          adaptive: false,
          roundOffsets
        })));
      }
      state.attributes.popper = Object.assign({}, state.attributes.popper, {
        "data-popper-placement": state.placement
      });
    }
    var computeStyles_default = {
      name: "computeStyles",
      enabled: true,
      phase: "beforeWrite",
      fn: computeStyles,
      data: {}
    };
    var passive = {
      passive: true
    };
    function effect3(_ref) {
      var state = _ref.state, instance = _ref.instance, options = _ref.options;
      var _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
      var window2 = getWindow(state.elements.popper);
      var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
      if (scroll) {
        scrollParents.forEach(function(scrollParent) {
          scrollParent.addEventListener("scroll", instance.update, passive);
        });
      }
      if (resize) {
        window2.addEventListener("resize", instance.update, passive);
      }
      return function() {
        if (scroll) {
          scrollParents.forEach(function(scrollParent) {
            scrollParent.removeEventListener("scroll", instance.update, passive);
          });
        }
        if (resize) {
          window2.removeEventListener("resize", instance.update, passive);
        }
      };
    }
    var eventListeners_default = {
      name: "eventListeners",
      enabled: true,
      phase: "write",
      fn: function fn() {
      },
      effect: effect3,
      data: {}
    };
    var hash = {
      left: "right",
      right: "left",
      bottom: "top",
      top: "bottom"
    };
    function getOppositePlacement(placement) {
      return placement.replace(/left|right|bottom|top/g, function(matched) {
        return hash[matched];
      });
    }
    var hash2 = {
      start: "end",
      end: "start"
    };
    function getOppositeVariationPlacement(placement) {
      return placement.replace(/start|end/g, function(matched) {
        return hash2[matched];
      });
    }
    function getWindowScroll(node) {
      var win = getWindow(node);
      var scrollLeft = win.pageXOffset;
      var scrollTop = win.pageYOffset;
      return {
        scrollLeft,
        scrollTop
      };
    }
    function getWindowScrollBarX(element) {
      return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
    }
    function getViewportRect(element, strategy) {
      var win = getWindow(element);
      var html = getDocumentElement(element);
      var visualViewport = win.visualViewport;
      var width = html.clientWidth;
      var height = html.clientHeight;
      var x = 0;
      var y = 0;
      if (visualViewport) {
        width = visualViewport.width;
        height = visualViewport.height;
        var layoutViewport = isLayoutViewport();
        if (layoutViewport || !layoutViewport && strategy === "fixed") {
          x = visualViewport.offsetLeft;
          y = visualViewport.offsetTop;
        }
      }
      return {
        width,
        height,
        x: x + getWindowScrollBarX(element),
        y
      };
    }
    function getDocumentRect(element) {
      var _element$ownerDocumen;
      var html = getDocumentElement(element);
      var winScroll = getWindowScroll(element);
      var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
      var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
      var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
      var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
      var y = -winScroll.scrollTop;
      if (getComputedStyle2(body || html).direction === "rtl") {
        x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
      }
      return {
        width,
        height,
        x,
        y
      };
    }
    function isScrollParent(element) {
      var _getComputedStyle = getComputedStyle2(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
      return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
    }
    function getScrollParent(node) {
      if (["html", "body", "#document"].indexOf(getNodeName(node)) >= 0) {
        return node.ownerDocument.body;
      }
      if (isHTMLElement(node) && isScrollParent(node)) {
        return node;
      }
      return getScrollParent(getParentNode(node));
    }
    function listScrollParents(element, list) {
      var _element$ownerDocumen;
      if (list === void 0) {
        list = [];
      }
      var scrollParent = getScrollParent(element);
      var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
      var win = getWindow(scrollParent);
      var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
      var updatedList = list.concat(target);
      return isBody ? updatedList : updatedList.concat(listScrollParents(getParentNode(target)));
    }
    function rectToClientRect(rect) {
      return Object.assign({}, rect, {
        left: rect.x,
        top: rect.y,
        right: rect.x + rect.width,
        bottom: rect.y + rect.height
      });
    }
    function getInnerBoundingClientRect(element, strategy) {
      var rect = getBoundingClientRect(element, false, strategy === "fixed");
      rect.top = rect.top + element.clientTop;
      rect.left = rect.left + element.clientLeft;
      rect.bottom = rect.top + element.clientHeight;
      rect.right = rect.left + element.clientWidth;
      rect.width = element.clientWidth;
      rect.height = element.clientHeight;
      rect.x = rect.left;
      rect.y = rect.top;
      return rect;
    }
    function getClientRectFromMixedType(element, clippingParent, strategy) {
      return clippingParent === viewport ? rectToClientRect(getViewportRect(element, strategy)) : isElement(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
    }
    function getClippingParents(element) {
      var clippingParents2 = listScrollParents(getParentNode(element));
      var canEscapeClipping = ["absolute", "fixed"].indexOf(getComputedStyle2(element).position) >= 0;
      var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;
      if (!isElement(clipperElement)) {
        return [];
      }
      return clippingParents2.filter(function(clippingParent) {
        return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== "body";
      });
    }
    function getClippingRect(element, boundary, rootBoundary, strategy) {
      var mainClippingParents = boundary === "clippingParents" ? getClippingParents(element) : [].concat(boundary);
      var clippingParents2 = [].concat(mainClippingParents, [rootBoundary]);
      var firstClippingParent = clippingParents2[0];
      var clippingRect = clippingParents2.reduce(function(accRect, clippingParent) {
        var rect = getClientRectFromMixedType(element, clippingParent, strategy);
        accRect.top = max(rect.top, accRect.top);
        accRect.right = min(rect.right, accRect.right);
        accRect.bottom = min(rect.bottom, accRect.bottom);
        accRect.left = max(rect.left, accRect.left);
        return accRect;
      }, getClientRectFromMixedType(element, firstClippingParent, strategy));
      clippingRect.width = clippingRect.right - clippingRect.left;
      clippingRect.height = clippingRect.bottom - clippingRect.top;
      clippingRect.x = clippingRect.left;
      clippingRect.y = clippingRect.top;
      return clippingRect;
    }
    function computeOffsets(_ref) {
      var reference2 = _ref.reference, element = _ref.element, placement = _ref.placement;
      var basePlacement = placement ? getBasePlacement(placement) : null;
      var variation = placement ? getVariation(placement) : null;
      var commonX = reference2.x + reference2.width / 2 - element.width / 2;
      var commonY = reference2.y + reference2.height / 2 - element.height / 2;
      var offsets;
      switch (basePlacement) {
        case top:
          offsets = {
            x: commonX,
            y: reference2.y - element.height
          };
          break;
        case bottom:
          offsets = {
            x: commonX,
            y: reference2.y + reference2.height
          };
          break;
        case right:
          offsets = {
            x: reference2.x + reference2.width,
            y: commonY
          };
          break;
        case left:
          offsets = {
            x: reference2.x - element.width,
            y: commonY
          };
          break;
        default:
          offsets = {
            x: reference2.x,
            y: reference2.y
          };
      }
      var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
      if (mainAxis != null) {
        var len = mainAxis === "y" ? "height" : "width";
        switch (variation) {
          case start:
            offsets[mainAxis] = offsets[mainAxis] - (reference2[len] / 2 - element[len] / 2);
            break;
          case end:
            offsets[mainAxis] = offsets[mainAxis] + (reference2[len] / 2 - element[len] / 2);
            break;
          default:
        }
      }
      return offsets;
    }
    function detectOverflow(state, options) {
      if (options === void 0) {
        options = {};
      }
      var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state.placement : _options$placement, _options$strategy = _options.strategy, strategy = _options$strategy === void 0 ? state.strategy : _options$strategy, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? clippingParents : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? popper : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
      var paddingObject = mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
      var altContext = elementContext === popper ? reference : popper;
      var popperRect = state.rects.popper;
      var element = state.elements[altBoundary ? altContext : elementContext];
      var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary, strategy);
      var referenceClientRect = getBoundingClientRect(state.elements.reference);
      var popperOffsets2 = computeOffsets({
        reference: referenceClientRect,
        element: popperRect,
        strategy: "absolute",
        placement
      });
      var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets2));
      var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect;
      var overflowOffsets = {
        top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
        bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
        left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
        right: elementClientRect.right - clippingClientRect.right + paddingObject.right
      };
      var offsetData = state.modifiersData.offset;
      if (elementContext === popper && offsetData) {
        var offset2 = offsetData[placement];
        Object.keys(overflowOffsets).forEach(function(key) {
          var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
          var axis = [top, bottom].indexOf(key) >= 0 ? "y" : "x";
          overflowOffsets[key] += offset2[axis] * multiply;
        });
      }
      return overflowOffsets;
    }
    function computeAutoPlacement(state, options) {
      if (options === void 0) {
        options = {};
      }
      var _options = options, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
      var variation = getVariation(placement);
      var placements2 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function(placement2) {
        return getVariation(placement2) === variation;
      }) : basePlacements;
      var allowedPlacements = placements2.filter(function(placement2) {
        return allowedAutoPlacements.indexOf(placement2) >= 0;
      });
      if (allowedPlacements.length === 0) {
        allowedPlacements = placements2;
      }
      var overflows = allowedPlacements.reduce(function(acc, placement2) {
        acc[placement2] = detectOverflow(state, {
          placement: placement2,
          boundary,
          rootBoundary,
          padding
        })[getBasePlacement(placement2)];
        return acc;
      }, {});
      return Object.keys(overflows).sort(function(a, b) {
        return overflows[a] - overflows[b];
      });
    }
    function getExpandedFallbackPlacements(placement) {
      if (getBasePlacement(placement) === auto) {
        return [];
      }
      var oppositePlacement = getOppositePlacement(placement);
      return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
    }
    function flip(_ref) {
      var state = _ref.state, options = _ref.options, name = _ref.name;
      if (state.modifiersData[name]._skip) {
        return;
      }
      var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements;
      var preferredPlacement = state.options.placement;
      var basePlacement = getBasePlacement(preferredPlacement);
      var isBasePlacement = basePlacement === preferredPlacement;
      var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
      var placements2 = [preferredPlacement].concat(fallbackPlacements).reduce(function(acc, placement2) {
        return acc.concat(getBasePlacement(placement2) === auto ? computeAutoPlacement(state, {
          placement: placement2,
          boundary,
          rootBoundary,
          padding,
          flipVariations,
          allowedAutoPlacements
        }) : placement2);
      }, []);
      var referenceRect = state.rects.reference;
      var popperRect = state.rects.popper;
      var checksMap = /* @__PURE__ */ new Map();
      var makeFallbackChecks = true;
      var firstFittingPlacement = placements2[0];
      for (var i = 0; i < placements2.length; i++) {
        var placement = placements2[i];
        var _basePlacement = getBasePlacement(placement);
        var isStartVariation = getVariation(placement) === start;
        var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
        var len = isVertical ? "width" : "height";
        var overflow = detectOverflow(state, {
          placement,
          boundary,
          rootBoundary,
          altBoundary,
          padding
        });
        var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;
        if (referenceRect[len] > popperRect[len]) {
          mainVariationSide = getOppositePlacement(mainVariationSide);
        }
        var altVariationSide = getOppositePlacement(mainVariationSide);
        var checks = [];
        if (checkMainAxis) {
          checks.push(overflow[_basePlacement] <= 0);
        }
        if (checkAltAxis) {
          checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
        }
        if (checks.every(function(check) {
          return check;
        })) {
          firstFittingPlacement = placement;
          makeFallbackChecks = false;
          break;
        }
        checksMap.set(placement, checks);
      }
      if (makeFallbackChecks) {
        var numberOfChecks = flipVariations ? 3 : 1;
        var _loop = function _loop2(_i2) {
          var fittingPlacement = placements2.find(function(placement2) {
            var checks2 = checksMap.get(placement2);
            if (checks2) {
              return checks2.slice(0, _i2).every(function(check) {
                return check;
              });
            }
          });
          if (fittingPlacement) {
            firstFittingPlacement = fittingPlacement;
            return "break";
          }
        };
        for (var _i = numberOfChecks; _i > 0; _i--) {
          var _ret = _loop(_i);
          if (_ret === "break")
            break;
        }
      }
      if (state.placement !== firstFittingPlacement) {
        state.modifiersData[name]._skip = true;
        state.placement = firstFittingPlacement;
        state.reset = true;
      }
    }
    var flip_default = {
      name: "flip",
      enabled: true,
      phase: "main",
      fn: flip,
      requiresIfExists: ["offset"],
      data: {
        _skip: false
      }
    };
    function getSideOffsets(overflow, rect, preventedOffsets) {
      if (preventedOffsets === void 0) {
        preventedOffsets = {
          x: 0,
          y: 0
        };
      }
      return {
        top: overflow.top - rect.height - preventedOffsets.y,
        right: overflow.right - rect.width + preventedOffsets.x,
        bottom: overflow.bottom - rect.height + preventedOffsets.y,
        left: overflow.left - rect.width - preventedOffsets.x
      };
    }
    function isAnySideFullyClipped(overflow) {
      return [top, right, bottom, left].some(function(side) {
        return overflow[side] >= 0;
      });
    }
    function hide(_ref) {
      var state = _ref.state, name = _ref.name;
      var referenceRect = state.rects.reference;
      var popperRect = state.rects.popper;
      var preventedOffsets = state.modifiersData.preventOverflow;
      var referenceOverflow = detectOverflow(state, {
        elementContext: "reference"
      });
      var popperAltOverflow = detectOverflow(state, {
        altBoundary: true
      });
      var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
      var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
      var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
      var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
      state.modifiersData[name] = {
        referenceClippingOffsets,
        popperEscapeOffsets,
        isReferenceHidden,
        hasPopperEscaped
      };
      state.attributes.popper = Object.assign({}, state.attributes.popper, {
        "data-popper-reference-hidden": isReferenceHidden,
        "data-popper-escaped": hasPopperEscaped
      });
    }
    var hide_default = {
      name: "hide",
      enabled: true,
      phase: "main",
      requiresIfExists: ["preventOverflow"],
      fn: hide
    };
    function distanceAndSkiddingToXY(placement, rects, offset2) {
      var basePlacement = getBasePlacement(placement);
      var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;
      var _ref = typeof offset2 === "function" ? offset2(Object.assign({}, rects, {
        placement
      })) : offset2, skidding = _ref[0], distance = _ref[1];
      skidding = skidding || 0;
      distance = (distance || 0) * invertDistance;
      return [left, right].indexOf(basePlacement) >= 0 ? {
        x: distance,
        y: skidding
      } : {
        x: skidding,
        y: distance
      };
    }
    function offset(_ref2) {
      var state = _ref2.state, options = _ref2.options, name = _ref2.name;
      var _options$offset = options.offset, offset2 = _options$offset === void 0 ? [0, 0] : _options$offset;
      var data = placements.reduce(function(acc, placement) {
        acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset2);
        return acc;
      }, {});
      var _data$state$placement = data[state.placement], x = _data$state$placement.x, y = _data$state$placement.y;
      if (state.modifiersData.popperOffsets != null) {
        state.modifiersData.popperOffsets.x += x;
        state.modifiersData.popperOffsets.y += y;
      }
      state.modifiersData[name] = data;
    }
    var offset_default = {
      name: "offset",
      enabled: true,
      phase: "main",
      requires: ["popperOffsets"],
      fn: offset
    };
    function popperOffsets(_ref) {
      var state = _ref.state, name = _ref.name;
      state.modifiersData[name] = computeOffsets({
        reference: state.rects.reference,
        element: state.rects.popper,
        strategy: "absolute",
        placement: state.placement
      });
    }
    var popperOffsets_default = {
      name: "popperOffsets",
      enabled: true,
      phase: "read",
      fn: popperOffsets,
      data: {}
    };
    function getAltAxis(axis) {
      return axis === "x" ? "y" : "x";
    }
    function preventOverflow(_ref) {
      var state = _ref.state, options = _ref.options, name = _ref.name;
      var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
      var overflow = detectOverflow(state, {
        boundary,
        rootBoundary,
        padding,
        altBoundary
      });
      var basePlacement = getBasePlacement(state.placement);
      var variation = getVariation(state.placement);
      var isBasePlacement = !variation;
      var mainAxis = getMainAxisFromPlacement(basePlacement);
      var altAxis = getAltAxis(mainAxis);
      var popperOffsets2 = state.modifiersData.popperOffsets;
      var referenceRect = state.rects.reference;
      var popperRect = state.rects.popper;
      var tetherOffsetValue = typeof tetherOffset === "function" ? tetherOffset(Object.assign({}, state.rects, {
        placement: state.placement
      })) : tetherOffset;
      var normalizedTetherOffsetValue = typeof tetherOffsetValue === "number" ? {
        mainAxis: tetherOffsetValue,
        altAxis: tetherOffsetValue
      } : Object.assign({
        mainAxis: 0,
        altAxis: 0
      }, tetherOffsetValue);
      var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
      var data = {
        x: 0,
        y: 0
      };
      if (!popperOffsets2) {
        return;
      }
      if (checkMainAxis) {
        var _offsetModifierState$;
        var mainSide = mainAxis === "y" ? top : left;
        var altSide = mainAxis === "y" ? bottom : right;
        var len = mainAxis === "y" ? "height" : "width";
        var offset2 = popperOffsets2[mainAxis];
        var min2 = offset2 + overflow[mainSide];
        var max2 = offset2 - overflow[altSide];
        var additive = tether ? -popperRect[len] / 2 : 0;
        var minLen = variation === start ? referenceRect[len] : popperRect[len];
        var maxLen = variation === start ? -popperRect[len] : -referenceRect[len];
        var arrowElement = state.elements.arrow;
        var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
          width: 0,
          height: 0
        };
        var arrowPaddingObject = state.modifiersData["arrow#persistent"] ? state.modifiersData["arrow#persistent"].padding : getFreshSideObject();
        var arrowPaddingMin = arrowPaddingObject[mainSide];
        var arrowPaddingMax = arrowPaddingObject[altSide];
        var arrowLen = within(0, referenceRect[len], arrowRect[len]);
        var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
        var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
        var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
        var clientOffset = arrowOffsetParent ? mainAxis === "y" ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
        var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
        var tetherMin = offset2 + minOffset - offsetModifierValue - clientOffset;
        var tetherMax = offset2 + maxOffset - offsetModifierValue;
        var preventedOffset = within(tether ? min(min2, tetherMin) : min2, offset2, tether ? max(max2, tetherMax) : max2);
        popperOffsets2[mainAxis] = preventedOffset;
        data[mainAxis] = preventedOffset - offset2;
      }
      if (checkAltAxis) {
        var _offsetModifierState$2;
        var _mainSide = mainAxis === "x" ? top : left;
        var _altSide = mainAxis === "x" ? bottom : right;
        var _offset = popperOffsets2[altAxis];
        var _len = altAxis === "y" ? "height" : "width";
        var _min = _offset + overflow[_mainSide];
        var _max = _offset - overflow[_altSide];
        var isOriginSide = [top, left].indexOf(basePlacement) !== -1;
        var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
        var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
        var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
        var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
        popperOffsets2[altAxis] = _preventedOffset;
        data[altAxis] = _preventedOffset - _offset;
      }
      state.modifiersData[name] = data;
    }
    var preventOverflow_default = {
      name: "preventOverflow",
      enabled: true,
      phase: "main",
      fn: preventOverflow,
      requiresIfExists: ["offset"]
    };
    function getHTMLElementScroll(element) {
      return {
        scrollLeft: element.scrollLeft,
        scrollTop: element.scrollTop
      };
    }
    function getNodeScroll(node) {
      if (node === getWindow(node) || !isHTMLElement(node)) {
        return getWindowScroll(node);
      } else {
        return getHTMLElementScroll(node);
      }
    }
    function isElementScaled(element) {
      var rect = element.getBoundingClientRect();
      var scaleX = round(rect.width) / element.offsetWidth || 1;
      var scaleY = round(rect.height) / element.offsetHeight || 1;
      return scaleX !== 1 || scaleY !== 1;
    }
    function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
      if (isFixed === void 0) {
        isFixed = false;
      }
      var isOffsetParentAnElement = isHTMLElement(offsetParent);
      var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
      var documentElement = getDocumentElement(offsetParent);
      var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled, isFixed);
      var scroll = {
        scrollLeft: 0,
        scrollTop: 0
      };
      var offsets = {
        x: 0,
        y: 0
      };
      if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
        if (getNodeName(offsetParent) !== "body" || isScrollParent(documentElement)) {
          scroll = getNodeScroll(offsetParent);
        }
        if (isHTMLElement(offsetParent)) {
          offsets = getBoundingClientRect(offsetParent, true);
          offsets.x += offsetParent.clientLeft;
          offsets.y += offsetParent.clientTop;
        } else if (documentElement) {
          offsets.x = getWindowScrollBarX(documentElement);
        }
      }
      return {
        x: rect.left + scroll.scrollLeft - offsets.x,
        y: rect.top + scroll.scrollTop - offsets.y,
        width: rect.width,
        height: rect.height
      };
    }
    function order(modifiers) {
      var map = /* @__PURE__ */ new Map();
      var visited = /* @__PURE__ */ new Set();
      var result = [];
      modifiers.forEach(function(modifier) {
        map.set(modifier.name, modifier);
      });
      function sort(modifier) {
        visited.add(modifier.name);
        var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
        requires.forEach(function(dep) {
          if (!visited.has(dep)) {
            var depModifier = map.get(dep);
            if (depModifier) {
              sort(depModifier);
            }
          }
        });
        result.push(modifier);
      }
      modifiers.forEach(function(modifier) {
        if (!visited.has(modifier.name)) {
          sort(modifier);
        }
      });
      return result;
    }
    function orderModifiers(modifiers) {
      var orderedModifiers = order(modifiers);
      return modifierPhases.reduce(function(acc, phase) {
        return acc.concat(orderedModifiers.filter(function(modifier) {
          return modifier.phase === phase;
        }));
      }, []);
    }
    function debounce(fn2) {
      var pending;
      return function() {
        if (!pending) {
          pending = new Promise(function(resolve) {
            Promise.resolve().then(function() {
              pending = void 0;
              resolve(fn2());
            });
          });
        }
        return pending;
      };
    }
    function mergeByName(modifiers) {
      var merged = modifiers.reduce(function(merged2, current) {
        var existing = merged2[current.name];
        merged2[current.name] = existing ? Object.assign({}, existing, current, {
          options: Object.assign({}, existing.options, current.options),
          data: Object.assign({}, existing.data, current.data)
        }) : current;
        return merged2;
      }, {});
      return Object.keys(merged).map(function(key) {
        return merged[key];
      });
    }
    var DEFAULT_OPTIONS = {
      placement: "bottom",
      modifiers: [],
      strategy: "absolute"
    };
    function areValidElements() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return !args.some(function(element) {
        return !(element && typeof element.getBoundingClientRect === "function");
      });
    }
    function popperGenerator(generatorOptions) {
      if (generatorOptions === void 0) {
        generatorOptions = {};
      }
      var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers3 = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
      return function createPopper4(reference2, popper2, options) {
        if (options === void 0) {
          options = defaultOptions;
        }
        var state = {
          placement: "bottom",
          orderedModifiers: [],
          options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
          modifiersData: {},
          elements: {
            reference: reference2,
            popper: popper2
          },
          attributes: {},
          styles: {}
        };
        var effectCleanupFns = [];
        var isDestroyed = false;
        var instance = {
          state,
          setOptions: function setOptions(setOptionsAction) {
            var options2 = typeof setOptionsAction === "function" ? setOptionsAction(state.options) : setOptionsAction;
            cleanupModifierEffects();
            state.options = Object.assign({}, defaultOptions, state.options, options2);
            state.scrollParents = {
              reference: isElement(reference2) ? listScrollParents(reference2) : reference2.contextElement ? listScrollParents(reference2.contextElement) : [],
              popper: listScrollParents(popper2)
            };
            var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers3, state.options.modifiers)));
            state.orderedModifiers = orderedModifiers.filter(function(m) {
              return m.enabled;
            });
            runModifierEffects();
            return instance.update();
          },
          forceUpdate: function forceUpdate() {
            if (isDestroyed) {
              return;
            }
            var _state$elements = state.elements, reference3 = _state$elements.reference, popper3 = _state$elements.popper;
            if (!areValidElements(reference3, popper3)) {
              return;
            }
            state.rects = {
              reference: getCompositeRect(reference3, getOffsetParent(popper3), state.options.strategy === "fixed"),
              popper: getLayoutRect(popper3)
            };
            state.reset = false;
            state.placement = state.options.placement;
            state.orderedModifiers.forEach(function(modifier) {
              return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
            });
            for (var index = 0; index < state.orderedModifiers.length; index++) {
              if (state.reset === true) {
                state.reset = false;
                index = -1;
                continue;
              }
              var _state$orderedModifie = state.orderedModifiers[index], fn2 = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
              if (typeof fn2 === "function") {
                state = fn2({
                  state,
                  options: _options,
                  name,
                  instance
                }) || state;
              }
            }
          },
          update: debounce(function() {
            return new Promise(function(resolve) {
              instance.forceUpdate();
              resolve(state);
            });
          }),
          destroy: function destroy() {
            cleanupModifierEffects();
            isDestroyed = true;
          }
        };
        if (!areValidElements(reference2, popper2)) {
          return instance;
        }
        instance.setOptions(options).then(function(state2) {
          if (!isDestroyed && options.onFirstUpdate) {
            options.onFirstUpdate(state2);
          }
        });
        function runModifierEffects() {
          state.orderedModifiers.forEach(function(_ref) {
            var name = _ref.name, _ref$options = _ref.options, options2 = _ref$options === void 0 ? {} : _ref$options, effect4 = _ref.effect;
            if (typeof effect4 === "function") {
              var cleanupFn = effect4({
                state,
                name,
                instance,
                options: options2
              });
              var noopFn = function noopFn2() {
              };
              effectCleanupFns.push(cleanupFn || noopFn);
            }
          });
        }
        function cleanupModifierEffects() {
          effectCleanupFns.forEach(function(fn2) {
            return fn2();
          });
          effectCleanupFns = [];
        }
        return instance;
      };
    }
    var createPopper = /* @__PURE__ */ popperGenerator();
    var defaultModifiers = [eventListeners_default, popperOffsets_default, computeStyles_default, applyStyles_default];
    var createPopper2 = /* @__PURE__ */ popperGenerator({
      defaultModifiers
    });
    var defaultModifiers2 = [eventListeners_default, popperOffsets_default, computeStyles_default, applyStyles_default, offset_default, flip_default, preventOverflow_default, arrow_default, hide_default];
    var createPopper3 = /* @__PURE__ */ popperGenerator({
      defaultModifiers: defaultModifiers2
    });
    window.Popper = lib_exports;
  })();

  // ../nxt_theme/nxt_theme/public/js/tailwise/vendors/dropdown.js
  (() => {
    (function() {
      "use strict";
      function hide() {
        $(".tw-dropdown-menu").each(async function() {
          if ($(this).attr("id") !== void 0 && $('[data-dropdown-replacer="' + $(this).attr("id") + '"]').length && $(this).data("dropdown-programmatically") === void 0) {
            let randId = $(this).attr("id");
            let dropdownToggle = $('[data-dropdown-replacer="' + randId + '"]').parent().find("[data-tw-toggle='dropdown']");
            $(this).removeClass("show");
            const event = new Event("hide.tw.dropdown");
            $(dropdownToggle).parent()[0].dispatchEvent(event);
            await setTimeout(() => {
              $('[data-dropdown-replacer="' + randId + '"]').replaceWith(this);
              $(this).removeAttr("style");
              $(this).removeAttr("data-popper-placement");
              $(dropdownToggle).attr("aria-expanded", false);
              const event2 = new Event("hidden.tw.dropdown");
              $(dropdownToggle).parent()[0].dispatchEvent(event2);
            }, 200);
          } else if ($(this).attr("id") !== void 0 && !$('[data-dropdown-replacer="' + $(this).attr("id") + '"]').length && $(this).hasClass("show") && $(this).data("dropdown-programmatically") === void 0) {
            $(this).remove();
          } else if ($(this).data("dropdown-programmatically") == "initiate") {
            $(this).attr("data-dropdown-programmatically", "showed");
          } else if ($(this).data("dropdown-programmatically") == "showed") {
            $(this).removeAttr("data-dropdown-programmatically");
            hide();
          }
        });
      }
      function findVisibleDropdownToggle(dropdownToggle) {
        return dropdownToggle.filter((key, dropdownToggle2) => {
          return dropdownToggle2.offsetParent !== null;
        });
      }
      async function show(dropdown) {
        let dropdownBox = $(dropdown).find(".tw-dropdown-menu").first();
        let dropdownToggle = findVisibleDropdownToggle(
          $(dropdown).find("[data-tw-toggle='dropdown']")
        );
        let placement = $(dropdown).data("tw-placement") ? $(dropdown).data("tw-placement") : "bottom-end";
        let randId = "_" + Math.random().toString(36).substr(2, 9);
        hide();
        if ($(dropdownBox).length) {
          $(dropdownToggle).attr("aria-expanded", true);
          $(dropdown).css("position") == "static" ? $(dropdown).css("position", "relative") : "";
          $(dropdownBox).show();
          $(dropdownBox).css("width", $(dropdownBox).css("width"));
          $('<div data-dropdown-replacer="' + randId + '"></div>').insertAfter(
            dropdownBox
          );
          $(dropdownBox).attr("id", randId).appendTo("body");
          $(".modal.show").each(function() {
            if ($(this).find('[data-dropdown-replacer="' + randId + '"]')) {
              $(dropdownBox).css("z-index", $(this).css("z-index"));
            }
          });
          Popper.createPopper(dropdownToggle[0], dropdownBox[0], {
            placement
          });
          $(dropdownBox).addClass("show");
          const event = new Event("show.tw.dropdown");
          $(dropdown)[0].dispatchEvent(event);
          await setTimeout(() => {
            const event2 = new Event("shown.tw.dropdown");
            $(dropdown)[0].dispatchEvent(event2);
          }, 200);
        }
      }
      function toggleProgrammatically(dropdown) {
        let dropdownBox = $(dropdown).find(".tw-dropdown-menu").first();
        if ($(dropdownBox).length) {
          showProgrammatically(dropdown);
        } else {
          hide();
        }
      }
      function showProgrammatically(dropdown) {
        if ($(dropdown).find(".tw-dropdown-menu").length) {
          $(dropdown).find(".tw-dropdown-menu").attr("data-dropdown-programmatically", "initiate");
        } else {
          let randId = $("[data-dropdown-replacer]").data("dropdown-replacer");
          $("#" + randId).attr("data-dropdown-programmatically", "initiate");
        }
        show(dropdown);
      }
      function createInstance(dropdownToggle) {
        const dropdown = $(dropdownToggle).closest(".dropdown");
        return {
          show() {
            showProgrammatically(dropdown);
          },
          hide() {
            hide();
          },
          toggle() {
            toggleProgrammatically(dropdown);
          }
        };
      }
      $("body").on("click", function(event) {
        let dropdown = $(event.target).closest(".dropdown");
        let dropdownToggle = $(dropdown).find("[data-tw-toggle='dropdown']");
        let dropdownBox = $(dropdown).find(".tw-dropdown-menu").first();
        let activeDropdownBox = $(event.target).closest(".tw-dropdown-menu").first();
        let dismissButton = $(event.target).data("tw-dismiss");
        if (!$(dropdown).length && !$(activeDropdownBox).length || $(dropdownToggle).length && !$(dropdownBox).length || dismissButton == "dropdown") {
          hide();
        } else if (!$(activeDropdownBox).length) {
          show(dropdown);
        }
      });
      document.addEventListener("keydown", function(event) {
        if (event.code == "Escape") {
          hide();
        }
      });
      (function init() {
        $("[data-tw-toggle='dropdown']").each(function() {
          this["__dropdown"] = createInstance(this);
        });
        if (window.tailwind === void 0)
          window.tailwind = {};
        window.tailwind.Dropdown = {
          getInstance(el) {
            return el.__dropdown;
          },
          getOrCreateInstance(el) {
            return el.__dropdown === void 0 ? createInstance(el) : el.__dropdown;
          }
        };
      })();
    })();
  })();

  // ../nxt_theme/nxt_theme/public/js/tailwise/vendors/simplebar.js
  (() => {
    var __create = Object.create;
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames = Object.getOwnPropertyNames;
    var __getProtoOf = Object.getPrototypeOf;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __commonJS = (cb, mod) => function __require() {
      return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
    };
    var __copyProps = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
      isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
      mod
    ));
    var require_global = __commonJS({
      "node_modules/core-js/internals/global.js"(exports, module) {
        "use strict";
        var check = function(it) {
          return it && it.Math === Math && it;
        };
        module.exports = check(typeof globalThis == "object" && globalThis) || check(typeof window == "object" && window) || check(typeof self == "object" && self) || check(typeof global == "object" && global) || check(typeof exports == "object" && exports) || /* @__PURE__ */ function() {
          return this;
        }() || Function("return this")();
      }
    });
    var require_is_pure = __commonJS({
      "node_modules/core-js/internals/is-pure.js"(exports, module) {
        "use strict";
        module.exports = false;
      }
    });
    var require_define_global_property = __commonJS({
      "node_modules/core-js/internals/define-global-property.js"(exports, module) {
        "use strict";
        var global3 = require_global();
        var defineProperty = Object.defineProperty;
        module.exports = function(key, value) {
          try {
            defineProperty(global3, key, { value, configurable: true, writable: true });
          } catch (error) {
            global3[key] = value;
          }
          return value;
        };
      }
    });
    var require_shared_store = __commonJS({
      "node_modules/core-js/internals/shared-store.js"(exports, module) {
        "use strict";
        var IS_PURE = require_is_pure();
        var globalThis2 = require_global();
        var defineGlobalProperty = require_define_global_property();
        var SHARED = "__core-js_shared__";
        var store = module.exports = globalThis2[SHARED] || defineGlobalProperty(SHARED, {});
        (store.versions || (store.versions = [])).push({
          version: "3.37.1",
          mode: IS_PURE ? "pure" : "global",
          copyright: "\xA9 2014-2024 Denis Pushkarev (zloirock.ru)",
          license: "https://github.com/zloirock/core-js/blob/v3.37.1/LICENSE",
          source: "https://github.com/zloirock/core-js"
        });
      }
    });
    var require_shared = __commonJS({
      "node_modules/core-js/internals/shared.js"(exports, module) {
        "use strict";
        var store = require_shared_store();
        module.exports = function(key, value) {
          return store[key] || (store[key] = value || {});
        };
      }
    });
    var require_fails = __commonJS({
      "node_modules/core-js/internals/fails.js"(exports, module) {
        "use strict";
        module.exports = function(exec) {
          try {
            return !!exec();
          } catch (error) {
            return true;
          }
        };
      }
    });
    var require_function_bind_native = __commonJS({
      "node_modules/core-js/internals/function-bind-native.js"(exports, module) {
        "use strict";
        var fails = require_fails();
        module.exports = !fails(function() {
          var test = function() {
          }.bind();
          return typeof test != "function" || test.hasOwnProperty("prototype");
        });
      }
    });
    var require_function_uncurry_this = __commonJS({
      "node_modules/core-js/internals/function-uncurry-this.js"(exports, module) {
        "use strict";
        var NATIVE_BIND = require_function_bind_native();
        var FunctionPrototype = Function.prototype;
        var call = FunctionPrototype.call;
        var uncurryThisWithBind = NATIVE_BIND && FunctionPrototype.bind.bind(call, call);
        module.exports = NATIVE_BIND ? uncurryThisWithBind : function(fn) {
          return function() {
            return call.apply(fn, arguments);
          };
        };
      }
    });
    var require_is_null_or_undefined = __commonJS({
      "node_modules/core-js/internals/is-null-or-undefined.js"(exports, module) {
        "use strict";
        module.exports = function(it) {
          return it === null || it === void 0;
        };
      }
    });
    var require_require_object_coercible = __commonJS({
      "node_modules/core-js/internals/require-object-coercible.js"(exports, module) {
        "use strict";
        var isNullOrUndefined = require_is_null_or_undefined();
        var $TypeError = TypeError;
        module.exports = function(it) {
          if (isNullOrUndefined(it))
            throw new $TypeError("Can't call method on " + it);
          return it;
        };
      }
    });
    var require_to_object = __commonJS({
      "node_modules/core-js/internals/to-object.js"(exports, module) {
        "use strict";
        var requireObjectCoercible = require_require_object_coercible();
        var $Object = Object;
        module.exports = function(argument) {
          return $Object(requireObjectCoercible(argument));
        };
      }
    });
    var require_has_own_property = __commonJS({
      "node_modules/core-js/internals/has-own-property.js"(exports, module) {
        "use strict";
        var uncurryThis = require_function_uncurry_this();
        var toObject = require_to_object();
        var hasOwnProperty = uncurryThis({}.hasOwnProperty);
        module.exports = Object.hasOwn || function hasOwn(it, key) {
          return hasOwnProperty(toObject(it), key);
        };
      }
    });
    var require_uid = __commonJS({
      "node_modules/core-js/internals/uid.js"(exports, module) {
        "use strict";
        var uncurryThis = require_function_uncurry_this();
        var id = 0;
        var postfix = Math.random();
        var toString = uncurryThis(1 .toString);
        module.exports = function(key) {
          return "Symbol(" + (key === void 0 ? "" : key) + ")_" + toString(++id + postfix, 36);
        };
      }
    });
    var require_engine_user_agent = __commonJS({
      "node_modules/core-js/internals/engine-user-agent.js"(exports, module) {
        "use strict";
        module.exports = typeof navigator != "undefined" && String(navigator.userAgent) || "";
      }
    });
    var require_engine_v8_version = __commonJS({
      "node_modules/core-js/internals/engine-v8-version.js"(exports, module) {
        "use strict";
        var global3 = require_global();
        var userAgent = require_engine_user_agent();
        var process2 = global3.process;
        var Deno = global3.Deno;
        var versions = process2 && process2.versions || Deno && Deno.version;
        var v8 = versions && versions.v8;
        var match;
        var version;
        if (v8) {
          match = v8.split(".");
          version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
        }
        if (!version && userAgent) {
          match = userAgent.match(/Edge\/(\d+)/);
          if (!match || match[1] >= 74) {
            match = userAgent.match(/Chrome\/(\d+)/);
            if (match)
              version = +match[1];
          }
        }
        module.exports = version;
      }
    });
    var require_symbol_constructor_detection = __commonJS({
      "node_modules/core-js/internals/symbol-constructor-detection.js"(exports, module) {
        "use strict";
        var V8_VERSION = require_engine_v8_version();
        var fails = require_fails();
        var global3 = require_global();
        var $String = global3.String;
        module.exports = !!Object.getOwnPropertySymbols && !fails(function() {
          var symbol = Symbol("symbol detection");
          return !$String(symbol) || !(Object(symbol) instanceof Symbol) || !Symbol.sham && V8_VERSION && V8_VERSION < 41;
        });
      }
    });
    var require_use_symbol_as_uid = __commonJS({
      "node_modules/core-js/internals/use-symbol-as-uid.js"(exports, module) {
        "use strict";
        var NATIVE_SYMBOL = require_symbol_constructor_detection();
        module.exports = NATIVE_SYMBOL && !Symbol.sham && typeof Symbol.iterator == "symbol";
      }
    });
    var require_well_known_symbol = __commonJS({
      "node_modules/core-js/internals/well-known-symbol.js"(exports, module) {
        "use strict";
        var global3 = require_global();
        var shared = require_shared();
        var hasOwn = require_has_own_property();
        var uid = require_uid();
        var NATIVE_SYMBOL = require_symbol_constructor_detection();
        var USE_SYMBOL_AS_UID = require_use_symbol_as_uid();
        var Symbol2 = global3.Symbol;
        var WellKnownSymbolsStore = shared("wks");
        var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol2["for"] || Symbol2 : Symbol2 && Symbol2.withoutSetter || uid;
        module.exports = function(name) {
          if (!hasOwn(WellKnownSymbolsStore, name)) {
            WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn(Symbol2, name) ? Symbol2[name] : createWellKnownSymbol("Symbol." + name);
          }
          return WellKnownSymbolsStore[name];
        };
      }
    });
    var require_to_string_tag_support = __commonJS({
      "node_modules/core-js/internals/to-string-tag-support.js"(exports, module) {
        "use strict";
        var wellKnownSymbol = require_well_known_symbol();
        var TO_STRING_TAG = wellKnownSymbol("toStringTag");
        var test = {};
        test[TO_STRING_TAG] = "z";
        module.exports = String(test) === "[object z]";
      }
    });
    var require_is_callable = __commonJS({
      "node_modules/core-js/internals/is-callable.js"(exports, module) {
        "use strict";
        var documentAll = typeof document == "object" && document.all;
        module.exports = typeof documentAll == "undefined" && documentAll !== void 0 ? function(argument) {
          return typeof argument == "function" || argument === documentAll;
        } : function(argument) {
          return typeof argument == "function";
        };
      }
    });
    var require_descriptors = __commonJS({
      "node_modules/core-js/internals/descriptors.js"(exports, module) {
        "use strict";
        var fails = require_fails();
        module.exports = !fails(function() {
          return Object.defineProperty({}, 1, { get: function() {
            return 7;
          } })[1] !== 7;
        });
      }
    });
    var require_is_object = __commonJS({
      "node_modules/core-js/internals/is-object.js"(exports, module) {
        "use strict";
        var isCallable = require_is_callable();
        module.exports = function(it) {
          return typeof it == "object" ? it !== null : isCallable(it);
        };
      }
    });
    var require_document_create_element = __commonJS({
      "node_modules/core-js/internals/document-create-element.js"(exports, module) {
        "use strict";
        var global3 = require_global();
        var isObject = require_is_object();
        var document2 = global3.document;
        var EXISTS = isObject(document2) && isObject(document2.createElement);
        module.exports = function(it) {
          return EXISTS ? document2.createElement(it) : {};
        };
      }
    });
    var require_ie8_dom_define = __commonJS({
      "node_modules/core-js/internals/ie8-dom-define.js"(exports, module) {
        "use strict";
        var DESCRIPTORS = require_descriptors();
        var fails = require_fails();
        var createElement = require_document_create_element();
        module.exports = !DESCRIPTORS && !fails(function() {
          return Object.defineProperty(createElement("div"), "a", {
            get: function() {
              return 7;
            }
          }).a !== 7;
        });
      }
    });
    var require_v8_prototype_define_bug = __commonJS({
      "node_modules/core-js/internals/v8-prototype-define-bug.js"(exports, module) {
        "use strict";
        var DESCRIPTORS = require_descriptors();
        var fails = require_fails();
        module.exports = DESCRIPTORS && fails(function() {
          return Object.defineProperty(function() {
          }, "prototype", {
            value: 42,
            writable: false
          }).prototype !== 42;
        });
      }
    });
    var require_an_object = __commonJS({
      "node_modules/core-js/internals/an-object.js"(exports, module) {
        "use strict";
        var isObject = require_is_object();
        var $String = String;
        var $TypeError = TypeError;
        module.exports = function(argument) {
          if (isObject(argument))
            return argument;
          throw new $TypeError($String(argument) + " is not an object");
        };
      }
    });
    var require_function_call = __commonJS({
      "node_modules/core-js/internals/function-call.js"(exports, module) {
        "use strict";
        var NATIVE_BIND = require_function_bind_native();
        var call = Function.prototype.call;
        module.exports = NATIVE_BIND ? call.bind(call) : function() {
          return call.apply(call, arguments);
        };
      }
    });
    var require_get_built_in = __commonJS({
      "node_modules/core-js/internals/get-built-in.js"(exports, module) {
        "use strict";
        var global3 = require_global();
        var isCallable = require_is_callable();
        var aFunction = function(argument) {
          return isCallable(argument) ? argument : void 0;
        };
        module.exports = function(namespace, method) {
          return arguments.length < 2 ? aFunction(global3[namespace]) : global3[namespace] && global3[namespace][method];
        };
      }
    });
    var require_object_is_prototype_of = __commonJS({
      "node_modules/core-js/internals/object-is-prototype-of.js"(exports, module) {
        "use strict";
        var uncurryThis = require_function_uncurry_this();
        module.exports = uncurryThis({}.isPrototypeOf);
      }
    });
    var require_is_symbol = __commonJS({
      "node_modules/core-js/internals/is-symbol.js"(exports, module) {
        "use strict";
        var getBuiltIn = require_get_built_in();
        var isCallable = require_is_callable();
        var isPrototypeOf = require_object_is_prototype_of();
        var USE_SYMBOL_AS_UID = require_use_symbol_as_uid();
        var $Object = Object;
        module.exports = USE_SYMBOL_AS_UID ? function(it) {
          return typeof it == "symbol";
        } : function(it) {
          var $Symbol = getBuiltIn("Symbol");
          return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
        };
      }
    });
    var require_try_to_string = __commonJS({
      "node_modules/core-js/internals/try-to-string.js"(exports, module) {
        "use strict";
        var $String = String;
        module.exports = function(argument) {
          try {
            return $String(argument);
          } catch (error) {
            return "Object";
          }
        };
      }
    });
    var require_a_callable = __commonJS({
      "node_modules/core-js/internals/a-callable.js"(exports, module) {
        "use strict";
        var isCallable = require_is_callable();
        var tryToString = require_try_to_string();
        var $TypeError = TypeError;
        module.exports = function(argument) {
          if (isCallable(argument))
            return argument;
          throw new $TypeError(tryToString(argument) + " is not a function");
        };
      }
    });
    var require_get_method = __commonJS({
      "node_modules/core-js/internals/get-method.js"(exports, module) {
        "use strict";
        var aCallable = require_a_callable();
        var isNullOrUndefined = require_is_null_or_undefined();
        module.exports = function(V, P) {
          var func = V[P];
          return isNullOrUndefined(func) ? void 0 : aCallable(func);
        };
      }
    });
    var require_ordinary_to_primitive = __commonJS({
      "node_modules/core-js/internals/ordinary-to-primitive.js"(exports, module) {
        "use strict";
        var call = require_function_call();
        var isCallable = require_is_callable();
        var isObject = require_is_object();
        var $TypeError = TypeError;
        module.exports = function(input, pref) {
          var fn, val;
          if (pref === "string" && isCallable(fn = input.toString) && !isObject(val = call(fn, input)))
            return val;
          if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input)))
            return val;
          if (pref !== "string" && isCallable(fn = input.toString) && !isObject(val = call(fn, input)))
            return val;
          throw new $TypeError("Can't convert object to primitive value");
        };
      }
    });
    var require_to_primitive = __commonJS({
      "node_modules/core-js/internals/to-primitive.js"(exports, module) {
        "use strict";
        var call = require_function_call();
        var isObject = require_is_object();
        var isSymbol = require_is_symbol();
        var getMethod = require_get_method();
        var ordinaryToPrimitive = require_ordinary_to_primitive();
        var wellKnownSymbol = require_well_known_symbol();
        var $TypeError = TypeError;
        var TO_PRIMITIVE = wellKnownSymbol("toPrimitive");
        module.exports = function(input, pref) {
          if (!isObject(input) || isSymbol(input))
            return input;
          var exoticToPrim = getMethod(input, TO_PRIMITIVE);
          var result;
          if (exoticToPrim) {
            if (pref === void 0)
              pref = "default";
            result = call(exoticToPrim, input, pref);
            if (!isObject(result) || isSymbol(result))
              return result;
            throw new $TypeError("Can't convert object to primitive value");
          }
          if (pref === void 0)
            pref = "number";
          return ordinaryToPrimitive(input, pref);
        };
      }
    });
    var require_to_property_key = __commonJS({
      "node_modules/core-js/internals/to-property-key.js"(exports, module) {
        "use strict";
        var toPrimitive = require_to_primitive();
        var isSymbol = require_is_symbol();
        module.exports = function(argument) {
          var key = toPrimitive(argument, "string");
          return isSymbol(key) ? key : key + "";
        };
      }
    });
    var require_object_define_property = __commonJS({
      "node_modules/core-js/internals/object-define-property.js"(exports) {
        "use strict";
        var DESCRIPTORS = require_descriptors();
        var IE8_DOM_DEFINE = require_ie8_dom_define();
        var V8_PROTOTYPE_DEFINE_BUG = require_v8_prototype_define_bug();
        var anObject = require_an_object();
        var toPropertyKey = require_to_property_key();
        var $TypeError = TypeError;
        var $defineProperty = Object.defineProperty;
        var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
        var ENUMERABLE = "enumerable";
        var CONFIGURABLE = "configurable";
        var WRITABLE = "writable";
        exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
          anObject(O);
          P = toPropertyKey(P);
          anObject(Attributes);
          if (typeof O === "function" && P === "prototype" && "value" in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
            var current = $getOwnPropertyDescriptor(O, P);
            if (current && current[WRITABLE]) {
              O[P] = Attributes.value;
              Attributes = {
                configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
                enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
                writable: false
              };
            }
          }
          return $defineProperty(O, P, Attributes);
        } : $defineProperty : function defineProperty(O, P, Attributes) {
          anObject(O);
          P = toPropertyKey(P);
          anObject(Attributes);
          if (IE8_DOM_DEFINE)
            try {
              return $defineProperty(O, P, Attributes);
            } catch (error) {
            }
          if ("get" in Attributes || "set" in Attributes)
            throw new $TypeError("Accessors not supported");
          if ("value" in Attributes)
            O[P] = Attributes.value;
          return O;
        };
      }
    });
    var require_function_name = __commonJS({
      "node_modules/core-js/internals/function-name.js"(exports, module) {
        "use strict";
        var DESCRIPTORS = require_descriptors();
        var hasOwn = require_has_own_property();
        var FunctionPrototype = Function.prototype;
        var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;
        var EXISTS = hasOwn(FunctionPrototype, "name");
        var PROPER = EXISTS && function something() {
        }.name === "something";
        var CONFIGURABLE = EXISTS && (!DESCRIPTORS || DESCRIPTORS && getDescriptor(FunctionPrototype, "name").configurable);
        module.exports = {
          EXISTS,
          PROPER,
          CONFIGURABLE
        };
      }
    });
    var require_inspect_source = __commonJS({
      "node_modules/core-js/internals/inspect-source.js"(exports, module) {
        "use strict";
        var uncurryThis = require_function_uncurry_this();
        var isCallable = require_is_callable();
        var store = require_shared_store();
        var functionToString = uncurryThis(Function.toString);
        if (!isCallable(store.inspectSource)) {
          store.inspectSource = function(it) {
            return functionToString(it);
          };
        }
        module.exports = store.inspectSource;
      }
    });
    var require_weak_map_basic_detection = __commonJS({
      "node_modules/core-js/internals/weak-map-basic-detection.js"(exports, module) {
        "use strict";
        var global3 = require_global();
        var isCallable = require_is_callable();
        var WeakMap2 = global3.WeakMap;
        module.exports = isCallable(WeakMap2) && /native code/.test(String(WeakMap2));
      }
    });
    var require_create_property_descriptor = __commonJS({
      "node_modules/core-js/internals/create-property-descriptor.js"(exports, module) {
        "use strict";
        module.exports = function(bitmap, value) {
          return {
            enumerable: !(bitmap & 1),
            configurable: !(bitmap & 2),
            writable: !(bitmap & 4),
            value
          };
        };
      }
    });
    var require_create_non_enumerable_property = __commonJS({
      "node_modules/core-js/internals/create-non-enumerable-property.js"(exports, module) {
        "use strict";
        var DESCRIPTORS = require_descriptors();
        var definePropertyModule = require_object_define_property();
        var createPropertyDescriptor = require_create_property_descriptor();
        module.exports = DESCRIPTORS ? function(object, key, value) {
          return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
        } : function(object, key, value) {
          object[key] = value;
          return object;
        };
      }
    });
    var require_shared_key = __commonJS({
      "node_modules/core-js/internals/shared-key.js"(exports, module) {
        "use strict";
        var shared = require_shared();
        var uid = require_uid();
        var keys = shared("keys");
        module.exports = function(key) {
          return keys[key] || (keys[key] = uid(key));
        };
      }
    });
    var require_hidden_keys = __commonJS({
      "node_modules/core-js/internals/hidden-keys.js"(exports, module) {
        "use strict";
        module.exports = {};
      }
    });
    var require_internal_state = __commonJS({
      "node_modules/core-js/internals/internal-state.js"(exports, module) {
        "use strict";
        var NATIVE_WEAK_MAP = require_weak_map_basic_detection();
        var global3 = require_global();
        var isObject = require_is_object();
        var createNonEnumerableProperty = require_create_non_enumerable_property();
        var hasOwn = require_has_own_property();
        var shared = require_shared_store();
        var sharedKey = require_shared_key();
        var hiddenKeys = require_hidden_keys();
        var OBJECT_ALREADY_INITIALIZED = "Object already initialized";
        var TypeError2 = global3.TypeError;
        var WeakMap2 = global3.WeakMap;
        var set;
        var get;
        var has;
        var enforce = function(it) {
          return has(it) ? get(it) : set(it, {});
        };
        var getterFor = function(TYPE) {
          return function(it) {
            var state;
            if (!isObject(it) || (state = get(it)).type !== TYPE) {
              throw new TypeError2("Incompatible receiver, " + TYPE + " required");
            }
            return state;
          };
        };
        if (NATIVE_WEAK_MAP || shared.state) {
          store = shared.state || (shared.state = new WeakMap2());
          store.get = store.get;
          store.has = store.has;
          store.set = store.set;
          set = function(it, metadata) {
            if (store.has(it))
              throw new TypeError2(OBJECT_ALREADY_INITIALIZED);
            metadata.facade = it;
            store.set(it, metadata);
            return metadata;
          };
          get = function(it) {
            return store.get(it) || {};
          };
          has = function(it) {
            return store.has(it);
          };
        } else {
          STATE = sharedKey("state");
          hiddenKeys[STATE] = true;
          set = function(it, metadata) {
            if (hasOwn(it, STATE))
              throw new TypeError2(OBJECT_ALREADY_INITIALIZED);
            metadata.facade = it;
            createNonEnumerableProperty(it, STATE, metadata);
            return metadata;
          };
          get = function(it) {
            return hasOwn(it, STATE) ? it[STATE] : {};
          };
          has = function(it) {
            return hasOwn(it, STATE);
          };
        }
        var store;
        var STATE;
        module.exports = {
          set,
          get,
          has,
          enforce,
          getterFor
        };
      }
    });
    var require_make_built_in = __commonJS({
      "node_modules/core-js/internals/make-built-in.js"(exports, module) {
        "use strict";
        var uncurryThis = require_function_uncurry_this();
        var fails = require_fails();
        var isCallable = require_is_callable();
        var hasOwn = require_has_own_property();
        var DESCRIPTORS = require_descriptors();
        var CONFIGURABLE_FUNCTION_NAME = require_function_name().CONFIGURABLE;
        var inspectSource = require_inspect_source();
        var InternalStateModule = require_internal_state();
        var enforceInternalState = InternalStateModule.enforce;
        var getInternalState = InternalStateModule.get;
        var $String = String;
        var defineProperty = Object.defineProperty;
        var stringSlice = uncurryThis("".slice);
        var replace = uncurryThis("".replace);
        var join = uncurryThis([].join);
        var CONFIGURABLE_LENGTH = DESCRIPTORS && !fails(function() {
          return defineProperty(function() {
          }, "length", { value: 8 }).length !== 8;
        });
        var TEMPLATE = String(String).split("String");
        var makeBuiltIn = module.exports = function(value, name, options) {
          if (stringSlice($String(name), 0, 7) === "Symbol(") {
            name = "[" + replace($String(name), /^Symbol\(([^)]*)\).*$/, "$1") + "]";
          }
          if (options && options.getter)
            name = "get " + name;
          if (options && options.setter)
            name = "set " + name;
          if (!hasOwn(value, "name") || CONFIGURABLE_FUNCTION_NAME && value.name !== name) {
            if (DESCRIPTORS)
              defineProperty(value, "name", { value: name, configurable: true });
            else
              value.name = name;
          }
          if (CONFIGURABLE_LENGTH && options && hasOwn(options, "arity") && value.length !== options.arity) {
            defineProperty(value, "length", { value: options.arity });
          }
          try {
            if (options && hasOwn(options, "constructor") && options.constructor) {
              if (DESCRIPTORS)
                defineProperty(value, "prototype", { writable: false });
            } else if (value.prototype)
              value.prototype = void 0;
          } catch (error) {
          }
          var state = enforceInternalState(value);
          if (!hasOwn(state, "source")) {
            state.source = join(TEMPLATE, typeof name == "string" ? name : "");
          }
          return value;
        };
        Function.prototype.toString = makeBuiltIn(function toString() {
          return isCallable(this) && getInternalState(this).source || inspectSource(this);
        }, "toString");
      }
    });
    var require_define_built_in = __commonJS({
      "node_modules/core-js/internals/define-built-in.js"(exports, module) {
        "use strict";
        var isCallable = require_is_callable();
        var definePropertyModule = require_object_define_property();
        var makeBuiltIn = require_make_built_in();
        var defineGlobalProperty = require_define_global_property();
        module.exports = function(O, key, value, options) {
          if (!options)
            options = {};
          var simple = options.enumerable;
          var name = options.name !== void 0 ? options.name : key;
          if (isCallable(value))
            makeBuiltIn(value, name, options);
          if (options.global) {
            if (simple)
              O[key] = value;
            else
              defineGlobalProperty(key, value);
          } else {
            try {
              if (!options.unsafe)
                delete O[key];
              else if (O[key])
                simple = true;
            } catch (error) {
            }
            if (simple)
              O[key] = value;
            else
              definePropertyModule.f(O, key, {
                value,
                enumerable: false,
                configurable: !options.nonConfigurable,
                writable: !options.nonWritable
              });
          }
          return O;
        };
      }
    });
    var require_classof_raw = __commonJS({
      "node_modules/core-js/internals/classof-raw.js"(exports, module) {
        "use strict";
        var uncurryThis = require_function_uncurry_this();
        var toString = uncurryThis({}.toString);
        var stringSlice = uncurryThis("".slice);
        module.exports = function(it) {
          return stringSlice(toString(it), 8, -1);
        };
      }
    });
    var require_classof = __commonJS({
      "node_modules/core-js/internals/classof.js"(exports, module) {
        "use strict";
        var TO_STRING_TAG_SUPPORT = require_to_string_tag_support();
        var isCallable = require_is_callable();
        var classofRaw = require_classof_raw();
        var wellKnownSymbol = require_well_known_symbol();
        var TO_STRING_TAG = wellKnownSymbol("toStringTag");
        var $Object = Object;
        var CORRECT_ARGUMENTS = classofRaw(/* @__PURE__ */ function() {
          return arguments;
        }()) === "Arguments";
        var tryGet = function(it, key) {
          try {
            return it[key];
          } catch (error) {
          }
        };
        module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function(it) {
          var O, tag, result;
          return it === void 0 ? "Undefined" : it === null ? "Null" : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == "string" ? tag : CORRECT_ARGUMENTS ? classofRaw(O) : (result = classofRaw(O)) === "Object" && isCallable(O.callee) ? "Arguments" : result;
        };
      }
    });
    var require_object_to_string = __commonJS({
      "node_modules/core-js/internals/object-to-string.js"(exports, module) {
        "use strict";
        var TO_STRING_TAG_SUPPORT = require_to_string_tag_support();
        var classof = require_classof();
        module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
          return "[object " + classof(this) + "]";
        };
      }
    });
    var require_es_object_to_string = __commonJS({
      "node_modules/core-js/modules/es.object.to-string.js"() {
        "use strict";
        var TO_STRING_TAG_SUPPORT = require_to_string_tag_support();
        var defineBuiltIn = require_define_built_in();
        var toString = require_object_to_string();
        if (!TO_STRING_TAG_SUPPORT) {
          defineBuiltIn(Object.prototype, "toString", toString, { unsafe: true });
        }
      }
    });
    var require_dom_iterables = __commonJS({
      "node_modules/core-js/internals/dom-iterables.js"(exports, module) {
        "use strict";
        module.exports = {
          CSSRuleList: 0,
          CSSStyleDeclaration: 0,
          CSSValueList: 0,
          ClientRectList: 0,
          DOMRectList: 0,
          DOMStringList: 0,
          DOMTokenList: 1,
          DataTransferItemList: 0,
          FileList: 0,
          HTMLAllCollection: 0,
          HTMLCollection: 0,
          HTMLFormElement: 0,
          HTMLSelectElement: 0,
          MediaList: 0,
          MimeTypeArray: 0,
          NamedNodeMap: 0,
          NodeList: 1,
          PaintRequestList: 0,
          Plugin: 0,
          PluginArray: 0,
          SVGLengthList: 0,
          SVGNumberList: 0,
          SVGPathSegList: 0,
          SVGPointList: 0,
          SVGStringList: 0,
          SVGTransformList: 0,
          SourceBufferList: 0,
          StyleSheetList: 0,
          TextTrackCueList: 0,
          TextTrackList: 0,
          TouchList: 0
        };
      }
    });
    var require_dom_token_list_prototype = __commonJS({
      "node_modules/core-js/internals/dom-token-list-prototype.js"(exports, module) {
        "use strict";
        var documentCreateElement = require_document_create_element();
        var classList = documentCreateElement("span").classList;
        var DOMTokenListPrototype = classList && classList.constructor && classList.constructor.prototype;
        module.exports = DOMTokenListPrototype === Object.prototype ? void 0 : DOMTokenListPrototype;
      }
    });
    var require_function_uncurry_this_clause = __commonJS({
      "node_modules/core-js/internals/function-uncurry-this-clause.js"(exports, module) {
        "use strict";
        var classofRaw = require_classof_raw();
        var uncurryThis = require_function_uncurry_this();
        module.exports = function(fn) {
          if (classofRaw(fn) === "Function")
            return uncurryThis(fn);
        };
      }
    });
    var require_function_bind_context = __commonJS({
      "node_modules/core-js/internals/function-bind-context.js"(exports, module) {
        "use strict";
        var uncurryThis = require_function_uncurry_this_clause();
        var aCallable = require_a_callable();
        var NATIVE_BIND = require_function_bind_native();
        var bind = uncurryThis(uncurryThis.bind);
        module.exports = function(fn, that) {
          aCallable(fn);
          return that === void 0 ? fn : NATIVE_BIND ? bind(fn, that) : function() {
            return fn.apply(that, arguments);
          };
        };
      }
    });
    var require_indexed_object = __commonJS({
      "node_modules/core-js/internals/indexed-object.js"(exports, module) {
        "use strict";
        var uncurryThis = require_function_uncurry_this();
        var fails = require_fails();
        var classof = require_classof_raw();
        var $Object = Object;
        var split = uncurryThis("".split);
        module.exports = fails(function() {
          return !$Object("z").propertyIsEnumerable(0);
        }) ? function(it) {
          return classof(it) === "String" ? split(it, "") : $Object(it);
        } : $Object;
      }
    });
    var require_math_trunc = __commonJS({
      "node_modules/core-js/internals/math-trunc.js"(exports, module) {
        "use strict";
        var ceil = Math.ceil;
        var floor = Math.floor;
        module.exports = Math.trunc || function trunc(x) {
          var n = +x;
          return (n > 0 ? floor : ceil)(n);
        };
      }
    });
    var require_to_integer_or_infinity = __commonJS({
      "node_modules/core-js/internals/to-integer-or-infinity.js"(exports, module) {
        "use strict";
        var trunc = require_math_trunc();
        module.exports = function(argument) {
          var number = +argument;
          return number !== number || number === 0 ? 0 : trunc(number);
        };
      }
    });
    var require_to_length = __commonJS({
      "node_modules/core-js/internals/to-length.js"(exports, module) {
        "use strict";
        var toIntegerOrInfinity = require_to_integer_or_infinity();
        var min = Math.min;
        module.exports = function(argument) {
          var len = toIntegerOrInfinity(argument);
          return len > 0 ? min(len, 9007199254740991) : 0;
        };
      }
    });
    var require_length_of_array_like = __commonJS({
      "node_modules/core-js/internals/length-of-array-like.js"(exports, module) {
        "use strict";
        var toLength = require_to_length();
        module.exports = function(obj) {
          return toLength(obj.length);
        };
      }
    });
    var require_is_array = __commonJS({
      "node_modules/core-js/internals/is-array.js"(exports, module) {
        "use strict";
        var classof = require_classof_raw();
        module.exports = Array.isArray || function isArray(argument) {
          return classof(argument) === "Array";
        };
      }
    });
    var require_is_constructor = __commonJS({
      "node_modules/core-js/internals/is-constructor.js"(exports, module) {
        "use strict";
        var uncurryThis = require_function_uncurry_this();
        var fails = require_fails();
        var isCallable = require_is_callable();
        var classof = require_classof();
        var getBuiltIn = require_get_built_in();
        var inspectSource = require_inspect_source();
        var noop = function() {
        };
        var construct = getBuiltIn("Reflect", "construct");
        var constructorRegExp = /^\s*(?:class|function)\b/;
        var exec = uncurryThis(constructorRegExp.exec);
        var INCORRECT_TO_STRING = !constructorRegExp.test(noop);
        var isConstructorModern = function isConstructor(argument) {
          if (!isCallable(argument))
            return false;
          try {
            construct(noop, [], argument);
            return true;
          } catch (error) {
            return false;
          }
        };
        var isConstructorLegacy = function isConstructor(argument) {
          if (!isCallable(argument))
            return false;
          switch (classof(argument)) {
            case "AsyncFunction":
            case "GeneratorFunction":
            case "AsyncGeneratorFunction":
              return false;
          }
          try {
            return INCORRECT_TO_STRING || !!exec(constructorRegExp, inspectSource(argument));
          } catch (error) {
            return true;
          }
        };
        isConstructorLegacy.sham = true;
        module.exports = !construct || fails(function() {
          var called;
          return isConstructorModern(isConstructorModern.call) || !isConstructorModern(Object) || !isConstructorModern(function() {
            called = true;
          }) || called;
        }) ? isConstructorLegacy : isConstructorModern;
      }
    });
    var require_array_species_constructor = __commonJS({
      "node_modules/core-js/internals/array-species-constructor.js"(exports, module) {
        "use strict";
        var isArray = require_is_array();
        var isConstructor = require_is_constructor();
        var isObject = require_is_object();
        var wellKnownSymbol = require_well_known_symbol();
        var SPECIES = wellKnownSymbol("species");
        var $Array = Array;
        module.exports = function(originalArray) {
          var C;
          if (isArray(originalArray)) {
            C = originalArray.constructor;
            if (isConstructor(C) && (C === $Array || isArray(C.prototype)))
              C = void 0;
            else if (isObject(C)) {
              C = C[SPECIES];
              if (C === null)
                C = void 0;
            }
          }
          return C === void 0 ? $Array : C;
        };
      }
    });
    var require_array_species_create = __commonJS({
      "node_modules/core-js/internals/array-species-create.js"(exports, module) {
        "use strict";
        var arraySpeciesConstructor = require_array_species_constructor();
        module.exports = function(originalArray, length) {
          return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
        };
      }
    });
    var require_array_iteration = __commonJS({
      "node_modules/core-js/internals/array-iteration.js"(exports, module) {
        "use strict";
        var bind = require_function_bind_context();
        var uncurryThis = require_function_uncurry_this();
        var IndexedObject = require_indexed_object();
        var toObject = require_to_object();
        var lengthOfArrayLike = require_length_of_array_like();
        var arraySpeciesCreate = require_array_species_create();
        var push = uncurryThis([].push);
        var createMethod = function(TYPE) {
          var IS_MAP = TYPE === 1;
          var IS_FILTER = TYPE === 2;
          var IS_SOME = TYPE === 3;
          var IS_EVERY = TYPE === 4;
          var IS_FIND_INDEX = TYPE === 6;
          var IS_FILTER_REJECT = TYPE === 7;
          var NO_HOLES = TYPE === 5 || IS_FIND_INDEX;
          return function($this, callbackfn, that, specificCreate) {
            var O = toObject($this);
            var self2 = IndexedObject(O);
            var length = lengthOfArrayLike(self2);
            var boundFunction = bind(callbackfn, that);
            var index = 0;
            var create = specificCreate || arraySpeciesCreate;
            var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_REJECT ? create($this, 0) : void 0;
            var value, result;
            for (; length > index; index++)
              if (NO_HOLES || index in self2) {
                value = self2[index];
                result = boundFunction(value, index, O);
                if (TYPE) {
                  if (IS_MAP)
                    target[index] = result;
                  else if (result)
                    switch (TYPE) {
                      case 3:
                        return true;
                      case 5:
                        return value;
                      case 6:
                        return index;
                      case 2:
                        push(target, value);
                    }
                  else
                    switch (TYPE) {
                      case 4:
                        return false;
                      case 7:
                        push(target, value);
                    }
                }
              }
            return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
          };
        };
        module.exports = {
          forEach: createMethod(0),
          map: createMethod(1),
          filter: createMethod(2),
          some: createMethod(3),
          every: createMethod(4),
          find: createMethod(5),
          findIndex: createMethod(6),
          filterReject: createMethod(7)
        };
      }
    });
    var require_array_method_is_strict = __commonJS({
      "node_modules/core-js/internals/array-method-is-strict.js"(exports, module) {
        "use strict";
        var fails = require_fails();
        module.exports = function(METHOD_NAME, argument) {
          var method = [][METHOD_NAME];
          return !!method && fails(function() {
            method.call(null, argument || function() {
              return 1;
            }, 1);
          });
        };
      }
    });
    var require_array_for_each = __commonJS({
      "node_modules/core-js/internals/array-for-each.js"(exports, module) {
        "use strict";
        var $forEach = require_array_iteration().forEach;
        var arrayMethodIsStrict = require_array_method_is_strict();
        var STRICT_METHOD = arrayMethodIsStrict("forEach");
        module.exports = !STRICT_METHOD ? function forEach(callbackfn) {
          return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : void 0);
        } : [].forEach;
      }
    });
    var require_web_dom_collections_for_each = __commonJS({
      "node_modules/core-js/modules/web.dom-collections.for-each.js"() {
        "use strict";
        var global3 = require_global();
        var DOMIterables = require_dom_iterables();
        var DOMTokenListPrototype = require_dom_token_list_prototype();
        var forEach = require_array_for_each();
        var createNonEnumerableProperty = require_create_non_enumerable_property();
        var handlePrototype = function(CollectionPrototype) {
          if (CollectionPrototype && CollectionPrototype.forEach !== forEach)
            try {
              createNonEnumerableProperty(CollectionPrototype, "forEach", forEach);
            } catch (error) {
              CollectionPrototype.forEach = forEach;
            }
        };
        for (COLLECTION_NAME in DOMIterables) {
          if (DOMIterables[COLLECTION_NAME]) {
            handlePrototype(global3[COLLECTION_NAME] && global3[COLLECTION_NAME].prototype);
          }
        }
        var COLLECTION_NAME;
        handlePrototype(DOMTokenListPrototype);
      }
    });
    var require_can_use_dom = __commonJS({
      "node_modules/can-use-dom/index.js"(exports, module) {
        var canUseDOM2 = !!(typeof window !== "undefined" && window.document && window.document.createElement);
        module.exports = canUseDOM2;
      }
    });
    var require_object_property_is_enumerable = __commonJS({
      "node_modules/core-js/internals/object-property-is-enumerable.js"(exports) {
        "use strict";
        var $propertyIsEnumerable = {}.propertyIsEnumerable;
        var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
        var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);
        exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
          var descriptor = getOwnPropertyDescriptor(this, V);
          return !!descriptor && descriptor.enumerable;
        } : $propertyIsEnumerable;
      }
    });
    var require_to_indexed_object = __commonJS({
      "node_modules/core-js/internals/to-indexed-object.js"(exports, module) {
        "use strict";
        var IndexedObject = require_indexed_object();
        var requireObjectCoercible = require_require_object_coercible();
        module.exports = function(it) {
          return IndexedObject(requireObjectCoercible(it));
        };
      }
    });
    var require_object_get_own_property_descriptor = __commonJS({
      "node_modules/core-js/internals/object-get-own-property-descriptor.js"(exports) {
        "use strict";
        var DESCRIPTORS = require_descriptors();
        var call = require_function_call();
        var propertyIsEnumerableModule = require_object_property_is_enumerable();
        var createPropertyDescriptor = require_create_property_descriptor();
        var toIndexedObject = require_to_indexed_object();
        var toPropertyKey = require_to_property_key();
        var hasOwn = require_has_own_property();
        var IE8_DOM_DEFINE = require_ie8_dom_define();
        var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
        exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
          O = toIndexedObject(O);
          P = toPropertyKey(P);
          if (IE8_DOM_DEFINE)
            try {
              return $getOwnPropertyDescriptor(O, P);
            } catch (error) {
            }
          if (hasOwn(O, P))
            return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
        };
      }
    });
    var require_to_absolute_index = __commonJS({
      "node_modules/core-js/internals/to-absolute-index.js"(exports, module) {
        "use strict";
        var toIntegerOrInfinity = require_to_integer_or_infinity();
        var max = Math.max;
        var min = Math.min;
        module.exports = function(index, length) {
          var integer = toIntegerOrInfinity(index);
          return integer < 0 ? max(integer + length, 0) : min(integer, length);
        };
      }
    });
    var require_array_includes = __commonJS({
      "node_modules/core-js/internals/array-includes.js"(exports, module) {
        "use strict";
        var toIndexedObject = require_to_indexed_object();
        var toAbsoluteIndex = require_to_absolute_index();
        var lengthOfArrayLike = require_length_of_array_like();
        var createMethod = function(IS_INCLUDES) {
          return function($this, el, fromIndex) {
            var O = toIndexedObject($this);
            var length = lengthOfArrayLike(O);
            if (length === 0)
              return !IS_INCLUDES && -1;
            var index = toAbsoluteIndex(fromIndex, length);
            var value;
            if (IS_INCLUDES && el !== el)
              while (length > index) {
                value = O[index++];
                if (value !== value)
                  return true;
              }
            else
              for (; length > index; index++) {
                if ((IS_INCLUDES || index in O) && O[index] === el)
                  return IS_INCLUDES || index || 0;
              }
            return !IS_INCLUDES && -1;
          };
        };
        module.exports = {
          includes: createMethod(true),
          indexOf: createMethod(false)
        };
      }
    });
    var require_object_keys_internal = __commonJS({
      "node_modules/core-js/internals/object-keys-internal.js"(exports, module) {
        "use strict";
        var uncurryThis = require_function_uncurry_this();
        var hasOwn = require_has_own_property();
        var toIndexedObject = require_to_indexed_object();
        var indexOf = require_array_includes().indexOf;
        var hiddenKeys = require_hidden_keys();
        var push = uncurryThis([].push);
        module.exports = function(object, names) {
          var O = toIndexedObject(object);
          var i = 0;
          var result = [];
          var key;
          for (key in O)
            !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
          while (names.length > i)
            if (hasOwn(O, key = names[i++])) {
              ~indexOf(result, key) || push(result, key);
            }
          return result;
        };
      }
    });
    var require_enum_bug_keys = __commonJS({
      "node_modules/core-js/internals/enum-bug-keys.js"(exports, module) {
        "use strict";
        module.exports = [
          "constructor",
          "hasOwnProperty",
          "isPrototypeOf",
          "propertyIsEnumerable",
          "toLocaleString",
          "toString",
          "valueOf"
        ];
      }
    });
    var require_object_get_own_property_names = __commonJS({
      "node_modules/core-js/internals/object-get-own-property-names.js"(exports) {
        "use strict";
        var internalObjectKeys = require_object_keys_internal();
        var enumBugKeys = require_enum_bug_keys();
        var hiddenKeys = enumBugKeys.concat("length", "prototype");
        exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
          return internalObjectKeys(O, hiddenKeys);
        };
      }
    });
    var require_object_get_own_property_symbols = __commonJS({
      "node_modules/core-js/internals/object-get-own-property-symbols.js"(exports) {
        "use strict";
        exports.f = Object.getOwnPropertySymbols;
      }
    });
    var require_own_keys = __commonJS({
      "node_modules/core-js/internals/own-keys.js"(exports, module) {
        "use strict";
        var getBuiltIn = require_get_built_in();
        var uncurryThis = require_function_uncurry_this();
        var getOwnPropertyNamesModule = require_object_get_own_property_names();
        var getOwnPropertySymbolsModule = require_object_get_own_property_symbols();
        var anObject = require_an_object();
        var concat = uncurryThis([].concat);
        module.exports = getBuiltIn("Reflect", "ownKeys") || function ownKeys(it) {
          var keys = getOwnPropertyNamesModule.f(anObject(it));
          var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
          return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
        };
      }
    });
    var require_copy_constructor_properties = __commonJS({
      "node_modules/core-js/internals/copy-constructor-properties.js"(exports, module) {
        "use strict";
        var hasOwn = require_has_own_property();
        var ownKeys = require_own_keys();
        var getOwnPropertyDescriptorModule = require_object_get_own_property_descriptor();
        var definePropertyModule = require_object_define_property();
        module.exports = function(target, source, exceptions) {
          var keys = ownKeys(source);
          var defineProperty = definePropertyModule.f;
          var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
          for (var i = 0; i < keys.length; i++) {
            var key = keys[i];
            if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) {
              defineProperty(target, key, getOwnPropertyDescriptor(source, key));
            }
          }
        };
      }
    });
    var require_is_forced = __commonJS({
      "node_modules/core-js/internals/is-forced.js"(exports, module) {
        "use strict";
        var fails = require_fails();
        var isCallable = require_is_callable();
        var replacement = /#|\.prototype\./;
        var isForced = function(feature, detection) {
          var value = data[normalize(feature)];
          return value === POLYFILL ? true : value === NATIVE ? false : isCallable(detection) ? fails(detection) : !!detection;
        };
        var normalize = isForced.normalize = function(string) {
          return String(string).replace(replacement, ".").toLowerCase();
        };
        var data = isForced.data = {};
        var NATIVE = isForced.NATIVE = "N";
        var POLYFILL = isForced.POLYFILL = "P";
        module.exports = isForced;
      }
    });
    var require_export = __commonJS({
      "node_modules/core-js/internals/export.js"(exports, module) {
        "use strict";
        var global3 = require_global();
        var getOwnPropertyDescriptor = require_object_get_own_property_descriptor().f;
        var createNonEnumerableProperty = require_create_non_enumerable_property();
        var defineBuiltIn = require_define_built_in();
        var defineGlobalProperty = require_define_global_property();
        var copyConstructorProperties = require_copy_constructor_properties();
        var isForced = require_is_forced();
        module.exports = function(options, source) {
          var TARGET = options.target;
          var GLOBAL = options.global;
          var STATIC = options.stat;
          var FORCED, target, key, targetProperty, sourceProperty, descriptor;
          if (GLOBAL) {
            target = global3;
          } else if (STATIC) {
            target = global3[TARGET] || defineGlobalProperty(TARGET, {});
          } else {
            target = global3[TARGET] && global3[TARGET].prototype;
          }
          if (target)
            for (key in source) {
              sourceProperty = source[key];
              if (options.dontCallGetSet) {
                descriptor = getOwnPropertyDescriptor(target, key);
                targetProperty = descriptor && descriptor.value;
              } else
                targetProperty = target[key];
              FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? "." : "#") + key, options.forced);
              if (!FORCED && targetProperty !== void 0) {
                if (typeof sourceProperty == typeof targetProperty)
                  continue;
                copyConstructorProperties(sourceProperty, targetProperty);
              }
              if (options.sham || targetProperty && targetProperty.sham) {
                createNonEnumerableProperty(sourceProperty, "sham", true);
              }
              defineBuiltIn(target, key, sourceProperty, options);
            }
        };
      }
    });
    var require_to_string = __commonJS({
      "node_modules/core-js/internals/to-string.js"(exports, module) {
        "use strict";
        var classof = require_classof();
        var $String = String;
        module.exports = function(argument) {
          if (classof(argument) === "Symbol")
            throw new TypeError("Cannot convert a Symbol value to a string");
          return $String(argument);
        };
      }
    });
    var require_whitespaces = __commonJS({
      "node_modules/core-js/internals/whitespaces.js"(exports, module) {
        "use strict";
        module.exports = "	\n\v\f\r \xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF";
      }
    });
    var require_string_trim = __commonJS({
      "node_modules/core-js/internals/string-trim.js"(exports, module) {
        "use strict";
        var uncurryThis = require_function_uncurry_this();
        var requireObjectCoercible = require_require_object_coercible();
        var toString = require_to_string();
        var whitespaces = require_whitespaces();
        var replace = uncurryThis("".replace);
        var ltrim = RegExp("^[" + whitespaces + "]+");
        var rtrim = RegExp("(^|[^" + whitespaces + "])[" + whitespaces + "]+$");
        var createMethod = function(TYPE) {
          return function($this) {
            var string = toString(requireObjectCoercible($this));
            if (TYPE & 1)
              string = replace(string, ltrim, "");
            if (TYPE & 2)
              string = replace(string, rtrim, "$1");
            return string;
          };
        };
        module.exports = {
          start: createMethod(1),
          end: createMethod(2),
          trim: createMethod(3)
        };
      }
    });
    var require_number_parse_int = __commonJS({
      "node_modules/core-js/internals/number-parse-int.js"(exports, module) {
        "use strict";
        var global3 = require_global();
        var fails = require_fails();
        var uncurryThis = require_function_uncurry_this();
        var toString = require_to_string();
        var trim = require_string_trim().trim;
        var whitespaces = require_whitespaces();
        var $parseInt = global3.parseInt;
        var Symbol2 = global3.Symbol;
        var ITERATOR = Symbol2 && Symbol2.iterator;
        var hex = /^[+-]?0x/i;
        var exec = uncurryThis(hex.exec);
        var FORCED = $parseInt(whitespaces + "08") !== 8 || $parseInt(whitespaces + "0x16") !== 22 || ITERATOR && !fails(function() {
          $parseInt(Object(ITERATOR));
        });
        module.exports = FORCED ? function parseInt2(string, radix) {
          var S = trim(toString(string));
          return $parseInt(S, radix >>> 0 || (exec(hex, S) ? 16 : 10));
        } : $parseInt;
      }
    });
    var require_es_parse_int = __commonJS({
      "node_modules/core-js/modules/es.parse-int.js"() {
        "use strict";
        var $2 = require_export();
        var $parseInt = require_number_parse_int();
        $2({ global: true, forced: parseInt !== $parseInt }, {
          parseInt: $parseInt
        });
      }
    });
    var require_object_keys = __commonJS({
      "node_modules/core-js/internals/object-keys.js"(exports, module) {
        "use strict";
        var internalObjectKeys = require_object_keys_internal();
        var enumBugKeys = require_enum_bug_keys();
        module.exports = Object.keys || function keys(O) {
          return internalObjectKeys(O, enumBugKeys);
        };
      }
    });
    var require_object_assign = __commonJS({
      "node_modules/core-js/internals/object-assign.js"(exports, module) {
        "use strict";
        var DESCRIPTORS = require_descriptors();
        var uncurryThis = require_function_uncurry_this();
        var call = require_function_call();
        var fails = require_fails();
        var objectKeys = require_object_keys();
        var getOwnPropertySymbolsModule = require_object_get_own_property_symbols();
        var propertyIsEnumerableModule = require_object_property_is_enumerable();
        var toObject = require_to_object();
        var IndexedObject = require_indexed_object();
        var $assign = Object.assign;
        var defineProperty = Object.defineProperty;
        var concat = uncurryThis([].concat);
        module.exports = !$assign || fails(function() {
          if (DESCRIPTORS && $assign({ b: 1 }, $assign(defineProperty({}, "a", {
            enumerable: true,
            get: function() {
              defineProperty(this, "b", {
                value: 3,
                enumerable: false
              });
            }
          }), { b: 2 })).b !== 1)
            return true;
          var A = {};
          var B = {};
          var symbol = Symbol("assign detection");
          var alphabet = "abcdefghijklmnopqrst";
          A[symbol] = 7;
          alphabet.split("").forEach(function(chr) {
            B[chr] = chr;
          });
          return $assign({}, A)[symbol] !== 7 || objectKeys($assign({}, B)).join("") !== alphabet;
        }) ? function assign(target, source) {
          var T = toObject(target);
          var argumentsLength = arguments.length;
          var index = 1;
          var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
          var propertyIsEnumerable = propertyIsEnumerableModule.f;
          while (argumentsLength > index) {
            var S = IndexedObject(arguments[index++]);
            var keys = getOwnPropertySymbols ? concat(objectKeys(S), getOwnPropertySymbols(S)) : objectKeys(S);
            var length = keys.length;
            var j = 0;
            var key;
            while (length > j) {
              key = keys[j++];
              if (!DESCRIPTORS || call(propertyIsEnumerable, S, key))
                T[key] = S[key];
            }
          }
          return T;
        } : $assign;
      }
    });
    var require_es_object_assign = __commonJS({
      "node_modules/core-js/modules/es.object.assign.js"() {
        "use strict";
        var $2 = require_export();
        var assign = require_object_assign();
        $2({ target: "Object", stat: true, arity: 2, forced: Object.assign !== assign }, {
          assign
        });
      }
    });
    var require_array_method_has_species_support = __commonJS({
      "node_modules/core-js/internals/array-method-has-species-support.js"(exports, module) {
        "use strict";
        var fails = require_fails();
        var wellKnownSymbol = require_well_known_symbol();
        var V8_VERSION = require_engine_v8_version();
        var SPECIES = wellKnownSymbol("species");
        module.exports = function(METHOD_NAME) {
          return V8_VERSION >= 51 || !fails(function() {
            var array = [];
            var constructor = array.constructor = {};
            constructor[SPECIES] = function() {
              return { foo: 1 };
            };
            return array[METHOD_NAME](Boolean).foo !== 1;
          });
        };
      }
    });
    var require_es_array_filter = __commonJS({
      "node_modules/core-js/modules/es.array.filter.js"() {
        "use strict";
        var $2 = require_export();
        var $filter = require_array_iteration().filter;
        var arrayMethodHasSpeciesSupport = require_array_method_has_species_support();
        var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport("filter");
        $2({ target: "Array", proto: true, forced: !HAS_SPECIES_SUPPORT }, {
          filter: function filter(callbackfn) {
            return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : void 0);
          }
        });
      }
    });
    var require_object_define_properties = __commonJS({
      "node_modules/core-js/internals/object-define-properties.js"(exports) {
        "use strict";
        var DESCRIPTORS = require_descriptors();
        var V8_PROTOTYPE_DEFINE_BUG = require_v8_prototype_define_bug();
        var definePropertyModule = require_object_define_property();
        var anObject = require_an_object();
        var toIndexedObject = require_to_indexed_object();
        var objectKeys = require_object_keys();
        exports.f = DESCRIPTORS && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
          anObject(O);
          var props = toIndexedObject(Properties);
          var keys = objectKeys(Properties);
          var length = keys.length;
          var index = 0;
          var key;
          while (length > index)
            definePropertyModule.f(O, key = keys[index++], props[key]);
          return O;
        };
      }
    });
    var require_html = __commonJS({
      "node_modules/core-js/internals/html.js"(exports, module) {
        "use strict";
        var getBuiltIn = require_get_built_in();
        module.exports = getBuiltIn("document", "documentElement");
      }
    });
    var require_object_create = __commonJS({
      "node_modules/core-js/internals/object-create.js"(exports, module) {
        "use strict";
        var anObject = require_an_object();
        var definePropertiesModule = require_object_define_properties();
        var enumBugKeys = require_enum_bug_keys();
        var hiddenKeys = require_hidden_keys();
        var html = require_html();
        var documentCreateElement = require_document_create_element();
        var sharedKey = require_shared_key();
        var GT = ">";
        var LT = "<";
        var PROTOTYPE = "prototype";
        var SCRIPT = "script";
        var IE_PROTO = sharedKey("IE_PROTO");
        var EmptyConstructor = function() {
        };
        var scriptTag = function(content) {
          return LT + SCRIPT + GT + content + LT + "/" + SCRIPT + GT;
        };
        var NullProtoObjectViaActiveX = function(activeXDocument2) {
          activeXDocument2.write(scriptTag(""));
          activeXDocument2.close();
          var temp = activeXDocument2.parentWindow.Object;
          activeXDocument2 = null;
          return temp;
        };
        var NullProtoObjectViaIFrame = function() {
          var iframe = documentCreateElement("iframe");
          var JS = "java" + SCRIPT + ":";
          var iframeDocument;
          iframe.style.display = "none";
          html.appendChild(iframe);
          iframe.src = String(JS);
          iframeDocument = iframe.contentWindow.document;
          iframeDocument.open();
          iframeDocument.write(scriptTag("document.F=Object"));
          iframeDocument.close();
          return iframeDocument.F;
        };
        var activeXDocument;
        var NullProtoObject = function() {
          try {
            activeXDocument = new ActiveXObject("htmlfile");
          } catch (error) {
          }
          NullProtoObject = typeof document != "undefined" ? document.domain && activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame() : NullProtoObjectViaActiveX(activeXDocument);
          var length = enumBugKeys.length;
          while (length--)
            delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
          return NullProtoObject();
        };
        hiddenKeys[IE_PROTO] = true;
        module.exports = Object.create || function create(O, Properties) {
          var result;
          if (O !== null) {
            EmptyConstructor[PROTOTYPE] = anObject(O);
            result = new EmptyConstructor();
            EmptyConstructor[PROTOTYPE] = null;
            result[IE_PROTO] = O;
          } else
            result = NullProtoObject();
          return Properties === void 0 ? result : definePropertiesModule.f(result, Properties);
        };
      }
    });
    var require_add_to_unscopables = __commonJS({
      "node_modules/core-js/internals/add-to-unscopables.js"(exports, module) {
        "use strict";
        var wellKnownSymbol = require_well_known_symbol();
        var create = require_object_create();
        var defineProperty = require_object_define_property().f;
        var UNSCOPABLES = wellKnownSymbol("unscopables");
        var ArrayPrototype = Array.prototype;
        if (ArrayPrototype[UNSCOPABLES] === void 0) {
          defineProperty(ArrayPrototype, UNSCOPABLES, {
            configurable: true,
            value: create(null)
          });
        }
        module.exports = function(key) {
          ArrayPrototype[UNSCOPABLES][key] = true;
        };
      }
    });
    var require_iterators = __commonJS({
      "node_modules/core-js/internals/iterators.js"(exports, module) {
        "use strict";
        module.exports = {};
      }
    });
    var require_correct_prototype_getter = __commonJS({
      "node_modules/core-js/internals/correct-prototype-getter.js"(exports, module) {
        "use strict";
        var fails = require_fails();
        module.exports = !fails(function() {
          function F() {
          }
          F.prototype.constructor = null;
          return Object.getPrototypeOf(new F()) !== F.prototype;
        });
      }
    });
    var require_object_get_prototype_of = __commonJS({
      "node_modules/core-js/internals/object-get-prototype-of.js"(exports, module) {
        "use strict";
        var hasOwn = require_has_own_property();
        var isCallable = require_is_callable();
        var toObject = require_to_object();
        var sharedKey = require_shared_key();
        var CORRECT_PROTOTYPE_GETTER = require_correct_prototype_getter();
        var IE_PROTO = sharedKey("IE_PROTO");
        var $Object = Object;
        var ObjectPrototype = $Object.prototype;
        module.exports = CORRECT_PROTOTYPE_GETTER ? $Object.getPrototypeOf : function(O) {
          var object = toObject(O);
          if (hasOwn(object, IE_PROTO))
            return object[IE_PROTO];
          var constructor = object.constructor;
          if (isCallable(constructor) && object instanceof constructor) {
            return constructor.prototype;
          }
          return object instanceof $Object ? ObjectPrototype : null;
        };
      }
    });
    var require_iterators_core = __commonJS({
      "node_modules/core-js/internals/iterators-core.js"(exports, module) {
        "use strict";
        var fails = require_fails();
        var isCallable = require_is_callable();
        var isObject = require_is_object();
        var create = require_object_create();
        var getPrototypeOf = require_object_get_prototype_of();
        var defineBuiltIn = require_define_built_in();
        var wellKnownSymbol = require_well_known_symbol();
        var IS_PURE = require_is_pure();
        var ITERATOR = wellKnownSymbol("iterator");
        var BUGGY_SAFARI_ITERATORS = false;
        var IteratorPrototype;
        var PrototypeOfArrayIteratorPrototype;
        var arrayIterator;
        if ([].keys) {
          arrayIterator = [].keys();
          if (!("next" in arrayIterator))
            BUGGY_SAFARI_ITERATORS = true;
          else {
            PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
            if (PrototypeOfArrayIteratorPrototype !== Object.prototype)
              IteratorPrototype = PrototypeOfArrayIteratorPrototype;
          }
        }
        var NEW_ITERATOR_PROTOTYPE = !isObject(IteratorPrototype) || fails(function() {
          var test = {};
          return IteratorPrototype[ITERATOR].call(test) !== test;
        });
        if (NEW_ITERATOR_PROTOTYPE)
          IteratorPrototype = {};
        else if (IS_PURE)
          IteratorPrototype = create(IteratorPrototype);
        if (!isCallable(IteratorPrototype[ITERATOR])) {
          defineBuiltIn(IteratorPrototype, ITERATOR, function() {
            return this;
          });
        }
        module.exports = {
          IteratorPrototype,
          BUGGY_SAFARI_ITERATORS
        };
      }
    });
    var require_set_to_string_tag = __commonJS({
      "node_modules/core-js/internals/set-to-string-tag.js"(exports, module) {
        "use strict";
        var defineProperty = require_object_define_property().f;
        var hasOwn = require_has_own_property();
        var wellKnownSymbol = require_well_known_symbol();
        var TO_STRING_TAG = wellKnownSymbol("toStringTag");
        module.exports = function(target, TAG, STATIC) {
          if (target && !STATIC)
            target = target.prototype;
          if (target && !hasOwn(target, TO_STRING_TAG)) {
            defineProperty(target, TO_STRING_TAG, { configurable: true, value: TAG });
          }
        };
      }
    });
    var require_iterator_create_constructor = __commonJS({
      "node_modules/core-js/internals/iterator-create-constructor.js"(exports, module) {
        "use strict";
        var IteratorPrototype = require_iterators_core().IteratorPrototype;
        var create = require_object_create();
        var createPropertyDescriptor = require_create_property_descriptor();
        var setToStringTag = require_set_to_string_tag();
        var Iterators = require_iterators();
        var returnThis = function() {
          return this;
        };
        module.exports = function(IteratorConstructor, NAME, next, ENUMERABLE_NEXT) {
          var TO_STRING_TAG = NAME + " Iterator";
          IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(+!ENUMERABLE_NEXT, next) });
          setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
          Iterators[TO_STRING_TAG] = returnThis;
          return IteratorConstructor;
        };
      }
    });
    var require_function_uncurry_this_accessor = __commonJS({
      "node_modules/core-js/internals/function-uncurry-this-accessor.js"(exports, module) {
        "use strict";
        var uncurryThis = require_function_uncurry_this();
        var aCallable = require_a_callable();
        module.exports = function(object, key, method) {
          try {
            return uncurryThis(aCallable(Object.getOwnPropertyDescriptor(object, key)[method]));
          } catch (error) {
          }
        };
      }
    });
    var require_is_possible_prototype = __commonJS({
      "node_modules/core-js/internals/is-possible-prototype.js"(exports, module) {
        "use strict";
        var isObject = require_is_object();
        module.exports = function(argument) {
          return isObject(argument) || argument === null;
        };
      }
    });
    var require_a_possible_prototype = __commonJS({
      "node_modules/core-js/internals/a-possible-prototype.js"(exports, module) {
        "use strict";
        var isPossiblePrototype = require_is_possible_prototype();
        var $String = String;
        var $TypeError = TypeError;
        module.exports = function(argument) {
          if (isPossiblePrototype(argument))
            return argument;
          throw new $TypeError("Can't set " + $String(argument) + " as a prototype");
        };
      }
    });
    var require_object_set_prototype_of = __commonJS({
      "node_modules/core-js/internals/object-set-prototype-of.js"(exports, module) {
        "use strict";
        var uncurryThisAccessor = require_function_uncurry_this_accessor();
        var isObject = require_is_object();
        var requireObjectCoercible = require_require_object_coercible();
        var aPossiblePrototype = require_a_possible_prototype();
        module.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
          var CORRECT_SETTER = false;
          var test = {};
          var setter;
          try {
            setter = uncurryThisAccessor(Object.prototype, "__proto__", "set");
            setter(test, []);
            CORRECT_SETTER = test instanceof Array;
          } catch (error) {
          }
          return function setPrototypeOf(O, proto) {
            requireObjectCoercible(O);
            aPossiblePrototype(proto);
            if (!isObject(O))
              return O;
            if (CORRECT_SETTER)
              setter(O, proto);
            else
              O.__proto__ = proto;
            return O;
          };
        }() : void 0);
      }
    });
    var require_iterator_define = __commonJS({
      "node_modules/core-js/internals/iterator-define.js"(exports, module) {
        "use strict";
        var $2 = require_export();
        var call = require_function_call();
        var IS_PURE = require_is_pure();
        var FunctionName = require_function_name();
        var isCallable = require_is_callable();
        var createIteratorConstructor = require_iterator_create_constructor();
        var getPrototypeOf = require_object_get_prototype_of();
        var setPrototypeOf = require_object_set_prototype_of();
        var setToStringTag = require_set_to_string_tag();
        var createNonEnumerableProperty = require_create_non_enumerable_property();
        var defineBuiltIn = require_define_built_in();
        var wellKnownSymbol = require_well_known_symbol();
        var Iterators = require_iterators();
        var IteratorsCore = require_iterators_core();
        var PROPER_FUNCTION_NAME = FunctionName.PROPER;
        var CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;
        var IteratorPrototype = IteratorsCore.IteratorPrototype;
        var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
        var ITERATOR = wellKnownSymbol("iterator");
        var KEYS = "keys";
        var VALUES = "values";
        var ENTRIES = "entries";
        var returnThis = function() {
          return this;
        };
        module.exports = function(Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
          createIteratorConstructor(IteratorConstructor, NAME, next);
          var getIterationMethod = function(KIND) {
            if (KIND === DEFAULT && defaultIterator)
              return defaultIterator;
            if (!BUGGY_SAFARI_ITERATORS && KIND && KIND in IterablePrototype)
              return IterablePrototype[KIND];
            switch (KIND) {
              case KEYS:
                return function keys() {
                  return new IteratorConstructor(this, KIND);
                };
              case VALUES:
                return function values() {
                  return new IteratorConstructor(this, KIND);
                };
              case ENTRIES:
                return function entries() {
                  return new IteratorConstructor(this, KIND);
                };
            }
            return function() {
              return new IteratorConstructor(this);
            };
          };
          var TO_STRING_TAG = NAME + " Iterator";
          var INCORRECT_VALUES_NAME = false;
          var IterablePrototype = Iterable.prototype;
          var nativeIterator = IterablePrototype[ITERATOR] || IterablePrototype["@@iterator"] || DEFAULT && IterablePrototype[DEFAULT];
          var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
          var anyNativeIterator = NAME === "Array" ? IterablePrototype.entries || nativeIterator : nativeIterator;
          var CurrentIteratorPrototype, methods, KEY;
          if (anyNativeIterator) {
            CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
            if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
              if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
                if (setPrototypeOf) {
                  setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
                } else if (!isCallable(CurrentIteratorPrototype[ITERATOR])) {
                  defineBuiltIn(CurrentIteratorPrototype, ITERATOR, returnThis);
                }
              }
              setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
              if (IS_PURE)
                Iterators[TO_STRING_TAG] = returnThis;
            }
          }
          if (PROPER_FUNCTION_NAME && DEFAULT === VALUES && nativeIterator && nativeIterator.name !== VALUES) {
            if (!IS_PURE && CONFIGURABLE_FUNCTION_NAME) {
              createNonEnumerableProperty(IterablePrototype, "name", VALUES);
            } else {
              INCORRECT_VALUES_NAME = true;
              defaultIterator = function values() {
                return call(nativeIterator, this);
              };
            }
          }
          if (DEFAULT) {
            methods = {
              values: getIterationMethod(VALUES),
              keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
              entries: getIterationMethod(ENTRIES)
            };
            if (FORCED)
              for (KEY in methods) {
                if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
                  defineBuiltIn(IterablePrototype, KEY, methods[KEY]);
                }
              }
            else
              $2({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
          }
          if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
            defineBuiltIn(IterablePrototype, ITERATOR, defaultIterator, { name: DEFAULT });
          }
          Iterators[NAME] = defaultIterator;
          return methods;
        };
      }
    });
    var require_create_iter_result_object = __commonJS({
      "node_modules/core-js/internals/create-iter-result-object.js"(exports, module) {
        "use strict";
        module.exports = function(value, done) {
          return { value, done };
        };
      }
    });
    var require_es_array_iterator = __commonJS({
      "node_modules/core-js/modules/es.array.iterator.js"(exports, module) {
        "use strict";
        var toIndexedObject = require_to_indexed_object();
        var addToUnscopables = require_add_to_unscopables();
        var Iterators = require_iterators();
        var InternalStateModule = require_internal_state();
        var defineProperty = require_object_define_property().f;
        var defineIterator = require_iterator_define();
        var createIterResultObject = require_create_iter_result_object();
        var IS_PURE = require_is_pure();
        var DESCRIPTORS = require_descriptors();
        var ARRAY_ITERATOR = "Array Iterator";
        var setInternalState = InternalStateModule.set;
        var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);
        module.exports = defineIterator(Array, "Array", function(iterated, kind) {
          setInternalState(this, {
            type: ARRAY_ITERATOR,
            target: toIndexedObject(iterated),
            index: 0,
            kind
          });
        }, function() {
          var state = getInternalState(this);
          var target = state.target;
          var index = state.index++;
          if (!target || index >= target.length) {
            state.target = void 0;
            return createIterResultObject(void 0, true);
          }
          switch (state.kind) {
            case "keys":
              return createIterResultObject(index, false);
            case "values":
              return createIterResultObject(target[index], false);
          }
          return createIterResultObject([index, target[index]], false);
        }, "values");
        var values = Iterators.Arguments = Iterators.Array;
        addToUnscopables("keys");
        addToUnscopables("values");
        addToUnscopables("entries");
        if (!IS_PURE && DESCRIPTORS && values.name !== "values")
          try {
            defineProperty(values, "name", { value: "values" });
          } catch (error) {
          }
      }
    });
    var require_string_multibyte = __commonJS({
      "node_modules/core-js/internals/string-multibyte.js"(exports, module) {
        "use strict";
        var uncurryThis = require_function_uncurry_this();
        var toIntegerOrInfinity = require_to_integer_or_infinity();
        var toString = require_to_string();
        var requireObjectCoercible = require_require_object_coercible();
        var charAt = uncurryThis("".charAt);
        var charCodeAt = uncurryThis("".charCodeAt);
        var stringSlice = uncurryThis("".slice);
        var createMethod = function(CONVERT_TO_STRING) {
          return function($this, pos) {
            var S = toString(requireObjectCoercible($this));
            var position = toIntegerOrInfinity(pos);
            var size2 = S.length;
            var first, second;
            if (position < 0 || position >= size2)
              return CONVERT_TO_STRING ? "" : void 0;
            first = charCodeAt(S, position);
            return first < 55296 || first > 56319 || position + 1 === size2 || (second = charCodeAt(S, position + 1)) < 56320 || second > 57343 ? CONVERT_TO_STRING ? charAt(S, position) : first : CONVERT_TO_STRING ? stringSlice(S, position, position + 2) : (first - 55296 << 10) + (second - 56320) + 65536;
          };
        };
        module.exports = {
          codeAt: createMethod(false),
          charAt: createMethod(true)
        };
      }
    });
    var require_es_string_iterator = __commonJS({
      "node_modules/core-js/modules/es.string.iterator.js"() {
        "use strict";
        var charAt = require_string_multibyte().charAt;
        var toString = require_to_string();
        var InternalStateModule = require_internal_state();
        var defineIterator = require_iterator_define();
        var createIterResultObject = require_create_iter_result_object();
        var STRING_ITERATOR = "String Iterator";
        var setInternalState = InternalStateModule.set;
        var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);
        defineIterator(String, "String", function(iterated) {
          setInternalState(this, {
            type: STRING_ITERATOR,
            string: toString(iterated),
            index: 0
          });
        }, function next() {
          var state = getInternalState(this);
          var string = state.string;
          var index = state.index;
          var point;
          if (index >= string.length)
            return createIterResultObject(void 0, true);
          point = charAt(string, index);
          state.index += point.length;
          return createIterResultObject(point, false);
        });
      }
    });
    var require_freezing = __commonJS({
      "node_modules/core-js/internals/freezing.js"(exports, module) {
        "use strict";
        var fails = require_fails();
        module.exports = !fails(function() {
          return Object.isExtensible(Object.preventExtensions({}));
        });
      }
    });
    var require_define_built_ins = __commonJS({
      "node_modules/core-js/internals/define-built-ins.js"(exports, module) {
        "use strict";
        var defineBuiltIn = require_define_built_in();
        module.exports = function(target, src, options) {
          for (var key in src)
            defineBuiltIn(target, key, src[key], options);
          return target;
        };
      }
    });
    var require_array_slice = __commonJS({
      "node_modules/core-js/internals/array-slice.js"(exports, module) {
        "use strict";
        var uncurryThis = require_function_uncurry_this();
        module.exports = uncurryThis([].slice);
      }
    });
    var require_object_get_own_property_names_external = __commonJS({
      "node_modules/core-js/internals/object-get-own-property-names-external.js"(exports, module) {
        "use strict";
        var classof = require_classof_raw();
        var toIndexedObject = require_to_indexed_object();
        var $getOwnPropertyNames = require_object_get_own_property_names().f;
        var arraySlice = require_array_slice();
        var windowNames = typeof window == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
        var getWindowNames = function(it) {
          try {
            return $getOwnPropertyNames(it);
          } catch (error) {
            return arraySlice(windowNames);
          }
        };
        module.exports.f = function getOwnPropertyNames(it) {
          return windowNames && classof(it) === "Window" ? getWindowNames(it) : $getOwnPropertyNames(toIndexedObject(it));
        };
      }
    });
    var require_array_buffer_non_extensible = __commonJS({
      "node_modules/core-js/internals/array-buffer-non-extensible.js"(exports, module) {
        "use strict";
        var fails = require_fails();
        module.exports = fails(function() {
          if (typeof ArrayBuffer == "function") {
            var buffer = new ArrayBuffer(8);
            if (Object.isExtensible(buffer))
              Object.defineProperty(buffer, "a", { value: 8 });
          }
        });
      }
    });
    var require_object_is_extensible = __commonJS({
      "node_modules/core-js/internals/object-is-extensible.js"(exports, module) {
        "use strict";
        var fails = require_fails();
        var isObject = require_is_object();
        var classof = require_classof_raw();
        var ARRAY_BUFFER_NON_EXTENSIBLE = require_array_buffer_non_extensible();
        var $isExtensible = Object.isExtensible;
        var FAILS_ON_PRIMITIVES = fails(function() {
          $isExtensible(1);
        });
        module.exports = FAILS_ON_PRIMITIVES || ARRAY_BUFFER_NON_EXTENSIBLE ? function isExtensible(it) {
          if (!isObject(it))
            return false;
          if (ARRAY_BUFFER_NON_EXTENSIBLE && classof(it) === "ArrayBuffer")
            return false;
          return $isExtensible ? $isExtensible(it) : true;
        } : $isExtensible;
      }
    });
    var require_internal_metadata = __commonJS({
      "node_modules/core-js/internals/internal-metadata.js"(exports, module) {
        "use strict";
        var $2 = require_export();
        var uncurryThis = require_function_uncurry_this();
        var hiddenKeys = require_hidden_keys();
        var isObject = require_is_object();
        var hasOwn = require_has_own_property();
        var defineProperty = require_object_define_property().f;
        var getOwnPropertyNamesModule = require_object_get_own_property_names();
        var getOwnPropertyNamesExternalModule = require_object_get_own_property_names_external();
        var isExtensible = require_object_is_extensible();
        var uid = require_uid();
        var FREEZING = require_freezing();
        var REQUIRED = false;
        var METADATA = uid("meta");
        var id = 0;
        var setMetadata = function(it) {
          defineProperty(it, METADATA, { value: {
            objectID: "O" + id++,
            weakData: {}
          } });
        };
        var fastKey = function(it, create) {
          if (!isObject(it))
            return typeof it == "symbol" ? it : (typeof it == "string" ? "S" : "P") + it;
          if (!hasOwn(it, METADATA)) {
            if (!isExtensible(it))
              return "F";
            if (!create)
              return "E";
            setMetadata(it);
          }
          return it[METADATA].objectID;
        };
        var getWeakData = function(it, create) {
          if (!hasOwn(it, METADATA)) {
            if (!isExtensible(it))
              return true;
            if (!create)
              return false;
            setMetadata(it);
          }
          return it[METADATA].weakData;
        };
        var onFreeze = function(it) {
          if (FREEZING && REQUIRED && isExtensible(it) && !hasOwn(it, METADATA))
            setMetadata(it);
          return it;
        };
        var enable = function() {
          meta.enable = function() {
          };
          REQUIRED = true;
          var getOwnPropertyNames = getOwnPropertyNamesModule.f;
          var splice = uncurryThis([].splice);
          var test = {};
          test[METADATA] = 1;
          if (getOwnPropertyNames(test).length) {
            getOwnPropertyNamesModule.f = function(it) {
              var result = getOwnPropertyNames(it);
              for (var i = 0, length = result.length; i < length; i++) {
                if (result[i] === METADATA) {
                  splice(result, i, 1);
                  break;
                }
              }
              return result;
            };
            $2({ target: "Object", stat: true, forced: true }, {
              getOwnPropertyNames: getOwnPropertyNamesExternalModule.f
            });
          }
        };
        var meta = module.exports = {
          enable,
          fastKey,
          getWeakData,
          onFreeze
        };
        hiddenKeys[METADATA] = true;
      }
    });
    var require_is_array_iterator_method = __commonJS({
      "node_modules/core-js/internals/is-array-iterator-method.js"(exports, module) {
        "use strict";
        var wellKnownSymbol = require_well_known_symbol();
        var Iterators = require_iterators();
        var ITERATOR = wellKnownSymbol("iterator");
        var ArrayPrototype = Array.prototype;
        module.exports = function(it) {
          return it !== void 0 && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
        };
      }
    });
    var require_get_iterator_method = __commonJS({
      "node_modules/core-js/internals/get-iterator-method.js"(exports, module) {
        "use strict";
        var classof = require_classof();
        var getMethod = require_get_method();
        var isNullOrUndefined = require_is_null_or_undefined();
        var Iterators = require_iterators();
        var wellKnownSymbol = require_well_known_symbol();
        var ITERATOR = wellKnownSymbol("iterator");
        module.exports = function(it) {
          if (!isNullOrUndefined(it))
            return getMethod(it, ITERATOR) || getMethod(it, "@@iterator") || Iterators[classof(it)];
        };
      }
    });
    var require_get_iterator = __commonJS({
      "node_modules/core-js/internals/get-iterator.js"(exports, module) {
        "use strict";
        var call = require_function_call();
        var aCallable = require_a_callable();
        var anObject = require_an_object();
        var tryToString = require_try_to_string();
        var getIteratorMethod = require_get_iterator_method();
        var $TypeError = TypeError;
        module.exports = function(argument, usingIterator) {
          var iteratorMethod = arguments.length < 2 ? getIteratorMethod(argument) : usingIterator;
          if (aCallable(iteratorMethod))
            return anObject(call(iteratorMethod, argument));
          throw new $TypeError(tryToString(argument) + " is not iterable");
        };
      }
    });
    var require_iterator_close = __commonJS({
      "node_modules/core-js/internals/iterator-close.js"(exports, module) {
        "use strict";
        var call = require_function_call();
        var anObject = require_an_object();
        var getMethod = require_get_method();
        module.exports = function(iterator, kind, value) {
          var innerResult, innerError;
          anObject(iterator);
          try {
            innerResult = getMethod(iterator, "return");
            if (!innerResult) {
              if (kind === "throw")
                throw value;
              return value;
            }
            innerResult = call(innerResult, iterator);
          } catch (error) {
            innerError = true;
            innerResult = error;
          }
          if (kind === "throw")
            throw value;
          if (innerError)
            throw innerResult;
          anObject(innerResult);
          return value;
        };
      }
    });
    var require_iterate = __commonJS({
      "node_modules/core-js/internals/iterate.js"(exports, module) {
        "use strict";
        var bind = require_function_bind_context();
        var call = require_function_call();
        var anObject = require_an_object();
        var tryToString = require_try_to_string();
        var isArrayIteratorMethod = require_is_array_iterator_method();
        var lengthOfArrayLike = require_length_of_array_like();
        var isPrototypeOf = require_object_is_prototype_of();
        var getIterator = require_get_iterator();
        var getIteratorMethod = require_get_iterator_method();
        var iteratorClose = require_iterator_close();
        var $TypeError = TypeError;
        var Result = function(stopped, result) {
          this.stopped = stopped;
          this.result = result;
        };
        var ResultPrototype = Result.prototype;
        module.exports = function(iterable, unboundFunction, options) {
          var that = options && options.that;
          var AS_ENTRIES = !!(options && options.AS_ENTRIES);
          var IS_RECORD = !!(options && options.IS_RECORD);
          var IS_ITERATOR = !!(options && options.IS_ITERATOR);
          var INTERRUPTED = !!(options && options.INTERRUPTED);
          var fn = bind(unboundFunction, that);
          var iterator, iterFn, index, length, result, next, step;
          var stop = function(condition) {
            if (iterator)
              iteratorClose(iterator, "normal", condition);
            return new Result(true, condition);
          };
          var callFn = function(value) {
            if (AS_ENTRIES) {
              anObject(value);
              return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
            }
            return INTERRUPTED ? fn(value, stop) : fn(value);
          };
          if (IS_RECORD) {
            iterator = iterable.iterator;
          } else if (IS_ITERATOR) {
            iterator = iterable;
          } else {
            iterFn = getIteratorMethod(iterable);
            if (!iterFn)
              throw new $TypeError(tryToString(iterable) + " is not iterable");
            if (isArrayIteratorMethod(iterFn)) {
              for (index = 0, length = lengthOfArrayLike(iterable); length > index; index++) {
                result = callFn(iterable[index]);
                if (result && isPrototypeOf(ResultPrototype, result))
                  return result;
              }
              return new Result(false);
            }
            iterator = getIterator(iterable, iterFn);
          }
          next = IS_RECORD ? iterable.next : iterator.next;
          while (!(step = call(next, iterator)).done) {
            try {
              result = callFn(step.value);
            } catch (error) {
              iteratorClose(iterator, "throw", error);
            }
            if (typeof result == "object" && result && isPrototypeOf(ResultPrototype, result))
              return result;
          }
          return new Result(false);
        };
      }
    });
    var require_an_instance = __commonJS({
      "node_modules/core-js/internals/an-instance.js"(exports, module) {
        "use strict";
        var isPrototypeOf = require_object_is_prototype_of();
        var $TypeError = TypeError;
        module.exports = function(it, Prototype) {
          if (isPrototypeOf(Prototype, it))
            return it;
          throw new $TypeError("Incorrect invocation");
        };
      }
    });
    var require_check_correctness_of_iteration = __commonJS({
      "node_modules/core-js/internals/check-correctness-of-iteration.js"(exports, module) {
        "use strict";
        var wellKnownSymbol = require_well_known_symbol();
        var ITERATOR = wellKnownSymbol("iterator");
        var SAFE_CLOSING = false;
        try {
          called = 0;
          iteratorWithReturn = {
            next: function() {
              return { done: !!called++ };
            },
            "return": function() {
              SAFE_CLOSING = true;
            }
          };
          iteratorWithReturn[ITERATOR] = function() {
            return this;
          };
          Array.from(iteratorWithReturn, function() {
            throw 2;
          });
        } catch (error) {
        }
        var called;
        var iteratorWithReturn;
        module.exports = function(exec, SKIP_CLOSING) {
          try {
            if (!SKIP_CLOSING && !SAFE_CLOSING)
              return false;
          } catch (error) {
            return false;
          }
          var ITERATION_SUPPORT = false;
          try {
            var object = {};
            object[ITERATOR] = function() {
              return {
                next: function() {
                  return { done: ITERATION_SUPPORT = true };
                }
              };
            };
            exec(object);
          } catch (error) {
          }
          return ITERATION_SUPPORT;
        };
      }
    });
    var require_inherit_if_required = __commonJS({
      "node_modules/core-js/internals/inherit-if-required.js"(exports, module) {
        "use strict";
        var isCallable = require_is_callable();
        var isObject = require_is_object();
        var setPrototypeOf = require_object_set_prototype_of();
        module.exports = function($this, dummy, Wrapper) {
          var NewTarget, NewTargetPrototype;
          if (setPrototypeOf && isCallable(NewTarget = dummy.constructor) && NewTarget !== Wrapper && isObject(NewTargetPrototype = NewTarget.prototype) && NewTargetPrototype !== Wrapper.prototype)
            setPrototypeOf($this, NewTargetPrototype);
          return $this;
        };
      }
    });
    var require_collection = __commonJS({
      "node_modules/core-js/internals/collection.js"(exports, module) {
        "use strict";
        var $2 = require_export();
        var global3 = require_global();
        var uncurryThis = require_function_uncurry_this();
        var isForced = require_is_forced();
        var defineBuiltIn = require_define_built_in();
        var InternalMetadataModule = require_internal_metadata();
        var iterate = require_iterate();
        var anInstance = require_an_instance();
        var isCallable = require_is_callable();
        var isNullOrUndefined = require_is_null_or_undefined();
        var isObject = require_is_object();
        var fails = require_fails();
        var checkCorrectnessOfIteration = require_check_correctness_of_iteration();
        var setToStringTag = require_set_to_string_tag();
        var inheritIfRequired = require_inherit_if_required();
        module.exports = function(CONSTRUCTOR_NAME, wrapper, common) {
          var IS_MAP = CONSTRUCTOR_NAME.indexOf("Map") !== -1;
          var IS_WEAK = CONSTRUCTOR_NAME.indexOf("Weak") !== -1;
          var ADDER = IS_MAP ? "set" : "add";
          var NativeConstructor = global3[CONSTRUCTOR_NAME];
          var NativePrototype = NativeConstructor && NativeConstructor.prototype;
          var Constructor = NativeConstructor;
          var exported = {};
          var fixMethod = function(KEY) {
            var uncurriedNativeMethod = uncurryThis(NativePrototype[KEY]);
            defineBuiltIn(
              NativePrototype,
              KEY,
              KEY === "add" ? function add(value) {
                uncurriedNativeMethod(this, value === 0 ? 0 : value);
                return this;
              } : KEY === "delete" ? function(key) {
                return IS_WEAK && !isObject(key) ? false : uncurriedNativeMethod(this, key === 0 ? 0 : key);
              } : KEY === "get" ? function get(key) {
                return IS_WEAK && !isObject(key) ? void 0 : uncurriedNativeMethod(this, key === 0 ? 0 : key);
              } : KEY === "has" ? function has(key) {
                return IS_WEAK && !isObject(key) ? false : uncurriedNativeMethod(this, key === 0 ? 0 : key);
              } : function set(key, value) {
                uncurriedNativeMethod(this, key === 0 ? 0 : key, value);
                return this;
              }
            );
          };
          var REPLACE = isForced(
            CONSTRUCTOR_NAME,
            !isCallable(NativeConstructor) || !(IS_WEAK || NativePrototype.forEach && !fails(function() {
              new NativeConstructor().entries().next();
            }))
          );
          if (REPLACE) {
            Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);
            InternalMetadataModule.enable();
          } else if (isForced(CONSTRUCTOR_NAME, true)) {
            var instance = new Constructor();
            var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) !== instance;
            var THROWS_ON_PRIMITIVES = fails(function() {
              instance.has(1);
            });
            var ACCEPT_ITERABLES = checkCorrectnessOfIteration(function(iterable) {
              new NativeConstructor(iterable);
            });
            var BUGGY_ZERO = !IS_WEAK && fails(function() {
              var $instance = new NativeConstructor();
              var index = 5;
              while (index--)
                $instance[ADDER](index, index);
              return !$instance.has(-0);
            });
            if (!ACCEPT_ITERABLES) {
              Constructor = wrapper(function(dummy, iterable) {
                anInstance(dummy, NativePrototype);
                var that = inheritIfRequired(new NativeConstructor(), dummy, Constructor);
                if (!isNullOrUndefined(iterable))
                  iterate(iterable, that[ADDER], { that, AS_ENTRIES: IS_MAP });
                return that;
              });
              Constructor.prototype = NativePrototype;
              NativePrototype.constructor = Constructor;
            }
            if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
              fixMethod("delete");
              fixMethod("has");
              IS_MAP && fixMethod("get");
            }
            if (BUGGY_ZERO || HASNT_CHAINING)
              fixMethod(ADDER);
            if (IS_WEAK && NativePrototype.clear)
              delete NativePrototype.clear;
          }
          exported[CONSTRUCTOR_NAME] = Constructor;
          $2({ global: true, constructor: true, forced: Constructor !== NativeConstructor }, exported);
          setToStringTag(Constructor, CONSTRUCTOR_NAME);
          if (!IS_WEAK)
            common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);
          return Constructor;
        };
      }
    });
    var require_collection_weak = __commonJS({
      "node_modules/core-js/internals/collection-weak.js"(exports, module) {
        "use strict";
        var uncurryThis = require_function_uncurry_this();
        var defineBuiltIns = require_define_built_ins();
        var getWeakData = require_internal_metadata().getWeakData;
        var anInstance = require_an_instance();
        var anObject = require_an_object();
        var isNullOrUndefined = require_is_null_or_undefined();
        var isObject = require_is_object();
        var iterate = require_iterate();
        var ArrayIterationModule = require_array_iteration();
        var hasOwn = require_has_own_property();
        var InternalStateModule = require_internal_state();
        var setInternalState = InternalStateModule.set;
        var internalStateGetterFor = InternalStateModule.getterFor;
        var find = ArrayIterationModule.find;
        var findIndex = ArrayIterationModule.findIndex;
        var splice = uncurryThis([].splice);
        var id = 0;
        var uncaughtFrozenStore = function(state) {
          return state.frozen || (state.frozen = new UncaughtFrozenStore());
        };
        var UncaughtFrozenStore = function() {
          this.entries = [];
        };
        var findUncaughtFrozen = function(store, key) {
          return find(store.entries, function(it) {
            return it[0] === key;
          });
        };
        UncaughtFrozenStore.prototype = {
          get: function(key) {
            var entry = findUncaughtFrozen(this, key);
            if (entry)
              return entry[1];
          },
          has: function(key) {
            return !!findUncaughtFrozen(this, key);
          },
          set: function(key, value) {
            var entry = findUncaughtFrozen(this, key);
            if (entry)
              entry[1] = value;
            else
              this.entries.push([key, value]);
          },
          "delete": function(key) {
            var index = findIndex(this.entries, function(it) {
              return it[0] === key;
            });
            if (~index)
              splice(this.entries, index, 1);
            return !!~index;
          }
        };
        module.exports = {
          getConstructor: function(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
            var Constructor = wrapper(function(that, iterable) {
              anInstance(that, Prototype);
              setInternalState(that, {
                type: CONSTRUCTOR_NAME,
                id: id++,
                frozen: void 0
              });
              if (!isNullOrUndefined(iterable))
                iterate(iterable, that[ADDER], { that, AS_ENTRIES: IS_MAP });
            });
            var Prototype = Constructor.prototype;
            var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);
            var define = function(that, key, value) {
              var state = getInternalState(that);
              var data = getWeakData(anObject(key), true);
              if (data === true)
                uncaughtFrozenStore(state).set(key, value);
              else
                data[state.id] = value;
              return that;
            };
            defineBuiltIns(Prototype, {
              "delete": function(key) {
                var state = getInternalState(this);
                if (!isObject(key))
                  return false;
                var data = getWeakData(key);
                if (data === true)
                  return uncaughtFrozenStore(state)["delete"](key);
                return data && hasOwn(data, state.id) && delete data[state.id];
              },
              has: function has(key) {
                var state = getInternalState(this);
                if (!isObject(key))
                  return false;
                var data = getWeakData(key);
                if (data === true)
                  return uncaughtFrozenStore(state).has(key);
                return data && hasOwn(data, state.id);
              }
            });
            defineBuiltIns(Prototype, IS_MAP ? {
              get: function get(key) {
                var state = getInternalState(this);
                if (isObject(key)) {
                  var data = getWeakData(key);
                  if (data === true)
                    return uncaughtFrozenStore(state).get(key);
                  return data ? data[state.id] : void 0;
                }
              },
              set: function set(key, value) {
                return define(this, key, value);
              }
            } : {
              add: function add(value) {
                return define(this, value, true);
              }
            });
            return Constructor;
          }
        };
      }
    });
    var require_es_weak_map_constructor = __commonJS({
      "node_modules/core-js/modules/es.weak-map.constructor.js"() {
        "use strict";
        var FREEZING = require_freezing();
        var global3 = require_global();
        var uncurryThis = require_function_uncurry_this();
        var defineBuiltIns = require_define_built_ins();
        var InternalMetadataModule = require_internal_metadata();
        var collection = require_collection();
        var collectionWeak = require_collection_weak();
        var isObject = require_is_object();
        var enforceInternalState = require_internal_state().enforce;
        var fails = require_fails();
        var NATIVE_WEAK_MAP = require_weak_map_basic_detection();
        var $Object = Object;
        var isArray = Array.isArray;
        var isExtensible = $Object.isExtensible;
        var isFrozen = $Object.isFrozen;
        var isSealed = $Object.isSealed;
        var freeze2 = $Object.freeze;
        var seal = $Object.seal;
        var IS_IE11 = !global3.ActiveXObject && "ActiveXObject" in global3;
        var InternalWeakMap;
        var wrapper = function(init) {
          return function WeakMap2() {
            return init(this, arguments.length ? arguments[0] : void 0);
          };
        };
        var $WeakMap = collection("WeakMap", wrapper, collectionWeak);
        var WeakMapPrototype = $WeakMap.prototype;
        var nativeSet = uncurryThis(WeakMapPrototype.set);
        var hasMSEdgeFreezingBug = function() {
          return FREEZING && fails(function() {
            var frozenArray = freeze2([]);
            nativeSet(new $WeakMap(), frozenArray, 1);
            return !isFrozen(frozenArray);
          });
        };
        if (NATIVE_WEAK_MAP) {
          if (IS_IE11) {
            InternalWeakMap = collectionWeak.getConstructor(wrapper, "WeakMap", true);
            InternalMetadataModule.enable();
            nativeDelete = uncurryThis(WeakMapPrototype["delete"]);
            nativeHas = uncurryThis(WeakMapPrototype.has);
            nativeGet = uncurryThis(WeakMapPrototype.get);
            defineBuiltIns(WeakMapPrototype, {
              "delete": function(key) {
                if (isObject(key) && !isExtensible(key)) {
                  var state = enforceInternalState(this);
                  if (!state.frozen)
                    state.frozen = new InternalWeakMap();
                  return nativeDelete(this, key) || state.frozen["delete"](key);
                }
                return nativeDelete(this, key);
              },
              has: function has(key) {
                if (isObject(key) && !isExtensible(key)) {
                  var state = enforceInternalState(this);
                  if (!state.frozen)
                    state.frozen = new InternalWeakMap();
                  return nativeHas(this, key) || state.frozen.has(key);
                }
                return nativeHas(this, key);
              },
              get: function get(key) {
                if (isObject(key) && !isExtensible(key)) {
                  var state = enforceInternalState(this);
                  if (!state.frozen)
                    state.frozen = new InternalWeakMap();
                  return nativeHas(this, key) ? nativeGet(this, key) : state.frozen.get(key);
                }
                return nativeGet(this, key);
              },
              set: function set(key, value) {
                if (isObject(key) && !isExtensible(key)) {
                  var state = enforceInternalState(this);
                  if (!state.frozen)
                    state.frozen = new InternalWeakMap();
                  nativeHas(this, key) ? nativeSet(this, key, value) : state.frozen.set(key, value);
                } else
                  nativeSet(this, key, value);
                return this;
              }
            });
          } else if (hasMSEdgeFreezingBug()) {
            defineBuiltIns(WeakMapPrototype, {
              set: function set(key, value) {
                var arrayIntegrityLevel;
                if (isArray(key)) {
                  if (isFrozen(key))
                    arrayIntegrityLevel = freeze2;
                  else if (isSealed(key))
                    arrayIntegrityLevel = seal;
                }
                nativeSet(this, key, value);
                if (arrayIntegrityLevel)
                  arrayIntegrityLevel(key);
                return this;
              }
            });
          }
        }
        var nativeDelete;
        var nativeHas;
        var nativeGet;
      }
    });
    var require_es_weak_map = __commonJS({
      "node_modules/core-js/modules/es.weak-map.js"() {
        "use strict";
        require_es_weak_map_constructor();
      }
    });
    var require_web_dom_collections_iterator = __commonJS({
      "node_modules/core-js/modules/web.dom-collections.iterator.js"() {
        "use strict";
        var global3 = require_global();
        var DOMIterables = require_dom_iterables();
        var DOMTokenListPrototype = require_dom_token_list_prototype();
        var ArrayIteratorMethods = require_es_array_iterator();
        var createNonEnumerableProperty = require_create_non_enumerable_property();
        var setToStringTag = require_set_to_string_tag();
        var wellKnownSymbol = require_well_known_symbol();
        var ITERATOR = wellKnownSymbol("iterator");
        var ArrayValues = ArrayIteratorMethods.values;
        var handlePrototype = function(CollectionPrototype, COLLECTION_NAME2) {
          if (CollectionPrototype) {
            if (CollectionPrototype[ITERATOR] !== ArrayValues)
              try {
                createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);
              } catch (error) {
                CollectionPrototype[ITERATOR] = ArrayValues;
              }
            setToStringTag(CollectionPrototype, COLLECTION_NAME2, true);
            if (DOMIterables[COLLECTION_NAME2])
              for (var METHOD_NAME in ArrayIteratorMethods) {
                if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME])
                  try {
                    createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
                  } catch (error) {
                    CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
                  }
              }
          }
        };
        for (COLLECTION_NAME in DOMIterables) {
          handlePrototype(global3[COLLECTION_NAME] && global3[COLLECTION_NAME].prototype, COLLECTION_NAME);
        }
        var COLLECTION_NAME;
        handlePrototype(DOMTokenListPrototype, "DOMTokenList");
      }
    });
    var require_lodash = __commonJS({
      "node_modules/lodash.throttle/index.js"(exports, module) {
        var FUNC_ERROR_TEXT = "Expected a function";
        var NAN = 0 / 0;
        var symbolTag = "[object Symbol]";
        var reTrim = /^\s+|\s+$/g;
        var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
        var reIsBinary = /^0b[01]+$/i;
        var reIsOctal = /^0o[0-7]+$/i;
        var freeParseInt = parseInt;
        var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
        var freeSelf = typeof self == "object" && self && self.Object === Object && self;
        var root = freeGlobal || freeSelf || Function("return this")();
        var objectProto = Object.prototype;
        var objectToString = objectProto.toString;
        var nativeMax = Math.max;
        var nativeMin = Math.min;
        var now = function() {
          return root.Date.now();
        };
        function debounce2(func, wait, options) {
          var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
          if (typeof func != "function") {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          wait = toNumber(wait) || 0;
          if (isObject(options)) {
            leading = !!options.leading;
            maxing = "maxWait" in options;
            maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
            trailing = "trailing" in options ? !!options.trailing : trailing;
          }
          function invokeFunc(time2) {
            var args = lastArgs, thisArg = lastThis;
            lastArgs = lastThis = void 0;
            lastInvokeTime = time2;
            result = func.apply(thisArg, args);
            return result;
          }
          function leadingEdge(time2) {
            lastInvokeTime = time2;
            timerId = setTimeout(timerExpired, wait);
            return leading ? invokeFunc(time2) : result;
          }
          function remainingWait(time2) {
            var timeSinceLastCall = time2 - lastCallTime, timeSinceLastInvoke = time2 - lastInvokeTime, result2 = wait - timeSinceLastCall;
            return maxing ? nativeMin(result2, maxWait - timeSinceLastInvoke) : result2;
          }
          function shouldInvoke(time2) {
            var timeSinceLastCall = time2 - lastCallTime, timeSinceLastInvoke = time2 - lastInvokeTime;
            return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
          }
          function timerExpired() {
            var time2 = now();
            if (shouldInvoke(time2)) {
              return trailingEdge(time2);
            }
            timerId = setTimeout(timerExpired, remainingWait(time2));
          }
          function trailingEdge(time2) {
            timerId = void 0;
            if (trailing && lastArgs) {
              return invokeFunc(time2);
            }
            lastArgs = lastThis = void 0;
            return result;
          }
          function cancel() {
            if (timerId !== void 0) {
              clearTimeout(timerId);
            }
            lastInvokeTime = 0;
            lastArgs = lastCallTime = lastThis = timerId = void 0;
          }
          function flush() {
            return timerId === void 0 ? result : trailingEdge(now());
          }
          function debounced() {
            var time2 = now(), isInvoking = shouldInvoke(time2);
            lastArgs = arguments;
            lastThis = this;
            lastCallTime = time2;
            if (isInvoking) {
              if (timerId === void 0) {
                return leadingEdge(lastCallTime);
              }
              if (maxing) {
                timerId = setTimeout(timerExpired, wait);
                return invokeFunc(lastCallTime);
              }
            }
            if (timerId === void 0) {
              timerId = setTimeout(timerExpired, wait);
            }
            return result;
          }
          debounced.cancel = cancel;
          debounced.flush = flush;
          return debounced;
        }
        function throttle2(func, wait, options) {
          var leading = true, trailing = true;
          if (typeof func != "function") {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          if (isObject(options)) {
            leading = "leading" in options ? !!options.leading : leading;
            trailing = "trailing" in options ? !!options.trailing : trailing;
          }
          return debounce2(func, wait, {
            "leading": leading,
            "maxWait": wait,
            "trailing": trailing
          });
        }
        function isObject(value) {
          var type = typeof value;
          return !!value && (type == "object" || type == "function");
        }
        function isObjectLike(value) {
          return !!value && typeof value == "object";
        }
        function isSymbol(value) {
          return typeof value == "symbol" || isObjectLike(value) && objectToString.call(value) == symbolTag;
        }
        function toNumber(value) {
          if (typeof value == "number") {
            return value;
          }
          if (isSymbol(value)) {
            return NAN;
          }
          if (isObject(value)) {
            var other = typeof value.valueOf == "function" ? value.valueOf() : value;
            value = isObject(other) ? other + "" : other;
          }
          if (typeof value != "string") {
            return value === 0 ? value : +value;
          }
          value = value.replace(reTrim, "");
          var isBinary = reIsBinary.test(value);
          return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
        }
        module.exports = throttle2;
      }
    });
    var require_lodash2 = __commonJS({
      "node_modules/lodash.debounce/index.js"(exports, module) {
        var FUNC_ERROR_TEXT = "Expected a function";
        var NAN = 0 / 0;
        var symbolTag = "[object Symbol]";
        var reTrim = /^\s+|\s+$/g;
        var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
        var reIsBinary = /^0b[01]+$/i;
        var reIsOctal = /^0o[0-7]+$/i;
        var freeParseInt = parseInt;
        var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
        var freeSelf = typeof self == "object" && self && self.Object === Object && self;
        var root = freeGlobal || freeSelf || Function("return this")();
        var objectProto = Object.prototype;
        var objectToString = objectProto.toString;
        var nativeMax = Math.max;
        var nativeMin = Math.min;
        var now = function() {
          return root.Date.now();
        };
        function debounce2(func, wait, options) {
          var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
          if (typeof func != "function") {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          wait = toNumber(wait) || 0;
          if (isObject(options)) {
            leading = !!options.leading;
            maxing = "maxWait" in options;
            maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
            trailing = "trailing" in options ? !!options.trailing : trailing;
          }
          function invokeFunc(time2) {
            var args = lastArgs, thisArg = lastThis;
            lastArgs = lastThis = void 0;
            lastInvokeTime = time2;
            result = func.apply(thisArg, args);
            return result;
          }
          function leadingEdge(time2) {
            lastInvokeTime = time2;
            timerId = setTimeout(timerExpired, wait);
            return leading ? invokeFunc(time2) : result;
          }
          function remainingWait(time2) {
            var timeSinceLastCall = time2 - lastCallTime, timeSinceLastInvoke = time2 - lastInvokeTime, result2 = wait - timeSinceLastCall;
            return maxing ? nativeMin(result2, maxWait - timeSinceLastInvoke) : result2;
          }
          function shouldInvoke(time2) {
            var timeSinceLastCall = time2 - lastCallTime, timeSinceLastInvoke = time2 - lastInvokeTime;
            return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
          }
          function timerExpired() {
            var time2 = now();
            if (shouldInvoke(time2)) {
              return trailingEdge(time2);
            }
            timerId = setTimeout(timerExpired, remainingWait(time2));
          }
          function trailingEdge(time2) {
            timerId = void 0;
            if (trailing && lastArgs) {
              return invokeFunc(time2);
            }
            lastArgs = lastThis = void 0;
            return result;
          }
          function cancel() {
            if (timerId !== void 0) {
              clearTimeout(timerId);
            }
            lastInvokeTime = 0;
            lastArgs = lastCallTime = lastThis = timerId = void 0;
          }
          function flush() {
            return timerId === void 0 ? result : trailingEdge(now());
          }
          function debounced() {
            var time2 = now(), isInvoking = shouldInvoke(time2);
            lastArgs = arguments;
            lastThis = this;
            lastCallTime = time2;
            if (isInvoking) {
              if (timerId === void 0) {
                return leadingEdge(lastCallTime);
              }
              if (maxing) {
                timerId = setTimeout(timerExpired, wait);
                return invokeFunc(lastCallTime);
              }
            }
            if (timerId === void 0) {
              timerId = setTimeout(timerExpired, wait);
            }
            return result;
          }
          debounced.cancel = cancel;
          debounced.flush = flush;
          return debounced;
        }
        function isObject(value) {
          var type = typeof value;
          return !!value && (type == "object" || type == "function");
        }
        function isObjectLike(value) {
          return !!value && typeof value == "object";
        }
        function isSymbol(value) {
          return typeof value == "symbol" || isObjectLike(value) && objectToString.call(value) == symbolTag;
        }
        function toNumber(value) {
          if (typeof value == "number") {
            return value;
          }
          if (isSymbol(value)) {
            return NAN;
          }
          if (isObject(value)) {
            var other = typeof value.valueOf == "function" ? value.valueOf() : value;
            value = isObject(other) ? other + "" : other;
          }
          if (typeof value != "string") {
            return value === 0 ? value : +value;
          }
          value = value.replace(reTrim, "");
          var isBinary = reIsBinary.test(value);
          return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
        }
        module.exports = debounce2;
      }
    });
    var require_lodash3 = __commonJS({
      "node_modules/lodash.memoize/index.js"(exports, module) {
        var FUNC_ERROR_TEXT = "Expected a function";
        var HASH_UNDEFINED = "__lodash_hash_undefined__";
        var funcTag = "[object Function]";
        var genTag = "[object GeneratorFunction]";
        var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
        var reIsHostCtor = /^\[object .+?Constructor\]$/;
        var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
        var freeSelf = typeof self == "object" && self && self.Object === Object && self;
        var root = freeGlobal || freeSelf || Function("return this")();
        function getValue(object, key) {
          return object == null ? void 0 : object[key];
        }
        function isHostObject(value) {
          var result = false;
          if (value != null && typeof value.toString != "function") {
            try {
              result = !!(value + "");
            } catch (e) {
            }
          }
          return result;
        }
        var arrayProto = Array.prototype;
        var funcProto = Function.prototype;
        var objectProto = Object.prototype;
        var coreJsData = root["__core-js_shared__"];
        var maskSrcKey = function() {
          var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
          return uid ? "Symbol(src)_1." + uid : "";
        }();
        var funcToString = funcProto.toString;
        var hasOwnProperty = objectProto.hasOwnProperty;
        var objectToString = objectProto.toString;
        var reIsNative = RegExp(
          "^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
        );
        var splice = arrayProto.splice;
        var Map2 = getNative(root, "Map");
        var nativeCreate = getNative(Object, "create");
        function Hash(entries) {
          var index = -1, length = entries ? entries.length : 0;
          this.clear();
          while (++index < length) {
            var entry = entries[index];
            this.set(entry[0], entry[1]);
          }
        }
        function hashClear() {
          this.__data__ = nativeCreate ? nativeCreate(null) : {};
        }
        function hashDelete(key) {
          return this.has(key) && delete this.__data__[key];
        }
        function hashGet(key) {
          var data = this.__data__;
          if (nativeCreate) {
            var result = data[key];
            return result === HASH_UNDEFINED ? void 0 : result;
          }
          return hasOwnProperty.call(data, key) ? data[key] : void 0;
        }
        function hashHas(key) {
          var data = this.__data__;
          return nativeCreate ? data[key] !== void 0 : hasOwnProperty.call(data, key);
        }
        function hashSet(key, value) {
          var data = this.__data__;
          data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
          return this;
        }
        Hash.prototype.clear = hashClear;
        Hash.prototype["delete"] = hashDelete;
        Hash.prototype.get = hashGet;
        Hash.prototype.has = hashHas;
        Hash.prototype.set = hashSet;
        function ListCache(entries) {
          var index = -1, length = entries ? entries.length : 0;
          this.clear();
          while (++index < length) {
            var entry = entries[index];
            this.set(entry[0], entry[1]);
          }
        }
        function listCacheClear() {
          this.__data__ = [];
        }
        function listCacheDelete(key) {
          var data = this.__data__, index = assocIndexOf(data, key);
          if (index < 0) {
            return false;
          }
          var lastIndex = data.length - 1;
          if (index == lastIndex) {
            data.pop();
          } else {
            splice.call(data, index, 1);
          }
          return true;
        }
        function listCacheGet(key) {
          var data = this.__data__, index = assocIndexOf(data, key);
          return index < 0 ? void 0 : data[index][1];
        }
        function listCacheHas(key) {
          return assocIndexOf(this.__data__, key) > -1;
        }
        function listCacheSet(key, value) {
          var data = this.__data__, index = assocIndexOf(data, key);
          if (index < 0) {
            data.push([key, value]);
          } else {
            data[index][1] = value;
          }
          return this;
        }
        ListCache.prototype.clear = listCacheClear;
        ListCache.prototype["delete"] = listCacheDelete;
        ListCache.prototype.get = listCacheGet;
        ListCache.prototype.has = listCacheHas;
        ListCache.prototype.set = listCacheSet;
        function MapCache(entries) {
          var index = -1, length = entries ? entries.length : 0;
          this.clear();
          while (++index < length) {
            var entry = entries[index];
            this.set(entry[0], entry[1]);
          }
        }
        function mapCacheClear() {
          this.__data__ = {
            "hash": new Hash(),
            "map": new (Map2 || ListCache)(),
            "string": new Hash()
          };
        }
        function mapCacheDelete(key) {
          return getMapData(this, key)["delete"](key);
        }
        function mapCacheGet(key) {
          return getMapData(this, key).get(key);
        }
        function mapCacheHas(key) {
          return getMapData(this, key).has(key);
        }
        function mapCacheSet(key, value) {
          getMapData(this, key).set(key, value);
          return this;
        }
        MapCache.prototype.clear = mapCacheClear;
        MapCache.prototype["delete"] = mapCacheDelete;
        MapCache.prototype.get = mapCacheGet;
        MapCache.prototype.has = mapCacheHas;
        MapCache.prototype.set = mapCacheSet;
        function assocIndexOf(array, key) {
          var length = array.length;
          while (length--) {
            if (eq(array[length][0], key)) {
              return length;
            }
          }
          return -1;
        }
        function baseIsNative(value) {
          if (!isObject(value) || isMasked(value)) {
            return false;
          }
          var pattern = isFunction(value) || isHostObject(value) ? reIsNative : reIsHostCtor;
          return pattern.test(toSource(value));
        }
        function getMapData(map, key) {
          var data = map.__data__;
          return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
        }
        function getNative(object, key) {
          var value = getValue(object, key);
          return baseIsNative(value) ? value : void 0;
        }
        function isKeyable(value) {
          var type = typeof value;
          return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
        }
        function isMasked(func) {
          return !!maskSrcKey && maskSrcKey in func;
        }
        function toSource(func) {
          if (func != null) {
            try {
              return funcToString.call(func);
            } catch (e) {
            }
            try {
              return func + "";
            } catch (e) {
            }
          }
          return "";
        }
        function memoize2(func, resolver) {
          if (typeof func != "function" || resolver && typeof resolver != "function") {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          var memoized = function() {
            var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache2 = memoized.cache;
            if (cache2.has(key)) {
              return cache2.get(key);
            }
            var result = func.apply(this, args);
            memoized.cache = cache2.set(key, result);
            return result;
          };
          memoized.cache = new (memoize2.Cache || MapCache)();
          return memoized;
        }
        memoize2.Cache = MapCache;
        function eq(value, other) {
          return value === other || value !== value && other !== other;
        }
        function isFunction(value) {
          var tag = isObject(value) ? objectToString.call(value) : "";
          return tag == funcTag || tag == genTag;
        }
        function isObject(value) {
          var type = typeof value;
          return !!value && (type == "object" || type == "function");
        }
        module.exports = memoize2;
      }
    });
    var require_array_reduce = __commonJS({
      "node_modules/core-js/internals/array-reduce.js"(exports, module) {
        "use strict";
        var aCallable = require_a_callable();
        var toObject = require_to_object();
        var IndexedObject = require_indexed_object();
        var lengthOfArrayLike = require_length_of_array_like();
        var $TypeError = TypeError;
        var REDUCE_EMPTY = "Reduce of empty array with no initial value";
        var createMethod = function(IS_RIGHT) {
          return function(that, callbackfn, argumentsLength, memo) {
            var O = toObject(that);
            var self2 = IndexedObject(O);
            var length = lengthOfArrayLike(O);
            aCallable(callbackfn);
            if (length === 0 && argumentsLength < 2)
              throw new $TypeError(REDUCE_EMPTY);
            var index = IS_RIGHT ? length - 1 : 0;
            var i = IS_RIGHT ? -1 : 1;
            if (argumentsLength < 2)
              while (true) {
                if (index in self2) {
                  memo = self2[index];
                  index += i;
                  break;
                }
                index += i;
                if (IS_RIGHT ? index < 0 : length <= index) {
                  throw new $TypeError(REDUCE_EMPTY);
                }
              }
            for (; IS_RIGHT ? index >= 0 : length > index; index += i)
              if (index in self2) {
                memo = callbackfn(memo, self2[index], index, O);
              }
            return memo;
          };
        };
        module.exports = {
          left: createMethod(false),
          right: createMethod(true)
        };
      }
    });
    var require_engine_is_node = __commonJS({
      "node_modules/core-js/internals/engine-is-node.js"(exports, module) {
        "use strict";
        var global3 = require_global();
        var classof = require_classof_raw();
        module.exports = classof(global3.process) === "process";
      }
    });
    var require_es_array_reduce = __commonJS({
      "node_modules/core-js/modules/es.array.reduce.js"() {
        "use strict";
        var $2 = require_export();
        var $reduce = require_array_reduce().left;
        var arrayMethodIsStrict = require_array_method_is_strict();
        var CHROME_VERSION = require_engine_v8_version();
        var IS_NODE = require_engine_is_node();
        var CHROME_BUG = !IS_NODE && CHROME_VERSION > 79 && CHROME_VERSION < 83;
        var FORCED = CHROME_BUG || !arrayMethodIsStrict("reduce");
        $2({ target: "Array", proto: true, forced: FORCED }, {
          reduce: function reduce(callbackfn) {
            var length = arguments.length;
            return $reduce(this, callbackfn, length, length > 1 ? arguments[1] : void 0);
          }
        });
      }
    });
    var require_regexp_flags = __commonJS({
      "node_modules/core-js/internals/regexp-flags.js"(exports, module) {
        "use strict";
        var anObject = require_an_object();
        module.exports = function() {
          var that = anObject(this);
          var result = "";
          if (that.hasIndices)
            result += "d";
          if (that.global)
            result += "g";
          if (that.ignoreCase)
            result += "i";
          if (that.multiline)
            result += "m";
          if (that.dotAll)
            result += "s";
          if (that.unicode)
            result += "u";
          if (that.unicodeSets)
            result += "v";
          if (that.sticky)
            result += "y";
          return result;
        };
      }
    });
    var require_regexp_sticky_helpers = __commonJS({
      "node_modules/core-js/internals/regexp-sticky-helpers.js"(exports, module) {
        "use strict";
        var fails = require_fails();
        var global3 = require_global();
        var $RegExp = global3.RegExp;
        var UNSUPPORTED_Y = fails(function() {
          var re = $RegExp("a", "y");
          re.lastIndex = 2;
          return re.exec("abcd") !== null;
        });
        var MISSED_STICKY = UNSUPPORTED_Y || fails(function() {
          return !$RegExp("a", "y").sticky;
        });
        var BROKEN_CARET = UNSUPPORTED_Y || fails(function() {
          var re = $RegExp("^r", "gy");
          re.lastIndex = 2;
          return re.exec("str") !== null;
        });
        module.exports = {
          BROKEN_CARET,
          MISSED_STICKY,
          UNSUPPORTED_Y
        };
      }
    });
    var require_regexp_unsupported_dot_all = __commonJS({
      "node_modules/core-js/internals/regexp-unsupported-dot-all.js"(exports, module) {
        "use strict";
        var fails = require_fails();
        var global3 = require_global();
        var $RegExp = global3.RegExp;
        module.exports = fails(function() {
          var re = $RegExp(".", "s");
          return !(re.dotAll && re.test("\n") && re.flags === "s");
        });
      }
    });
    var require_regexp_unsupported_ncg = __commonJS({
      "node_modules/core-js/internals/regexp-unsupported-ncg.js"(exports, module) {
        "use strict";
        var fails = require_fails();
        var global3 = require_global();
        var $RegExp = global3.RegExp;
        module.exports = fails(function() {
          var re = $RegExp("(?<a>b)", "g");
          return re.exec("b").groups.a !== "b" || "b".replace(re, "$<a>c") !== "bc";
        });
      }
    });
    var require_regexp_exec = __commonJS({
      "node_modules/core-js/internals/regexp-exec.js"(exports, module) {
        "use strict";
        var call = require_function_call();
        var uncurryThis = require_function_uncurry_this();
        var toString = require_to_string();
        var regexpFlags = require_regexp_flags();
        var stickyHelpers = require_regexp_sticky_helpers();
        var shared = require_shared();
        var create = require_object_create();
        var getInternalState = require_internal_state().get;
        var UNSUPPORTED_DOT_ALL = require_regexp_unsupported_dot_all();
        var UNSUPPORTED_NCG = require_regexp_unsupported_ncg();
        var nativeReplace = shared("native-string-replace", String.prototype.replace);
        var nativeExec = RegExp.prototype.exec;
        var patchedExec = nativeExec;
        var charAt = uncurryThis("".charAt);
        var indexOf = uncurryThis("".indexOf);
        var replace = uncurryThis("".replace);
        var stringSlice = uncurryThis("".slice);
        var UPDATES_LAST_INDEX_WRONG = function() {
          var re1 = /a/;
          var re2 = /b*/g;
          call(nativeExec, re1, "a");
          call(nativeExec, re2, "a");
          return re1.lastIndex !== 0 || re2.lastIndex !== 0;
        }();
        var UNSUPPORTED_Y = stickyHelpers.BROKEN_CARET;
        var NPCG_INCLUDED = /()??/.exec("")[1] !== void 0;
        var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG;
        if (PATCH) {
          patchedExec = function exec(string) {
            var re = this;
            var state = getInternalState(re);
            var str = toString(string);
            var raw = state.raw;
            var result, reCopy, lastIndex, match, i, object, group;
            if (raw) {
              raw.lastIndex = re.lastIndex;
              result = call(patchedExec, raw, str);
              re.lastIndex = raw.lastIndex;
              return result;
            }
            var groups = state.groups;
            var sticky = UNSUPPORTED_Y && re.sticky;
            var flags = call(regexpFlags, re);
            var source = re.source;
            var charsAdded = 0;
            var strCopy = str;
            if (sticky) {
              flags = replace(flags, "y", "");
              if (indexOf(flags, "g") === -1) {
                flags += "g";
              }
              strCopy = stringSlice(str, re.lastIndex);
              if (re.lastIndex > 0 && (!re.multiline || re.multiline && charAt(str, re.lastIndex - 1) !== "\n")) {
                source = "(?: " + source + ")";
                strCopy = " " + strCopy;
                charsAdded++;
              }
              reCopy = new RegExp("^(?:" + source + ")", flags);
            }
            if (NPCG_INCLUDED) {
              reCopy = new RegExp("^" + source + "$(?!\\s)", flags);
            }
            if (UPDATES_LAST_INDEX_WRONG)
              lastIndex = re.lastIndex;
            match = call(nativeExec, sticky ? reCopy : re, strCopy);
            if (sticky) {
              if (match) {
                match.input = stringSlice(match.input, charsAdded);
                match[0] = stringSlice(match[0], charsAdded);
                match.index = re.lastIndex;
                re.lastIndex += match[0].length;
              } else
                re.lastIndex = 0;
            } else if (UPDATES_LAST_INDEX_WRONG && match) {
              re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
            }
            if (NPCG_INCLUDED && match && match.length > 1) {
              call(nativeReplace, match[0], reCopy, function() {
                for (i = 1; i < arguments.length - 2; i++) {
                  if (arguments[i] === void 0)
                    match[i] = void 0;
                }
              });
            }
            if (match && groups) {
              match.groups = object = create(null);
              for (i = 0; i < groups.length; i++) {
                group = groups[i];
                object[group[0]] = match[group[1]];
              }
            }
            return match;
          };
        }
        module.exports = patchedExec;
      }
    });
    var require_es_regexp_exec = __commonJS({
      "node_modules/core-js/modules/es.regexp.exec.js"() {
        "use strict";
        var $2 = require_export();
        var exec = require_regexp_exec();
        $2({ target: "RegExp", proto: true, forced: /./.exec !== exec }, {
          exec
        });
      }
    });
    var require_fix_regexp_well_known_symbol_logic = __commonJS({
      "node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js"(exports, module) {
        "use strict";
        require_es_regexp_exec();
        var call = require_function_call();
        var defineBuiltIn = require_define_built_in();
        var regexpExec = require_regexp_exec();
        var fails = require_fails();
        var wellKnownSymbol = require_well_known_symbol();
        var createNonEnumerableProperty = require_create_non_enumerable_property();
        var SPECIES = wellKnownSymbol("species");
        var RegExpPrototype = RegExp.prototype;
        module.exports = function(KEY, exec, FORCED, SHAM) {
          var SYMBOL = wellKnownSymbol(KEY);
          var DELEGATES_TO_SYMBOL = !fails(function() {
            var O = {};
            O[SYMBOL] = function() {
              return 7;
            };
            return ""[KEY](O) !== 7;
          });
          var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function() {
            var execCalled = false;
            var re = /a/;
            if (KEY === "split") {
              re = {};
              re.constructor = {};
              re.constructor[SPECIES] = function() {
                return re;
              };
              re.flags = "";
              re[SYMBOL] = /./[SYMBOL];
            }
            re.exec = function() {
              execCalled = true;
              return null;
            };
            re[SYMBOL]("");
            return !execCalled;
          });
          if (!DELEGATES_TO_SYMBOL || !DELEGATES_TO_EXEC || FORCED) {
            var nativeRegExpMethod = /./[SYMBOL];
            var methods = exec(SYMBOL, ""[KEY], function(nativeMethod, regexp, str, arg2, forceStringMethod) {
              var $exec = regexp.exec;
              if ($exec === regexpExec || $exec === RegExpPrototype.exec) {
                if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
                  return { done: true, value: call(nativeRegExpMethod, regexp, str, arg2) };
                }
                return { done: true, value: call(nativeMethod, str, regexp, arg2) };
              }
              return { done: false };
            });
            defineBuiltIn(String.prototype, KEY, methods[0]);
            defineBuiltIn(RegExpPrototype, SYMBOL, methods[1]);
          }
          if (SHAM)
            createNonEnumerableProperty(RegExpPrototype[SYMBOL], "sham", true);
        };
      }
    });
    var require_advance_string_index = __commonJS({
      "node_modules/core-js/internals/advance-string-index.js"(exports, module) {
        "use strict";
        var charAt = require_string_multibyte().charAt;
        module.exports = function(S, index, unicode) {
          return index + (unicode ? charAt(S, index).length : 1);
        };
      }
    });
    var require_regexp_exec_abstract = __commonJS({
      "node_modules/core-js/internals/regexp-exec-abstract.js"(exports, module) {
        "use strict";
        var call = require_function_call();
        var anObject = require_an_object();
        var isCallable = require_is_callable();
        var classof = require_classof_raw();
        var regexpExec = require_regexp_exec();
        var $TypeError = TypeError;
        module.exports = function(R, S) {
          var exec = R.exec;
          if (isCallable(exec)) {
            var result = call(exec, R, S);
            if (result !== null)
              anObject(result);
            return result;
          }
          if (classof(R) === "RegExp")
            return call(regexpExec, R, S);
          throw new $TypeError("RegExp#exec called on incompatible receiver");
        };
      }
    });
    var require_es_string_match = __commonJS({
      "node_modules/core-js/modules/es.string.match.js"() {
        "use strict";
        var call = require_function_call();
        var fixRegExpWellKnownSymbolLogic = require_fix_regexp_well_known_symbol_logic();
        var anObject = require_an_object();
        var isNullOrUndefined = require_is_null_or_undefined();
        var toLength = require_to_length();
        var toString = require_to_string();
        var requireObjectCoercible = require_require_object_coercible();
        var getMethod = require_get_method();
        var advanceStringIndex = require_advance_string_index();
        var regExpExec = require_regexp_exec_abstract();
        fixRegExpWellKnownSymbolLogic("match", function(MATCH, nativeMatch, maybeCallNative) {
          return [
            function match(regexp) {
              var O = requireObjectCoercible(this);
              var matcher = isNullOrUndefined(regexp) ? void 0 : getMethod(regexp, MATCH);
              return matcher ? call(matcher, regexp, O) : new RegExp(regexp)[MATCH](toString(O));
            },
            function(string) {
              var rx = anObject(this);
              var S = toString(string);
              var res = maybeCallNative(nativeMatch, rx, S);
              if (res.done)
                return res.value;
              if (!rx.global)
                return regExpExec(rx, S);
              var fullUnicode = rx.unicode;
              rx.lastIndex = 0;
              var A = [];
              var n = 0;
              var result;
              while ((result = regExpExec(rx, S)) !== null) {
                var matchStr = toString(result[0]);
                A[n] = matchStr;
                if (matchStr === "")
                  rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
                n++;
              }
              return n === 0 ? null : A;
            }
          ];
        });
      }
    });
    var require_define_built_in_accessor = __commonJS({
      "node_modules/core-js/internals/define-built-in-accessor.js"(exports, module) {
        "use strict";
        var makeBuiltIn = require_make_built_in();
        var defineProperty = require_object_define_property();
        module.exports = function(target, name, descriptor) {
          if (descriptor.get)
            makeBuiltIn(descriptor.get, name, { getter: true });
          if (descriptor.set)
            makeBuiltIn(descriptor.set, name, { setter: true });
          return defineProperty.f(target, name, descriptor);
        };
      }
    });
    var require_es_function_name = __commonJS({
      "node_modules/core-js/modules/es.function.name.js"() {
        "use strict";
        var DESCRIPTORS = require_descriptors();
        var FUNCTION_NAME_EXISTS = require_function_name().EXISTS;
        var uncurryThis = require_function_uncurry_this();
        var defineBuiltInAccessor = require_define_built_in_accessor();
        var FunctionPrototype = Function.prototype;
        var functionToString = uncurryThis(FunctionPrototype.toString);
        var nameRE = /function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/;
        var regExpExec = uncurryThis(nameRE.exec);
        var NAME = "name";
        if (DESCRIPTORS && !FUNCTION_NAME_EXISTS) {
          defineBuiltInAccessor(FunctionPrototype, NAME, {
            configurable: true,
            get: function() {
              try {
                return regExpExec(nameRE, functionToString(this))[1];
              } catch (error) {
                return "";
              }
            }
          });
        }
      }
    });
    var require_function_apply = __commonJS({
      "node_modules/core-js/internals/function-apply.js"(exports, module) {
        "use strict";
        var NATIVE_BIND = require_function_bind_native();
        var FunctionPrototype = Function.prototype;
        var apply = FunctionPrototype.apply;
        var call = FunctionPrototype.call;
        module.exports = typeof Reflect == "object" && Reflect.apply || (NATIVE_BIND ? call.bind(apply) : function() {
          return call.apply(apply, arguments);
        });
      }
    });
    var require_get_substitution = __commonJS({
      "node_modules/core-js/internals/get-substitution.js"(exports, module) {
        "use strict";
        var uncurryThis = require_function_uncurry_this();
        var toObject = require_to_object();
        var floor = Math.floor;
        var charAt = uncurryThis("".charAt);
        var replace = uncurryThis("".replace);
        var stringSlice = uncurryThis("".slice);
        var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
        var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d{1,2})/g;
        module.exports = function(matched, str, position, captures, namedCaptures, replacement) {
          var tailPos = position + matched.length;
          var m = captures.length;
          var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
          if (namedCaptures !== void 0) {
            namedCaptures = toObject(namedCaptures);
            symbols = SUBSTITUTION_SYMBOLS;
          }
          return replace(replacement, symbols, function(match, ch) {
            var capture;
            switch (charAt(ch, 0)) {
              case "$":
                return "$";
              case "&":
                return matched;
              case "`":
                return stringSlice(str, 0, position);
              case "'":
                return stringSlice(str, tailPos);
              case "<":
                capture = namedCaptures[stringSlice(ch, 1, -1)];
                break;
              default:
                var n = +ch;
                if (n === 0)
                  return match;
                if (n > m) {
                  var f = floor(n / 10);
                  if (f === 0)
                    return match;
                  if (f <= m)
                    return captures[f - 1] === void 0 ? charAt(ch, 1) : captures[f - 1] + charAt(ch, 1);
                  return match;
                }
                capture = captures[n - 1];
            }
            return capture === void 0 ? "" : capture;
          });
        };
      }
    });
    var require_es_string_replace = __commonJS({
      "node_modules/core-js/modules/es.string.replace.js"() {
        "use strict";
        var apply = require_function_apply();
        var call = require_function_call();
        var uncurryThis = require_function_uncurry_this();
        var fixRegExpWellKnownSymbolLogic = require_fix_regexp_well_known_symbol_logic();
        var fails = require_fails();
        var anObject = require_an_object();
        var isCallable = require_is_callable();
        var isNullOrUndefined = require_is_null_or_undefined();
        var toIntegerOrInfinity = require_to_integer_or_infinity();
        var toLength = require_to_length();
        var toString = require_to_string();
        var requireObjectCoercible = require_require_object_coercible();
        var advanceStringIndex = require_advance_string_index();
        var getMethod = require_get_method();
        var getSubstitution = require_get_substitution();
        var regExpExec = require_regexp_exec_abstract();
        var wellKnownSymbol = require_well_known_symbol();
        var REPLACE = wellKnownSymbol("replace");
        var max = Math.max;
        var min = Math.min;
        var concat = uncurryThis([].concat);
        var push = uncurryThis([].push);
        var stringIndexOf = uncurryThis("".indexOf);
        var stringSlice = uncurryThis("".slice);
        var maybeToString = function(it) {
          return it === void 0 ? it : String(it);
        };
        var REPLACE_KEEPS_$0 = function() {
          return "a".replace(/./, "$0") === "$0";
        }();
        var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = function() {
          if (/./[REPLACE]) {
            return /./[REPLACE]("a", "$0") === "";
          }
          return false;
        }();
        var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function() {
          var re = /./;
          re.exec = function() {
            var result = [];
            result.groups = { a: "7" };
            return result;
          };
          return "".replace(re, "$<a>") !== "7";
        });
        fixRegExpWellKnownSymbolLogic("replace", function(_, nativeReplace, maybeCallNative) {
          var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? "$" : "$0";
          return [
            function replace(searchValue, replaceValue) {
              var O = requireObjectCoercible(this);
              var replacer = isNullOrUndefined(searchValue) ? void 0 : getMethod(searchValue, REPLACE);
              return replacer ? call(replacer, searchValue, O, replaceValue) : call(nativeReplace, toString(O), searchValue, replaceValue);
            },
            function(string, replaceValue) {
              var rx = anObject(this);
              var S = toString(string);
              if (typeof replaceValue == "string" && stringIndexOf(replaceValue, UNSAFE_SUBSTITUTE) === -1 && stringIndexOf(replaceValue, "$<") === -1) {
                var res = maybeCallNative(nativeReplace, rx, S, replaceValue);
                if (res.done)
                  return res.value;
              }
              var functionalReplace = isCallable(replaceValue);
              if (!functionalReplace)
                replaceValue = toString(replaceValue);
              var global3 = rx.global;
              var fullUnicode;
              if (global3) {
                fullUnicode = rx.unicode;
                rx.lastIndex = 0;
              }
              var results = [];
              var result;
              while (true) {
                result = regExpExec(rx, S);
                if (result === null)
                  break;
                push(results, result);
                if (!global3)
                  break;
                var matchStr = toString(result[0]);
                if (matchStr === "")
                  rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
              }
              var accumulatedResult = "";
              var nextSourcePosition = 0;
              for (var i = 0; i < results.length; i++) {
                result = results[i];
                var matched = toString(result[0]);
                var position = max(min(toIntegerOrInfinity(result.index), S.length), 0);
                var captures = [];
                var replacement;
                for (var j = 1; j < result.length; j++)
                  push(captures, maybeToString(result[j]));
                var namedCaptures = result.groups;
                if (functionalReplace) {
                  var replacerArgs = concat([matched], captures, position, S);
                  if (namedCaptures !== void 0)
                    push(replacerArgs, namedCaptures);
                  replacement = toString(apply(replaceValue, void 0, replacerArgs));
                } else {
                  replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
                }
                if (position >= nextSourcePosition) {
                  accumulatedResult += stringSlice(S, nextSourcePosition, position) + replacement;
                  nextSourcePosition = position + matched.length;
                }
              }
              return accumulatedResult + stringSlice(S, nextSourcePosition);
            }
          ];
        }, !REPLACE_SUPPORTS_NAMED_GROUPS || !REPLACE_KEEPS_$0 || REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE);
      }
    });
    var import_es_object_to_string = __toESM(require_es_object_to_string());
    var import_web_dom_collections_for_each = __toESM(require_web_dom_collections_for_each());
    var import_can_use_dom = __toESM(require_can_use_dom());
    var import_es_parse_int = __toESM(require_es_parse_int());
    var import_es_object_assign = __toESM(require_es_object_assign());
    var import_es_array_filter = __toESM(require_es_array_filter());
    var import_es_array_iterator = __toESM(require_es_array_iterator());
    var import_es_string_iterator = __toESM(require_es_string_iterator());
    var import_es_weak_map = __toESM(require_es_weak_map());
    var import_web_dom_collections_iterator = __toESM(require_web_dom_collections_iterator());
    var import_lodash = __toESM(require_lodash());
    var import_lodash2 = __toESM(require_lodash2());
    var import_lodash3 = __toESM(require_lodash3());
    var resizeObservers = [];
    var hasActiveObservations = function() {
      return resizeObservers.some(function(ro) {
        return ro.activeTargets.length > 0;
      });
    };
    var hasSkippedObservations = function() {
      return resizeObservers.some(function(ro) {
        return ro.skippedTargets.length > 0;
      });
    };
    var msg = "ResizeObserver loop completed with undelivered notifications.";
    var deliverResizeLoopError = function() {
      var event;
      if (typeof ErrorEvent === "function") {
        event = new ErrorEvent("error", {
          message: msg
        });
      } else {
        event = document.createEvent("Event");
        event.initEvent("error", false, false);
        event.message = msg;
      }
      window.dispatchEvent(event);
    };
    var ResizeObserverBoxOptions;
    (function(ResizeObserverBoxOptions2) {
      ResizeObserverBoxOptions2["BORDER_BOX"] = "border-box";
      ResizeObserverBoxOptions2["CONTENT_BOX"] = "content-box";
      ResizeObserverBoxOptions2["DEVICE_PIXEL_CONTENT_BOX"] = "device-pixel-content-box";
    })(ResizeObserverBoxOptions || (ResizeObserverBoxOptions = {}));
    var freeze = function(obj) {
      return Object.freeze(obj);
    };
    var ResizeObserverSize = /* @__PURE__ */ function() {
      function ResizeObserverSize2(inlineSize, blockSize) {
        this.inlineSize = inlineSize;
        this.blockSize = blockSize;
        freeze(this);
      }
      return ResizeObserverSize2;
    }();
    var DOMRectReadOnly = function() {
      function DOMRectReadOnly2(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.top = this.y;
        this.left = this.x;
        this.bottom = this.top + this.height;
        this.right = this.left + this.width;
        return freeze(this);
      }
      DOMRectReadOnly2.prototype.toJSON = function() {
        var _a = this, x = _a.x, y = _a.y, top = _a.top, right = _a.right, bottom = _a.bottom, left = _a.left, width = _a.width, height = _a.height;
        return { x, y, top, right, bottom, left, width, height };
      };
      DOMRectReadOnly2.fromRect = function(rectangle) {
        return new DOMRectReadOnly2(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
      };
      return DOMRectReadOnly2;
    }();
    var isSVG = function(target) {
      return target instanceof SVGElement && "getBBox" in target;
    };
    var isHidden = function(target) {
      if (isSVG(target)) {
        var _a = target.getBBox(), width = _a.width, height = _a.height;
        return !width && !height;
      }
      var _b = target, offsetWidth = _b.offsetWidth, offsetHeight = _b.offsetHeight;
      return !(offsetWidth || offsetHeight || target.getClientRects().length);
    };
    var isElement = function(obj) {
      var _a;
      if (obj instanceof Element) {
        return true;
      }
      var scope = (_a = obj === null || obj === void 0 ? void 0 : obj.ownerDocument) === null || _a === void 0 ? void 0 : _a.defaultView;
      return !!(scope && obj instanceof scope.Element);
    };
    var isReplacedElement = function(target) {
      switch (target.tagName) {
        case "INPUT":
          if (target.type !== "image") {
            break;
          }
        case "VIDEO":
        case "AUDIO":
        case "EMBED":
        case "OBJECT":
        case "CANVAS":
        case "IFRAME":
        case "IMG":
          return true;
      }
      return false;
    };
    var global2 = typeof window !== "undefined" ? window : {};
    var cache = /* @__PURE__ */ new WeakMap();
    var scrollRegexp = /auto|scroll/;
    var verticalRegexp = /^tb|vertical/;
    var IE = /msie|trident/i.test(global2.navigator && global2.navigator.userAgent);
    var parseDimension = function(pixel) {
      return parseFloat(pixel || "0");
    };
    var size = function(inlineSize, blockSize, switchSizes) {
      if (inlineSize === void 0) {
        inlineSize = 0;
      }
      if (blockSize === void 0) {
        blockSize = 0;
      }
      if (switchSizes === void 0) {
        switchSizes = false;
      }
      return new ResizeObserverSize((switchSizes ? blockSize : inlineSize) || 0, (switchSizes ? inlineSize : blockSize) || 0);
    };
    var zeroBoxes = freeze({
      devicePixelContentBoxSize: size(),
      borderBoxSize: size(),
      contentBoxSize: size(),
      contentRect: new DOMRectReadOnly(0, 0, 0, 0)
    });
    var calculateBoxSizes = function(target, forceRecalculation) {
      if (forceRecalculation === void 0) {
        forceRecalculation = false;
      }
      if (cache.has(target) && !forceRecalculation) {
        return cache.get(target);
      }
      if (isHidden(target)) {
        cache.set(target, zeroBoxes);
        return zeroBoxes;
      }
      var cs = getComputedStyle(target);
      var svg = isSVG(target) && target.ownerSVGElement && target.getBBox();
      var removePadding = !IE && cs.boxSizing === "border-box";
      var switchSizes = verticalRegexp.test(cs.writingMode || "");
      var canScrollVertically = !svg && scrollRegexp.test(cs.overflowY || "");
      var canScrollHorizontally = !svg && scrollRegexp.test(cs.overflowX || "");
      var paddingTop = svg ? 0 : parseDimension(cs.paddingTop);
      var paddingRight = svg ? 0 : parseDimension(cs.paddingRight);
      var paddingBottom = svg ? 0 : parseDimension(cs.paddingBottom);
      var paddingLeft = svg ? 0 : parseDimension(cs.paddingLeft);
      var borderTop = svg ? 0 : parseDimension(cs.borderTopWidth);
      var borderRight = svg ? 0 : parseDimension(cs.borderRightWidth);
      var borderBottom = svg ? 0 : parseDimension(cs.borderBottomWidth);
      var borderLeft = svg ? 0 : parseDimension(cs.borderLeftWidth);
      var horizontalPadding = paddingLeft + paddingRight;
      var verticalPadding = paddingTop + paddingBottom;
      var horizontalBorderArea = borderLeft + borderRight;
      var verticalBorderArea = borderTop + borderBottom;
      var horizontalScrollbarThickness = !canScrollHorizontally ? 0 : target.offsetHeight - verticalBorderArea - target.clientHeight;
      var verticalScrollbarThickness = !canScrollVertically ? 0 : target.offsetWidth - horizontalBorderArea - target.clientWidth;
      var widthReduction = removePadding ? horizontalPadding + horizontalBorderArea : 0;
      var heightReduction = removePadding ? verticalPadding + verticalBorderArea : 0;
      var contentWidth = svg ? svg.width : parseDimension(cs.width) - widthReduction - verticalScrollbarThickness;
      var contentHeight = svg ? svg.height : parseDimension(cs.height) - heightReduction - horizontalScrollbarThickness;
      var borderBoxWidth = contentWidth + horizontalPadding + verticalScrollbarThickness + horizontalBorderArea;
      var borderBoxHeight = contentHeight + verticalPadding + horizontalScrollbarThickness + verticalBorderArea;
      var boxes = freeze({
        devicePixelContentBoxSize: size(Math.round(contentWidth * devicePixelRatio), Math.round(contentHeight * devicePixelRatio), switchSizes),
        borderBoxSize: size(borderBoxWidth, borderBoxHeight, switchSizes),
        contentBoxSize: size(contentWidth, contentHeight, switchSizes),
        contentRect: new DOMRectReadOnly(paddingLeft, paddingTop, contentWidth, contentHeight)
      });
      cache.set(target, boxes);
      return boxes;
    };
    var calculateBoxSize = function(target, observedBox, forceRecalculation) {
      var _a = calculateBoxSizes(target, forceRecalculation), borderBoxSize = _a.borderBoxSize, contentBoxSize = _a.contentBoxSize, devicePixelContentBoxSize = _a.devicePixelContentBoxSize;
      switch (observedBox) {
        case ResizeObserverBoxOptions.DEVICE_PIXEL_CONTENT_BOX:
          return devicePixelContentBoxSize;
        case ResizeObserverBoxOptions.BORDER_BOX:
          return borderBoxSize;
        default:
          return contentBoxSize;
      }
    };
    var ResizeObserverEntry = /* @__PURE__ */ function() {
      function ResizeObserverEntry2(target) {
        var boxes = calculateBoxSizes(target);
        this.target = target;
        this.contentRect = boxes.contentRect;
        this.borderBoxSize = freeze([boxes.borderBoxSize]);
        this.contentBoxSize = freeze([boxes.contentBoxSize]);
        this.devicePixelContentBoxSize = freeze([boxes.devicePixelContentBoxSize]);
      }
      return ResizeObserverEntry2;
    }();
    var calculateDepthForNode = function(node) {
      if (isHidden(node)) {
        return Infinity;
      }
      var depth = 0;
      var parent = node.parentNode;
      while (parent) {
        depth += 1;
        parent = parent.parentNode;
      }
      return depth;
    };
    var broadcastActiveObservations = function() {
      var shallowestDepth = Infinity;
      var callbacks2 = [];
      resizeObservers.forEach(function processObserver(ro) {
        if (ro.activeTargets.length === 0) {
          return;
        }
        var entries = [];
        ro.activeTargets.forEach(function processTarget(ot) {
          var entry = new ResizeObserverEntry(ot.target);
          var targetDepth = calculateDepthForNode(ot.target);
          entries.push(entry);
          ot.lastReportedSize = calculateBoxSize(ot.target, ot.observedBox);
          if (targetDepth < shallowestDepth) {
            shallowestDepth = targetDepth;
          }
        });
        callbacks2.push(function resizeObserverCallback() {
          ro.callback.call(ro.observer, entries, ro.observer);
        });
        ro.activeTargets.splice(0, ro.activeTargets.length);
      });
      for (var _i = 0, callbacks_1 = callbacks2; _i < callbacks_1.length; _i++) {
        var callback = callbacks_1[_i];
        callback();
      }
      return shallowestDepth;
    };
    var gatherActiveObservationsAtDepth = function(depth) {
      resizeObservers.forEach(function processObserver(ro) {
        ro.activeTargets.splice(0, ro.activeTargets.length);
        ro.skippedTargets.splice(0, ro.skippedTargets.length);
        ro.observationTargets.forEach(function processTarget(ot) {
          if (ot.isActive()) {
            if (calculateDepthForNode(ot.target) > depth) {
              ro.activeTargets.push(ot);
            } else {
              ro.skippedTargets.push(ot);
            }
          }
        });
      });
    };
    var process = function() {
      var depth = 0;
      gatherActiveObservationsAtDepth(depth);
      while (hasActiveObservations()) {
        depth = broadcastActiveObservations();
        gatherActiveObservationsAtDepth(depth);
      }
      if (hasSkippedObservations()) {
        deliverResizeLoopError();
      }
      return depth > 0;
    };
    var trigger;
    var callbacks = [];
    var notify = function() {
      return callbacks.splice(0).forEach(function(cb) {
        return cb();
      });
    };
    var queueMicroTask = function(callback) {
      if (!trigger) {
        var toggle_1 = 0;
        var el_1 = document.createTextNode("");
        var config = { characterData: true };
        new MutationObserver(function() {
          return notify();
        }).observe(el_1, config);
        trigger = function() {
          el_1.textContent = "".concat(toggle_1 ? toggle_1-- : toggle_1++);
        };
      }
      callbacks.push(callback);
      trigger();
    };
    var queueResizeObserver = function(cb) {
      queueMicroTask(function ResizeObserver2() {
        requestAnimationFrame(cb);
      });
    };
    var watching = 0;
    var isWatching = function() {
      return !!watching;
    };
    var CATCH_PERIOD = 250;
    var observerConfig = { attributes: true, characterData: true, childList: true, subtree: true };
    var events = [
      "resize",
      "load",
      "transitionend",
      "animationend",
      "animationstart",
      "animationiteration",
      "keyup",
      "keydown",
      "mouseup",
      "mousedown",
      "mouseover",
      "mouseout",
      "blur",
      "focus"
    ];
    var time = function(timeout) {
      if (timeout === void 0) {
        timeout = 0;
      }
      return Date.now() + timeout;
    };
    var scheduled = false;
    var Scheduler = function() {
      function Scheduler2() {
        var _this = this;
        this.stopped = true;
        this.listener = function() {
          return _this.schedule();
        };
      }
      Scheduler2.prototype.run = function(timeout) {
        var _this = this;
        if (timeout === void 0) {
          timeout = CATCH_PERIOD;
        }
        if (scheduled) {
          return;
        }
        scheduled = true;
        var until = time(timeout);
        queueResizeObserver(function() {
          var elementsHaveResized = false;
          try {
            elementsHaveResized = process();
          } finally {
            scheduled = false;
            timeout = until - time();
            if (!isWatching()) {
              return;
            }
            if (elementsHaveResized) {
              _this.run(1e3);
            } else if (timeout > 0) {
              _this.run(timeout);
            } else {
              _this.start();
            }
          }
        });
      };
      Scheduler2.prototype.schedule = function() {
        this.stop();
        this.run();
      };
      Scheduler2.prototype.observe = function() {
        var _this = this;
        var cb = function() {
          return _this.observer && _this.observer.observe(document.body, observerConfig);
        };
        document.body ? cb() : global2.addEventListener("DOMContentLoaded", cb);
      };
      Scheduler2.prototype.start = function() {
        var _this = this;
        if (this.stopped) {
          this.stopped = false;
          this.observer = new MutationObserver(this.listener);
          this.observe();
          events.forEach(function(name) {
            return global2.addEventListener(name, _this.listener, true);
          });
        }
      };
      Scheduler2.prototype.stop = function() {
        var _this = this;
        if (!this.stopped) {
          this.observer && this.observer.disconnect();
          events.forEach(function(name) {
            return global2.removeEventListener(name, _this.listener, true);
          });
          this.stopped = true;
        }
      };
      return Scheduler2;
    }();
    var scheduler = new Scheduler();
    var updateCount = function(n) {
      !watching && n > 0 && scheduler.start();
      watching += n;
      !watching && scheduler.stop();
    };
    var skipNotifyOnElement = function(target) {
      return !isSVG(target) && !isReplacedElement(target) && getComputedStyle(target).display === "inline";
    };
    var ResizeObservation = function() {
      function ResizeObservation2(target, observedBox) {
        this.target = target;
        this.observedBox = observedBox || ResizeObserverBoxOptions.CONTENT_BOX;
        this.lastReportedSize = {
          inlineSize: 0,
          blockSize: 0
        };
      }
      ResizeObservation2.prototype.isActive = function() {
        var size2 = calculateBoxSize(this.target, this.observedBox, true);
        if (skipNotifyOnElement(this.target)) {
          this.lastReportedSize = size2;
        }
        if (this.lastReportedSize.inlineSize !== size2.inlineSize || this.lastReportedSize.blockSize !== size2.blockSize) {
          return true;
        }
        return false;
      };
      return ResizeObservation2;
    }();
    var ResizeObserverDetail = /* @__PURE__ */ function() {
      function ResizeObserverDetail2(resizeObserver, callback) {
        this.activeTargets = [];
        this.skippedTargets = [];
        this.observationTargets = [];
        this.observer = resizeObserver;
        this.callback = callback;
      }
      return ResizeObserverDetail2;
    }();
    var observerMap = /* @__PURE__ */ new WeakMap();
    var getObservationIndex = function(observationTargets, target) {
      for (var i = 0; i < observationTargets.length; i += 1) {
        if (observationTargets[i].target === target) {
          return i;
        }
      }
      return -1;
    };
    var ResizeObserverController = function() {
      function ResizeObserverController2() {
      }
      ResizeObserverController2.connect = function(resizeObserver, callback) {
        var detail = new ResizeObserverDetail(resizeObserver, callback);
        observerMap.set(resizeObserver, detail);
      };
      ResizeObserverController2.observe = function(resizeObserver, target, options) {
        var detail = observerMap.get(resizeObserver);
        var firstObservation = detail.observationTargets.length === 0;
        if (getObservationIndex(detail.observationTargets, target) < 0) {
          firstObservation && resizeObservers.push(detail);
          detail.observationTargets.push(new ResizeObservation(target, options && options.box));
          updateCount(1);
          scheduler.schedule();
        }
      };
      ResizeObserverController2.unobserve = function(resizeObserver, target) {
        var detail = observerMap.get(resizeObserver);
        var index = getObservationIndex(detail.observationTargets, target);
        var lastObservation = detail.observationTargets.length === 1;
        if (index >= 0) {
          lastObservation && resizeObservers.splice(resizeObservers.indexOf(detail), 1);
          detail.observationTargets.splice(index, 1);
          updateCount(-1);
        }
      };
      ResizeObserverController2.disconnect = function(resizeObserver) {
        var _this = this;
        var detail = observerMap.get(resizeObserver);
        detail.observationTargets.slice().forEach(function(ot) {
          return _this.unobserve(resizeObserver, ot.target);
        });
        detail.activeTargets.splice(0, detail.activeTargets.length);
      };
      return ResizeObserverController2;
    }();
    var ResizeObserver = function() {
      function ResizeObserver2(callback) {
        if (arguments.length === 0) {
          throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
        }
        if (typeof callback !== "function") {
          throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
        }
        ResizeObserverController.connect(this, callback);
      }
      ResizeObserver2.prototype.observe = function(target, options) {
        if (arguments.length === 0) {
          throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
        }
        if (!isElement(target)) {
          throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
        }
        ResizeObserverController.observe(this, target, options);
      };
      ResizeObserver2.prototype.unobserve = function(target) {
        if (arguments.length === 0) {
          throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
        }
        if (!isElement(target)) {
          throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
        }
        ResizeObserverController.unobserve(this, target);
      };
      ResizeObserver2.prototype.disconnect = function() {
        ResizeObserverController.disconnect(this);
      };
      ResizeObserver2.toString = function() {
        return "function ResizeObserver () { [polyfill code] }";
      };
      return ResizeObserver2;
    }();
    var import_es_array_reduce = __toESM(require_es_array_reduce());
    var import_es_regexp_exec = __toESM(require_es_regexp_exec());
    var import_es_string_match = __toESM(require_es_string_match());
    var import_es_function_name = __toESM(require_es_function_name());
    var import_es_string_replace = __toESM(require_es_string_replace());
    var getOptions = function getOptions2(obj) {
      var options = Array.prototype.reduce.call(obj, function(acc, attribute) {
        var option = attribute.name.match(/data-simplebar-(.+)/);
        if (option) {
          var key = option[1].replace(/\W+(.)/g, function(x, chr) {
            return chr.toUpperCase();
          });
          switch (attribute.value) {
            case "true":
              acc[key] = true;
              break;
            case "false":
              acc[key] = false;
              break;
            case void 0:
              acc[key] = true;
              break;
            default:
              acc[key] = attribute.value;
          }
        }
        return acc;
      }, {});
      return options;
    };
    function getElementWindow(element) {
      if (!element || !element.ownerDocument || !element.ownerDocument.defaultView) {
        return window;
      }
      return element.ownerDocument.defaultView;
    }
    function getElementDocument(element) {
      if (!element || !element.ownerDocument) {
        return document;
      }
      return element.ownerDocument;
    }
    var cachedScrollbarWidth = null;
    var cachedDevicePixelRatio = null;
    if (import_can_use_dom.default) {
      window.addEventListener("resize", function() {
        if (cachedDevicePixelRatio !== window.devicePixelRatio) {
          cachedDevicePixelRatio = window.devicePixelRatio;
          cachedScrollbarWidth = null;
        }
      });
    }
    function scrollbarWidth(el) {
      if (cachedScrollbarWidth === null) {
        var document2 = getElementDocument(el);
        if (typeof document2 === "undefined") {
          cachedScrollbarWidth = 0;
          return cachedScrollbarWidth;
        }
        var body = document2.body;
        var box = document2.createElement("div");
        box.classList.add("simplebar-hide-scrollbar");
        body.appendChild(box);
        var width = box.getBoundingClientRect().right;
        body.removeChild(box);
        cachedScrollbarWidth = width;
      }
      return cachedScrollbarWidth;
    }
    var SimpleBar2 = /* @__PURE__ */ function() {
      function SimpleBar22(element, options) {
        var _this = this;
        this.onScroll = function() {
          var elWindow = getElementWindow(_this.el);
          if (!_this.scrollXTicking) {
            elWindow.requestAnimationFrame(_this.scrollX);
            _this.scrollXTicking = true;
          }
          if (!_this.scrollYTicking) {
            elWindow.requestAnimationFrame(_this.scrollY);
            _this.scrollYTicking = true;
          }
        };
        this.scrollX = function() {
          if (_this.axis.x.isOverflowing) {
            _this.showScrollbar("x");
            _this.positionScrollbar("x");
          }
          _this.scrollXTicking = false;
        };
        this.scrollY = function() {
          if (_this.axis.y.isOverflowing) {
            _this.showScrollbar("y");
            _this.positionScrollbar("y");
          }
          _this.scrollYTicking = false;
        };
        this.onMouseEnter = function() {
          _this.showScrollbar("x");
          _this.showScrollbar("y");
        };
        this.onMouseMove = function(e) {
          _this.mouseX = e.clientX;
          _this.mouseY = e.clientY;
          if (_this.axis.x.isOverflowing || _this.axis.x.forceVisible) {
            _this.onMouseMoveForAxis("x");
          }
          if (_this.axis.y.isOverflowing || _this.axis.y.forceVisible) {
            _this.onMouseMoveForAxis("y");
          }
        };
        this.onMouseLeave = function() {
          _this.onMouseMove.cancel();
          if (_this.axis.x.isOverflowing || _this.axis.x.forceVisible) {
            _this.onMouseLeaveForAxis("x");
          }
          if (_this.axis.y.isOverflowing || _this.axis.y.forceVisible) {
            _this.onMouseLeaveForAxis("y");
          }
          _this.mouseX = -1;
          _this.mouseY = -1;
        };
        this.onWindowResize = function() {
          _this.scrollbarWidth = _this.getScrollbarWidth();
          _this.hideNativeScrollbar();
        };
        this.hideScrollbars = function() {
          _this.axis.x.track.rect = _this.axis.x.track.el.getBoundingClientRect();
          _this.axis.y.track.rect = _this.axis.y.track.el.getBoundingClientRect();
          if (!_this.isWithinBounds(_this.axis.y.track.rect)) {
            _this.axis.y.scrollbar.el.classList.remove(_this.classNames.visible);
            _this.axis.y.isVisible = false;
          }
          if (!_this.isWithinBounds(_this.axis.x.track.rect)) {
            _this.axis.x.scrollbar.el.classList.remove(_this.classNames.visible);
            _this.axis.x.isVisible = false;
          }
        };
        this.onPointerEvent = function(e) {
          var isWithinTrackXBounds, isWithinTrackYBounds;
          _this.axis.x.track.rect = _this.axis.x.track.el.getBoundingClientRect();
          _this.axis.y.track.rect = _this.axis.y.track.el.getBoundingClientRect();
          if (_this.axis.x.isOverflowing || _this.axis.x.forceVisible) {
            isWithinTrackXBounds = _this.isWithinBounds(_this.axis.x.track.rect);
          }
          if (_this.axis.y.isOverflowing || _this.axis.y.forceVisible) {
            isWithinTrackYBounds = _this.isWithinBounds(_this.axis.y.track.rect);
          }
          if (isWithinTrackXBounds || isWithinTrackYBounds) {
            e.preventDefault();
            e.stopPropagation();
            if (e.type === "mousedown") {
              if (isWithinTrackXBounds) {
                _this.axis.x.scrollbar.rect = _this.axis.x.scrollbar.el.getBoundingClientRect();
                if (_this.isWithinBounds(_this.axis.x.scrollbar.rect)) {
                  _this.onDragStart(e, "x");
                } else {
                  _this.onTrackClick(e, "x");
                }
              }
              if (isWithinTrackYBounds) {
                _this.axis.y.scrollbar.rect = _this.axis.y.scrollbar.el.getBoundingClientRect();
                if (_this.isWithinBounds(_this.axis.y.scrollbar.rect)) {
                  _this.onDragStart(e, "y");
                } else {
                  _this.onTrackClick(e, "y");
                }
              }
            }
          }
        };
        this.drag = function(e) {
          var eventOffset;
          var track = _this.axis[_this.draggedAxis].track;
          var trackSize = track.rect[_this.axis[_this.draggedAxis].sizeAttr];
          var scrollbar = _this.axis[_this.draggedAxis].scrollbar;
          var contentSize = _this.contentWrapperEl[_this.axis[_this.draggedAxis].scrollSizeAttr];
          var hostSize = parseInt(_this.elStyles[_this.axis[_this.draggedAxis].sizeAttr], 10);
          e.preventDefault();
          e.stopPropagation();
          if (_this.draggedAxis === "y") {
            eventOffset = e.pageY;
          } else {
            eventOffset = e.pageX;
          }
          var dragPos = eventOffset - track.rect[_this.axis[_this.draggedAxis].offsetAttr] - _this.axis[_this.draggedAxis].dragOffset;
          var dragPerc = dragPos / (trackSize - scrollbar.size);
          var scrollPos = dragPerc * (contentSize - hostSize);
          if (_this.draggedAxis === "x") {
            scrollPos = _this.isRtl && SimpleBar22.getRtlHelpers().isRtlScrollbarInverted ? scrollPos - (trackSize + scrollbar.size) : scrollPos;
            scrollPos = _this.isRtl && SimpleBar22.getRtlHelpers().isRtlScrollingInverted ? -scrollPos : scrollPos;
          }
          _this.contentWrapperEl[_this.axis[_this.draggedAxis].scrollOffsetAttr] = scrollPos;
        };
        this.onEndDrag = function(e) {
          var elDocument = getElementDocument(_this.el);
          var elWindow = getElementWindow(_this.el);
          e.preventDefault();
          e.stopPropagation();
          _this.el.classList.remove(_this.classNames.dragging);
          elDocument.removeEventListener("mousemove", _this.drag, true);
          elDocument.removeEventListener("mouseup", _this.onEndDrag, true);
          _this.removePreventClickId = elWindow.setTimeout(function() {
            elDocument.removeEventListener("click", _this.preventClick, true);
            elDocument.removeEventListener("dblclick", _this.preventClick, true);
            _this.removePreventClickId = null;
          });
        };
        this.preventClick = function(e) {
          e.preventDefault();
          e.stopPropagation();
        };
        this.el = element;
        this.minScrollbarWidth = 20;
        this.options = Object.assign({}, SimpleBar22.defaultOptions, options);
        this.classNames = Object.assign({}, SimpleBar22.defaultOptions.classNames, this.options.classNames);
        this.axis = {
          x: {
            scrollOffsetAttr: "scrollLeft",
            sizeAttr: "width",
            scrollSizeAttr: "scrollWidth",
            offsetSizeAttr: "offsetWidth",
            offsetAttr: "left",
            overflowAttr: "overflowX",
            dragOffset: 0,
            isOverflowing: true,
            isVisible: false,
            forceVisible: false,
            track: {},
            scrollbar: {}
          },
          y: {
            scrollOffsetAttr: "scrollTop",
            sizeAttr: "height",
            scrollSizeAttr: "scrollHeight",
            offsetSizeAttr: "offsetHeight",
            offsetAttr: "top",
            overflowAttr: "overflowY",
            dragOffset: 0,
            isOverflowing: true,
            isVisible: false,
            forceVisible: false,
            track: {},
            scrollbar: {}
          }
        };
        this.removePreventClickId = null;
        if (SimpleBar22.instances.has(this.el)) {
          return;
        }
        this.recalculate = (0, import_lodash.default)(this.recalculate.bind(this), 64);
        this.onMouseMove = (0, import_lodash.default)(this.onMouseMove.bind(this), 64);
        this.hideScrollbars = (0, import_lodash2.default)(this.hideScrollbars.bind(this), this.options.timeout);
        this.onWindowResize = (0, import_lodash2.default)(this.onWindowResize.bind(this), 64, {
          leading: true
        });
        SimpleBar22.getRtlHelpers = (0, import_lodash3.default)(SimpleBar22.getRtlHelpers);
        this.init();
      }
      SimpleBar22.getRtlHelpers = function getRtlHelpers() {
        var dummyDiv = document.createElement("div");
        dummyDiv.innerHTML = '<div class="hs-dummy-scrollbar-size"><div style="height: 200%; width: 200%; margin: 10px 0;"></div></div>';
        var scrollbarDummyEl = dummyDiv.firstElementChild;
        document.body.appendChild(scrollbarDummyEl);
        var dummyContainerChild = scrollbarDummyEl.firstElementChild;
        scrollbarDummyEl.scrollLeft = 0;
        var dummyContainerOffset = SimpleBar22.getOffset(scrollbarDummyEl);
        var dummyContainerChildOffset = SimpleBar22.getOffset(dummyContainerChild);
        scrollbarDummyEl.scrollLeft = 999;
        var dummyContainerScrollOffsetAfterScroll = SimpleBar22.getOffset(dummyContainerChild);
        return {
          isRtlScrollingInverted: dummyContainerOffset.left !== dummyContainerChildOffset.left && dummyContainerChildOffset.left - dummyContainerScrollOffsetAfterScroll.left !== 0,
          isRtlScrollbarInverted: dummyContainerOffset.left !== dummyContainerChildOffset.left
        };
      };
      SimpleBar22.getOffset = function getOffset(el) {
        var rect = el.getBoundingClientRect();
        var elDocument = getElementDocument(el);
        var elWindow = getElementWindow(el);
        return {
          top: rect.top + (elWindow.pageYOffset || elDocument.documentElement.scrollTop),
          left: rect.left + (elWindow.pageXOffset || elDocument.documentElement.scrollLeft)
        };
      };
      var _proto = SimpleBar22.prototype;
      _proto.init = function init() {
        SimpleBar22.instances.set(this.el, this);
        if (import_can_use_dom.default) {
          this.initDOM();
          this.setAccessibilityAttributes();
          this.scrollbarWidth = this.getScrollbarWidth();
          this.recalculate();
          this.initListeners();
        }
      };
      _proto.initDOM = function initDOM() {
        var _this2 = this;
        if (Array.prototype.filter.call(this.el.children, function(child) {
          return child.classList.contains(_this2.classNames.wrapper);
        }).length) {
          this.wrapperEl = this.el.querySelector("." + this.classNames.wrapper);
          this.contentWrapperEl = this.options.scrollableNode || this.el.querySelector("." + this.classNames.contentWrapper);
          this.contentEl = this.options.contentNode || this.el.querySelector("." + this.classNames.contentEl);
          this.offsetEl = this.el.querySelector("." + this.classNames.offset);
          this.maskEl = this.el.querySelector("." + this.classNames.mask);
          this.placeholderEl = this.findChild(this.wrapperEl, "." + this.classNames.placeholder);
          this.heightAutoObserverWrapperEl = this.el.querySelector("." + this.classNames.heightAutoObserverWrapperEl);
          this.heightAutoObserverEl = this.el.querySelector("." + this.classNames.heightAutoObserverEl);
          this.axis.x.track.el = this.findChild(this.el, "." + this.classNames.track + "." + this.classNames.horizontal);
          this.axis.y.track.el = this.findChild(this.el, "." + this.classNames.track + "." + this.classNames.vertical);
        } else {
          this.wrapperEl = document.createElement("div");
          this.contentWrapperEl = document.createElement("div");
          this.offsetEl = document.createElement("div");
          this.maskEl = document.createElement("div");
          this.contentEl = document.createElement("div");
          this.placeholderEl = document.createElement("div");
          this.heightAutoObserverWrapperEl = document.createElement("div");
          this.heightAutoObserverEl = document.createElement("div");
          this.wrapperEl.classList.add(this.classNames.wrapper);
          this.contentWrapperEl.classList.add(this.classNames.contentWrapper);
          this.offsetEl.classList.add(this.classNames.offset);
          this.maskEl.classList.add(this.classNames.mask);
          this.contentEl.classList.add(this.classNames.contentEl);
          this.placeholderEl.classList.add(this.classNames.placeholder);
          this.heightAutoObserverWrapperEl.classList.add(this.classNames.heightAutoObserverWrapperEl);
          this.heightAutoObserverEl.classList.add(this.classNames.heightAutoObserverEl);
          while (this.el.firstChild) {
            this.contentEl.appendChild(this.el.firstChild);
          }
          this.contentWrapperEl.appendChild(this.contentEl);
          this.offsetEl.appendChild(this.contentWrapperEl);
          this.maskEl.appendChild(this.offsetEl);
          this.heightAutoObserverWrapperEl.appendChild(this.heightAutoObserverEl);
          this.wrapperEl.appendChild(this.heightAutoObserverWrapperEl);
          this.wrapperEl.appendChild(this.maskEl);
          this.wrapperEl.appendChild(this.placeholderEl);
          this.el.appendChild(this.wrapperEl);
        }
        if (!this.axis.x.track.el || !this.axis.y.track.el) {
          var track = document.createElement("div");
          var scrollbar = document.createElement("div");
          track.classList.add(this.classNames.track);
          scrollbar.classList.add(this.classNames.scrollbar);
          track.appendChild(scrollbar);
          this.axis.x.track.el = track.cloneNode(true);
          this.axis.x.track.el.classList.add(this.classNames.horizontal);
          this.axis.y.track.el = track.cloneNode(true);
          this.axis.y.track.el.classList.add(this.classNames.vertical);
          this.el.appendChild(this.axis.x.track.el);
          this.el.appendChild(this.axis.y.track.el);
        }
        this.axis.x.scrollbar.el = this.axis.x.track.el.querySelector("." + this.classNames.scrollbar);
        this.axis.y.scrollbar.el = this.axis.y.track.el.querySelector("." + this.classNames.scrollbar);
        if (!this.options.autoHide) {
          this.axis.x.scrollbar.el.classList.add(this.classNames.visible);
          this.axis.y.scrollbar.el.classList.add(this.classNames.visible);
        }
        this.el.setAttribute("data-simplebar", "init");
      };
      _proto.setAccessibilityAttributes = function setAccessibilityAttributes() {
        var ariaLabel = this.options.ariaLabel || "scrollable content";
        this.contentWrapperEl.setAttribute("tabindex", "0");
        this.contentWrapperEl.setAttribute("role", "region");
        this.contentWrapperEl.setAttribute("aria-label", ariaLabel);
      };
      _proto.initListeners = function initListeners() {
        var _this3 = this;
        var elWindow = getElementWindow(this.el);
        if (this.options.autoHide) {
          this.el.addEventListener("mouseenter", this.onMouseEnter);
        }
        ["mousedown", "click", "dblclick"].forEach(function(e) {
          _this3.el.addEventListener(e, _this3.onPointerEvent, true);
        });
        ["touchstart", "touchend", "touchmove"].forEach(function(e) {
          _this3.el.addEventListener(e, _this3.onPointerEvent, {
            capture: true,
            passive: true
          });
        });
        this.el.addEventListener("mousemove", this.onMouseMove);
        this.el.addEventListener("mouseleave", this.onMouseLeave);
        this.contentWrapperEl.addEventListener("scroll", this.onScroll);
        elWindow.addEventListener("resize", this.onWindowResize);
        var resizeObserverStarted = false;
        var resizeAnimationFrameId = null;
        var resizeObserver = elWindow.ResizeObserver || ResizeObserver;
        this.resizeObserver = new resizeObserver(function() {
          if (!resizeObserverStarted || resizeAnimationFrameId !== null)
            return;
          resizeAnimationFrameId = elWindow.requestAnimationFrame(function() {
            _this3.recalculate();
            resizeAnimationFrameId = null;
          });
        });
        this.resizeObserver.observe(this.el);
        this.resizeObserver.observe(this.contentEl);
        elWindow.requestAnimationFrame(function() {
          resizeObserverStarted = true;
        });
        this.mutationObserver = new elWindow.MutationObserver(this.recalculate);
        this.mutationObserver.observe(this.contentEl, {
          childList: true,
          subtree: true,
          characterData: true
        });
      };
      _proto.recalculate = function recalculate() {
        var elWindow = getElementWindow(this.el);
        this.elStyles = elWindow.getComputedStyle(this.el);
        this.isRtl = this.elStyles.direction === "rtl";
        var isHeightAuto = this.heightAutoObserverEl.offsetHeight <= 1;
        var isWidthAuto = this.heightAutoObserverEl.offsetWidth <= 1;
        var contentElOffsetWidth = this.contentEl.offsetWidth;
        var contentWrapperElOffsetWidth = this.contentWrapperEl.offsetWidth;
        var elOverflowX = this.elStyles.overflowX;
        var elOverflowY = this.elStyles.overflowY;
        this.contentEl.style.padding = "0px 20px 12px";
        this.wrapperEl.style.margin = "-" + this.elStyles.paddingTop + " -" + this.elStyles.paddingRight + " -" + this.elStyles.paddingBottom + " -" + this.elStyles.paddingLeft;
        var contentElScrollHeight = this.contentEl.scrollHeight;
        var contentElScrollWidth = this.contentEl.scrollWidth;
        this.contentWrapperEl.style.height = isHeightAuto ? "auto" : "100%";
        this.placeholderEl.style.width = isWidthAuto ? contentElOffsetWidth + "px" : "auto";
        this.placeholderEl.style.height = contentElScrollHeight + "px";
        var contentWrapperElOffsetHeight = this.contentWrapperEl.offsetHeight;
        this.axis.x.isOverflowing = contentElScrollWidth > contentElOffsetWidth;
        this.axis.y.isOverflowing = contentElScrollHeight > contentWrapperElOffsetHeight;
        this.axis.x.isOverflowing = elOverflowX === "hidden" ? false : this.axis.x.isOverflowing;
        this.axis.y.isOverflowing = elOverflowY === "hidden" ? false : this.axis.y.isOverflowing;
        this.axis.x.forceVisible = this.options.forceVisible === "x" || this.options.forceVisible === true;
        this.axis.y.forceVisible = this.options.forceVisible === "y" || this.options.forceVisible === true;
        this.hideNativeScrollbar();
        var offsetForXScrollbar = this.axis.x.isOverflowing ? this.scrollbarWidth : 0;
        var offsetForYScrollbar = this.axis.y.isOverflowing ? this.scrollbarWidth : 0;
        this.axis.x.isOverflowing = this.axis.x.isOverflowing && contentElScrollWidth > contentWrapperElOffsetWidth - offsetForYScrollbar;
        this.axis.y.isOverflowing = this.axis.y.isOverflowing && contentElScrollHeight > contentWrapperElOffsetHeight - offsetForXScrollbar;
        this.axis.x.scrollbar.size = this.getScrollbarSize("x");
        this.axis.y.scrollbar.size = this.getScrollbarSize("y");
        this.axis.x.scrollbar.el.style.width = this.axis.x.scrollbar.size + "px";
        this.axis.y.scrollbar.el.style.height = this.axis.y.scrollbar.size + "px";
        this.positionScrollbar("x");
        this.positionScrollbar("y");
        this.toggleTrackVisibility("x");
        this.toggleTrackVisibility("y");
      };
      _proto.getScrollbarSize = function getScrollbarSize(axis) {
        if (axis === void 0) {
          axis = "y";
        }
        if (!this.axis[axis].isOverflowing) {
          return 0;
        }
        var contentSize = this.contentEl[this.axis[axis].scrollSizeAttr];
        var trackSize = this.axis[axis].track.el[this.axis[axis].offsetSizeAttr];
        var scrollbarSize;
        var scrollbarRatio = trackSize / contentSize;
        scrollbarSize = Math.max(~~(scrollbarRatio * trackSize), this.options.scrollbarMinSize);
        if (this.options.scrollbarMaxSize) {
          scrollbarSize = Math.min(scrollbarSize, this.options.scrollbarMaxSize);
        }
        return scrollbarSize;
      };
      _proto.positionScrollbar = function positionScrollbar(axis) {
        if (axis === void 0) {
          axis = "y";
        }
        if (!this.axis[axis].isOverflowing) {
          return;
        }
        var contentSize = this.contentWrapperEl[this.axis[axis].scrollSizeAttr];
        var trackSize = this.axis[axis].track.el[this.axis[axis].offsetSizeAttr];
        var hostSize = parseInt(this.elStyles[this.axis[axis].sizeAttr], 10);
        var scrollbar = this.axis[axis].scrollbar;
        var scrollOffset = this.contentWrapperEl[this.axis[axis].scrollOffsetAttr];
        scrollOffset = axis === "x" && this.isRtl && SimpleBar22.getRtlHelpers().isRtlScrollingInverted ? -scrollOffset : scrollOffset;
        var scrollPourcent = scrollOffset / (contentSize - hostSize);
        var handleOffset = ~~((trackSize - scrollbar.size) * scrollPourcent);
        handleOffset = axis === "x" && this.isRtl && SimpleBar22.getRtlHelpers().isRtlScrollbarInverted ? handleOffset + (trackSize - scrollbar.size) : handleOffset;
        scrollbar.el.style.transform = axis === "x" ? "translate3d(" + handleOffset + "px, 0, 0)" : "translate3d(0, " + handleOffset + "px, 0)";
      };
      _proto.toggleTrackVisibility = function toggleTrackVisibility(axis) {
        if (axis === void 0) {
          axis = "y";
        }
        var track = this.axis[axis].track.el;
        var scrollbar = this.axis[axis].scrollbar.el;
        if (this.axis[axis].isOverflowing || this.axis[axis].forceVisible) {
          track.style.visibility = "visible";
          this.contentWrapperEl.style[this.axis[axis].overflowAttr] = "scroll";
        } else {
          track.style.visibility = "hidden";
          this.contentWrapperEl.style[this.axis[axis].overflowAttr] = "hidden";
        }
        if (this.axis[axis].isOverflowing) {
          scrollbar.style.display = "block";
        } else {
          scrollbar.style.display = "none";
        }
      };
      _proto.hideNativeScrollbar = function hideNativeScrollbar() {
        this.offsetEl.style[this.isRtl ? "left" : "right"] = this.axis.y.isOverflowing || this.axis.y.forceVisible ? "-" + this.scrollbarWidth + "px" : 0;
        this.offsetEl.style.bottom = this.axis.x.isOverflowing || this.axis.x.forceVisible ? "-" + this.scrollbarWidth + "px" : 0;
      };
      _proto.onMouseMoveForAxis = function onMouseMoveForAxis(axis) {
        if (axis === void 0) {
          axis = "y";
        }
        this.axis[axis].track.rect = this.axis[axis].track.el.getBoundingClientRect();
        this.axis[axis].scrollbar.rect = this.axis[axis].scrollbar.el.getBoundingClientRect();
        var isWithinScrollbarBoundsX = this.isWithinBounds(this.axis[axis].scrollbar.rect);
        if (isWithinScrollbarBoundsX) {
          this.axis[axis].scrollbar.el.classList.add(this.classNames.hover);
        } else {
          this.axis[axis].scrollbar.el.classList.remove(this.classNames.hover);
        }
        if (this.isWithinBounds(this.axis[axis].track.rect)) {
          this.showScrollbar(axis);
          this.axis[axis].track.el.classList.add(this.classNames.hover);
        } else {
          this.axis[axis].track.el.classList.remove(this.classNames.hover);
        }
      };
      _proto.onMouseLeaveForAxis = function onMouseLeaveForAxis(axis) {
        if (axis === void 0) {
          axis = "y";
        }
        this.axis[axis].track.el.classList.remove(this.classNames.hover);
        this.axis[axis].scrollbar.el.classList.remove(this.classNames.hover);
      };
      _proto.showScrollbar = function showScrollbar(axis) {
        if (axis === void 0) {
          axis = "y";
        }
        var scrollbar = this.axis[axis].scrollbar.el;
        if (!this.axis[axis].isVisible) {
          scrollbar.classList.add(this.classNames.visible);
          this.axis[axis].isVisible = true;
        }
        if (this.options.autoHide) {
          this.hideScrollbars();
        }
      };
      _proto.onDragStart = function onDragStart(e, axis) {
        if (axis === void 0) {
          axis = "y";
        }
        var elDocument = getElementDocument(this.el);
        var elWindow = getElementWindow(this.el);
        var scrollbar = this.axis[axis].scrollbar;
        var eventOffset = axis === "y" ? e.pageY : e.pageX;
        this.axis[axis].dragOffset = eventOffset - scrollbar.rect[this.axis[axis].offsetAttr];
        this.draggedAxis = axis;
        this.el.classList.add(this.classNames.dragging);
        elDocument.addEventListener("mousemove", this.drag, true);
        elDocument.addEventListener("mouseup", this.onEndDrag, true);
        if (this.removePreventClickId === null) {
          elDocument.addEventListener("click", this.preventClick, true);
          elDocument.addEventListener("dblclick", this.preventClick, true);
        } else {
          elWindow.clearTimeout(this.removePreventClickId);
          this.removePreventClickId = null;
        }
      };
      _proto.onTrackClick = function onTrackClick(e, axis) {
        var _this4 = this;
        if (axis === void 0) {
          axis = "y";
        }
        if (!this.options.clickOnTrack)
          return;
        var elWindow = getElementWindow(this.el);
        this.axis[axis].scrollbar.rect = this.axis[axis].scrollbar.el.getBoundingClientRect();
        var scrollbar = this.axis[axis].scrollbar;
        var scrollbarOffset = scrollbar.rect[this.axis[axis].offsetAttr];
        var hostSize = parseInt(this.elStyles[this.axis[axis].sizeAttr], 10);
        var scrolled = this.contentWrapperEl[this.axis[axis].scrollOffsetAttr];
        var t = axis === "y" ? this.mouseY - scrollbarOffset : this.mouseX - scrollbarOffset;
        var dir = t < 0 ? -1 : 1;
        var scrollSize = dir === -1 ? scrolled - hostSize : scrolled + hostSize;
        var scrollTo = function scrollTo2() {
          if (dir === -1) {
            if (scrolled > scrollSize) {
              var _this4$contentWrapper;
              scrolled -= _this4.options.clickOnTrackSpeed;
              _this4.contentWrapperEl.scrollTo((_this4$contentWrapper = {}, _this4$contentWrapper[_this4.axis[axis].offsetAttr] = scrolled, _this4$contentWrapper));
              elWindow.requestAnimationFrame(scrollTo2);
            }
          } else {
            if (scrolled < scrollSize) {
              var _this4$contentWrapper2;
              scrolled += _this4.options.clickOnTrackSpeed;
              _this4.contentWrapperEl.scrollTo((_this4$contentWrapper2 = {}, _this4$contentWrapper2[_this4.axis[axis].offsetAttr] = scrolled, _this4$contentWrapper2));
              elWindow.requestAnimationFrame(scrollTo2);
            }
          }
        };
        scrollTo();
      };
      _proto.getContentElement = function getContentElement() {
        return this.contentEl;
      };
      _proto.getScrollElement = function getScrollElement() {
        return this.contentWrapperEl;
      };
      _proto.getScrollbarWidth = function getScrollbarWidth() {
        try {
          if (getComputedStyle(this.contentWrapperEl, "::-webkit-scrollbar").display === "none" || "scrollbarWidth" in document.documentElement.style || "-ms-overflow-style" in document.documentElement.style) {
            return 0;
          } else {
            return scrollbarWidth(this.el);
          }
        } catch (e) {
          return scrollbarWidth(this.el);
        }
      };
      _proto.removeListeners = function removeListeners() {
        var _this5 = this;
        var elWindow = getElementWindow(this.el);
        if (this.options.autoHide) {
          this.el.removeEventListener("mouseenter", this.onMouseEnter);
        }
        ["mousedown", "click", "dblclick"].forEach(function(e) {
          _this5.el.removeEventListener(e, _this5.onPointerEvent, true);
        });
        ["touchstart", "touchend", "touchmove"].forEach(function(e) {
          _this5.el.removeEventListener(e, _this5.onPointerEvent, {
            capture: true,
            passive: true
          });
        });
        this.el.removeEventListener("mousemove", this.onMouseMove);
        this.el.removeEventListener("mouseleave", this.onMouseLeave);
        if (this.contentWrapperEl) {
          this.contentWrapperEl.removeEventListener("scroll", this.onScroll);
        }
        elWindow.removeEventListener("resize", this.onWindowResize);
        if (this.mutationObserver) {
          this.mutationObserver.disconnect();
        }
        if (this.resizeObserver) {
          this.resizeObserver.disconnect();
        }
        this.recalculate.cancel();
        this.onMouseMove.cancel();
        this.hideScrollbars.cancel();
        this.onWindowResize.cancel();
      };
      _proto.unMount = function unMount() {
        this.removeListeners();
        SimpleBar22.instances.delete(this.el);
      };
      _proto.isWithinBounds = function isWithinBounds(bbox) {
        return this.mouseX >= bbox.left && this.mouseX <= bbox.left + bbox.width && this.mouseY >= bbox.top && this.mouseY <= bbox.top + bbox.height;
      };
      _proto.findChild = function findChild(el, query) {
        var matches = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;
        return Array.prototype.filter.call(el.children, function(child) {
          return matches.call(child, query);
        })[0];
      };
      return SimpleBar22;
    }();
    SimpleBar2.defaultOptions = {
      autoHide: true,
      forceVisible: false,
      clickOnTrack: true,
      clickOnTrackSpeed: 40,
      classNames: {
        contentEl: "simplebar-content",
        contentWrapper: "simplebar-content-wrapper",
        offset: "simplebar-offset",
        mask: "simplebar-mask",
        wrapper: "simplebar-wrapper",
        placeholder: "simplebar-placeholder",
        scrollbar: "simplebar-scrollbar",
        track: "simplebar-track",
        heightAutoObserverWrapperEl: "simplebar-height-auto-observer-wrapper",
        heightAutoObserverEl: "simplebar-height-auto-observer",
        visible: "simplebar-visible",
        horizontal: "simplebar-horizontal",
        vertical: "simplebar-vertical",
        hover: "simplebar-hover",
        dragging: "simplebar-dragging"
      },
      scrollbarMinSize: 25,
      scrollbarMaxSize: 0,
      timeout: 1e3
    };
    SimpleBar2.instances = /* @__PURE__ */ new WeakMap();
    SimpleBar2.initDOMLoadedElements = function() {
      document.removeEventListener("DOMContentLoaded", this.initDOMLoadedElements);
      window.removeEventListener("load", this.initDOMLoadedElements);
      Array.prototype.forEach.call(document.querySelectorAll("[data-simplebar]"), function(el) {
        if (el.getAttribute("data-simplebar") !== "init" && !SimpleBar2.instances.has(el))
          new SimpleBar2(el, getOptions(el.attributes));
      });
    };
    SimpleBar2.removeObserver = function() {
      this.globalObserver.disconnect();
    };
    SimpleBar2.initHtmlApi = function() {
      this.initDOMLoadedElements = this.initDOMLoadedElements.bind(this);
      if (typeof MutationObserver !== "undefined") {
        this.globalObserver = new MutationObserver(SimpleBar2.handleMutations);
        this.globalObserver.observe(document, {
          childList: true,
          subtree: true
        });
      }
      if (document.readyState === "complete" || document.readyState !== "loading" && !document.documentElement.doScroll) {
        window.setTimeout(this.initDOMLoadedElements);
      } else {
        document.addEventListener("DOMContentLoaded", this.initDOMLoadedElements);
        window.addEventListener("load", this.initDOMLoadedElements);
      }
    };
    SimpleBar2.handleMutations = function(mutations) {
      mutations.forEach(function(mutation) {
        Array.prototype.forEach.call(mutation.addedNodes, function(addedNode) {
          if (addedNode.nodeType === 1) {
            if (addedNode.hasAttribute("data-simplebar")) {
              !SimpleBar2.instances.has(addedNode) && document.documentElement.contains(addedNode) && new SimpleBar2(addedNode, getOptions(addedNode.attributes));
            } else {
              Array.prototype.forEach.call(addedNode.querySelectorAll("[data-simplebar]"), function(el) {
                if (el.getAttribute("data-simplebar") !== "init" && !SimpleBar2.instances.has(el) && document.documentElement.contains(el))
                  new SimpleBar2(el, getOptions(el.attributes));
              });
            }
          }
        });
        Array.prototype.forEach.call(mutation.removedNodes, function(removedNode) {
          if (removedNode.nodeType === 1) {
            if (removedNode.getAttribute("data-simplebar") === "init") {
              SimpleBar2.instances.has(removedNode) && !document.documentElement.contains(removedNode) && SimpleBar2.instances.get(removedNode).unMount();
            } else {
              Array.prototype.forEach.call(removedNode.querySelectorAll('[data-simplebar="init"]'), function(el) {
                SimpleBar2.instances.has(el) && !document.documentElement.contains(el) && SimpleBar2.instances.get(el).unMount();
              });
            }
          }
        });
      });
    };
    SimpleBar2.getOptions = getOptions;
    if (import_can_use_dom.default) {
      SimpleBar2.initHtmlApi();
    }
    var simplebar_esm_default = SimpleBar2;
    window.SimpleBar = simplebar_esm_default;
  })();

  // ../nxt_theme/nxt_theme/public/js/tailwise/vendors/modal.js
  (() => {
    (function() {
      function getHighestZindex() {
        let zIndex = 9999;
        $(".modal").each(function() {
          if ($(this).css("z-index") !== "auto" && $(this).css("z-index") > zIndex) {
            zIndex = parseInt($(this).css("z-index"));
          }
        });
        return zIndex;
      }
      function getScrollbarWidth(el) {
        return window.innerWidth - $(el)[0].clientWidth;
      }
      function show(el) {
        if (!$("[data-modal-replacer='" + $(el).attr("id") + "']").length) {
          $(
            '<div data-modal-replacer="' + $(el).attr("id") + '"></div>'
          ).insertAfter(el);
          $(el).css({
            "margin-top": 0,
            "margin-left": 0
          });
          $(el).attr("aria-hidden", false).appendTo("body");
          setTimeout(() => {
            $(el).addClass("show").css("z-index", getHighestZindex() + 1);
            const event2 = new Event("shown.tw.modal");
            $(el)[0].dispatchEvent(event2);
          }, 200);
          $("body").css(
            "padding-right",
            parseInt($("body").css("padding-right")) + getScrollbarWidth("html") + "px"
          ).addClass("overflow-y-hidden");
          $(".modal").removeClass("overflow-y-auto").css("padding-left", "0px");
          $(el).addClass("overflow-y-auto").css("padding-left", getScrollbarWidth(el) + "px").addClass($(".modal.show").length ? "modal-overlap" : "");
          const event = new Event("show.tw.modal");
          $(el)[0].dispatchEvent(event);
        }
      }
      function hide(el) {
        if ($(el).hasClass("modal") && $(el).hasClass("show")) {
          let transitionDuration = parseFloat($(el).css("transition-duration").split(",")[1]) * 1e3;
          $(el).attr("aria-hidden", true).removeClass("show");
          setTimeout(() => {
            $(el).removeAttr("style").removeClass("modal-overlap").removeClass("overflow-y-auto");
            $(".modal").each(function() {
              if (parseInt($(this).css("z-index")) === getHighestZindex()) {
                $(this).addClass("overflow-y-auto").css("padding-left", getScrollbarWidth(this) + "px");
              }
            });
            if (getHighestZindex() == 9999) {
              $("body").removeClass("overflow-y-hidden").css("padding-right", "");
            }
            $('[data-modal-replacer="' + $(el).attr("id") + '"]').replaceWith(el);
            const event2 = new Event("hidden.tw.modal");
            $(el)[0].dispatchEvent(event2);
          }, transitionDuration);
          const event = new Event("hide.tw.modal");
          $(el)[0].dispatchEvent(event);
        }
      }
      function toggle(el) {
        if ($(el).hasClass("modal") && $(el).hasClass("show")) {
          hide(el);
        } else {
          show(el);
        }
      }
      function createInstance(el) {
        return {
          show() {
            show(el);
          },
          hide() {
            hide(el);
          },
          toggle() {
            toggle(el);
          }
        };
      }
      $("body").on("click", '[data-tw-toggle="modal"]', function() {
        show($(this).attr("data-tw-target"));
      });
      $("body").on("click", (event) => {
        if ($(event.target).hasClass("modal") && $(event.target).hasClass("show")) {
          if ($(event.target).data("tw-backdrop") !== "static") {
            hide(event.target);
          } else {
            $(event.target).addClass("modal-static");
            setTimeout(() => {
              $(event.target).removeClass("modal-static");
            }, 600);
          }
        }
      });
      $("body").on("click", '[data-tw-dismiss="modal"]', function() {
        let modal = $(this).closest(".modal")[0];
        hide(modal);
      });
      document.addEventListener("keydown", (event) => {
        if (event.code == "Escape") {
          let el = $(".modal.show").last();
          if ($(el).hasClass("modal") && $(el).hasClass("show") && ($(el).data("tw-keyboard") === void 0 || $(el).data("tw-keyboard") !== "false")) {
            if ($(el).data("tw-backdrop") !== "static") {
              hide(el);
            } else {
              $(el).addClass("modal-static");
              setTimeout(() => {
                $(el).removeClass("modal-static");
              }, 600);
            }
          }
        }
      });
      (function init() {
        $(".modal").each(function() {
          this["__modal"] = createInstance(this);
        });
        if (window.tailwind === void 0)
          window.tailwind = {};
        window.tailwind.Modal = {
          getInstance(el) {
            return el.__modal;
          },
          getOrCreateInstance(el) {
            return el.__modal === void 0 ? createInstance(el) : el.__modal;
          }
        };
      })();
    })();
  })();

  // ../nxt_theme/nxt_theme/public/js/tailwise/components/lucide.js
  (() => {
    (function() {
      "use strict";
      createIcons({
        icons,
        "stroke-width": 1.5,
        nameAttr: "data-lucide"
      });
    })();
  })();

  // ../nxt_theme/nxt_theme/public/js/tailwise/themes/echo.js
  (() => {
    (function() {
      "use strict";
      setTimeout(() => {
        $(".loading-page").addClass("loading-page--hide");
        setTimeout(() => {
          $(".loading-page").removeClass("loading-page--before-hide");
          $(".loading-page").removeClass("loading-page--hide");
        }, 300);
      }, 1e3);
      $(".side-menu__link").on("click", function() {
        if ($(this).parent().find("ul").length) {
          if ($(this).parent().find("ul").first()[0].offsetParent !== null) {
            $(this).find(".side-menu__link__chevron").removeClass("transform rotate-180");
            $(this).removeClass("side-menu__link--active-dropdown");
            $(this).parent().find("ul").first().slideUp(300, function() {
              $(this).removeClass("side-menu__link__sub-open");
            });
          } else {
            $(this).find(".side-menu__link__chevron").addClass("transform rotate-180");
            $(this).addClass("side-menu__link--active-dropdown");
            $(this).parent().find("ul").first().slideDown(300, function() {
              $(this).addClass("side-menu__link__sub-open");
            });
          }
        }
      });
      new SimpleBar($(".scrollable-ref").first()[0]);
      const backgroundMode = () => {
        if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
          $(".background").first().addClass("background--hidden");
          $(".top-bar").first().addClass("top-bar--active");
          $(".content.mode").first().removeClass("mode--light");
        } else {
          $(".background").first().removeClass("background--hidden");
          $(".top-bar").first().removeClass("top-bar--active");
          $(".content.mode").first().addClass("mode--light");
        }
      };
      backgroundMode();
      window.onscroll = () => {
        backgroundMode();
      };
      const compactMenu = localStorage.getItem("compactMenu");
      if (compactMenu === null || compactMenu === "true") {
        localStorage.setItem("compactMenu", "true");
        $(".side-menu").first().addClass("side-menu--collapsed");
        $(".content").first().addClass("content--compact");
      } else {
        $(".side-menu").first().removeClass("side-menu--collapsed");
        $(".content").first().removeClass("content--compact");
      }
      $(".side-menu .side-menu__content").each(function() {
        $(this).on("mouseover", function() {
          $(".side-menu").first().addClass("side-menu--on-hover");
        });
      });
      $(".side-menu .side-menu__content").each(function() {
        $(this).on("mouseleave", function() {
          $(".side-menu").first().removeClass("side-menu--on-hover");
        });
      });
      $(".toggle-compact-menu").first().on("click", function(event) {
        event.preventDefault();
        const compactMenu2 = localStorage.getItem("compactMenu");
        if (compactMenu2 === null || compactMenu2 === "true") {
          localStorage.setItem("compactMenu", "false");
          $(".side-menu").first().removeClass("side-menu--collapsed");
          $(".content").first().removeClass("content--compact");
        } else {
          localStorage.setItem("compactMenu", "true");
          $(".side-menu").first().addClass("side-menu--collapsed");
          $(".content").first().addClass("content--compact");
        }
      });
      $(".open-mobile-menu").first().on("click", function(event) {
        event.preventDefault();
        $(".side-menu").first().addClass("side-menu--mobile-menu-open");
        $(".close-mobile-menu").first().addClass("close-mobile-menu--mobile-menu-open");
      });
      $(".close-mobile-menu").first().on("click", function(event) {
        event.preventDefault();
        $(".side-menu").first().removeClass("side-menu--mobile-menu-open");
        $(".close-mobile-menu").first().removeClass("close-mobile-menu--mobile-menu-open");
      });
      $(".request-full-screen").first().on("click", function(event) {
        event.preventDefault();
        const el = document.documentElement;
        if (el.requestFullscreen) {
          el.requestFullscreen();
        }
      });
      window.onresize = () => {
        $(".side-menu").first().removeClass("side-menu--mobile-menu-open");
        $(".close-mobile-menu").first().removeClass("close-mobile-menu--mobile-menu-open");
        if (window.innerWidth <= 1600) {
          localStorage.setItem("compactMenu", "true");
          $(".side-menu").first().addClass("side-menu--collapsed");
          $(".content").f;
        }
      };
    })();
  })();

  // ../nxt_theme/nxt_theme/public/js/nxt_theme/sidebar.js
  $(document).on("click", ".link_to_page", (e) => {
    let el = e.currentTarget;
    let title = $(el).data("title");
    let is_public = $(el).data("is_public");
    let is_link = $(el).data("is_link");
    if (is_link) {
      frappe.set_route("List", title);
      return;
    }
    let url = "/app/";
    url += is_public ? frappe.router.slug(title) : "private/" + frappe.router.slug(title);
    frappe.set_route(url);
  });

  // ../nxt_theme/nxt_theme/public/js/nxt_theme/notification_panel.js
  $(document).on("click", "#mark_all_as_read", (e) => {
    frappe.call({
      method: "frappe.desk.doctype.notification_log.notification_log.mark_all_as_read",
      callback(r) {
        load_notification();
      }
    });
  });
  $(document).on("click", ".mark_as_read", (e) => {
    let docname = $(e.currentTarget).data("docname");
    let document_type = $(e.currentTarget).data("document_type");
    let document_name = $(e.currentTarget).data("document_name");
    frappe.call({
      method: "frappe.desk.doctype.notification_log.notification_log.mark_as_read",
      args: {
        docname
      },
      callback(r) {
        load_notification();
        if (document_type && document_name) {
          frappe.set_route("Form", document_type, document_name);
        }
      }
    });
  });
  $(document).on("click", "#notification_bell", (e) => {
    load_notification();
  });
  $("#user_avatar").append(frappe.avatar(frappe.session.user, "avatar-medium"));
  var load_notification = () => {
    frappe.call({
      method: "nxt_theme.events.notification_log.get_notification_logs",
      callback(r) {
        const notification_logs = r.message.notification_logs;
        const user_info = r.message.user_info;
        $("#notification_list").html(`
                <div class="d-flex align-items-center justify-content-center" style="height: 100vh;">
                    <span class="w-8 h-8">
                        <svg width="25" viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg" stroke="#64748b" class="w-full h-full"><g fill="none" fill-rule="evenodd" stroke-width="4"><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="0s" dur="1.8s" values="1; 20" calcMode="spline" keyTimes="0; 1" keySplines="0.165, 0.84, 0.44, 1" repeatCount="indefinite"></animate><animate attributeName="stroke-opacity" begin="0s" dur="1.8s" values="1; 0" calcMode="spline" keyTimes="0; 1" keySplines="0.3, 0.61, 0.355, 1" repeatCount="indefinite"></animate></circle><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="-0.9s" dur="1.8s" values="1; 20" calcMode="spline" keyTimes="0; 1" keySplines="0.165, 0.84, 0.44, 1" repeatCount="indefinite"></animate><animate attributeName="stroke-opacity" begin="-0.9s" dur="1.8s" values="1; 0" calcMode="spline" keyTimes="0; 1" keySplines="0.3, 0.61, 0.355, 1" repeatCount="indefinite"></animate></circle></g></svg>
                    </span>
                </div>
            `);
        let notification_html = "";
        for (const notification of notification_logs) {
          notification_html += `
                <a class="flex items-center rounded-xl px-3 py-2.5 hover:bg-slate-100/80 mark_as_read" 
                    data-docname="${notification.name}" data-document_type="${notification.document_type}" 
                    data-document_name="${notification.document_name}" href="javascript:;">
                    <div>
                        <div class="image-fit h-11 w-11 overflow-hidden rounded-full border-2 border-slate-200/70">
                        ${frappe.avatar(notification.from_user, "w-100 h-100")}
                        </div>
                    </div>
                    <div class="sm:ml-5">
                        <div class="font-medium">${notification.subject}</div>
                        <div class="mt-0.5 text-slate-500">
                            ${notification.email_content}
                        </div>

                        <div class="mt-1.5 text-xs text-slate-500">
                        ${frappe.datetime.str_to_user(notification.creation)}
                        </div>
                    </div>
                    ${notification.read ? "" : '<div class="ml-auto h-2 w-2 flex-none rounded-full border border-primary/40 bg-primary/40"></div>'}
                </a>
                `;
        }
        $("#notification_list").html(notification_html);
      }
    });
  };

  // ../nxt_theme/nxt_theme/public/js/nxt_theme/searchbar.js
  $(document).on("click", "#navbar-search+ul li", (e) => {
    $("#quick-search").trigger("click");
  });
  $(".searchbar").on("click", (e) => {
    let interval = setInterval(() => {
      if ($("#navbar-search:visible")) {
        $("#navbar-search").focus();
        clearInterval(interval);
      }
    }, 300);
  });
  $("#navbar-search").on("keydown", (e) => {
    if (e.key === "Enter" || e.keyCode === 13) {
      $("#quick-search").trigger("click");
    }
  });
  $(document).on("keydown", (e) => {
    if (e.key === "g" && e.metaKey) {
      $(".searchbar").trigger("click");
    }
  });

  // ../nxt_theme/nxt_theme/public/js/nxt_theme/calendar_view_override.js
  frappe.provide("frappe.views.calendar");
  frappe.provide("frappe.views.calendars");
  frappe.views.CalendarView = class CalendarView extends frappe.views.ListView {
    static load_last_view() {
      const route = frappe.get_route();
      if (route.length === 3) {
        const doctype = route[1];
        const user_settings = frappe.get_user_settings(doctype)["Calendar"] || {};
        route.push(user_settings.last_calendar || "default");
        frappe.route_flags.replace_route = true;
        frappe.set_route(route);
        return true;
      } else {
        return false;
      }
    }
    toggle_result_area() {
    }
    get view_name() {
      return "Calendar";
    }
    setup_defaults() {
      return super.setup_defaults().then(() => {
        this.page_title = __("{0} Calendar", [this.page_title]);
        this.calendar_settings = frappe.views.calendar[this.doctype] || {};
        this.calendar_name = frappe.get_route()[3];
      });
    }
    setup_page() {
      this.hide_page_form = true;
      super.setup_page();
    }
    setup_view() {
    }
    before_render() {
      super.before_render();
      this.save_view_user_settings({
        last_calendar: this.calendar_name
      });
    }
    render() {
      if (this.calendar) {
        this.calendar.refresh();
        return;
      }
      this.load_lib.then(() => this.get_calendar_preferences()).then((options) => {
        this.calendar = new frappe.views.Calendar(options);
      });
    }
    get_calendar_preferences() {
      const options = {
        doctype: this.doctype,
        parent: this.$result,
        page: this.page,
        list_view: this
      };
      const calendar_name = this.calendar_name;
      return new Promise((resolve) => {
        if (calendar_name === "default") {
          Object.assign(options, frappe.views.calendar[this.doctype]);
          resolve(options);
        } else {
          frappe.model.with_doc("Calendar View", calendar_name, () => {
            const doc = frappe.get_doc("Calendar View", calendar_name);
            if (!doc) {
              frappe.show_alert(
                __("{0} is not a valid Calendar. Redirecting to default Calendar.", [
                  calendar_name.bold()
                ])
              );
              frappe.set_route("List", this.doctype, "Calendar", "default");
              return;
            }
            let extra_fields = [];
            for (const row of doc.custom_extra_fields) {
              extra_fields.push(row.field_name);
            }
            Object.assign(options, {
              field_map: {
                id: "name",
                start: doc.start_date_field,
                end: doc.end_date_field,
                title: doc.subject_field,
                other_fields: extra_fields,
                allDay: doc.all_day ? 1 : 0
              }
            });
            resolve(options);
          });
        }
      });
    }
    get required_libs() {
      let assets = [
        "assets/frappe/js/lib/fullcalendar/fullcalendar.min.css",
        "assets/idara_deva/js/lib/fullcalendar/fullcalendar.min.js"
      ];
      let user_language = frappe.boot.lang;
      if (user_language && user_language !== "en") {
        assets.push("assets/frappe/js/lib/fullcalendar/locale-all.js");
      }
      return assets;
    }
  };
  frappe.views.Calendar = class Calendar {
    constructor(options) {
      $.extend(this, options);
      this.field_map = this.field_map || {
        id: "name",
        start: "start",
        end: "end",
        allDay: "all_day",
        convertToUserTz: "convert_to_user_tz"
      };
      this.color_map = {
        danger: "red",
        success: "green",
        warning: "orange",
        default: "blue"
      };
      this.get_default_options();
    }
    get_default_options() {
      return new Promise((resolve) => {
        let defaultView = localStorage.getItem("cal_defaultView");
        let weekends = localStorage.getItem("cal_weekends");
        let defaults = {
          defaultView: defaultView ? defaultView : "month",
          weekends: weekends ? weekends : true
        };
        resolve(defaults);
      }).then((defaults) => {
        this.make_page();
        this.setup_options(defaults);
        this.make();
        this.setup_view_mode_button(defaults);
        this.bind();
      });
    }
    make_page() {
      var me = this;
      me.page.clear_user_actions();
      $.each(frappe.boot.calendars, function(i, doctype) {
        if (frappe.model.can_read(doctype)) {
          me.page.add_menu_item(__(doctype), function() {
            frappe.set_route("List", doctype, "Calendar");
          });
        }
      });
      $(this.parent).on("show", function() {
        me.$cal.fullCalendar("refetchEvents");
      });
    }
    make() {
      this.$wrapper = this.parent;
      this.$cal = $("<div>").appendTo(this.$wrapper);
      this.footnote_area = frappe.utils.set_footnote(
        this.footnote_area,
        this.$wrapper,
        __("Select or drag across time slots to create a new event.")
      );
      this.footnote_area.css({ "border-top": "0px" });
      this.$cal.fullCalendar(this.cal_options);
      this.set_css();
    }
    setup_view_mode_button(defaults) {
      var me = this;
      $(me.footnote_area).find(".btn-weekend").detach();
      let btnTitle = defaults.weekends ? __("Hide Weekends") : __("Show Weekends");
      const btn = `<button class="btn btn-default btn-xs btn-weekend">${btnTitle}</button>`;
      me.footnote_area.append(btn);
    }
    set_localStorage_option(option, value) {
      localStorage.removeItem(option);
      localStorage.setItem(option, value);
    }
    bind() {
      const me = this;
      let btn_group = me.$wrapper.find(".fc-button-group");
      btn_group.on("click", ".btn", function() {
        let value = $(this).hasClass("fc-agendaWeek-button") ? "agendaWeek" : $(this).hasClass("fc-agendaDay-button") ? "agendaDay" : "month";
        me.set_localStorage_option("cal_defaultView", value);
      });
      me.$wrapper.on("click", ".btn-weekend", function() {
        me.cal_options.weekends = !me.cal_options.weekends;
        me.$cal.fullCalendar("option", "weekends", me.cal_options.weekends);
        me.set_localStorage_option("cal_weekends", me.cal_options.weekends);
        me.set_css();
        me.setup_view_mode_button(me.cal_options);
      });
    }
    set_css() {
      this.$wrapper.find("button.fc-state-default").removeClass("fc-state-default").addClass("btn btn-default");
      this.$wrapper.find(".fc-month-button, .fc-agendaWeek-button, .fc-agendaDay-button").wrapAll('<div class="btn-group" />');
      this.$wrapper.find(".fc-prev-button span").attr("class", "").html(frappe.utils.icon("left"));
      this.$wrapper.find(".fc-next-button span").attr("class", "").html(frappe.utils.icon("right"));
      this.$wrapper.find(".fc-today-button").prepend(frappe.utils.icon("today"));
      this.$wrapper.find(".fc-day-number").wrap('<div class="fc-day"></div>');
      var btn_group = this.$wrapper.find(".fc-button-group");
      btn_group.find(".fc-state-active").addClass("active");
      btn_group.find(".btn").on("click", function() {
        btn_group.find(".btn").removeClass("active");
        $(this).addClass("active");
      });
    }
    get_system_datetime(date) {
      date._offset = moment(date).tz(frappe.sys_defaults.time_zone)._offset;
      return frappe.datetime.convert_to_system_tz(moment(date).locale("en"));
    }
    setup_options(defaults) {
      var me = this;
      defaults.meridiem = "false";
      this.cal_options = {
        locale: frappe.boot.lang,
        header: {
          left: "prev, title, next",
          right: "today, month, agendaWeek, agendaDay"
        },
        editable: true,
        selectable: true,
        selectHelper: true,
        forceEventDuration: true,
        displayEventTime: true,
        defaultView: defaults.defaultView,
        weekends: defaults.weekends,
        nowIndicator: true,
        buttonText: {
          today: __("Today"),
          month: __("Month"),
          week: __("Week"),
          day: __("Day")
        },
        events: function(start, end, timezone, callback) {
          return frappe.call({
            method: me.get_events_method || "frappe.desk.calendar.get_events",
            type: "GET",
            args: me.get_args(start, end),
            callback: function(r) {
              var events = r.message || [];
              events = me.prepare_events(events);
              callback(events);
            }
          });
        },
        displayEventEnd: true,
        eventRender: function(event, element) {
          element.attr("title", event.tooltip);
        },
        eventClick: function(event) {
          var doctype = event.doctype || me.doctype;
          if (frappe.model.can_read(doctype)) {
            frappe.set_route("Form", doctype, event.name);
          }
        },
        eventDrop: function(event, delta, revertFunc) {
          me.update_event(event, revertFunc);
        },
        eventResize: function(event, delta, revertFunc) {
          me.update_event(event, revertFunc);
        },
        select: function(startDate, endDate, jsEvent, view) {
          if (view.name === "month" && endDate - startDate === 864e5) {
            return;
          }
          var event = frappe.model.get_new_doc(me.doctype);
          event[me.field_map.start] = me.get_system_datetime(startDate);
          if (me.field_map.end)
            event[me.field_map.end] = me.get_system_datetime(endDate);
          if (me.field_map.allDay) {
            var all_day = startDate._ambigTime && endDate._ambigTime ? 1 : 0;
            event[me.field_map.allDay] = all_day;
            if (all_day)
              event[me.field_map.end] = me.get_system_datetime(
                moment(endDate).subtract(1, "s")
              );
          }
          frappe.set_route("Form", me.doctype, event.name);
        },
        dayClick: function(date, jsEvent, view) {
          if (view.name === "month") {
            const $date_cell = $("td[data-date=" + date.format("YYYY-MM-DD") + "]");
            if ($date_cell.hasClass("date-clicked")) {
              me.$cal.fullCalendar("changeView", "agendaDay");
              me.$cal.fullCalendar("gotoDate", date);
              me.$wrapper.find(".date-clicked").removeClass("date-clicked");
              me.$wrapper.find(".fc-month-button").removeClass("active");
              me.$wrapper.find(".fc-agendaDay-button").addClass("active");
            }
            me.$wrapper.find(".date-clicked").removeClass("date-clicked");
            $date_cell.addClass("date-clicked");
          }
          return false;
        }
      };
      if (this.options) {
        $.extend(this.cal_options, this.options);
      }
    }
    get_args(start, end) {
      this.fields = [this.field_map.id, this.field_map.start, this.field_map.end, this.field_map.title];
      this.other_fields = this.field_map.other_fields;
      this.fields = [...this.fields, ...this.other_fields];
      var args = {
        doctype: this.doctype,
        start: this.get_system_datetime(start),
        end: this.get_system_datetime(end),
        fields: this.fields,
        filters: this.list_view.filter_area.get(),
        field_map: this.field_map
      };
      return args;
    }
    refresh() {
      this.$cal.fullCalendar("refetchEvents");
    }
    prepare_events(events) {
      var me = this;
      return (events || []).map((d) => {
        d.id = d.name;
        d.editable = frappe.model.can_write(d.doctype || me.doctype);
        if (d.docstatus && d.docstatus > 0) {
          d.editable = false;
        }
        $.each(me.field_map, function(target, source) {
          d[target] = d[source];
        });
        if (typeof d.allDay === "undefined") {
          d.allDay = me.field_map.allDay;
        }
        if (!me.field_map.convertToUserTz)
          d.convertToUserTz = 1;
        if (d.convertToUserTz) {
          d.start = frappe.datetime.convert_to_user_tz(d.start);
          d.end = frappe.datetime.convert_to_user_tz(d.end);
        }
        if (!frappe.datetime.validate(d.start) && d.end) {
          d.start = frappe.datetime.add_days(d.end, -1);
        }
        if (d.start && !frappe.datetime.validate(d.end)) {
          d.end = frappe.datetime.add_days(d.start, 1);
        }
        me.fix_end_date_for_event_render(d);
        me.prepare_colors(d);
        d.title = frappe.utils.html2text(d.title);
        for (const other_detail of me.other_fields) {
          if (d[other_detail]) {
            d.title += `<br> ${frappe.utils.html2text(d[other_detail])}`;
          }
        }
        return d;
      });
    }
    prepare_colors(d) {
      let color, color_name;
      if (this.get_css_class) {
        color_name = this.color_map[this.get_css_class(d)] || "blue";
        if (color_name.startsWith("#")) {
          color_name = frappe.ui.color.validate_hex(color_name) ? color_name : "blue";
        }
        d.backgroundColor = frappe.ui.color.get(color_name, "extra-light");
        d.textColor = frappe.ui.color.get(color_name, "dark");
      } else {
        color = Object.values(d).find((value) => typeof value === "string" && value.startsWith("#"));
        if (!frappe.ui.color.validate_hex(color) || !color) {
          color = frappe.ui.color.get("blue", "extra-light");
        }
        d.backgroundColor = color;
        d.textColor = frappe.ui.color.get_contrast_color(color);
      }
      return d;
    }
    update_event(event, revertFunc) {
      var me = this;
      frappe.model.remove_from_locals(me.doctype, event.name);
      return frappe.call({
        method: me.update_event_method || "frappe.desk.calendar.update_event",
        args: me.get_update_args(event),
        callback: function(r) {
          if (r.exc) {
            frappe.show_alert(__("Unable to update event"));
            revertFunc();
          }
        },
        error: function() {
          revertFunc();
        }
      });
    }
    get_update_args(event) {
      var me = this;
      var args = {
        name: event[this.field_map.id]
      };
      args[this.field_map.start] = me.get_system_datetime(event.start);
      if (this.field_map.allDay)
        args[this.field_map.allDay] = event.start._ambigTime && event.end._ambigTime ? 1 : 0;
      if (this.field_map.end) {
        if (!event.end) {
          event.end = event.start.add(1, "hour");
        }
        args[this.field_map.end] = me.get_system_datetime(event.end);
        if (args[this.field_map.allDay]) {
          args[this.field_map.end] = me.get_system_datetime(
            moment(event.end).subtract(1, "s")
          );
        }
      }
      args.doctype = event.doctype || this.doctype;
      return { args, field_map: this.field_map };
    }
    fix_end_date_for_event_render(event) {
      if (event.allDay) {
        event.start = event.start ? $.fullCalendar.moment(event.start).stripTime() : null;
        event.end = event.end ? $.fullCalendar.moment(event.end).add(1, "day").stripTime() : null;
      }
    }
  };
})();
//# sourceMappingURL=nxt_theme.bundle.LLWXCXQ6.js.map
