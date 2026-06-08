const themeToggle = document.getElementById('themeToggle');
const adminToggle = document.getElementById('adminToggle');
const adminPanel = document.getElementById('adminPanel');
const adminLoginButton = document.getElementById('adminLoginButton');
const postFormContainer = document.getElementById('postFormContainer');
const addPostButton = document.getElementById('addPostButton');
const postsGrid = document.getElementById('postsGrid');
const postHasPollCheckbox = document.getElementById('postHasPoll');
const pollFields = document.getElementById('pollFields');
const pollQuestionInput = document.getElementById('pollQuestion');
const pollOptionsContainer = document.getElementById('pollOptionsContainer');
const addPollOptionButton = document.getElementById('addPollOptionButton');
const pollMultipleChoicesCheckbox = document.getElementById('pollMultipleChoices');
const profileToggle = document.getElementById('profileToggle');
const profileSection = document.getElementById('profileSection');
const leaderboardToggle = document.getElementById('leaderboardToggle');
const leaderboardSection = document.getElementById('leaderboardSection');
const leaderboardModal = document.getElementById('leaderboardModal');
const closeLeaderboardModal = document.getElementById('closeLeaderboardModal');
const profileAvatar = document.getElementById('profileAvatar');
const profileAvatarBorderWrapper = document.getElementById('profileAvatarBorderWrapper');
const profileAvatarInput = document.getElementById('profileAvatarInput');
const profileNameDisplay = document.getElementById('profileNameDisplay');
const profileLevelDisplay = document.getElementById('profileLevelDisplay');
const profileProgressFill = document.getElementById('profileProgressFill');
const profileXpText = document.getElementById('profileXpText');
const profileRewardMessage = document.getElementById('profileRewardMessage');
const adminLevelActions = document.getElementById('adminLevelActions');
const adminLevelAmountInput = document.getElementById('adminLevelAmount');
const addProfileLevelButton = document.getElementById('addProfileLevelButton');
const removeProfileLevelButton = document.getElementById('removeProfileLevelButton');
const adminRoleActions = document.getElementById('adminRoleActions');
const adminRoleNameInput = document.getElementById('adminRoleNameInput');
const adminRoleColorInput = document.getElementById('adminRoleColorInput');
const addProfileRoleButton = document.getElementById('addProfileRoleButton');
const profileRolesContainer = document.getElementById('profileRolesContainer');
const shopToggle = document.getElementById('shopToggle');
const shopModal = document.getElementById('shopModal');
const closeShopModal = document.getElementById('closeShopModal');
const profileBorderLabel = document.getElementById('profileBorderLabel');
const borderOptions = document.getElementById('borderOptions');
const profileNameInput = document.getElementById('profileNameInput');
const saveProfileButton = document.getElementById('saveProfileButton');
const deleteAccountButton = document.getElementById('deleteAccountButton');
const adminDeleteSection = document.getElementById('adminDeleteSection');
const adminDeleteCodeInput = document.getElementById('adminDeleteCodeInput');
const adminDeleteAccountButton = document.getElementById('adminDeleteAccountButton');
const rewardList = document.getElementById('rewardList');
const headerProfileAvatar = document.getElementById('headerProfileAvatar');
const headerProfileAvatarWrapper = document.getElementById('headerProfileAvatarWrapper');
const headerProfileName = document.getElementById('headerProfileName');
const headerProfileRoleContainer = document.getElementById('headerProfileRoleContainer');
const headerProfileLevel = document.getElementById('headerProfileLevel');
const headerProfileProgressFill = document.getElementById('headerProfileProgressFill');
const headerCoinCount = document.getElementById('headerCoinCount');
const visitorCounterDisplay = document.getElementById('visitorCounter');
const loginCodeInput = document.getElementById('loginCodeInput');
const loginButton = document.getElementById('loginButton');
const logoutButton = document.getElementById('logoutButton');
const loginMessage = document.getElementById('loginMessage');
const profileLoginCodeDisplay = document.getElementById('profileLoginCode');
const profileConnectionInfo = document.getElementById('profileConnectionInfo');
const battlePassClaimButton = document.getElementById('battlePassClaimButton');
const battlePassStatus = document.getElementById('battlePassStatus');
const profileCoinCount = document.getElementById('profileCoinCount');
const LEADERBOARD_KEY = 'siteLeaderboard';
const PROFILES_COLLECTION = 'profiles';
const ACTIVE_VISITORS_COLLECTION = 'activeVisitors';
let visitorDocId = localStorage.getItem('visitorDocId') || null;
let visitorPresenceInterval = null;
let visitorCountRefreshInterval = null;
let activeVisitorDocs = [];
let activeVisitorsUnsubscribe = null;
const leaderboardList = document.getElementById('leaderboardList');
const leaderboardProfileAvatar = document.getElementById('leaderboardProfileAvatar');
const leaderboardAvatarWrapper = document.getElementById('leaderboardAvatarWrapper');
const leaderboardProfileName = document.getElementById('leaderboardProfileName');
const leaderboardProfileLevel = document.getElementById('leaderboardProfileLevel');
const leaderboardProfileXpText = document.getElementById('leaderboardProfileXpText');
const leaderboardProfileBorder = document.getElementById('leaderboardProfileBorder');
const leaderboardProfileBadges = document.getElementById('leaderboardProfileBadges');
let leaderboardUsers = [];
let selectedLeaderboardId = null;

const levelsManagementContainer = document.getElementById('levelsManagementContainer');
const levelsContainer = document.getElementById('levelsContainer');
const addLevelButton = document.getElementById('addLevelButton');
const applyLevelsButton = document.getElementById('applyLevelsButton');

const adminPassword = '1583ADMIN'; // Mot de passe pour accéder au panneau admin (à changer pour plus de sécurité)
let isAdmin = false;
let posts = [];
let likedPosts = [];
let likedPostsHistory = [];
let sharedPosts = [];
let userVotes = {};
let editingPostId = null;
let contactEmail = '';
let contactName = '';
let editedLevelRewards = {};

const PROFILE_KEY = 'siteUserProfile';
const MAX_LEVEL = 1000;
const XP_PER_LEVEL = 100;
const BATTLE_PASS_COINS = 100;
const BORDER_SHOP = {
  'Bordure Lunaire 1': { price: 1000, image: './bordurelunaire1.png' },
  'Bordure Lunaire 2': { price: 2500, image: './bordurelunaire2.png' },
  'Bordure Lunaire 3': { price: 5000, image: './bordurelunaire3.png' }
};
const LEVEL_COIN_MILESTONES = {
  10: 200,
  20: 200,
  30: 200,
  40: 200,
  50: 200,
  60: 200,
  70: 200,
  80: 200,
  90: 200,
  100: 200,
  150: 500,
  200: 500,
  250: 500,
  300: 500,
  350: 500,
  400: 500,
  450: 500,
  500: 1000,
  600: 1000,
  700: 1000,
  800: 1000,
  900: 1000,
  1000: 2000
};
const LEVEL_REWARDS = {
  5: 'Badge Novice',
  10: 'Badge Explorateur',
  20: 'Badge Champion',
  25: 'Bordure 1',
  30: 'Badge Expert',
  50: 'Badge Maître',
  60: 'Bordure 2',
  75: 'Badge Élite',
  90: 'Bordure 3',
  100: 'Badge Légende',
  1000: 'Badge DIEUX'
};

let userProfile = {
  name: 'Invité',
  avatar: '',
  totalXp: 0,
  rewards: [],
  ownedBorders: [],
  selectedBorder: '',
  coins: 0,
  battlePassClaimed: false,
  firstVisitTime: null,
  roles: []
};

const OPENAI_API_KEY = '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'; // Clé OpenAI non configurée par défaut, utilisation de l’IA locale.
const OPENAI_MODEL = 'gpt-3.5-turbo';

function updateButtonText() {
  const isDark = document.documentElement.classList.contains('dark');
  themeToggle.textContent = isDark ? 'Mode clair' : 'Mode sombre';
}

function loadPosts() {
  const stored = localStorage.getItem('sitePosts');
  posts = stored ? JSON.parse(stored) : [];
  posts.forEach(post => {
    if (typeof post.likes !== 'number') post.likes = 0;
    if (typeof post.pollQuestion !== 'string') post.pollQuestion = '';
    if (!Array.isArray(post.pollOptions)) post.pollOptions = [];
    post.pollOptions = post.pollOptions.map(option => ({
      text: option.text || '',
      votes: typeof option.votes === 'number' ? option.votes : 0,
    }));
    if (typeof post.multipleChoices !== 'boolean') post.multipleChoices = false;
    if (typeof post.isGiveaway !== 'boolean') post.isGiveaway = false;
    if (typeof post.giveawayAmount !== 'number') post.giveawayAmount = 0;
    if (!Array.isArray(post.participants)) post.participants = [];
    if (typeof post.giveawayCompleted !== 'boolean') post.giveawayCompleted = false;
    if (!post.giveawayWinner) post.giveawayWinner = null;
  });
  likedPosts = JSON.parse(localStorage.getItem('likedPosts')) || [];
  loadLikedHistory();
  loadSharedPosts();
}

function savePosts() {
  localStorage.setItem('sitePosts', JSON.stringify(posts));
}

let firestoreReady = false;
let db = null;
let postsCollection = null;
let leaderboardCollection = null;
let profilesCollection = null;

function initFirebase() {
  const firebaseConfig = {
    apiKey: "AIzaSyD1MwdQALxSR63rPYVch_p3j-0FrgWOJ04",
    authDomain: "mon-site-web-ec48a.firebaseapp.com",
    projectId: "mon-site-web-ec48a",
    storageBucket: "mon-site-web-ec48a.firebasestorage.app",
    messagingSenderId: "609638615194",
    appId: "1:609638615194:web:427b4ad948931e7481b723"
  };

  try {
    firebase.initializeApp(firebaseConfig);
    db = firebase.firestore();
    postsCollection = db.collection('posts');
    leaderboardCollection = db.collection('leaderboard');
    profilesCollection = db.collection(PROFILES_COLLECTION);
    firestoreReady = true;
    subscribePosts();
    subscribeLeaderboard();
    updateLeaderboardForCurrentUser();
    startVisitorPresence();
    if (userProfile.loginCode) {
      saveProfileToFirestore();
    }
  } catch (error) {
    console.warn('Firebase n\'a pas pu être initialisé :', error);
  }
}

function subscribePosts() {
  if (!firestoreReady) return;
  postsCollection.orderBy('createdAt', 'desc').onSnapshot(snapshot => {
    posts = [];
    snapshot.forEach(doc => {
      const data = doc.data();
      posts.push({
        id: doc.id,
        title: data.title || '',
        text: data.text || '',
        mediaType: data.mediaType || 'none',
        mediaUrl: data.mediaUrl || '',
        likes: typeof data.likes === 'number' ? data.likes : 0,
        pollQuestion: data.pollQuestion || '',
        pollOptions: Array.isArray(data.pollOptions) ? data.pollOptions.map(option => ({
          text: option.text || '',
          votes: typeof option.votes === 'number' ? option.votes : 0,
        })) : [],
        multipleChoices: typeof data.multipleChoices === 'boolean' ? data.multipleChoices : false,
        isGiveaway: data.isGiveaway || false,
        giveawayAmount: data.giveawayAmount || 0,
        participants: Array.isArray(data.participants) ? data.participants : [],
        giveawayCompleted: data.giveawayCompleted || false,
        giveawayWinner: data.giveawayWinner || null,
        createdAt: data.createdAt || ''
      });
    });
    savePosts();
    renderPosts();
  }, error => {
    console.error('Erreur Firestore posts :', error);
  });
}

function subscribeLeaderboard() {
  if (!firestoreReady || !leaderboardCollection) return;
  leaderboardCollection.orderBy('totalXp', 'desc').onSnapshot(snapshot => {
    leaderboardUsers = [];
    snapshot.forEach(doc => {
      const data = doc.data();
      leaderboardUsers.push({
        id: data.id || doc.id,
        name: data.name || 'Invité',
        avatar: data.avatar || 'https://via.placeholder.com/80?text=Avatar',
        totalXp: typeof data.totalXp === 'number' ? data.totalXp : 0,
        rewards: Array.isArray(data.rewards) ? data.rewards : [],
        ownedBorders: Array.isArray(data.ownedBorders) ? data.ownedBorders : [],
        selectedBorder: data.selectedBorder || '',
        coins: typeof data.coins === 'number' ? data.coins : 0
      });
    });
    renderLeaderboard();
  }, error => {
    console.error('Erreur Firestore leaderboard :', error);
  });
}

function generateVisitorDocId() {
  return `visitor_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`;
}

function getMinuteVisitorCount() {
  const oneMinuteAgo = Date.now() - 60000;
  return activeVisitorDocs.filter(doc => {
    if (!doc.lastSeen || typeof doc.lastSeen.toDate !== 'function') return false;
    return doc.lastSeen.toDate().getTime() >= oneMinuteAgo;
  }).length;
}

function renderVisitorCount() {
  if (!visitorCounterDisplay) return;
  visitorCounterDisplay.textContent = String(getMinuteVisitorCount());
}

function subscribeVisitorCount() {
  if (!firestoreReady || !db) return;
  if (activeVisitorsUnsubscribe) {
    activeVisitorsUnsubscribe();
  }
  const activeVisitorsRef = db.collection(ACTIVE_VISITORS_COLLECTION);
  activeVisitorsUnsubscribe = activeVisitorsRef.onSnapshot(snapshot => {
    activeVisitorDocs = snapshot.docs.map(doc => doc.data());
    renderVisitorCount();
  }, error => {
    console.error('Erreur Firestore visiteurs :', error);
  });

  if (visitorCountRefreshInterval) {
    clearInterval(visitorCountRefreshInterval);
  }
  visitorCountRefreshInterval = setInterval(renderVisitorCount, 5000);
}

function updateVisitorPresence() {
  if (!firestoreReady || !db || !visitorDocId) return;
  db.collection(ACTIVE_VISITORS_COLLECTION).doc(visitorDocId).set({
    lastSeen: firebase.firestore.FieldValue.serverTimestamp()
  }, { merge: true }).catch(error => {
    console.error('Erreur mise à jour présence visiteur :', error);
  });
}

