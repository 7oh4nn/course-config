jQuery(function($) {
  ///////////////////////////////////////////
  /////////// Configurator v2 ///////////////
  //// CLICK ON ELEMENTS TO SET PRIORITY ////
  ///////////////////////////////////////////

  var currentIndex = 0;
  var currentStatements = 0;
  var length = 5;
  var nextCourses = [0, 1, 2, 3, 4];
  const statements = [
      [
        {
              course: 1,
              statement: "Lorem ",
          },
          {
              course: 2,
              statement: "Ich möchte aus Mitarbeitern perfekte Teams machen, die eigenständig performen.",
          },
          {
              course: 3,
              statement: "Ich will meine Mitarbeiter besser entwickeln und Mitarbeitergespräche zielführender machen.",
          },
          {
              course: 4,
              statement: "Ich möchte meine Mitarbeiter von innen heraus motivieren und nicht immer „Motivationsschübe“ geben müssen.",
          },
          {
              course: 5,
              statement: "Ich und mein Team wollen Veränderungen besser und schneller umsetzen.",
          },
      ],
      [
        {
              course: 1,
              statement: "Am Abend frage ich mich oft, wo meine Zeit geblieben ist.",
          },
          {
              course: 2,
              statement: "Mein Team ist eher passiv und auch in Teamrunden ist eher wenig Aktivität.",
          },
          {
              course: 3,
              statement: "Ich habe das Gefühl, dass ich mich bei der Entwicklung mancher Mitarbeiter nicht weiterkomme.",
          },
          {
              course: 4,
              statement: "Mir fällt es manchmal nicht so leicht, mich selbst zu motivieren.",
          },
          {
              course: 5,
              statement: "Change-Prozesse halten uns auf und ich will meine Mitarbeiter dabei besser unterstützen.",
          },
      ],
      [
        {
              course: 1,
              statement: "Ich kann mich gut reflektieren und bin mir meiner inneren Einstellung zu meiner Aufgabe bewusst.",
          },
          {
              course: 2,
              statement: "Ich und mein Team haben unsere eigene Teamphilosophie und wir wissen, wofür wir stehen.",
          },
          {
              course: 3,
              statement: "Ich weiß, wie ich meine Mitarbeiter im Gespräch weiterentwickeln kann.",
          },
          {
              course: 4,
              statement: "Ich weiß, wie ich Mitarbeiter im positiven Sinne triggere und für nachhaltige Motivation sorge.",
          },
          {
              course: 5,
              statement: "Wir integrieren Veränderungsprozesse schnell in die Praxis und uns richten uns danach aus.",
          },
      ],
  ];
  const questions = [{
          value: 1,
          color: "#317667",
          question: "Dieser Aussage <b>stimme ich absolut</b> zu.",
          choice: "Die Aussage, der Sie absolut zustimmen."
      },
      {
          value: 5,
          color: "#226d6b",
          question: "Dieser Aussage <b>stimme ich gar nicht</b> zu.",
          choice: "Die Aussage, der Sie gar nicht zustimmen."
      },
      {
          value: 3,
          color: "#1e636c",
          question: "Bei dieser Aussage <b>bin ich mir nicht sicher</b>.",
          choice: "Die Aussage, bei der Sie sich nicht sicher sind."
      },
      {
          value: 2,
          color: "#235969",
          question: "Dieser Aussage <b>stimme ich etwas</b> zu.",
          choice: "Die Aussage, der Sie etwas zustimmen."
      },
      {
          value: 4,
          color: "#2c4e62",
          question: "Dieser Aussage <b>stimme ich eher nicht</b> zu.",
          choice: "Die Aussage, der Sie eher nicht zustimmen."
      },
  ];
  const courseContents = [{
          headline: "360 Grad Leading",
          subheadline: "Schöpfen Sie Ihre Potenziale aus!",
          text: "<p>Vielen Dank, das hat super geklappt! – Und laut KI passt dieser Abo-Kurs perfekt zu Ihren Anforderungen. Es erwarten Sie unter anderem Kurse zu folgenden Themen:</p><ul><li>Selbstreflektion, Rollen- und Selbstbild</li><li>Perfektes Zeitmanagement </li><li>Konstruktives Hinterfragen des Status Quo für Sie und Ihr Unternehmen</li><li>Zieldefinition</li><li>Fokussierte und disziplinierte Strategien für die Umsetzung</li></ul><p>Lassen Sie uns diese spannende und gewinnbringende Reise starten! Treffen Sie nun vielleicht eine der besten Entscheidungen Ihres Lebens und melden sich zu Ihrem individuellen 360 Grad Leading Kurs an! </p>",
          link: "/kurs-360-grad-leading/",
      },
      {
          headline: "Teamentwicklung",
          subheadline: "Machen Sie Ihr Team zum Erfolgsteam!",
          text: "<p>Vielen Dank, das hat super geklappt! – Und laut KI passt dieser Abo-Kurs perfekt zu Ihren Anforderungen. Es erwarten Sie unter anderem Kurse zu folgenden Themen:</p><ul><li>Da jedes Team nur so gut ist, wie sein Leader, beginnen wir mit Ihrer Selbstreflektion.</li><li>Wir beleuchten Ihr Rollen- und Selbstbild.</li><li>Wir widmen uns ausführlich Themen wie Teamführung, Teamphilosophie, Teambesprechungen und der Aktivierung von Teams.</li><li>Weg von der Team-Passivität und hinein in die aktive Beteiligung Ihrer Mitarbeiter.</li><li>Auch das Thema Kommunikation wird eine große Rolle spielen, weil wir sie von verschiedenen Seiten beleuchten werden.</li></ul><p>Lassen Sie uns diese spannende und gewinnbringende Reise starten! Treffen Sie nun vielleicht eine der besten Entscheidungen Ihres Lebens und melden sich zu Ihrem individuellen Kurs Teamentwicklung an! </p>",
          link: "/kurs-teamentwicklung/",
      },
      {
          headline: "Mitarbeitergespräche",
          subheadline: "Geben Sie Mitarbeitern alle Möglichkeiten!",
          text: "<p>Vielen Dank, das hat super geklappt! – Und laut KI passt dieser Abo-Kurs perfekt zu Ihren Anforderungen. Es erwarten Sie unter anderem Kurse zu folgenden Themen:</p><ul><li>Wie entwickeln Sie die für Ihr Unternehmen passende individuelle Struktur von Mitarbeitergesprächen?</li><li>Wie lassen sich Gespräche aufbauen und wie Ziele integrieren?</li><li>Delegieren, Ziele setzen und Korrekturen bei Abweichungen – was gilt es da zu beachten?</li><li>Zeitmanagement bei Mitarbeitergesprächen – wie viel Zeit sollten Sie für jeden Mitarbeiter einplanen?</li><li>Wie können Sie Ihren Mitarbeiter richtig fordern und fördern? </li></ul><p>Lassen Sie uns diese spannende und gewinnbringende Reise starten! Treffen Sie nun vielleicht eine der besten Entscheidungen Ihres Lebens und melden sich zu Ihrem individuellen 360 Kurs Mitarbeitergespräch an!</p>",
          link: "/kurs-mitarbeitergespraeche/",
      },
      {
          headline: "Motivation im Team",
          subheadline: "Motivieren Sie Ihr Team richtig!",
          text: "<p>Vielen Dank, das hat super geklappt! – Und laut KI passt dieser Abo-Kurs perfekt zu Ihren Anforderungen. Es erwarten Sie unter anderem Kurse zu folgenden Themen:</p><ul><li>Motivation von außen und intrinsische Motivation – beides richtig einsetzen.</li><li>Praktische Impulse, die Sie sofort zur Motivation Ihrer Mitarbeiter einsetzen können.</li><li>Motivieren Sie ihre Mitarbeiter von innen heraus.</li><li>Wie erreichen Sie, dass Ihre Mitarbeiter in den den Flow-Zustand kommen? </li><li>Motivationsziele – welche bringen schnell und effektiv weiter, welche wirken nachhaltig?</li></ul><p>Lassen Sie uns diese spannende und gewinnbringende Reise starten! Treffen Sie nun vielleicht eine der besten Entscheidungen Ihres Lebens und melden sich zu Ihrem individuellen Kurs Motivation an!</p>",
          link: "/kurs-motivation-im-team/",
      },
      {
          headline: "Veränderungen",
          subheadline: "Meistern Sie Change-Prozesse einfach und schnell!",
          text: "<p>Vielen Dank, das hat super geklappt! – Und laut KI passt dieser Abo-Kurs perfekt zu Ihren Anforderungen. Es erwarten Sie unter anderem Kurse zu folgenden Themen:</p><ul><li>Kritisches Hinterfragen des Status Quo – sollten Sie Veränderungen aktiv anstoßen?</li><li>Change und Emotionen – was muss man beachten.</li><li>Veränderung und Verhalten – an welchen Stellschrauben kann man aktiv drehen?</li><li>Veränderung und Motivation – wie geht das zusammen?</li><li>Wie gelingt die Transformation der Veränderung einfach und sicher?</li></ul><p>Lassen Sie uns diese spannende und gewinnbringende Reise starten! Treffen Sie nun vielleicht eine der besten Entscheidungen Ihres Lebens und melden sich zu Ihrem individuellen Kurs Veränderung an!</p>",
          link: "/kurs-veraenderungen/",
      },
  ];

const configCategories = ["Wohin ich will","Meine aktuellen Herausforderungen","Noch zwei Fragen kurz vor Schluss"];



  $(".start__config").click(function() {
      scrollTopConfig();
      slideEl("left", "hide", $("section.configurator__info"));
      setTimeout(function() {
          slideEl("right", "show", $("section.configurator__section"));
      }, 610);
      setSteps(currentIndex);
      setQuestions(currentIndex, "left", "right");
      setCategory();
      setStatements(currentStatements, nextCourses);
  });

  $(".statements__statement").click(function() {
      if (!$(this).hasClass("set")) {
          var el = $(this);
          var wrapper = $(el).closest(".statements__outer");
          var wrapperHeight = $(wrapper).outerHeight();

          wrapper.css("min-height", wrapperHeight);

          if (currentIndex == length - 1) {
              setDataSort(el);
              clickedStatements(el);
              setSteps(currentIndex);
              setTimeout(function() {
                  sortStatements();
                  toggleStatementChoice(true, el);
                  toggleCorrectOrder(true);
              }, 400);

          } else {

              setDataSort(el);
              clickedStatements(el);
              setSteps(currentIndex);
              setQuestions(currentIndex, "left", "right");
              setTimeout(function() {
                  toggleStatementChoice(true, el);
              }, 300);

          }

      }
  });

  $(".statements__reset").click(function() {
      var statements = $(".statements__statement");

      scrollTopConfig();
      resetStatements(true);
      setSteps(0);
      setQuestions(0, "right", "left");
      
      $(statements).each(function() {
          toggleStatementChoice(false, $(this));
      });

      toggleCorrectOrder(false);
      setStatements(currentStatements, nextCourses);
  });

  $(".statements__next").click(function() {
      var statements = $(".statements__statement");
      var delay = 400;
      nextCourses = [];
      currentStatements++;
      currentIndex = 0;

      scrollTopConfig();

      statements.each(function() {
          var statement = $(this);

          if (currentStatements === 1) {
              var statementSort = $(statement).attr("data-sort");

              if (statementSort > 2) {
                  var nextCourse = $(statement).attr("data-course");
                  nextCourses.push(nextCourse);

              }
          } else if (currentStatements === 2) {
              var statementSort = $(statement).attr("data-sort");

              if (statementSort < 5) {
                  var nextCourse = $(statement).attr("data-course");
                  nextCourses.push(nextCourse);

              }
          } else if (currentStatements === 3) {
              var statementSort = $(statement).attr("data-sort");

              if (statementSort == 5) {
                  var nextCourse = $(statement).attr("data-course");
                  nextCourses.push(nextCourse);

              }
          }

          toggleLoadingScreen(delay, statements.length);

          setTimeout(function() {
              slideEl("left", "hide", statement);
              setSteps(currentIndex);
              var slices;
              if (currentStatements == 1) {
                  slices = 3;
              } else if (currentStatements == 2) {
                  slices = 2;
              }
              configStatementNumber(slices);
              configStepNumber(slices);
          }, delay);
          delay += 400;
      });

      setCategory();
      setQuestions(currentIndex, "left", "right");

      if (currentStatements === 3) {
          showCourse();
         return;
      }
    
      statements.each(function() {
          var statement = $(this);

          toggleStatementChoice(false, statement);
          setTimeout(function() {
              toggleLoadingScreen(delay, statements.length, "next");
              resetStatements(false);
              toggleCorrectOrder(false);
              setStatements(currentStatements, nextCourses);
              slideEl("right", "show", statement);

              length = $(".statements__statement:visible").length;

              var wrapper = $(statements).closest(".statements__outer");
              wrapper.css("min-height", "100%");
              var wrapperHeight = $(wrapper).outerHeight();
              wrapper.css("min-height", wrapperHeight);
          }, delay);
          delay += 400;
      });
  });

  //	REST CONFIGURATOR POPUP
  $(".config__reset").click(function() {
      var popUp = '<div class="config__popUp"><h3>Konfigurator wirklich neustarten?</h3><div><button id="configResetYes">neustarten</button><button id="configResetNo">abbrechen</button></div>'
      $(".config__wrapper").append(popUp);
      $([document.documentElement, document.body]).animate({
              scrollTop: $(".config__popUp h3").offset().top - 100,
          },
          300
      );
  });

  //  RESET CONFIGURATOR
  $('.config__wrapper').on('click', '#configResetYes', function() {
      var configWrapper = $(".configurator__info");
      var courseWrapper = $(".course__wrapper");
      scrollTopConfig();

      $(".config__popUp").fadeOut().remove();

      toggleLoadingScreen(800, 5, "reset");

      slideEl("right", "hide", courseWrapper);

      setTimeout(function() {
          slideEl("left", "show", configWrapper);
          $("html, body")
              .delay(700)
              .queue(function(reloadPage) {
                  location.reload();
                  reloadPage();
              });
      }, 800);
  });

  //  CLOSE POPUP
  $('.config__wrapper').on('click', '#configResetNo', function() {
      $(".config__popUp").fadeOut().remove();
  });

  //  SHOW LAST QUESTION ON PREV QUESTION CLICK
  $('.questions__wrapper').on('click', '.prevClick', function() {
      var lastIndex = currentIndex - 1;
      var dataSortLastEl = questions[lastIndex].value;
      var lastEl = $(".statements__wrapper").find(".statements__statement[data-sort='" + dataSortLastEl + "']");
      toggleStatementChoice(false, lastEl);
      $(lastEl).attr("data-sort", "").show("drop", {
          direction: "left"
      }, 300).removeClass("set");
      setSteps(lastIndex);
      setQuestions(lastIndex, "right", "left");
      currentIndex = lastIndex;
  });

  $('.config__nav').on('click', '#oneStepBack', function() {
      var lastIndex = currentIndex - 1;
      var dataSortLastEl = questions[lastIndex].value;
      var lastEl = $(".statements__wrapper").find(".statements__statement[data-sort='" + dataSortLastEl + "']");
      toggleStatementChoice(false, lastEl);
      $(lastEl).attr("data-sort", "").show("drop", {
          direction: "left"
      }, 300).removeClass("set");
      setSteps(lastIndex);
      setQuestions(lastIndex, "right", "left");
      currentIndex = lastIndex;
  });

  $(".steps__step").click(function() {
      var step = parseInt($(this).html()) - 1;

      if (currentIndex == length) {
          toggleCorrectOrder(false);
          if ($(".statements__next").is(":visible")) {
              $(".statements__next").fadeOut();
          }
      }

      if (step < currentIndex) {

          var list = [];
          for (var i = step; i <= currentIndex - 1; i++) {
              list.push(i);
          }

          list.reverse();

          $.each(list, function(i, val) {

              var dataSortLastEl = questions[val].value;
              var lastEl = $(".statements__wrapper").find(".statements__statement[data-sort='" + dataSortLastEl + "']");
              var delay = 300;

              toggleStatementChoice(false, lastEl);

              setTimeout(function() {
                  $(lastEl).attr("data-sort", "").show("drop", {
                      direction: "left"
                  }, 290).removeClass("set");
              }, delay);
              delay += 300;
          });

          setSteps(step);
          setQuestions(step, "right", "left");
          currentIndex = step;
      }

  });


  ////////////////////////////////////////////////
  //////////////////  FUNCTIONS   ////////////////
  ////////////////////////////////////////////////

  //    SHOW COURSE
  function showCourse() {
      var configWrapper = $(".configurator__section");
      var courseWrapper = $(".course__wrapper");

      slideEl("left", "hide", configWrapper);
      setTimeout(function() {
          slideEl("right", "show", courseWrapper);
      }, 800);

      courseWrapper.find("h2").text(courseContents[nextCourses].headline);
      courseWrapper.find("h4").text(courseContents[nextCourses].subheadline);
      courseWrapper.find(".course__text").html(courseContents[nextCourses].text);
      courseWrapper.find("a").attr("href", courseContents[nextCourses].link);
  }

  //    SET STEPS
  function setSteps(i) {
      var steps = $(".steps__step");
      var wrapper = $(".steps__wrapper");
      var arrow = $(wrapper).find($(".SVGarrow"));

      if ($(wrapper).hasClass('disabled')) {
          $(wrapper).removeClass('disabled');
      }

      steps.each(function(index) {
          $(this).removeClass("active").removeClass("complete");

          if (index == i) {
              $(this).addClass("active");
          } else if (index < i) {
              $(this).addClass("complete");
          }
      });

      if ($(".steps__step.complete").length) {
          $(arrow).addClass("active").attr('id', 'oneStepBack');
      } else {
          $(arrow).removeClass("active").attr('id', '');
      };

      if (currentIndex == length) {
          $(wrapper).addClass('disabled')
      }
  }

  //    SET QUESTIONS
  function setQuestions(i, dir1, dir2) {
      var prevQuest = $("#questionPrevious");
      var currQuest = $("#questionCurrent");
      var nextQuest = $("#questionNext");

      if (currentStatements == 0) {

          if (i == 0) {
              var currText = questions[i].question;
              var nextText = questions[i + 1].question.substring(0, 19);

              $(".questions__question").animate({
                  opacity: 1
              }, 200);
              $(".questions__question:first-of-type").animate({
                  opacity: 0
              }, 200).removeClass("prevClick");
              $(prevQuest).html("");
              $(currQuest).html(currText);
              $(nextQuest).html(nextText);

              $(currQuest).hide("drop", {
                  direction: dir1
              }, 200).show("drop", {
                  direction: dir2
              }, 200);
              $(nextQuest).hide("drop", {
                  direction: dir1
              }, 200).show("drop", {
                  direction: dir2
              }, 200);

          } else if (i == length - 2) {
              var prevText = questions[i - 1].question.slice(-19);
              var currText = questions[i].question;

              $(prevQuest).html(prevText);
              $(currQuest).html(currText);
              $(nextQuest).html("");
              $(".questions__question:last-of-type").animate({
                  opacity: 0
              }, 200);

              $(prevQuest).hide("drop", {
                  direction: dir1
              }, 200).show("drop", {
                  direction: dir2
              }, 200);
              $(currQuest).hide("drop", {
                  direction: dir1
              }, 200).show("drop", {
                  direction: dir2
              }, 200);
              $(nextQuest).hide("drop", {
                  direction: dir1
              }, 200).show("drop", {
                  direction: dir2
              }, 200);
          } else if (i == length - 1) {


          } else {
              var prevText = questions[i - 1].question.slice(-19);
              var currText = questions[i].question;
              var nextText = questions[i + 1].question.substring(0, 19);

              $(".questions__question:first-of-type").animate({
                  opacity: 1
              }, 200).addClass("prevClick");
              $(".questions__question:last-of-type").animate({
                  opacity: 1
              }, 200);

              $(prevQuest).html(prevText);
              $(currQuest).html(currText);
              $(nextQuest).html(nextText);

              $(prevQuest).hide("drop", {
                  direction: dir1
              }, 200).show("drop", {
                  direction: dir2
              }, 200);
              $(currQuest).hide("drop", {
                  direction: dir1
              }, 200).show("drop", {
                  direction: dir2
              }, 200);
              $(nextQuest).hide("drop", {
                  direction: dir1
              }, 200).show("drop", {
                  direction: dir2
              }, 200);
          }
      } else if (currentStatements == 1) {
          if (i == 0) {
              var currText = questions[i].question;
              var nextText = questions[i].question.substring(0, 19);

              $(".questions__question").animate({
                  opacity: 1
              }, 200);
              $(".questions__question:first-of-type").animate({
                  opacity: 0
              }, 200).removeClass("prevClick");
              $(prevQuest).html("");
              $(currQuest).html(currText);
              $(nextQuest).html(nextText);

              $(currQuest).hide("drop", {
                  direction: dir1
              }, 200).show("drop", {
                  direction: dir2
              }, 200);
              $(nextQuest).hide("drop", {
                  direction: dir1
              }, 200).show("drop", {
                  direction: dir2
              }, 200);

          } else if (i == 1) {
              var prevText = questions[i - 1].question.slice(-19);
              var currText = questions[i].question;

              $(".questions__question:first-of-type").animate({
                  opacity: 1
              }, 200).addClass("prevClick");
              $(prevQuest).html(prevText);
              $(currQuest).html(currText);
              $(nextQuest).html("");
              $(".questions__question:last-of-type").animate({
                  opacity: 0
              }, 200);

              $(prevQuest).hide("drop", {
                  direction: dir1
              }, 200).show("drop", {
                  direction: dir2
              }, 200);
              $(currQuest).hide("drop", {
                  direction: dir1
              }, 200).show("drop", {
                  direction: dir2
              }, 200);
              $(nextQuest).hide("drop", {
                  direction: dir1
              }, 200).show("drop", {
                  direction: dir2
              }, 200);
          } else if (i == 2) {

          }
      } else if (currentStatements == 2) {
          if (i == 0) {
              var currText = questions[i].question;
              var nextText = questions[i].question.substring(0, 19);

              $(".questions__question").animate({
                  opacity: 1
              }, 200);
              $(".questions__question:first-of-type").animate({
                  opacity: 0
              }, 200).removeClass("prevClick");
              $(".questions__question:last-of-type").animate({
                  opacity: 0
              }, 200);

              $(prevQuest).html("");
              $(currQuest).html(currText);
              $(nextQuest).html("");

              $(currQuest).hide("drop", {
                  direction: dir1
              }, 200).show("drop", {
                  direction: dir2
              }, 200);
              $(nextQuest).hide("drop", {
                  direction: dir1
              }, 200).show("drop", {
                  direction: dir2
              }, 200);

          }
      }
  }
  //    SET STATEMENTS
  function setStatements(currentStatements, courses) {
      var statementDivs = $(".statements__statement");
      var statementChoice = $(".statements__statement .statements__choice");

      statementDivs.each(function(i) {
          var course = courses[i];
          var text = statements[currentStatements][course].statement;

          $(this).attr("data-course", course).find(".statements__statement--content").text(text);
      });
  }
  //    TOGGLE STATEMENT CHOICE
  function toggleStatementChoice(show, el) {
      var statementChoice = $(el).find(".statements__choice");

      if (show) {
          var choice = $(el).attr("data-sort");
          var text;

          $.each(questions, function(key, value) {

              if (value.value == choice) {
                  text = value.choice;
              }
          });

          $(statementChoice).fadeIn().text(text);

      } else {
          $(statementChoice).fadeOut().text("");
      }
  }
  //  CLICKED STATEMENTS SLIDE LEFT
  function clickedStatements(element) {
      var nextEl = $(element).nextAll(".statements__statement:visible").first();
      var elHeight = $(element).outerHeight();
      var duration = 300;

      if (element.is(":visible")) {
          element.hide("drop", {
              direction: "left"
          }, duration).addClass("set");

          nextEl.delay(duration).queue(function(animateUp) {
              $(this)
                  .css("margin-top", elHeight)
                  .animate({
                      marginTop: 0
                  }, duration - 100);
              animateUp();
          });
      }

      currentIndex++;

      if (currentIndex === length - 1) {
          setTimeout(function() {
              var lastEl = $(".statements__statement:visible");
              lastEl.trigger("click");
          }, 600);
      }
  }
  // SORT STATEMENTS
  function sortStatements() {
      var wrapper = $(".statements__wrapper");

      wrapper
          .find(".statements__statement")
          .sort(function(a, b) {
              return +a.dataset.sort - +b.dataset.sort;
          })
          .appendTo(wrapper);

      setTimeout(function() {
          var hiddenStatements = $(".statements__statement.set");
          var delay = 400;
          var length = hiddenStatements.length;

          toggleLoadingScreen(delay + 200, length, "sort");

          $(".statements__next").fadeIn();

          hiddenStatements.each(function() {
              var statement = $(this);

              setTimeout(function() {
                  slideEl("left", "show", statement);
              }, delay);
              delay += 400;
          });
      }, 400);
  }
  //  SLICE NUMBER OF STATEMENTS
  function configStatementNumber(slices) {
      var statements = $(".statements__statement");
      statements.slice(slices).detach();
  }
  //  SLICE NUMBER OF STEPS
  function configStepNumber(slices) {
      var statements = $(".steps__step");
      statements.slice(slices).detach();
  }
  //  SET DATA SORT TO CLICKED STATEMENT
  function setDataSort(element) {
      var sort = questions[currentIndex].value;
      element.attr("data-sort", sort);
  }
//  SET CATEGORIE
  function setCategory() {
    var number = $(".category__number");
    var text = $(".category__text");
    var textContent = configCategories[currentStatements];

    number.text(currentStatements + 1);
    text.text(textContent);
  }
  //  SHOW ORDER-CORRECT QUESTION
  function toggleCorrectOrder(show) {
      var box = $(".order__correct");

      if (show) {
          box.fadeIn("slow");
      } else {
          box.fadeOut("fast");
      }
  }
  //  RESET STATEMENTS
  function resetStatements(loading) {
      var hiddenStatements = $(".statements__statement:hidden");
      var delay = 400;

      if (loading) {
          var length = hiddenStatements.length;
          toggleLoadingScreen(delay + 200, length, "reset");
      }

      hiddenStatements.each(function() {
          var statement = $(this);

          statement.attr("data-sort", null);

          setTimeout(function() {
              slideEl("left", "show", statement);
          }, delay);
          delay += 400;
      });

      $(".statements__statement.set").removeClass("set");
      if ($(".statements__next").is(":visible")) {
          $(".statements__next").fadeOut();
      }
      currentIndex = 0;
  }
  //  TOGGLE LOADING SCREEN
  function toggleLoadingScreen(duration, multiply, status) {
      var finalTime = duration * multiply + 100;
      var loadingText = $(".loadScreen").find("h4");
      var text;
      if (currentStatements === 3) {
          text = "Kurs wird erstellt."
      } else {
          if (status == "next") {
              var step = currentStatements + 1;
              text = "Schritt " + step + "/3 wird konfiguriert.";

          } else if (status == "reset") {
              text = "Konfigurator wird zurückgesetzt.";

          } else if (status == "sort") {
              text = "Eingaben werden verarbeitet";
          }
      }

      $(loadingText).text(text);

      $(".loadScreen").fadeIn("fast");
      setTimeout(function() {
          $(".loadScreen").fadeOut();
      }, finalTime);
  }
  //    SLIDE OF
  function slideEl(side, dir, el) {
      if (dir == "show") {
          el.show("drop", {
              direction: side
          }, 600);
      } else if (dir == "hide") {
          el.hide("drop", {
              direction: side
          }, 600);
      }
  }

  //    SCROLL TO TOP OF CONFIG
  function scrollTopConfig() {
      $([document.documentElement, document.body]).animate({
              scrollTop: $("#Konfigurator").offset().top + 100,
          },
          300
      );
  }
}); // jquery end