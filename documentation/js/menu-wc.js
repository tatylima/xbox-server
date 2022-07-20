'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">nestjs-intro documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-aececef2c0a6fea1d0b0602680e96f585590529da45e1082d0b2eb84490cc61dc14dc1f9d8a82ba9ecd7ac70276169d647d75f21938fba7bedc50d4694378a1f"' : 'data-target="#xs-controllers-links-module-AppModule-aececef2c0a6fea1d0b0602680e96f585590529da45e1082d0b2eb84490cc61dc14dc1f9d8a82ba9ecd7ac70276169d647d75f21938fba7bedc50d4694378a1f"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-aececef2c0a6fea1d0b0602680e96f585590529da45e1082d0b2eb84490cc61dc14dc1f9d8a82ba9ecd7ac70276169d647d75f21938fba7bedc50d4694378a1f"' :
                                            'id="xs-controllers-links-module-AppModule-aececef2c0a6fea1d0b0602680e96f585590529da45e1082d0b2eb84490cc61dc14dc1f9d8a82ba9ecd7ac70276169d647d75f21938fba7bedc50d4694378a1f"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-aececef2c0a6fea1d0b0602680e96f585590529da45e1082d0b2eb84490cc61dc14dc1f9d8a82ba9ecd7ac70276169d647d75f21938fba7bedc50d4694378a1f"' : 'data-target="#xs-injectables-links-module-AppModule-aececef2c0a6fea1d0b0602680e96f585590529da45e1082d0b2eb84490cc61dc14dc1f9d8a82ba9ecd7ac70276169d647d75f21938fba7bedc50d4694378a1f"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-aececef2c0a6fea1d0b0602680e96f585590529da45e1082d0b2eb84490cc61dc14dc1f9d8a82ba9ecd7ac70276169d647d75f21938fba7bedc50d4694378a1f"' :
                                        'id="xs-injectables-links-module-AppModule-aececef2c0a6fea1d0b0602680e96f585590529da45e1082d0b2eb84490cc61dc14dc1f9d8a82ba9ecd7ac70276169d647d75f21938fba7bedc50d4694378a1f"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AuthModule-2d22075f0d1e7e24036df2c4d6ee23d51d7d5fa3d4d5afe5b0260ddec27dd79e8b02cb2fb82b41d62d9482058ac8189daba5367276802671b33fd85dc98d9389"' : 'data-target="#xs-controllers-links-module-AuthModule-2d22075f0d1e7e24036df2c4d6ee23d51d7d5fa3d4d5afe5b0260ddec27dd79e8b02cb2fb82b41d62d9482058ac8189daba5367276802671b33fd85dc98d9389"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-2d22075f0d1e7e24036df2c4d6ee23d51d7d5fa3d4d5afe5b0260ddec27dd79e8b02cb2fb82b41d62d9482058ac8189daba5367276802671b33fd85dc98d9389"' :
                                            'id="xs-controllers-links-module-AuthModule-2d22075f0d1e7e24036df2c4d6ee23d51d7d5fa3d4d5afe5b0260ddec27dd79e8b02cb2fb82b41d62d9482058ac8189daba5367276802671b33fd85dc98d9389"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AuthModule-2d22075f0d1e7e24036df2c4d6ee23d51d7d5fa3d4d5afe5b0260ddec27dd79e8b02cb2fb82b41d62d9482058ac8189daba5367276802671b33fd85dc98d9389"' : 'data-target="#xs-injectables-links-module-AuthModule-2d22075f0d1e7e24036df2c4d6ee23d51d7d5fa3d4d5afe5b0260ddec27dd79e8b02cb2fb82b41d62d9482058ac8189daba5367276802671b33fd85dc98d9389"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-2d22075f0d1e7e24036df2c4d6ee23d51d7d5fa3d4d5afe5b0260ddec27dd79e8b02cb2fb82b41d62d9482058ac8189daba5367276802671b33fd85dc98d9389"' :
                                        'id="xs-injectables-links-module-AuthModule-2d22075f0d1e7e24036df2c4d6ee23d51d7d5fa3d4d5afe5b0260ddec27dd79e8b02cb2fb82b41d62d9482058ac8189daba5367276802671b33fd85dc98d9389"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtStrategy</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/GameModule.html" data-type="entity-link" >GameModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-GameModule-2d6c7ffb45c2c9c6352fb585574f1c7e808d288805713e3d6ad007a21926e0f2e34130338c1de847ead5d3856558a30c9e1ba04d7d9506f96f1d2185b24e9304"' : 'data-target="#xs-controllers-links-module-GameModule-2d6c7ffb45c2c9c6352fb585574f1c7e808d288805713e3d6ad007a21926e0f2e34130338c1de847ead5d3856558a30c9e1ba04d7d9506f96f1d2185b24e9304"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-GameModule-2d6c7ffb45c2c9c6352fb585574f1c7e808d288805713e3d6ad007a21926e0f2e34130338c1de847ead5d3856558a30c9e1ba04d7d9506f96f1d2185b24e9304"' :
                                            'id="xs-controllers-links-module-GameModule-2d6c7ffb45c2c9c6352fb585574f1c7e808d288805713e3d6ad007a21926e0f2e34130338c1de847ead5d3856558a30c9e1ba04d7d9506f96f1d2185b24e9304"' }>
                                            <li class="link">
                                                <a href="controllers/GameController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GameController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-GameModule-2d6c7ffb45c2c9c6352fb585574f1c7e808d288805713e3d6ad007a21926e0f2e34130338c1de847ead5d3856558a30c9e1ba04d7d9506f96f1d2185b24e9304"' : 'data-target="#xs-injectables-links-module-GameModule-2d6c7ffb45c2c9c6352fb585574f1c7e808d288805713e3d6ad007a21926e0f2e34130338c1de847ead5d3856558a30c9e1ba04d7d9506f96f1d2185b24e9304"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-GameModule-2d6c7ffb45c2c9c6352fb585574f1c7e808d288805713e3d6ad007a21926e0f2e34130338c1de847ead5d3856558a30c9e1ba04d7d9506f96f1d2185b24e9304"' :
                                        'id="xs-injectables-links-module-GameModule-2d6c7ffb45c2c9c6352fb585574f1c7e808d288805713e3d6ad007a21926e0f2e34130338c1de847ead5d3856558a30c9e1ba04d7d9506f96f1d2185b24e9304"' }>
                                        <li class="link">
                                            <a href="injectables/GameService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GameService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/GenreModule.html" data-type="entity-link" >GenreModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-GenreModule-69113f033cf59feac390dc46ae1fad217e3aa1998c69e6a41715c1985b436cab3e381a7297fb326f175d8d4eb5732436497cbe33476ff7c86029a829f6a2cb4b"' : 'data-target="#xs-controllers-links-module-GenreModule-69113f033cf59feac390dc46ae1fad217e3aa1998c69e6a41715c1985b436cab3e381a7297fb326f175d8d4eb5732436497cbe33476ff7c86029a829f6a2cb4b"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-GenreModule-69113f033cf59feac390dc46ae1fad217e3aa1998c69e6a41715c1985b436cab3e381a7297fb326f175d8d4eb5732436497cbe33476ff7c86029a829f6a2cb4b"' :
                                            'id="xs-controllers-links-module-GenreModule-69113f033cf59feac390dc46ae1fad217e3aa1998c69e6a41715c1985b436cab3e381a7297fb326f175d8d4eb5732436497cbe33476ff7c86029a829f6a2cb4b"' }>
                                            <li class="link">
                                                <a href="controllers/GenreController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GenreController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-GenreModule-69113f033cf59feac390dc46ae1fad217e3aa1998c69e6a41715c1985b436cab3e381a7297fb326f175d8d4eb5732436497cbe33476ff7c86029a829f6a2cb4b"' : 'data-target="#xs-injectables-links-module-GenreModule-69113f033cf59feac390dc46ae1fad217e3aa1998c69e6a41715c1985b436cab3e381a7297fb326f175d8d4eb5732436497cbe33476ff7c86029a829f6a2cb4b"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-GenreModule-69113f033cf59feac390dc46ae1fad217e3aa1998c69e6a41715c1985b436cab3e381a7297fb326f175d8d4eb5732436497cbe33476ff7c86029a829f6a2cb4b"' :
                                        'id="xs-injectables-links-module-GenreModule-69113f033cf59feac390dc46ae1fad217e3aa1998c69e6a41715c1985b436cab3e381a7297fb326f175d8d4eb5732436497cbe33476ff7c86029a829f6a2cb4b"' }>
                                        <li class="link">
                                            <a href="injectables/GenreService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GenreService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomepageModule.html" data-type="entity-link" >HomepageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-HomepageModule-a1cd83068427eb3314cbb06bd90cd1c94f4a22c977a391cfbb1bc6f452a05f4428c6922f3577b0dd0c1468581d1ad2978dc7bcd515d9b8d9abc1e6b928dda9a7"' : 'data-target="#xs-controllers-links-module-HomepageModule-a1cd83068427eb3314cbb06bd90cd1c94f4a22c977a391cfbb1bc6f452a05f4428c6922f3577b0dd0c1468581d1ad2978dc7bcd515d9b8d9abc1e6b928dda9a7"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-HomepageModule-a1cd83068427eb3314cbb06bd90cd1c94f4a22c977a391cfbb1bc6f452a05f4428c6922f3577b0dd0c1468581d1ad2978dc7bcd515d9b8d9abc1e6b928dda9a7"' :
                                            'id="xs-controllers-links-module-HomepageModule-a1cd83068427eb3314cbb06bd90cd1c94f4a22c977a391cfbb1bc6f452a05f4428c6922f3577b0dd0c1468581d1ad2978dc7bcd515d9b8d9abc1e6b928dda9a7"' }>
                                            <li class="link">
                                                <a href="controllers/HomepageController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomepageController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-HomepageModule-a1cd83068427eb3314cbb06bd90cd1c94f4a22c977a391cfbb1bc6f452a05f4428c6922f3577b0dd0c1468581d1ad2978dc7bcd515d9b8d9abc1e6b928dda9a7"' : 'data-target="#xs-injectables-links-module-HomepageModule-a1cd83068427eb3314cbb06bd90cd1c94f4a22c977a391cfbb1bc6f452a05f4428c6922f3577b0dd0c1468581d1ad2978dc7bcd515d9b8d9abc1e6b928dda9a7"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-HomepageModule-a1cd83068427eb3314cbb06bd90cd1c94f4a22c977a391cfbb1bc6f452a05f4428c6922f3577b0dd0c1468581d1ad2978dc7bcd515d9b8d9abc1e6b928dda9a7"' :
                                        'id="xs-injectables-links-module-HomepageModule-a1cd83068427eb3314cbb06bd90cd1c94f4a22c977a391cfbb1bc6f452a05f4428c6922f3577b0dd0c1468581d1ad2978dc7bcd515d9b8d9abc1e6b928dda9a7"' }>
                                        <li class="link">
                                            <a href="injectables/HomepageService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomepageService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PrismaModule.html" data-type="entity-link" >PrismaModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-PrismaModule-21081fefe34b1aff4bfd1dc367951688b81f33e58e7dbccd8e5d3d550554bcf24ea40c655336df8f9a3868a7e65eaae924abb57a9b18e30a8c50d18f1fd718a4"' : 'data-target="#xs-injectables-links-module-PrismaModule-21081fefe34b1aff4bfd1dc367951688b81f33e58e7dbccd8e5d3d550554bcf24ea40c655336df8f9a3868a7e65eaae924abb57a9b18e30a8c50d18f1fd718a4"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PrismaModule-21081fefe34b1aff4bfd1dc367951688b81f33e58e7dbccd8e5d3d550554bcf24ea40c655336df8f9a3868a7e65eaae924abb57a9b18e30a8c50d18f1fd718a4"' :
                                        'id="xs-injectables-links-module-PrismaModule-21081fefe34b1aff4bfd1dc367951688b81f33e58e7dbccd8e5d3d550554bcf24ea40c655336df8f9a3868a7e65eaae924abb57a9b18e30a8c50d18f1fd718a4"' }>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProfileModule.html" data-type="entity-link" >ProfileModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-ProfileModule-264956ca30eda3e9f32cab0f3b3219fa4187f3118166fa9d140e81173f22cee3d5b2f7965a636a29374a17151ad9d3504fd5acb40fb8ef08e25b8f49ea9d35f7"' : 'data-target="#xs-controllers-links-module-ProfileModule-264956ca30eda3e9f32cab0f3b3219fa4187f3118166fa9d140e81173f22cee3d5b2f7965a636a29374a17151ad9d3504fd5acb40fb8ef08e25b8f49ea9d35f7"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ProfileModule-264956ca30eda3e9f32cab0f3b3219fa4187f3118166fa9d140e81173f22cee3d5b2f7965a636a29374a17151ad9d3504fd5acb40fb8ef08e25b8f49ea9d35f7"' :
                                            'id="xs-controllers-links-module-ProfileModule-264956ca30eda3e9f32cab0f3b3219fa4187f3118166fa9d140e81173f22cee3d5b2f7965a636a29374a17151ad9d3504fd5acb40fb8ef08e25b8f49ea9d35f7"' }>
                                            <li class="link">
                                                <a href="controllers/ProfileController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProfileController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ProfileModule-264956ca30eda3e9f32cab0f3b3219fa4187f3118166fa9d140e81173f22cee3d5b2f7965a636a29374a17151ad9d3504fd5acb40fb8ef08e25b8f49ea9d35f7"' : 'data-target="#xs-injectables-links-module-ProfileModule-264956ca30eda3e9f32cab0f3b3219fa4187f3118166fa9d140e81173f22cee3d5b2f7965a636a29374a17151ad9d3504fd5acb40fb8ef08e25b8f49ea9d35f7"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ProfileModule-264956ca30eda3e9f32cab0f3b3219fa4187f3118166fa9d140e81173f22cee3d5b2f7965a636a29374a17151ad9d3504fd5acb40fb8ef08e25b8f49ea9d35f7"' :
                                        'id="xs-injectables-links-module-ProfileModule-264956ca30eda3e9f32cab0f3b3219fa4187f3118166fa9d140e81173f22cee3d5b2f7965a636a29374a17151ad9d3504fd5acb40fb8ef08e25b8f49ea9d35f7"' }>
                                        <li class="link">
                                            <a href="injectables/ProfileService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProfileService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-UserModule-67f11fc8f0c4eb2dff7826594a7d39cbd0a42b5df41a468fd7865f96f29e28aaafd5054bf46321717eac7c5863ff3de73dee7759edc0c1a9a11f2ddb675121c2"' : 'data-target="#xs-controllers-links-module-UserModule-67f11fc8f0c4eb2dff7826594a7d39cbd0a42b5df41a468fd7865f96f29e28aaafd5054bf46321717eac7c5863ff3de73dee7759edc0c1a9a11f2ddb675121c2"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UserModule-67f11fc8f0c4eb2dff7826594a7d39cbd0a42b5df41a468fd7865f96f29e28aaafd5054bf46321717eac7c5863ff3de73dee7759edc0c1a9a11f2ddb675121c2"' :
                                            'id="xs-controllers-links-module-UserModule-67f11fc8f0c4eb2dff7826594a7d39cbd0a42b5df41a468fd7865f96f29e28aaafd5054bf46321717eac7c5863ff3de73dee7759edc0c1a9a11f2ddb675121c2"' }>
                                            <li class="link">
                                                <a href="controllers/UserController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UserModule-67f11fc8f0c4eb2dff7826594a7d39cbd0a42b5df41a468fd7865f96f29e28aaafd5054bf46321717eac7c5863ff3de73dee7759edc0c1a9a11f2ddb675121c2"' : 'data-target="#xs-injectables-links-module-UserModule-67f11fc8f0c4eb2dff7826594a7d39cbd0a42b5df41a468fd7865f96f29e28aaafd5054bf46321717eac7c5863ff3de73dee7759edc0c1a9a11f2ddb675121c2"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserModule-67f11fc8f0c4eb2dff7826594a7d39cbd0a42b5df41a468fd7865f96f29e28aaafd5054bf46321717eac7c5863ff3de73dee7759edc0c1a9a11f2ddb675121c2"' :
                                        'id="xs-injectables-links-module-UserModule-67f11fc8f0c4eb2dff7826594a7d39cbd0a42b5df41a468fd7865f96f29e28aaafd5054bf46321717eac7c5863ff3de73dee7759edc0c1a9a11f2ddb675121c2"' }>
                                        <li class="link">
                                            <a href="injectables/UserService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#controllers-links"' :
                                'data-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AuthController.html" data-type="entity-link" >AuthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/GameController.html" data-type="entity-link" >GameController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/GenreController.html" data-type="entity-link" >GenreController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/HomepageController.html" data-type="entity-link" >HomepageController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/ProfileController.html" data-type="entity-link" >ProfileController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UserController.html" data-type="entity-link" >UserController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreateGameDto.html" data-type="entity-link" >CreateGameDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateGenreDto.html" data-type="entity-link" >CreateGenreDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateProfileDto.html" data-type="entity-link" >CreateProfileDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Game.html" data-type="entity-link" >Game</a>
                            </li>
                            <li class="link">
                                <a href="classes/Genre.html" data-type="entity-link" >Genre</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginDto.html" data-type="entity-link" >LoginDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Profile.html" data-type="entity-link" >Profile</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateGameDto.html" data-type="entity-link" >UpdateGameDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateGenreDto.html" data-type="entity-link" >UpdateGenreDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateProfileDto.html" data-type="entity-link" >UpdateProfileDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserDto.html" data-type="entity-link" >UpdateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link" >User</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GameService.html" data-type="entity-link" >GameService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GenreService.html" data-type="entity-link" >GenreService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HomepageService.html" data-type="entity-link" >HomepageService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtStrategy.html" data-type="entity-link" >JwtStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PrismaService.html" data-type="entity-link" >PrismaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProfileService.html" data-type="entity-link" >ProfileService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link" >UserService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});