function startVisitorPresence() {
  if (!visitorDocId) {
    visitorDocId = generateVisitorDocId();
    localStorage.setItem('visitorDocId', visitorDocId);
  }
  updateVisitorPresence();
  if (visitorPresenceInterval) {
    clearInterval(visitorPresenceInterval);
  }
  visitorPresenceInterval = setInterval(updateVisitorPresence, 15000);
  subscribeVisitorCount();
}

function saveLikedPosts() {
  localStorage.setItem('likedPosts', JSON.stringify(likedPosts));
}

function saveLikedHistory() {
  localStorage.setItem('likedPostsHistory', JSON.stringify(likedPostsHistory));
}

function saveSharedPosts() {
  localStorage.setItem('sharedPosts', JSON.stringify(sharedPosts));
}

function loadSharedPosts() {
  sharedPosts = JSON.parse(localStorage.getItem('sharedPosts')) || [];
}

function loadLikedHistory() {
  likedPostsHistory = JSON.parse(localStorage.getItem('likedPostsHistory')) || [];
}

function loadVotedPolls() {
  userVotes = JSON.parse(localStorage.getItem('userVotes')) || {};
}

function saveVotedPolls() {
  localStorage.setItem('userVotes', JSON.stringify(userVotes));
}

function generateUserId() {
  return 'user-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9);
}

function loadProfile() {
  const stored = localStorage.getItem(PROFILE_KEY);
  if (stored) {
    try {
      const parsed = JSON.parse(stored);
      if (parsed && typeof parsed === 'object') {
        userProfile = {
          ...userProfile,
          ...parsed,
          rewards: Array.isArray(parsed.rewards) ? parsed.rewards : [],
          ownedBorders: Array.isArray(parsed.ownedBorders) ? parsed.ownedBorders : [],
          selectedBorder: typeof parsed.selectedBorder === 'string' ? parsed.selectedBorder : '',
          coins: typeof parsed.coins === 'number' ? parsed.coins : 0,
          battlePassClaimed: typeof parsed.battlePassClaimed === 'boolean' ? parsed.battlePassClaimed : false,
          firstVisitTime: typeof parsed.firstVisitTime === 'number' ? parsed.firstVisitTime : null
        };
      }
    } catch (error) {
      console.warn('Impossible de charger le profil :', error);
    }
  }
  
  // Initialiser firstVisitTime et ID utilisateur si c'est la première visite
  if (!userProfile.firstVisitTime) {
    userProfile.firstVisitTime = Date.now();
    userProfile.id = generateUserId();
    saveProfile();
  }
  
  // Générer un ID si absent (pour les anciens profils)
  if (!userProfile.id) {
    userProfile.id = generateUserId();
    saveProfile();
  }
}

function saveProfile() {
  if (!userProfile.loginCode && userProfile.name && userProfile.name !== 'Invité') {
    userProfile.loginCode = generateLoginCode();
  }
  localStorage.setItem(PROFILE_KEY, JSON.stringify(userProfile));
  if (firestoreReady && userProfile.loginCode && profilesCollection) {
    saveProfileToFirestore();
  }
  updateLeaderboardForCurrentUser();
  renderProfile();
}

function saveProfileToFirestore() {
  if (!firestoreReady || !profilesCollection || !userProfile.loginCode) return;
  const profileDoc = {
    id: userProfile.id || generateUserId(),
    loginCode: userProfile.loginCode,
    name: userProfile.name || 'Invité',
    avatar: userProfile.avatar || '',
    totalXp: userProfile.totalXp || 0,
    rewards: Array.isArray(userProfile.rewards) ? userProfile.rewards : [],
    ownedBorders: Array.isArray(userProfile.ownedBorders) ? userProfile.ownedBorders : [],
    selectedBorder: userProfile.selectedBorder || '',
    coins: userProfile.coins || 0,
    battlePassClaimed: userProfile.battlePassClaimed || false,
    firstVisitTime: userProfile.firstVisitTime || Date.now(),
    roles: Array.isArray(userProfile.roles) ? userProfile.roles : []
  };
  profilesCollection.doc(userProfile.loginCode).set(profileDoc).catch(error => {
    console.error('Erreur sauvegarde profil Firestore :', error);
  });
}

function sanitizeProfileData(data) {
  return {
    ...userProfile,
    id: data.id || userProfile.id || generateUserId(),
    loginCode: data.loginCode || userProfile.loginCode || '',
    name: data.name || 'Invité',
    avatar: data.avatar || '',
    totalXp: typeof data.totalXp === 'number' ? data.totalXp : 0,
    rewards: Array.isArray(data.rewards) ? data.rewards : [],
    ownedBorders: Array.isArray(data.ownedBorders) ? data.ownedBorders : [],
    selectedBorder: data.selectedBorder || '',
    coins: typeof data.coins === 'number' ? data.coins : 0,
    battlePassClaimed: typeof data.battlePassClaimed === 'boolean' ? data.battlePassClaimed : false,
    firstVisitTime: typeof data.firstVisitTime === 'number' ? data.firstVisitTime : Date.now(),
    roles: Array.isArray(data.roles) ? data.roles : []
  };
}

function generateLoginCode() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let code = '';
  for (let i = 0; i < 6; i += 1) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return code;
}

function showLoginMessage(message, isError = true) {
  if (!loginMessage) return;
  loginMessage.textContent = message;
  loginMessage.style.color = isError ? '#dc2626' : '#047857';
}

function logoutAccount() {
  localStorage.removeItem(PROFILE_KEY);
  userProfile = {
    name: 'Invité',
    avatar: '',
    totalXp: 0,
    rewards: [],
    ownedBorders: [],
    selectedBorder: '',
    coins: 0,
    battlePassClaimed: false,
    firstVisitTime: Date.now(),
    id: generateUserId(),
    roles: []
  };
  renderProfile();
  renderHeaderProfile();
  updateProfileMessage('Déconnecté. Utilise ton code pour te reconnecter sur un autre appareil.');
}

function loginWithCode() {
  if (!loginCodeInput || !profilesCollection || !firestoreReady) {
    showLoginMessage('Connexion impossible : Firebase non disponible.');
    return;
  }
  const code = (loginCodeInput.value || '').toUpperCase().trim();
  if (code.length !== 6) {
    showLoginMessage('Le code doit contenir 6 caractères alphanumériques.');
    return;
  }
  profilesCollection.doc(code).get().then(doc => {
    if (!doc.exists) {
      showLoginMessage('Code introuvable. Vérifie ton code et réessaie.');
      return;
    }
    userProfile = sanitizeProfileData(doc.data());
    userProfile.loginCode = code;
    saveProfile();
    if (loginCodeInput) loginCodeInput.value = '';
    renderProfile();
    showLoginMessage('Connexion réussie.', false);
    updateProfileMessage('Connecté avec succès.');
  }).catch(error => {
    console.error('Erreur de connexion par code :', error);
    showLoginMessage('Erreur de connexion. Essaie plus tard.');
  });
}

function createSampleLeaderboardUsers() {
  const firstNames = ['Luna', 'Kai', 'Milo', 'Noa', 'Zoe', 'Nora', 'Leo', 'Sasha', 'Aya', 'Maya'];
  const lastNames = ['Nova', 'Soleil', 'Flamme', 'Pixel', 'Aube', 'Ombre', 'Astra', 'Volt', 'Pulse', 'Echo'];
  const users = [];

  for (let i = 0; i < 100; i += 1) {
    const name = `${firstNames[i % firstNames.length]} ${lastNames[i % lastNames.length]}`;
    let level = 100 - Math.floor(i * 0.85) - Math.floor(Math.random() * 3);
    level = Math.max(1, level);
    const totalXp = Math.min(MAX_LEVEL * XP_PER_LEVEL, (level - 1) * XP_PER_LEVEL + Math.floor(Math.random() * XP_PER_LEVEL));
    const rewards = [];
    const ownedBorders = [];

    Object.keys(LEVEL_REWARDS).forEach((levelKey) => {
      const rewardLevel = Number(levelKey);
      if (level >= rewardLevel) {
        rewards.push(LEVEL_REWARDS[levelKey]);
      }
    });

    if (level >= 25) ownedBorders.push('Bordure 1');
    if (level >= 60) ownedBorders.push('Bordure 2');
    if (level >= 90) ownedBorders.push('Bordure 3');

    const selectedBorder = ownedBorders.length ? ownedBorders[Math.min(ownedBorders.length - 1, Math.floor(Math.random() * ownedBorders.length))] : '';
    const avatar = `https://via.placeholder.com/80?text=${encodeURIComponent(name.split(' ')[0].charAt(0))}`;
    const coins = Math.max(0, (level - 1) * 50 + Math.floor(Math.random() * 150));

    users.push({
      id: `rank-${i + 1}`,
      name,
      totalXp,
      rewards,
      ownedBorders,
      selectedBorder,
      avatar,
      coins
    });
  }

  return users.sort((a, b) => getProfileLevel(b.totalXp) - getProfileLevel(a.totalXp) || b.totalXp - a.totalXp);
}

function loadLeaderboard() {
  // Leaderboard is loaded automatically via subscribeLeaderboard() from Firestore
}

function saveLeaderboard() {
  // Leaderboard changes are saved automatically to Firestore in updateLeaderboardForCurrentUser()
}

function getCurrentUserLeaderboardEntry() {
  return {
    id: 'current-user',
    name: userProfile.name || 'Invité',
    avatar: userProfile.avatar || 'https://via.placeholder.com/80?text=Avatar',
    totalXp: userProfile.totalXp || 0,
    rewards: Array.isArray(userProfile.rewards) ? userProfile.rewards : [],
    ownedBorders: Array.isArray(userProfile.ownedBorders) ? userProfile.ownedBorders : [],
    selectedBorder: userProfile.selectedBorder || '',
    coins: userProfile.coins || 0,
    roles: Array.isArray(userProfile.roles) ? userProfile.roles : []
  };
}

function updateLeaderboardForCurrentUser() {
  if (!firestoreReady || !leaderboardCollection) return;
  
  const userId = userProfile.id || 'current-user';
  const currentEntry = {
    id: userId,
    loginCode: userProfile.loginCode || '',
    name: userProfile.name || 'Invité',
    avatar: userProfile.avatar || 'https://via.placeholder.com/80?text=Avatar',
    totalXp: userProfile.totalXp || 0,
    rewards: Array.isArray(userProfile.rewards) ? userProfile.rewards : [],
    ownedBorders: Array.isArray(userProfile.ownedBorders) ? userProfile.ownedBorders : [],
    selectedBorder: userProfile.selectedBorder || '',
    coins: userProfile.coins || 0,
    roles: Array.isArray(userProfile.roles) ? userProfile.roles : []
  };
  
  // Sauvegarder dans Firestore avec l'ID utilisateur unique
  leaderboardCollection.doc(userId).set(currentEntry).catch(error => {
    console.error('Erreur mise à jour leaderboard :', error);
  });
}

function getDisplayBadges(user) {
  return (Array.isArray(user.rewards) ? user.rewards : []).filter((reward) => !reward.startsWith('Bordure'));
}

function showLeaderboardProfile(user) {
  if (!user) return;
  openLeaderboardModal(user);
}

function renderLeaderboard() {
  if (!leaderboardList) return;
  const filteredUsers = leaderboardUsers.filter(u => !u.id.startsWith('rank-'));
  filteredUsers.sort((a, b) => getProfileLevel(b.totalXp) - getProfileLevel(a.totalXp) || b.totalXp - a.totalXp);
  leaderboardList.innerHTML = '';

  filteredUsers.slice(0, 100).forEach((user, index) => {
    const level = getProfileLevel(user.totalXp);
    const item = document.createElement('div');
    item.className = 'leaderboard-item';
    item.tabIndex = 0;
    item.setAttribute('role', 'button');
    item.addEventListener('click', () => showLeaderboardProfile(user));
    item.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        showLeaderboardProfile(user);
      }
    });
    
    // Rang
    const rankSpan = document.createElement('span');
    rankSpan.className = 'leaderboard-item-rank';
    rankSpan.textContent = index + 1;
    item.appendChild(rankSpan);
    
    // Wrapper pour l'avatar avec bordure
    const avatarWrapper = document.createElement('div');
    avatarWrapper.className = 'avatar-wrapper';
    avatarWrapper.dataset.border = user.selectedBorder || '';
    
    const avatar = document.createElement('img');
    avatar.className = 'leaderboard-item-avatar';
    avatar.src = user.avatar;
    avatar.alt = `Avatar ${user.name}`;
    
    avatarWrapper.appendChild(avatar);
    item.appendChild(avatarWrapper);
    
    // Données
    const dataDiv = document.createElement('div');
    dataDiv.className = 'leaderboard-item-data';
    
    const nameDiv = document.createElement('div');
    nameDiv.className = 'leaderboard-item-name';
    nameDiv.textContent = user.name;
    
    const levelDiv = document.createElement('div');
    levelDiv.className = 'leaderboard-item-level';
    levelDiv.textContent = `Niveau ${level}`;
    
    const rolesDiv = document.createElement('div');
    rolesDiv.className = 'leaderboard-item-roles';
    if (Array.isArray(user.roles) && user.roles.length > 0) {
      user.roles.forEach((role) => {
        const badge = document.createElement('span');
        badge.className = 'leaderboard-role-badge';
        badge.textContent = role.name;
        badge.style.backgroundColor = role.color || '#999999';
        badge.style.color = getContrastColor(role.color || '#999999');
        rolesDiv.appendChild(badge);
      });
    }
    
    dataDiv.appendChild(nameDiv);
    dataDiv.appendChild(levelDiv);
    dataDiv.appendChild(rolesDiv);
    item.appendChild(dataDiv);

    if (isAdmin) {
      const adminRoleBtn = document.createElement('button');
      adminRoleBtn.type = 'button';
      adminRoleBtn.className = 'button button-small button-secondary leaderboard-role-action';
      adminRoleBtn.textContent = 'Gérer rôles';
      adminRoleBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        manageLeaderboardRoles(user);
      });
      adminRoleBtn.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          e.stopPropagation();
          manageLeaderboardRoles(user);
        }
      });
      item.appendChild(adminRoleBtn);

      const deleteUserBtn = document.createElement('button');
      deleteUserBtn.type = 'button';
      deleteUserBtn.className = 'button button-small button-danger leaderboard-role-action';
      deleteUserBtn.textContent = 'Supprimer compte';
      deleteUserBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        deleteUserAccountFromLeaderboard(user);
      });
      deleteUserBtn.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          e.stopPropagation();
          deleteUserAccountFromLeaderboard(user);
        }
      });
      item.appendChild(deleteUserBtn);
    }

    leaderboardList.appendChild(item);
  });
}

