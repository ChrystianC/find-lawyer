Dokumentacja Techniczna Aplikacji "Lawyer"

Spis treści

Wprowadzenie
Idea działania projektu
Implementacja aplikacji


Wprowadzenie
Dokument przedstawia dokumentację techniczną aplikacji internetowej “Lawyler”. Aplikacja pozwala klientom umawianie się na spotkania prawnicze. Trafianie do prawnika, który najlepiej wpasowuje się w potrzeby klienta, umożliwia także klientom publikowanie opinii o kancelariach prawnych. A także kancelariom prawnym ułatwia planowanie konsultacji prawnych, Łatwiejsze trafienie do klientów, poprzez wiarygodne komentarze oraz opinie pozostawione przez klientów, które pomogą w tworzeniu reputacji firmy co pozwoli kancelarii na dotarcie do większej ilości klientów.
Idea działania projektu
Aplikacja posiada różne funkcjonalności, które można podzielić ze względu na dwie role Klient oraz Kancelarie prawne. Klientów reprezentuje grupa osób poszukująca pomocy w nękającej dla nich kwestii prawnych. Kancelarii prawnych które chcą trafić do większej ilości klientów oraz ułatwieniu kontaktu z klientami poprzez łatwy dostęp do spotkań
Dla klientów:
Logowanie użytkownika
Klient może umawiać się na wizyta za pomocą przycisku “Login user” w górnym menu nawigacyjnym strony. Zostaje on przekierowany do panelu logowania (zrzut ekranu), gdzie jest poproszony o podanie swojego adresu e-mail oraz hasła do pól przedstawionych w załączniku. Formularz jest wyposażony w odpowiedni sposób walidacji. Używane jest to jako środek bezpieczeństwa, który ma zapobiegać nieautoryzowanym użytkownikom rejestracji na wizyty, co powodowało by nie ład w wizytach kancelarii. Kiedy użytkownik wypełni pola danymi i kliknie przycisk ”Sing in”. Wcześniejsze dane są sprawdzane pod względem wypełnionych pól oraz istnienia takich samych danych w bazie. Następuje logowanie do serwisu, a serwer sprawdza czy dane są poprawne i zwraca do aplikacji token.

Wyszukiwarka
Podstawową funkcją aplikacji jest wyszukiwarka kancelarii prawnych. W polach tekstowych zawartych w środkowej sekcji strony użytkownik może wyszukać kancelarię po jej specjalizacji którą kancelaria się zajmuję oraz jej lokalizacji wskazującej w którym miejscu kancelaria prowadzi biznes (zrzut ekranu)

 Podgląd wizyt - moje konto
System ‘Lawyler’ daje możliwość użytkownikom monitorowania przyszłych wizyt, które użytkownik ma przypisane na swoim koncie. Po kliknięciu przycisku ze  ikoną 

(użytkownik musi być wcześniej zalogowany] jesteśmy przekierowani do strony z wizytami przynależnymi do zalogowanego użytkownika. Aplikacja pokazuje datę wizyty oraz w jakiej sprawie kancelaria ma udzielić porady.

Rezerwacja wizyty
Użytkownik po wcześniejszym zalogowaniu ma możliwość sprawdzenia wizyt udostępnionych uprzednio wizyt przez kancelarię, które najbardziej wpasowują się w potrzeby użytkownika ze względu na bliską lokalizację lub profesję w której kancelaria się specjalizuje. Serwis wyświetla prosty kalendarz, która zawiera datę oraz typ wizyty (zrzut ekranu).

Dodanie recenzji  oraz komentarzy
Gdy użytkownik znajdzie odpowiednią dla niego kancelarię, która najbardziej spełnia jego wymagania. Może dodać gwiazdki recenzji poprzez najechanie myszką oraz kliknięcie odpowiedniego przycisku znajdującego się pod nazwą kancelarii. Podczas tego procesu wysyłane jest zapytanie do serwera Prisma, który sprawdza czy użytkownik nie zrecenzował już wcześniej wybranej kancelarii (zrzut ekranu).

