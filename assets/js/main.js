window.addEventListener('scroll', e => {
    /*********** trainers section painting ************/
    let screenPosition = window.innerHeight / 1.25;
    let screenPositionForFooter = window.innerHeight / 0.5;

    const $trainersglovesImg = document.querySelector('.trainers__gloves');
    const $trainersHeading = document.querySelector('.trainers__titles_heading');
    const $trainersSubheading = document.querySelector('.trainers__titles_subheading');
    const $trainersStars = document.querySelector('.trainers__stars');
    const $trainer1Photo = document.querySelector('.trainer1 .trainer__photo');
    const $trainer1Info = document.querySelector('.trainer1 .trainer__info');

    let trainer1PhotoPosition = $trainer1Photo.getBoundingClientRect().top;

    if(trainer1PhotoPosition < screenPosition) {
        setTimeout(() => {
            $trainersglovesImg.classList.add('visible');
            $trainersglovesImg.classList.remove('invisible');
        }, 0);
        setTimeout(() => {
            $trainersHeading.classList.add('visible');
            $trainersHeading.classList.remove('invisible');
        }, 300);
        setTimeout(() => {
            $trainersSubheading.classList.add('visible');
            $trainersSubheading.classList.remove('invisible');
        }, 600);
        setTimeout(() => {
            $trainersStars.classList.add('visible');
            $trainersStars.classList.remove('invisible');
        }, 900);
        setTimeout(() => {
            $trainer1Photo.classList.add('visible');
            $trainer1Photo.classList.remove('invisible');
        }, 1200);
        setTimeout(() => {
            for(let i = 0; i < $trainer1Info.children.length; i++) {
                $trainer1Info.children[i].classList.add('visible');
                $trainer1Info.children[i].classList.remove('invisible');
            }
        }, 1500);
    }

    const $trainersSeparator = document.querySelector('.trainers__separator');
    const $trainer2Info = document.querySelector('.trainer2 .trainer__info');
    const $trainer2Photo = document.querySelector('.trainer2 .trainer__photo');

    let trainersSeparatorPosition = $trainersSeparator.getBoundingClientRect().top;


    if(trainersSeparatorPosition < screenPosition) {
        setTimeout(() => {
            $trainersSeparator.classList.remove('width0');
        }, 0);
        setTimeout(() => {
            $trainersSeparator.classList.remove('height0');          
        }, 400);
        setTimeout(() => {
            $trainer2Info.classList.add('visible');
            $trainer2Info.classList.remove('invisible');
        }, 700);
        setTimeout(() => {
            $trainer2Photo.classList.add('visible');
            $trainer2Photo.classList.remove('invisible');
        }, 1000);
    }

    /************** section schedule painting **************/
    const $scheduleContent = document.querySelector('.schedule__content');
    const $scheduleHeading = document.querySelector('.schedule__heading');
    const $schedulePlan1 = document.querySelector('.plan1');
    const $schedulePlan2 = document.querySelector('.plan2');
    const $schedulePlan3 = document.querySelector('.plan3');
    const $schedulePlan4 = document.querySelector('.plan4');

    let scheduleContentPosition = $scheduleContent.getBoundingClientRect().top;

    if(scheduleContentPosition < screenPosition) {
        setTimeout(() => {
            $scheduleContent.classList.add('visible');
            $scheduleContent.classList.remove('invisible');
        }, 0);
        setTimeout(() => {
            $scheduleHeading.classList.add('visible');
            $scheduleHeading.classList.remove('invisible');
        }, 300);
        setTimeout(() => {
            $schedulePlan1.classList.add('visible');
            $schedulePlan1.classList.remove('invisible');
        }, 600);
        setTimeout(() => {
            $schedulePlan2.classList.add('visible');
            $schedulePlan2.classList.remove('invisible');
        }, 900);
        setTimeout(() => {
            $schedulePlan3.classList.add('visible');
            $schedulePlan3.classList.remove('invisible');
        }, 1200);
        setTimeout(() => {
            $schedulePlan4.classList.add('visible');
            $schedulePlan4.classList.remove('invisible');
        }, 1500);
    }

    /*********** section members painting ***********/
    const $member1Photo = document.querySelector('.member1__photo');
    const $member2Photo = document.querySelector('.member2__photo');
    const $membersSeparator = document.querySelector('.members__separator');

    let member1PhotoPosition = $member1Photo.getBoundingClientRect().top;

    if(member1PhotoPosition < screenPosition) {
        setTimeout(() => {
            $member1Photo.classList.add('visible');
            $member1Photo.classList.remove('invisible');
        }, 0);
        setTimeout(() => {
            $member2Photo.classList.add('visible');
            $member2Photo.classList.remove('invisible');
        }, 300);
        setTimeout(() => {
            $membersSeparator.classList.remove('members__sep_width0');
        }, 600);
        setTimeout(() => {
            $membersSeparator.classList.remove('members__sep_height0');
        }, 1000);
    }
});