function getProfileLevel(totalXp = 0) {
  return Math.min(MAX_LEVEL, Math.floor(totalXp / XP_PER_LEVEL) + 1);
}

function getXpInLevel(totalXp = 0) {
  return totalXp % XP_PER_LEVEL;
}

function getRewardForLevel(level) {
  return LEVEL_REWARDS[level] || null;
}

function updateProfileMessage(message) {
  if (!profileRewardMessage) return;
  profileRewardMessage.textContent = message;
}

function selectProfileBorder(borderName) {
  if (!userProfile.ownedBorders.includes(borderName)) return;
  userProfile.selectedBorder = borderName;
  saveProfile();
  updateProfileMessage(`Bordure ${borderName === 'freebordure' ? 'gratuite' : borderName} appliquée.`);
  renderProfile();
  renderHeaderProfile();
}

function buyBorder(borderName) {
  if (!Object.keys(BORDER_SHOP).includes(borderName)) {
    updateProfileMessage('Cette bordure n\'existe pas.');
    return;
  }
  const price = BORDER_SHOP[borderName].price;
  if (userProfile.ownedBorders.includes(borderName)) {
    updateProfileMessage('Tu possèdes déjà cette bordure.');
    return;
  }
  if ((userProfile.coins || 0) < price) {
    updateProfileMessage(`Tu n'as pas assez de pièces. Tu en as ${formatCoinCount(userProfile.coins || 0)} et il t'en faut ${formatCoinCount(price)}.`);
    return;
  }
  userProfile.coins = (userProfile.coins || 0) - price;
  userProfile.ownedBorders.push(borderName);
  saveProfile();
  updateProfileMessage(`${borderName} achetée pour ${formatCoinCount(price)} pièces !`);
  renderProfile();
  renderShop();
  renderHeaderProfile();
}

function openShopModal() {
  if (shopModal) {
    shopModal.classList.remove('hidden');
  }
  renderShop();
}

function closeShopModalWindow() {
  if (shopModal) {
    shopModal.classList.add('hidden');
  }
}

function renderShop() {
  const shopGrid = document.getElementById('shopGridModal') || document.getElementById('shopGrid');
  if (!shopGrid) return;
  shopGrid.innerHTML = '';
  
  Object.entries(BORDER_SHOP).forEach(([borderName, { price, image }]) => {
    const owned = userProfile.ownedBorders.includes(borderName);
    
    const item = document.createElement('div');
    item.className = 'shop-item';
    
    const imgDiv = document.createElement('div');
    imgDiv.className = 'shop-item-image';
    const img = document.createElement('img');
    img.src = image;
    img.alt = borderName;
    imgDiv.appendChild(img);
    
    const name = document.createElement('div');
    name.className = 'shop-item-name';
    name.textContent = borderName;
    
    const priceDiv = document.createElement('div');
    priceDiv.className = 'shop-item-price';
    priceDiv.innerHTML = `💎 ${formatCoinCount(price)}`;
    
    const button = document.createElement('button');
    button.className = 'shop-item-button';
    
    if (owned) {
      button.textContent = '✓ Possédée';
      button.disabled = true;
      button.style.background = 'var(--muted, #6b7280)';
    } else {
      button.textContent = 'Acheter';
      button.addEventListener('click', () => buyBorder(borderName));
    }
    
    item.appendChild(imgDiv);
    item.appendChild(name);
    item.appendChild(priceDiv);
    item.appendChild(button);
    shopGrid.appendChild(item);
  });
}

function getBorderImagePath(borderName) {
  const borderMap = {
    'freebordure': './freebordure.png',
    'Bordure 1': './bordure1.png',
    'Bordure 2': './bordure2.png',
    'Bordure 3': './bordure3.png',
    'Bordure Lunaire 1': './bordurelunaire1.png',
    'Bordure Lunaire 2': './bordurelunaire2.png',
    'Bordure Lunaire 3': './bordurelunaire3.png'
  };
  return borderMap[borderName] || '';
}

function renderBorderOptions() {
  if (!borderOptions) return;
  const availableBorders = ['freebordure', 'Bordure 1', 'Bordure 2', 'Bordure 3', 'Bordure Lunaire 1', 'Bordure Lunaire 2', 'Bordure Lunaire 3'];
  borderOptions.innerHTML = '';

  availableBorders.forEach((borderName) => {
    const owned = userProfile.ownedBorders.includes(borderName);
    const selected = userProfile.selectedBorder === borderName;
    const canBuy = Object.keys(BORDER_SHOP).includes(borderName);

    const item = document.createElement('div');
    item.className = 'border-option';
    if (!owned) item.classList.add('locked');
    if (selected) item.classList.add('selected');

    // Aperçu de la bordure avec wrapper pour afficher l'image
    const previewWrapper = document.createElement('div');
    previewWrapper.className = 'border-option-preview-wrapper';
    previewWrapper.dataset.border = borderName;
    
    const previewAvatar = document.createElement('img');
    previewAvatar.src = userProfile.avatar || 'https://via.placeholder.com/80?text=Avatar';
    previewAvatar.alt = `Aperçu ${borderName}`;
    previewAvatar.className = 'border-option-avatar';
    
    previewWrapper.appendChild(previewAvatar);
    item.appendChild(previewWrapper);

    // Bouton et détails
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'border-option-button button';
    button.textContent = borderName === 'freebordure' ? 'freebordure' : borderName;
    button.disabled = !owned;
    button.addEventListener('click', () => selectProfileBorder(borderName));

    const details = document.createElement('div');
    details.className = 'border-option-details';

    const status = document.createElement('span');
    status.className = 'border-option-label';
    status.textContent = selected ? 'Active' : owned ? 'Disponible' : canBuy ? 'À acheter' : 'Bloquée';

    const icon = document.createElement('span');
    icon.className = 'border-option-icon';
    icon.textContent = owned ? (selected ? '✅' : '✔️') : '🔒';

    details.appendChild(status);
    item.appendChild(button);
    item.appendChild(details);
    item.appendChild(icon);
    borderOptions.appendChild(item);
  });
}

function renderHeaderProfile() {
  if (!headerProfileAvatar || !headerProfileName || !headerProfileLevel || !headerProfileProgressFill) return;
  const level = getProfileLevel(userProfile.totalXp);
  const xpInLevel = getXpInLevel(userProfile.totalXp);
  const progressPercent = level >= MAX_LEVEL ? 100 : (xpInLevel / XP_PER_LEVEL) * 100;

  headerProfileAvatar.src = userProfile.avatar || 'https://via.placeholder.com/80?text=Avatar';
  headerProfileName.textContent = userProfile.name || 'Invité';
  headerProfileLevel.textContent = `Niveau ${level} / ${MAX_LEVEL}`;
  headerProfileProgressFill.style.width = `${progressPercent}%`;
  if (headerProfileAvatarWrapper) {
    headerProfileAvatarWrapper.dataset.border = userProfile.selectedBorder || '';
  }
  if (headerCoinCount) {
    headerCoinCount.textContent = `${formatCoinCount(userProfile.coins || 0)} 💎`;
  }
  if (headerProfileRoleContainer) {
    headerProfileRoleContainer.innerHTML = '';
    if (Array.isArray(userProfile.roles) && userProfile.roles.length > 0) {
      userProfile.roles.forEach((role) => {
        const badge = document.createElement('span');
        badge.className = 'header-role-badge';
        badge.textContent = role.name;
        badge.style.backgroundColor = role.color || '#999999';
        badge.style.color = getContrastColor(role.color || '#999999');
        headerProfileRoleContainer.appendChild(badge);
      });
    }
  }
}

function renderProfile() {
  if (!profileSection) return;
  profileNameDisplay.textContent = userProfile.name || 'Invité';
  if (profileNameInput) {
    profileNameInput.value = userProfile.name || 'Invité';
  }
  profileAvatar.src = userProfile.avatar || 'https://via.placeholder.com/120?text=Avatar';
  if (profileAvatarBorderWrapper) {
    profileAvatarBorderWrapper.dataset.border = userProfile.selectedBorder || '';
  }

  const level = getProfileLevel(userProfile.totalXp);
  const xpInLevel = getXpInLevel(userProfile.totalXp);
  const xpNeeded = level >= MAX_LEVEL ? 0 : XP_PER_LEVEL - xpInLevel;

  profileLevelDisplay.textContent = `Niveau ${level} / ${MAX_LEVEL}`;
  profileXpText.textContent = `${xpInLevel} / ${XP_PER_LEVEL} XP` + (level < MAX_LEVEL ? ` • ${xpNeeded} XP pour le niveau ${level + 1}` : ' • Niveau maximum atteint');
  profileProgressFill.style.width = `${level >= MAX_LEVEL ? 100 : (xpInLevel / XP_PER_LEVEL) * 100}%`;

  profileRewardMessage.textContent = `Récompenses débloquées : ${userProfile.rewards.length} / ${Object.keys(LEVEL_REWARDS).length}`;
  if (battlePassStatus) {
    battlePassStatus.textContent = userProfile.battlePassClaimed ? 'Battle Pass réclamé.' : 'Clique pour réclamer ton Battle Pass.';
  }
  if (battlePassClaimButton) {
    battlePassClaimButton.disabled = userProfile.battlePassClaimed;
  }
  if (profileCoinCount) {
    profileCoinCount.textContent = formatCoinCount(userProfile.coins || 0);
  }

  const hasLoginCode = Boolean(userProfile.loginCode && userProfile.loginCode.trim());
  if (profileConnectionInfo) {
    profileConnectionInfo.classList.toggle('hidden', !hasLoginCode);
    if (profileLoginCodeDisplay) {
      profileLoginCodeDisplay.textContent = hasLoginCode ? userProfile.loginCode : '';
    }
  }
  if (logoutButton) {
    logoutButton.classList.toggle('hidden', !hasLoginCode);
  }

  if (profileBorderLabel) {
    if (userProfile.selectedBorder) {
      profileBorderLabel.textContent = `Bordure active : ${userProfile.selectedBorder === 'freebordure' ? 'freebordure' : userProfile.selectedBorder}`;
    } else if (userProfile.ownedBorders.length > 0) {
      profileBorderLabel.textContent = 'Choisis une bordure ci-dessous pour l’appliquer.';
    } else {
      profileBorderLabel.textContent = 'Reste 5 min sur le site pour gagner la bordure gratuite, puis débloque d’autres bordures en montant de niveau.';
    }
  }

  renderProfileRoles();

  if (rewardList) {
    rewardList.innerHTML = '';
    Object.keys(LEVEL_REWARDS).sort((a, b) => Number(a) - Number(b)).forEach((levelKey) => {
      const levelValue = Number(levelKey);
      const rewardText = LEVEL_REWARDS[levelKey];
      const item = document.createElement('li');
      const unlocked = userProfile.rewards.includes(rewardText);
      item.textContent = `Niveau ${levelValue} : ${rewardText}`;
      item.className = unlocked ? 'reward-unlocked' : levelValue <= level ? 'reward-available' : 'reward-locked';
      if (unlocked) {
        item.textContent += ' (débloqué)';
      }
      rewardList.appendChild(item);
    });
  }

  renderBorderOptions();
  renderProfileRoles();
  renderHeaderProfile();
}

function renderProfileRoles() {
  if (!profileRolesContainer) return;
  profileRolesContainer.innerHTML = '';

  if (userProfile.roles && userProfile.roles.length > 0) {
    userProfile.roles.forEach((role) => {
      const badge = document.createElement('span');
      badge.className = 'profile-role-badge';
      badge.textContent = role.name;
      badge.style.backgroundColor = role.color || '#999999';
      badge.style.color = getContrastColor(role.color || '#999999');
      profileRolesContainer.appendChild(badge);
    });
  } else {
    const empty = document.createElement('p');
    empty.className = 'profile-role-empty';
    empty.textContent = 'Aucun rôle actif.';
    profileRolesContainer.appendChild(empty);
  }
}

function getContrastColor(hex) {
  if (!hex || typeof hex !== 'string') return '#ffffff';
  const cleaned = hex.replace('#', '');
  const intVal = parseInt(cleaned, 16);
  if (Number.isNaN(intVal)) return '#ffffff';
  const r = (intVal >> 16) & 255;
  const g = (intVal >> 8) & 255;
  const b = intVal & 255;
  return (r * 0.299 + g * 0.587 + b * 0.114) > 186 ? '#000000' : '#ffffff';
}

function addProfileRole() {
  if (!isAdmin) {
    alert('Seul l\'admin peut ajouter des rôles.');
    return;
  }
  const name = adminRoleNameInput ? adminRoleNameInput.value.trim() : '';
  const color = adminRoleColorInput ? adminRoleColorInput.value : '#00aaff';
  if (!name) {
    alert('Indique un nom de rôle valide.');
    return;
  }
  const normalizedName = name.trim();
  if (!userProfile.roles.some(role => role.name.toLowerCase() === normalizedName.toLowerCase())) {
    userProfile.roles.push({ name: normalizedName, color });
    saveProfile();
    renderProfile();
    if (adminRoleNameInput) adminRoleNameInput.value = '';
    updateProfileMessage(`Rôle ajouté : ${normalizedName}`);
  } else {
    alert('Ce rôle existe déjà dans votre profil.');
  }
}

function removeProfileRole(roleName) {
  if (!isAdmin) return;
  userProfile.roles = userProfile.roles.filter(role => role.name !== roleName);
  saveProfile();
  renderProfile();
}

function updateLeaderboardUserRoles(userId, roles) {
  if (!firestoreReady || !leaderboardCollection) return;
  leaderboardCollection.doc(userId).set({ roles }, { merge: true }).catch(error => {
    console.error('Erreur mise à jour des rôles du leaderboard :', error);
  });
}

function addLeaderboardUserRole(user) {
  if (!isAdmin) return;
  const roleName = prompt('Nom du rôle à ajouter pour ' + user.name + ' :', 'VIP');
  if (!roleName) return;
  const roleColor = prompt('Couleur du rôle en hex (ex : #ff0000) :', '#00aaff');
  const normalizedColor = roleColor && /^#([0-9A-F]{3}){1,2}$/i.test(roleColor) ? roleColor : '#00aaff';
  const updatedRoles = Array.isArray(user.roles) ? [...user.roles] : [];
  if (!updatedRoles.some(role => role.name.toLowerCase() === roleName.trim().toLowerCase())) {
    updatedRoles.push({ name: roleName.trim(), color: normalizedColor });
    updateLeaderboardUserRoles(user.id, updatedRoles);
    user.roles = updatedRoles;
    renderLeaderboard();
  } else {
    alert('Ce rôle est déjà attribué à cet utilisateur.');
  }
}

