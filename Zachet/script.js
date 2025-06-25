document.addEventListener('DOMContentLoaded', () => {
            // Теоретические вопросы
            const theoryQuestions = [
                "Что такое класс?",
                "Что такое объект класса?",
                "Что понимается под инкапсуляцией?",
                "Что такое наследование?",
                "В чём суть полиморфизма?",
                "Что такое абстракция в контексте ООП?",
                "Какова роль интерфейса?",
                "Чем отличается интерфейс от абстрактного класса?",
                "Что такое конструктор и деструктор?",
                "Для чего нужны свойства (properties)?",
                "Что такое метод – и чем он отличается от функции?",
                "Что такое перегрузка методов (overloading)?",
                "Что такое переопределение методов (overriding)?",
                "Что такое виртуальный метод (virtual) и ключевое слово sealed?",
                "Какие модификаторы доступа существуют и для чего они нужны (public, private, protected, internal)?",
                "Что такое статические (static) поля и методы?",
                "Что понимается под «атрибутами» (fields) класса?",
                "В чём разница между агрегированием и композицией?",
                "Что такое ассоциация и зависимость (dependency) между классами?",
                "Как соотносятся слабая и жёсткая связанность (coupling)?",
                "Что такое высокий уровень сцепления (cohesion) класса?",
                "Какие принципы SOLID вы знаете?",
                "Что такое паттерн «Фабрика» (Factory)?"
            ];
            
            // Практические задания
            const practiceTasks = [
                "Реализовать с общим виртуальным методом, демонстрирующим полиморфизм",
                "Создать (репозиторий) с CRUD-операциями (Create, Read, Update, Delete)",
                "Написать (Factory Method) для создания объектов заданных типов по строковому ключу",
                "Разработать (Singleton) для управления общим ресурсом",
                "Реализовать (Strategy Pattern): класс-контекст и несколько алгоритмов, меняемых во время выполнения",
                "Создать (Chain of Responsibility) для последовательной обработки запросов",
                "Смоделировать (Observer): издатель (publisher) и несколько подписчиков (subscribers)",
                "Написать (Command Pattern) с отменой (undo) и выполнением (execute)",
                "Реализовать (Decorator Pattern) для расширения поведения объектов без изменения класса",
                "Создать (Adapter Pattern), позволяющий работать с несовместимыми интерфейсами",
                "Разработать (Facade Pattern) для упрощённого доступа к набору подсистем",
                "Реализовать (Builder Pattern) для поэтапного создания сложного объекта",
                "Написать (Prototype Pattern) с клонированием объектов",
                "Создать (Bridge Pattern), разделяющий абстракцию и реализацию",
                "Реализовать (Interpreter Pattern) для простого доменного языка",
                "Разработать (Composite Pattern) для древовидной структуры объектов",
                "Написать (Flyweight Pattern) для оптимизации разделяемого состояния",
                "Реализовать (Memento Pattern) для сохранения и восстановления состояния объекта",
                "Создать с возможностью отката (rollback) изменений",
                "Разработать (Object Pool) для повторного использования экземпляров",
                "Написать с ограничением размера и стратегией вытеснения (LRU)",
                "Реализовать (Event Aggregator) для рассылки сообщений между компонентами",
                "Создать через рефлексию (динамическая загрузка классов из сборок)",
                "Реализовать объектов в JSON/XML и обратно",
                "Разработать через интерфейс, позволяющий менять провайдер (консоль, файл, БД)"
            ];
            
            // Предметные области
            const domains = [
                "Система управления библиотекой",
                "Интернет-магазин",
                "Учёт студентов и курсов",
                "Бронирование авиабилетов",
                "Управление автопарком",
                "Складской учёт",
                "Управление персоналом (HR)",
                "Социальная сеть",
                "Чат-бот для поддержки",
                "Медицинская карта пациента",
                "Умный дом",
                "Геолокационные сервисы",
                "Мультимедийный плеер",
                "Калькулятор налогов",
                "Трекер задач и проектов",
                "CRM-система для продаж",
                "Платформа онлайн-обучения",
                "Система мониторинга погоды",
                "Финансовый портфель пользователя",
                "2D-игровой движок",
                "Расписание кинотеатра",
                "Трекер привычек",
                "Система бронирования столиков в ресторане",
                "API для конвертации валют",
                "Сервис онлайн-голосования"
            ];
            
            // Элементы DOM
            const theoryItemsEl = document.getElementById('theoryItems');
            const practiceItemsEl = document.getElementById('practiceItems');
            const domainItemsEl = document.getElementById('domainItems');
            const spinBtn = document.getElementById('spinBtn');
            const resetBtn = document.getElementById('resetBtn');
            const resultContainer = document.getElementById('resultContainer');
            const theoryResult = document.getElementById('theoryResult');
            const practiceResult = document.getElementById('practiceResult');
            const domainResult = document.getElementById('domainResult');
            const winMessage = document.getElementById('winMessage');
            const resultHeader = document.getElementById('resultHeader');
            const attemptCounter = document.getElementById('attemptCounter');
            
            // Состояние игры
            let attempts = 0;
            let isSpinning = false;
            let automats = 0;
            
            function initSlots() {
                populateSlot(theoryItemsEl, theoryQuestions, 4);
                populateSlot(practiceItemsEl, practiceTasks, 5);
                populateSlot(domainItemsEl, domains, 6);
            }
            
            // Заполнение слота элементами
            function populateSlot(container, items, automatsCount) {
                container.innerHTML = '';
                
                // Добавляем элементы
                items.forEach(item => {
                    const itemEl = document.createElement('div');
                    itemEl.className = 'slot-item';
                    itemEl.textContent = item;
                    container.appendChild(itemEl);
                });
                
                // Добавляем "Автоматы"
                for (let i = 0; i < automatsCount; i++) {
                    const automatEl = document.createElement('div');
                    automatEl.className = 'slot-item automat';
                    automatEl.textContent = 'Автомат';
                    container.appendChild(automatEl);
                }
                
                // Клонируем элементы для бесконечной прокрутки
                const clone = container.cloneNode(true);
                container.parentNode.appendChild(clone);
            }
            
            // Прокрутка слота
            function spinSlot(container, duration) {
                return new Promise(resolve => {
                    const items = container.querySelector('.slot-items');
                    const clone = items.nextSibling;
                    
                    // Случайное смещение
                    const itemHeight = 100;
                    const itemCount = theoryQuestions.length + 4;
                    const randomOffset = Math.floor(Math.random() * itemCount) * itemHeight;
                    
                    // Анимация прокрутки
                    items.style.transition = `top ${duration}s cubic-bezier(0.2, 0.8, 0.2, 1)`;
                    items.style.top = `-${randomOffset}px`;
                    
                    // Анимация клона
                    clone.style.transition = `top ${duration}s cubic-bezier(0.2, 0.8, 0.2, 1)`;
                    clone.style.top = `-${randomOffset + itemCount * itemHeight}px`;
                    
                    setTimeout(() => {
                        // Определяем выбранный элемент
                        const selectedIndex = Math.floor(randomOffset / itemHeight) % itemCount;
                        const selectedItem = items.children[selectedIndex];
                        
                        resolve(selectedItem.textContent);
                    }, duration * 1000);
                });
            }
            
            // Проверка результата
             function checkResults(results) {
                theoryResult.textContent = '';
                practiceResult.textContent = '';
                domainResult.textContent = '';
                winMessage.textContent = '';

                // Сначала скрываем предыдущие результаты
                resultContainer.classList.add('hidden-result');
                winMessage.style.display = 'none';
                
                setTimeout(() => {
                    attempts++;
                    attemptCounter.textContent = `Попыток: ${attempts}`;
                    
                    // Обновляем содержимое
                    theoryResult.textContent = results[0];
                    practiceResult.textContent = results[1];
                    domainResult.textContent = results[2];
                    
                    // Показываем контейнер с новыми результатами
                    resultContainer.classList.remove('hidden-result');
                    
                    // Проверяем, все ли "Автоматы"
                    if (results.every(item => item === 'Автомат')) {
                        winMessage.textContent = 'АВТОМАТ! ПОЗДРАВЛЯЕМ!';
                        winMessage.style.display = 'block';
                        resultHeader.textContent = 'ВЫ ВЫИГРАЛИ АВТОМАТ!';
                        resultContainer.classList.add('automat-win');
                    } 
                    // Проверяем, есть ли хотя бы один "Автомат"
                    else if (results.some(item => item === 'Автомат')) {
                        winMessage.textContent = 'ЕСТЬ АВТОМАТ! ПЕРЕЗАПУСКАЕМ...';
                        winMessage.style.display = 'block';
                        resultHeader.textContent = 'ПЕРЕЗАПУСК';
                        resultContainer.classList.remove('automat-win');
                        
                        setTimeout(() => {
                            spinBtn.click();
                        }, 2000);
                    } 
                    // Нет "Автоматов"
                    else {
                        winMessage.style.display = 'none';
                        resultHeader.textContent = 'ВАША КОМБИНАЦИЯ ЗАДАНИЙ';
                        resultContainer.classList.remove('automat-win');
                    }
                }, 500); // Небольшая задержка перед показом новых результатов
            }
            
            // Обработчик кнопки "Крутить"
            spinBtn.addEventListener('click', async () => {
                if (isSpinning) return;
                
                isSpinning = true;
                spinBtn.disabled = true;
                resultContainer.style.display = 'none';
                
                // Разная длительность для каждого слота
                const theoryPromise = spinSlot(document.querySelector('.slot-column:nth-child(1) .slot-window'), 3);
                const practicePromise = spinSlot(document.querySelector('.slot-column:nth-child(2) .slot-window'), 3.5);
                const domainPromise = spinSlot(document.querySelector('.slot-column:nth-child(3) .slot-window'), 4);
                
                // Ожидаем завершения всех прокруток
                const results = await Promise.all([theoryPromise, practicePromise, domainPromise]);
                
                // Проверяем результаты
                checkResults(results);
                
                isSpinning = false;
                spinBtn.disabled = false;
            });
            
            // Обработчик кнопки "Сбросить"
            resetBtn.addEventListener('click', () => {
                attempts = 0;
                attemptCounter.textContent = `Попыток: ${attempts}`;
                resultContainer.style.display = 'none';
                winMessage.style.display = 'none';
                resultContainer.classList.remove('automat-win');
            });
            
            initSlots();
        });