Użytkownik ma możliwość także dodania komentarza o kancelarii, w której odbył wizytę, by udostępnić kolejnym mandatom swoje odczucia i refleksje na temat kancelarii. Przechodząc do podglądu kancelarii poprzez kliknięcie na nazwę główną kancelarii. Przewijając na koniec strony znajduje się sekcja komentarzy

Dodanie wizyty przez kancelarię
Kancelarię reprezentują grono firm, które poszukują pomocy w znalezieniu większej ilość klientów. Funkcjonalności dają możliwość zarządzania danych kancelarii oraz mają sposobność rozporządzania wizytami kancelarii.
Funkcję są dostępne po wcześniejszym zalogowaniu prawnika do serwisu. Oraz przejścia do strony umożliwiającej edycję danych. Strona edycji jest dostępna poprzez kliknięcie ikony

Strona udostępnia odpowiednie pola do edycji wypełnione w dane pobrane z serwera. Między innymi serwis daje możliwość  dodanie wizyty z określoną datą oraz godziną wybraną poprzez prosty formularz o wyglądzie kalendarza.

3. Implementacja aplikacji
Do stworzenia aplikacji zostały wykorzystane najnowsze technologie webowe, jako developer mogę zaznaczyć, że znacznie usprawniają aplikacje poprzez jest uproszczenie oraz narzędzia, które udostępniają  znacznie ułatwiają utrzymanie aplikacji, by pozostałą jak najnowsza względem rynku.
Technologie między innymi to:
Nextjs - to framework dla reacta który pozwala nam budować zaawansowane aplikacje poprzez rozszerzenie i ulepszenie aplikacji reactowej. Główną zaletą wykorzystaną w projekcie jest  react-owe server komponenty pozwalające znacznie odciążyć maszynę po stronie klienta
Prisma - do składania zapytań, zwracające Javascript-owe obiekty. Znacząco ułatwia rozumienie zapytań do bazy,które często zajmują dużo czasu, oferując czyste i otypowane API
PostgreSQL - system zarządzania bazami danych, system pomaga w integralności danych oraz ułatwi zarządzanie danymi bez względu na wielkość zbioru danych przez jego wysoką rozszerzalność
TypeScript - biblioteka rozszerzająca natywny JavaScript przez dodanie typów i funkcji. Przyspiesza development kodu przez wyłapywanie błędów i znalezienie ich przed czasochłonnym odpaleniem aplikacji.
Tailwind CSS -  framework do css dla szybkiego budowania nowoczesnych aplikacji internetowych, uszczuplając pliki css, ponieważ wszystko odbywa się w HTML
Express - to elastyczny framework dla aplikacji webowych dla node.js. Ułatwia tworzenie aplikacji i APi, oferując zestaw funkcji do obsługi routing, requests i responses. Znacząco usprawnia aplikację i wydajny serwer.
Do postawienia aplikacji po stronie dewelopera będzie nam potrzebne na narzędzia:
- visual studio code
- pgAdmin 4
- node
By móc pracować nad projektem na swojej maszynie lokalnej, potrzebujemy w terminalu zmienić folder na ten, w który chcemy przekopiować nasze repozytorium.
Do skopiowania repozytorium potrzebny na będzie link oraz komenda git clone
git clone https://github.com/ChrystianC/find-lawyer.git
Następnie już w projekcie zainstalowanie niezbędnych zależności komendą
npm install
Po udanej instalacji. Włączenie aplikacji odbywa się przez komendę
 npm run dev
Uruchamia ona aplikację w trybie developerski to znaczy, że projekt w czasie rzeczywistym sprawdza zaistniałe zmiany w plikach i automatycznie odświeża aplikacje wykrywając zmiany.
Aby w pełni używać aplikacji potrzebujemy jeszcze uruchomić serwer można to rozwiązać za pomocą s komendę
npm run start-server 
Przechodząc do linku, który komenda zwraca w terminalu łatwo możemy sprawdzić czy serwer został poprawnie uruchomiony 