function removeLeaderboardUserRole(user) {
  if (!isAdmin) return;
  if (!Array.isArray(user.roles) || user.roles.length === 0) {
    alert('Cet utilisateur n\'a aucun rôle à retirer.');
    return;
  }
  const roleName = prompt('Nom du rôle à retirer pour ' + user.name + ' :', user.roles[0].name);
  if (!roleName) return;
  const updatedRoles = user.roles.filter(role => role.name.toLowerCase() !== roleName.trim().toLowerCase());
  updateLeaderboardUserRoles(user.id, updatedRoles);
  user.roles = updatedRoles;
  renderLeaderboard();
}

function manageLeaderboardRoles(user) {
  if (!isAdmin) return;
  const action = prompt('Tape "ajouter" pour ajouter un rôle ou "retirer" pour retirer un rôle :', 'ajouter');
  if (!action) return;
  if (action.toLowerCase() === 'retirer') {
    removeLeaderboardUserRole(user);
  } else {
    addLeaderboardUserRole(user);
  }
}

function toggleProfileSection() {
  if (!profileSection) return;
  profileSection.classList.toggle('hidden');
}

function toggleLeaderboard() {
  if (!leaderboardSection) return;
  leaderboardSection.classList.toggle('hidden');
}

function closeLeaderboardModalWindow() {
  if (!leaderboardModal) return;
  leaderboardModal.classList.add('hidden');
}

function openLeaderboardModal(user) {
  if (!leaderboardModal) return;
  leaderboardModal.classList.remove('hidden');
  if (leaderboardProfileAvatar) {
    leaderboardProfileAvatar.src = user.avatar || 'https://via.placeholder.com/120?text=Avatar';
  }
  if (leaderboardAvatarWrapper) {
    leaderboardAvatarWrapper.dataset.border = user.selectedBorder || '';
  }
  if (leaderboardProfileName) {
    leaderboardProfileName.textContent = user.name || 'Invité';
  }
  if (leaderboardProfileLevel) {
    leaderboardProfileLevel.textContent = `Niveau ${getProfileLevel(user.totalXp)} / ${MAX_LEVEL}`;
  }
  if (leaderboardProfileXpText) {
    leaderboardProfileXpText.textContent = `${user.totalXp} XP`;
  }
  if (leaderboardProfileBorder) {
    leaderboardProfileBorder.textContent = user.selectedBorder ? `Bordure : ${user.selectedBorder}` : 'Bordure : Aucune';
  }
  if (leaderboardProfileBadges) {
    leaderboardProfileBadges.innerHTML = '';
    if (Array.isArray(user.roles) && user.roles.length > 0) {
      user.roles.forEach((role) => {
        const badge = document.createElement('span');
        badge.className = 'leaderboard-role-badge';
        badge.textContent = role.name;
        badge.style.backgroundColor = role.color || '#999999';
        badge.style.color = getContrastColor(role.color || '#999999');
        leaderboardProfileBadges.appendChild(badge);
      });
    }
    const rewardBadges = getDisplayBadges(user);
    if (rewardBadges.length > 0) {
      rewardBadges.forEach((badge) => {
        const badgeLabel = document.createElement('span');
        badgeLabel.className = 'leaderboard-profile-badge';
        badgeLabel.textContent = badge;
        leaderboardProfileBadges.appendChild(badgeLabel);
      });
    }
    if ((!Array.isArray(user.roles) || user.roles.length === 0) && rewardBadges.length === 0) {
      leaderboardProfileBadges.textContent = 'Aucun rôle ou récompense disponible.';
    }
  }
}

function saveProfileSettings() {
  if (!profileNameInput) return;
  userProfile.name = profileNameInput.value.trim() || 'Invité';
  if (!userProfile.loginCode) {
    userProfile.loginCode = generateLoginCode();
  }
  saveProfile();
  updateProfileMessage('Profil enregistré. Continue de gagner de l’expérience !');
}

function formatCoinCount(amount) {
  return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

function claimBattlePassCoins() {
  if (userProfile.battlePassClaimed) {
    updateProfileMessage('Vous avez déjà réclamé votre Battle Pass.');
    return;
  }

  userProfile.battlePassClaimed = true;
  saveProfile();
  renderHeaderProfile();
  renderProfile();
  updateProfileMessage('Battle Pass réclamé.');
}

function deleteAccount() {
  if (!confirm('Voulez-vous vraiment supprimer votre compte ? Toutes vos données de profil seront perdues.')) {
    return;
  }

  const userId = userProfile.id || 'current-user';
  const loginCode = userProfile.loginCode || null;
  localStorage.removeItem(PROFILE_KEY);
  
  // Supprimer du leaderboard Firestore
  if (firestoreReady && leaderboardCollection) {
    leaderboardCollection.doc(userId).delete().catch(error => {
      console.error('Erreur suppression leaderboard :', error);
    });
  }

  // Supprimer le profil stocké par code
  if (firestoreReady && profilesCollection && loginCode) {
    profilesCollection.doc(loginCode).delete().catch(error => {
      console.error('Erreur suppression profil Firestore :', error);
    });
  }

  userProfile = {
    name: 'Invité',
    avatar: '',
    totalXp: 0,
    rewards: [],
    ownedBorders: [],
    selectedBorder: '',
    coins: 0,
    battlePassClaimed: false,
    firstVisitTime: Date.now(),
    id: generateUserId(),
    roles: []
  };

  renderProfile();
  renderHeaderProfile();
  renderLeaderboard();
  updateProfileMessage('Votre compte a été supprimé. Vous êtes de retour en mode invité.');
}

function addProfileLevels() {
  if (!isAdmin) {
    alert('Vous devez être connecté en tant d\'admin pour ajouter des niveaux.');
    return;
  }

  const amount = adminLevelAmountInput ? Number(adminLevelAmountInput.value) : 1;
  if (!Number.isInteger(amount) || amount <= 0) {
    alert('Indique un nombre de niveaux valide (1 ou plus).');
    return;
  }

  const currentLevel = getProfileLevel(userProfile.totalXp);
  if (currentLevel >= MAX_LEVEL) {
    alert('Ton profil a déjà atteint le niveau maximum.');
    return;
  }

  const targetLevel = Math.min(MAX_LEVEL, currentLevel + amount);
  const xpToAdd = targetLevel * XP_PER_LEVEL - userProfile.totalXp;
  if (xpToAdd <= 0) {
    alert('Ton profil est déjà au niveau demandé.');
    return;
  }

  awardProfileXp(xpToAdd, 'ajout admin');
  updateProfileMessage(`+${targetLevel - currentLevel} niveau${targetLevel - currentLevel > 1 ? 's' : ''} ajoutés par l\'admin.`);
}

function removeProfileLevels() {
  if (!isAdmin) {
    alert('Vous devez être connecté en tant d\'admin pour retirer des niveaux.');
    return;
  }

  const amount = adminLevelAmountInput ? Number(adminLevelAmountInput.value) : 1;
  if (!Number.isInteger(amount) || amount <= 0) {
    alert('Indique un nombre de niveaux valide (1 ou plus).');
    return;
  }

  const currentLevel = getProfileLevel(userProfile.totalXp);
  if (currentLevel <= 1) {
    alert('Ton profil est déjà au niveau minimum.');
    return;
  }

  const targetLevel = Math.max(1, currentLevel - amount);
  const xpToRemove = userProfile.totalXp - ((targetLevel - 1) * XP_PER_LEVEL);
  if (xpToRemove <= 0) {
    alert('Ton profil est déjà au niveau demandé.');
    return;
  }

  deductProfileXp(xpToRemove, 'retrait admin');
  updateProfileMessage(`-${currentLevel - targetLevel} niveau${currentLevel - targetLevel > 1 ? 'x' : ''} retiré${currentLevel - targetLevel > 1 ? 's' : ''} par l\'admin.`);
}

function deductProfileXp(amount, source) {
  if (typeof amount !== 'number' || amount <= 0) return;
  const oldLevel = getProfileLevel(userProfile.totalXp);
  userProfile.totalXp = Math.max(0, userProfile.totalXp - amount);
  const newLevel = getProfileLevel(userProfile.totalXp);

  userProfile.rewards = [];
  updateUserRewards();

  let message = `-${amount} XP pour ${source}.`;
  if (newLevel < oldLevel) {
    message += ` Niveau réduit de ${oldLevel} à ${newLevel}.`;
  }

  updateProfileMessage(message);
  renderHeaderProfile();
}

function handleAvatarUpload(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    userProfile.avatar = reader.result;
    saveProfile();
    updateProfileMessage('Image de profil mise à jour.');
  };
  reader.readAsDataURL(file);
}

function unlockReward(level) {
  const reward = getRewardForLevel(level);
  if (!reward || userProfile.rewards.includes(reward)) return null;
  userProfile.rewards.push(reward);
  if (reward.startsWith('Bordure')) {
    if (!userProfile.ownedBorders.includes(reward)) {
      userProfile.ownedBorders.push(reward);
    }
  }
  return reward;
}

function awardProfileXp(amount, source) {
  if (typeof amount !== 'number' || amount <= 0) return;
  const oldLevel = getProfileLevel(userProfile.totalXp);
  userProfile.totalXp += amount;
  const newLevel = getProfileLevel(userProfile.totalXp);
  let message = `+${amount} XP pour ${source}.`;
  let coinReward = 0;

  if (newLevel > oldLevel) {
    for (let level = oldLevel + 1; level <= newLevel; level++) {
      const milestoneReward = LEVEL_COIN_MILESTONES[level] || 0;
      if (milestoneReward > 0) {
        coinReward += milestoneReward;
        userProfile.coins = (userProfile.coins || 0) + milestoneReward;
        message += ` +${milestoneReward} pièces au niveau ${level}.`;
      }
    }
  }

  for (let level = oldLevel + 1; level <= newLevel; level++) {
    const reward = unlockReward(level);
    if (reward) {
      message += ` Niveau ${level} atteint : ${reward} débloqué !`;
    }
  }
  saveProfile();
  updateProfileMessage(message);
  renderHeaderProfile();
}

function startFreeBorderTimer() {
  if (userProfile.ownedBorders.includes('freebordure')) return;
  
  const currentTime = Date.now();
  const elapsedTime = currentTime - (userProfile.firstVisitTime || currentTime);
  const FIVE_MINUTES = 300000;
  
  if (elapsedTime >= FIVE_MINUTES) {
    // 5 minutes se sont déjà écoulées
    userProfile.ownedBorders.push('freebordure');
    if (!userProfile.selectedBorder) {
      userProfile.selectedBorder = 'freebordure';
    }
    saveProfile();
    updateProfileMessage('Tu as gagné la bordure gratuite : freebordure !');
    renderProfile();
    renderHeaderProfile();
  } else {
    // Attendre le temps restant
    const timeRemaining = FIVE_MINUTES - elapsedTime;
    setTimeout(() => {
      if (!userProfile.ownedBorders.includes('freebordure')) {
        userProfile.ownedBorders.push('freebordure');
        if (!userProfile.selectedBorder) {
          userProfile.selectedBorder = 'freebordure';
        }
        saveProfile();
        updateProfileMessage('Tu as gagné la bordure gratuite : freebordure !');
        renderProfile();
        renderHeaderProfile();
      }
    }, timeRemaining);
  }
}

function createVideoElement(url) {
  const container = document.createElement('div');
  container.style.width = '100%';
  container.style.height = 'auto';
  container.style.maxHeight = '500px';

  // YouTube
  if (url.includes('youtube.com') || url.includes('youtu.be')) {
    let videoId = '';
    if (url.includes('youtu.be/')) {
      videoId = url.split('youtu.be/')[1]?.split('?')[0] || '';
    } else {
      videoId = url.split('v=')[1]?.split('&')[0] || '';
    }
    if (videoId) {
      const wrapper = document.createElement('div');
      wrapper.style.position = 'relative';
      wrapper.style.width = '100%';
      wrapper.style.paddingBottom = '56.25%';
      wrapper.style.height = '0';
      wrapper.style.overflow = 'hidden';
      wrapper.style.backgroundColor = '#000';
      
      const iframe = document.createElement('iframe');
      iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=0`;
      iframe.style.position = 'absolute';
      iframe.style.top = '0';
      iframe.style.left = '0';
      iframe.style.width = '100%';
      iframe.style.height = '100%';
      iframe.style.border = 'none';
      iframe.setAttribute('frameborder', '0');
      iframe.setAttribute('allowfullscreen', '');
      iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
      iframe.setAttribute('loading', 'lazy');
      
      wrapper.appendChild(iframe);
      container.appendChild(wrapper);
      return container;
    }
  }

  // TikTok
  if (url.includes('tiktok.com')) {
    const videoId = url.split('/video/')[1]?.split('?')[0] || '';
    if (videoId) {
      const wrapper = document.createElement('div');
      wrapper.style.display = 'flex';
      wrapper.style.justifyContent = 'center';
      wrapper.style.width = '100%';
      
      const iframe = document.createElement('iframe');
      iframe.src = `https://www.tiktok.com/embed/v2/${videoId}`;
      iframe.style.width = '100%';
      iframe.style.height = '600px';
      iframe.style.maxHeight = '600px';
      iframe.style.border = 'none';
      iframe.setAttribute('frameborder', '0');
      iframe.setAttribute('allow', 'autoplay; encrypted-media; gyroscope; picture-in-picture; web-share');
      iframe.setAttribute('loading', 'lazy');
      
      wrapper.appendChild(iframe);
      container.appendChild(wrapper);
      return container;
    }
  }

  // Vimeo
  if (url.includes('vimeo.com')) {
    const videoId = url.split('/')[3] || '';
    if (videoId) {
      const wrapper = document.createElement('div');
      wrapper.style.position = 'relative';
      wrapper.style.width = '100%';
      wrapper.style.paddingBottom = '56.25%';
      wrapper.style.height = '0';
      wrapper.style.overflow = 'hidden';
      
      const iframe = document.createElement('iframe');
      iframe.src = `https://player.vimeo.com/video/${videoId}`;
      iframe.style.position = 'absolute';
      iframe.style.top = '0';
      iframe.style.left = '0';
      iframe.style.width = '100%';
      iframe.style.height = '100%';
      iframe.style.border = 'none';
      iframe.setAttribute('frameborder', '0');
      iframe.setAttribute('allowfullscreen', '');
      iframe.setAttribute('allow', 'autoplay; fullscreen; picture-in-picture');
      iframe.setAttribute('loading', 'lazy');
      
      wrapper.appendChild(iframe);
      container.appendChild(wrapper);
      return container;
    }
  }

  // Vidéo directe (mp4, webm, etc)
  const video = document.createElement('video');
  video.src = url;
  video.controls = true;
  video.setAttribute('playsinline', '');
  video.setAttribute('preload', 'metadata');
  video.style.width = '100%';
  video.style.height = 'auto';
  video.style.maxHeight = '500px';
  video.style.objectFit = 'cover';
  container.appendChild(video);
  return container;
}

