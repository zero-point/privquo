var DigitalShadow = DigitalShadow || {};

DigitalShadow.Config = {
    colors: {
        chart : ['#066783', '#71ab38', '#c77f02', '#a1171e'],
        bright : ['#0aafdf', '#96e34a', '#f89e02', '#e6212b']
    },
    loading: [
        "Accessing Data",
        "Processing Photos",
        "Triangulating Locations",
        "Evaluating Relationships",
        "Filtering Content"
    ],
    negative : {
        where : {
            primary     : "Your location cannot be determined with available data",
            secondary   : "Limited opportunities for attack"
        },
        care : {
            primary     : "Insufficient Data",
            secondary   : "You exhibit low risk of exposure. Your relationships are secure."
        }
    },
    options : {
        durations : {
            progress        : 1250,
            captionTyping   : 25,
            passwordLines   : 50,
            passwordTyping  : 20,
            moduleWho       : 2000
        },
        statuses : {
            maxLength: 100
        },
        waypointOffset : "85%",
        weaknesses : {
            maxPosts: 1000
        }
    },
    permissions : "read_stream, publish_stream, user_photos, user_status, user_birthday, user_hometown, user_location, user_education_history, user_work_history, user_interests, user_activities, user_religion_politics, friends_status, user_relationships, user_likes, user_subscriptions, user_groups, friends_photos",
    share : {
        title : "Digital Shadow"
    },
    words : {
        "volatile"      : ["abduction", "abducted", "abducting", "abuse", "abused", "abuses", "abusing", "abusive", "AK-47", "anger", "angers", "arrested", "arrested", "angered", "angry", "annihilate", "annihilated", "annihilates", "annihilating", "assassinate", "assassinated", "assassinates", "assassinating", "assault", "assaults", "assaulted", "bash", "bashed", "bashing", "beat", "beating", "beats", "bloodied", "bloody", "brutal", "bugs", "bugged", "bugging", "brutalize", "brutalized", "bullet", "burn", "burn", "burning", "clobber", "clobbered", "criminal", "criminals", "cripple", "duress", "cripples", "crippled", "crippling", "cruel", "crush", "crushing", "crushing", "dagger", "daggers", "dead", "death", "decimate", "defiant", "defies", "defy", "defying", "demolish", "demolishes", "demolished", "detonate", "detonated", "detonates", "catastrophe", "catastrophes", "catastrophic", "demolishing", "despise", "despises", "despised", "destroy", "destroyed", "destroyer", "destroying", "destroys", "detest", "detests", "threatening", "threat", "threats", "perilous", "peril", "treacherous", "hazard", "hazards", "hazardous", "die", "dies", "disfigure", "disfigures", "disfiguring", "disfigured", "drown", "drowning", "drowns", "dying", "enemy", "enraged", "enraging", "eradicate", "eradicates", "eradicating", "eradicated", "execute", "executed", "executes", "executing", "exterminate", "exterminates", "exterminated", "exterminating", "fatal", "fatality", "fatalities", "fear", "fight", "fights", "fought", "fire", "fighter", "fighting", "flog", "flogging", "flogged", "force", "forced", "forces", "forcing", "forceful", "glock", "glocks", "grenade", "grenades", "gun", "guns", "gunned", "gunning", "gunner", "gut", "guts", "gutted", "gutting", "hammer", "hammers", "hammered", "hammering", "harm", "harms", "harmed", "harming", "harms", "hate", "hated", "hates", "hating", "hit", "hits", "hitting", "horror", "horrors", "hostile", "hostiles", "hurt", "hurting", "hurts", "inconsistent", "inflict", "inflicting", "inflicts", "injured", "injures", "injuring", "inure", "kick", "kicked", "kicking", "kicks", "kill", "killed", "killing", "kills", "knife", "knifed", "lethal", "loathe", "loathes", "loathing", "machete", "dangerous", "mad", "maddening", "madness", "maim", "maimed", "maims", "massacre", "massacres", "massacred", "mayhem", "menace", "menacing", "misery", "mortal", "mortality", "murder", "murdered", "murderer", "murdering", "murderous", "murders", "mutilate", "mutilated", "mutilates", "mutilating", "pain", "pained", "painful", "pains", "pelt", "pelted", "pelting", "pistol", "pound", "pounding", "pounds", "pummel", "pummels", "pummeled", "pummeling", "punch", "punches", "punched", "punching", "quarrel", "rage", "rages", "raging", "revolver", "rifle", "shatter", "shatters", "shattered", "shattering", "shit", "shot", "shoot", "shooting", "shot", "shotgun", "slam", "slammed", "slams", "slap", "slapped", "slapping", "slaps", "slaughter", "slaughtered", "slay", "slayed", "slays", "slug", "slugged", "smash", "smashed", "smashes", "smashing", "terminal", "terrible", "trouble", "torture", "tortured", "torturing", "trounce", "trounced", "unpredictable", "vandal", "vandals", "warn", "warns", "warning", "warned", "violence", "violent", "wallop", "wallops", "walloped", "wild", "walloped", "war", "wars", "whimsical", "whim", "whims", "weapon", "weapons", "fatass",  "whip", "whips", "whipped", "whipping", "wound", "wounded", "wreck", "wrecks", "wrecked", "wrecking", "bitch", "bitching", "bastard", "bastards", "fuck", "fuck", "fucker", "fucker", "hell", "fucking", "FUCK!", "SHIT!", "mother fucker", "FUCK THIS SHIT", "FUCK THIS SHIT!", "stupid", "stupid ass", "dumbass", "Hell", "hellish", "dipshit", "shut up", "shut up!", "YOLO", "asshole", "asshat"],
        "deviant"       : ["69", "addict", "addicted", "absurd", "affair", "affairs", "amphetamine", "arouse", "arouses", "aroused", "arousing", "arse", "ass", "babe", "babes", "bachelor", "bachelors", "bachelorette", "bachelorettes", "balls", "bang", "bangs", "banging", "bed", "bedded", "bite", "bites", "biting", "bitten", "bit", "BJ", "blast", "blasted", "blindfold", "blow", "blows", "blew", "bod", "body", "bondage", "bone", "boob", "boobies", "boobs", "booty", "titties", "boxers", "bra", "breast", "brothel", "bump", "butt", "butts", "carnal", "cleavage", "climax", "climaxes", "climaxed", "condom", "condoms", "copulates", "copulate", "copulating", "crotch", "dick", "dicking", "dicked", "dicks", "dirty", "drug", "drugs", "drugged", "druggy", "DTF", "ecstasy", "erotic", "erotica",  "eroticism", "expose", "exposes", "exposing", "exposed", "fetish", "fetishes", "finger", "fingering", "fingers", "freak", "freaks", "freaking", "freaky", "fuck", "fucked", "fucker", "fucking", "fucks", "grind", "hooker", "horny", "intercourse", "kiss", "kissed", "kisses", "kissing", "laid", "lay", "lick", "licked", "licks", "lips", "lust", "lusted", "lusting", "lusts", "masturbate", "masturbation", "masturbates", "MILF", "mouth", "oral", "naked", "narcotic", "naughty", "nude", "nudes", "obscene", "obscenity", "orgasm", "orgasms", "orgasmic", "panties", "panty", "penetrate", "penetrates", "penetrated", "penetrates", "penetration", "penis", "penises", "perv", "pervs", "pervert", "pleasure", "pleasures", "fantasies", "porn", "drinking", "drinking", "party", "partying", "club", "dance", "grinding", "porns", "pornography", "prostitute", "prostitutes", "prostitution", "raunch", "raunchy", "rub", "rubbed", "rubbing", "rubs", "screw", "screwed", "screwing", "screws", "sex", "sexed", "sext", "sexting", "sexual", "sexuality", "sexy", "sin", "sinned", "sinner", "sinners", "spank", "wild", "spanked", "spanking", "spanks", "STD", "STDs", "stroke", "stroked", "strokes", "stroking", "suck", "sucked", "sucking", "sucks", "syphilis", "thigh", "tit", "tits", "tongue", "tongues", "tonguing", "underwear", "undress", "undressed", "undressing", "vagina", "virgin", "whore", "whores", "whoring", "meth", "weed", "toke", "drunk", "trouble", "slammed", "slamming", "shitfaced", "booze", "boozing", "beers", "urges", "urge", "morbid", "pussy", "pussys", "cock", "cocks", "douche", "douches", "douchebag", "cunt", "cunts", "crystal meth", "high", "stoned", "baked", "wasted", "blitzed", "crack", "sloshed", "plastered", "hungover", "raged", "hangover", "hangovers", "funday", "rager", "rave", "raves", "raved", "hammered", "party", "parties", "partied", "wiener", "wieners", "topless", "nads", "fart", "farts", "farted", "crap", "craps", "crapped", "stank", "stanky", "stanks", "nasty", "loaded", "boink", "boinked", "rawdog", "rawdogs", "pill", "pills", "hot", "hot!", "fantasy", "fantasize", "gangbang", "gangbangs", "cheat", "cheating", "cheater", "rebel", "rebels", "steal", "stealing", "steals", "bourbon", "gin", "tonic", "vodka", "whiskey", "shots", "tequila",  "heroin", "drinks", "smoke", "smoked", "cigarettes", "joint", "blunt", "pipe", "rape", "raping", "raped", "syphilis", "gonorrhea", "herpes", "anal", "assmunch", "beaver", "boner", "bunghole", "clitoris", "cum", "cumming", "dildo", "dildos", "erection", "erections", "stiffy", "chubby", "hump", "humping", "jiz", "jizz", "kinky", "nympho", "orgy", "piss", "pissing", "poop", "pooping", "poops", "poopchute", "rimjob", "rimjobs", "hummer", "pube", "pubes", "schlong", "slut", "sluts", "slutted", "dike", "snatch", "sperm", "spermy", "fuck", "fuck me", "fucking", "sphincter", "testicle", "testicles", "twat", "twatter", "twats", "voyeur", "alcohol", "alcoholic", "alcoholics", "prick", "pricks", "corrupt", "sucker", "shitter", "corruption", "bar", "bars"],
        "submissive"    : ["accept", "accepts", "accepted", "acceptable", "after you", "agree", "agrees", "agreed", "coward", "cowardice", "agreement", "ambivalent", "ambivalence", "apathy", "apathetic", "bless", "blesses", "blessed", "certainly", "sure thing", "content", "copacetic", "defer", "defers", "doesn't matter", "doesn't matter to me", "don't care", "no worries", "either way", "excellent", "baby", "fine", "fine by me", "fine with me", "for sure", "friendly", "grateful", "humbled", "I agree", "I don't care", "I trust", "I'll defer", "I'm easy", "I'm free", "I'm good", "if you want", "indeed", "makes no difference", "no prob", "no problem", "np", "O.K.", "of course", "perfect", "please", "pray", "prayed", "prayers", "respect", "respectful", "respects", "safe", "safety", "satisfied", "terrific", "thank you", "thankful", "that's fine", "that's O.K.", "that's ok", "that's okay", "totally", "trust", "up to you", "welcome", "whatever", "whenever", "wherever", "whomever", "will do", "yes please", "you bet", "you first", "you got it", "you're welcome", "your call", "give up", "I give", "helpless", "insecure", "humiliate", "ashamed", "crushed", "disappoint", "regret", "obey", "blah", "meh", "indifferent", "indifference", "bland", "sorry", "apologize", "apology", "apologies", "serve", "willing", "sigh", "desperate", "lord", "dunno", "thoughts?", "gently", "relax", "cool", "coolio", "hugs", "possibly", "awesome", "sweet", "good luck", "beg", "begging", "this happened", "this is happening"],
        "depressive"    : ["agony", "alone", "aloof", "anguish", "anguished", "ashamed", "bawl", "bawling", "bleak", "blubber", "blubbering", "blue", "boo", "booo", "boooo", "booooo", "broken", "broken heart", "damn", "damnit", "damned", "cursed", "brokenhearted", "burden", "burdened", "cried", "cries", "crisis", "crushed", "cry", "crying", "defeat", "defeating", "deflating", "drug", "drugs", "drugged", "defeated", "dejected", "depressed", "depressing", "depression", "despair", "despairing", "disappoint", "disappointed", "disappointment", "discomfort", "discouraged", "discouraging", "disheartened", "disheartening", "dismal", "dreary", "embarrassed", "emptiness", "empty", "ennui", "fail", "failed", "failure", "I suck", "I SUCK!", "fatigue", "fatigued", "fired", "forlorn", "don’t care", "gloom", "gloomy", "glum", "grief", "grieving", "whatever", "guilty", "headache", "hurting", "helpless", "help me", "hide", "hiding", "hopeless", "humiliate", "humiliated", "I miss", "I missed", "I’m missing", "im missing", "missing", "miss", "ill", "illness", "illnesses", "indifferent", "inferior", "laziness", "lazy", "lethargic", "lethargy", "listless", "letdown", "let down", "lonely", "lost", "melancholy", "miss", "missing", "mistake", "mistakes", "morbid", "morose", "pitiful", "pity", "regret", "regretted", "regretful", "regrets", "reject", "rejected", "rejection", "rejects", "sad", "poor", "saddened", "saddens", "sadness", "shame", "shames", "shamed", "shameful", "shaming", "slept", "solemn", "somber", "why me", "im wrong", "stagnant", "stupid", "suffocating", "suicidal", "suicide", "sullen", "tearful", "hell", "fuck it all", "tears", "tired", "tearing", "tearing", "trauma", "traumas", "traumatic", "troubles", "unhappy", "unhappiness", "unwell", "useless", "victim", "victims", "weep", "weeping", "weeps", "woe", "woes", "worn out", "exhausted", "exhausting", "discouraging", "dark", "darkness", "worse", "shite", "shit", "fucked", "bummer", "weak", "frustrated", "frustrating", "frustrates", "weakness", "weaknesses", "funk", "wreck", "foul", "lame", "raining", "death", "die", "dying", "dead", "hole", "drop", "upset", "upsetting", "busted", "broke", "dump", "miserable", "danger", "dangers", "pain", "painful", "problem", "issue", "misfortune", "bullshit", "troubled", "troubling", "struggle", "struggling", "bind", "difficult", "difficulties", "impaired", "impairing", "despondent", "dismal", "complicated", "ache", "defective", "fat", "fatass", "ugh"],
        "neurotic"      : ["afraid", "agitate", "agitated", "agoraphobia", "agoraphobic", "AHHH", "AHHHH", "AHHHHH", "AHHHHHH", "AHHHHHHH", "AHHHHHHHH", "anxiety", "anxious", "apprehension", "apprehensions", "bonkers", "careful", "caution", "cautious", "chicken", "claustrophobia", "claustrophobic", "cold feet", "concern", "concerned", "consternation", "distress", "distressing", "disturbed", "dread", "dreads", "dreading", "fear", "fearful", "fright", "frightened", "frightens", "frightful", "horrified", "hyper", "ADD", "ADHD", "narcoleptic", "narcolepsy", "hypochondria", "hypochondriac", "hysterical", "escape", "escapes", "escaped", "escaping", "insecure", "insecurity", "intimidated", "jitters", "jittery", "jumpy", "misgiving", "misgivings", "nerves", "nervous", "neuroses", "nerveracking", "nerve racking", "neurotic", "nightmare", "nightmares", "oh no", "oh noo", "oh nooo", "oh noooo", "panic", "panicked", "panicky", "panics", "phobia", "phobic", "scared", "scares", "scary", "shitless", "shocked", "sick", "sickly", "spooked", "stress", "stressed", "real", "reality", "realistic", "stressful", "suspicious", "terrified", "terrifying", "troubling", "uh oh", "ulcer", "ulcer", "uneasy", "upset", "upsetting", "wary", "drug", "drugs", "worried", "worries", "exclusive", "worrisome", "worry", "worrying", "freaked", "freak out", "freaked out", "freaking", "angst", "needs", "need", "needy", "cling", "clingy", "clinging", "OCD", "obsess", "obsession", "obsessing", "obsessed", "avoid", "avoiding", "avoided", "avert", "averted", "unstable", "unstabling", "tense", "tension", "unbalanced", "unbalance", "sensitive", "sensitivity", "high-strung", "strung-out", "rely", "hysteria", "moody", "envy", "envious", "jealous", "jealousy", "guilt", "guilty", "self-conscious", "shy", "bipolar", "crazy", "crazed", "mental", "nightmare", "nightmarish", "compulsive", "nightmares", "nuts", "intervention", "narcissist", "narcissistic", "psycho", "paranoid", "depending", "cope", "coping", "medicate", "therapy", "insane", "fault", "denial", "blame", "nervous breakdown", "meltdown", "hide", "hiding", "blaming", "nag", "nagging", "mine", "myself", "self", "yikes", "shocking", "alarming", "alarm", "daunting", "disturbing", "disturb", "horrifying", "intimidating", "perplexed", "perplexing", "rattled", "startled", "stunned", "stunning", "terror", "upsetting", "overwhelm", "overwhelmingly", "overwhelmed", "frazzled", "doubt", "doubtful", "fidget", "uptight", "xanax", "suspect", "pattern", "have to", "lose my shit", "wish", "fishy", "shaky", "flustered", "fussy", "hesitant", "basket case", "high strung", "wired", "embarrassed", "off the rail", "embarrassing", "confused", "confusing", "frightening", "chilling", "weird", "weirdo", "weirdest", "strange", "strangest", "stranger", "strangely", "shady", "slammed", "selfie", "scream", "shakes", "awful", "annoying", "feel", "feeling", "omg", "buy", "vain", "spy", "yuck", "dear", "dear internet", "distraught", "manic", "maniac", "aberrant", "hysteric", "abnormal", "disoriented", "disordered", "erratic", "inhibited", "overwrought", "uptight", "WTF"]
    },
    wordsMeta : {
        "volatile" : {
            "suggestion"    : "Approach with Extreme Caution",
            "description"   : "You display unstable temperament and threaten to react with violence when provoked."
        },
        "deviant" : {
            "suggestion"    : "Consider Blackmail or Character Assassination",
            "description"   : "You display questionable moral judgment and proclivity for engaging in addictive behaviors."
        },
        "submissive" : {
            "suggestion"    : "Overpower by Coercion",
            "description"   : "You are a conformist and demonstrate compliance. You will be governable if pressured."
        },
        "depressive" : {
            "suggestion"    : "Exploit Weakened Emotional State",
            "description"   : "You display a bleak outlook that can be manipulated for future gain."
        },
        "neurotic" : {
            "suggestion"    : "Heightened Level of Anxiety",
            "description"   : "You exhibit extreme levels of self-absorption and insecurity and can be easily threatened."
        }
    },
    worth : {
        primeValue : {
            title       : "Prime Target",
            subtitle    : "Your financial status places you among the highest levels of wealth. Your assets will be targeted for attack."
        },
        highValue : {
            title       : "High Value Target",
            subtitle    : "You have a high probability of multiple financial accounts and access to cash and material possesions."
        },
        lowValue : {
            title       : "Low Value Target",
            subtitle    : "You are not a viable financial target."
        },
        unknown : {
            occupation : "undetermined"
        }
    }
};