const flashcards = [
  {
      question: "What does 'serendipity' mean?",
      choices: ["Bad luck", "Unexpected good fortune", "Fear", "Sadness"],
      answer: 1
  },
  {
      question: "What does 'ephemeral' mean?",
      choices: ["Eternal", "Temporary", "Painful", "Confusing"],
      answer: 1
  },
  {
      question: "What does 'ambiguous' mean?",
      choices: ["Clear", "Open to multiple interpretations", "Loud", "Specific"],
      answer: 1
  },
  {
      question: "What does 'eloquent' mean?",
      choices: ["Unclear", "Well-spoken", "Silent", "Rude"],
      answer: 1
  },
  {
      question: "What does 'benevolent' mean?",
      choices: ["Evil", "Kind and generous", "Harsh", "Indifferent"],
      answer: 1
  },
  {
      question: "What does 'ubiquitous' mean?",
      choices: ["Rare", "Common", "Unique", "Expensive"],
      answer: 1
  },
  {
      question: "What does 'circumspect' mean?",
      choices: ["Cautious", "Careless", "Aggressive", "Quick"],
      answer: 0
  },
  {
      question: "What does 'nebulous' mean?",
      choices: ["Clear", "Vague", "Strong", "Bright"],
      answer: 1
  },
  {
      question: "What does 'paradox' mean?",
      choices: ["Contradiction", "Agreement", "Peace", "War"],
      answer: 0
  },
  {
      question: "What does 'gregarious' mean?",
      choices: ["Shy", "Sociable", "Rude", "Lonely"],
      answer: 1
  },
  {
      question: "What does 'fortuitous' mean?",
      choices: ["Planned", "Lucky", "Unlucky", "Predictable"],
      answer: 1
  },
  {
      question: "What does 'indignant' mean?",
      choices: ["Calm", "Angry", "Happy", "Indifferent"],
      answer: 1
  },
  {
      question: "What does 'meticulous' mean?",
      choices: ["Careless", "Detailed", "Quick", "Lazy"],
      answer: 1
  },
  {
      question: "What does 'candid' mean?",
      choices: ["Secretive", "Honest", "Quiet", "Loud"],
      answer: 1
  },
  {
      question: "What does 'zealous' mean?",
      choices: ["Indifferent", "Passionate", "Lazy", "Calm"],
      answer: 1
  },
  {
      question: "What does 'recalcitrant' mean?",
      choices: ["Obedient", "Stubborn", "Flexible", "Friendly"],
      answer: 1
  },
  {
      question: "What does 'venerable' mean?",
      choices: ["Young", "Old and respected", "Rich", "Poor"],
      answer: 1
  },
  {
      question: "What does 'lucid' mean?",
      choices: ["Confusing", "Clear", "Dark", "Dim"],
      answer: 1
  },
  {
      question: "What does 'placate' mean?",
      choices: ["Provoke", "Soothe", "Annoy", "Ignore"],
      answer: 1
  },
  {
      question: "What does 'prodigal' mean?",
      choices: ["Thrifty", "Wasteful", "Careful", "Generous"],
      answer: 1
  },
  {
      question: "What does 'cryptic' mean?",
      choices: ["Clear", "Mysterious", "Loud", "Harsh"],
      answer: 1
  },
  {
      question: "What does 'altruistic' mean?",
      choices: ["Selfish", "Generous", "Lazy", "Indifferent"],
      answer: 1
  },
  {
      question: "What does 'pragmatic' mean?",
      choices: ["Idealistic", "Realistic", "Dreamy", "Lazy"],
      answer: 1
  },
  {
      question: "What does 'ambivalent' mean?",
      choices: ["Certain", "Uncertain", "Happy", "Sad"],
      answer: 1
  },
  {
      question: "What does 'obstinate' mean?",
      choices: ["Flexible", "Stubborn", "Friendly", "Careful"],
      answer: 1
  },
  {
      question: "What does 'mitigate' mean?",
      choices: ["Worsen", "Improve", "Lighten", "Darken"],
      answer: 1
  },
  {
      question: "What does 'austere' mean?",
      choices: ["Luxurious", "Severe", "Bright", "Colorful"],
      answer: 1
  },
  {
      question: "What does 'debilitate' mean?",
      choices: ["Strengthen", "Weaken", "Heal", "Ignore"],
      answer: 1
  },
  {
      question: "What does 'elated' mean?",
      choices: ["Sad", "Joyful", "Angry", "Calm"],
      answer: 1
  },
  {
      question: "What does 'innate' mean?",
      choices: ["Acquired", "Inborn", "Learned", "External"],
      answer: 1
  },
  {
      question: "What does 'quintessential' mean?",
      choices: ["Ordinary", "Typical", "Unique", "Irregular"],
      answer: 1
  },
  {
      question: "What does 'apathy' mean?",
      choices: ["Interest", "Indifference", "Excitement", "Curiosity"],
      answer: 1
  },
  {
      question: "What does 'emulate' mean?",
      choices: ["Neglect", "Imitate", "Ignore", "Disregard"],
      answer: 1
  },
  {
      question: "What does 'cumbersome' mean?",
      choices: ["Light", "Clumsy", "Easy", "Simple"],
      answer: 1
  },
  {
      question: "What does 'cynical' mean?",
      choices: ["Trusting", "Distrustful", "Hopeful", "Idealistic"],
      answer: 1
  },
  {
      question: "What does 'pristine' mean?",
      choices: ["Dirty", "Unspoiled", "Old", "Ruined"],
      answer: 1
  },
  {
      question: "What does 'reticent' mean?",
      choices: ["Talkative", "Reserved", "Outgoing", "Friendly"],
      answer: 1
  },
  {
      question: "What does 'sequester' mean?",
      choices: ["Release", "Isolate", "Join", "Include"],
      answer: 1
  },
  {
      question: "What does 'spurious' mean?",
      choices: ["Genuine", "False", "Real", "Authentic"],
      answer: 1
  },
  {
      question: "What does 'ubiquitous' mean?",
      choices: ["Rare", "Common", "Unique", "Expensive"],
      answer: 1
  },
  {
      question: "What does 'pernicious' mean?",
      choices: ["Harmless", "Harmful", "Beneficial", "Helpful"],
      answer: 1
  },
  {
      question: "What does 'zephyr' mean?",
      choices: ["Storm", "Gentle breeze", "Wind", "Rain"],
      answer: 1
  },
  {
      question: "What does 'veracity' mean?",
      choices: ["Lie", "Truthfulness", "Deception", "Falsity"],
      answer: 1
  },
  {
      question: "What does 'vilify' mean?",
      choices: ["Praise", "Slander", "Compliment", "Glorify"],
      answer: 1
  },
  {
      question: "What does 'taciturn' mean?",
      choices: ["Talkative", "Silent", "Noisy", "Loud"],
      answer: 1
  },
  {
      question: "What does 'stolid' mean?",
      choices: ["Emotional", "Unemotional", "Sensitive", "Reactive"],
      answer: 1
  },
  {
      question: "What does 'sagacious' mean?",
      choices: ["Foolish", "Wise", "Ignorant", "Stupid"],
      answer: 1
  },
  {
      question: "What does 'ruminate' mean?",
      choices: ["Forget", "Contemplate", "Ignore", "Disregard"],
      answer: 1
  },
  {
      question: "What does 'resilient' mean?",
      choices: ["Weak", "Strong", "Fragile", "Brittle"],
      answer: 1
  },
  {
      question: "What does 'quell' mean?",
      choices: ["Incite", "Suppress", "Arouse", "Stimulate"],
      answer: 1
  },
  {
      question: "What does 'proclivity' mean?",
      choices: ["Aversion", "Tendency", "Dislike", "Avoidance"],
      answer: 1
  },
  {
      question: "What does 'perfidious' mean?",
      choices: ["Loyal", "Treacherous", "Faithful", "Trustworthy"],
      answer: 1
  },
  {
      question: "What does 'obfuscate' mean?",
      choices: ["Clarify", "Confuse", "Explain", "Elucidate"],
      answer: 1
  },
  {
      question: "What does 'munificent' mean?",
      choices: ["Stingy", "Generous", "Selfish", "Greedy"],
      answer: 1
  },
  {
      question: "What does 'laconic' mean?",
      choices: ["Wordy", "Brief", "Verbose", "Talkative"],
      answer: 1
  },
  {
      question: "What does 'kismet' mean?",
      choices: ["Chance", "Fate", "Luck", "Coincidence"],
      answer: 1
  },
  {
      question: "What does 'jubilant' mean?",
      choices: ["Sad", "Joyful", "Angry", "Calm"],
      answer: 1
  },
  {
      question: "What does 'intrepid' mean?",
      choices: ["Cowardly", "Fearless", "Timid", "Scared"],
      answer: 1
  },
  {
      question: "What does 'inundate' mean?",
      choices: ["Drain", "Flood", "Dry", "Empty"],
      answer: 1
  },
  {
      question: "What does 'hapless' mean?",
      choices: ["Lucky", "Unfortunate", "Fortunate", "Happy"],
      answer: 1
  },
  {
      question: "What does 'grandiloquent' mean?",
      choices: ["Simple", "Pompous", "Humble", "Modest"],
      answer: 1
  },
  {
      question: "What does 'fractious' mean?",
      choices: ["Agreeable", "Quarrelsome", "Calm", "Peaceful"],
      answer: 1
  },
  {
      question: "What does 'ethereal' mean?",
      choices: ["Earthly", "Heavenly", "Material", "Tangible"],
      answer: 1
  },
  {
      question: "What does 'esoteric' mean?",
      choices: ["Common", "Uncommon", "Popular", "Mainstream"],
      answer: 1
  },
  {
      question: "What does 'dormant' mean?",
      choices: ["Active", "Inactive", "Lively", "Energetic"],
      answer: 1
  },
  {
      question: "What does 'deleterious' mean?",
      choices: ["Harmless", "Harmful", "Beneficial", "Helpful"],
      answer: 1
  },
  {
      question: "What does 'cogent' mean?",
      choices: ["Weak", "Convincing", "Unpersuasive", "Ineffective"],
      answer: 1
  },
  {
      question: "What does 'boisterous' mean?",
      choices: ["Quiet", "Noisy", "Calm", "Peaceful"],
      answer: 1
  },
  {
      question: "What does 'avuncular' mean?",
      choices: ["Uncle-like", "Father-like", "Mother-like", "Child-like"],
      answer: 0
  },
  {
      question: "What does 'apocryphal' mean?",
      choices: ["Authentic", "False", "Genuine", "Real"],
      answer: 1
  },
  {
      question: "What does 'ameliorate' mean?",
      choices: ["Worsen", "Improve", "Deteriorate", "Degrade"],
      answer: 1
  },
  {
      question: "What does 'adroit' mean?",
      choices: ["Clumsy", "Skillful", "Awkward", "Unskilled"],
      answer: 1
  },
  {
      question: "What does 'abstruse' mean?",
      choices: ["Clear", "Obscure", "Simple", "Plain"],
      answer: 1
  },
  {
      question: "What does 'trite' mean?",
      choices: ["Original", "Overused", "Unique", "Novel"],
      answer: 1
  },
  {
      question: "What does 'surreptitious' mean?",
      choices: ["Open", "Secret", "Transparent", "Public"],
      answer: 1
  },
  {
      question: "What does 'sanguine' mean?",
      choices: ["Pessimistic", "Optimistic", "Gloomy", "Sad"],
      answer: 1
  },
  {
      question: "What does 'recalcitrant' mean?",
      choices: ["Obedient", "Stubborn", "Flexible", "Friendly"],
      answer: 1
  },
  {
      question: "What does 'pulchritudinous' mean?",
      choices: ["Ugly", "Beautiful", "Plain", "Average"],
      answer: 1
  },
  {
      question: "What does 'nefarious' mean?",
      choices: ["Good", "Evil", "Kind", "Generous"],
      answer: 1
  },
  {
      question: "What does 'mellifluous' mean?",
      choices: ["Harsh", "Sweet-sounding", "Rough", "Grating"],
      answer: 1
  },
  {
      question: "What does 'lachrymose' mean?",
      choices: ["Happy", "Tearful", "Joyful", "Cheerful"],
      answer: 1
  },
  {
      question: "What does 'ineffable' mean?",
      choices: ["Expressible", "Inexpressible", "Speakable", "Describable"],
      answer: 1
  },
  {
      question: "What does 'histrionic' mean?",
      choices: ["Subdued", "Theatrical", "Calm", "Undramatic"],
      answer: 1
  },
  {
      question: "What does 'gregarious' mean?",
      choices: ["Shy", "Sociable", "Rude", "Lonely"],
      answer: 1
  },
  {
      question: "What does 'florid' mean?",
      choices: ["Pale", "Red-faced", "Ashen", "Pallid"],
      answer: 1
  },
  {
      question: "What does 'evanescent' mean?",
      choices: ["Permanent", "Short-lived", "Lasting", "Enduring"],
      answer: 1
  },
  {
      question: "What does 'diaphanous' mean?",
      choices: ["Opaque", "Transparent", "Thick", "Solid"],
      answer: 1
  },
  {
      question: "What does 'conundrum' mean?",
      choices: ["Solution", "Puzzle", "Answer", "Resolution"],
      answer: 1
  },
  {
      question: "What does 'capricious' mean?",
      choices: ["Stable", "Unpredictable", "Consistent", "Steady"],
      answer: 1
  },
  {
      question: "What does 'bucolic' mean?",
      choices: ["Urban", "Rural", "Metropolitan", "City-like"],
      answer: 1
  },
  {
      question: "What does 'affable' mean?",
      choices: ["Unfriendly", "Friendly", "Rude", "Hostile"],
      answer: 1
  },
  {
      question: "What does 'adamant' mean?",
      choices: ["Flexible", "Unyielding", "Pliable", "Compliant"],
      answer: 1
  },
  {
      question: "What does 'acerbic' mean?",
      choices: ["Sweet", "Bitter", "Kind", "Gentle"],
      answer: 1
  },
  {
      question: "What does 'abstruse' mean?",
      choices: ["Clear", "Obscure", "Simple", "Plain"],
      answer: 1
  },
  {
      question: "What does 'apathetic' mean?",
      choices: ["Interested", "Indifferent", "Excited", "Curious"],
      answer: 1
  },
  {
      question: "What does 'bemused' mean?",
      choices: ["Alert", "Confused", "Aware", "Clear-headed"],
      answer: 1
  },
  {
      question: "What does 'cogent' mean?",
      choices: ["Weak", "Convincing", "Unpersuasive", "Ineffective"],
      answer: 1
  },
  {
      question: "What does 'deference' mean?",
      choices: ["Disrespect", "Respect", "Rudeness", "Impudence"],
      answer: 1
  },
  {
      question: "What does 'ebullient' mean?",
      choices: ["Depressed", "Enthusiastic", "Sad", "Unhappy"],
      answer: 1
  },
  {
      question: "What does 'fallacious' mean?",
      choices: ["True", "False", "Accurate", "Correct"],
      answer: 1
  },
  {
      question: "What does 'guile' mean?",
      choices: ["Honesty", "Deceit", "Sincerity", "Frankness"],
      answer: 1
  },
  {
      question: "What does 'hackneyed' mean?",
      choices: ["Original", "Overused", "Unique", "Novel"],
      answer: 1
  },
  {
      question: "What does 'impetuous' mean?",
      choices: ["Cautious", "Impulsive", "Considerate", "Deliberate"],
      answer: 1
  },
  {
      question: "What does 'jocular' mean?",
      choices: ["Serious", "Humorous", "Somber", "Grave"],
      answer: 1
  },
  {
      question: "What does 'laconic' mean?",
      choices: ["Talkative", "Brief", "Verbose", "Wordy"],
      answer: 1
  },
  {
      question: "What does 'maverick' mean?",
      choices: ["Conformist", "Nonconformist", "Follower", "Adherent"],
      answer: 1
  },
  {
      question: "What does 'nonchalant' mean?",
      choices: ["Anxious", "Calm", "Excited", "Worried"],
      answer: 1
  },
  {
      question: "What does 'ostracize' mean?",
      choices: ["Include", "Exclude", "Welcome", "Accept"],
      answer: 1
  },
  {
      question: "What does 'plethora' mean?",
      choices: ["Scarcity", "Abundance", "Lack", "Shortage"],
      answer: 1
  },
  {
      question: "What does 'quandary' mean?",
      choices: ["Certainty", "Doubt", "Resolution", "Decision"],
      answer: 1
  },
  {
      question: "What does 'rancorous' mean?",
      choices: ["Friendly", "Bitter", "Kind", "Pleasant"],
      answer: 1
  },
  {
      question: "What does 'serendipity' mean?",
      choices: ["Bad luck", "Good luck", "Misfortune", "Unhappiness"],
      answer: 1
  },
  {
      question: "What does 'tenacious' mean?",
      choices: ["Weak", "Persistent", "Lazy", "Inconsistent"],
      answer: 1
  },
  {
      question: "What does 'ubiquitous' mean?",
      choices: ["Rare", "Common", "Unique", "Unusual"],
      answer: 1
  },
  {
      question: "What does 'venerable' mean?",
      choices: ["Young", "Respected", "New", "Modern"],
      answer: 1
  },
  {
      question: "What does 'wary' mean?",
      choices: ["Trusting", "Cautious", "Reckless", "Careless"],
      answer: 1
  }
];