function renderPosts() {
  postsGrid.innerHTML = '';
  if (posts.length === 0) {
    postsGrid.innerHTML = '<p>Aucun post pour le moment. Connecte-toi en admin pour en créer.</p>';
    return;
  }

  posts.forEach((post) => {
    const card = document.createElement('article');
    card.className = 'post-card';
    card.id = `post-${post.id}`;

      if (post.mediaType === 'image' && post.mediaUrl) {
      const img = document.createElement('img');
      img.src = post.mediaUrl;
      img.alt = post.title;
      card.appendChild(img);
    }

    if (post.mediaType === 'video' && post.mediaUrl) {
      card.appendChild(createVideoElement(post.mediaUrl));
    }

    const content = document.createElement('div');
    content.className = 'post-card-content';

    const title = document.createElement('h3');
    title.textContent = post.title || 'Post sans titre';
    content.appendChild(title);

    const text = document.createElement('p');
    text.textContent = post.text || '';
    content.appendChild(text);

    if (post.isGiveaway) {
      const giveawayInfo = document.createElement('div');
      giveawayInfo.className = 'post-giveaway-info';
      const participantCount = Array.isArray(post.participants) ? post.participants.length : 0;
      if (post.giveawayCompleted) {
        giveawayInfo.innerHTML = `<strong>Giveaway terminé :</strong> ${post.giveawayAmount} pièces - gagnant : ${post.giveawayWinner?.name || 'Inconnu'}`;
      } else {
        giveawayInfo.innerHTML = `<strong>Giveaway :</strong> ${post.giveawayAmount} pièces - ${participantCount} participation(s)`;
      }
      content.appendChild(giveawayInfo);
    }

    // Actions like and share
    const actions = document.createElement('div');
    actions.className = 'post-actions';

    const likeBtn = document.createElement('button');
    likeBtn.className = 'like-btn';
    likeBtn.innerHTML = likedPosts.includes(post.id) ? '❤️' : '🖤';
    if (likedPosts.includes(post.id)) {
      likeBtn.classList.add('liked');
    }
    likeBtn.addEventListener('click', () => toggleLike(post.id));

    const likeCount = document.createElement('span');
    likeCount.className = 'like-count';
    likeCount.textContent = post.likes;

    actions.appendChild(likeBtn);
    actions.appendChild(likeCount);

    const shareBtn = document.createElement('button');
    shareBtn.className = 'share-btn';
    shareBtn.innerHTML = '🔗';
    shareBtn.addEventListener('click', () => sharePost(post));

    actions.appendChild(shareBtn);

    content.appendChild(actions);

    renderPoll(post, content);

    if (post.isGiveaway) {
      const giveawayActions = document.createElement('div');
      giveawayActions.className = 'giveaway-actions';

      const participants = Array.isArray(post.participants) ? post.participants : [];
      const userId = userProfile.id || 'current-user';
      const hasJoined = participants.some(p => p.id === userId);

      if (!post.giveawayCompleted) {
        const joinBtn = document.createElement('button');
        joinBtn.type = 'button';
        joinBtn.className = 'button button-small button-secondary';
        joinBtn.textContent = hasJoined ? 'Inscrit' : 'Participer';
        joinBtn.disabled = hasJoined;
        joinBtn.addEventListener('click', () => joinGiveaway(post.id));
        giveawayActions.appendChild(joinBtn);

        if (isAdmin) {
          const launchBtn = document.createElement('button');
          launchBtn.type = 'button';
          launchBtn.className = 'button button-small button-primary';
          launchBtn.textContent = 'Lancer le giveaway';
          launchBtn.disabled = participants.length === 0;
          launchBtn.addEventListener('click', () => launchGiveaway(post.id));
          giveawayActions.appendChild(launchBtn);
        }
      } else {
        const endedLabel = document.createElement('span');
        endedLabel.className = 'giveaway-ended-label';
        endedLabel.textContent = `Giveaway terminé - gagnant : ${post.giveawayWinner?.name || 'Inconnu'}`;
        giveawayActions.appendChild(endedLabel);
      }

      content.appendChild(giveawayActions);
    }

    // Ajouter les boutons admin si connecté
    if (isAdmin) {
      const adminActions = document.createElement('div');
      adminActions.className = 'post-admin-actions';

      const editBtn = document.createElement('button');
      editBtn.className = 'button button-small button-edit';
      editBtn.textContent = 'Modifier';
      editBtn.addEventListener('click', () => startEditPost(post.id));

      const deleteBtn = document.createElement('button');
      deleteBtn.className = 'button button-small button-delete';
      deleteBtn.textContent = 'Supprimer';
      deleteBtn.addEventListener('click', () => deletePost(post.id));

      adminActions.appendChild(editBtn);
      adminActions.appendChild(deleteBtn);

      // Ajouter bouton "Terminer le giveaway" si c'est un giveaway non terminé
      if (post.isGiveaway && !post.giveawayCompleted) {
        const finishBtn = document.createElement('button');
        finishBtn.className = 'button button-small button-primary';
        finishBtn.textContent = 'Terminer le giveaway';
        const participants = Array.isArray(post.participants) ? post.participants : [];
        finishBtn.disabled = participants.length === 0;
        finishBtn.addEventListener('click', () => launchGiveaway(post.id));
        adminActions.appendChild(finishBtn);
      }

      content.appendChild(adminActions);
    }

    card.appendChild(content);
    postsGrid.appendChild(card);
  });
}

function joinGiveaway(postId) {
  const post = posts.find(p => p.id === postId);
  if (!post || !post.isGiveaway || post.giveawayCompleted) return;
  post.participants = Array.isArray(post.participants) ? post.participants : [];
  const userId = userProfile.id || 'current-user';
  if (post.participants.some(p => p.id === userId)) {
    alert('Tu es déjà inscrit au giveaway.');
    return;
  }
  post.participants.push({ id: userId, name: userProfile.name || 'Invité' });
  if (firestoreReady) {
    postsCollection.doc(postId).update({ participants: post.participants }).catch(error => {
      console.error('Erreur mise à jour giveaway Firestore :', error);
    });
  }
  savePosts();
  renderPosts();
  updateProfileMessage('Tu es inscrit au giveaway ! Bonne chance.');
}

function launchGiveaway(postId) {
  if (!isAdmin) {
    alert('Seul l’admin peut lancer un giveaway.');
    return;
  }
  const post = posts.find(p => p.id === postId);
  if (!post || !post.isGiveaway || post.giveawayCompleted) return;
  const participants = Array.isArray(post.participants) ? post.participants : [];
  if (participants.length === 0) {
    alert('Aucun participant pour ce giveaway.');
    return;
  }

  const winner = participants[Math.floor(Math.random() * participants.length)];
  post.giveawayWinner = winner;
  post.giveawayCompleted = true;
  post.giveawayAwarded = post.giveawayAmount || 0;

  if (winner.id === (userProfile.id || 'current-user')) {
    userProfile.coins = (userProfile.coins || 0) + (post.giveawayAmount || 0);
    saveProfile();
    updateProfileMessage(`Tu as gagné ${formatCoinCount(post.giveawayAmount)} au giveaway !`);
  } else {
    // Mettre à jour les coins du gagnant dans Firestore
    if (firestoreReady && leaderboardCollection) {
      const winnerEntry = leaderboardUsers.find(u => u.id === winner.id);
      if (winnerEntry) {
        const updatedCoins = (winnerEntry.coins || 0) + (post.giveawayAmount || 0);
        leaderboardCollection.doc(winner.id).update({
          coins: updatedCoins
        }).catch(error => {
          console.error('Erreur mise à jour coins giveaway :', error);
        });
      }
    }
    updateProfileMessage(`Giveaway terminé : ${winner.name} gagne ${formatCoinCount(post.giveawayAmount)}.`);
  }

  if (firestoreReady) {
    postsCollection.doc(postId).update({
      giveawayCompleted: post.giveawayCompleted,
      giveawayWinner: post.giveawayWinner,
      giveawayAwarded: post.giveawayAwarded
    }).catch(error => {
      console.error('Erreur mise à jour giveaway Firestore :', error);
    });
  }

  savePosts();
  renderPosts();
}

function getUserVotesForPost(postId) {
  return userVotes[postId] || [];
}

function votePoll(postId, optionIndex) {
  const post = posts.find(p => p.id === postId);
  if (!post || !Array.isArray(post.pollOptions) || !post.pollOptions[optionIndex]) return;

  const userVotedOptions = getUserVotesForPost(postId);
  const previousCount = userVotedOptions.length;
  const isMultiple = post.multipleChoices;

  if (isMultiple) {
    // Multiple choices: toggle the option
    const indexInUserVotes = userVotedOptions.indexOf(optionIndex);
    if (indexInUserVotes > -1) {
      // Remove vote
      userVotedOptions.splice(indexInUserVotes, 1);
      post.pollOptions[optionIndex].votes = Math.max(0, (post.pollOptions[optionIndex].votes || 0) - 1);
    } else {
      // Add vote
      userVotedOptions.push(optionIndex);
      post.pollOptions[optionIndex].votes = (post.pollOptions[optionIndex].votes || 0) + 1;
    }
  } else {
    // Single choice: change to this option
    // Remove previous vote if any
    if (userVotedOptions.length > 0) {
      const prevOption = userVotedOptions[0];
      post.pollOptions[prevOption].votes = Math.max(0, (post.pollOptions[prevOption].votes || 0) - 1);
    }
    // Add new vote
    userVotedOptions.length = 0; // Clear
    userVotedOptions.push(optionIndex);
    post.pollOptions[optionIndex].votes = (post.pollOptions[optionIndex].votes || 0) + 1;
  }

  // Update userVotes
  if (userVotedOptions.length > 0) {
    userVotes[postId] = userVotedOptions;
  } else {
    delete userVotes[postId];
  }

  if (firestoreReady) {
    postsCollection.doc(postId).update({ pollOptions: post.pollOptions }).catch(error => {
      console.error('Erreur mise à jour sondage Firestore :', error);
    });
  }
  savePosts();
  saveVotedPolls();
  const newCount = userVotedOptions.length;
  if (newCount > previousCount) {
    awardProfileXp(15, 'participer à un sondage');
  }
  renderPosts();
}

function addOptionToPoll(postId) {
  const newOptionText = prompt('Entrez le texte de la nouvelle option:');
  if (!newOptionText || !newOptionText.trim()) return;

  const post = posts.find(p => p.id === postId);
  if (!post || !Array.isArray(post.pollOptions)) return;

  post.pollOptions.push({ text: newOptionText.trim(), votes: 0 });

  if (firestoreReady) {
    postsCollection.doc(postId).update({ pollOptions: post.pollOptions }).catch(error => {
      console.error('Erreur mise à jour sondage Firestore :', error);
    });
  }
  savePosts();
  renderPosts();
}

function removeOptionFromPoll(postId, optionIndex) {
  const post = posts.find(p => p.id === postId);
  if (!post || !Array.isArray(post.pollOptions)) return;
  
  if (post.pollOptions.length <= 2) {
    alert('Un sondage doit avoir au moins 2 options.');
    return;
  }
  
  post.pollOptions.splice(optionIndex, 1);
  
  // Recalculate user votes to remove deleted option
  if (userVotes[postId]) {
    userVotes[postId] = userVotes[postId].filter(idx => idx !== optionIndex);
  }

  if (firestoreReady) {
    postsCollection.doc(postId).update({ pollOptions: post.pollOptions }).catch(error => {
      console.error('Erreur mise à jour sondage Firestore :', error);
    });
  }
  savePosts();
  saveVotedPolls();
  renderPosts();
}

function renderPoll(post, content) {
  if (!post.pollQuestion || !Array.isArray(post.pollOptions) || post.pollOptions.length === 0) {
    return;
  }

  const pollSection = document.createElement('div');
  pollSection.className = 'poll-section';

  const question = document.createElement('p');
  question.className = 'poll-question';
  question.textContent = post.pollQuestion;
  pollSection.appendChild(question);

  const totalVotes = post.pollOptions.reduce((sum, option) => sum + (typeof option.votes === 'number' ? option.votes : 0), 0);
  const userVotedOptions = getUserVotesForPost(post.id);
  const isMultiple = post.multipleChoices;

  post.pollOptions.forEach((option, index) => {
    const optionWrapper = document.createElement('div');
    optionWrapper.className = 'poll-option';

    const buttonContainer = document.createElement('div');
    buttonContainer.style.display = 'flex';
    buttonContainer.style.gap = '0.5rem';
    buttonContainer.style.alignItems = 'center';

    const voteButton = document.createElement('button');
    voteButton.type = 'button';
    voteButton.className = 'poll-vote-btn button';
    voteButton.textContent = option.text || `Option ${index + 1}`;
    voteButton.style.flex = '1';
    if (userVotedOptions.includes(index)) {
      voteButton.classList.add('voted');
    }
    voteButton.addEventListener('click', () => votePoll(post.id, index));
    buttonContainer.appendChild(voteButton);

    if (isAdmin) {
      const deleteBtn = document.createElement('button');
      deleteBtn.type = 'button';
      deleteBtn.className = 'button button-small button-delete';
      deleteBtn.textContent = '✕';
      deleteBtn.style.padding = '0.5rem 0.75rem';
      deleteBtn.style.minWidth = 'auto';
      deleteBtn.addEventListener('click', () => removeOptionFromPoll(post.id, index));
      buttonContainer.appendChild(deleteBtn);
    }

    optionWrapper.appendChild(buttonContainer);

    const percent = totalVotes > 0 ? Math.round((option.votes / totalVotes) * 100) : 0;
    const result = document.createElement('div');
    result.className = 'poll-result';
    result.innerHTML = `
      <div class="poll-result-label">${option.votes || 0} vote(s) · ${percent}%</div>
      <div class="poll-bar"><div class="poll-bar-fill" style="width:${percent}%;"></div></div>
    `;
    optionWrapper.appendChild(result);
    pollSection.appendChild(optionWrapper);
  });

  const hint = document.createElement('p');
  hint.className = 'poll-hint';
  if (isMultiple) {
    hint.textContent = 'Choisis une ou plusieurs options et vote.';
  } else {
    hint.textContent = 'Choisis ton option préférée et vote.';
  }
  pollSection.appendChild(hint);

  // Admin button to add options
  if (isAdmin) {
    const addOptionBtn = document.createElement('button');
    addOptionBtn.className = 'button button-secondary';
    addOptionBtn.textContent = 'Ajouter une option';
    addOptionBtn.addEventListener('click', () => addOptionToPoll(post.id));
    pollSection.appendChild(addOptionBtn);
  }

  content.appendChild(pollSection);
}

