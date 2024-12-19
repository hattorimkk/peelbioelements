const sectionsContainer = document.getElementById('sections-container');

const data = {
    "Peel Enzyme": {
        "Da nhạy cảm, dễ tổn thương": [
            "1w Enzym Therapy",
            "1w Emergency Soothing Power",
            "1w Softening Gel"
        ],
        "Da đã quen với enzyme": [
            "2w Enzyme Therapy",
            "Softening Gel"
        ],
        "Da khỏe, nhiều vấn đề": [
            "2w Tripple Corrective Enzyme"
        ],
        "Da nam dày sừng": [
            "2w Tripple Corrective Enzyme",
            "Herbel Grains Retexturizer"
        ]
    },
    "Peel Hóa Học": {
        "Da nhạy cảm, kích ứng với Glycolic": [
            "Lactic Peel Level 1"
        ],
        "Da thường, đã quen với peel hóa học": [
            "Glycolic Peel Level 2"
        ],
        "Da khỏe, nhiều vấn đề": [
            "Glycolic Peel Level 3"
        ],
        "Sáng da cho da nhạy cảm": [
            "Lactic Peel Level 1",
            "Tripple Corrective Enzyme"
        ],
        "Thao tác lấy mụn mặt, lưng": [
            "Lactic Peel Level 1",
            "Peel Prep Lipid Eraser"
        ],
        "Sáng da hơn nữa": [
            "Glyolic Peel Level 2",
            "Tripple Corrective Enzym"
        ]
    },
    "Làm Dịu": {
        "Trung hòa peel": [
            "Softening gel"
        ],
        "Sau peel enzym": [
            "Softening gel"
        ],
        "Sau peel hóa học": [
            "Softening gel",
            "Emergency Powder"
        ],
    },
    "Đặc trị" : {
        "Da mụn" : [
        "Oxygen Treatment Pro"
        ],
        "Da dày sừng, sẫm màu" : [
            "Oxygen Treatment Pro",
            "Herbel Grains Retexturizer"
        ],
        "Lão hóa":[
            "VC10 Pro Bright"
        ],
        "Tăng sắc tố sau viêm": [
            "VC10 Pro Bright"
        ],
        "Nám, tàn nhang":[
            "VC10 Pro Bright",
            "Herbel Grains Retexturizer"
        ]
    },
    "Mặt Nạ Chuyên Sâu": {
        "Thải độc": [
            "Advanced VitaMineral Deep Detox Mask"
        ],
        "Lão hóa, mỏi": [
            "Collagen Rehab"
        ],
        "Khô": [
            "Gel Therapy"
        ],
        "Trẻ hóa, nâng cơ": [
            "Firmamint"
        ],
        "Xỉn màu": [
            "Kerafale"
        ],
        "Rất khô, lão hóa": [
            "Ultra Rich Crème Therapy"
        ],
        "Xỉn màu, da khỏe": [
            "1w Tripple Corrective Enzyme",
            "Kerafole",
            "Oxygen Boost Barrier Treatment"
        ],
        "Khuỷu tay, đầu gối sẫm màu": [
            "1w Tripple Corrective Enzyme",
            "1b Kerafole"
        ],
    },
    "Tinh Chất": {
        "Nếp nhăn, lão hóa": [
            "Age architect"
        ],
        "Thâm sau mụn": [
            "Age architect"
        ],
        "Da khô, mất nước, bong tróc": [
            "Deeper Hydration"
        ],
        "Xỉn màu": [
            "Deeper Hydration"
        ],
        "Sần sùi, thô ráp": [
            "Deeper Hydration"
        ],
        "Nhạy cảm, mẫn đỏ": [
            "Deeper Hydration"
        ],
        "Mụn": [
            "Inflammation Inhibitor"
        ],
        "Bít tắc lỗ chân lông": [
            "Inflammation Inhibitor"
        ],
        "Dị ứng, mẫn đỏ": [
            "Inflammation Inhibitor"
        ]
    },
    "Kem Dưỡng": {
        "Da khô": [
            "Crucial Moisture"
        ],
        "Da hỗn hợp": [
            "Absolute Moisture"
        ],
        "Da dầu": [
            "Beyond Hydration"
        ],
        "Da nhạy cảm": [
            "Barrier Fix Daily Hydration"
        ]
    }
};

function createSection(therapy, conditions) {
    const section = document.createElement('div');
    section.classList.add('section');

    const sectionTitle = document.createElement('h2');
    sectionTitle.classList.add('section-title');
    sectionTitle.textContent = therapy;
    section.appendChild(sectionTitle);

    const conditionSelect = document.createElement('select');
    conditionSelect.id = `condition-select-${therapy}`;

    // Add an empty option at the beginning of the select element
    const emptyOption = document.createElement('option');
    emptyOption.value = '';
    emptyOption.text = 'Chọn tình trạng da';
    emptyOption.selected = true;
    conditionSelect.add(emptyOption);

    for (const condition in conditions) {
        const option = document.createElement('option');
        option.value = condition;
        option.text = condition;
        conditionSelect.add(option);
    }

    section.appendChild(conditionSelect);

    const conditionSolutionPair = document.createElement('div');
    conditionSolutionPair.classList.add('condition-solution-pair');

    const conditionDiv = document.createElement('div');
    conditionDiv.classList.add('condition-select');
    conditionSolutionPair.appendChild(conditionDiv);
    conditionDiv.appendChild(conditionSelect);

    const solutionDiv = document.createElement('div');
    solutionDiv.classList.add('solution');
    solutionDiv.id = `solution-${therapy}`;
    solutionDiv.textContent = "Hãy chọn tình trạng da"; // Default text
    if (Array.isArray(conditions[conditionSelect.value])) {
        // Tạo một thẻ <p> cho mỗi dòng
        conditions[conditionSelect.value].forEach(line => {
            const p = document.createElement('p');
            p.textContent = line;
            solutionDiv.appendChild(p);
        });
    } else {
        solutionDiv.textContent = conditions[conditionSelect.value] || "Hãy chọn tình trạng da";
    }
    conditionSolutionPair.appendChild(solutionDiv);

    section.appendChild(conditionSolutionPair);

    // Add event listener to update solution when condition changes
    conditionSelect.addEventListener('change', () => {
        const selectedCondition = conditionSelect.value;
        const solutionDiv = document.getElementById(`solution-${therapy}`);
        solutionDiv.innerHTML = '';
        if (selectedCondition === "") {
            const p = document.createElement('p');
            p.textContent = "Hãy chọn tình trạng da";
            solutionDiv.appendChild(p);
        } else {
            if (Array.isArray(conditions[selectedCondition])) {
                conditions[selectedCondition].forEach(line => {
                    const p = document.createElement('p');
                    p.textContent = line;
                    solutionDiv.appendChild(p);
                });
            } else {
                solutionDiv.textContent = conditions[selectedCondition] || "Đang cập nhật";
            }
        }
    });

    return section;
}

function loadSections() {
    for (const therapy in data) {
        const section = createSection(therapy, data[therapy]);
        sectionsContainer.appendChild(section);
    }
}

// Load sections on page load
loadSections();