let currentCardIndex = 0;

        function showFlashcard() {
            const flashcard = document.getElementById('flashcard');
            const choices = document.querySelectorAll('.choice');
            const result = document.getElementById('result');

            const randomIndex = Math.floor(Math.random() * flashcards.length);
            const shuffledChoices = [...flashcards[randomIndex].choices];
            const correctAnswer = flashcards[randomIndex].answer;
            shuffleArray(shuffledChoices);

            flashcard.textContent = flashcards[randomIndex].question;
            choices.forEach((choice, i) => {
                choice.textContent = shuffledChoices[i];
                choice.className = 'choice';
                if (shuffledChoices[i] === flashcards[randomIndex].choices[correctAnswer]) {
                    choice.dataset.correct = true;
                } else {
                    delete choice.dataset.correct;
                }
            });
            result.textContent = '';
            currentCardIndex = randomIndex;
        }

        function checkAnswer(selectedIndex) {
            const result = document.getElementById('result');
            const choices = document.querySelectorAll('.choice');

            if (choices[selectedIndex].dataset.correct) {
                result.textContent = 'Correct!';
                result.style.color = 'green';
                choices[selectedIndex].classList.add('correct');
            } else {
                result.textContent = 'Incorrect!';
                result.style.color = 'red';
                choices[selectedIndex].classList.add('incorrect');
            }

            setTimeout(() => {
                currentCardIndex = (currentCardIndex + 1) % flashcards.length;
                showFlashcard(currentCardIndex);
            }, 2000);
        }

        function shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
        }

        document.addEventListener('DOMContentLoaded', () => {
            showFlashcard();
        });