function addPollOptionInput(value = '') {
  const currentCount = pollOptionsContainer.querySelectorAll('.poll-option-input-wrapper').length;
  if (currentCount >= 5) {
    return;
  }
  
  const wrapper = document.createElement('div');
  wrapper.className = 'poll-option-input-wrapper';
  wrapper.style.display = 'flex';
  wrapper.style.gap = '0.5rem';
  wrapper.style.alignItems = 'center';
  
  const input = document.createElement('input');
  input.type = 'text';
  input.className = 'poll-option-input';
  input.value = value;
  input.placeholder = `Option ${currentCount + 1}`;
  input.style.flex = '1';
  
  const removeBtn = document.createElement('button');
  removeBtn.type = 'button';
  removeBtn.className = 'button button-small button-delete';
  removeBtn.textContent = '✕';
  removeBtn.style.padding = '0.5rem 0.75rem';
  removeBtn.style.minWidth = 'auto';
  removeBtn.addEventListener('click', () => removePollOptionInput(wrapper));
  
  wrapper.appendChild(input);
  wrapper.appendChild(removeBtn);
  pollOptionsContainer.appendChild(wrapper);
  updatePollOptionPlaceholders();
  addPollOptionButton.disabled = pollOptionsContainer.querySelectorAll('.poll-option-input-wrapper').length >= 5;
}

function removePollOptionInput(wrapper) {
  wrapper.remove();
  updatePollOptionPlaceholders();
  addPollOptionButton.disabled = pollOptionsContainer.querySelectorAll('.poll-option-input-wrapper').length >= 5;
}

function updatePollOptionPlaceholders() {
  pollOptionsContainer.querySelectorAll('.poll-option-input').forEach((input, index) => {
    input.placeholder = `Option ${index + 1}`;
  });
}

function togglePollFields() {
  if (!pollFields) return;
  if (postHasPollCheckbox.checked) {
    pollFields.classList.remove('hidden');
  } else {
    pollFields.classList.add('hidden');
  }
}

function showAdminPanel() {
  adminPanel.classList.toggle('hidden');
}

function showPostForm() {
  postFormContainer.classList.remove('hidden');
}

function addPost() {
  // Vérifier que l'utilisateur est admin
  if (!isAdmin) {
    alert('Vous devez être connecté en tant qu\'admin pour créer un post.');
    return;
  }

  const title = document.getElementById('postTitle').value.trim();
  const text = document.getElementById('postText').value.trim();
  const mediaType = document.getElementById('postMediaType').value;
  const mediaUrl = document.getElementById('postMediaUrl').value.trim();
  const hasPoll = postHasPollCheckbox.checked;
  const pollQuestion = hasPoll ? pollQuestionInput.value.trim() : '';
  const multipleChoices = hasPoll ? pollMultipleChoicesCheckbox.checked : false;
  const pollOptions = hasPoll
    ? Array.from(document.querySelectorAll('.poll-option-input'))
        .map(input => input.value.trim())
        .filter(option => option)
        .slice(0, 5)
        .map(option => ({ text: option, votes: 0 }))
    : [];
  const giveawayAmount = parseInt(document.getElementById('postGiveawayAmount')?.value, 10) || 0;

  if (!title && !text && mediaType === 'none' && !hasPoll && giveawayAmount <= 0) {
    alert('Ajoute au moins un titre, du texte, un média, un sondage ou un montant pour le giveaway.');
    return;
  }

  if (hasPoll && (!pollQuestion || pollOptions.length < 2)) {
    alert('Pour ajouter un sondage, indique une question et au moins deux options valides.');
    return;
  }

  const postData = {
    title,
    text,
    mediaType,
    mediaUrl,
    pollQuestion,
    pollOptions,
    multipleChoices,
    isGiveaway: giveawayAmount > 0,
    giveawayAmount: giveawayAmount > 0 ? giveawayAmount : 0,
    participants: [],
    giveawayCompleted: false,
    giveawayWinner: null
  };

  if (editingPostId) {
    // Modification d'un post existant
    const postIndex = posts.findIndex(p => p.id === editingPostId);
    if (postIndex !== -1) {
      posts[postIndex] = {
        ...posts[postIndex],
        ...postData,
        participants: posts[postIndex].participants || [],
        giveawayCompleted: posts[postIndex].giveawayCompleted || false,
        giveawayWinner: posts[postIndex].giveawayWinner || null
      };
      if (firestoreReady) {
        postsCollection.doc(editingPostId).update(posts[postIndex]).catch(error => {
          console.error('Erreur mise à jour post Firestore :', error);
        });
      }
    }
    editingPostId = null;
    document.getElementById('addPostButton').textContent = 'Ajouter le post';
  } else {
    // Création d'un nouveau post
    const newPost = {
      id: Date.now().toString(),
      likes: 0,
      createdAt: new Date().toISOString(),
      ...postData,
    };
    posts.unshift(newPost);
    awardProfileXp(25, 'créer un post');
    if (firestoreReady) {
      postsCollection.doc(newPost.id).set({
        likes: 0,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        ...postData,
      }).catch(error => {
        console.error('Erreur création post Firestore :', error);
      });
    }
  }

  savePosts();
  renderPosts();
  document.getElementById('postTitle').value = '';
  document.getElementById('postText').value = '';
  document.getElementById('postGiveawayAmount').value = '';
  document.getElementById('postMediaType').value = 'none';
  document.getElementById('postMediaUrl').value = '';
  postHasPollCheckbox.checked = false;
  togglePollFields();
  pollQuestionInput.value = '';
  pollMultipleChoicesCheckbox.checked = false;
  pollOptionsContainer.innerHTML = '';
  addPollOptionInput();
  addPollOptionInput();
  addPollOptionButton.disabled = false;
}

function startEditPost(postId) {
  const post = posts.find(p => p.id === postId);
  if (!post) return;

  editingPostId = postId;
  document.getElementById('postTitle').value = post.title || '';
  document.getElementById('postText').value = post.text || '';
  document.getElementById('postGiveawayAmount').value = post.giveawayAmount || '';
  document.getElementById('postMediaType').value = post.mediaType || 'none';
  document.getElementById('postMediaUrl').value = post.mediaUrl || '';
  postHasPollCheckbox.checked = Boolean(post.pollQuestion && Array.isArray(post.pollOptions) && post.pollOptions.length >= 2);
  pollQuestionInput.value = post.pollQuestion || '';
  pollMultipleChoicesCheckbox.checked = post.multipleChoices || false;
  pollOptionsContainer.innerHTML = '';
  const options = Array.isArray(post.pollOptions) ? post.pollOptions : [];
  if (options.length > 0) {
    options.forEach(option => addPollOptionInput(option.text || ''));
  }
  while (pollOptionsContainer.querySelectorAll('.poll-option-input-wrapper').length < 2) {
    addPollOptionInput();
  }
  addPollOptionButton.disabled = pollOptionsContainer.querySelectorAll('.poll-option-input-wrapper').length >= 5;
  togglePollFields();
  document.getElementById('addPostButton').textContent = 'Enregistrer les modifications';
  
  // Scroll vers le formulaire
  document.getElementById('postFormContainer').scrollIntoView({ behavior: 'smooth' });
}

function deletePost(postId) {
  if (confirm('Êtes-vous sûr de vouloir supprimer ce post ?')) {
    posts = posts.filter(p => p.id !== postId);
    if (firestoreReady) {
      postsCollection.doc(postId).delete().catch(error => {
        console.error('Erreur suppression post Firestore :', error);
      });
    }
    savePosts();
    renderPosts();
  }
}

function toggleLike(postId) {
  const post = posts.find(p => p.id === postId);
  if (!post) return;
  const index = likedPosts.indexOf(postId);
  if (index > -1) {
    likedPosts.splice(index, 1);
    post.likes--;
    console.log(`[DEBUG Like] Unlike ${postId}. History:`, likedPostsHistory);
  } else {
    likedPosts.push(postId);
    post.likes++;
    console.log(`[DEBUG Like] Like ${postId}. Already in history?`, likedPostsHistory.includes(postId), 'History:', likedPostsHistory);
    if (!likedPostsHistory.includes(postId)) {
      likedPostsHistory.push(postId);
      saveLikedHistory();
      console.log(`[DEBUG Like] Saved history:`, likedPostsHistory);
      awardProfileXp(40, 'aimer un post');
    } else {
      console.log(`[DEBUG Like] NO XP - Already liked before`);
    }
  }
  if (firestoreReady) {
    postsCollection.doc(postId).update({ likes: post.likes }).catch(error => {
      console.error('Erreur mise à jour likes Firestore :', error);
    });
  }
  savePosts();
  saveLikedPosts();
  renderPosts();
}

function sharePost(post) {
  const text = `${post.title}\n${post.text}`;
  const alreadyShared = sharedPosts.includes(post.id);
  
  if (navigator.share) {
    navigator.share({
      title: post.title,
      text: text,
      url: window.location.href
    }).then(() => {
      if (!alreadyShared) {
        sharedPosts.push(post.id);
        saveSharedPosts();
        awardProfileXp(20, 'partager un post');
      }
    }).catch(() => {
      // Partage annulé ou non disponible
    });
  } else {
    navigator.clipboard.writeText(text).then(() => {
      alert('Contenu copié dans le presse-papiers !');
      if (!alreadyShared) {
        sharedPosts.push(post.id);
        saveSharedPosts();
        awardProfileXp(5, 'partager un post');
      }
    }).catch(() => {
      alert('Impossible de copier le contenu.');
    });
  }
}

function panelDragStart(event) {
  const text = `${post.title}\n${post.text}`;
  if (navigator.share) {
    navigator.share({
      title: post.title,
      text: text,
      url: window.location.href
    });
  } else {
    navigator.clipboard.writeText(text).then(() => {
      alert('Contenu copié dans le presse-papiers !');
    });
  }
}

function panelDragStart(event) {
  if (event.button !== 0) return;
  const panel = event.currentTarget.closest('.ai-chat-panel, .games-panel, .leaderboard-panel');
  if (!panel) return;

  const rect = panel.getBoundingClientRect();
  panelDragState.active = true;
  panelDragState.panel = panel;
  panelDragState.startX = event.clientX;
  panelDragState.startY = event.clientY;
  panelDragState.panelStartLeft = rect.left;
  panelDragState.panelStartTop = rect.top;

  panel.style.left = `${rect.left}px`;
  panel.style.top = `${rect.top}px`;
  panel.style.right = 'auto';
  panel.style.bottom = 'auto';
  document.body.style.userSelect = 'none';
}

function panelResizeStart(event) {
  event.stopPropagation();
  if (event.button !== 0) return;
  const panel = event.currentTarget.closest('.ai-chat-panel, .games-panel, .leaderboard-panel');
  if (!panel) return;

  const rect = panel.getBoundingClientRect();
  panelResizeState.active = true;
  panelResizeState.panel = panel;
  panelResizeState.startX = event.clientX;
  panelResizeState.startY = event.clientY;
  panelResizeState.panelStartWidth = rect.width;
  panelResizeState.panelStartHeight = rect.height;

  document.body.style.userSelect = 'none';
}

function panelPointerMove(event) {
  if (panelDragState.active && panelDragState.panel) {
    const dx = event.clientX - panelDragState.startX;
    const dy = event.clientY - panelDragState.startY;
    panelDragState.panel.style.left = `${Math.max(10, panelDragState.panelStartLeft + dx)}px`;
    panelDragState.panel.style.top = `${Math.max(10, panelDragState.panelStartTop + dy)}px`;
  }

  if (panelResizeState.active && panelResizeState.panel) {
    const dx = event.clientX - panelResizeState.startX;
    const dy = event.clientY - panelResizeState.startY;
    panelResizeState.panel.style.width = `${Math.max(280, panelResizeState.panelStartWidth + dx)}px`;
    panelResizeState.panel.style.height = `${Math.max(260, panelResizeState.panelStartHeight + dy)}px`;
  }
}

function panelPointerUp() {
  panelDragState.active = false;
  panelResizeState.active = false;
  panelDragState.panel = null;
  panelResizeState.panel = null;
  document.body.style.userSelect = '';
}

function initPanelInteractions() {
  const panels = [aiChatPanel, gamesPanel, leaderboardPanel];
  panels.forEach(panel => {
    if (!panel) return;
    const header = panel.querySelector('.ai-chat-header, .games-header');
    const resizer = panel.querySelector('.panel-resizer');
    if (header) {
      header.classList.add('panel-draggable');
      header.addEventListener('mousedown', panelDragStart);
    }
    if (resizer) {
      resizer.addEventListener('mousedown', panelResizeStart);
    }
  });

  document.addEventListener('mousemove', panelPointerMove);
  document.addEventListener('mouseup', panelPointerUp);
  document.addEventListener('mouseleave', panelPointerUp);
}

const panelDragState = {
  active: false,
  panel: null,
  startX: 0,
  startY: 0,
  panelStartLeft: 0,
  panelStartTop: 0
};

const panelResizeState = {
  active: false,
  panel: null,
  startX: 0,
  startY: 0,
  panelStartWidth: 0,
  panelStartHeight: 0
};

function appendAiMessage(role, text, imageUrl) {
  const message = document.createElement('div');
  message.className = `ai-message ai-${role}`;
  if (text) {
    message.innerHTML = `<p>${text}</p>`;
  }
  if (imageUrl) {
    const image = document.createElement('img');
    image.src = imageUrl;
    image.alt = 'Image envoyée';
    message.appendChild(image);
  }
  aiMessages.appendChild(message);
  aiMessages.scrollTop = aiMessages.scrollHeight;
}

function setAiStatus(message) {
  if (aiNote) {
    aiNote.textContent = message;
  }
}

function isRequestAllowed(text) {
  const forbidden = ['sexe', 'porn', 'viol', 'drugs', 'kill', 'bomb', 'terror', 'hack', 'pirate', 'racist', 'insult', 'crime'];
  const normalized = text.toLowerCase();
  return !forbidden.some(word => normalized.includes(word));
}

function randomChoice(items) {
  return items[Math.floor(Math.random() * items.length)];
}

async function fetchOpenAiResponse(prompt, hasImage) {
  if (!OPENAI_API_KEY.trim()) {
    console.warn('Clé OpenAI absente : utilisation de l’IA locale.');
    return generateAiResponse(prompt, hasImage);
  }

  const systemMessage = {
    role: 'system',
    content: 'Tu es un assistant utile et respectueux. Tu réponds aux demandes simples et appropriées sans entrer dans des sujets inappropriés.'
  };
  let userContent = prompt || '';
  if (hasImage) {
    userContent += (userContent ? '\n' : '') + 'Une image a été envoyée avec cette demande. Réponds de manière claire et simple en tenant compte de cette information.';
  }
  if (!userContent) {
    userContent = 'L’utilisateur a envoyé une image sans texte. Réponds de manière simple et utile.';
  }
  if (hasImage) {
    userContent += ' Note : l’image est reçue, mais je ne peux analyser que le contexte textuel dans cette interface.';
  }

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: OPENAI_MODEL,
        messages: [systemMessage, { role: 'user', content: userContent }],
        max_tokens: 250,
        temperature: 0.7
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('OpenAI API error:', response.status, errorText);
      return generateAiResponse(prompt, hasImage);
    }

    const data = await response.json();
    return data?.choices?.[0]?.message?.content?.trim() || 'Désolé, je n’ai pas obtenu de réponse. Essaie une autre question simple.';
  } catch (error) {
    console.error('OpenAI fetch error:', error);
    return 'Désolé, il y a eu un problème avec l’IA. Réessaye dans quelques instants.';
  }
}

function generateAiResponse(text, hasImage) {
  const normalized = (text || '').trim().toLowerCase();
  const greetings = ['bonjour', 'salut', 'coucou', 'hey', 'hello'];
  const farewells = ['au revoir', 'à bientôt', 'bye', 'salut'];
  const thanks = ['merci', 'thanks', 'super', 'top', 'cool'];

  if (hasImage && !normalized) {
    return randomChoice([
      'J’ai bien reçu ton image. Dis-moi ce que tu veux savoir ou ce que tu cherches.',
      'Image reçue ! Tu peux maintenant me poser une question simple sur ce que tu as envoyé.',
      'Merci pour l’image. Si tu veux, décris ce que tu veux que je regarde ou que je t’explique.'
    ]);
  }

  if (!normalized) {
    return randomChoice([
      'Écris-moi une question simple ou envoie une image pour commencer.',
      'Je suis prêt, pose-moi une question claire et je te réponds simplement.',
      'Je peux t’aider sur un sujet simple — essaie une question courte.'
    ]);
  }

  if (greetings.some(word => normalized.includes(word))) {
    return randomChoice([
      'Salut ! Que veux-tu savoir aujourd’hui ?',
      'Bonjour ! Pose-moi une question simple ou envoie une image.',
      'Salut ! Je suis là pour t’aider sur des sujets simples.'
    ]);
  }

  if (farewells.some(word => normalized.includes(word))) {
    return randomChoice([
      'À bientôt ! N’hésite pas à revenir si tu as d’autres questions.',
      'Au revoir ! Je suis là si tu veux poser une autre question.',
      'À plus tard ! Reviens quand tu veux pour une autre question simple.'
    ]);
  }

  if (thanks.some(word => normalized.includes(word))) {
    return randomChoice([
      'Avec plaisir ! Si tu veux, tu peux me poser autre chose.',
      'Merci ! Dis-moi si tu veux un autre renseignement.',
      'Content d’avoir pu aider. Pose-moi une autre question si tu veux.'
    ]);
  }

  if (normalized.includes('qui es') || normalized.includes('tu es')) {
    return randomChoice([
      'Je suis une IA locale simple intégrée à ce site. Je réponds aux questions claires et respectueuses.',
      'Je suis le chat IA du site. Je peux répondre à des questions simples et donner des conseils basiques.',
      'Je suis un assistant du site, conçu pour aider sur des sujets simples sans clé API.'
    ]);
  }

  if (normalized.includes('aide') || normalized.includes('comment') || normalized.includes('peux-tu') || normalized.includes('peux tu')) {
    return randomChoice([
      'Je suis là pour t’aider. Pose-moi une question simple sur un sujet clair.',
      'Demande-moi quelque chose de simple, comme une explication courte ou un conseil basique.',
      'Je peux te donner une réponse simple si tu formules une question claire.'
    ]);
  }

  if (normalized.includes('image') || normalized.includes('photo')) {
    return randomChoice([
      'Je reçois ton image, mais je traite surtout le texte. Dis-moi ce que tu veux savoir à propos de l’image.',
      'Ton image est bien reçue. Pose-moi une question claire sur son contenu ou son usage.',
      'Je peux t’aider à décrire une image si tu me dis ce que tu veux en savoir.'
    ]);
  }

  if (normalized.includes('site') || normalized.includes('web') || normalized.includes('page')) {
    return randomChoice([
      'Ce site présente un chat IA local et un espace de posts. Je peux répondre à des questions simples dessus.',
      'Je suis intégré à cette page web pour aider à répondre à des questions simples sans API externe.',
      'Le site contient un chat IA et des posts, et je suis là pour te répondre avec des réponses simples.'
    ]);
  }

  if (normalized.includes('heure') || normalized.includes('météo') || normalized.includes('temps')) {
    return randomChoice([
      'Je ne peux pas lire la météo en direct, mais je peux te donner une réponse simple sur les sujets que tu demandes.',
      'Je n’ai pas accès au temps réel ici, mais je peux t’aider avec une réponse générale ou des conseils.',
      'Je ne vois pas la météo actuelle. Pose-moi une autre question simple si tu veux.'
    ]);
  }

  if (normalized.includes('blague') || normalized.includes('humour') || normalized.includes('drôle')) {
    return randomChoice([
      'Pourquoi les programmeurs confondent Halloween et Noël ? Parce que OCT 31 = DEC 25.',
      'Voici une blague simple : pourquoi l’ordinateur était fatigué ? Parce qu’il avait trop de bits à traiter.',
      'Je peux te faire rire un peu : un bug entre dans un bar et le barman dit "Pas de blague".'
    ]);
  }

  if (normalized.includes('pourquoi') || normalized.includes('pq')) {
    return randomChoice([
      'C\'est une bonne question. La réponse dépend souvent du contexte. Peux-tu donner plus de détails ?',
      'Pourquoi ? C\'est une question profonde. En général, les choses arrivent pour des raisons variées.',
      'Je ne peux pas lire dans les pensées, mais je peux essayer de t\'expliquer si tu précises.'
    ]);
  }

  // Réponses basiques à des sujets courants
  if (normalized.includes('ciel') || normalized.includes('bleu')) {
    return 'Le ciel apparaît bleu parce que la lumière du soleil se diffuse dans l\'atmosphère terrestre.';
  }

  if (normalized.includes('ordinateur') || normalized.includes('pc') || normalized.includes('informatique')) {
    return 'Les ordinateurs sont des machines qui traitent des informations. Ils utilisent un processeur, de la mémoire RAM, un disque dur, etc.';
  }

  if (normalized.includes('internet') || normalized.includes('web')) {
    return 'Internet est un réseau mondial qui connecte des milliards d\'ordinateurs. Il permet de partager des informations et communiquer.';
  }

  if (normalized.includes('couleur') || normalized.includes('couleurs')) {
    return 'Les couleurs sont créées par la lumière. Les couleurs primaires sont le rouge, le bleu et le vert.';
  }

  if (normalized.includes('animaux') || normalized.includes('animal')) {
    return 'Les animaux sont des êtres vivants qui ne sont pas des plantes. Il existe des mammifères, oiseaux, reptiles, etc.';
  }

  if (normalized.includes('nourriture') || normalized.includes('manger')) {
    return 'La nourriture est essentielle pour la santé. Mangez équilibré : fruits, légumes, protéines, glucides et matières grasses.';
  }

  if (normalized.includes('sport') || normalized.includes('sports')) {
    return 'Le sport est bon pour la santé. Il y a le football, le basket, la natation, etc. Choisis celui que tu aimes !';
  }

  if (normalized.includes('musique') || normalized.includes('chanson')) {
    return 'La musique est un art qui utilise le son. Il y a du rock, du pop, du classique, etc. Quelle est ta préférée ?';
  }

  // Fallback plus varié et utile
  return randomChoice([
    'Je ne suis pas sûr de comprendre ta question. Peux-tu la reformuler de manière plus simple ?',
    'Essaie de poser une question plus claire ou sur un sujet que je connais.',
    'Je réponds mieux aux questions simples. Dis-moi ce que tu veux savoir exactement.',
    'Pose-moi une question sur le site, une blague ou un sujet basique.',
    'Je peux t’aider avec des conseils simples ou des explications courtes. Essaie autre chose.'
  ]);
}

// Tetris Game
const ROWS = 20;
const COLS = 10;
const BLOCK_SIZE = 30;
const COLORS = ['#000', '#f00', '#0f0', '#00f', '#ff0', '#f0f', '#0ff', '#fff'];

let board = [];
let currentPiece = null;
let currentPieceId = 1;
let currentX = 0;
let currentY = 0;
let score = 0;
let gameInterval = null;
let ctx = null;

const PIECES = [
  [[1, 1, 1, 1]], // I
  [[1, 1], [1, 1]], // O
  [[0, 1, 0], [1, 1, 1]], // T
  [[1, 0, 0], [1, 1, 1]], // J
  [[0, 0, 1], [1, 1, 1]], // L
  [[1, 1, 0], [0, 1, 1]], // S
  [[0, 1, 1], [1, 1, 0]]  // Z
];

function initBoard() {
  board = [];
  for (let r = 0; r < ROWS; r++) {
    board[r] = [];
    for (let c = 0; c < COLS; c++) {
      board[r][c] = 0;
    }
  }
}

function drawBoard() {
  ctx.clearRect(0, 0, tetrisCanvas.width, tetrisCanvas.height);
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      if (board[r][c]) {
        ctx.fillStyle = COLORS[board[r][c]];
        ctx.fillRect(c * BLOCK_SIZE, r * BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE);
        ctx.strokeStyle = '#000';
        ctx.strokeRect(c * BLOCK_SIZE, r * BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE);
      }
    }
  }
  // Draw current piece
  if (currentPiece) {
    for (let r = 0; r < currentPiece.length; r++) {
      for (let c = 0; c < currentPiece[r].length; c++) {
        if (currentPiece[r][c]) {
          ctx.fillStyle = COLORS[currentPieceId];
          ctx.fillRect((currentX + c) * BLOCK_SIZE, (currentY + r) * BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE);
          ctx.strokeStyle = '#000';
          ctx.strokeRect((currentX + c) * BLOCK_SIZE, (currentY + r) * BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE);
        }
      }
    }
  }
}

function newPiece() {
  const type = Math.floor(Math.random() * PIECES.length);
  currentPieceId = type + 1;
  currentPiece = PIECES[type].map(row => [...row]);
  currentX = Math.floor(COLS / 2) - 1;
  currentY = 0;
  if (collision()) {
    gameOver();
  }
}

function collision() {
  for (let r = 0; r < currentPiece.length; r++) {
    for (let c = 0; c < currentPiece[r].length; c++) {
      if (currentPiece[r][c]) {
        const newX = currentX + c;
        const newY = currentY + r;
        if (newX < 0 || newX >= COLS || newY >= ROWS || (newY >= 0 && board[newY][newX])) {
          return true;
        }
      }
    }
  }
  return false;
}

function placePiece() {
  for (let r = 0; r < currentPiece.length; r++) {
    for (let c = 0; c < currentPiece[r].length; c++) {
      if (currentPiece[r][c]) {
        board[currentY + r][currentX + c] = currentPieceId;
      }
    }
  }
  clearLines();
  newPiece();
}

function clearLines() {
  for (let r = ROWS - 1; r >= 0; r--) {
    if (board[r].every(cell => cell !== 0)) {
      board.splice(r, 1);
      board.unshift(new Array(COLS).fill(0));
      score += 100;
      scoreElement.textContent = `Score: ${score}`;
      r++; // Check the same row again
    }
  }
}

function rotatePiece() {
  const rotated = currentPiece[0].map((_, index) => currentPiece.map(row => row[index]).reverse());
  const oldPiece = currentPiece;
  currentPiece = rotated;
  if (collision()) {
    currentPiece = oldPiece;
  }
}

function movePiece(dx, dy) {
  currentX += dx;
  currentY += dy;
  if (collision()) {
    currentX -= dx;
    currentY -= dy;
    if (dy > 0) {
      placePiece();
    }
  }
}

function dropPiece() {
  while (!collision()) {
    currentY++;
  }
  currentY--;
  placePiece();
}

function gameLoop() {
  movePiece(0, 1);
  drawBoard();
}

function startTetris() {
  if (gameInterval) return;
  initBoard();
  score = 0;
  scoreElement.textContent = 'Score: 0';
  ctx = tetrisCanvas.getContext('2d');
  newPiece();
  gameInterval = setInterval(gameLoop, 500);
  startGameButton.textContent = 'Arrêter';
}

function stopTetris() {
  if (gameInterval) {
    clearInterval(gameInterval);
    gameInterval = null;
    startGameButton.textContent = 'Démarrer';
  }
}

function gameOver() {
  stopTetris();
  updateTetrisLeaderboard(playerNameInput?.value || 'Joueur', score);
  alert('Game Over! Score: ' + score);
}

function onTetrisPointerDown(event) {
  if (!gameInterval || !tetrisCanvas) return;
  event.preventDefault();
  tetrisPointerState.active = true;
  tetrisPointerState.startX = event.clientX;
  tetrisPointerState.startY = event.clientY;
  tetrisPointerState.lastX = event.clientX;
  tetrisPointerState.lastY = event.clientY;
  tetrisPointerState.moved = false;
  tetrisCanvas.setPointerCapture(event.pointerId);
}

function onTetrisPointerMove(event) {
  if (!tetrisPointerState.active) return;
  const dx = event.clientX - tetrisPointerState.lastX;
  const dy = event.clientY - tetrisPointerState.lastY;
  if (Math.abs(dx) >= 20) {
    movePiece(dx > 0 ? 1 : -1, 0);
    tetrisPointerState.lastX = event.clientX;
    tetrisPointerState.moved = true;
    drawBoard();
  } else if (dy >= 25) {
    movePiece(0, 1);
    tetrisPointerState.lastY = event.clientY;
    tetrisPointerState.moved = true;
    drawBoard();
  }
}

function onTetrisPointerUp(event) {
  if (!tetrisPointerState.active) return;
  const totalDx = event.clientX - tetrisPointerState.startX;
  const totalDy = event.clientY - tetrisPointerState.startY;
  if (!tetrisPointerState.moved && Math.abs(totalDx) < 15 && Math.abs(totalDy) < 15) {
    rotatePiece();
    drawBoard();
  }
  tetrisPointerState.active = false;
  tetrisPointerState.moved = false;
  if (tetrisCanvas && tetrisCanvas.hasPointerCapture(event.pointerId)) {
    tetrisCanvas.releasePointerCapture(event.pointerId);
  }
}

// Controls
document.addEventListener('keydown', (e) => {
  if (!gameInterval) return;
  switch (e.key) {
    case 'ArrowLeft':
      movePiece(-1, 0);
      break;
    case 'ArrowRight':
      movePiece(1, 0);
      break;
    case 'ArrowDown':
      movePiece(0, 1);
      break;
    case 'ArrowUp':
      rotatePiece();
      break;
    case ' ':
      e.preventDefault();
      dropPiece();
      break;
  }
  drawBoard();
});

async function handleAiSend() {
  const userText = aiInput.value.trim();
  const file = aiFileInput.files[0];
  if (!userText && !file) {
    setAiStatus('Écris une demande ou ajoute une image.');
    return;
  }
  if (userText && !isRequestAllowed(userText)) {
    appendAiMessage('user', userText);
    appendAiMessage('bot', 'Cette demande n’est pas autorisée. Pose une question simple, respectueuse et claire.');
    aiInput.value = '';
    aiFileInput.value = '';
    aiFileInput.previousElementSibling.textContent = '+ Image';
    setAiStatus('Demande non autorisée.');
    return;
  }

  const userLabel = userText || (file ? 'J’ai envoyé une image.' : '');
  if (userLabel) {
    appendAiMessage('user', userLabel);
  }
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      appendAiMessage('user', '', reader.result);
    };
    reader.readAsDataURL(file);
  }

  aiSendButton.disabled = true;
  setAiStatus('Envoi à l’IA...');

  const response = await fetchOpenAiResponse(userText, Boolean(file));
  appendAiMessage('bot', response);

  aiSendButton.disabled = false;
  setAiStatus('L’IA répond à des demandes simples et respectueuses. Pas de questions étranges.');

  aiInput.value = '';
  aiFileInput.value = '';
  aiFileInput.previousElementSibling.textContent = '+ Image';
}

function loginAdmin() {
  const passwordInput = document.getElementById('adminPassword').value;
  if (passwordInput === adminPassword) {
    isAdmin = true;
    updateAdminUI();
    renderPosts();
    adminLoginButton.textContent = 'Admin connecté';
    adminLoginButton.disabled = true;
    document.getElementById('adminPassword').disabled = true;
    return;
  }
  alert('Mot de passe incorrect.');
}

function updateAdminUI() {
  if (!isAdmin) return;
  showPostForm();
  showLevelsManagement();
  updateAdminProfileControls();
  renderPosts();
  renderLeaderboard();
}

function updateAdminProfileControls() {
  if (adminLevelActions) {
    if (isAdmin) {
      adminLevelActions.classList.remove('hidden');
    } else {
      adminLevelActions.classList.add('hidden');
    }
  }
  if (adminRoleActions) {
    if (isAdmin) {
      adminRoleActions.classList.remove('hidden');
    } else {
      adminRoleActions.classList.add('hidden');
    }
  }
  if (adminDeleteSection) {
    if (isAdmin) {
      adminDeleteSection.classList.remove('hidden');
    } else {
      adminDeleteSection.classList.add('hidden');
    }
  }
}

function deleteUserAccountFromLeaderboard(user) {
  if (!isAdmin) {
    alert('Seul l\'admin peut supprimer des comptes.');
    return;
  }
  if (!user || !user.id) {
    alert('Impossible de supprimer ce compte : identifiant manquant.');
    return;
  }
  const confirmed = confirm(`Supprimer le compte de ${user.name || 'cet utilisateur'} ? Cette action est irréversible.`);
  if (!confirmed) return;

  if (!firestoreReady || !leaderboardCollection) {
    alert('Firebase n\'est pas disponible pour supprimer le compte.');
    return;
  }

  const deleteActions = [];
  deleteActions.push(
    leaderboardCollection.doc(user.id).delete().catch(error => {
      console.error('Erreur suppression leaderboard :', error);
    })
  );

  if (firestoreReady && profilesCollection) {
    if (user.loginCode) {
      deleteActions.push(
        profilesCollection.doc(user.loginCode).delete().catch(error => {
          console.error('Erreur suppression profil par code :', error);
        })
      );
    } else {
      deleteActions.push(
        profilesCollection.where('id', '==', user.id).get().then(snapshot => {
          snapshot.forEach(item => {
            item.ref.delete().catch(error => {
              console.error('Erreur suppression profil par ID :', error);
            });
          });
        })
      );
    }
  }

  Promise.all(deleteActions).then(() => {
    alert(`Compte de ${user.name || 'l\'utilisateur'} supprimé avec succès.`);
    if (userProfile.id === user.id) {
      logoutAccount();
    }
    renderLeaderboard();
  }).catch(error => {
    console.error('Erreur suppression compte admin :', error);
    alert('Erreur lors de la suppression du compte.');
  });
}

function deleteUserAccountByCode() {
  if (!isAdmin) {
    alert('Seul l\'admin peut supprimer des comptes.');
    return;
  }
  const code = (adminDeleteCodeInput?.value || '').toUpperCase().trim();
  if (code.length !== 6) {
    alert('Saisis un code de 6 caractères valide.');
    return;
  }
  if (!firestoreReady || !profilesCollection) {
    alert('Firebase n\'est pas disponible pour supprimer le compte.');
    return;
  }

  profilesCollection.doc(code).get().then(doc => {
    if (!doc.exists) {
      alert('Aucun compte trouvé pour ce code.');
      return Promise.reject('AccountNotFound');
    }
    const profileData = doc.data() || {};
    const userId = profileData.id;

    const deleteActions = [];
    deleteActions.push(doc.ref.delete());
    if (firestoreReady && leaderboardCollection) {
      if (userId) {
        deleteActions.push(leaderboardCollection.doc(userId).delete().catch(error => {
          console.error('Erreur suppression leaderboard :', error);
        }));
      } else {
        deleteActions.push(
          leaderboardCollection.where('loginCode', '==', code).get().then(snapshot => {
            snapshot.forEach(item => item.ref.delete().catch(error => {
              console.error('Erreur suppression leaderboard :', error);
            }));
          })
        );
      }
    }

    return Promise.all(deleteActions);
  }).then(() => {
    alert('Compte supprimé avec succès.');
    if (adminDeleteCodeInput) {
      adminDeleteCodeInput.value = '';
    }
    renderLeaderboard();
  }).catch(error => {
    if (error === 'AccountNotFound') {
      return;
    }
    console.error('Erreur suppression compte admin :', error);
    alert('Erreur lors de la suppression du compte.');
  });
}

function showLevelsManagement() {
  if (!levelsManagementContainer) return;
  levelsManagementContainer.classList.remove('hidden');
  renderLevelsManagement();
}

function renderLevelsManagement() {
  if (!levelsContainer) return;
  
  // Initialiser editedLevelRewards avec les récompenses actuelles
  if (Object.keys(editedLevelRewards).length === 0) {
    editedLevelRewards = { ...LEVEL_REWARDS };
  }
  
  levelsContainer.innerHTML = '';
  
  // Obtenir tous les niveaux et les trier
  const levels = Object.keys(editedLevelRewards).map(Number).sort((a, b) => a - b);
  
  levels.forEach((level) => {
    const rewardText = editedLevelRewards[level] || '';
    const levelDiv = document.createElement('div');
    levelDiv.className = 'level-input-group';
    levelDiv.innerHTML = `
      <div class="level-input-wrapper">
        <label>Niveau ${level}</label>
        <input type="text" class="level-reward-input" data-level="${level}" value="${rewardText}" placeholder="Récompense (ex: Badge Champion)" />
        <button type="button" class="button button-danger delete-level-btn" data-level="${level}">Supprimer</button>
      </div>
    `;
    levelsContainer.appendChild(levelDiv);
    
    const deleteBtn = levelDiv.querySelector('.delete-level-btn');
    deleteBtn.addEventListener('click', () => {
      delete editedLevelRewards[level];
      renderLevelsManagement();
    });
    
    const input = levelDiv.querySelector('.level-reward-input');
    input.addEventListener('change', (e) => {
      editedLevelRewards[level] = e.target.value;
    });
  });
}

function addLevelInput() {
  // Trouver le prochain niveau disponible
  const existingLevels = Object.keys(editedLevelRewards).map(Number);
  let newLevel = 1;
  
  while (existingLevels.includes(newLevel)) {
    newLevel++;
  }
  
  editedLevelRewards[newLevel] = '';
  renderLevelsManagement();
}

function applyLevels() {
  // Valider et nettoyer les données
  const newLevelRewards = {};
  
  Object.keys(editedLevelRewards).forEach((levelStr) => {
    const level = Number(levelStr);
    const reward = editedLevelRewards[levelStr].trim();
    
    // Vérifier que le niveau est entre 1 et MAX_LEVEL
    if (level >= 1 && level <= MAX_LEVEL && reward.length > 0) {
      newLevelRewards[level] = reward;
    }
  });
  
  // Appliquer les modifications
  Object.assign(LEVEL_REWARDS, newLevelRewards);
  
  // Sauvegarder dans localStorage
  localStorage.setItem('levelRewards', JSON.stringify(LEVEL_REWARDS));
  
  // Réinitialiser et afficher un message de confirmation
  editedLevelRewards = { ...LEVEL_REWARDS };
  renderLevelsManagement();
  
  alert('Récompenses mises à jour avec succès!');
  
  // Mettre à jour le profil de l'utilisateur pour refléter les nouvelles récompenses
  updateUserRewards();
  renderProfile();
}

function updateUserRewards() {
  // Mettre à jour les récompenses de l'utilisateur actuel basées sur son niveau
  const currentLevel = getProfileLevel(userProfile.totalXp);
  const newRewards = [];
  
  Object.keys(LEVEL_REWARDS).forEach((levelKey) => {
    const rewardLevel = Number(levelKey);
    if (currentLevel >= rewardLevel) {
      newRewards.push(LEVEL_REWARDS[levelKey]);
    }
  });
  
  userProfile.rewards = newRewards;
  saveProfile();
}

themeToggle.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark');
  updateButtonText();
});

adminToggle.addEventListener('click', showAdminPanel);
adminLoginButton.addEventListener('click', loginAdmin);
addPostButton.addEventListener('click', addPost);
if (addLevelButton) {
  addLevelButton.addEventListener('click', addLevelInput);
}
if (applyLevelsButton) {
  applyLevelsButton.addEventListener('click', applyLevels);
}
if (addProfileLevelButton) {
  addProfileLevelButton.addEventListener('click', addProfileLevels);
}
if (removeProfileLevelButton) {
  removeProfileLevelButton.addEventListener('click', removeProfileLevels);
}
if (addProfileRoleButton) {
  addProfileRoleButton.addEventListener('click', addProfileRole);
}
if (postHasPollCheckbox) {
  postHasPollCheckbox.addEventListener('change', togglePollFields);
}
if (addPollOptionButton) {
  addPollOptionButton.addEventListener('click', () => addPollOptionInput());
}
if (profileToggle) {
  profileToggle.addEventListener('click', toggleProfileSection);
}
if (leaderboardToggle) {
  leaderboardToggle.addEventListener('click', toggleLeaderboard);
}
if (closeLeaderboardModal) {
  closeLeaderboardModal.addEventListener('click', closeLeaderboardModalWindow);
}
if (leaderboardModal) {
  leaderboardModal.addEventListener('click', (e) => {
    if (e.target === leaderboardModal) {
      closeLeaderboardModalWindow();
    }
  });
}
if (shopToggle) {
  shopToggle.addEventListener('click', openShopModal);
}
if (closeShopModal) {
  closeShopModal.addEventListener('click', closeShopModalWindow);
}
if (shopModal) {
  shopModal.addEventListener('click', (e) => {
    if (e.target === shopModal) {
      closeShopModalWindow();
    }
  });
}
if (profileAvatarInput) {
  profileAvatarInput.addEventListener('change', handleAvatarUpload);
}
if (saveProfileButton) {
  saveProfileButton.addEventListener('click', saveProfileSettings);
}
if (deleteAccountButton) {
  deleteAccountButton.addEventListener('click', deleteAccount);
}
if (loginButton) {
  loginButton.addEventListener('click', loginWithCode);
}
if (logoutButton) {
  logoutButton.addEventListener('click', logoutAccount);
}
if (adminDeleteAccountButton) {
  adminDeleteAccountButton.addEventListener('click', deleteUserAccountByCode);
}
if (battlePassClaimButton) {
  battlePassClaimButton.addEventListener('click', claimBattlePassCoins);
}
if (addProfileLevelButton) {
  addProfileLevelButton.addEventListener('click', addProfileLevels);
}

// Initialisation
loadPosts();
loadVotedPolls();
loadProfile();
initFirebase();
loadLeaderboard();
renderPosts();
renderProfile();
renderShop();
renderLeaderboard();
renderHeaderProfile();
updateButtonText();
startFreeBorderTimer();

window.addEventListener('load', () => {
  if (!firestoreReady) {
    initFirebase();
  }
});
